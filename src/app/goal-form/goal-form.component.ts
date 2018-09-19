          // ngModel allows us to perform two-way data binding, this is transmitting data from our template to our Component class and data from the component class back to the template.
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
          // ngModel allows us to perform two-way data binding.
export class GoalFormComponent implements OnInit {
      newGoal=new Goal(0,"","",new Date());
      @Output() addGoal=new EventEmitter<Goal>();

                // We create the submitGoal function where we call the emit method and pass in the newGoal property.
    submitGoal(){
      this.addGoal.emit(this.newGoal);
      this.newGoal=new Goal(0,"","",new Date());
    }


  constructor() { }

  ngOnInit() {
  }

}
