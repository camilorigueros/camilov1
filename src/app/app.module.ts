import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing ,appRoutingProviders } from './app.routing';



import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { ComprasComponent } from './components/compras/compras.component';
import { HomeComponent } from './components/Home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/registro/register.component';

//servicios
import { IntegranteService } from './servicios/integrante.service';


@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresosComponent,
    ComprasComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    IntegranteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
