import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks-component/tasks.component';
import { TasksRoutingModule } from './tasks.routing.module';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { FormsModule } from '@angular/forms';

import { DirectivesComponent } from './components/directives/directives.component';


@NgModule({
  declarations: [
    TasksComponent,
    ServerComponent,
    ServersComponent,
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,


  ],
  exports: [
    TasksComponent
  ]
})

export class TasksModule { }
