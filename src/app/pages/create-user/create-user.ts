import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.html',
  styleUrls: ['./create-user.css']
})
export class CreateUser {
  // Créer le formulaire angular
  createUserForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  // Méthode pour soumettre le formulaire
  onSubmit() {
    const formData = this.createUserForm.value;
    console.log('Form Data:', formData);
  }
}
