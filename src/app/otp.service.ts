import { Injectable } from '@angular/core';
import { BaseService, GET, Header, POST, ServiceBuilder } from 'ts-retrofit';
@Injectable({
  providedIn: 'root'
})
export class OtpService extends BaseService{

  private static otpApiService=new ServiceBuilder().setEndpoint('https://d7-verify.p.rapidapi.com/').build(OtpService);

  public static getOTPService(){
    return this.otpApiService;
  }

  @GET('/messages/v1/balance')
  async checkBalance():Promise<Response> {
    return <Response>{};
  }

  @POST('/verify/v1/otp/send-otp')
  async generateOTP(
    @Header('Token')token:string,
    @Header('X-RapidAPI-Host')rapidHost:string,
    @Header('X-RapidAPI-Key')rapidKey:string,
    @Header('content-type')contentType:string
  ):Promise<Response> {
    return <Response>{};
  }

  @POST('/verify/v1/otp/resend-otp')
  async resendOTP():Promise<Response> {
    return <Response>{};
  }

  @POST('/verify/v1/otp/verify-otp')
  async verifyOTP():Promise<Response> {
    return <Response>{};
  }
}
