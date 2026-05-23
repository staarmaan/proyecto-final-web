import prisma from "../src/lib/prisma";

async function main() {
  const rabanoides = await Promise.all([
    prisma.rabanoide.create({
      data: { colorpiel: "PIEL" },
    }),
    prisma.rabanoide.create({
      data: { colorpiel: "ROJO" },
    }),
    prisma.rabanoide.create({
      data: { colorpiel: "AMARILLO" },
    }),
  ]);

  const items = await Promise.all([
    prisma.item.create({
      data: { itemId: 1 },
    }),
    prisma.item.create({
      data: { itemId: 2 },
    }),
  ]);

  console.log(`Seeded ${rabanoides.length} rabanoides and ${items.length} items.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
