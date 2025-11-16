import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private readonly messageService: MessageService) {}

  success(title: string, message: string): void {
    this.showMessage('success', title, message);
  }

  error(title: string, message: string): void {
    this.showMessage('error', title, message);
  }

  private showMessage(severity: 'success' | 'error', title: string, message: string): void {
    this.messageService.add({
      severity: severity,
      summary: title,
      detail: message,
      life: 3000,
    });
  }
}
