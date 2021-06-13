import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.setBgColor('yellow');
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.setBgColor('red');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.setBgColor('white');
  }

  private setBgColor(color: string){
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }

}
