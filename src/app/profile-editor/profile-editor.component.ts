import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: '',
    address: this.formBuilder.group({
      street: '',
      city: '',
      state: '',
      zip: ''
    })
  })

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value)
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '491 W 19th st'
      }
    })
  }

}
