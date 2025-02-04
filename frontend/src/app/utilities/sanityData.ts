
import { client } from "../../sanity/client"
import { type SanityDocument } from "next-sanity";




const options = { next: { revalidate: 30 } };

export const sanityData = async (POSTS_QUERY : string ) => {
    return await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
}

