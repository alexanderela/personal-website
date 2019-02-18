import { Component, OnInit } from '@angular/core';
import { PORTFOLIOS } from '../portfolio-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
	portfolios = PORTFOLIOS;

  constructor() { }

  ngOnInit() {
  }

}
