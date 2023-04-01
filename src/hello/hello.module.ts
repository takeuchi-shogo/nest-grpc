import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:8080',
          package: 'myapp',
          protoPath: join(__dirname, './hello.proto'),
        },
      },
    ]),
  ],
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
