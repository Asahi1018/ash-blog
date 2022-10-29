import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: "ashblog",
    apiKey: process.env.API_KEY,
})