import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CalendarComponent } from './calendar.component'
import { EventComponent } from './event.component'
import { EventNewComponent } from './event-new.component'
import { EventShowComponent } from './event-show.component'

const routes: Routes = [
  

    {
        path: '',
        redirectTo: '/calendar',
        pathMatch: 'full'
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        children:[
        {
         path : 'events',
         component: EventComponent,
        },
        {
            path: 'events/new',
            component: EventNewComponent,
        },
        {
            path: 'events/:id',
            component: EventShowComponent,
        }
           
       ]
     }
    ];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
