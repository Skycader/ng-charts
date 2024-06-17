import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomComponent } from './components/random/random.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RandomComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'charts',
        component: MainLayoutComponent,
        children: [
          {
            path: 'random',
            component: RandomComponent,
          },
        ],
      },
    ]),
  ],
})
export class ChartsModule { }
