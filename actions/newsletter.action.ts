"use server";

import { z } from "zod";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { newsletterSubscriptions } from "@/db/schema";

const formSchema = z.object({
  email: z.string().email(),
});

export async function subscribeToNewsletter(prevState: unknown, formData: FormData) {
  try {
    const { email } = formSchema.parse({
      email: formData.get("email"),
    });
    await db.insert(newsletterSubscriptions).values({ email });
    revalidatePath("/");
  } catch (error) {
    throw new Error("Error subscribing to newsletter");
  }
}

// 'use server'

// import { redirect } from 'next/navigation'

// export async function createUser(prevState: any, formData: FormData) {
//   const res = await fetch('https://...')
//   const json = await res.json()

//   if (!res.ok) {
//     return { message: 'Please enter a valid email' }
//   }

//   redirect('/dashboard')
// }
