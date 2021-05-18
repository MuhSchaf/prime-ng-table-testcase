import { Component } from '@angular/core';

export class Person {
  constructor(
    public name: string,
    public nickName: string,
    public imgSrc: string
  ) {}
}

@Component({
  selector: 'th-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent {
  dataSource: Person[] = [
    new Person('Alf', 'Gandalf', 'http://placekitten.com/200/300'),
    new Person('Rotbarsch', 'Blaumarsch', 'http://placekitten.com/200/200')
  ];
}
