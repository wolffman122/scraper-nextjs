import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {

    await prisma.brands.upsert({
        where: { name: 'Western Digital' },
        update: {},
        create: {
            name: 'Western Digital',
            website: 'www.westerndigitial.com',
            models: {
                createMany: {
                    data: [
                        { modelNumber: 'WD101EFBX', size: 10, cacheSize: 256, link: 'https://www.amazon.com/dp/B08TZPS4QQ/?th=1', scraperCode: 'B08TZPS4QQ'},
                        { modelNumber: 'WD10EFRX', size: 1, cacheSize: 64, link: 'https://www.amazon.com/dp/B008JJLXO6/?th=1', scraperCode: 'B008JJLXO6'},
                    ]
                }
            }
        }
    });

    await prisma.brands.upsert({
        where: { name: 'Seagate' },
        update: {},
        create: {
            name: 'Seagate',
            website: 'www.seagate.com',
            models: {
                createMany: {
                    data: [
                        { modelNumber: 'ST2000VN004', size: 2, cacheSize: 64, link: 'https://www.amazon.com/dp/B07H2GY8ZV/?th=1', scraperCode: 'B07H2GY8ZV'},
                        { modelNumber: 'ST3000VN007', size: 3, cacheSize: 64, link: 'https://www.amazon.com/dp/B07H289S7B/?th=1', scraperCode: 'B07H289S7B'},
                    ]
                }
            }
        }
    });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })