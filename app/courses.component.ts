import {Component} from 'angular2/core'

@Component({
    selector: 'courses',
    template: `
    <h2>Courses !!</h2>
    {{ title }}
    <ul>
        <li *ngFor="#course of courses">
            {{ course }}
        </li>
    </ul>
    `
})

export class CoursesComponent {
    title: string = "Courses title !";
    courses = ["Course 1", "Course 2", "Course 3"];
}