import { Component ,Input, Output, EventEmitter } from '@angular/core';
import {Observable,Subscription} from 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  createpipe=false;
  dynamicpipe = [{
 "start":true,
   "pipes": [
   {
     "name":"Pre Build",
    "child":[{"cname":"Build"},{"cname":"Post Build"}]
  },
   {
     "name":"Env providening",
     "child":[{"cname":"Validation"}]
  },
   {
     "name":"Pre Deploy",
     "child":[{"cname":"Build"},{"cname":"Post Deploy"}]
  },
  {
    "name":"perfomance Test",
     "child":[{"cname":"Functional Test"},{"cname":"security Test"}
  ]

  
  }]
}]
 
  dynamicon=false;
 dynamiconm= true;
 displayimagepipe=false;
  displayTool(){
    this.createpipe=true;
  }
  addtext(){

    console.log(this.dynamicpipe.length);
    if(this.dynamicpipe[0].pipes.length>=1 && this.dynamicpipe[0].pipes.length<=3) {
      this.dynamicpipe[0].pipes.push({
     "name":"New pipe",
    "child":[]
  }); 
      this.dynamiconm=true;


    }
    else {
      this.dynamiconm=true;
      this.dynamicon=true;
    }
  }
  deletetext(){
    console.log(this.dynamicpipe[0].pipes.length);
    this.dynamicpipe[0].pipes.pop();
    if(this.dynamicpipe[0].pipes.length == 1) {
      this.dynamicon = false;
      this.dynamiconm = false;
    }
  }
  createpipeview(){
    this.displayimagepipe=true;
  }
  plusreposition(event){
    console.log(event);
     

  }
  
}