import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../remote.service';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css'],
  providers: [RemoteService]
})
export class ReqresComponent implements OnInit {

  constructor(
    private remoteService: RemoteService
  ) { }

  ngOnInit() {
  }

  public getData(){
    console.log("")
    this.remoteService.getData1();
  }  

}
