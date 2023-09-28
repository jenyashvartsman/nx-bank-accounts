import { Component } from '@angular/core';
import { ThemeService } from './core/layout/theme-service/theme-service.service';

@Component({
  selector: 'nx-bank-accounts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly themeService: ThemeService) {
    this.themeService.setDefaultTheme();
  }
}
