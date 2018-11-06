import { simpleCredRequestJSON } from './credentialRequest.data'
import { mockKeyId } from '../didDocument.data'

/* Credential request wrapped in signed JWT*/

export const signedSimpleCredReqJWT = {
  header: { typ: 'JWT', alg: 'ES256K' },
  payload: {
    iat: 0,
    exp: 3600000,
    interactionToken: simpleCredRequestJSON,
    iss: mockKeyId,
    typ: 'credentialRequest',
  },
  signature:
    '4fe903a33015a63a6d6e8a1054584e54b9f6e7ffea5ab196f940c29b7ffa14ef18a19af87c4d848db5dfa6d70e3a4d9b194da83e7eeaa3db0602e9d2d65c53d6',
}

/* Same credential request in base64 encoded form */

export const encodedSimpleCredReqJWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjAsImV4cCI6MzYwMDAwMCwiaW50ZXJhY3Rpb25Ub2tlbiI6eyJjcmVkZW50aWFsUmVxdWlyZW1lbnRzIjpbeyJ0eXBlIjpbIkNyZWRlbnRpYWwiLCJQcm9vZk9mRW1haWxDcmVkZW50aWFsIl0sImNvbnN0cmFpbnRzIjpbeyI9PSI6W3sidmFyIjoiaXNzdWVyIn0sImRpZDpqb2xvOmFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWEiXX1dfV0sImNhbGxiYWNrVVJMIjoiaHR0cDovL3Rlc3QuY29tIn0sImlzcyI6ImRpZDpqb2xvOmIyZDVkOGQ2Y2MxNDAwMzM0MTliNTRhMjM3YTVkYjUxNzEwNDM5ZjlmNDYyZDFmYzk4ZjY5OGVjYTdjZTk3Nzcja2V5cy0xIiwidHlwIjoiY3JlZGVudGlhbFJlcXVlc3QifQ.4fe903a33015a63a6d6e8a1054584e54b9f6e7ffea5ab196f940c29b7ffa14ef18a19af87c4d848db5dfa6d70e3a4d9b194da83e7eeaa3db0602e9d2d65c53d6'

export const hashedSimpleCredReqJWT = '7a328970ddf85cd95d4ecf284a8898cb58faaf9d033a45ec84147937bb934177'