import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

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
