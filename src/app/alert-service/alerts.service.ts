import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  alertMe(message:string){
    alert(message)           //Inside the method, we call the alert function and pass in the message parameter.
  }

  constructor() { }
}
