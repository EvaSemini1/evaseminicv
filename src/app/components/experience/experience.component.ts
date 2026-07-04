import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  role: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
}

@Component({
    selector: 'app-experience',
    imports: [CommonModule],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})


export class ExperienceComponent {
  jobs: Job[] = [
    {
      role: 'Web Developer',
      company: 'Purplefire',
      period: 'Nov 2024 — Present',
      current: true,
      bullets: [
        'Developed and maintained client websites using HTML, CSS, JavaScript, and WordPress',
        'Assisted with performance optimization, cross-browser testing, and responsive design',
        'Supported DNS configurations, hosting setup, and deployment processes'
      ]
    },
    {
      role: 'Web Developer',
      company: 'Soifon',
      period: 'Feb 2024 — Oct 2024',
      current: false,
      bullets: [
        'Developed dynamic, responsive websites with a focus on performance, security, and cross-browser compatibility',
        'Handled DNS management, hosting environments, and full deployment workflows to production',
        'Configured Cloudflare for SSL termination, CDN delivery, custom caching, and security hardening',
        'Applied on-page SEO — meta optimization, site structure, page speed improvements',
        'Managed social media presence and collaborated with designers and developers'
      ]
    },
    {
      role: 'Web Developer',
      company: 'Titans Marketing',
      period: 'May 2023 - Feb 2024',
      current: false,
      bullets: [
        'Built and maintained responsive websites from scratch using HTML, CSS, JavaScript, PHP, and MySQL across WordPress, Shopify, and Wix',
        'Managed DNS configurations, hosting setup, and end-to-end deployment pipelines',
        'Configured Cloudflare for SSL, CDN delivery, caching rules, and security hardening',
        'Implemented SEO best practices and Core Web Vitals improvements',
        'Collaborated with designers and cross-functional teams to deliver on time and within scope'
      ]
    }
    

  ]
}
