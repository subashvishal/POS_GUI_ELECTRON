import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './login.service';
import { MessageService } from 'primeng/api';
import { RestAPIService } from '../shared-services/restAPI.service';
import { AuthService } from '../shared-services/auth.service';
import { StatusMessage } from '../Const/Messages';
import { PathConstants } from '../const/PathConstants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  className: string;
  loginForm: FormGroup;
  roleId: number;
  godownCode: any;
  regionCode: any;
  godownName: any;
  regionName: any;
  openPanel: boolean;
  userName: string;
  password: any;
  isChecked: boolean;
  form: any = [];
  mappingId: any;
  mappingName: any;
  showPswd: boolean = false;
  @Output() loggingIn = new EventEmitter<boolean>();
  @ViewChild('pswd', { static: false }) pInput: ElementRef;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService,
    private restApiService: RestAPIService, private loginService: LoginService,
    private messageService: MessageService) {

  }

  ngOnInit() {
    this.className = 'login';
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      pswd: ['', Validators.required]
    })
    this.isChecked = JSON.parse(this.authService.getKeepMeLoggedInStatus());

    // if (this.isChecked) {
    //   this.userName =  (this.authService.getCredentials() !== null) ? this.authService.getCredentials() : this.userName;
    //  }
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onShowPswd() {
    var inputValue = (<HTMLInputElement>document.getElementById('pswd'));
    if (inputValue.type === 'password') {
      inputValue.type = 'text';
      this.showPswd = !this.showPswd;
    } else {
      this.showPswd = !this.showPswd;
      inputValue.type = 'password';
    }
  }

  onSignIn() {
    if (this.loginForm.invalid) {
      this.messageService.clear();
      this.messageService.add({
        key: 't-err', severity: StatusMessage.SEVERITY_ERROR,
        life: 5000, summary: StatusMessage.SUMMARY_ERROR, detail: StatusMessage.ValidCredentialsErrorMessage
      });
      return;
    } else {
      let username = new HttpParams().append('userName', this.userName);
      this.restApiService.get(PathConstants.SERVER_DATE).subscribe(date => {
        this.authService.setServerDate(date[0].ServerDate);
      })
      this.restApiService.getByParameters(PathConstants.LOGIN, username).subscribe(credentials => {
        if (credentials !== undefined && credentials !== null && credentials.length !== 0) {
          if (this.userName.toLowerCase() === credentials[0].Username.toLowerCase() && this.password === credentials[0].Password) {
            this.router.navigate(['Home']);
            this.roleId = credentials[0].RoleID;
            this.loginService.setValue(this.roleId);
            this.loginService.setUsername(this.userName);
            const params = {
              RoleID: this.roleId,
            }
            this.authService.login(this.loginForm.value, params);
          } else {
            this.clearFields();
            this.messageService.clear();
            this.messageService.add({
              key: 't-err', severity: StatusMessage.SEVERITY_ERROR, summary: StatusMessage.SUMMARY_ERROR
              , life: 5000, detail: StatusMessage.ValidCredentialsErrorMessage
            });
          }
        } else {
          // this.clearFields();
          this.messageService.clear();
          this.messageService.add({
            key: 't-err', severity: StatusMessage.SEVERITY_ERROR, life: 5000,
            summary: StatusMessage.SUMMARY_ERROR, detail: StatusMessage.ValidCredentialsErrorMessage
          });
        }
      }, (err: HttpErrorResponse) => {
        if (err.status === 0 || err.status === 400) {
          this.messageService.clear();
          this.messageService.add({ key: 't-err', severity: StatusMessage.SEVERITY_ERROR, summary: StatusMessage.SUMMARY_ERROR, detail: StatusMessage.ErrorMessage });
        }
      });
    }
  }

  toggleVisibility(e) {
    this.authService.isKeepMeLoggedIn(e.target.checked);
    let check: any = this.authService.getKeepMeLoggedInStatus();
    this.isChecked = (check !== undefined &&
      check !== null) ? check : false;

  }

  clearFields() {
    this.userName = '';
    this.password = '';
    this.showPswd = false;
  }

  onClose() {
    this.messageService.clear('t-err');
  }
}
