import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ConvertionsComponent } from './convertions/convertions.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'convertions', component: ConvertionsComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {
}
