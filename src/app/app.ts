import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet }       from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Router } from '@angular/router'; 

@Component({
  selector:  'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Navbar, 
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrls:   ['./app.css']
})
export class App {
  isAuthPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const url = this.router.url;
      this.isAuthPage = url === '/login' || url === '/create-user';
    });
  }
}