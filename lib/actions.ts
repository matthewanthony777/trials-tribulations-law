'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { NewsletterFormSchema, CollaborateFormSchema } from '@/lib/schemas'
import CollaborateFormEmail from '@/emails/collaborate-form-email'

type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
type CollaborateFormInputs = z.infer<typeof CollaborateFormSchema>

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: CollaborateFormInputs) {
  const result = CollaborateFormSchema.safeParse(data);
  
  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, position, goals } = result.data;
    
    const { data: emailData, error } = await resend.emails.send({
      from: 'trials.tribulations@resend.dev',
      to: ['matthewbarr777@gmail.com'],
      subject: 'Collaboration Request',
      text: `Name: ${name}\nEmail: ${email}\nPosition: ${position}\nGoals: ${goals}`,
      react: CollaborateFormEmail({ name, email, position, goals })
    })

    if (!emailData || error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!data || error) {
      throw new Error('Failed to subscribe')
    }

    // Send a welcome email if needed
    // await resend.emails.send({
    //   from: 'trials.tribulations@resend.dev',
    //   to: [email],
    //   subject: 'Welcome to Trials & Tribulations',
    //   text: 'Thank you for subscribing to our newsletter.'
    // });

    return { success: true }
  } catch (error) {
    return { error }
  }
}