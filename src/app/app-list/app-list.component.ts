import { Component, OnInit } from '@angular/core';
import { avengers } from './avengers-list.config';
import { Avenger } from './avengers.models';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  public avengers:Avenger[] = avengers;
  public activeElements: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log("Me he iniciado")
  }

  public getActiveElements(): number {
    return this.avengers.filter(avenger => avenger.isActive).length;
  }

  public onClickAvenger(avenger: Avenger): void {
    avenger.isActive = !avenger.isActive;
    this.activeElements = this.getActiveElements();
  }
}
