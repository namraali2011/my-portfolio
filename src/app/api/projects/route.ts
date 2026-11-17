
import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/db";

export const dynamic = "force-dynamic";

// GET: Retrieve all projects from NeonDB
export async function GET() {
  try {
    const sql = getDatabase();

    const projects = await sql`
      SELECT id, title, description, created_at
      FROM projects
      ORDER BY id DESC
    `;

    return NextResponse.json({
      success: true,
      projects,
    });
  } catch (error) {
    console.error("GET /api/projects failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load projects.",
      },
      { status: 500 }
    );
  }
}

// POST: Add a new project
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const title =
      typeof body.title === "string"
        ? body.title.trim()
        : "";

    const description =
      typeof body.description === "string"
        ? body.description.trim()
        : "";

    if (!title || !description) {
      return NextResponse.json(
        {
          success: false,
          message: "Title and description are required.",
        },
        { status: 400 }
      );
    }

    if (title.length > 200 || description.length > 3000) {
      return NextResponse.json(
        {
          success: false,
          message: "Project details are too long.",
        },
        { status: 400 }
      );
    }

    const sql = getDatabase();

    const result = await sql`
      INSERT INTO projects (title, description)
      VALUES (${title}, ${description})
      RETURNING id, title, description, created_at
    `;

    return NextResponse.json(
      {
        success: true,
        message: "Project added successfully.",
        project: result[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/projects failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to add project.",
      },
      { status: 500 }
    );
  }
}
