/* eslint-disable prettier/prettier */
import { Logger, Module } from "@nestjs/common";
import { EndpointTesterController } from "./endpoint-tester.controller";
import { EndpointTesterService } from "./endpoint-tester.service";

@Module({
    controllers: [EndpointTesterController],
    providers: [EndpointTesterService, Logger]
})

export class EndpointTesterModule {}