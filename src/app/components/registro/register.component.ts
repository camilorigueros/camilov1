import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Integrante} from '../../models/integrante';
import {GLOBAL} from '../../servicios/global';
import { IntegranteService } from '../../servicios/integrante.service';

@Component({
	selector: 'register',
	templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit{
	public title: String;
	public integrante: Integrante;
	public status: String;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _integranteService: IntegranteService
	){
		this.title = 'Registro';
		this.integrante = new Integrante('','','','','','','');
	}

	ngOnInit(){
		console.log('register.component cargado');
	}

	onSubmit(registerForm){
		this._integranteService.register(this.integrante).subscribe(
			response =>{
				if(response.integrante && response.integrante._id){
					this.status = 'success';
					this.integrante = new Integrante('','','','','','','');
					console.log(response.integrante);
					registerForm.reset();
				}else{
					this.status = 'Error de registro';			
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}