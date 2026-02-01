import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ex26Component } from "./ex26/ex26.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ex26Component],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }
