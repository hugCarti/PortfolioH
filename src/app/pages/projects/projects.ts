import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-projects',
  imports: [ Card ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
    {
      title: "Library",
      description: "Python : application de gestion de bibliothèque, avec une interface utilisateur",
      githubUrl: "https://github.com/hugCarti/library.git",
      imageUrl: "../../assets/imgL.png",
    },{
      title: "API_PDP",
      description: "Node.js : système d'authentification et de token, gestion des utilisateurs, des produits et des réservations",
      githubUrl: "https://github.com/hugCarti/API_PDP.git",
      imageUrl: "../../assets/imgPDP.png",
    },{
      title: "Trouve ton artisan",
      description: "Angular.js : application de mise en relation entre artisans et clients",
      githubUrl: "https://github.com/hugCarti/trouve-ton-artisan.git",
      imageUrl: "../../assets/imgTTA.png",
    },{
      title: "Au petit Village",
      description: "Angular.js : front-end d'un site e-commerce",
      githubUrl: "https://github.com/hugCarti/Au-petit-village.git",
      imageUrl: "../../assets/imgAPV.png",
    }
  ];
}
