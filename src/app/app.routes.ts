import { Routes } from '@angular/router';
import { CreateUser } from './pages/create-user/create-user';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login} ,
  { path: 'create-user', component: CreateUser },
  { path: 'home', component: Home },
  { path: '**', redirectTo: 'login' },
];
