import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  count : number=0;
  constructor(private myService : MyService) { }

  ngOnInit() {
  }

  public incrementValue(){
    console.log("in incrementvalue")
    console.log(this.myService)
    this.myService.increment();
    this.count=this.myService.getcnt();
  }

}
