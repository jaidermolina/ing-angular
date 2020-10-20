import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from '../shared/people/people.service';
import { Results } from '../model/results'
import { PeopleListComponent } from '../people-list/people-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-inf',
  templateUrl: './people-inf.component.html',
  styleUrls: ['./people-inf.component.css']
})
export class PeopleInfComponent implements OnInit {
  
  
  private router: Router;
  people : Results;
  id : string="1";
  @ViewChild(PeopleListComponent) pId: PeopleListComponent;
  constructor(private peopleService: PeopleService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clicpeople(this.route.snapshot.paramMap.get('id'))
  }

  clicpeople(id: string){
    this.peopleService.getId(id).subscribe(data => {
      this.people = data;  
    });
  }

  getFilmsId(film : string){
    return film.match(/\/\d+\//)[0].slice(1,-1);
  }

}
