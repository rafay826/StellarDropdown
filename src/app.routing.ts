import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './modules/components/home/app.component';
import { AboutComponent } from './modules/components/about/about.component';
import { DropdownComponent } from './modules/components/dropdown/dropdown.component'

const appRoutes: Routes = [
    // {
    //     path: '',
    //     component: DropdownComponent
    // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);