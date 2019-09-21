import {Injectable, Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'menuFilter'
})
@Injectable()
export class CustomerMenuFilter implements PipeTransform {
  transform(Items: any[], args: any[]): any {
    return Items.filter(item => item.inMenu == true);
  }
}
