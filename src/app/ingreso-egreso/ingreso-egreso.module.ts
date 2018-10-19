import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { OrdenIngresoEgresoPipe } from './orden-ingreso-egreso.pipe';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './../dashboard/dashboard-routing.module';
import { ingresoEgresoReducer } from './ingreso-egreso.reducer';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature('ingresoEgreso', ingresoEgresoReducer)
  ],
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    OrdenIngresoEgresoPipe
  ]
})
export class IngresoEgresoModule { }
