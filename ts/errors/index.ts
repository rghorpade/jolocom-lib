export enum ErrorCodes {
  Unknown = 'Unknown',
  RegistryCommitFailed = 'RegistryCommitFailed',
  RegistryDIDNotAnchored = 'DIDNotAnchored',
  RegistryResolveFailed = 'RegistryResolveFailed',
  JWTInvalidExpiryDate = 'JWTInvalidExpiryDate',
  JWTIncomplete = 'JWTIncomplete',
  JWTInvalidInteractionType = 'JWTInvalidInteractionType',
  IPFSUnpinFailed = 'IPFSUnpinFailed',
  IPFSInvalidJSONFormat = 'IPFSInvalidJSONFormat',
  RecoveryInvalidSecret = 'RecoveryInvalidSecret',
  SKPEncryptedSeedInvalidLength = 'SKPEncryptedSeedInvalidLength',
  SKPMnemonicInvalid = 'SKPMnemonicInvalid',
  SKPDecryptionInvalidKey = 'SKPDecryptionInvalidKey',
  PublicKeyNotFound = 'PublicKeyNotFound',
  IDWInvalidCreationArgs = 'IDWInvalidCreationArgs',
  IDWInvalidJWTSignature = 'IDWInvalidJWTSignature',
  IDWNotIntendedAudience = 'IDWNotIntendedAudience',
  IDWIncorrectJWTNonce = 'IDWIncorrectJWTNonce',
  IDWTokenExpired = 'IDWTokenExpired',
  VCInvalidExpiryDate = 'VCInvalidExpiryDate',
}
