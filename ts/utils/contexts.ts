import { JsonLdObject } from '../validation/jsonLdValidator'

export type JsonLdContext = string | JsonLdObject | Array<string | JsonLdObject>

const commonCustomTerms = {
  EcdsaKoblitzSignature2016: 'sec:EcdsaKoblitzSignature2016',
}

const identityCustomTerms = {
  xsd: 'http://www.w3.org/2001/XMLSchema#',
  sec: 'https://w3id.org/security#',
  schema: 'http://schema.org/',
  didv: 'https://w3id.org/did#',
  publicKeyHex: 'sec:publicKeyHex',
  updated: { '@id': 'didv:updated', '@type': 'xsd:dateTime' },
  specVersion: 'schema:version',
  Secp256k1VerificationKey2018: 'sec:Secp256k1VerificationKey2018',
  JolocomPublicProfile: 'https://identity.jolocom.com/terms/PublicProfile',
}

const credentialCustomTerms = {
  cred: 'https://w3id.org/credentials#',
  claim: { '@id': 'cred:claim', '@type': '@id' },
  Credential: 'cred:Credential',
  issuer: { '@id': 'cred:issuer', '@type': '@id' },
  issued: { '@id': 'cred:issued', '@type': 'xsd:dateTime' },
}

export const identityContextMap = {
  // specMandated: ['https://www.w3.org/2019/did/v1'],
  specMandated: [],
  published: ['https://w3id.org/did/v0.11', 'https://w3id.org/did/v1'],
  extendedDefinitions: [commonCustomTerms, identityCustomTerms],
}

export const didDocumentContext = identityContextMap.specMandated
  .concat(identityContextMap.published)
  .concat(identityContextMap.extendedDefinitions)

export const credentialContextMap = {
  specMandated: [],
  published: ['https://w3id.org/did/v0.11', 'https://w3id.org/did/v1'],
  extendedDefinitions: [commonCustomTerms, credentialCustomTerms],
}

export const signedCredentialContext = credentialContextMap.specMandated
  .concat(credentialContextMap.published)
  .concat(credentialContextMap.extendedDefinitions)

// export const locallyCachedContexts = {
//   'https://www.w3.org/2019/did/v1': {},
//   'https://w3id.org/did/v0.11': {
//     '@version': 1.1,
//     id: '@id',
//     type: '@type',
//
//     dc: 'http://purl.org/dc/terms/',
//     schema: 'http://schema.org/',
//     sec: 'https://w3id.org/security#',
//     didv: 'https://w3id.org/did#',
//     xsd: 'http://www.w3.org/2001/XMLSchema#',
//
//     EcdsaSecp256k1Signature2019: 'sec:EcdsaSecp256k1Signature2019',
//     EcdsaSecp256k1VerificationKey2019: 'sec:EcdsaSecp256k1VerificationKey2019',
//     Ed25519Signature2018: 'sec:Ed25519Signature2018',
//     Ed25519VerificationKey2018: 'sec:Ed25519VerificationKey2018',
//     RsaSignature2018: 'sec:RsaSignature2018',
//     RsaVerificationKey2018: 'sec:RsaVerificationKey2018',
//     SchnorrSecp256k1Signature2019: 'sec:SchnorrSecp256k1Signature2019',
//     SchnorrSecp256k1VerificationKey2019:
//       'sec:SchnorrSecp256k1VerificationKey2019',
//     ServiceEndpointProxyService: 'didv:ServiceEndpointProxyService',
//
//     allowedAction: 'sec:allowedAction',
//     assertionMethod: {
//       '@id': 'sec:assertionMethod',
//       '@type': '@id',
//       '@container': '@set',
//     },
//     authentication: {
//       '@id': 'sec:authenticationMethod',
//       '@type': '@id',
//       '@container': '@set',
//     },
//     capability: { '@id': 'sec:capability', '@type': '@id' },
//     capabilityAction: 'sec:capabilityAction',
//     capabilityChain: {
//       '@id': 'sec:capabilityChain',
//       '@type': '@id',
//       '@container': '@list',
//     },
//     capabilityDelegation: {
//       '@id': 'sec:capabilityDelegationMethod',
//       '@type': '@id',
//       '@container': '@set',
//     },
//     capabilityInvocation: {
//       '@id': 'sec:capabilityInvocationMethod',
//       '@type': '@id',
//       '@container': '@set',
//     },
//     capabilityStatusList: { '@id': 'sec:capabilityStatusList', '@type': '@id' },
//     canonicalizationAlgorithm: 'sec:canonicalizationAlgorithm',
//     caveat: { '@id': 'sec:caveat', '@type': '@id', '@container': '@set' },
//     challenge: 'sec:challenge',
//     controller: { '@id': 'sec:controller', '@type': '@id' },
//     created: { '@id': 'dc:created', '@type': 'xsd:dateTime' },
//     creator: { '@id': 'dc:creator', '@type': '@id' },
//     delegator: { '@id': 'sec:delegator', '@type': '@id' },
//     domain: 'sec:domain',
//     expirationDate: { '@id': 'sec:expiration', '@type': 'xsd:dateTime' },
//     invocationTarget: { '@id': 'sec:invocationTarget', '@type': '@id' },
//     invoker: { '@id': 'sec:invoker', '@type': '@id' },
//     jws: 'sec:jws',
//     keyAgreement: {
//       '@id': 'sec:keyAgreementMethod',
//       '@type': '@id',
//       '@container': '@set',
//     },
//     nonce: 'sec:nonce',
//     owner: { '@id': 'sec:owner', '@type': '@id' },
//     proof: { '@id': 'sec:proof', '@type': '@id', '@container': '@graph' },
//     proofPurpose: { '@id': 'sec:proofPurpose', '@type': '@vocab' },
//     proofValue: 'sec:proofValue',
//     publicKey: { '@id': 'sec:publicKey', '@type': '@id', '@container': '@set' },
//     publicKeyBase58: 'sec:publicKeyBase58',
//     publicKeyPem: 'sec:publicKeyPem',
//     revoked: { '@id': 'sec:revoked', '@type': 'xsd:dateTime' },
//     service: { '@id': 'didv:service', '@type': '@id', '@container': '@set' },
//     serviceEndpoint: { '@id': 'didv:serviceEndpoint', '@type': '@id' },
//     verificationMethod: { '@id': 'sec:verificationMethod', '@type': '@id' },
//   },
// }
