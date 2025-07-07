import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Projects } from './pages/projects/projects';
import { Studies } from './pages/studies/studies';
import { Error404 } from './pages/error404/error404';

export const routes: Routes = [
    { 
        path: '',
        component: Home
    },{ 
        path: 'contact',
        component: Contact
    },{ 
        path: 'projects',
        component: Projects
    },{ 
        path: 'studies',
        component: Studies
    },{
        path: '**',
        component: Error404
    }
];
