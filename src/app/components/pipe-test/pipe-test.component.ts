import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent {
  values = [1,2,3];
  switch = 22;

  handleClickAdaValuesButton(): void {
    console.log('we should add some values')
    this.values.push(this.values[this.values.length - 1] + 1)
    // this.values = [...this.values, this.values[this.values.length - 1] + 1 ]
  }

  ngDoCheck() {
    console.log('do check')
  }

  doSomthing() {
    console.log('now we do somthing');
  }
}
