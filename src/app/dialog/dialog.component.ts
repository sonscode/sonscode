import { ParsedEvent } from '@angular/compiler';
import { Component, OnInit, ViewChild, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isEmpty } from 'rxjs';
import { BlogComponent } from '../blog/blog.component';
import { ApiService } from '../services/api.service';

interface Subject {
  value: string;
  viewValue: string;
}

interface Sequence {
  value: string;
  viewValue: string;
}

interface Coefficient {
  value: number;
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  mark!: any;
  markList: any = []
  getMarkList: any = []
  getMarkList2: any = []
  getMarkList3: any = []
  getMarkList4: any = []
  getMarkList5: any = []
  getMarkList6: any = []

  markForm !: FormGroup;
  postRet!: BlogComponent;
  actionBtn: string = "Save";
  // @ViewChild('child') child!: BlogComponent;


  constructor(private formbuilder: FormBuilder, private api: ApiService, @Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<DialogComponent>) {
    // api.matchResChanged.subscribe(status=>this.verifyMatch());
  }
  ngOnInit(): void {

    this.markForm = this.formbuilder.group({
      sequenceName: ['', Validators.required],
      subjectName: ['', Validators.required],
      coef: ['', Validators.nullValidator],
      name1: ['', Validators.nullValidator],
      name2: ['', Validators.nullValidator],
      name3: ['', Validators.nullValidator],
      name4: ['', Validators.nullValidator],
      name5: ['', Validators.nullValidator],
      name6: ['', Validators.nullValidator],
      name7: ['', Validators.nullValidator],
      name8: ['', Validators.nullValidator],
      name9: ['', Validators.nullValidator],
      name10: ['', Validators.nullValidator],
      name11: ['', Validators.nullValidator],
      name12: ['', Validators.nullValidator],
      name13: ['', Validators.nullValidator],
      name14: ['', Validators.nullValidator],
      name15: ['', Validators.nullValidator],
      name16: ['', Validators.nullValidator],
      name17: ['', Validators.nullValidator],
      name18: ['', Validators.nullValidator],
      name19: ['', Validators.nullValidator],
      name20: ['', Validators.nullValidator],
      name21: ['', Validators.nullValidator],
      name22: ['', Validators.nullValidator],
      name23: ['', Validators.nullValidator],
      name24: ['', Validators.nullValidator],
      name25: ['', Validators.nullValidator],
      name26: ['', Validators.nullValidator],
      name27: ['', Validators.nullValidator],
      name28: ['', Validators.nullValidator],
      name29: ['', Validators.nullValidator],
      name30: ['', Validators.nullValidator]
    })


    if (this.editData) {
      this.actionBtn = "Update";
      this.markForm.controls['subjectName'].setValue(this.editData.subjectName);
      this.markForm.controls['sequenceName'].setValue(this.editData.sequenceName);
      this.markForm.controls['name1'].setValue(this.editData.name1);
      this.markForm.controls['name2'].setValue(this.editData.name2);
      this.markForm.controls['name2'].setValue(this.editData.name2);
      this.markForm.controls['name3'].setValue(this.editData.name3);
      this.markForm.controls['name4'].setValue(this.editData.name4);
      this.markForm.controls['name5'].setValue(this.editData.name5);
      this.markForm.controls['name6'].setValue(this.editData.name6);
      this.markForm.controls['name7'].setValue(this.editData.name7);
      this.markForm.controls['name8'].setValue(this.editData.name8);
      this.markForm.controls['name9'].setValue(this.editData.name9);
      this.markForm.controls['name10'].setValue(this.editData.name10);
      this.markForm.controls['name11'].setValue(this.editData.name11);
      this.markForm.controls['name12'].setValue(this.editData.name12);
      this.markForm.controls['name13'].setValue(this.editData.name13);
      this.markForm.controls['name14'].setValue(this.editData.name14);
      this.markForm.controls['name15'].setValue(this.editData.name15);
      this.markForm.controls['name16'].setValue(this.editData.name16);
      this.markForm.controls['name17'].setValue(this.editData.name17);
      this.markForm.controls['name18'].setValue(this.editData.name18);
      this.markForm.controls['name19'].setValue(this.editData.name19);
      this.markForm.controls['name20'].setValue(this.editData.name20);
      this.markForm.controls['name21'].setValue(this.editData.name21);
      this.markForm.controls['name22'].setValue(this.editData.name22);
      this.markForm.controls['name23'].setValue(this.editData.name23);
      this.markForm.controls['name24'].setValue(this.editData.name24);
      this.markForm.controls['name25'].setValue(this.editData.name25);
      this.markForm.controls['name26'].setValue(this.editData.name26);
      this.markForm.controls['name27'].setValue(this.editData.name27);
      this.markForm.controls['name28'].setValue(this.editData.name28);
      this.markForm.controls['name29'].setValue(this.editData.name29);
      this.markForm.controls['name30'].setValue(this.editData.name30);

    }

    this.checkMarks();
    this.checkMarks12();
    this.checkMarks13();
    this.checkMarks14();
    this.checkMarks15();
    this.checkMarks16();

    this.checkUpdate();
    this.checkUpdate22();
    this.checkUpdate23();
    this.checkUpdate24();
    this.checkUpdate25();
    this.checkUpdate26();

  }
  //end of Onint
  subjects: Subject[] = [
    { value: 'math', viewValue: 'Maths' },
    { value: 'phy', viewValue: 'Physics' },
    { value: 'chem', viewValue: 'Chemistry' },
    { value: 'bio', viewValue: 'Biology' },
    { value: 'comp', viewValue: 'Computer' },
    { value: 'geo', viewValue: 'Geography' },
    { value: 'hist', viewValue: 'History' },
    { value: 'lit', viewValue: 'Literature' },
    { value: 'fre', viewValue: 'French' },
    { value: 'eng', viewValue: 'English' },
    { value: 'citi', viewValue: 'Citizenship' },
    { value: 'rel', viewValue: 'Religion' },
    { value: 'sport', viewValue: 'Sports' }

  ];

