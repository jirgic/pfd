import { Injectable, computed, signal } from '@angular/core';
import { Notification } from './notification.model';
import { NOTIFICATIONS_MOCK } from './notification.mock';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private readonly _notifications = signal<Notification[]>(NOTIFICATIONS_MOCK);

  readonly notifications = this._notifications.asReadonly();

  readonly unreadCount = computed(
    () => this._notifications().filter((notification) => !notification.read).length,
  );

  markAsRead(id: string): void {
    this._notifications.update((notifications) =>
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  }

  markAllAsRead(): void {
    this._notifications.update((notifications) =>
      notifications.map((notification) => ({ ...notification, read: true })),
    );
  }
}
