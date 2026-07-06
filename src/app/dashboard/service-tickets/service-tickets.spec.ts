import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceTickets } from './service-tickets';

describe('ServiceTickets', () => {
  let component: ServiceTickets;
  let fixture: ComponentFixture<ServiceTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTickets],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceTickets);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
