import { Component, OnInit } from '@angular/core';
import { SearchBarService } from '../services/searchBar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  displaySearchBar = false;
  searchInput: string;

  constructor(private searchBarService: SearchBarService) { }

  ngOnInit() {
  }

  closeSearchBar() {
    this.displaySearchBar = false;
    this.searchInput = null;
  }

  search() {
    this.searchBarService.search(this.searchInput);
    this.closeSearchBar();
  }
}
