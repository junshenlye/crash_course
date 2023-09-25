import { Component } from "@angular/core";
import { CoursesService } from "./courses.services";

@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
    <li *ngFor= "let course of courses">
        {{ course }}
    </li>
    </ul>
    `
})

export class CoursesComponent {

    title = "Courses";
    courses;

    constructor(service: CoursesService) { 
        this.courses = service.getCourses();
    }
    getTitle(){ 
        return this.title
    }

    // Logic for calling an HTTP service
    
}