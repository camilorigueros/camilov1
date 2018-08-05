import{ Component } from '@angular/core';

@Component({
	selector: 'ingresos',
	templateUrl: './ingresos.component.html' 
})

export class IngresosComponent{
	public titulo;

	construtor(){
		this.titulo = 'estos son los ingresos';
	}

}