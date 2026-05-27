import prisma from "../src/lib/prisma";

async function main() {
  const rabanoides = await Promise.all([
    prisma.rabanoide.create({
      data: { nombre: "Rabanoide 1", colorpiel: "PIEL", colortallo: "VERDE" },
    }),
    prisma.rabanoide.create({
      data: { nombre: "Rabanoide 2", colorpiel: "ROJO", colortallo: "AZUL" },
    }),
    prisma.rabanoide.create({
      data: { nombre: "Rabanoide 3", colorpiel: "AMARILLO", colortallo: "NARANJA" },
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
