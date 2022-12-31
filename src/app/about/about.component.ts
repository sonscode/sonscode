import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
// image 1
  public picTranslate: String = "onImage";
  public descTranslate: String = "static";
  public onDesc: any;
  public nothidden: boolean = true;
  public hidden: boolean = false;

  // image 2
  public picTranslate1: String = "onImage1";
  public descTranslate1: String = "static1";
  public onDesc1: any;
  public nothidden1: boolean = true;
  public hidden1: boolean = false;

    // image 3
    public picTranslate2: String = "onImage2";
    public descTranslate2: String = "static2";
    public onDesc2: any;
    public nothidden2: boolean = true;
    public hidden2: boolean = false;
  
    // image 4
    public picTranslate3: String = "onImage3";
    public descTranslate3: String = "static3";
    public onDesc3: any;
    public nothidden3: boolean = true;
    public hidden3: boolean = false;

  ngOnInit(): void {
  }
// image-func1
   turnOn(){
    if (this.picTranslate == "onImage") {
      this.picTranslate = "onDesc";
  this.descTranslate= "turn";
      this.nothidden = false;
      this.hidden=true;
    }
    else{
      this.picTranslate = "onImage";
  this.descTranslate= "static";
      this.nothidden=true;
      this.hidden = false;
    }
  }
//end of image-func1

//image-func2
  turnOn1(){
    if (this.picTranslate1 == "onImage1") {
      this.picTranslate1 = "onDesc1";
  this.descTranslate1= "turn1";
      this.nothidden1 = false;
      this.hidden1=true;
    }
    else{
      this.picTranslate1 = "onImage1";
  this.descTranslate1= "static1";
      this.nothidden1=true;
      this.hidden1 = false;
    }
  }
//end of image-func2

//image-func3
turnOn2(){
  if (this.picTranslate2 == "onImage2") {
    this.picTranslate2 = "onDesc2";
this.descTranslate2= "turn2";
    this.nothidden2 = false;
    this.hidden2=true;
  }
  else{
    this.picTranslate2 = "onImage2";
this.descTranslate2= "static2";
    this.nothidden2=true;
    this.hidden2 = false;
  }
}
//end of image-func3

//image-func3
turnOn3(){
  if (this.picTranslate3 == "onImage3") {
    this.picTranslate3 = "onDesc3";
this.descTranslate3= "turn3";
    this.nothidden3 = false;
    this.hidden3=true;
  }
  else{
    this.picTranslate3 = "onImage3";
this.descTranslate3= "static3";
    this.nothidden3=true;
    this.hidden3 = false;
  }
}
//end of image-func4

}
