// app/api/lessons/[lessonId]/[chapterId]/route.ts
import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { lessonId: string; chapterId: string } }
) {
  //   console.log(params);
  try {
    const supabase = await createClient();
    const { data: chapters, error } = await supabase
      .from("chapters")
      .select()
      .eq("lesson_id", params.lessonId)
      .eq("id", params.chapterId); // Assuming you have a lesson_id column in chapters table

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
