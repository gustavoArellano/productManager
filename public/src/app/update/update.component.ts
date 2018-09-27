import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  // newProduct: any;
  product: any;

  productInfo = {
    name: '',
    quantity: '',
    price: ''
  };

  errors = [];


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getOne(params['id']);
    });
    // this.productInfo = {
    //   name: '',
    //   quantity: '',
    //   price: ''
    // };
  }

  getOne(id) {
    const obs = this._httpService.getOne(id);
    obs.subscribe(data => {
      if (data['message'] === true) {
        this.productInfo = data['data'];
      } else {
          console.log('got error in getOne inside update');
        }
    });
  }

  changeProduct(_id) {
    console.log(_id);
    const obs = this._httpService.updateProduct(_id, this.productInfo);
    obs.subscribe(data => {
      console.log('got data back', data);
        if (data['message'] == true) {
          this.productInfo.name = '';
          this.productInfo.quantity = '';
          this.productInfo.price = '';
          this.goHome();
        } else if (data['message'] == false) {
          for (var key in data['inputError']['errors']) {
            this.errors[key] = data['inputError']['errors'][key];
            console.log('got error!', this.errors);
        }
      }
    });
}


  goHome() {
    this._router.navigate(['']);
  }

}
