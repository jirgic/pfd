import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { mockSearch } from '../../utils/mock-search';
import { TicketsService } from '../../../app/dashboard/service-tickets/data/tickets.service';
import { Ticket } from '../../../app/dashboard/service-tickets/data/ticket.model';
import { Product } from './product.model';
import { PRODUCTS_MOCK } from './product.mock';
import { KnowledgeArticle } from './knowledge-article.model';
import { KNOWLEDGE_ARTICLES_MOCK } from './knowledge-article.mock';

export interface GlobalSearchResult {
  products: Product[];
  articles: KnowledgeArticle[];
  tickets: Ticket[];
}

export const EMPTY_GLOBAL_SEARCH_RESULT: GlobalSearchResult = {
  products: [],
  articles: [],
  tickets: [],
};

@Injectable({
  providedIn: 'root',
})
export class GlobalSearchService {
  private readonly ticketsService = inject(TicketsService);

  search(query: string): Observable<GlobalSearchResult> {
    const term = query.trim();

    if (!term) {
      return of(EMPTY_GLOBAL_SEARCH_RESULT);
    }

    return forkJoin({
      products: this.searchProducts(term),
      articles: this.searchArticles(term),
      tickets: this.ticketsService.search(term),
    });
  }

  private searchProducts(term: string): Observable<Product[]> {
    return mockSearch(
      PRODUCTS_MOCK,
      term,
      (product) => `${product.name} ${product.description}`,
      150,
    );
  }

  private searchArticles(term: string): Observable<KnowledgeArticle[]> {
    return mockSearch(
      KNOWLEDGE_ARTICLES_MOCK,
      term,
      (article) => `${article.title} ${article.summary}`,
      400,
    );
  }
}
