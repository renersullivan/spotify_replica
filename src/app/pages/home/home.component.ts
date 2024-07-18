import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   
  abriuMenu:boolean = false

  constructor(@Inject(DOCUMENT) private document: Document){
    
  }

  public actionAbrirMenu():void {
    this.abriuMenu = !this.abriuMenu;
    this.document.body.querySelector(".menu-mobile-overflow")?.classList.toggle("abriu")
  }


}
function ViewChild(arg0: string): (target: HomeComponent, propertyKey: "input") => void {
  throw new Error('Function not implemented.');
}

