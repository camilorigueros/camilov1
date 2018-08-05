import{ Component} from '@angular/core';

@Component({
	selector: 'gastos',
	templateUrl: './gastos.component.html' 
})

export class GastosComponent{
	public titulo;

	construtor(){
		this.titulo = 'estos son los gatos';
	}

}