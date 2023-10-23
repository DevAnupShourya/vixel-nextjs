import { NextRequest , NextResponse} from "next/server";

export async function POST(request: NextRequest , response : NextResponse) {
    const user = await request.json()
    return user;
}
