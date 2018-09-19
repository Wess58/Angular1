import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Goal} from '../goal'
import {RouteService} from '../routing/route.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css'],
  providers:[RouteService]
})
export class GoalDetailsComponent implements OnInit {

  @Input() goal:Goal;
  @Output() isComplete= new EventEmitter<boolean>();
  routeService:RouteService;
  route:ActivatedRoute;

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor(service:RouteService,rout:ActivatedRoute) {
    this.routeService=service;
    this.route=rout;
  }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.goal=this.routeService.getGoal(id);
  }
}
