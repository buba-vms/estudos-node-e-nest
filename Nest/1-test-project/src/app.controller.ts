import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('/hello')
  getRootRoute() {
    return '<h1>hi there</h1>'
  }

  @Get('bye')
  getByeThere() {
    return 'bye there'
  }
}
