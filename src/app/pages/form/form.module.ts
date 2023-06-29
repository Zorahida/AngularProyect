import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormComponent} from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [FormComponent],
    imports: [ 
        ReactiveFormsModule,
        CommonModule, 
        FormRoutingModule],
    
})
export class FormModule { }