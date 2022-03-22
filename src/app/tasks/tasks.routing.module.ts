import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './components/servers/servers.component';
import { TasksComponent } from './components/tasks-component/tasks.component';



const routes: Routes = [
    {
        path: 'tasks',
        component: TasksComponent
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
