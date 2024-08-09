import { Component, Input } from '@angular/core';

interface Node {
  id: string;
  label: string;
  x:number;
  y:number;
  width: number;
  height: number;
  
  // Add more properties as needed (e.g., shape, position)
}

interface Connection {
  [x: string]: any;
  source: string;
  target: string;
}

export interface FlowchartData {
  nodes: Node[];
  connections: Connection[];
}

@Component({
  selector: 'flowchart',
  standalone: true,
  imports: [],
  templateUrl: './flowchart.component.html',
  styleUrl: './flowchart.component.scss'
})
export class FlowchartComponent {
  @Input()
  data: FlowchartData  ={
    nodes: [ { id: '1', label: 'Node 1', x: 50, y: 50, width: 100, height: 50 },
      { id: '2', label: 'Node 2', x: 200, y: 50, width: 100, height: 50 },
      { id: '3', label: 'Node 3', x: 350, y: 50, width: 100, height: 50 },
      { id: '4', label: 'Node 4', x: 450, y: 50, width: 100, height: 50 },
      { id: '5', label: 'Node 5', x: 500, y: 50, width: 100, height: 50 },
      { id: '6', label: 'Node 6', x: 650, y: 50, width: 100, height: 50 }],
    connections: [{ source: '1', target: '2' },
      { source: '2', target: '3' },
      { source: '3', target: '4'},
      { source: '4', target: '5'},
    ]
  };  ;
  

  // ... component properties and imports

getConnectionStartX(connection: Connection):number {
  const sourceNode = this.data.nodes.find(node => node.id === connection.source);
  return sourceNode ? sourceNode.x + sourceNode.width / 2 : 0;}

getConnectionStartY(connection: Connection): number {
  const sourceNode = this.data.nodes.find(node => node.id === connection.source);
  return sourceNode ? sourceNode.y + sourceNode.height / 2 : 0;}

getConnectionEndX(connection: Connection): number {
  const targetNode = this.data.nodes.find(node => node.id === connection.target);
  return targetNode ? targetNode.x + targetNode.width / 2 : 0;
}

getConnectionEndY(connection: Connection): number {
  const targetNode = this.data.nodes.find(node => node.id === connection.target);
  return targetNode ? targetNode.y + targetNode.height / 2 : 0;
}

getArrowhead(connection: Connection): string {
  switch (connection['type']) {
    case 'solid':
      return 'M 0 0 L 10 5 L 0 10 z'; // Solid arrowhead
    case 'dashed':
      return 'M 0 0 L 10 5 L 0 10 z M 5 0 L 5 10'; // Dashed arrowhead
    case 'diamond':
      return 'M 0 0 L 5 5 L 10 0 L 5 -5 z'; // Diamond arrowhead
    default:
      return 'M 0 0 L 10 5 L 0 10 z'; // Default arrowhead
  }
}
}