  sequences: Sequence[] = [
    { value: 'seq1', viewValue: 'First sequence' },
    { value: 'seq2', viewValue: 'Second sequence' },
    { value: 'seq3', viewValue: 'Third sequence' },
    { value: 'seq4', viewValue: 'Fourth sequence' },
    { value: 'seq5', viewValue: 'Fifth sequence' },
    { value: 'seq6', viewValue: 'Sixth sequence' }
  ];

  coefficients: Coefficient[] = [
    { value: 1 },
    { value: 3 },
    { value: 5 }
  ]

  //getting coefficients automatically
  getCoef() {
    if (this.markForm.value.subjectName === "math" || this.markForm.value.subjectName === "eng" || this.markForm.value.subjectName === "fre") {
      this.markForm.value.coef = 5
      // return this.markForm.value.coef

    } else if (this.markForm.value.subjectName === "sport") {
      this.markForm.value.coef = 1
      // return this.markForm.value.coef
    }
    else if (this.markForm.value.subjectName === "citi" || this.markForm.value.subjectName === "rel" || this.markForm.value.subjectName === "comp") {
      this.markForm.value.coef = 2
    }
    else {
      this.markForm.value.coef = 3
    }
    return this.markForm.value.coef

  }

  // General add btn
  addSomeMarks() {

    if (!this.editData) {
      switch (this.markForm.value.sequenceName) {
        case 'seq1':
          this.addMark();
          break;

        case 'seq2':
          this.addMark12();
          break;

        case 'seq3':
          this.addMark13();
          break;

        case 'seq4':
          this.addMark14();
          break;

        case 'seq5':
          this.addMark15();
          break;

        case 'seq6':
          this.addMark16();
          break;

        default:
          alert("Sequence does not exist")
          break;
      }
    } else {
      switch (this.markForm.value.sequenceName) {
        case 'seq1':
          this.updateMark();
          break;

        case 'seq2':
          this.updateMark12();
          break;

        case 'seq3':
          this.updateMark13();
          break;

        case 'seq4':
          this.updateMark14();
          break;

        case 'seq5':
          this.updateMark15();
          break;

        case 'seq6':
          this.updateMark16();
          break;

        default:
          alert("Sequence does not exist")
          break;
      }
    }
  }
  //All updates*******************************************************************************************************
  checkUpdate() {
    for (let i = 0; i < this.getMarkList.length; i++) {
      if (this.getMarkList[i].subjectName == this.markForm.value.subjectName && this.getMarkList[i].subjectName != this.editData.subjectName ) {
        return i
      }
    }
    return -1
  }
  
