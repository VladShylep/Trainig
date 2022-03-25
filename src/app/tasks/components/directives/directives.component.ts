import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  password = 'Secret password = tuna!';
  buttonClicked = false;
  clicks = [];



  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.buttonClicked = true;
    this.clicks.length += 1;
  }

}
