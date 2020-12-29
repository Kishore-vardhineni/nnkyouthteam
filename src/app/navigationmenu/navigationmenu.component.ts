import { Component, OnInit } from '@angular/core';
import { NavigationmenuService } from '../navigationmenu/navigationmenu.service';

@Component({
  selector: 'app-navigationmenu',
  templateUrl: './navigationmenu.component.html',
  styleUrls: ['./navigationmenu.component.scss']
})
export class NavigationmenuComponent implements OnInit {

  public imgSlider1: string;
  public imgSlider2: string;
  public imgSlider3: string;
  public imgSlider4: string;
  public imgSliderDesc1: string;
  public imgSliderDesc2: string;
  public imgSliderDesc3: string;
  public imgSliderDesc4: string;
  public imgSliderDesc5: string;
  public imgSliderDesc6: string;
  public navigationMenuData: any;

  constructor( private navigationMenuService: NavigationmenuService ) {
    this.imgSlider1 = '';
    this.imgSlider2 = '';
    this.imgSlider3 = '';
    this.imgSlider4 = '';
    this.imgSliderDesc1 = '';
    this.imgSliderDesc2 = '';
    this.imgSliderDesc3 = '';
    this.imgSliderDesc4 = '';
    this.imgSliderDesc5 = '';
    this.imgSliderDesc6 = '';
    this.navigationMenuData = {};
   }

  ngOnInit(): void {
    this.getNavigationMenuData();
  }

  getNavigationMenuData() {
    debugger
    this.navigationMenuService.navigationMenuData().subscribe(Response => {
      this.navigationMenuData = Response;
      if(!this.navigationMenuData) {
         return null;
      } else {
         this.navigationMenuData.forEach(element => {
            this.imgSlider1 = element.imgSlider1;
            this.imgSlider2 = element.imgSlider2;
            this.imgSlider3 = element.imgSlider3;
            this.imgSlider4 = element.imgSlider4;
            this.imgSliderDesc1 = element.imgSliderDesc1;
            this.imgSliderDesc2 = element.imgSliderDesc2;
            this.imgSliderDesc3 = element.imgSliderDesc3;
            this.imgSliderDesc4 = element.imgSliderDesc4;
            this.imgSliderDesc5 = element.imgSliderDesc5;
            this.imgSliderDesc6 = element.imgSliderDesc6;
         })
      }
    })
  }

}
