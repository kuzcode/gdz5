import { ID } from "appwrite";

import { appwriteConfig, databases } from "./config";
import { INewPost, } from "@/types";
export async function createPost(post: INewPost) {
  try {
    const newPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      ID.unique(),
      {
        caption: post.caption,
        link: post.link,
        contact: post.contact,
      }
    );

    if (!newPost) {
      throw Error;
    }

    return newPost;
  } catch (error) {
    console.log(error);
  }
}