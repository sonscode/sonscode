import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface studentData {
  name: string;

}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  getMarkList: any = []
  getMarkList2: any = []
  getMarkList3: any = []
  getMarkList4: any = []
  getMarkList5: any = []
  getMarkList6: any = []

  result: number = 0;

  count1!: number
  count2!: number

  displayedColumns: string[] = [
    'subjectName',
    'name1',
    'name2',
    'name3',
    'name4',
    'name5',
    'name6',
    'name7',
    'name8',
    'name9',
    'name10',
    'name11',
    'name12',
    'name13',
    'name14',
    'name15',
    'name16',
    'name17',
    'name18',
    'name19',
    'name20',
    'name21',
    'name22',
    'name23',
    'name24',
    'name25',
    'name26',
    'name27',
    'name28',
    'name29',
    'name30',
    'actions'
  ];

  dataSource!: MatTableDataSource<any>
  dataSource12!: MatTableDataSource<any>
  dataSource13!: MatTableDataSource<any>
  dataSource14!: MatTableDataSource<any>
  dataSource15!: MatTableDataSource<any>
  dataSource16!: MatTableDataSource<any>

  // dataNameSource!: MatTableDataSource<studentData>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginator12!: MatPaginator;
  @ViewChild(MatSort) sort12!: MatSort;
  @ViewChild(MatSort) sort13!: MatSort;
  @ViewChild(MatSort) sort14!: MatSort;
  @ViewChild(MatSort) sort15!: MatSort;
  @ViewChild(MatSort) sort16!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {}

  ngOnInit(): void {
    // this.getNames();
    // this.getTotal();
    this.getAllMarks();
    this.getAllMarks12();
    this.getAllMarks13();
    this.getAllMarks14();
    this.getAllMarks15();
    this.getAllMarks16();
  }



  openDialog() {
    this.dialog.open(DialogComponent, {
      width: "85%", height: "95%"
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllMarks();
        this.getAllMarks12();
        this.getAllMarks13();
        this.getAllMarks14();
        this.getAllMarks15();
        this.getAllMarks16();
      }
    })
  }

  editMarks(row: any) {
    this.dialog.open(DialogComponent, {
      width: "85%", height: "95%",
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllMarks();
        this.getAllMarks12();
        this.getAllMarks13();
        this.getAllMarks14();
        this.getAllMarks15();
        this.getAllMarks16();
      }
    })
  }

  // All getters*********************************************************************************************************************
  getAllMarks() {
    this.api.getMark()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.getMarkList = res;
          // console.log(res);
        },
        error: (err) => {
          alert("Error while fetching marks!");
        }
      })
  }

  getAllMarks12() {
    this.api.getMark12()
      .subscribe({
        next: (res) => {
          this.dataSource12 = new MatTableDataSource(res);
          // this.dataSource12.paginator = this.paginator12;
          this.dataSource12.sort = this.sort12;
          this.getMarkList2 = res;

          // console.log(res);
        },
        error: (err) => {
          alert("Error while fetching marks!");
        }
      })
  }

  getAllMarks13() {
    this.api.getMark13()
      .subscribe({
        next: (res) => {
          this.dataSource13 = new MatTableDataSource(res);
          // this.dataSource12.paginator = this.paginator12;
          this.dataSource13.sort = this.sort13;
          this.getMarkList3 = res;
          // console.log(res);
        },
        error: (err) => {
          alert("Error while fetching marks!");
        }
      })
  }

  getAllMarks14() {
    this.api.getMark14()
      .subscribe({
        next: (res) => {
          this.dataSource14 = new MatTableDataSource(res);
          // this.dataSource12.paginator = this.paginator12;
          this.dataSource14.sort = this.sort14;
          this.getMarkList4 = res;

          // console.log(res);
        },
        error: (err) => {
          alert("Error while fetching marks!");
        }
      })
  }

  getAllMarks15() {
    this.api.getMark15()
      .subscribe({
        next: (res) => {
          this.dataSource15 = new MatTableDataSource(res);
          // this.dataSource12.paginator = this.paginator12;
          this.dataSource15.sort = this.sort15;
          this.getMarkList5 = res;

          // console.log(res);
        },
        error: (err) => {
          alert("Error while fetching marks!");
        }
      })
  }

  getAllMarks16() {
    this.api.getMark16()
      .subscribe({
        next: (res) => {
          this.dataSource16 = new MatTableDataSource(res);
          // this.dataSource12.paginator = this.paginator12;
          this.dataSource16.sort = this.sort16;
          this.getMarkList6 = res;

          // console.log(res);
        },
        error: (err) => {
          alert("Error while fetching marks!");
        }
      })
  }


  //Filters*********************************************************************************************************************
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter12(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource12.filter = filterValue.trim().toLowerCase();

    if (this.dataSource12.paginator) {
      this.dataSource12.paginator.firstPage();
    }
  }

  applyFilter13(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource13.filter = filterValue.trim().toLowerCase();

    if (this.dataSource13.paginator) {
      this.dataSource13.paginator.firstPage();
    }
  }

  applyFilter14(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource14.filter = filterValue.trim().toLowerCase();

    if (this.dataSource14.paginator) {
      this.dataSource14.paginator.firstPage();
    }
  }

  applyFilter15(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource15.filter = filterValue.trim().toLowerCase();

    if (this.dataSource15.paginator) {
      this.dataSource15.paginator.firstPage();
    }
  }

  applyFilter16(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource16.filter = filterValue.trim().toLowerCase();

    if (this.dataSource16.paginator) {
      this.dataSource16.paginator.firstPage();
    }
  }

  //All edits and deletes***************************************************************************************************

  deleteMark(id: number) {
    if (confirm("Confirm delete")) {
      this.api.deleteMark(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.getAllMarks();
        },
        error: () => {
          alert("Sorry! The marks could not be removed")
        }
      })
    }
  }


  deleteMark12(id: number) {
    if (confirm("Confirm delete")) {
      this.api.deleteMark12(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.getAllMarks12();

        },
        error: () => {
          alert("Sorry! the marks could not be removed")
        }
      })
    }
  }

  deleteMark13(id: number) {
    if (confirm("Confirm delete")) {

      this.api.deleteMark13(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.getAllMarks13();

        },
        error: () => {
          alert("Sorry! the marks could not be removed")
        }
      })
    }
  }

  deleteMark14(id: number) {
    if (confirm("Confirm delete")) {

      this.api.deleteMark14(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.getAllMarks14();

        },
        error: () => {
          alert("Sorry! the marks could not be removed")
        }
      })
    }
  }

  deleteMark15(id: number) {
    if (confirm("Confirm delete")) {

      this.api.deleteMark15(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.getAllMarks15();
        },
        error: () => {
          alert("Sorry! the marks could not be removed")
        }
      })
    }
  }

  deleteMark16(id: number) {
    // alert("Confirm delete . . . ")
    if (confirm("Confirm delete")) {

      this.api.deleteMark16(id).subscribe({
        next: (res) => {
          alert("Marks deleted successfully!")
          this.getAllMarks16();
        },
        error: () => {
          alert("Sorry! the marks could not be removed")
        }
      })
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
