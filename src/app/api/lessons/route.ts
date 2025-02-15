import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const { data: data } = await supabase.from("lessons").select();
  return NextResponse.json({
    data: data,
  });
}
