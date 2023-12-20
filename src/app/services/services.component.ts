import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicesModel } from '../models/services.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html'
})
export class ServicesComponent {  
  servicesUrl: string = "http://localhost:3000/services/";
  
  services: ServicesModel[] = [];
  constructor(private _http: HttpClient){
    this.getServices();
  }

  getServices() {
    this._http.get<ServicesModel[]>(this.servicesUrl)
      .subscribe({
        next: (res) => {
          this.services = res;
          // this.services = res.short((a, b) => b.name.localCompare(a.name))
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
