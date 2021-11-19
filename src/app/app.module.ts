import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { FooterComponent } from './core/footer/footer.component';
import { UserDetailComponent } from './pages/entity/user/user-detail/user-detail.component';
import { UsersComponent } from './pages/entity/user/users/users.component';
import { UserEditComponent } from './pages/entity/user/user-edit/user-edit.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LayoutComponent } from './core/layout/layout.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    FooterComponent,
    UserDetailComponent,
    UsersComponent,
    UserEditComponent,
    AboutUsComponent,
    AddUserComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
