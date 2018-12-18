import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {
  @Input('appHighlighter') color: string;
  ngOnInit(): void {
  }

  constructor(private el: ElementRef) {
  }
  @HostListener('mouseover')
  onMouseOver() {
    this.SetColor(this.color);
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.SetColor('');
  }
  private SetColor(color) {
    this.el.nativeElement.style.background = color;
  }
}
