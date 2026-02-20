import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(){
  const client = await clientPromise;
  const db = client.db("weave");
  const users = await db.collection("feature").find({}).toArray();
  return NextResponse.json(users); 
}

// export async function POST(req) {
//   const body = await req.json();

//   const client = await clientPromise;
//   const db = client.db("mydatabase");

//   const result = await db.collection("users").insertOne(body);

//   return NextResponse.json(result);
// }
