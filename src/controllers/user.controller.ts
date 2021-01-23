import { Controller , Get , Req , Param , Redirect } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
   
    @Get(':id')
    findAll(@Param() params): string {
      return `This action returns all cats ${params.id}`
    }

    @Get()
    @Redirect('https://nestjs.com', 301)
    findAllNoRoot(@Req() request: Request): string {
      return 'This  all cats';
    }
}
