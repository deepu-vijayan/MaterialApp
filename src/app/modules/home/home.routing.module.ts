import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
  { path: '', component:LayoutComponent },
  { path: 'search', component:SearchResultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
