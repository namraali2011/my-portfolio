
import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/db";

type RouteContext = {
  params: Promise<{ id: string }>;
};

function parseProjectId(value: string) {
  const id = Number(value);

  if (!Number.isSafeInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

// PUT: Edit an existing project
export async function PUT(
  request: Request,
  context: RouteContext
) {
  try {
    const { id: rawId } = await context.params;
    const id = parseProjectId(rawId);

    if (id === null) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid project ID.",
        },
        { status: 400 }
      );
    }

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
      UPDATE projects
      SET
        title = ${title},
        description = ${description}
      WHERE id = ${id}
      RETURNING id, title, description, created_at
    `;

    if (result.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project updated successfully.",
      project: result[0],
    });
  } catch (error) {
    console.error("PUT /api/projects/[id] failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update project.",
      },
      { status: 500 }
    );
  }
}

// DELETE: Remove an existing project
export async function DELETE(
  _request: Request,
  context: RouteContext
) {
  try {
    const { id: rawId } = await context.params;
    const id = parseProjectId(rawId);

    if (id === null) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid project ID.",
        },
        { status: 400 }
      );
    }

    const sql = getDatabase();

    const result = await sql`
      DELETE FROM projects
      WHERE id = ${id}
      RETURNING id
    `;

    if (result.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE /api/projects/[id] failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete project.",
      },
      { status: 500 }
    );
  }
}
