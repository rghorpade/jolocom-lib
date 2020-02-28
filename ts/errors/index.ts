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
}
