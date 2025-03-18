// components/collaborate-form.tsx
'use client'

import { z } from 'zod'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CollaborateFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'

type Inputs = z.infer<typeof CollaborateFormSchema>

export default function CollaborateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(CollaborateFormSchema),
    defaultValues: {
      name: '',
      email: '',
      position: '',
      goals: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    try {
      const result = await sendEmail(data)

      if (result?.error) {
        toast.error('An error occurred! Please try again.')
        return
      }

      toast.success('Message sent successfully!')
      reset()
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error('Failed to send your message. Please try again.')
    }
  }

  return (
    <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8">
      <form onSubmit={handleSubmit(processForm)} className="space-y-6" noValidate>
        {/* Form fields... */}
        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black hover:bg-gray-200 py-3 text-lg font-medium disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Start the Conversation'}
          </Button>
        </div>
      </form>
    </div>
  )
}