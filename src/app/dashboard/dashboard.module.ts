import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DashboardComponent } from "./containers/dashboard/dashboard.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { TopNavComponent } from "./components/top-nav/top-nav.component";
import { PermissionsComponent } from "./components/permissions/permissions.component";
import { MatCard, MatGridListModule, MatCardModule } from "@angular/material";

@NgModule({
  imports: [CommonModule, FormsModule, MatGridListModule, MatCardModule],
  declarations: [
    DashboardComponent,
    UserListComponent,
    TopNavComponent,
    PermissionsComponent
  ]
})
export class DashboardModule {}
