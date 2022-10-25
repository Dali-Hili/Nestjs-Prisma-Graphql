import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from '../../../src/prisma/prisma.service';
@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  
  // FIND ALL Customers
  findAll() {
    return this.prisma.customer.findMany();
  }
  // FIND ONE Customer by id
  findOneById(id: string) {
    return this.prisma.customer.findUnique({where: {id: id}})
  }
  // FIND ONE Customer by type
  // findOneByType(type: string) {
  //   return this.prisma.customer.findUnique({where: {type: type}})                 // TODO
  // }
  // CREATE A Customer
  createCustomer(CreateCustomerDto:CreateCustomerDto){
    return this.prisma.customer.create({data : CreateCustomerDto})
    
  }
  // UPDATE A Customer
  updateCustomer(id:string,UpdateCustomerDto:UpdateCustomerDto){
    return this.prisma.customer.update({
      where: {id : id},
      data: UpdateCustomerDto
    })
  }
  // DELETE A Customer
  deleteCustomer(id:string){
    return this.prisma.customer.delete({
      where: {id : id}
    })
  }
}
