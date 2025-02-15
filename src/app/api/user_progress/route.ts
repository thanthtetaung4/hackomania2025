import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const { data: user_progress } = await supabase.from("user_progress").select();
  return NextResponse.json({
    data: user_progress,
  });
}
