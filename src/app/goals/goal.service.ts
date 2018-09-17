import { Injectable } from '@angular/core';
import { Goals } from "../goals"

// The @Injectable() decorator is essential in creating a service because angular uses it to define a service class that might require dependencies

// providedIn specifies that the root injector is responsible for creating an instance of the GoalService and making it available throughout the application.
@Injectable({
  providedIn: 'root' // declaring service should be created by the root app injector
})

// First, we import the Goals array then create a getGoals method that returns the array.
export class GoalService {
  getGoals(){
    return Goals;
  }
}
