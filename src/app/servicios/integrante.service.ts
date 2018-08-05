import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class IntegranteService{
	public url: string;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	register(integrante){
		let params = JSON.stringify(integrante);
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'crearIntegrante', params, {headers:headers}).map(res => res.json());
	}

	singup(userLogin, gettoken = null){

		if(gettoken != null){
			userLogin.gettoken = gettoken;
		}
		let params = JSON.stringify(userLogin);
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.post(this.url+'login', params, {headers:headers}).map(res => res.json());
	}
}
