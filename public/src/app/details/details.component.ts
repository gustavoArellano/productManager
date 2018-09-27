import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    constructor(
      private _httpService: HttpService,
      private _route: ActivatedRoute,
      private _router: Router) { }

    product = {
      name: '',
      quantity: '',
      price: ''
    };

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getOne(params['id']);
    });
  }

  getOne(id) {
    const obs = this._httpService.getOne(id);
    obs.subscribe(data => {
      if (data['message'] === true) {
        this.product = data['data'];
      } else {
          console.log('got error in getOne');
        }
    });
  }

  deleteProduct(id) {
    // var quantity = this.product.quantity
    let obs = this._httpService.deleteProduct(id);
    obs.subscribe(data => {
      if (data['message'] === true) {
        // if (quantity == 0) {
        this.goHome();
        // }
      } else {
        console.log('We have an error in Delete');
      }
    });
  }

  goHome() {
    this._router.navigate(['']);
  }

}
