import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './admin/side-nav/side-nav.component';
import { PageHeaderComponent } from './admin/page-header/page-header.component';
import { CommonModule } from '@angular/common';
import { FlowchartComponent } from './flowchart/flowchart.component';

import {FlowchartData} from './flowchart/flowchart.component'




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,PageHeaderComponent,SideNavComponent,FlowchartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 

  title= 'Flow';
  myFlowchartData: FlowchartData =  {
    nodes: [ { id: '1', label: 'Node 1', x: 50, y: 50, width: 100, height: 50 },
      { id: '2', label: 'Node 2', x: 200, y: 50, width: 100, height: 50 },
      { id: '3', label: 'Node 3', x: 350, y: 50, width: 100, height: 50 },
      { id: '4', label: 'Node 4', x: 500, y: 50, width: 100, height: 50 },
      { id: '5', label: 'Node 5', x: 600, y: 50, width: 100, height: 50 },
      { id: '6', label: 'Node 6', x: 750, y: 50, width: 100, height: 50 }],
    connections: [{ source: '1', target: '2' },
      { source: '2', target: '3' },
      { source: '3', target: '4'},
      { source: '4', target: '5' },
      { source: '5', target: '6' },
      { source: '6', target: '7'}
    ]
  };
}
