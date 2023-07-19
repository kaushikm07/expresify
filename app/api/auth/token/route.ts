import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret =  process.env.NEXTAUTH_SECRET;

export async function GET(req: NextRequest) {
    const token = await getToken({ req, secret, raw: true}); //used await because it returns a promise
    return NextResponse.json({ token }, { status: 200});
}