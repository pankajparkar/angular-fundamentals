import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailsModelDrivenComponent } from './user-details-model-driven/user-details-model-driven.component';
import { UserService } from './user.service';

const routes: Route[] = [
  {path: 'template-driven', component: UserProfileComponent},
  {path: 'model-driven', component: UserDetailsModelDrivenComponent},
  {path: '**', redirectTo: 'template-driven'}
]

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserDetailsModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
