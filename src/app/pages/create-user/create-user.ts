import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    RouterModule
  ],
  templateUrl: './create-user.html',
  styleUrls: ['./create-user.css']
})
export class CreateUser {
  createUserForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    // Initialisation du formulaire avec les contrôles requis
    this.createUserForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      role: ['ROLE_USER', Validators.required]
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.createUserForm.invalid) {
      this.createUserForm.markAllAsTouched();
      return;
    }
    const { confirmPassword, ...userData } = this.createUserForm.value;

    this.auth.register(userData).subscribe({
      next: (response) => {
        console.log('Inscription réussie', response);
      },
      error: (err) => {
        console.error('Erreur lors de l’inscription', err);
      }
    });
  }
}
