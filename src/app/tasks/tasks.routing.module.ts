import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { ServersComponent } from './components/servers/servers.component';
import { TasksComponent } from './components/tasks-component/tasks.component';



const routes: Routes = [
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'directives',
        component: DirectivesComponent
    },
    {
        path: 'servers',
        component: ServersComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
