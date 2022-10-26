import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  // FIND ALL Customers

  @Get()
  customers() {
    return this.customerService.findAll();
  }

  // FIND ONE Customer by id

  @Get(':id')
  oneCustomerById(@Param('id') id: string) {
    return this.customerService.findOneById(id);
  }

  // FIND ONE Customer by type

  @Get('unique/type/:type')
  oneCustomerByType(@Param('type') type: string) {
    return this.customerService.findOneByType(type);                
  }

  // FIND ALL Customers without contract

  @Get('unique/contract')
  findAllWithoutContract(@Param('contract') contract: string) {
    return this.customerService.findAllWithoutContract();                
  }

   // FIND ALL Customers without quotation

  @Get('unique/quotation')
  findAllWithoutQuotation(@Param('contract') contract: string) {
    return this.customerService.findAllWithoutQuotation();                
  }

    // FIND ALL Customers by adding date

  @Get('unique/addingDate/:date')
  findAllByAddingDate(@Param('date') date: string) {
    return this.customerService.findAllByAddingDate(date);                
  }

  // FIND ONE Customer by nameEng

  @Get('unique/name/:name')
  oneCustomerByName(@Param('name') name: string) {
    return this.customerService.findOneByName(name);                
  }

  // CREATE A Customer

  @Post()
  create(@Body() CreateCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(CreateCustomerDto);
  }

// UPDATE A Customer

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCustomerDto:UpdateCustomerDto) {
    return this.customerService.updateCustomer(id, UpdateCustomerDto);
  }

// DELETE A Customer

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }
}
