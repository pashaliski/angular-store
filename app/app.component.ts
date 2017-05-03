import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {ProductsComponent} from './products.component'

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><products></products>',
    directives: [CoursesComponent, ProductsComponent]
})
export class AppComponent { }