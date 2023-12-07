// import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { socialMediaProfiles } from '@/components/SocialMedia'

// function TextInput({
//   label,
//   ...props
// }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
//   let id = useId()

//   return (
//     <div className="group relative z-0 transition-all focus-within:z-10">
//       <input
//         type="text"
//         id={id}
//         {...props}
//         placeholder=" "
//         className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
//       />
//       <label
//         htmlFor={id}
//         className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
//       >
//         {label}
//       </label>
//     </div>
//   )
// }

// function RadioInput({
//   label,
//   ...props
// }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
//   return (
//     <label className="flex gap-x-3">
//       <input
//         type="radio"
//         {...props}
//         className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
//       />
//       <span className="text-base/6 text-neutral-950">{label}</span>
//     </label>
//   )
// }

// function ContactForm() {
//   return (
//     <FadeIn className="lg:order-last">
//       <form>
//         <h2 className="font-display text-base font-semibold text-neutral-950">
//           Work inquiries
//         </h2>
//         <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
//           <TextInput label="Name" name="name" autoComplete="name" />
//           <TextInput
//             label="Email"
//             type="email"
//             name="email"
//             autoComplete="email"
//           />
//           <TextInput
//             label="Company"
//             name="company"
//             autoComplete="organization"
//           />
//           <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
//           <TextInput label="Message" name="message" />
//           <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
//             <fieldset>
//               <legend className="text-base/6 text-neutral-500">Budget</legend>
//               <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
//                 <RadioInput label="$25K – $50K" name="budget" value="25" />
//                 <RadioInput label="$50K – $100K" name="budget" value="50" />
//                 <RadioInput label="$100K – $150K" name="budget" value="100" />
//                 <RadioInput label="More than $150K" name="budget" value="150" />
//               </div>
//             </fieldset>
//           </div>
//         </div>
//         <Button type="submit" className="mt-10">
//           Let’s work together
//         </Button>
//       </form>
//     </FadeIn>
//   )
// }

// function ContactDetails() {
//   return (
//     <FadeIn>
//       <h2 className="font-display text-base font-semibold text-neutral-950">
//         Our offices
//       </h2>
//       <p className="mt-6 text-base text-neutral-600">
//         Prefer doing things in person? We don’t but we have to list our
//         addresses here for legal reasons.
//       </p>

//       <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

//       <Border className="mt-16 pt-16">
//         <h2 className="font-display text-base font-semibold text-neutral-950">
//           Follow me
//         </h2>
//         <SocialMedia className="mt-6" />
//       </Border>
//     </FadeIn>
//   )
// }

function SocialBlocks() {
  return (
    <FadeIn className="grid grid-cols-4 grid-rows-4 gap-4">
      {socialMediaProfiles.map((socialMediaProfile) => (
        <Link
          key={socialMediaProfile.href}
          href={socialMediaProfile.href}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center rounded-2xl bg-gradient-to-t py-12 text-white shadow-lg ${
            socialMediaProfile.title === 'LinkedIn'
              ? 'col-span-2 row-span-2 from-blue-800 to-blue-600 lg:col-span-1 lg:row-span-4 lg:py-48'
              : ''
          } ${
            socialMediaProfile.title === 'Github'
              ? 'col-span-2 row-span-2 from-orange-600 to-orange-400 lg:col-span-1 lg:row-span-4 lg:py-48'
              : ''
          } ${
            socialMediaProfile.title === 'Twitter (X)'
              ? 'col-span-2 row-span-2 from-sky-500 to-sky-300'
              : ''
          } ${
            socialMediaProfile.title === 'Medium'
              ? 'col-span-2 row-span-2 from-slate-950 to-slate-700'
              : ''
          }`}
        >
          <socialMediaProfile.icon className="m-auto h-1/2 min-h-[50px] w-1/2 min-w-[50px] fill-current md:h-24 md:w-24" />
        </Link>
      ))}
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Interested in my work? Connect with me!',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact me" title="Interested in my work?">
        <p>
          Connect with me on LinkedIn (where I am most active) or follow one of
          my other social pages.
        </p>
      </PageIntro>

      <Container className="mt-12 sm:mt-20 lg:mt-28">
        <SocialBlocks />
      </Container>
    </>
  )
}
