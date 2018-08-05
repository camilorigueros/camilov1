import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {IntegranteService} from '../../servicios/integrante.service';
import {Integrante} from '../../models/integrante';

@Component({
	selector: 'login',
	templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{
	public title: String;
	public integrante: Integrante;
	public status: String;
	public token;
	public identity;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _integranteService: IntegranteService

	){
		this.title = 'Login';
		this.integrante = new Integrante('','','','','','','');
	}

	ngOnInit(){
		console.log('login.component cargado');
	}

	onSubmit(){
		console.log(this.integrante);
		this._integranteService.singup(this.integrante).subscribe(
			response=>{
				this.identity = response;
				if(this.identity || this.identity._id){
					this.status = 'error';
				}else{
					console.log(this.identity);
					//conseguir token
					/*this._integranteService.singup(this.integrante, 'true').subscribe(
						response=>{
							this.token = response.token;
							if(this.token.length<=0){
								alert('no genero token');
								this.status = 'error';
							}else{
								console.log(this.token);
								this.status = 'succes';
							}
						},
						error =>{
							console.log(<any>error);
							this.status = 'error';
						}

					);*/
				}
			},
			error =>{
				var msg = <any>error;
				if(msg != null){
					console.log(msg);
					var body = JSON.parse(msg._body);
					console.log(body);
					this.status = 'error';
				}		
				
				
			}
		);
	}


}