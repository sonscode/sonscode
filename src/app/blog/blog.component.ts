import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Output() updatedMatch = new EventEmitter<string>();

  getMarkList: any = [];
  getMarkList2: any = [];
  getMarkList3: any = [];
  getMarkList4: any = [];
  getMarkList5: any = [];
  getMarkList6: any = [];

  result: number = 0;
  count1!: number;
  count2!: number;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.listMarks();
    this.listMarks2();
    this.listMarks3();
    this.listMarks4();
    this.listMarks5();
    this.listMarks6();
    // this.getMarkList= this.listMarks();
  }
  openDialog() {
    this.dialog.open(Dialog2Component, {
      width: "85%", height: "95%"
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.listMarks();
        this.listMarks2();
        this.listMarks3();
        this.listMarks4();
        this.listMarks5();
        this.listMarks6();
      }
    })
  }

  editMarks(row: any) {
    this.dialog.open(Dialog2Component, {
      width: "85%", height: "95%",
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.listMarks();
        this.listMarks2();
        this.listMarks3();
        this.listMarks4();
        this.listMarks5();
        this.listMarks6();
      }
    })
  }

  //All getters***********************************************************************************************************
  listMarks(): any {
    this.api.getMark2().subscribe({
      next: (res) => {
        this.getMarkList = res;
        // this.markList[9].subjectName
        // alert((this.markList[9].subjectName))     
      },
      error: () => {
        alert("Could not load marks!")
      }

    })
  }

  listMarks2(): any {
    this.api.getMark22().subscribe({
      next: (res) => {
        this.getMarkList2 = res;
        // this.markList[9].subjectName
        // alert((this.markList[9].subjectName))     
      },
      error: () => {
        alert("Could not load marks!")
      }

    })
  }

  listMarks3(): any {
    this.api.getMark23().subscribe({
      next: (res) => {
        this.getMarkList3 = res;
        // this.markList[9].subjectName
        // alert((this.markList[9].subjectName))     
      },
      error: () => {
        alert("Could not load marks!")
      }

    })
  }

  listMarks4(): any {
    this.api.getMark24().subscribe({
      next: (res) => {
        this.getMarkList4 = res;
        // this.markList[9].subjectName
        // alert((this.markList[9].subjectName))     
      },
      error: () => {
        alert("Could not load marks!")
      }

    })
  }

  listMarks5(): any {
    this.api.getMark25().subscribe({
      next: (res) => {
        this.getMarkList5 = res;
        // this.markList[9].subjectName
        // alert((this.markList[9].subjectName))     
      },
      error: () => {
        alert("Could not load marks!")
      }

    })
  }

  listMarks6(): any {
    this.api.getMark26().subscribe({
      next: (res) => {
        this.getMarkList6 = res;
        // this.markList[9].subjectName
        // alert((this.markList[9].subjectName))     
      },
      error: () => {
        alert("Could not load marks!")
      }
    })
  }

  //All edits and deletes***************************************************************************************************

  deleteMark2(id: number) {
    if (confirm("Confirm delete")) {
      this.api.deleteMark2(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.listMarks();
        },
        error: () => {
          alert("Sorry! Your marks could not be removed")
        }
      })
    }
  }

  deleteMark22(id: number) {
    if (confirm("Confirm delete")) {

      this.api.deleteMark22(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.listMarks2();
        },
        error: () => {
          alert("Sorry! Your marks could not be removed")
        }
      })
    }
  }

  deleteMark23(id: number) {
    if (confirm("Confirm delete")) {

      this.api.deleteMark23(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.listMarks3();
        },
        error: () => {
          alert("Sorry! Your marks could not be removed")
        }
      })
    }
  }

  deleteMark24(id: number) {
    if (confirm("Confirm delete")) {

      this.api.deleteMark24(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.listMarks4();
        },
        error: () => {
          alert("Sorry! Your marks could not be removed")
        }
      })
    }
  }

  deleteMark25(id: number) {
    if (confirm("Confirm delete")) {

      this.api.deleteMark25(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.listMarks5();
        },
        error: () => {
          alert("Sorry! Your marks could not be removed")
        }
      })
    }
  }

  deleteMark26(id: number) {
    // alert("Confirm delete . . . ")
    if (confirm("Confirm delete")) {

      this.api.deleteMark26(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.listMarks6();
        },
        error: () => {
          alert("Sorry! Your marks could not be removed")
        }
      })
    }
  }
