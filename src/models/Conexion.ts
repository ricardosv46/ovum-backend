import { DateScalar } from '@src/utils/constanst'
import { Field, Float, ObjectType } from 'type-graphql'
import {
  Column,
  Entity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm'
import Usuario from './Usuario'

@Entity()
@ObjectType()
export default class Conexion {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => Float)
  @Column({ type: 'float' })
  seconds: number

  @Field()
  @Column()
  userId: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  sala?: string

  @ManyToOne(() => Usuario, (user) => user.conexiones)
  user: Usuario

  @Field(() => DateScalar)
  @CreateDateColumn()
  createdAt: Date = new Date()

  @Field(() => DateScalar)
  @UpdateDateColumn()
  updatedAt: Date = new Date()
}
