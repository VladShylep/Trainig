import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  userName = '';
  allowClick = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClickReset() {
    this.userName = '';
  }
}
