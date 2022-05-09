import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../../shared/services/business.service';
import { Business } from '../../../shared/models/business.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  isLoading: boolean;
  id: string;
  data: Business;
  constructor(
    private businessService : BusinessService,
    private router: Router,
  ) {
  }
  async ngOnInit() {
    this.isLoading = true;
    this.loadData();
  }
  /*async loadData(pageNumber?: number, pageSize?: number) {
  }*/
  async loadData() {
    try {
      this.isLoading = true;
      this.data = await this.businessService.load(this.id).toPromise();
      console.log("data" ,this.data)
      this.isLoading = false;
  } catch (e) {
      console.error(e);
      this.isLoading = false;
  }
}
  goBack() {
  }
}
