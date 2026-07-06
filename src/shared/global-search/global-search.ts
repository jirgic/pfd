import { Component, computed, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { EMPTY_GLOBAL_SEARCH_RESULT, GlobalSearchService } from './data/global-search.service';

interface ResultItem {
  id: string;
  title: string;
  description: string;
}

interface ResultGroup {
  id: string;
  heading: string;
  badgeClass: string;
  badgeLabel: string;
  items: ResultItem[];
}

type SearchStatus = 'idle' | 'loading' | 'empty' | 'results';

@Component({
  selector: 'app-global-search',
  imports: [],
  templateUrl: './global-search.html',
  styleUrl: './global-search.scss',
})
export class GlobalSearch {
  private readonly globalSearchService = inject(GlobalSearchService);

  protected readonly query = signal('');
  protected readonly loading = signal(false);
  protected readonly result = toSignal(
    toObservable(this.query).pipe(
      debounceTime(250),
      distinctUntilChanged(),
      switchMap((rawQuery) => {
        const term = rawQuery.trim();

        if (!term) {
          this.loading.set(false);
          return of(EMPTY_GLOBAL_SEARCH_RESULT);
        }

        this.loading.set(true);
        return this.globalSearchService.search(term).pipe(tap(() => this.loading.set(false)));
      }),
    ),
    { initialValue: EMPTY_GLOBAL_SEARCH_RESULT },
  );

  private readonly hasQuery = computed(() => this.query().trim().length > 0);

  protected readonly resultCount = computed(() => {
    const result = this.result();
    return result.products.length + result.articles.length + result.tickets.length;
  });

  protected readonly status = computed<SearchStatus>(() => {
    if (!this.hasQuery()) {
      return 'idle';
    }
    if (this.loading()) {
      return 'loading';
    }
    return this.resultCount() === 0 ? 'empty' : 'results';
  });

  protected readonly resultGroups = computed<ResultGroup[]>(() => {
    const result = this.result();

    const groups: ResultGroup[] = [
      {
        id: 'global-search-products',
        heading: 'Products',
        badgeClass: 'info',
        badgeLabel: 'Product',
        items: result.products.map((product) => ({
          id: product.id,
          title: product.name,
          description: product.description,
        })),
      },
      {
        id: 'global-search-articles',
        heading: 'Knowledge Articles',
        badgeClass: 'info',
        badgeLabel: 'Article',
        items: result.articles.map((article) => ({
          id: article.id,
          title: article.title,
          description: article.summary,
        })),
      },
      {
        id: 'global-search-tickets',
        heading: 'Support Tickets',
        badgeClass: 'warning',
        badgeLabel: 'Ticket',
        items: result.tickets.map((ticket) => ({
          id: ticket.id,
          title: `${ticket.id} — ${ticket.subject}`,
          description: ticket.status,
        })),
      },
    ];

    return groups.filter((group) => group.items.length > 0);
  });

  protected onInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  protected onSelectResult(): void {
    this.query.set('');
  }
}
