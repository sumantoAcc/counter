import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lesschar'
})
export class ShorthandPipe implements PipeTransform {

  transform(value: string, maxChar: number): string {
    return value.substr(0, maxChar) + " ....";
  }

}
