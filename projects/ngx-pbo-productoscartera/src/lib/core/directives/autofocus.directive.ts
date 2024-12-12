import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private readonly _el: ElementRef) {}

  ngAfterViewInit() {
    this._el.nativeElement.focus();
  }
}
