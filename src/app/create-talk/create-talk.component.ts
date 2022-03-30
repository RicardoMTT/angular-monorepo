import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-create-talk',
  templateUrl: './create-talk.component.html',
  styleUrls: ['./create-talk.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTalkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
