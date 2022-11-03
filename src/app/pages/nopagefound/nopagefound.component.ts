import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.scss']
})
export class NopagefoundComponent implements OnInit {

  public date = new Date();
  public year: any;
  constructor() { 
    this.year = this.date.getFullYear();
  }

  ngOnInit(): void {
  }

}
