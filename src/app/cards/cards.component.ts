import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  dataCard :any = [
    {fecha:'01/02/2023',texto:'Daniel'},
    {fecha:'02/02/2023',texto:'Sergio'},
    {fecha:'03/02/2023',texto:'Claudio'},
    {fecha:'04/02/2023',texto:'Jose'},
    {fecha:'05/02/2023',texto:'2'},
    {fecha:'06/02/2023',texto:'2'},
    {fecha:'07/02/2023',texto:'2'},
    {fecha:'08/02/2023',texto:'2'},
  ]

}
