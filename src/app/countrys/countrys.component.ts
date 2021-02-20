import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-countrys',
  templateUrl: './countrys.component.html',
  styleUrls: ['./countrys.component.css']
})

export class CountrysComponent implements OnInit {

  countrys: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( countrys => this.countrys = countrys);
  }

  drop(e: CdkDragDrop<any>) {
    //console.log(e);
    moveItemInArray(this.countrys, e.previousIndex, e.currentIndex);
    //console.log(this.countrys);
  }

}
