import { Component, computed, inject, signal } from '@angular/core';
import { NotificationsService } from '../../app/dashboard/notifications/notifications.service';

type NotificationFilter = 'all' | 'unread';

@Component({
  selector: 'app-notification-center',
  imports: [],
  templateUrl: './notification-center.html',
  styleUrl: './notification-center.scss',
})
export class NotificationCenter {
  private readonly notificationsService = inject(NotificationsService);

  protected readonly open = signal(false);
  protected readonly filter = signal<NotificationFilter>('all');

  protected readonly unreadCount = this.notificationsService.unreadCount;

  protected readonly visibleNotifications = computed(() => {
    const notifications = this.notificationsService.notifications().sort((a,b) => { return (a.read === b.read) ? 0 : a.read ? 1 : -1 });
    return this.filter() === 'unread'
      ? notifications.filter((notification) => !notification.read)
      : notifications;
  });

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected close(): void {
    this.open.set(false);
  }

  protected setFilter(filter: NotificationFilter): void {
    this.filter.set(filter);
  }

  protected onMarkAsRead(id: string): void {
    this.notificationsService.markAsRead(id);
  }

  protected onMarkAllAsRead(): void {
    this.notificationsService.markAllAsRead();
  }
}
