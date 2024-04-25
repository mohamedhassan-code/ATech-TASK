import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChipsModule } from 'primeng/chips';
import { NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SliderModule } from 'primeng/slider';
@Component({
  selector: 'app-create-new-deal-popup',
  templateUrl: './create-new-deal-popup.component.html',
  styleUrls: ['./create-new-deal-popup.component.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    NgClass,
    ButtonModule,
    SliderModule,
    TooltipModule,
    ChipsModule,
    FormsModule,
  ],
})
export class CreateNewDealPopupComponent implements OnInit {
  value: number = 55;
  values: string[] = [];
  currentLang: any;
  searchQuery: string = '';
  contacts = [
    {
      name: 'mohamed hassan',
      image: 'assets/images/user.png',
      phone: '01055588798',
    },
    {
      name: 'Ahmed Mustafa',
      image: 'assets/images/user.png',
      phone: '01188855794',
    },
    { name: '3bod ', image: 'assets/images/user.png', phone: '01026520163' },
    { name: 'ali ', image: 'assets/images/user.png', phone: '01111100222' },
  ];
  constructor(
    public __dialogRef: DynamicDialogRef,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang ?? 'en';
    this.values = [
      this.translateService.instant('newDeal'),
      this.translateService.instant('newDeal'),
      this.translateService.instant('newDeal'),
      '+3',
    ];
  }

  get filteredContacts() {
    return this.contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        contact.phone.includes(this.searchQuery)
    );
  }
}
