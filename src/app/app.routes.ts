import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page/dragonball-page';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  { path: 'dragonball', component: DragonballPageComponent },
  {
    path: '**',
    redirectTo: '',
  },
];
