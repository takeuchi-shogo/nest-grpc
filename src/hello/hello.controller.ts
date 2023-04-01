import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HelloService } from './hello.service';

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  call(): Observable<any> {
    return this.helloService.getHello();
  }
}
