import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks-component/tasks.component';
import { TasksRoutingModule } from './tasks.router.module';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  exports: [
    TasksComponent
  ]
})

export class TasksModule { }
