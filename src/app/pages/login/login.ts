import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    RouterModule,
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginUserForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService){
    this.loginUserForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.loginUserForm.invalid) {
      this.loginUserForm.markAllAsDirty();
      return
    }

    const { ...userData } = this.loginUserForm.value;

    this.auth.login(userData).subscribe({
      next:(response) =>{
        console.log('Connexion réussie', response);
      },
      error: (err) => {
        console.error('Erreur lors de la connexion', err);
      }
    })
  }
}
