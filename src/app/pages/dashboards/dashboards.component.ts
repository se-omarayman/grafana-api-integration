import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dashboard } from 'src/app/models/dashboard';
import { DashboardsService } from './dashboards.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css'],
})
export class DashboardsComponent implements OnInit {
  folderId?: number;
  dashboards?: Dashboard[];
  constructor(
    private route: ActivatedRoute,
    private dashboardsService: DashboardsService
  ) {
    this.route.params.subscribe(
      (params) => (this.folderId = params['folderId'])
    );
  }

  showDashboards() {
    this.dashboardsService
      .getDashboards(this.folderId)
      .subscribe((data: Dashboard[]) => {
        console.log('dashboard is: ', data);
        this.dashboards = data;
      });
  }
  ngOnInit(): void {
    this.showDashboards();
  }
}
