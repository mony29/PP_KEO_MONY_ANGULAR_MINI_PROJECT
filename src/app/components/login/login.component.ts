import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors, Validators, FormArray, AbstractControl } from '@angular/forms';

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
          Validators.minLength(6),
          this.isRestrictedName.bind(this) // .bind(this) check self validation
          ]),
        emailAddress: new FormGroup({ // use FormGroup to group FormControls
          email: new FormControl(null, 
            [Validators.email, 
              Validators.required
            ]),
        })
      })
  }


 
  // get hobby data
  get hobbiesControls(){
    return (<FormArray>this.reactiveForm?.get('hobbies'))?.controls;
  }



  handleSubmit() {
    // this.handleSubmit
    console.log(this.reactiveForm.value)
  }

  // AbstractControl is the main class for controlling the behavior and properties of
  // FormGroup, FormControl and FormArray
  isRestrictedName(control: AbstractControl): ValidationErrors | null {
    if (this.restrictName.includes(control.value)) {
      return { nameIsRestricted: true }
    }
    return null;
  }


}

