import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const rabanoide = await prisma.rabanoide.findUnique({
      where: { id: Number(id) },
    });
    if (!rabanoide) {
      return NextResponse.json(
        { error: "Rabanoide not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(rabanoide);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch rabanoide" },
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
    const rabanoide = await prisma.rabanoide.update({
      where: { id: Number(id) },
      data: body,
    });
    return NextResponse.json(rabanoide);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update rabanoide" },
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
    await prisma.rabanoide.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ message: "Rabanoide deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete rabanoide" },
      { status: 400 }
    );
  }
}
