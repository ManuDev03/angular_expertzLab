import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1: string
  value2: string
  result: number


  constructor() { }

  ngOnInit(): void {
  }
  getValue1($event:any){
    this.value1 = $event.target.value
  }
  getValue2($event:any){
    this.value2 = $event.target.value
  }
  add(){
    this.result = parseInt(this.value1)+parseInt(this.value2)

  }

}
