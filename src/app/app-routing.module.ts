import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
	{ path: '', component: LandingComponent, outlet: 'landing' },
	{ path: 'about', component: AboutComponent },
	{ path: 'skills', component: SkillsComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: '**', component: ErrorComponent }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
