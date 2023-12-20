import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PortfoliosModel } from '../models/portfolios.model';

@Component({
  selector: 'app-portfolios',
  standalone: true,
  imports: [],
  templateUrl: './portfolios.component.html'
})
export class PortfoliosComponent {  
  portfoliosUrl: string = "http://localhost:3000/portfolios/";
  
  constructor(private _http: HttpClient) {
    this.getPortfolios();
  }

  portfolios: PortfoliosModel[] = [];
  getPortfolios() {
    this._http.get<PortfoliosModel[]>(this.portfoliosUrl)
            .subscribe({
                next: (res) => {
                    this.portfolios = res;
                },
                error: (err) => {
                    console.log(err);
                }
            })
  }

}
