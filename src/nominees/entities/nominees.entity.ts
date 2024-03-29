import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nominees {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fullName: string;
  @Column({ default: 0 })
  vote: number;
}
