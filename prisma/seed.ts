import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.customer.deleteMany();
  
    console.log('Seeding...');
  
    const customer = await prisma.customer.create({
      data: {
  nameAr:       'String',
  nameEng:      'String',
  idNumber:     'String',
  taxNumber:    'String',
  country:      'String',
  city:         'String',
  crNumber:     'String',
  location:     'String',
  address:      'String',
  buildingNum:  'String',
  phone:        'String',
  email:        'String',
  notes:        'String'   
      },
    });
  
    console.log({ customer });
  }
  
  main()
    .catch((e) => console.error(e))
    .finally(async () => {
      await prisma.$disconnect();
    });