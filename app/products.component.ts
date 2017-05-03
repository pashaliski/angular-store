import {Component} from 'angular2/core'
import {ProductsService} from './products.service'

@Component({
    selector: 'products',
    template: `
    <h2>Avalaible Products</h2>
    {{ title }}
    <ul>
        <li *ngFor="#product of products">
            {{ product }}
        </li>
    </ul>
    `,
    providers: [ProductsService]
})

export class ProductsComponent {
    products;

    constructor(productsService: ProductsService){
        this.products = productsService.getProducts();
    }
}