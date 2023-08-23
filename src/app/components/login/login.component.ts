import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  // reactive form
  reactiveForm!: FormGroup;
  restrictName = 'monykeo'

  ngOnInit(): void {
    this.reactiveForm = new FormGroup(
      {
        password: new FormControl(null,
          [Validators.required,
          Validators.minLength(6)
          ]),
        emailAddress: new FormGroup({ // use FormGroup to group FormControls
          email: new FormControl(null, 
            [Validators.email, 
              Validators.required
            ]),
        })
      })
  }


  constructor(private _authService: AuthService){}

  login() {
    this._authService.login();
  }

  logout(){
    this._authService.logout();
  }


}

