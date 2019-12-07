import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers:[MyService]
})
export class DemoComponent implements OnInit {

  count : number=0;
  constructor(private myService: MyService) { }

  ngOnInit() {
  }

  public incrementValue(){
    console.log("in incrementvalue")
    console.log(this.myService)
    this.myService.increment();
    this.count=this.myService.getcnt();
  }

}
