import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3000';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  private originalUrl = '';

  @Input() description = '';
  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.originalUrl = url;
    } else {
      this.originalUrl = `${API}/imgs/${url}`
    }
  };

  get url(): string {
    return this.originalUrl;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
