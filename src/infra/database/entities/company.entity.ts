import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PersonEntity } from './person.entity';

@Entity({ name: 'company' })
export class CompanyEntity {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  businessName: string;

  @Column()
  tradeName: string;

  @Column()
  documentNumber: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  active: boolean;

  @OneToOne(() => PersonEntity)
  @JoinColumn({ name: 'responsiblePersonId'})
  responsiblePerson: PersonEntity;
}
