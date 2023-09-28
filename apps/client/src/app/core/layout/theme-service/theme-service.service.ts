import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'nx_bank_accounts_is_dark_theme';

  private isDarkTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(@Inject(DOCUMENT) private document: Document) {}

  setDefaultTheme(): void {
    localStorage.getItem(this.storageKey) === 'true' && this.toggleTheme();
  }

  toggleTheme() {
    const isDarkTheme = !this.isDarkTheme$.getValue();
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    themeLink.href = `${isDarkTheme ? 'dark' : 'light'}-theme.css`;
    localStorage.setItem(this.storageKey, `${isDarkTheme}`);
    this.isDarkTheme$.next(isDarkTheme);
  }

  isDarkTheme(): Observable<boolean> {
    return this.isDarkTheme$.asObservable();
  }
}
