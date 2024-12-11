import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma:PrismaService){}
  async create(createPost: CreatePostDto) {
    return await this.prisma.post.create({
      data:{
        title:createPost.title,
        content:createPost.content,
        userId:createPost.userId
  }
})
  }

  
  async findAll() {
    return await this.prisma.post.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.post.findUnique({
      where:{id}
    });;
  }

  async update(id: string, updatePost: UpdatePostDto) {
    return  await this.prisma.post.update({
      where:{id},
      data:{
        title:updatePost.title
      }
    }) ;
  }

  async remove(id: string) {
    await this.prisma.post.delete({
      where:{id}
    });
    return "Record deleted succesfully"
  }
}
