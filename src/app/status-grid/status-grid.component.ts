import { Component, OnInit } from '@angular/core';
import {StatusCheckService} from '../status-check.service';

@Component({
  selector: 'app-status-grid',
  templateUrl: './status-grid.component.html',
  styleUrls: ['./status-grid.component.css']
})
export class StatusGridComponent implements OnInit {

  rowSpan=1/2;
  colSpan=1/2;

  

  expData:any = {};
  constructor(private dataService: StatusCheckService){}
  getFirstStatusData(){
    this.expData=[];
    this.dataService.getTestData().subscribe((resdata: {}) =>{
      console.log(resdata);
      this.expData = resdata;
      this.tiles[0].text=this.expData.data[0].first_name;
    });    
  }

  getSecondStatusData(){
    this.expData=[];
    this.dataService.getTestData().subscribe((resdata: {}) =>{
      console.log(resdata);
      this.expData = resdata;
      this.tiles[1].text=this.expData.data[1].first_name;
    });    
  }

  ngOnInit(){
    this.getFirstStatusData();
    this.getSecondStatusData();
  }

  tiles = [
    {text: '', color: 'lightgreen'},
    {text: '', color: 'lightgreen'},
    {text: 'Three', color: '#FA8072'},
    {text: 'Four', color: '#DDBDF1'},
    {text: 'Five', color: 'lightgreen'},
    {text: 'Six', color: 'lightgreen'},
    {text: 'Seven', color: '#FA8072'},
    {text: 'Eight', color: '#DDBDF1'},
    {text: 'Nine', color: 'lightgreen'},
    {text: 'Ten', color: 'lightgreen'},
    {text: 'Eleven', color: '#FA8072'},
    {text: 'Twelve', color: '#DDBDF1'}
  ];
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
