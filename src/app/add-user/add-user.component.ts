import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    age:'',
    email:'',
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit(): void {
    window.alert('user has been added');
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
