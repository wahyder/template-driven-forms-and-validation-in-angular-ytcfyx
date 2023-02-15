import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  @ViewChild('myForm')
  form;
 
  genders = ['male', 'female'];
  
  userData = {
    username: '',
    email: '',
    country: '',
    gender: ''
  };
  submitted = false;
ngOnInit(){
  //this.validateFirstName();
}
test(e){
  this.form.controls.username.setErrors({ unique: true });
  console.log(e.value, this.form.value, this.form.controls.username.errors)
}

onSubmit(form,formData) {
    console.log('submitted formdata',formData);  
    
    alert('Form submitted successfully');
    
    form.reset();
  }

  validateFirstName() {
    console.log(this.form.form.value)
    if(this.form.controls['personal'].controls['firstName'].value == "test" ){
      const error = { myCustomError: 'Name is not allowed.' };
      this.form.controls['personal'].controls['firstName'].setErrors(error);
    }
  }
}
