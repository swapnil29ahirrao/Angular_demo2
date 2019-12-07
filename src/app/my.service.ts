import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  cnt:number = 1;

  constructor() {
    console.log("Myservice constructor invoker....");
   }

   public increment(){
     this.cnt++;
   }
   public getcnt(){
     return this.cnt;
   }
}
