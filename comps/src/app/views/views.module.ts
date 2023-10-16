import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule} from "../shared/shared.module";
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  declarations: [

    ViewsHomeComponent,
       StatisticsComponent,
       ItemsListComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
