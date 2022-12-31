import { Component, OnInit } from '@angular/core';
import { MarksApiService } from '../services/marks-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData = []
  constructor(private homeService: MarksApiService) { }

  ngOnInit(): void {
    this.homeService.getHomeData()
    .subscribe({
      next: (res: any) =>{
        this.homeData = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
  public card: String = "Lorem ipsum dolor sit amet ... ipsam nulla nemo velit vitae omnis perferendis error facilis!" ;

  public classHeight: String = "small-height";
  public classMargin: String = "smallMargin";
  public classVisible: String = "notVisible";

  public classHeight1: String = "small-height1";
  public classMargin1: String = "smallMargin1";
  public classVisible1: String = "notVisible1";

  public classHeight2: String = "small-height2";
  public classMargin2: String = "smallMargin2";
  public classVisible2: String = "notVisible2";

  public case: String = "more";
  public case1: String = "more";
  public case2: String = "more";

  expandCard(){
    if ((this.classHeight == 'small-height' && this.classMargin == "smallMargin")) {
      this.classHeight = 'big-height';
      this.classMargin = "bigMargin";
      this.case = "reduce";
      this.classVisible = "isVisible";
    } else {
      this.classHeight = 'small-height';
      this.classMargin = "smallMargin";
      this.case = "more";
      this.classVisible = "notVisible";
    }
  }

  expandCard1(){
    if ( (this.classHeight1 == 'small-height1' && this.classMargin1 == "smallMargin1")) {
      this.classHeight1 = 'big-height1';
      this.classMargin1 = "bigMargin1";
      this.case1 = "reduce";
      this.classVisible1 = "isVisible1";
    } else {
      this.classHeight1 = 'small-height1';
      this.classMargin1 = "smallMargin1";
      this.case1 = "more";
      this.classVisible1 = "notVisible1";
    }
  }

  expandCard2(){
    if ((this.classHeight2 == 'small-height' && this.classMargin2 == "smallMargin")) {
      this.classHeight2 = 'big-height';
      this.classMargin2 = "bigMargin";
      this.case2 = "reduce";
      this.classVisible2 = "isVisible";
    } else {
      this.classHeight2 = 'small-height';
      this.classMargin2 = "smallMargin";
      this.case2 = "more";
      this.classVisible2 = "notVisible";
    }
  }

  
}
