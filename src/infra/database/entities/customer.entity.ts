import { scheduled } from 'rxjs';
import {
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { PersonEntity } from './person.entity';
import { ScheduleEntity } from './schedule.entity';

@Entity({ name: 'customer' })
export class CustomerEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToOne(() => PersonEntity, { eager: true, cascade: true })
	@JoinColumn({ name: 'personId' })
	personId: PersonEntity;

	@ManyToOne(() => ScheduleEntity, (schedule) => schedule.id)
	scheduleId: ScheduleEntity;
}
