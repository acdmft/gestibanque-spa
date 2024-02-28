import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrl: './list-prestation.component.css'
})
export class ListPrestationComponent implements OnInit {
  constructor(private service: PrestationService) {}

  prestations: any;
  ngOnInit() {
    this.refreshListPrestations();
  }

  refreshListPrestations() {
    this.service.getAllPrestations().subscribe(
      (response:any) => {
        this.prestations = response;
        console.log(this.prestations);
      }
    )
  }

}
