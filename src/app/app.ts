import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ex27Component } from './ex27/ex27.component';
import { Ex28Component } from './ex28/ex28.component';
import { Ex26Component } from './ex26/ex26.component';
import { Ex21Component } from './ex21/ex21.component';
import { Ex22Component } from './ex22/ex22.component';
import { Ex23Component } from './ex23/ex23.component';
import { Ex24Component } from './ex24/ex24.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ex27Component, Ex28Component, Ex26Component, Ex21Component, Ex22Component, Ex23Component, Ex24Component],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }
