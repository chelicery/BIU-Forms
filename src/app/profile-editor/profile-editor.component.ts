import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  profileForm = this.fb.group({
    name: [null, Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    phone: [null, Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')],
    pet: [''],   
    consents: this.fb.group({
      newsletter: [''],
      sms: [''],
    })

    });
    address = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      building_nr: ['', Validators.required],
      flat_nr: ['']
    })
  passwords =  this.fb.group({
    password: ['', Validators.compose(
      [Validators.minLength(8),
         //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&])[A-Za-z\d@#$%^&]{8,}$'), 
         Validators.required])],
    confirmPass: ['']
      }, {validator: this.checkPasswords})
      
  checkPasswords(passwords: FormGroup) { 
  let pass = passwords.controls.password.value;
  let confirmPass = passwords.controls.confirmPass.value;

  return pass == confirmPass ? null : { notSame: true }     
}
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


 

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // console.log(this.profileForm.errors);

    console.log(this.profileForm.value, this.address.value);
    alert("");
  }
  
}
