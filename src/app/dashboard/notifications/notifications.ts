import { Component, inject } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications {
  protected readonly notificationsService = inject(NotificationsService);

  protected onMarkAsRead(id: string): void {
    this.notificationsService.markAsRead(id);
  }

  protected onMarkAllAsRead(): void {
    this.notificationsService.markAllAsRead();
  }
}
