import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountManagementComponent } from './account-management.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('AccountManagementComponent', () => {
  let component: AccountManagementComponent;
  let fixture: ComponentFixture<AccountManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountManagementComponent ],
      imports: [ HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter accounts based on search term', () => {
    component.accounts = [
      { id: 1, username: 'admin', email: 'admin@test.com', role: 'ADMIN' },
      { id: 2, username: 'user', email: 'user@test.com', role: 'USER' }
    ];
    component.searchTerm = 'admin';
    component.searchAccounts();
    expect(component.filteredAccounts.length).toBe(1);
    expect(component.filteredAccounts[0].username).toBe('admin');
  });
});