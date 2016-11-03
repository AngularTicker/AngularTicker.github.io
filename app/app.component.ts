import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  styleUrls: ['app/app.component.css'],
    animations: [
      trigger('myTrigger', [
          state('start', style({transform: 'translateX(0)'})),
          state('finish', style({transform: 'translateX(100)'})),
          transition('start => finish', animate('5s'))
      ])   
  ]
})
export class AppComponent { 
  state: string = "start"

  myAnimation(){
    this.state = "finish"
  }
}
