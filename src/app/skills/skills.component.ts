import { Component, OnInit } from '@angular/core';
import { SKILLSETS } from '../skills-data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
	skillsets = SKILLSETS;

  constructor() { }

  ngOnInit() {
  }

}
