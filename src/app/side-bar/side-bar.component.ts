import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  collopsed:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }


  GoCollapsed(){
      this.collopsed = !this.collopsed
  }
}
