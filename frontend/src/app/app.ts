import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TranslateModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('TITLE');
  protected currentLang = signal('en');
  protected availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' }
  ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    // Initialize the app with default language
    this.translate.use('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang.set(lang);
  }
}
