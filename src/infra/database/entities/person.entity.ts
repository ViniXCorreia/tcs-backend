import {
	Column,
	CreateDateColumn,
	Entity,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { CompanyEntity } from './company.entity';

@Entity({ name: 'person' })
export class PersonEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({ nullable: true })
	fantasyName: string;

	@Column()
	password: string;

	@Column()
	personType: string;

	@Column()
	email: string;

	@Column()
	documentNumber: string;

	@Column({ nullable: true })
	telephone?: string;

	@Column()
	cellphone: string;

	@Column()
	@CreateDateColumn()
	createdAt: Date;

	@Column()
	@UpdateDateColumn()
	updatedAt: Date;

	@OneToOne(() => CompanyEntity)
	company?: CompanyEntity;
}
