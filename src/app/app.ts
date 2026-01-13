import { Component } from '@angular/core';
import { Ex10Component } from './ex10/ex10';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Ex10Component],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }
