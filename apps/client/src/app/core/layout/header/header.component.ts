import { Component } from '@angular/core';
import { ThemeService } from '../theme-service/theme-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-bank-accounts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isDarkTheme$: Observable<boolean>;

  constructor(private readonly themeService: ThemeService) {
    this.isDarkTheme$ = this.themeService.isDarkTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
