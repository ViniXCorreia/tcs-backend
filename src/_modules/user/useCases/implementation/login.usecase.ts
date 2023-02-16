import { IUseCase } from 'src/_shared/protocols/IUseCase';

export class LoginUseCase implements IUseCase<any, any> {
	constructor() {}

	async execute(data: any): Promise<any> {
		return true;
	}
}
