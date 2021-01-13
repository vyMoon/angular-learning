import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {
  // @Input() hlcolor: string = 'yellow';
  @Input('appFirst') hlcolor: string;
  defaultColor = 'yellow'

  @HostListener('mousedown') onMouseEnter() {
    console.log('apply color')
    this.changeBackgroundColor(this.hlcolor || this.defaultColor);
  }

  @HostListener('mouseup') onMouseLeave() {
    console.log('remove color')
    this.changeBackgroundColor(null);
  }

  constructor(private el: ElementRef) {
    console.log(this.hlcolor)
  }

  private changeBackgroundColor(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
