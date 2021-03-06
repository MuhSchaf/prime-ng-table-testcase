import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'th-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableSelections: any[];
  tableSelection: any;
  columns: any[];

  @Input()
  columnNames: string[];

  @Input()
  templates: TemplateRef<any>[];

  @Input()
  headerTemplates: TemplateRef<any>[];

  @Input()
  dataSource: any;

  @Input()
  useSorting: boolean;

  ngOnInit(): void {
    this.columns = [];
    this.columnNames.forEach(column => {
      this.columns.push({ field: column, header: column.toUpperCase() });
    });
  }

  onRowSelect(event: any): void {
    console.log(event);
  }
}
