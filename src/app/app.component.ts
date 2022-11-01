// get resend OTP, Submit Functions 
// test all the APIs 
import { Component, OnInit } from '@angular/core';
import { OtpService } from './otp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  constructor(
    private otpService:OtpService
  ){}

  ngOnInit(): void {
    
    this.detectOTP();
  }
  sendOTP() {
    let request={
      "originator": "SignOTP",
      "recipient": "+918639698805",
      "content": "Your OTP is {}  @web-otp.glitch.me #{}",
      "expiry": "600",
      "data_coding": "text"
    }
    var token='';
    var rapidHost='';
    var rapidKey='';
    var contentType=''
    OtpService.getOTPService().generateOTP(token,rapidHost,rapidKey,contentType).then((response:any)=>{
      console.log(response);
    })
  }
  resendOTP() {

  }
  onSubmit() {

  }
  detectOTP() {
    if ('OTPCredential' in window) {
      window.addEventListener('DOMContentLoaded', e => {
        const input = document.querySelector('input[autocomplete="one-time-code"]');
        if (!input) return;
        const ac = new AbortController();
        const form = input.closest('form');
        if (form) {
          form.addEventListener('submit', e => {
            ac.abort();
          });
        }
        var reqObj={
          otp: { transport:['sms'] },
          signal: ac.signal
        };
        navigator.credentials.get(reqObj).then((otp:any) => {
          input.innerHTML = otp.code;
          if (form) form.submit();
        }).catch(err => {
          console.log(err);
        });
      });
    }
  }
  title = 'testotp';
}
