/* eslint-disable prettier/prettier */
import { Controller, Param, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { EndpointTesterService } from './endpoint-tester.service';
import { FileUploadtDto } from './dto/endpoint-tester.dto';

@ApiTags('Endpoint Tester')
@Controller('endpoint-tester')
export class EndpointTesterController {
  constructor(private endpointTesterService: EndpointTesterService){}


    @Post()
    @ApiOperation({summary: "List all possible e2e scenarious for agiven endpoint"})
    @ApiBadRequestResponse({description: "Invalid data provided."})
    @ApiOkResponse({description: 'OK', type: String, isArray: true})
    generateScenarious(@Param() params: FileUploadtDto){
       console.log(params)
      return this.endpointTesterService.generateScenarious()
    }
}
