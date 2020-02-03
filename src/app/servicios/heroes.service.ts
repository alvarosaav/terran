
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes:Heroe[] = [
    {
      nombre: "Persecutor",
      bio: "Unidad equipada con el Traje de Combate Pesado CMC-660, el cual les da protección adicional contra el fuego, y el Lanzallamas de Plasma Perdición, capaz de provocar graves daños por quemaduras de fuego. Como los Marine, fueron personas que se resocializaron y se unieron al sistema.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "VCE",
      bio: " Fueron utilizados inicialmente durante la reconstrucción de las antiguas plataformas orbitales confederadas de Tarsonis. El VCE T-280 es un elemento esencial en toda operación de reparación o construcción que realice el Dominio.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Mina Viuda",
      bio: "Unidad aérea. Diseñada para transportar unidades terrestres, especialmente en movilización de tropas y desembarcos estratégicos. Se construye en el Puerto Estelar.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Tanque de asedio",
      bio: "Unidad de asalto y defensa mecanizada de ataque terrestre. Posee dos modos de ataque: Modo Tanque, en el cual utiliza sus dos cañones principales de 88 mm. de rápida cadencia; Modo Asedio: utiliza un Cañón de Impacto 120mm. de daño explosivo/expansivo. Al estar en Modo Asedio, el tanque es incapaz de moverse.",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Cuervo",
      bio: "Nave de apoyo tanto defensivo como ofensivo, con capacidad de detección. Puede desplegar Torretas Automáticas y Robots de Defensa de punto, así como Misiles Rastreadores.",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Atropos",
      bio: "Nave táctica de asalto que puede atacar objetivos terrestres y obtener la capacidad de hacerse invisible. Excelente para tácticas de guerrilla contra la línea de mineral del enemigo, así como unidades o estructuras clave.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Erebion",
      bio: "Vehículo ligero que puede atacar objetivos terrestres. Su lanzallamas causa daño, en línea recta, a todos los objetivos que se encuentren frente a él. Perfecto para tácticas de guerrilla, en particular contra unidades de combate cuerpo a cuerpo y líneas de trabajadores.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx: string ){
    return this.heroes[idx];
  }

  buscarHeroes( termino:string ):Heroe[]{

    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.heroes.length; i ++ ){

      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }


}


export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
};
