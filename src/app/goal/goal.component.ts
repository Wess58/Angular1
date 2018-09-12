import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
                              // set goals

  goals = [
    new Goal(1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son', new Date(2018, 3, 14)),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2018, 6, 9)),
    new Goal(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date(2018, 1, 12)),
    new Goal(4, 'Get Dog Food', 'Pupper likes expensive sancks', new Date(2018, 0, 18)),
    new Goal(5, 'Solve math homework', 'Damn Math', new Date(2018, 2, 14)),
    new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date(2018, 3, 14)),

  ]
                              // to hide or show Goal details
  toogleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;

  }
                              // to delete completed goal
  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

      if (toDelete) {
        this.goals.splice(index, 1);
      }

    }
  }
                          // We then create the addNewGoal function that takes a goal object as an argument. We first need to change the id property of the goal. We get the length of the array of goals and store it in the variable goalLength we then add one to the goalLength and set that as the new id for the goal. We then set the completeDate property of the goal object to a Date Object. Lastly, we push the new goal to our array of goals.
  addNewGoal(goal){
      let goalLength = this.goals.length;
      goal.id=goalLength+1;
      goal.completeDate = new Date(goal.completeDate)
      this.goals.push(goal)
}

  constructor() { }
  ngOnInit() {
  }
}
