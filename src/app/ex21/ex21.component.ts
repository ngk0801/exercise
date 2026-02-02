import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ex21',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './ex21.component.html',
    styleUrls: ['./ex21.component.css']
})
export class Ex21Component implements OnInit {
    loginData = {
        email: '',
        password: '',
        remember: false
    };
    jsonOutput: string = '';

    constructor(private router: Router) { }

    ngOnInit(): void {
        const saved = localStorage.getItem('loginData');
        if (saved) {
            this.loginData = JSON.parse(saved);
        }
    }

    onLogin() {
        this.jsonOutput = JSON.stringify(this.loginData);

        // Additional 1: Validation
        if (!this.loginData.email.includes('@') || this.loginData.password.length < 5) {
            alert('Invalid email or password (must be at least 5 chars)');
            return;
        }

        // Additional 3: Save to local storage
        if (this.loginData.remember) {
            localStorage.setItem('loginData', JSON.stringify(this.loginData));
        } else {
            localStorage.removeItem('loginData');
        }

        // Additional 2: Navigate simulation
        alert('Login successful! Navigating...');
        // this.router.navigate(['/ex22']); // Example navigation
    }
}
