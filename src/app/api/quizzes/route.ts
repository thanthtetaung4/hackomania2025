import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const { data: chapters } = await supabase.from("quizzes").select();
  return NextResponse.json({
    data: chapters,
  });
}
