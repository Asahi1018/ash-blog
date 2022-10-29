import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: "ashblog",
    apikey: process.env.API_KEY,
})