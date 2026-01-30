import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { WishesService } from './wishes.service';
import { createWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { JwtGuard } from 'src/auth/guards/auth.guard';

@Controller('wishes')
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createWishDto: createWishDto) {
    return this.wishesService.create(createWishDto);
  }

  @UseGuards(JwtGuard)
  @Get()
  findByName(@Query('name') name: string, @Query('listId') listId: string) {
    return this.wishesService.findByName(name, listId);
  }

  @UseGuards(JwtGuard)
  @Get(":listId")
  findByListId(@Param('listId') listId: string) {
    return this.wishesService.findByListId(listId);
  }

  @UseGuards(JwtGuard)
  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.wishesService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateWishDto: UpdateWishDto) {
    return this.wishesService.update(id, updateWishDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishesService.remove(+id);
  }
}
