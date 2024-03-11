import { Component } from '@angular/core';
import {MatTree, MatTreeNode} from "@angular/material/tree";

@Component({
  selector: 'app-job-offers',
  standalone: true,
  imports: [
    MatTree,
    MatTreeNode
  ],
  templateUrl: './job-offers.component.html',
  styleUrl: './job-offers.component.css'
})
export class JobOffersComponent {

}
