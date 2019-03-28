import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../app/home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";
import { AbcComponent } from "./abc/abc.component";

const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  // { path: 'login', component: LoginComponent},
  { path: "", component: LoginComponent },
  { path: "abc", component: AbcComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },

  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
