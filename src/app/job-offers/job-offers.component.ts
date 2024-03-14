import { Component } from '@angular/core';
import {MatTree, MatTreeNode} from "@angular/material/tree";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-job-offers',
  standalone: true,
  imports: [
    MatTree,
    MatTreeNode,
    RouterLink
  ],
  templateUrl: './job-offers.component.html',
  styleUrl: './job-offers.component.css'
})
export class JobOffersComponent {

}
