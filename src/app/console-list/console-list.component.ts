import { Component, OnInit, Input } from '@angular/core';
import { Console } from '../models/console';

@Component({
  selector: 'console-list',
  templateUrl: './console-list.component.html',
  styleUrls: ['./console-list.component.css']
})
export class ConsoleListComponent implements OnInit {
  @Input() consoles: Array<Console>;
  
  constructor() { }

  ngOnInit() {
  }

}
