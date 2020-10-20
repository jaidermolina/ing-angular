import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from '../shared/people/people.service';
import { Results } from './../model/results';
import { MatPaginator } from '@angular/material';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peoples: Array<Results>;
  count: number;
  page : number=1;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  selectedPerson: Results; 
  idPerson : string="4";

  constructor(private peopleService: PeopleService,
              ) { }

  ngOnInit() {
    this.onclicMe(this.page)
  }

  onclicMe(id:number){
    this.peopleService.getAll(id).subscribe(data => {
      this.peoples = data.results;
      this.count = data.count;
    });
  }

  gestorPaginacion() { this.page = this.paginator.pageIndex+1; 
    this.onclicMe(this.page); 
  }
  
  onSelect(person: Results): void {
    this.selectedPerson = person;
    //this.idPerson = person.url.charAt(33) + person.url.charAt(34);
    console.log(this.idPerson);
    console.log(person.url)
  }

  getPersonId(selectedPerson){
    return selectedPerson.url.match(/\/\d+\//)[0].slice(1,-1);
  }
}
