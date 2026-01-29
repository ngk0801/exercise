import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ex19',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ex19.html',
  styleUrl: './ex19.css',
})
export class Ex19 {
  constructor() { }
}
