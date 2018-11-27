import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'lib-generic-detail-component',
  templateUrl: './generic-detail-component.component.html',
  styleUrls: ['./generic-detail-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericDetailComponentComponent implements OnInit {

  @Input()
  item: any;

  constructor() { }

  ngOnInit() {
  }

}
