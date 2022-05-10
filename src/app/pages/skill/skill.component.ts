import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  public openList = 'frontend';
  widht1:any;
  widht2:any;
  widht3:any;
  widht4:any;
  widht5:any;
  constructor() {}

  ngOnInit(): void {
    this.widht1=90;
    this.widht2=70;
    this.widht3=60;
    this.widht4=70;
    this.widht5=50;
  }

  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}
