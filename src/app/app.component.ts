import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ButtonModule} from "primeng/button";
import {ChartModule} from "primeng/chart";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, ChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboards-test-ng';

  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'Blue',
          data: [
            this.random(0, 100),
            this.random(0, 100),
            this.random(0, 100),
            this.random(0, 100),
            this.random(0, 100),
            this.random(0, 100),
            this.random(0, 100)]
        },
        {
          label: 'Red',
          data: [
            this.random(0, 100),
            this.random(0, 100),
            this.random(0, 100),
            this.random(0, 100),
            this.random(0, 100),
            this.random(0, 100),
            this.random(0, 100)
          ]
        }
      ]
    }

    this.options = {
      title: {
        display: true,
        text: 'Test Dashboard',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };
  }

  private random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