//All deletes ... many in one click**************************************************
  deleteAll1() {
    if (confirm("You want to delete all marks for 1st sequence?")) {
      for (let i = 0; i < 30; i++) {
        this.api.deleteMark2(i).subscribe({
          next: (res) => {
            // console.log("All 1st sequence marks have been removed")
            this.listMarks();
          },
          error: () => {
            // alert("One or more marks could not be removed")
          }
        })
      }
    }
  }

  deleteAll2() {
    if (confirm("You want to delete all marks for 2nd sequence?")) {
      for (let i = 0; i < 30; i++) {
        this.api.deleteMark22(i).subscribe({
          next: (res) => {
            // console.log("All 1st sequence marks have been removed")
            this.listMarks2();
          },
          error: () => {
            // alert("One or more marks could not be removed")
          }
        })
      }
    }
  }

  deleteAll3() {
    if (confirm("You want to delete all marks for 3rd sequence?")) {
      for (let i = 0; i < 30; i++) {
        this.api.deleteMark23(i).subscribe({
          next: (res) => {
            // console.log("All 1st sequence marks have been removed")
            this.listMarks3();
          },
          error: () => {
            // alert("One or more marks could not be removed")
          }
        })
      }
    }
  }

  deleteAll4() {
    if (confirm("You want to delete all marks for 4th sequence?")) {
      for (let i = 0; i < 30; i++) {
        this.api.deleteMark24(i).subscribe({
          next: (res) => {
            // console.log("All 1st sequence marks have been removed")
            this.listMarks4();
          },
          error: () => {
            // alert("One or more marks could not be removed")
          }
        })
      }
    }
  }

  deleteAll5() {
    if (confirm("You want to delete all marks for 5th sequence?")) {
      for (let i = 0; i < 30; i++) {
        this.api.deleteMark25(i).subscribe({
          next: (res) => {
            // console.log("All 1st sequence marks have been removed")
            this.listMarks5();
          },
          error: () => {
            // alert("One or more marks could not be removed")
          }
        })
      }
    }
  }

  deleteAll6() {
    if (confirm("You want to delete all marks for 6th sequence?")) {
      for (let i = 0; i < 30; i++) {
        this.api.deleteMark26(i).subscribe({
          next: (res) => {
            // console.log("All 1st sequence marks have been removed")
            this.listMarks6();
          },
          error: () => {
            // alert("One or more marks could not be removed")
          }
        })
      }
    }
  }

//Getting all marks... for term ONE... *********************************************************************************

getTermMark(el1: any, studName: any) {
  var mk1 = 0, mk2 = 0
  for (let i = 0; i < this.getMarkList.length; i++) {
    if (el1 == this.getMarkList[i].subjectName) {
      this.count1 = i;
      mk1 = this.getMarkList[this.count1][studName]
    }
  }

  for (let i = 0; i < this.getMarkList2.length; i++) {
    if (el1 == this.getMarkList2[i].subjectName) {
      this.count2 = i;
      mk2 = this.getMarkList2[this.count2][studName]
    }
  }  
  var mean = ((mk1 + mk2) / 2).toFixed(2);
  // console.log(this.count1, this.count2, mk1, mk2, mean)
  return mean;

}

//Getting all marks... for term TWO... *********************************************************************************

getTermMark2(el1: any, studName: any) {
  var mk1 = 0, mk2 = 0
  for (let i = 0; i < this.getMarkList3.length; i++) {
    if (el1 == this.getMarkList3[i].subjectName) {
      this.count1 = i;
      mk1 = this.getMarkList3[this.count1][studName]
    }
  }

  for (let i = 0; i < this.getMarkList4.length; i++) {
    if (el1 == this.getMarkList4[i].subjectName) {
      this.count2 = i;
      mk2 = this.getMarkList4[this.count2][studName]
    }
  }  
  var mean = ((mk1 + mk2) / 2).toFixed(2);
  // console.log(this.count1, this.count2, mk1, mk2, mean)
  return mean;

}

//Getting all marks... for term THREE... *********************************************************************************

getTermMark3(el1: any, studName: any) {
  var mk1 = 0, mk2 = 0
  for (let i = 0; i < this.getMarkList5.length; i++) {
    if (el1 == this.getMarkList5[i].subjectName) {
      this.count1 = i;
      mk1 = this.getMarkList5[this.count1][studName]
    }
  }

  for (let i = 0; i < this.getMarkList6.length; i++) {
    if (el1 == this.getMarkList6[i].subjectName) {
      this.count2 = i;
      mk2 = this.getMarkList6[this.count2][studName]
    }
  }  
  var mean = ((mk1 + mk2) / 2).toFixed(2);
  // console.log(this.count1, this.count2, mk1, mk2, mean)
  return mean;

}


 //Getting all Total marks... for sequence ONE... *********************************************************************************
 getTotal1(studName: any) {
  var element = 0;
  for (let i = 0; i < this.getMarkList.length; i++) {
    element += this.getMarkList[i].coef * this.getMarkList[i][studName]
  }
  return element;
}

//Getting all Total marks... for sequence TWO... ************************************************************************************
getTotal2(studName: any) {
  var element = 0;
  for (let i = 0; i < this.getMarkList2.length; i++) {
    element += this.getMarkList2[i].coef * this.getMarkList2[i][studName]
  }
  return element;
}

//Getting all Total marks... for sequence THREE... ************************************************************************************
getTotal3(studName: any) {
  var element = 0;
  for (let i = 0; i < this.getMarkList3.length; i++) {
    element += this.getMarkList3[i].coef * this.getMarkList3[i][studName]
  }
  return element;
}

//Getting all Total marks... for sequence FOUR... ************************************************************************************
getTotal4(studName: any) {
  var element = 0;
  for (let i = 0; i < this.getMarkList4.length; i++) {
    element += this.getMarkList4[i].coef * this.getMarkList4[i][studName]
  }
  return element;
}

//Getting all Total marks... for sequence FIVE... ************************************************************************************
getTotal5(studName: any) {
  var element = 0;
  for (let i = 0; i < this.getMarkList5.length; i++) {
    element += this.getMarkList5[i].coef * this.getMarkList5[i][studName]
  }
  return element;
}

  //Getting all Total marks... for sequence SIX... ************************************************************************************
  getTotal6(studName: any) {
    var element = 0;
    for (let i = 0; i < this.getMarkList6.length; i++) {
      element += this.getMarkList6[i].coef * this.getMarkList6[i][studName]
    }
    return element;
  }








}
