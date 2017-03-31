import { Component, OnInit, Input } from '@angular/core';

import { PaginationInfos } from '../models/paginationInfos';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() infos: any;
  constructor() { }

  ngOnInit() {
    console.log("infos", this.infos);
  }

}
