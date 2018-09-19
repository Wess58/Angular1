import { Injectable } from '@angular/core';
import {Goals} from '../goals';
@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }
  getGoals(){
    return Goals;
  }

  getGoal(id){
    for(let goal of Goals){
       if(goal.id==id){
         return goal;
       }
    }
  }
}
