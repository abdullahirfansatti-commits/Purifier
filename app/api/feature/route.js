import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(){
  const client = await clientPromise;
  const db = client.db("weave");
  const users = await db.collection("feature").find({}).toArray();
  return NextResponse.json(users); 
}
