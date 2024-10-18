import { Prompt, DM_Sans } from 'next/font/google'

export const prompt = Prompt({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
})
export const dm_sans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
}) 