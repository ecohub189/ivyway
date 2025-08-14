import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(request: NextRequest) {
  try {
    const { amount, service, date, time, studentInfo } = await request.json()

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: service,
              description: `Session scheduled for ${date} at ${time}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.nextUrl.origin}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/schedule`,
      customer_email: studentInfo.email,
      metadata: {
        service,
        date,
        time,
        studentName: studentInfo.studentName,
        parentName: studentInfo.parentName,
        phone: studentInfo.phone,
        grade: studentInfo.grade || "",
        notes: studentInfo.notes || "",
      },
    })

    return NextResponse.json({ clientSecret: session.id })
  } catch (error) {
    console.error("Error creating payment intent:", error)
    return NextResponse.json({ error: "Error creating payment intent" }, { status: 500 })
  }
}
