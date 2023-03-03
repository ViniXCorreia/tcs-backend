import { IsString } from 'class-validator';

export class LoginPersonResponseDto {
	@IsString()
	readonly accessToken: string;
}
