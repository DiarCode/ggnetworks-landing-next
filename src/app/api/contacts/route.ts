import { NextResponse } from "next/server";
import { ticketsService, Ticket } from "@/services/tickets.service";

export async function POST(req: Request) {
  try {
    const { name, email, message }: Ticket = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const ticket: Ticket = { name, email, message };

    await ticketsService.sendTicket(ticket);

    return NextResponse.json({
      success: true,
      message: "Ticket sent successfully via Email and Telegram",
    });
  } catch (error) {
    console.error("Ticket sending error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
