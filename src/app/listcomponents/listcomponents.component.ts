import { Component } from '@angular/core';

@Component({
  selector: 'app-listcomponents',
  templateUrl: './listcomponents.component.html',
  styleUrls: ['./listcomponents.component.css']
})
export class ListcomponentsComponent {
  presidents: string[] =
  ["Higgins ","McAleese","Robinson",
  "Hillery","O Dalaigh"];
  
  mypresidents: any[] =
[{name: "Higgins", term:"2011-"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}]
  

}
