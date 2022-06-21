import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWarning]'
})
export class WarningDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red'; }

}
