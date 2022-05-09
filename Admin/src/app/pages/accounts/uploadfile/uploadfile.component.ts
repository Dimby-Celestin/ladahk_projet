import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.scss']
})
export class UploadfileComponent implements OnInit {
  selectedclasstype: number;

  types = [
        { id: 1, name: 'LISTING CLASS TYPE' },
        { id: 2, name: 'VIDE' },
        
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
