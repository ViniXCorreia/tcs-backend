import {
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { CollaboratorEntity } from './collaborator.entity';
import { CustomerEntity } from './customer.entity';

@Entity({ name: 'schedule' })
export class ScheduleEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedeAt: Date;

	@OneToMany(() => CustomerEntity, (customer) => customer.scheduleId)
	customer: CustomerEntity;

	@OneToMany(
		() => CollaboratorEntity,
		(collaborator) => collaborator.scheduleId
	)
	collaborator: CollaboratorEntity;
}
