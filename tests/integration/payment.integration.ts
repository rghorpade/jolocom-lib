import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import {
  userPass,
  servicePass,
  userVault
} from './integration.data'
import {
  userIdentityWallet,
  serviceIdentityWallet,
  jolocomRegistry, testContractsGateway
} from './identity.integration'
import { publicKeyToAddress } from '../../ts/utils/helper'
import { KeyTypes } from '../../ts/vaultedKeyProvider/types'
import { PaymentRequest } from '../../ts/interactionTokens/paymentRequest'
import { JSONWebToken } from '../../ts/interactionTokens/JSONWebToken'
import { PaymentResponse } from '../../ts/interactionTokens/paymentResponse'
import {IPaymentRequestAttrs} from '../../ts/interactionTokens/interactionTokens.types'

chai.use(sinonChai)
const expect = chai.expect

describe('Integration Test - EXPERIMENTAL Token interaction flow Payment', () => {
  let paymentRequestJWT
  let paymentRequestEncoded
  let paymentResponseJWT
  let paymentResponseEncoded

  it('Should create a payment request token by service', async () => {
    // TODO if TO not provided, default to address from Identity Wallet
    const paymentReqCreationArgs: IPaymentRequestAttrs = {
      callbackURL: 'https://awesomeservice.com/payment/pending',
      description: 'Payment for monthly subscription to awesome service',
      transactionOptions: {
        to: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        value: 0.5e18, // 0.5 Ether in Wei
      }
    }

    paymentRequestJWT = await serviceIdentityWallet.create.interactionTokens.request.payment(
      paymentReqCreationArgs,
      servicePass
    )

    paymentRequestEncoded = paymentRequestJWT.encode()

    expect(paymentRequestJWT).to.be.instanceOf(JSONWebToken)
    expect(paymentRequestJWT.interactionToken).to.be.instanceOf(PaymentRequest)
    expect(paymentRequestJWT.interactionToken).to.deep.equal(
      PaymentRequest.fromJSON(paymentReqCreationArgs)
    )
  })

  it('Should allow for consumption of valid payment request by user', async () => {
    const decodedPaymentRequest = JSONWebToken.decode<PaymentRequest>(
      paymentRequestEncoded
    )

    expect(decodedPaymentRequest.interactionToken).to.be.instanceOf(
      PaymentRequest
    )

    try {
      await serviceIdentityWallet.validateJWT(
        decodedPaymentRequest,
        null,
        jolocomRegistry
      )
    } catch (err) {
      expect(true).to.be.false
    }
  })

  it('Should create a payment response by user', async () => {
    const decodedPaymentRequest = JSONWebToken.decode<PaymentRequest>(
      paymentRequestEncoded
    )

    const receipt = await userIdentityWallet.transactions.sendTransaction(
      decodedPaymentRequest.interactionToken,
      userPass
    )

    expect(receipt.length).to.equal(66)
    expect(receipt.substring(0, 2)).to.equal('0x')

    paymentResponseJWT = await userIdentityWallet.create.interactionTokens.response.payment(
      { txHash: receipt },
      userPass,
      decodedPaymentRequest
    )

    paymentResponseEncoded = paymentResponseJWT.encode()

    expect(paymentResponseJWT.interactionToken).to.be.instanceOf(PaymentResponse)
    expect(paymentResponseJWT.interactionToken.txHash).to.equal(receipt)
  })

  it('Should allow for consumption of valid payment response by service', async () => {
    const decodedPaymentResponse = JSONWebToken.decode<PaymentResponse>(
      paymentResponseEncoded
    )
    expect(decodedPaymentResponse.interactionToken).to.be.instanceOf(
      PaymentResponse
    )

    try {
      await serviceIdentityWallet.validateJWT(
        decodedPaymentResponse,
        paymentRequestJWT,
        jolocomRegistry
      )
    } catch (err) {
      console.log('ERROR: ', err)
      expect(true).to.be.false
    }
  })

  it('Should transfer the funds and correctly increment the nonce', async () => {
    const userAddr = publicKeyToAddress(userVault.getPublicKey({
      derivationPath: KeyTypes.ethereumKey,
      encryptionPass: userPass
    }))

    const receiverInfo = await testContractsGateway.getAddressInfo('0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    const senderInfo = await testContractsGateway.getAddressInfo(userAddr)

    expect(senderInfo.nonce).to.equal(2)
    expect(senderInfo.balance.toString()).to.eq('497601680000000000')

    expect(receiverInfo.nonce).to.equal(0)
    expect(receiverInfo.balance.toString()).to.eq('500000000000000000')
  })
})
