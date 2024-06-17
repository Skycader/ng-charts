import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart-random',
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss',
})
export class RandomComponent {
  @ViewChild('canvas') canvas!: ElementRef;

  public ngAfterViewInit(): void {
    this.drawChart();
  }

  public drawChart(): void {
    const ctx: any = this.canvas.nativeElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
