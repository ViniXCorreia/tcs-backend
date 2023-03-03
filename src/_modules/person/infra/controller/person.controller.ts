import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseGuards,
	Request,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from '../dto/create-person.dto';
import { UpdatePersonDto } from '../dto/update-person.dto';
import { LocalAuthGuard } from 'src/_shared/auth/local-auth.guard';

@Controller('person')
export class PersonController {
	constructor(private readonly personService: PersonService) {}

	@UseGuards(LocalAuthGuard)
	@Post('/login')
	async login(@Request() req: any) {
		return await this.personService.login(req.user);
	}

	@Post()
	create(@Body() createPersonDto: CreatePersonDto) {
		return this.personService.create(createPersonDto);
	}

	@Get()
	findAll() {
		return this.personService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.personService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
		return this.personService.update(+id, updatePersonDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.personService.remove(+id);
	}
}
