import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-categorias',
  templateUrl: './stats-categorias.component.html',
  styleUrls: ['./stats-categorias.component.css']
})
export class StatsCategoriasComponent {
	 // Doughnut
  public doughnutChartLabels:string[] = ['Telas', 'Cortinas y persianas', 'Lenceria para el hogar'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

   // Radar
  public radarChartLabels:string[] = ['Tendencias de moda', 'almohadas', 'persianas panorama', 'deportivas y uniformes', 'telas para muebles', 'toallas', 'confecciones femeninas'];
 
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'ventas'}
  ];
  public radarChartType:string = 'radar';
}
