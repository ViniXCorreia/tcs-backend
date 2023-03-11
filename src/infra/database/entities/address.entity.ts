import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonEntity } from './person.entity';

@Entity({ name: 'address' })
export class AddressEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	zipCode: string;

	@Column()
	number: number;

	@Column({ nullable: true })
	complement?: string;

	@OneToOne(() => PersonEntity, { eager: true, cascade: true })
	@JoinColumn({ name: 'responsiblePersonId' })
	responsiblePerson: PersonEntity;
}
