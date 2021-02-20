import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})

export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  persons = Array(100).fill(0);

  constructor() { }

  ngOnInit(): void {
    //console.log(this.persons);
  }

  goEnd() {
    this.viewport.scrollToIndex(this.persons.length);
  }

  goStart() {
    this.viewport.scrollToIndex(0);
  }

  goMid() {
    this.viewport.scrollToIndex(this.persons.length / 2);
  }

}
