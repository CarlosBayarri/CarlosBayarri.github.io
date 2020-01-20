import { Component, OnInit } from '@angular/core';
import { OpenprojectsService } from 'src/app/services/openprojects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public openprojectService: OpenprojectsService) { }

  ngOnInit() {
  }

}
