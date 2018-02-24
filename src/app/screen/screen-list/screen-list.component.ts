import { Component, OnInit } from '@angular/core';
import {Screen} from '../screen';
import {ScreenService} from '../screen.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-screen-list',
  templateUrl: './screen-list.component.html',
  styleUrls: ['./screen-list.component.css'],
  providers: [ScreenService]
})
export class ScreenListComponent implements OnInit {

  screens: Screen[];

  constructor(private router: Router,
              private screenService: ScreenService) { }

  ngOnInit() {
    this.fetchScreens();
  }

  fetchScreens() {
    this.screenService.getAllScreens()
      .subscribe(screens =>{
        this.screens = screens;
      }, err => {
        console.log(err);
      });
  }

  showScreen(id){
    if(id){
      this.router.navigate(['screen/',id])
    }
  }

}
