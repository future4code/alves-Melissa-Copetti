import { ILikeDB } from "./../Models/Post";
import { IPostDB, Post } from "../Models/Post";
import { BaseDatabase } from "./BaseDataBase";

export class PostDataBase extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  public toPostDBModel = (post: Post) => {
    const postDB: IPostDB = {
      id: post.getId(),
      content: post.getContent(),
      user_id: post.getUserId(),
    };
    return postDB;
  };

  async createPost(post: Post) {
    const postDB = this.toPostDBModel(post);
    await BaseDatabase.connection(PostDataBase.TABLE_POSTS).insert(postDB);
  }

  public getPosts = async () => {
    const postDB: IPostDB[] = await BaseDatabase.connection(
      PostDataBase.TABLE_POSTS
    ).select();
    return postDB;
  };

  public getLikes = async (postId: string) => {
    const result: any = await BaseDatabase.connection(PostDataBase.TABLE_LIKES)
      .select()
      .count("id as likes")
      .where({ post_id: postId });
    return result[0].likes as number;
  };
  public findPostById = async (postId: string) => {
    await BaseDatabase.connection(PostDataBase.TABLE_POSTS)
      .delete()
      .where({ id: postId });
  };
  public findLike = async (postId: string, userId: string) => {
    const likesDB: ILikeDB[] = await BaseDatabase.connection(
      PostDataBase.TABLE_POSTS
    )
      .select()
      .where({ post_id: postId })
      .andWhere({ user_id: userId });

    return likesDB[0];
  };

  public addLike = async (likeDB: ILikeDB) => {
    await BaseDatabase.connection(PostDataBase.TABLE_LIKES).insert(likeDB);
  };
  public removeLike = async (postId: string, userId: string) => {
    await BaseDatabase.connection(PostDataBase.TABLE_LIKES)
      .delete()
      .where({ post_id: postId })
      .andWhere({ user_id: userId });
  };
}
