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
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this.router)
    this.item = +this.router.snapshot.paramMap.get('id');
  }

}
