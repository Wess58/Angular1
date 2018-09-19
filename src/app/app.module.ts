// Imports __ START
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertsService } from './alert-service/alerts.service'
import { HttpClientModule } from '@angular/common/http'
// imports the FormsModule to the root module.
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule } from './routing/routing.module'
import {RouteService} from './routing/route.service';
// Imports __ END

const routes: Routes = [
  { path: "goals", component: GoalComponent },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "/goals", pathMatch: "full" },
  { path: '**', component: NotFoundComponent },
 //We use the ** to describe a wildcard route. This is a route that is not specified in the routes array.
]

// NgModule decorator __ START
// Declarations array
@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  // Imports Array
  imports: [
    BrowserModule,
    // We then place the newly imported module to the imports array.
    FormsModule,
    RoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(), //for normal progressbar
    NgProgressHttpModule, //progressbar to load http requests
  ],
  // Providers Array
  providers: [AlertsService,RouteService],
  bootstrap: [AppComponent]
})
// NgModule decorator __ END


export class AppModule { }
