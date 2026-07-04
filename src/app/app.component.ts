import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
    selector: 'app-root',
    imports: [HeroComponent, EducationComponent, ExperienceComponent, SkillsComponent, ContactComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EvaSemini-Portfolio';
}
