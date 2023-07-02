import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit{
  form: FormGroup;
  submited: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      passwordRepeat: ['', [Validators.required, Validators.maxLength(8)]],
    },{validator: this.passwordMatch});    //define el constructor
      
      //validator: comparePassword('password','passwordRepeat')
  }
  ngOnInit(): void {}

  submitForm(): void {
    this.submited = true;
    if (this.form.valid) {          //Si es válido el form, se ejecuta
      let data = this.form.value;
      console.log(data);   //Se muestra en consola los datos del user
  if (this.form.status ==='VALID') {
    console.log('Es válido');
  }else{
    console.log('Esto no funciona');
  }
    
  }
  this.form.reset();
  this.submited = false;
  }

  passwordMatch(form: FormGroup) {
    const password = form.get('password')?.value;
    const passwordRepeat = form.get('passwordRepeat')?.value;
    if (password !== passwordRepeat) {
      form.get('passwordRepeat')?.setErrors({ passwordMismatch: true });
    } else {
      form.get('passwordRepeat')?.setErrors(null);
    }
    return null;
  }
  //updateName(){
    //this.form.get('name')?.setValue('Nuevo nombre');
  //}

 //   const user = {
  //    username: this.form.get('name')?.value,
  //    email: this.form.get('email')?.value,
  //    password: this.form.get('password')?.value,
  //    passwordRepeat: this.form.get('passwordRepeat')?.value,
 //   };
 // console.log(user);

}


