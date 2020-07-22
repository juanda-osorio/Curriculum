import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private persona_info: Persona = {
    nombre: "Juan David",
    apellidos: "Osorio Ramirez",
    direccion: "C/ Alejo Carpentier 13 Bajo C, Illescas, Toledo",
    fecha_nacimiento: "1986-09-29",
    email: "juan_david_osorio@outlook.es",
    objetivo_laboral:
    [
      "Aprender y adquirir más experiencia",
      "Trabajar en equipo",
      "Continuar con la formación",
      "Aplicar los conocimientos adquiridos",
      "Crecer más profesionalmente"
    ],
    experiencia:
    [
      {
        puesto: "Analista-Programador",
        empresa: "BBVA/Aubay",
        fecha_inicio: "04-11-2019",
        fecha_fin: "17-05-2020",
        actualidad: false,
        tecnologia_usada: 
          "MYSQL, HTML, CSS, JAVASCRIPT, AJAX, JSON, BOOTSTRAP, JQUERY, PHP, GIT, SVN, DevOps",
        tareas: "Crear funcionalidades nuevas para las aplicaciones existentes que usan los clientes internos del banco, asi como reparar y mantener dichas aplicaciones",

      },
      {
        puesto: "Programador",
        empresa: "Nokia",
        fecha_inicio: "06-2-2017",
        fecha_fin: "01-11-2019",
        actualidad: false,
        tecnologia_usada: 
          "MYSQL, HTML, CSS, JAVASCRIPT, AJAX, JSON, BOOTSTRAP, JQUERY, PHP, GIT",
        tareas: "Los lenguajes anteriores se usaron para hacer formularios web que los técnicos de campo y clientes de distintos paises usan para registrar las métricas de la instalación de fibra optica.",
      },
      {
        puesto: "Programador en Prácticas",
        empresa: "Experience IT",
        fecha_inicio: "01-12-2016",
        fecha_fin: "31-12-2016",
        actualidad: false,
        tecnologia_usada: 
          "MYSQL, HTML, CSS, JAVASCRIPT, AJAX, JSON, BOOTSTRAP, JQUERY, PHP, GIT, Oracle",
        tareas: "Estudio de la herramienta Oracle Service Cloud y Scritps en PHP.",
      },
      {
        puesto: "Microinformático – Programador Web",
        empresa: "MHD Soluciones",
        fecha_inicio: "01-07-2015",
        fecha_fin: "31-12-2015",
        actualidad: false,
        tecnologia_usada: 
          "MYSQL, HTML, CSS, JAVASCRIPT, AJAX, JSON, BOOTSTRAP, JQUERY, PHP, GIT, Active Directory, Servidores",
        tareas: "Creación de scripts en Php, Javascript y Jquery, modificación de plantillas de wordpress.",
      },
      {
        puesto: "Programador Web Prácticas",
        empresa: "WebImpacto Consulting",
        fecha_inicio: "01-04-2015",
        fecha_fin: "31-06-2015",
        actualidad: false,
        tecnologia_usada: 
          "MYSQL, HTML, CSS, JAVASCRIPT, AJAX, JSON, BOOTSTRAP, JQUERY, PHP, GIT, SVN, Prestashop",
        tareas: "Creación de scripts en Php, Javascript y Jquery, modificación de plantillas Prestashop.",
      },
    ],
    formacion:
    [
      "Actualmente estudiando por cuenta propia un curso de NodeJS y AngularJS",
      "2016 - Programacion orientada a objetos y Bases de Datos relacionales. Duracion: 710 Horas",
      "2013 – 2015. Desarrollo de Aplicaciones Web.  Instituto Laguna de Joatzel. 2000 Horas",
      "2013 - Gestion Base Datos Relacionales Oracle.  Duracion: 250 Horas",
      "2010 - 2012.  Sistemas Microinformáticos y Redes.   Instituto Tecnológico Andel.  2000 Horas",
      "2002 – 2003.  Bachillerato. Javiera Londoño.",
      "1998 - 2001.  ESO.  Inem Baldomero Sanín Cano"
    ],
    conocimientos:
    {
      lenguajes_programacion:"JavaSE, JSP, Spring Framework, Hibernate, C#, ASP.NET CORE 5.0, MVC, IoC, Factory, DI, Javascript, Jquery, Ajax, Json, Php,  Html5, CSS3, Bootstrap, Angular",
      bbdd: "MySQL, Oracle, SQLServer",
      ssoo: "Windows, Linux",
      otros: "Drupal, Joomla, Prestashop, Wordpress"
    },

    otros:[
      "Permisos de conducir tipo B. (Vehículo Propio)",
      "Soy una persona responsable, capaz de trabajar en equipo, con muchas ganas de trabajar, adquirir experiencia y continuar con la formación y el aprendizaje",
      "Nivel inglés: B1 (Certificado TOEIC)"
    ]
  };

  constructor() {
  }

  getDatos(): Persona{
    let fechaNacimiento = this.persona_info.fecha_nacimiento;
    let edad = this.getAge(fechaNacimiento);
    this.persona_info.edad = edad;
    return this.persona_info;
  }

  getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if ( m < 0 || (m === 0 && today.getDate() < birthDate.getDate()) ) {
        age--;
    }
    return age;
  } 

  getExperiencia(): Experiencia[]{
    let expe = this.persona_info.experiencia;
    return expe;
  }

  getConocimientos(): Conocimientos{
    let cono = this.persona_info.conocimientos;
    return cono;
  }

}//fin clase

export interface Persona{
  nombre: string;
  apellidos: string;
  direccion: string;
  fecha_nacimiento?: string;
  edad?: number;
  email: string;
  objetivo_laboral: string[];
  experiencia: Experiencia[];
  formacion: string[];
  conocimientos: Conocimientos;
  otros: string[];
}

export interface Experiencia{
  puesto: string;
  empresa: string;
  fecha_inicio: string;
  fecha_fin: string;
  actualidad: boolean;
  tecnologia_usada: string;
  tareas: string;
}

export interface Conocimientos{
  lenguajes_programacion: string;
  bbdd: string;
  ssoo: string;
  otros?: string;
}


