import { NextResponse } from "next/server";
import movies from "../data.json";

export function GET(req) {
    const { searchParams } = new URL(req.nextUrl);
    console.log(searchParams.get("query"));

    const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchParams.get("query").toLowerCase());
    }
    );
    
    return NextResponse.json(filteredMovies);
}