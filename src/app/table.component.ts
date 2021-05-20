import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  TemplateRef,
  ViewChildren
} from '@angular/core';
import { SortableColumn, Table } from 'primeng/table';

@Component({
  selector: 'th-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements AfterViewInit {
  @ViewChildren('columns') columns: QueryList<ElementRef>;

  @Input()
  columnNames: string[];

  @Input()
  templates: TemplateRef<any>[];

  @Input()
  headerTemplates: TemplateRef<any>[];

  @Input()
  dataSource: any;

  ngAfterViewInit(): void {}
}
