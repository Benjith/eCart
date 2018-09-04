import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-productcomponent',
  templateUrl: './productcomponent.component.html',
  styleUrls: ['./productcomponent.component.css']
})
export class ProductcomponentComponent implements OnInit {
  productNames =['Men','Women','Kid'];
  hiddenID=[{value:-1,name:''}];
  favValue:number=0;
  cartValue=0;
  btnStyle:string;
  addToCartItem:string='';
  
 allImgaesurls=[
                 {id:'1',Name:'Royal Enfeild',Category:'Men',url:'../../assets/images/t (6).jpg'},
                 {id:'2',Name:'T Shirt',Category:'Kid',url:'../../assets/images/t (5).jpg'},
                 {id:'3',Name:'Royal Enfeild',Category:'Women',url:'../../assets/images/t (2).jpg'},
                 {id:'4',Name:'Royal Enfeild',Category:'Women',url:'../../assets/images/t (6).jpg'},
                 {id:'5',Name:'Royal Enfeild',Category:'Kid',url:'../../assets/images/t (2).jpg'},
                 {id:'6',Name:'Royal Enfeild',Category:'Men',url:'../../assets/images/t (5).jpg'},
                 {id:'6',Name:'Royal Enfeild',Category:'Kid',url:'../../assets/images/t (2).jpg'},
                 {id:'6',Name:'Royal Enfeild',Category:'Women',url:'../../assets/images/t (6).jpg'},
                 {id:'6',Name:'Royal Enfeild',Category:'Men',url:'../../assets/images/t (2).jpg'},
                 {id:'6',Name:'Royal Enfeild',Category:'Kid',url:'../../assets/images/t (5).jpg'},
                 {id:'6',Name:'Royal Enfeild',Category:'Women',url:'../../assets/images/t (2).jpg'},
                 {id:'6',Name:'Royal Enfeild',Category:'Men',url:'../../assets/images/t (6).jpg'},
                 {id:'6',Name:'Royal Enfeild',Category:'Men',url:'../../assets/images/t (2).jpg'},
             
  ]
  
  arrAddtoFav=[];
  arrAddtoCart=[];
  constructor() {this.btnStyle="glyphicon glyphicon-heart-empty"; }
 

  ngOnInit() {
  }

  showItem(itemId:number,name:string) {
    this.hiddenID=[{value:-1,name:''}];
    this.hiddenID['value']=itemId;
    this.hiddenID['name']=name;
    // alert(this.hiddenID['name']);
  }
  
 favCount(){
  return this.favValue=this.favValue+1;
 }
 addToCart(e){
   this.arrAddtoCart.push(e);
   return this.cartValue=this.cartValue+1;
 }
 remocveCart(e){
  this.arrAddtoCart.splice(this.arrAddtoCart.indexOf(e),1);
  return this,this.cartValue=this.cartValue-1;
 }
 displayAllCartItem(){
   alert(this.arrAddtoCart);
 }


 checkItemInFav(id)
 {
   if(this.arrAddtoFav.indexOf(id)==-1)
   {
    console.log(id);
     return false;
     
   }
   else
   {
    console.log(id);
     return true;
   }
 }
 addToFav(id)
 {
  this.favCount();
  this.arrAddtoFav.push(id);

 }
 removeArrFav(id)
 {
  let i=this.arrAddtoFav.indexOf(id);
  this.arrAddtoFav.splice(i,1);
  this.favValue=this.favValue-1;
 }
 checkItemInCart(id)
 {
   if(this.arrAddtoCart.indexOf(id)==-1)
   {
    return false;
   }
   else{
    return true;
   }
 }
 checkCategoryClick(Category)
 {
  console.log(this.hiddenID['name']+"  "+Category);
  
  if(this.hiddenID['name']==undefined)
  {
    return true;
  }
  else
  {
    if(this.hiddenID['name']==Category)
    {
      return true;
    }
    else{
      return false;
    }
  }
  

}

}
