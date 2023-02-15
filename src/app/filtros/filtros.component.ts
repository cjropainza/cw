import { Component } from '@angular/core';



interface opciones  {
  value: string;
  icon: string;
  viewValue: string;
}

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {

  opciones: opciones[] = [
    {value: 'angular', icon: './../../assets/angular.png', viewValue: 'Angular'},
    {value: 'react',icon: './../../assets/react.png', viewValue: 'React'},
    {value: 'vuejs',icon: './../../assets/vue.png', viewValue: 'VueJs'},
  ];

}
