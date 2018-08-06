import{ Component} from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: './home.component.html' 
})

export class HomeComponent{
	public titulo;

	construtor(){
		this.titulo = 'Home';
	}

}