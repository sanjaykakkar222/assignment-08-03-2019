import { Component, OnInit } from '@angular/core';
import { AdventureTimeService } from '../adventure-time.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  columns: string[];
  characters: any;

  constructor(private atService: AdventureTimeService) { }

  ngOnInit() {


    this.columns=this.atService.getColums();


    this.characters=this.atService.getCharacters();
  }

}
