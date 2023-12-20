import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { EducationsModel } from '../models/educations.model';
import { ExperiencesModel } from '../models/experiences.model';
import { SkillsModel } from '../models/skills.model';


@Component({
    selector: 'app-about',
    standalone: true,
    imports: [],
    templateUrl: './about.component.html'
})
export class AboutComponent {
    settingsUrl: string = "http://localhost:3000/settings/1";
    educationsUrl: string = "http://localhost:3000/educations/";
    experiencesUrl: string = "http://localhost:3000/experiences/";
    skillsUrl: string = "http://localhost:3000/skills/";

    educations: EducationsModel[] = [];
    experiences: ExperiencesModel[] = [];
    skills: SkillsModel[] = [];

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
    webSiteTitle: string = "";
    birthDate: string = "";
    age: any = "";
    degree: string = "";
    city: string = "";
    country: string = "";
    freelance: string = "";
    cvUrl: string = "";

    constructor(private _http: HttpClient) {
        this.getSettings();
        this.getEducations();
        this.getExperiences();
        this.getSkills();
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
                this.webSiteTitle = res.webSiteTitle;
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
    getEducations() {
        this._http.get<EducationsModel[]>(this.educationsUrl)
            .subscribe({
                next: (res) => {
                    this.educations = res;
                    // this.educations = res.short((a, b) => b.name.localCompare(a.name))
                },
                error: (err) => {
                    console.log(err);
                }
            })
    }
    getExperiences() {
        this._http.get<ExperiencesModel[]>(this.experiencesUrl)
            .subscribe({
                next: (res) => {
                    this.experiences = res;
                    // this.experiences = res.short((a, b) => b.name.localCompare(a.name))
                },
                error: (err) => {
                    console.log(err);
                }
            })
    }
    getSkills() {
        this._http.get<SkillsModel[]>(this.skillsUrl)
            .subscribe({
                next: (res) => {
                    this.skills = res;
                    // this.skills = res.short((a, b) => b.name.localCompare(a.name))
                },
                error: (err) => {
                    console.log(err);
                }
            })
    }
}
