import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PaginationInfos } from '../models/paginationInfos';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Output() onPageSelected: EventEmitter<number> = new EventEmitter<number>();
  @Input() infos: any;
  pageArray = new Array<number>();
  constructor() { }

  ngOnInit() {
    for (var i = 1; i <= this.infos.totalPages; ++i) {
      this.pageArray.push(i);
    }
  }

  onClick(i: number) {
    this.onPageSelected.emit(i);
  }

}
