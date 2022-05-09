import { Component, OnInit, Input, Attribute } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() color: string;
  @Input() icon: string;
  @Input() loading: boolean;
  @Input() disabled: boolean;
  @Input() customText: string;
  simple: string;
  fill: string;
  full: string;
  block: string;
  outline: string;
  blocksmall: string;
  spinner: string;

  constructor(
    @Attribute('fill') fill: string,
    @Attribute('full') full: string,
    @Attribute('simple') simple: string,
    @Attribute('block') block: string,
    @Attribute('outline') outline: string,
    @Attribute('block-small') blocksmall: string,
    @Attribute('spinner') spinner: string
  ) {
    this.simple = simple !== null ? 'btn-simple' : '';
    this.fill = fill !== null ? 'btn-fill' : '';
    this.full = full !== null ? 'btn-full' : '';
    this.outline = outline !== null ? 'btn-outline' : '';
    this.block = block !== null ? 'btn-wd' : '';
    this.blocksmall = blocksmall !== null ? 'btn-sd' : '';
    this.spinner = spinner !== null ? 'fa fa-spinner fa-spin' : '';
  }

  ngOnInit() {
    if (this.color) {
      this.color = 'btn-' + this.color;
    }
  }
}
