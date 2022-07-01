import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor() { }
  @Input() count :number=0;
  stringData:string='';
  str:string='';
  @Output() stringModify: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }
UpperCase(){
  this.str=this.stringData.toUpperCase()
  console.log(this.stringData)
  this.stringModify.emit(this.str);
}
LowerCase(){
  this.str=this.stringData.toLowerCase();
  this.stringModify.emit(this.str);
}


}
