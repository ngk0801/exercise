import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ex27Component } from "./ex27/ex27.component";
import { Ex28Component } from "./ex28/ex28.component";
import { Ex26Component } from './ex26/ex26.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ex27Component, Ex28Component, Ex26Component],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }
