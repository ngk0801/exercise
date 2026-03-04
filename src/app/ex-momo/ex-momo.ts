import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex-momo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex-momo.html',
  styleUrls: ['./ex-momo.css']
})
export class ExMomoComponent {
  loading: boolean = false;
  error: string = '';

  async payWithMoMo() {
    this.loading = true;
    this.error = '';

    try {
      const response = await fetch('http://localhost:3002/api/momo-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (data && data.payUrl) {
        // Redirect to MoMo payment page
        window.location.href = data.payUrl;
      } else {
        this.error = 'Lỗi khởi tạo thanh toán: Không nhận được payUrl.';
        console.error('MoMo Response:', data);
      }
    } catch (err) {
      this.error = 'Không thể kết nối đến server backend.';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }
}
