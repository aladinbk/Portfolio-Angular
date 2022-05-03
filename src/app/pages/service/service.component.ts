import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public dataServices = [
    {
      titulo1: 'Ui/Ux',
      titulo2: 'Design',
      icono: 'fas fa-th-large',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
    {
      titulo1: 'Développeur full stack',
      titulo2: 'Java|Angular',
      icono: 'fas fa-code',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
    {
      titulo1: 'Développeur full stack',
      titulo2: 'JS',
      icono: 'fas fa-code',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
    {
      titulo1: 'Data Science',
      titulo2: 'Data Analyst',
      icono: 'fas fa-database',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
