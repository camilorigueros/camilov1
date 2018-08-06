import{ Component } from '@angular/core';

@Component({
	selector: 'compras',
	templateUrl: './compras.component.html' 
})

export class ComprasComponent{
	public titulo;

	construtor(){
		this.titulo = 'estos son los compras futuras';
	}

}