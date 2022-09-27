export interface IPostDB {
  id: string;
  content: string;
  user_id: string;
}

export interface ILikeDB {
  id: string;
  post_id: string;
  user_id: string;
}

export class Post {
  constructor(
    private id: string,
    private content: string,
    private userid: string,
    private likes: number = 0
  ) {}

  public getId = () => {
    return this.id;
  };
  public getContent = () => {
    return this.content;
  };
  public getUserId = () => {
   return this.userid;
  };
  public getLikes = () => {
   return this.likes;
  };
  public setId = (newId: string) => {
    return this.id = newId;
  };
  public setContent = (newContent: string) => {
    return this.content = newContent;
  };
  public setUserId = (newUserId: string) => {
    return this.userid = newUserId;
  };
  public setLikes = (newLikes: number) => {
    return this.likes = newLikes;
  };
}

export interface ICreatePostInputDTO {
  token: string ;
  content: string;
}
export interface ICreatePostOuputDTO {
  message: string;
  post: Post;
}
export interface IGetPostInputDTO {
  token: string;
}
export interface IGetPostOuputDTO {
  posts: Post[];
}
export interface IDeletePostInputDTO {
  message: string;
}
export interface IDeletePostOuputDTO {
  message: string;
}
export interface IAddLikeInputDTO {
  token: string;
  postId: string;
}
export interface IAddLikeOuputDTO {
  message: string;
}
export interface IRemoveLikeInputDTO {
  token: string;
  postId: string;
}
export interface IRemoveLikeOuputDTO {
  message: string;
}
