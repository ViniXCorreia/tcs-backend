import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
