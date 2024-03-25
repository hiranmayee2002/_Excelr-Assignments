// Code generated by connect-kotlin. DO NOT EDIT.
//
// Source: gitpod/v1/verification.proto
//
package io.gitpod.publicapi.v1

import com.connectrpc.Headers
import com.connectrpc.MethodSpec
import com.connectrpc.ProtocolClientInterface
import com.connectrpc.ResponseMessage
import com.connectrpc.StreamType

public class VerificationServiceClient(
  private val client: ProtocolClientInterface,
) : VerificationServiceClientInterface {
  /**
   *  SendPhoneNumberVerificationToken sends a verification token to the
   *  specified phone number.
   */
  override suspend
      fun sendPhoneNumberVerificationToken(request: Verification.SendPhoneNumberVerificationTokenRequest,
      headers: Headers): ResponseMessage<Verification.SendPhoneNumberVerificationTokenResponse> =
      client.unary(
    request,
    headers,
    MethodSpec(
    "gitpod.v1.VerificationService/SendPhoneNumberVerificationToken",
      io.gitpod.publicapi.v1.Verification.SendPhoneNumberVerificationTokenRequest::class,
      io.gitpod.publicapi.v1.Verification.SendPhoneNumberVerificationTokenResponse::class,
      StreamType.UNARY,
    ),
  )


  /**
   *  VerifyPhoneNumberVerificationToken verifies the specified verification
   *  token.
   */
  override suspend
      fun verifyPhoneNumberVerificationToken(request: Verification.VerifyPhoneNumberVerificationTokenRequest,
      headers: Headers): ResponseMessage<Verification.VerifyPhoneNumberVerificationTokenResponse> =
      client.unary(
    request,
    headers,
    MethodSpec(
    "gitpod.v1.VerificationService/VerifyPhoneNumberVerificationToken",
      io.gitpod.publicapi.v1.Verification.VerifyPhoneNumberVerificationTokenRequest::class,
      io.gitpod.publicapi.v1.Verification.VerifyPhoneNumberVerificationTokenResponse::class,
      StreamType.UNARY,
    ),
  )

}