import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { CollaboratorEntity } from './collaborator.entity';
import { PersonEntity } from './person.entity';
import { ServiceEntity } from './service.entity';

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

	@OneToOne(() => PersonEntity, { eager: true, cascade: true })
	@JoinColumn({ name: 'responsiblePersonId' })
	responsiblePerson: PersonEntity;

	@OneToMany(() => ServiceEntity, (service) => service.companyId)
	services: ServiceEntity[];

	@OneToMany(() => CollaboratorEntity, (service) => service.companyId)
	colaborator: CollaboratorEntity[];
}
