import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    const items = await prisma.item.findMany();
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const itemId = Number(body.itemId);
    if (!Number.isInteger(itemId) || itemId < 0 || itemId > 12) {
      return NextResponse.json(
        { error: "itemId must be an integer between 0 and 12" },
        { status: 400 }
      );
    }
    const item = await prisma.item.create({ data: { itemId } });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 400 }
    );
  }
}
