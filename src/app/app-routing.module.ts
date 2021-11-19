import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './core/home/home.component';
import { UserDetailComponent } from './pages/entity/user/user-detail/user-detail.component';
import { UsersComponent } from './pages/entity/user/users/users.component';
import { LayoutComponent } from './core/layout/layout.component';
import { UserEditComponent } from './pages/entity/user/user-edit/user-edit.component';
const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children:[
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutUsComponent},
      { path: 'users', component: UsersComponent},
      { path: 'users/:userId', component: UserDetailComponent, children:[
        { path: 'edit', component: UserEditComponent},
      ]},
    ]
  },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
