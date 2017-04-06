import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  displaySearchBar = false;
  searchInput: string;

  constructor() { }

  ngOnInit() {
  }

  closeSearchBar() {
    this.displaySearchBar = false;
    this.searchInput = null;
  }

  search() {
    console.log(this.searchInput)
    this.closeSearchBar();
  }
}
