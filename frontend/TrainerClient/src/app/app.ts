import {Component, inject, signal, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('TrainerClient');
  weatherData: any[] = [];
  http = inject(HttpClient);

  ngOnInit(){
    this.http.get<any[]>('http://localhost:5179/weatherforecast')
      .subscribe({
        next: (data) => {
          this.weatherData = data;
          console.log('Received weather data:', data);
        },
          error: (err) => {
          console.log('Error connecting to backend:', err);
        }
      });
  }
}
