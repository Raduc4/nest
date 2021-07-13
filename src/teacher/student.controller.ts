import { Param } from '@nestjs/common';
import { Controller, Get, Put } from '@nestjs/common';

@Controller('teacher/:teacherID/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherID') teacherID: string) {
    return `Get all students that belong to the teacher with the given ${teacherID}`;
  }

  @Put('/:studentID')
  updateStudentTeacher(
    @Param('teacherID') teacherID: string,
    @Param('studentID') studentID: string,
  ) {
    return `Update student teacher with ID of ${studentID} to teacher ${teacherID}`;
  }
}
