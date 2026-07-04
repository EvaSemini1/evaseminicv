import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  period: string;
  major: string;
  school: string;
}

@Component({
    selector: 'app-education',
    imports: [CommonModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.css'
})
export class EducationComponent {
  educations : Education[] = [
    {
      period: '2019 - 2022',
      major: 'Bachelor in Informatics',
      school: 'University of Tirana, Faculty of Natural Sciences'
    },
    {
      period: '2025 — 2026 (ongoing)',
      major: 'Java Software Developer Course',
      school: 'Continuing education in backend development'      
    },
    {
      period: 'Feb 2026',
      major: '42 Tirana',
      school: 'Peer-to-peer coding school'
    }
  ]

}
