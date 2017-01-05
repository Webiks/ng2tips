import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ConfigService{

  private result: Object = null;

  constructor(private http: Http) {

  }

  public getResult() {
    return this.result;
  }

  public load()
  {

    return this.http.get('/assets/app-config.json').map(res => {
      this.result = res.json();
    }).toPromise();

  }

}
