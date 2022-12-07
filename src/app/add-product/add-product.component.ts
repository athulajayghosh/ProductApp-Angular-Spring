import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productCode=""
  productName=""
  manDate=""
  expDate=""
  brand=""
  price=""
  sellerName=""
  distributorName=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={
      productCode:this.productCode,
      productName:this.productName,
      manDate:this.manDate,
      expDate:this.expDate,
      brand:this.brand,
      price:this.price,
      sellerName:this.sellerName,
      distributorName:this.distributorName
    }
    this.api.adddata(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Data Added")
      })

  }

}
