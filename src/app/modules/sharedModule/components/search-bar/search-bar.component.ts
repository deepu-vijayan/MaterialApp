import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
    onSubmit(searchValue: string) {
      // your function
      this.searchEvent.emit(searchValue);
    }
  
}
