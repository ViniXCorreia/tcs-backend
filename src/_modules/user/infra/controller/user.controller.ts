import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/_shared/auth/local-auth.guard';
import { LoginDto } from '../../dto/login.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
	constructor(private userService: UserService) {}

	@UseGuards(LocalAuthGuard)
	@Post('/login')
	async login(@Body() loginDto: LoginDto) {
		return await this.userService.loginUseCase(loginDto);
	}

	// @Post()
	// create(@Body() createUserDto: CreateUserDto) {
	// 	return this.userService.create(createUserDto);
	// }

	// @Get()
	// findAll() {
	// 	return this.userService.findAll();
	// }

	// @Get(':id')
	// findOne(@Param('id') id: string) {
	// 	return this.userService.findOne(+id);
	// }

	// @Patch(':id')
	// update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
	// 	return this.userService.update(+id, updateUserDto);
	// }

	// @Delete(':id')
	// remove(@Param('id') id: string) {
	// 	return this.userService.remove(+id);
	// }
}
