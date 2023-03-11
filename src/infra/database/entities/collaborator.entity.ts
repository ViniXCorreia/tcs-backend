import {
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { CompanyEntity } from './company.entity';
import { PersonEntity } from './person.entity';
import { ScheduleEntity } from './schedule.entity';

@Entity({ name: 'collaborator' })
export class CollaboratorEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToOne(() => PersonEntity, { eager: true, cascade: true })
	@JoinColumn({ name: 'personId' })
	personId: PersonEntity;

	@ManyToOne(() => CompanyEntity, (company) => company.services)
	companyId: CompanyEntity;

	@ManyToOne(() => ScheduleEntity, (schedule) => schedule.id)
	scheduleId: ScheduleEntity;
}
