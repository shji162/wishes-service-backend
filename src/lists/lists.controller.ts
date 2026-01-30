import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { JwtGuard } from 'src/auth/guards/auth.guard';
import { UpdateListDto } from './dto/update-list.dto';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() createListDto: CreateListDto) {
    return this.listsService.create(createListDto);
  }

  @Get(':userId')
  @UseGuards(JwtGuard)
  findByUserId(@Param('userId') userId: string) {
    return this.listsService.findByUserId(userId);
  }

  @Get()
  @UseGuards(JwtGuard)
  findByName(@Query('name') name: string, @Query('userId') userId: string) {
    return this.listsService.findByName(name, userId);
  }

  @Get('findById/:id')
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string) {
    return this.listsService.findOne(id);
  }

  @Patch(":id")
  @UseGuards(JwtGuard)
  changeListName(@Param('id') id: string, @Body() updateListDto: UpdateListDto){
    return this.listsService.changeList(id, updateListDto)
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.listsService.remove(id);
  }
}
