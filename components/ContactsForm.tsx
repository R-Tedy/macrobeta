"use client"
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  email: z.string().min(2).max(50),
  message: z.string().min(2).max(50),
})

export function ContactsForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  // The Form
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input  className='rounded-full contactFormText shadow-lg' placeholder="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* <Input type='' className='rounded-xl' placeholder="message" {...field} /> */}
                <Textarea className='rounded-xl contactFormText shadow-lg' placeholder='message' {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
        <div className='flex max-md:justify-center'>
          <Button className='rounded-full px-8 bg-secondary_2 shadow-lg contactText font-bold hover:bg-primary2 hover:text-white' type="submit">Submit</Button>
        </div>
       
      </form>
    </Form>
  )
}