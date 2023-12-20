import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  settingsUrl: string = "http://localhost:3000/settings/1";

  name: string = "";
  myJob: string = "";
  description: string = "";
  myImage: string = "";
  callUs: string = "";
  office: string = "";
  linkedinTitle: string = "";
  linkedinLink: string = "";
  githubUserName: string = "";
  webSite: string = "";
  birthDate: string = "";
  age: any = "";
  degree: string = "";
  city: string = "";
  country: string = "";
  freelance: string = "";
  cvUrl: string = "";


  constructor(private _http: HttpClient) {
    this.getSettings();
  }
  getSettings() {
    this._http.get(this.settingsUrl).subscribe({
      next: (res: any) => {
        this.name = res.name;
        this.myJob = res.myJob;
        this.description = res.description;
        this.myImage = res.myImage;
        this.cvUrl = res.cvUrl;
        this.callUs = res.callUs;
        this.office = res.office;
        this.linkedinTitle = res.linkedinTitle;
        this.linkedinLink = res.linkedinLink;
        this.githubUserName = res.githubUserName;
        this.webSite = res.webSite;
        this.birthDate = res.birthDate;
        this.age = res.age;
        this.degree = res.degree;
        this.city = res.city;
        this.country = res.country;
        this.freelance = res.freelance;
        this.cvUrl = res.cvUrl;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }
}