  updateMark() {
    if (this.checkUpdate() != -1) {
      alert("You cannot update to a subject that already exists")
    } else {
    this.api.putMark(this.markForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Marks updated successfully!");
          this.markForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while updating the records with id " + this.editData.id);
        }
      })

    }
  }

  checkUpdate22() {
    for (let i = 0; i < this.getMarkList2.length; i++) {
      if (this.getMarkList2[i].subjectName == this.markForm.value.subjectName && this.getMarkList2[i].subjectName != this.editData.subjectName ) {
        return i
      }
    }
    return -1
  }

  updateMark12() {
    if (this.checkUpdate22() != -1) {
      alert("You cannot update to a subject that already exists")
    } else {
    this.api.putMark12(this.markForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Marks updated successfully!");
          this.markForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while updating the records with id " + this.editData.id);
        }
      })

    }
  }

  checkUpdate23() {
    for (let i = 0; i < this.getMarkList3.length; i++) {
      if (this.getMarkList3[i].subjectName == this.markForm.value.subjectName && this.getMarkList3[i].subjectName != this.editData.subjectName ) {
        return i
      }
    }
    return -1
  }

  updateMark13() {
    if (this.checkUpdate23() != -1) {
      alert("You cannot update to a subject that already exists")
    } else {
    this.api.putMark13(this.markForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Marks updated successfully!");
          this.markForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while updating the records with id " + this.editData.id);
        }
      })

    }
  }

  checkUpdate24() {
    for (let i = 0; i < this.getMarkList4.length; i++) {
      if (this.getMarkList4[i].subjectName == this.markForm.value.subjectName && this.getMarkList4[i].subjectName != this.editData.subjectName ) {
        return i
      }
    }
    return -1
  }

  updateMark14() {
    if (this.checkUpdate24() != -1) {
      alert("You cannot update to a subject that already exists")
    } else {
    this.api.putMark14(this.markForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Marks updated successfully!");
          this.markForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while updating the records with id " + this.editData.id);
        }
      })

    }
  }

  checkUpdate25() {
    for (let i = 0; i < this.getMarkList5.length; i++) {
      if (this.getMarkList5[i].subjectName == this.markForm.value.subjectName && this.getMarkList5[i].subjectName != this.editData.subjectName ) {
        return i
      }
    }
    return -1
  }

  updateMark15() {
    if (this.checkUpdate25() != -1) {
      alert("You cannot update to a subject that already exists")
    } else {
    this.api.putMark15(this.markForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Marks updated successfully!");
          this.markForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while updating the records with id " + this.editData.id);
        }
      })

    }
  }

  checkUpdate26() {
    for (let i = 0; i < this.getMarkList6.length; i++) {
      if (this.getMarkList6[i].subjectName == this.markForm.value.subjectName && this.getMarkList6[i].subjectName != this.editData.subjectName ) {
        return i
      }
    }
    return -1
  }

  updateMark16() {
    if (this.checkUpdate26() != -1) {
      alert("You cannot update to a subject that already exists")
    } else {
    this.api.putMark16(this.markForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Marks updated successfully!");
          this.markForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while updating the records with id " + this.editData.id);
        }
      })

    }
  }



  //All add marks*************************************************************************************************************
  checkMarks() {
    this.api.getMark().subscribe({
      next: (res) => {
        this.getMarkList = res;
      }
    });

    for (var i = 0; i < this.getMarkList.length; i++) {
      if (this.getMarkList[i].subjectName == this.markForm.value.subjectName) {
        return i
      }
    }//end for  
    return -1
  }

  addMark() {
    if (this.markForm.valid) {
      this.api.getMark().subscribe({
        next: (res) => {
          this.getMarkList = res;

        },
        error: () => {
        }
      });



      if (this.checkMarks() != -1) {
        alert(" Marks for " + this.markForm.value.subjectName.toUpperCase() + " already exists for " + this.markForm.value.sequenceName.toUpperCase());
      }

      else {
        this.api.postMark(this.markForm.value)
          .subscribe({
            next: (res) => {
              this.markList = res;
              alert(this.markForm.value.subjectName.toUpperCase() + " marks  added successfully for " + this.markForm.value.sequenceName.toUpperCase());
              this.markForm.reset();
              this.dialogRef.close('save')
            },
            error: () => {
              alert("Error: Marks could not be added");
            }
          });
      }
    }
  }


  // SEQ1 end***************************************************************************************************************

  addMark12() {

    if (this.markForm.valid) {
      this.api.getMark12().subscribe({
        next: (res) => {
          this.getMarkList2 = res;
        },
        error: () => {
        }
      });


      if (this.checkMarks12() != -1) {
        alert("Marks for " + this.markForm.value.subjectName.toUpperCase() + " already exists for " + this.markForm.value.sequenceName.toUpperCase());
      }
      else {
        this.api.postMark12(this.markForm.value)
          .subscribe({
            next: (res) => {
              this.markList = res;
              alert(this.markForm.value.subjectName.toUpperCase() + " marks  added successfully for " + this.markForm.value.sequenceName.toUpperCase());
              this.markForm.reset();
              this.dialogRef.close('save')
            },
            error: () => {
              alert("Error: Marks could not be added");
            }
          });
      } //end if
      //     } //end for

    }

  }


  checkMarks12() {
    this.api.getMark12().subscribe({
      next: (res) => {
        this.getMarkList2 = res;
      }
    });

    for (var i = 0; i < this.getMarkList2.length; i++) {
      if (this.getMarkList2[i].subjectName == this.markForm.value.subjectName) {
        return i
      }
    }//end for  
    return -1
  }

  // SEQ2 end***************************************************************************************************************

  addMark13() {

    if (this.markForm.valid) {
      this.api.getMark13().subscribe({
        next: (res) => {
          this.getMarkList3 = res;
        },
        error: () => {
        }
      });


      if (this.checkMarks13() != -1) {
        alert("Marks for " + this.markForm.value.subjectName.toUpperCase() + " already exists for " + this.markForm.value.sequenceName.toUpperCase());
      }
      else {
        this.api.postMark13(this.markForm.value)
          .subscribe({
            next: (res) => {
              this.markList = res;
              alert(this.markForm.value.subjectName.toUpperCase() + " marks  added successfully for " + this.markForm.value.sequenceName.toUpperCase());
              this.markForm.reset();
              this.dialogRef.close('save')
            },
            error: () => {
              alert("Error: Marks could not be added");
            }
          });
      } //end if
      //     } //end for

    }

  }


  checkMarks13() {
    this.api.getMark13().subscribe({
      next: (res) => {
        this.getMarkList3 = res;
      }
    });

    for (var i = 0; i < this.getMarkList3.length; i++) {
      if (this.getMarkList3[i].subjectName == this.markForm.value.subjectName) {
        return i
      }
    }//end for  
    return -1
  }
  // SEQ3 end***************************************************************************************************************

  addMark14() {

    if (this.markForm.valid) {
      this.api.getMark14().subscribe({
        next: (res) => {
          this.getMarkList4 = res;
        },
        error: () => {
        }
      });

    
      if (this.checkMarks14() != -1) {
        alert("Marks for " + this.markForm.value.subjectName.toUpperCase() + " already exists for " + this.markForm.value.sequenceName.toUpperCase());
      }
      else {
        this.api.postMark14(this.markForm.value)
          .subscribe({
            next: (res) => {
              this.markList = res;
              alert(this.markForm.value.subjectName.toUpperCase() + " marks  added successfully for " + this.markForm.value.sequenceName.toUpperCase());
              this.markForm.reset();
              this.dialogRef.close('save')
            },
            error: () => {
              alert("Error: Marks could not be added");
            }
          });
      } //end if
      //     } //end for

    }

  }


  checkMarks14() {
    this.api.getMark14().subscribe({
      next: (res) => {
        this.getMarkList4 = res;
      }
    });

    for (var i = 0; i < this.getMarkList4.length; i++) {
      if (this.getMarkList4[i].subjectName == this.markForm.value.subjectName) {
        return i
      }
    }//end for  
    return -1
  }

  // SEQ4 end***************************************************************************************************************

  addMark15() {

    if (this.markForm.valid) {
      this.api.getMark15().subscribe({
        next: (res) => {
          this.getMarkList5 = res;
        },
        error: () => {
        }
      });


      if (this.checkMarks15() != -1) {
        alert("Marks for " + this.markForm.value.subjectName.toUpperCase() + " already exists for " + this.markForm.value.sequenceName.toUpperCase());
      }
      else {
        this.api.postMark15(this.markForm.value)
          .subscribe({
            next: (res) => {
              this.markList = res;
              alert(this.markForm.value.subjectName.toUpperCase() + " marks  added successfully for " + this.markForm.value.sequenceName.toUpperCase());
              this.markForm.reset();
              this.dialogRef.close('save')
            },
            error: () => {
              alert("Error: Marks could not be added");
            }
          });
      } //end if
      //     } //end for

    }

  }


  checkMarks15() {
    this.api.getMark15().subscribe({
      next: (res) => {
        this.getMarkList5 = res;
      }
    });

    for (var i = 0; i < this.getMarkList5.length; i++) {
      if (this.getMarkList5[i].subjectName == this.markForm.value.subjectName) {
        return i
      }
    }//end for  
    return -1
  }
  // SEQ5 end***************************************************************************************************************

  addMark16() {

    if (this.markForm.valid) {
      this.api.getMark16().subscribe({
        next: (res) => {
          this.getMarkList6 = res;
        },
        error: () => {
        }
      });


      if (this.checkMarks16() != -1) {
        alert("Marks for " + this.markForm.value.subjectName.toUpperCase() + " already exists for " + this.markForm.value.sequenceName.toUpperCase());
      }
      else {
        this.api.postMark16(this.markForm.value)
          .subscribe({
            next: (res) => {
              this.markList = res;
              alert(this.markForm.value.subjectName.toUpperCase() + " marks  added successfully for " + this.markForm.value.sequenceName.toUpperCase());
              this.markForm.reset();
              this.dialogRef.close('save')
            },
            error: () => {
              alert("Error: Marks could not be added");
            }
          });
      } //end if
      //     } //end for

    }

  }


  checkMarks16() {
    this.api.getMark16().subscribe({
      next: (res) => {
        this.getMarkList6 = res;
      }
    });

    for (var i = 0; i < this.getMarkList6.length; i++) {
      if (this.getMarkList6[i].subjectName == this.markForm.value.subjectName) {
        return i
      }
    }//end for  
    return -1
  }



}



