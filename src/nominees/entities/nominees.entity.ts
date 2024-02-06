import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nominees {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  phoneNumber: string;
}
