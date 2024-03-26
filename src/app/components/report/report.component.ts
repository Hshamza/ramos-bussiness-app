import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.animateValue(1000);
      }
    });
  }


  animateValue(duration: number) {
    let obj = document.getElementById("value");
    let startTimestamp: number | null = null;
    const startValue = 10; 
    const endValue = 43; 
    const unit = "K";
  
    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const animatedValue = Math.floor(progress * (endValue - startValue) + startValue);
      if (obj !== null) {
        obj.innerHTML = animatedValue.toString() + unit;
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
  
    window.requestAnimationFrame(step);
  }
  
}