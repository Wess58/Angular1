import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { Goals } from '../goals';
import { GoalService } from '../goals/goal.service';
import { AlertsService } from '../alert-service/alerts.service'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers: [GoalService], //add the providers to the component
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  // set goals
  goals:Goal[];
  alertService: AlertsService;

  // to hide or show Goal details
  toogleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;

  }
  // to delete completed goal
  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

      if (toDelete) {
        this.goals.splice(index, 1)
        this.alertService.alertMe("Goal has been deleted")
      }

    }
  }
  // We then create the addNewGoal function that takes a goal object as an argument. We first need to change the id property of the goal. We get the length of the array of goals and store it in the variable goalLength we then add one to the goalLength and set that as the new id for the goal. We then set the completeDate property of the goal object to a Date Object. Lastly, we push the new goal to our array of goals.
  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  constructor(goalService: GoalService, alertService: AlertsService) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }
  ngOnInit() {
  }
}
