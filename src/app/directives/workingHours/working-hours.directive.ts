import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';

@Directive({
  selector: '[appWorkingHours]'
})
export class WorkingHoursDirective {
  @Input() set appWorkingHours(value: number) {
    console.log(value)
    if (value >= 9 && value <= 18 && !this.hasView) {
      console.log('render')
      this.containerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if ((value < 9 || value < 18) && this.hasView) {
      console.log('no render')
      this.containerRef.clear();
      this.hasView = false;
    }
  };

  private hasView = false;

  constructor(
    private containerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) { }

}
