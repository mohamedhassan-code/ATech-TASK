import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DirectionService } from './core/services/direction.service';
import { Language } from './core/enums';
import { DialogService } from 'primeng/dynamicdialog';
import { CreateNewDealPopupComponent } from './components';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService],
})
export class AppComponent {
  currentLang: string = '';

  constructor(
    private __setDirection: DirectionService,
    private dialogService: DialogService,
    private __translate: TranslateService
  ) {
    this.currentLang = localStorage.getItem('lang') || Language.Arabic;
    this.__translate.use(this.currentLang);
    this.__setDirection.changeDocumentDirection(this.currentLang);
  }
  change() {
    this.__translate.currentLang === Language.Arabic
      ? localStorage.setItem('lang', Language.English)
      : localStorage.setItem('lang', Language.Arabic);
    window.location.reload();
  }
  openDialog() {
    this.dialogService.open(CreateNewDealPopupComponent, {
      showHeader: false,
      styleClass: 'dialogDeal',
    });
  }
}
