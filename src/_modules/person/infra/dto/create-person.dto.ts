import { IsString } from 'class-validator';

export class CreatePersonDto {
	@IsString()
	name: string;

	@IsString()
	fantastyName?: string;

	@IsString()
	passworf: string;

	@IsString()
	personType: string;

	@IsString()
	email: string;

	@IsString()
	documentNumber: string;

	@IsString()
	telephone: string;

	@IsString()
	cellphone: string;
}
