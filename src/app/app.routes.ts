import { Routes } from '@angular/router';
import { CreateUser } from './pages/create-user/create-user';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login} ,
  { path: 'create-user', component: CreateUser },
  { path: '**', redirectTo: 'login' }
];
