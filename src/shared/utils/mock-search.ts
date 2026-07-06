import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function mockSearch<T>(
  items: T[],
  term: string,
  toText: (item: T) => string,
  delayMs: number,
): Observable<T[]> {
  const searchPhrase = term.trim().toLowerCase();
  const matches = items.filter((item) => toText(item).toLowerCase().includes(searchPhrase));

  return of(matches).pipe(delay(delayMs));
}
