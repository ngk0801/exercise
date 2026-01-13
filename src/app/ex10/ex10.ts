import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LunarYear } from './lunar-year';

@Component({
  selector: 'app-ex10',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex10.html',
  styleUrls: ['./ex10.css']
})
export class Ex10Component {
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = Array.from({ length: 12 }, (_, i) => i + 1);
  years = Array.from({ length: 201 }, (_, i) => 1900 + i);

  selectedDay = 1;
  selectedMonth = 1;
  selectedYear = 1990;

  lunarResult: any;

  convert() {
    const lunar = new LunarYear(
      this.selectedDay,
      this.selectedMonth,
      this.selectedYear
    );
    this.lunarResult = lunar.findLunarYearDetail();
  }
}
