import {
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { CollaboratorEntity } from './collaborator.entity';
import { CustomerEntity } from './customer.entity';
import { ServiceEntity } from './service.entity';

@Entity({ name: 'schedule' })
export class ScheduleEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedeAt: Date;

	@ManyToOne(() => CustomerEntity, (custumer) => custumer.schedule)
	customerId: CustomerEntity;

	@ManyToOne(() => CollaboratorEntity, (collaborator) => collaborator.schedule)
	collaboratorId: CollaboratorEntity;

	@ManyToOne(() => ServiceEntity, (service) => service.schedule)
	serviceId: ServiceEntity;
}
