import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  address: string;
  @Column()
  phonenumber: string; 
  @Column({unique: true})
  email: string
  @Column({ default: true })
  isActive: boolean;
} 
@Entity()
export class tasks{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  task_category_id: string;
  @Column()
  task_status_id: string;
  @Column()
  user_id: string;
  @Column()
  description: string;
  @Column()
  color: string;
}
@Entity()
export class task_categories{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  description: string;
  @Column()
  color: string;
}
@Entity()
export class task_status{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  description: string;
}
