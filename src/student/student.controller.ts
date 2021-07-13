import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import {
  CreateStudentDto,
  UpdateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
} from './dto/student.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return {
      id: '1',
      name: 'Student',
      teacher: 'Sa',
    };
  }

  @Get('/:studentID')
  getStudentById(
    @Param('studentID') studentID: string,
  ): FindStudentResponseDto {
    return `byIdStudent ${studentID}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): FindStudentResponseDto {
    return `CreateStudent ${JSON.stringify(body)}`;
  }
  @Put('/:studentID')
  updateStudent(
    @Body() body: UpdateStudentDto,
    @Param('studentID') studentID: string,
  ): StudentResponseDto {
    return `Update student ${studentID} with data from ${JSON.stringify(body)}`;
  }
}
