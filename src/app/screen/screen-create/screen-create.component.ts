import {Component, DoCheck, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {Screen} from '../screen';
import {ScreenService} from '../screen.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-screen-create',
  templateUrl: './screen-create.component.html',
  styleUrls: ['./screen-create.component.css'],
  providers: [ScreenService]
})
export class ScreenCreateComponent implements OnInit {

  screen: Screen;
  private routed_id: any;

  isUpdating = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private screenService: ScreenService) {}

  ngOnInit() {

      this.route.params.subscribe(params => {
        this.routed_id = params['id'];
      });


      if(this.routed_id){
        this.screenService.getScreenById(this.routed_id)
          .subscribe((res)=>{
            this.screen = res;
            this.refreshScreen();
          }, (err) => {
            console.log(err);
          });
      }

  }

  refreshScreen() {
    setInterval(function(){
      let createData = JSON.parse(localStorage.getItem('createData'));
      if (createData && createData[this.routed_id] && !this.isUpdating)
        this.screen = createData[this.routed_id];
    }.bind(this), 1000);

  }

  updateScreen(screen: Screen){
      this.screenService.updateScreenById(screen)
        .subscribe((res)=>{
          this.screen = res;
        }, (err) => {
          console.log(err);
        });
  }

  emitChange() {
    this.isUpdating = true;
    if (!localStorage.getItem('createData')) {
      localStorage.setItem('createData', JSON.stringify({[this.routed_id]: this.screen}));
      this.isUpdating = false;
    } else {
      let createData = JSON.parse(localStorage.getItem('createData'));
      createData[this.routed_id] = this.screen;
      localStorage.setItem('createData', JSON.stringify(createData));
      this.isUpdating = false;
    }
  }

}
