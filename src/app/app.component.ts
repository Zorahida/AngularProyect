import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Tienda online'
  form!: FormGroup

  constructor(public formBuilder: FormBuilder) { }


ngOnInit(): void{
  this.form = this.formBuilder.group({
    nombre:'',
    email: '',
    password: '',
    passwordRepeat: '',
  });
}
}