import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() out = 'red';
  @Input() in = 'yellow';
  @HostBinding('style.backgroundColor') bg = this.out;
  constructor(el: ElementRef) {
    console.log(el);
  }
  @HostListener('mouseenter') highlight() {
    this.bg = this.in;
  }
  @HostListener('mouseleave') dehighlight() {
    this.bg = this.out;
  }
}
