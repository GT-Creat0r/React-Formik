import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import {ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/')
  findAll(@Req() req) {
    return this.userService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.userService.remove(+id);
  }
}
