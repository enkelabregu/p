/* eslint-disable prettier/prettier */
import { Controller, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiConsumes, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { EndpointTesterService } from './endpoint-tester.service';
import { FileUploadtDto } from './dto/endpoint-tester.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Endpoint Tester')
@Controller('endpoint-tester')
export class EndpointTesterController {
  constructor(private endpointTesterService: EndpointTesterService){}


  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: "List all possible e2e scenarios for a given endpoint" })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload a YAML file',
    type: 'multipart/form-data',
    required: true,
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiBadRequestResponse({ description: "Invalid data provided." })
  @ApiOkResponse({ description: 'OK', type: String, isArray: true })
  generateScenarios(
    @Param() params: FileUploadtDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (file.mimetype !== 'application/x-yaml' && file.mimetype !== 'text/yaml') {
      throw new Error('Only .yml files are allowed');
    }
    console.log(file);
  }
  
}
