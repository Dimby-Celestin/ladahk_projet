import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selected: number;
  types = [
    { id: 1, name: 'LISTING CLASS TYPE' },
    { id: 2, name: 'VIDE' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
