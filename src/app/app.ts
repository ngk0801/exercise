import { Component } from '@angular/core';
import { Ex10Component } from './ex10/ex10';
import { Ex14 } from './ex14/ex14';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Ex10Component, Ex14],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }
