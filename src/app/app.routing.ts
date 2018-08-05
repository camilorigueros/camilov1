import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { ComprasComponent } from './components/compras/compras.component';
import { HomeComponent } from './components/Home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/registro/register.component';

const appRoutes: Routes = [
	{path:'', redirectTo: 'home', pathMatch: 'full'},
	{path:'home', component: HomeComponent},
	{path:'gastos', component: GastosComponent},
	{path:'ingresos', component: IngresosComponent},
	{path:'compras', component: ComprasComponent},
	{path:'login', component: LoginComponent},
	{path:'registro', component: RegisterComponent},
	{path:'**', component: GastosComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
