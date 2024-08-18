import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service'; // Ensure the path is correct

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onLogin() {
    this.apiService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Store the JWT in local storage or handle it as needed
        localStorage.setItem('token', response.token);  // Assume response.token contains the JWT
        this.router.navigate(['/home']); // Navigate to dashboard or appropriate route
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Invalid credentials or server error');
      }
    });
  }
}