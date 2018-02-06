export default {
  randomStringFromEntropy: '13912643311766764847120568039921',
  testPublicKeyHex: '030c77073c06824b413c2e08bf5fd271cfa3fdd4632ec6e8869b53e5c79395b868',
  testUserPublicKey: '04334f990cdc1281c6fed73dcc6de3db520c075a41ce2b93f36f85dbd5e0dc0b05975c51acb0bec9747fb3f52fd0146d1dc39d6077db0be1bd6579fd66ac144442',
  testUserDID:'did:jolo:0xf334484858571199b681f6dfdd9ecd2f01df5b38f8379b3aaa89436c61fd1955',
  expectedDdoObject: {
    '@context': 'https://w3id.org/did/v1',
    id:'did:jolo:0x28434a594dc0f9885dcbc797dc34f993f7dda463fc21d333c797dd5e75d7845f',
    authenticationCredential:{
      id:'did:jolo:0x28434a594dc0f9885dcbc797dc34f993f7dda463fc21d333c797dd5e75d7845f#keys/generic/1',
      'type':['CryptographicKey','EcDsaSAKey'],
      owner:'did:jolo:0x28434a594dc0f9885dcbc797dc34f993f7dda463fc21d333c797dd5e75d7845f',
      curve:'secp256k1',
      publicKeyBase64:'Awx3BzwGgktBPC4Iv1/Scc+j/dRjLsbohptT5ceTlbho'
    },
      created:'2018-01-24T15:42:15.882Z'
  },
  expectedDdoJson: '{' +
    '"@context":"https://w3id.org/did/v1",' +
    '"id":"did:jolo:0x28434a594dc0f9885dcbc797dc34f993f7dda463fc21d333c797dd5e75d7845f",' +
    '"authenticationCredential":{' +
      '"id":"did:jolo:0x28434a594dc0f9885dcbc797dc34f993f7dda463fc21d333c797dd5e75d7845f#keys/generic/1",' +
      '"type":["CryptographicKey","EcDsaSAKey"],' +
      '"owner":"did:jolo:0x28434a594dc0f9885dcbc797dc34f993f7dda463fc21d333c797dd5e75d7845f",' +
      '"curve":"secp256k1",' +
      '"publicKeyBase64":"Awx3BzwGgktBPC4Iv1/Scc+j/dRjLsbohptT5ceTlbho"' +
    '},' +
      '"created":"2018-01-24T15:42:15.882Z"' +
  '}'
}
