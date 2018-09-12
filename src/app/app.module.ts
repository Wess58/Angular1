// Imports __ START
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
                  // imports the FormsModule to the root module.
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
// Imports __ END

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
  ],
                          // Imports Array
  imports: [
    BrowserModule,
                    // We then place the newly imported module to the imports array.
    FormsModule,
  ],
                          // Providers Array
  providers: [],
  bootstrap: [AppComponent]
})
// NgModule decorator __ END


export class AppModule { }
