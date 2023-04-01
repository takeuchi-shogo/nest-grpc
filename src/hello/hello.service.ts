import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { HellosService } from './interfaces/hellos.interfaces';

@Injectable()
export class HelloService implements OnModuleInit {
  private hellosService: HellosService;

  constructor(@Inject('HELLO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.hellosService =
      this.client.getService<HellosService>('GreetingService');
  }

  getHello(): Observable<string> {
    return this.hellosService.hello({ name: 'Name' });
  }
}
