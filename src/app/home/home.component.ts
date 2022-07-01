import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

data= 'interpolation ';
data1= 'property binding';
count=1;
username='purva';
uppercasepipe='upper case pipe';
str ='';
  ngOnInit(): void {
  }
clickIncrese(){
  this.count++;
}
clickDecrese(){
  this.count--;
}
getUsername(){
  this.username;
}
stringModifyHandler($event: any){
  this.data = $event;
  console.log(this.data);

}
}
