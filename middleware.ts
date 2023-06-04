import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import React from "react";

async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({
    req,
    res,
  });
  await supabase.auth.getSession();
  return res;
}

export default middleware;
