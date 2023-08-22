import movies from "./data.json";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(movies);
}

export async function POST(req) {
  const { title, description, link, image } = await req.json();

  const newMovie = { id: movies.length + 1, title, description, link, image };

  movies.push(newMovie);
  return NextResponse.json("success");
}
