import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}

  products = '';
  product = '';


  ngOnInit() {
    this.showProducts();
  }

  showProducts() {
    const obs = this._httpService.getProducts();
    obs.subscribe(data => {
      if (data['message'] === true) {
        this.products = data['data'];
      } else {
          console.log('We have an error in showMovies', data);
      }
    });
  }

  showSingleProduct(id) {
    const obs = this._httpService.getOne(id);
    obs.subscribe(data => {
      if (data['message'] === true) {
        this.product = data['data'];
      } else {
          console.log('We have an error in homeComponenet', data);
      }
    });
  }

}
