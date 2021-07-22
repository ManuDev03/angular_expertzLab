import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  myarray:string[] = ["hi","angular","is","really","possible"]
  condition:boolean = false
  data = "my name is manu"
  myevent(){
    console.log("button clicked..")
  }
  getData(event:any){
    console.log("input event triggered...",event)
    let data = event.target.value
    console.log(data)
  }

}
