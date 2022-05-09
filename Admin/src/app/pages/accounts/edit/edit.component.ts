import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  selectedstatus: number;
  checked: boolean = true;

  statusEs = [
      { id: 1, name: 'STATUS' },
      { id: 2, name: 'VIDE' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
