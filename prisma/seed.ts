import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.customer.deleteMany();
  
    console.log('Seeding...');
  // Can use createMany
    const customer1 = await prisma.customer.create({
      data: {
        nameAr: "دالي",
        nameEng: "Dali",
        idNumber: "456",
        taxNumber: "9999",
        country: "Tunisia",
        city: "Chebba",
        crNumber: "111",
        location: "Ariana",
        address: "Rue fathi zhir",
        buildingNum: "5",
        phone: "47039611",
        email: "dali@gmail.com",
        notes: "this is a note",
        type: "INDIVIDUAL"
      },
    });
    
    const customer2 = await prisma.customer.create({
      data: {
        compNameEng: "خالد",
        compNameAr: "khaled",
        gmNameEng: "Ali",
        gmNameAr: "علي",
        gmIdNumber: "11829799",
        companyActiv: "Commerce",
        natAddress: "Rue mahmoud ",
        crNumber: "156",
        buildingNum: "5",
        phone: "27921440",
        email: "khaled@gmail.com",
        taxNumber: "9999",
        notes: "this is a note",
        type: "COMPANY"
      },
    });
  }
  



  
  main()
    .catch((e) => console.error(e))
    .finally(async () => {
      await prisma.$disconnect();
    });