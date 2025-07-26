import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        user: "harkirat",
        email: "harkirat@gamil.com"
    })
}

export function POST(){
    return NextResponse.json({
        user: "harkirat",
        email: "harkirat@gamil.com"
    })
}