/*
Para resaltar un elemento cuando el usuario pasa el ratón sobre él.
*/
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(
    private readonly _el: ElementRef,
    private readonly _renderer: Renderer2,
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this._renderer.setStyle(
      this._el.nativeElement,
      'backgroundColor',
      'yellow',
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.removeStyle(this._el.nativeElement, 'backgroundColor');
  }
}
