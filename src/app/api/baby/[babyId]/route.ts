import prismaClient from "@/libs/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  context: { params: { babyId: string } }
) {
  await prismaClient.baby.delete({
    where: { id: context.params.babyId },
  });
  return new NextResponse(null, { status: 204 });
}
