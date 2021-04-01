import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {
  n;
  ans;
  constructor() { }

  ngOnInit(): void {
  }
  getNum(){
      if(this.n)
      {
     let m= this.n;
  if(m%2!=0)
   {
     let x=2;
     m=m/2;

    for(var i=1; i<m; i++)
      x=x+(8*i);
     this.ans=x;
   }
   else
   {
     let x=3;
     m=m/2;
     for(var i=1;i<m; i++)
      x=x+(8*i)+4;
     this.ans=x;
	}
      }else{
          this.ans="Enter a Number";
      }	
	
  }
 
}
