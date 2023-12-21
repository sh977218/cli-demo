import { Routes } from '@angular/router';
import {FooComponent} from "../app/foo/foo.component";
import {BarComponent} from "../app/bar/bar.component";

export const routes: Routes = [{
  path:'foo',component:FooComponent
},{
  path:'bar',component:BarComponent
}];
