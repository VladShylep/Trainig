import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  password = 'Secret password = tuna!';
  isContentShown: boolean = false;
  clicks = [];



  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isContentShown = !this.isContentShown;
    this.clicks.push({time: new Date(), log: this.isContentShown ? 'password shown' : 'password hidden'});
    console.log(this.clicks.length);
  }
  clearLog(){
    this.clicks = [];
  }

}
