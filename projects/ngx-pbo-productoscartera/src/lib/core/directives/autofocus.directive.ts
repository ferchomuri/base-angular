import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private readonly el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
