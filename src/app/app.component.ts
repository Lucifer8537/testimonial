import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './mobile.component.css'],
})
export class AppComponent implements OnInit {
  width!: number;
  mobileView!: boolean;

  @HostListener('window:resize', ['$event'])
  onResize = () => {
    this.width = window.innerWidth;
    this.mobileView = this.width < 679;
  };

  ngOnInit(): void {
    this.onResize();
  }
}
