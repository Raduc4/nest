import { Controller, Get, Param } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'all teachers';
  }

  @Get('/:teacherID')
  getTeacherByID(@Param('teacherID') teacherID: string) {
    return `teacher by ${teacherID}`;
  }
}
