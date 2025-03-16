import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  animationState = 'hidden';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.animationState = 'visible', 500);
  }

}
