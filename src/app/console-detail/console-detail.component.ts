import { Component, OnInit, Input } from '@angular/core';
import { Console } from '../models/console';

@Component({
  selector: 'console-detail',
  templateUrl: './console-detail.component.html',
  styleUrls: ['./console-detail.component.css']
})
export class ConsoleDetailComponent implements OnInit {
  @Input() console: Console;

  constructor() { }

  ngOnInit() {
  }

}
