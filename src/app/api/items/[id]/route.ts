import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const item = await prisma.item.findUnique({
      where: { id: Number(id) },
    });
    if (!item) {
      return NextResponse.json(
        { error: "Item not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch item" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    if (body.itemId !== undefined) {
      const itemId = Number(body.itemId);
      if (!Number.isInteger(itemId) || itemId < 0 || itemId > 12) {
        return NextResponse.json(
          { error: "itemId must be an integer between 0 and 12" },
          { status: 400 }
        );
      }
      body.itemId = itemId;
    }
    const item = await prisma.item.update({
      where: { id: Number(id) },
      data: body,
    });
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update item" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.item.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ message: "Item deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 400 }
    );
  }
}
