/* eslint-disable */

import { PersonaEntity } from 'src/persona/persona.entity/persona.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CiudadEntity {

  @PrimaryGeneratedColumn()
 id: string;

 @Column()
 nombre: string;

 @Column()
 descripcion: string;

}
