import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(
    private router: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      console.log(params)
    })
  }
}
