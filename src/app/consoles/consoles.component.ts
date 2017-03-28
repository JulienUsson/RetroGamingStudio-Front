import { Component, OnInit } from '@angular/core';

import { Console } from '../models/console';
import { ConsoleService } from '../services/console.service';

@Component({
  selector: 'consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css'],
  providers: [ConsoleService]
})
export class ConsolesComponent implements OnInit {
  consoles: Array<Console>;

  constructor(private consoleService: ConsoleService) { }

  ngOnInit() {
        this.consoleService.getConsoles().then(consoles => {
      this.consoles = consoles;
    });
  }

}
