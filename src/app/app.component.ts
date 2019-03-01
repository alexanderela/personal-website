import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import pdf from '../../assets/Front_End_Engineer_Alexander_Ela_Resume.pdf'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alexanderela.com';
  location = '';

  constructor(public _router: Router) {
  	this.location = _router.url;
  }

  ngOnInit() {

  }
}
