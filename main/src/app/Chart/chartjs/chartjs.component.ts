import { Component, OnInit ,Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {
 
  @Input() public telemetries !:any [] ;
  subtitle: string;

  constructor() {
    this.subtitle = 'This is chart page.';
   
    
    
  }
  ngOnInit(): void {}


 
  // This is line chart
  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 10
  };

  public barChartLabels: string[] = [
    'Janu',
    'Feb',
    'Mars',
    'April',
    'May',
    'Jun',
    'Jul', 'Aug' , 'Sep' , 'Octob', 'Nov' , 'Decem'
  ];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0 ,19, 86, 27, 90 ], label: 'Tempetaure' },
    
  ];
  public barChartColors: Array<any> = [
    { backgroundColor: '#1976d2' },
    { backgroundColor: '#26dad2' }
  ];


  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
