import { Injectable,Logger } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { isNullableType } from 'graphql';
@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  
  // FIND ALL Customers

  findAll() {
    return this.prisma.customer.findMany({});
  }

  // FIND ONE Customer by id

  findOneById(id: string) {
    return this.prisma.customer.findUnique({
      where: {id: id},
    })
  }

  // FIND ONE Customer by type

  findOneByType(type: string) {
    return this.prisma.customer.findMany({                        
      where: {type}
    })                 
  }
  // FIND ALL Customers without contract

  findAllWithoutContract() {
    return this.prisma.customer.findMany({                        
      where: {
        contractId: null
      }
    })                 
  }

  // FIND ALL Customers without quotation

  findAllWithoutQuotation() {
    return this.prisma.customer.findMany({                        
      where: {
        quotationId: null
      }
    })                 
  }

  // FIND ALL Customers by adding date

  findAllByAddingDate(date: string) {
    const tomorrow = new Date(date).getDate() + 1
    return this.prisma.customer.findMany({                        
      where: {
        OR: [
          {
            createdAt: {
              gte : new Date(date),
              lt: new Date(date)                     // Todo
            },
          },
        ],
      },
    })                 
  }

  // FIND ONE Customer by name

  findOneByName(name: string) {
    return this.prisma.customer.findMany({                        // TODO
      where: {
        OR: [
          {
            compNameEng: { contains: name },
          },
          {
            nameEng: { contains: name },
          },
          {
            govNameEng: { contains: name },
          },
          {
            intCusNameEng: { contains: name },
          },
        ],
      },
    })                 
  }
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
