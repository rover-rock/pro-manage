import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palace',
  templateUrl: './palace.component.html',
  styleUrls: ['./palace.component.css']
})
export class PalaceComponent implements OnInit {

  persons:number[]=[100,90,80,70];
  constructor() { }

  ngOnInit() {
  }

}
