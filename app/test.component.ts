import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core'
@Component({
    selector: 'test',
    templateUrl: 'app/test.component.html',
    animations: [
        trigger('myTrigger', [
            state('start', style({transform: 'translateX(0)'})),
            state('finish', style({transform: 'translateX(100px)'})),
            transition('start => finish', animate('1000ms')),
            transition('finish => start', animate('3000ms'))
        ])   
    ]
})
export class TestComponent  {
    state: string = "start"

    toggleState() {
        this.state = (this.state === "start" ? "finish" : "start")
    }
}