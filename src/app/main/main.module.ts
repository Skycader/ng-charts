import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../common/components/page-not-found/page-not-found.component';
import { ChartsModule } from '../charts/charts.module';

@NgModule({
  declarations: [MainLayoutComponent, WelcomeComponent],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainLayoutComponent,
        children: [
          {
            path: 'welcome',

            component: WelcomeComponent,
          },
        ],
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ]),
  ],
})
export class MainModule { }
