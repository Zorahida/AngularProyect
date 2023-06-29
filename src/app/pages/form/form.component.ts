import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit{
  form: FormGroup;
  submited: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({    //define el constructor
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      passwordRepeat: ['', [Validators.required, Validators.maxLength(8)]], 
  
      //validator: comparePassword('password','passwordRepeat')
  });
  }
  ngOnInit(): void {}

  submitForm(): void {
    this.submited = true;
    if (this.form.valid) {
      let data = this.form.value;
      console.log(data);
    
    const user = {
      username: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      passwordRepeat: this.form.get('passwordRepeat')?.value,
    };
  console.log(user);

  this.form.reset();
  this.submited = false;
  } 
}
}
