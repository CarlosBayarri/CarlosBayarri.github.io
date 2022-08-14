import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { OpenprojectsService } from 'src/app/services/openprojects.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['none', 'angular', 'django', 'firebase', 'compodoc', 'geoserver', 'aws', 'd3js', 'nativescript', 'ionic', 'nodejs', 'openlayers', 'postgresql', 'reactjs', 'sqlite', 'tensorflow', 'threejs'];
  private valueTypeProject = '';
  filteredOptions: Observable<string[]>;
  constructor(public openprojectService: OpenprojectsService) { }

  setTypeProject(option) {
    console.log(option);
    this.valueTypeProject = option;
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
