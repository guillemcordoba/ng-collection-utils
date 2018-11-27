import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'generic-master-list',
  templateUrl: './generic-master-list.component.html',
  styleUrls: ['./generic-master-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericMasterListComponent implements OnInit {

  @Input()
  items: Array<any>;
  @Output()
  itemSelected = new EventEmitter<string | number>();

  constructor() { }

  ngOnInit() {
  }

}
