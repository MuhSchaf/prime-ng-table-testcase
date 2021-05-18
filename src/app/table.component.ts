import { Component, Input, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'th-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  @Input()
  columnNames: string[];

  @Input()
  templates: TemplateRef<any>[];

  @Input()
  headerTemplates: TemplateRef<any>[];

  @Input()
  dataSource: any;
}
