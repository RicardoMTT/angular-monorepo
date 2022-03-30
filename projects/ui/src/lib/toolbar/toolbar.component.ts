import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() title = 'Angular lima';
  @Input() color = 'primary';
  constructor() {}

  ngOnInit(): void {}
}
