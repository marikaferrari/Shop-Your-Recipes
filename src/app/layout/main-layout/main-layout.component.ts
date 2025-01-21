import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../core/recipes/data-storage.service';
import { AuthService } from '../../core/auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from '../../ui/dropdown/dropdown.directive';

@Component({
  selector: 'my-org-main-layout',
  templateUrl: './main-layout.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, DropdownDirective],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  collapsed = true;

  // isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // this.userSub = this.authService.user.subscribe(user => {
    //   this.isAuthenticated = !!user;
    //   // console.log(!user); 
    //   // console.log(!!user);
    // });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

