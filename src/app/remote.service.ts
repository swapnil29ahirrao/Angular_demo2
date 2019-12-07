import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  obj={}
  constructor(
    private httpClient: HttpClient
  ) { }

    public getData1(){
      console.log("Service invoked")
      this.httpClient.get("https://reqres.in/api/users/2")
      .subscribe(
        (value)=> {
          this.obj=value["data"];
        },
        (error)=>{console.log(error);},
        ()=>{console.log("Completed.....");}
      )

      console.log("after http get");
    }



}
