import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    const rabanoides = await prisma.rabanoide.findMany();
    return NextResponse.json(rabanoides);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch rabanoides" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rabanoide = await prisma.rabanoide.create({ data: body });
    return NextResponse.json(rabanoide, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create rabanoide" },
      { status: 400 }
    );
  }
}
