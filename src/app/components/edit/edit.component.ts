import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  item: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // console.log(this.route)
    // this.item = +this.route.snapshot.paramMap.get('id');
    this.getItemId();
  }

  ngDoCheck() {
    // this.item = +this.route.snapshot.paramMap.get('id');
    this.getItemId();
  }

  private getItemId():void {
    this.item = +this.route.snapshot.paramMap.get('id');
  }

  handleClickEditButton() {
    this.router.navigate(['/home', {id: this.item}])
  }

}
