import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class CustomPipePipe implements PipeTransform {
  nvalue:String='';
  transform(value: any, ...args: any[]): any {
    this.nvalue = value.split('').reverse().join('');
    return this.nvalue;
  }

}
