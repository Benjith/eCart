import { Component, OnInit,OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchAllProductService }from '../fetch-all-product.service' ;
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, OnDestroy  {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute,public FetchAllProductService:FetchAllProductService) { }

  allPro=this.FetchAllProductService.allImgaesurls;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // alert(this.id);

      console.log(this.allPro[this.id-1]);
   });
  
  }
  
 

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
