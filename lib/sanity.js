import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    projectId: 'vin3omqt',
    dataset:'bike',
    apiVersion:'2025-03-24',
    useCdn: true
})
const imgBuilder = imageUrlBuilder(client);
export function urlFor(source){
    return imgBuilder.image(source)
}