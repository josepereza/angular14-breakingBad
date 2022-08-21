import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Breaking } from 'src/app/interfaces/breaking';
import { BreakingBadService } from 'src/app/services/breaking-bad.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = new FormControl('');
  personajes!:Breaking[]
  misPersonajes!:Breaking[]

  constructor(public breakingBad:BreakingBadService) { 

  }

  ngOnInit(): void {
    
    this.breakingBad.getAll().subscribe(data=>{
     this.personajes=data
     this.misPersonajes=this.personajes
    })
    this.name.valueChanges.subscribe((data:any)=>{
      this.misPersonajes=this.personajes.filter(({name}:Breaking)=>
    name.toUpperCase().includes(data.toUpperCase())
      
    )})
  }

}
