// app/api/formdata/route.js
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // your MongoDB client promise

export async function POST(req) {
  try {
    // Parse JSON body from frontend
    const body = await req.json();
    const { firstName, lastName, address, country, phone } = body;

    // Simple validation
    if (!firstName || !lastName || !address || !country || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("weave"); // your database name

    // Insert into collection "formdata"
    const result = await db.collection("formdata").insertOne(body);

    return NextResponse.json(
      { message: "User created successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/formdata error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}