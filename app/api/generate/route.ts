import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { keyword } = await req.json();

    if (!keyword) {
      return NextResponse.json(
        { error: "Keyword required" },
        { status: 400 }
      );
    }

    const titles = [
      `Best ${keyword} Guide in 2026`,
      `10 ${keyword} Tips That Actually Work`,
      `How to Master ${keyword} Fast`,
      `${keyword}: Beginner to Pro Guide`,
      `Why ${keyword} Matters in 2026`,
      `${keyword} Mistakes to Avoid`,
      `Ultimate ${keyword} Checklist`,
      `Top ${keyword} Strategies Today`,
      `${keyword} Secrets Nobody Tells You`,
      `Easy ${keyword} Wins for Beginners`
    ];

    return NextResponse.json({ titles });

  } catch (error) {
    console.error("Error generating titles:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}