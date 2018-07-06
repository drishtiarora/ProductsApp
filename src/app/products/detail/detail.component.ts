import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProductsService]
})
export class DetailComponent implements OnInit {

  productData : any = [];
  paramData : any ;
  product : any='';
  constructor(private _activatedRoute : ActivatedRoute,
              private _router: Router,
              private _productsService : ProductsService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((data)=>{
     this.paramData = data;
      
      this._productsService.getProducts().subscribe((data)=>{
        this.productData = data;
        console.log("products is" , this.productData);
        this.test(this.productData);
        console.log("after check");
      })
      

    })
  }

  test(prodData){
    for(let i of prodData){
      if(i.productCode == this.paramData.pcode){
        return this.product=i; 
      }
    }
  }


  backToList(){
    this._router.navigate(['/products']);
  }  
}
