/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}
export class FileUploadtDto {

  @ApiProperty({
    description: 'Paste your swagger documentation',
    required: true,
  })
  documentation: string;

  @ApiProperty({
    description:
      'Endpoint you want to test, same as it is specified on swagger file',
    required: true,
  })
  endpoint: string;

  @ApiProperty({
    description: 'HTTP method of the endpoint you want to test',
    enum: HTTPMethod,
    required: true,
  })
  method: HTTPMethod;
}
