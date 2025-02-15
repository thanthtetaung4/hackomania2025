// app/api/lessons/[lessonId]/chapters/route.ts
import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { chapterId: string } }
) {
  try {
    // Validate lessonId
    if (!params.chapterId) {
      return NextResponse.json(
        { error: "Lesson ID is required" },
        { status: 400 }
      );
    }

    // Parse lessonId to ensure it's a valid number
    const chapterId = parseInt(params.chapterId);
    if (isNaN(chapterId)) {
      return NextResponse.json(
        { error: "Invalid lesson ID format" },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const { data: chapters, error } = await supabase
      .from("quizzes")
      .select()
      .eq("chapter_id", chapterId); // Now using the parsed number

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!chapters || chapters.length === 0) {
      return NextResponse.json(
        { error: "No chapters found for this lesson" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      data: chapters,
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error ${error}` },
      { status: 500 }
    );
  }
}
