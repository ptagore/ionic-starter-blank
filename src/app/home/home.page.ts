import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  selectedDate: string = '';
  minDate: string = '';
  maxDate: string = '';
  today: string = '';
  yesterday: string = '';
  tenDaysPast: string = '';
  oneYearPast: string = '';
  isDatePickerOpen: boolean = false;

  constructor() {
    // Set minDate today and maxDate to 5 years from today
    const currentDate = new Date();
    const minDate = new Date(currentDate);
    minDate.setDate(currentDate.getDate());
    const maxDate = new Date(currentDate);
    maxDate.setFullYear(currentDate.getFullYear() + 5); // 5 years from now

    this.minDate = minDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    this.maxDate = maxDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }

  onDateChange(event: any) {
    this.selectedDate = event.detail.value;
    this.isDatePickerOpen = false;
  }

  onSubmit() {
    const selectedDate = new Date(this.selectedDate);
    this.today = new Date().toDateString();
    this.yesterday = new Date(Date.now() - 86400000).toDateString();
    this.tenDaysPast = new Date(selectedDate.setDate(selectedDate.getDate() + 10)).toDateString();
    this.oneYearPast = new Date(selectedDate.setFullYear(selectedDate.getFullYear() + 1)).toDateString();
  }

  openDatePicker() {
    this.today = this.yesterday = this.tenDaysPast = this.oneYearPast = "";
    this.isDatePickerOpen = true;
  }
}
