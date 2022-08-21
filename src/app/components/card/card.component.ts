import { Component, Input, OnInit } from '@angular/core';
import { Breaking } from 'src/app/interfaces/breaking';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() personaje!:Breaking
  constructor() { }

  ngOnInit(): void {
  }

}
