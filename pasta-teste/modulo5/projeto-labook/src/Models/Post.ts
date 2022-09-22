export interface IPostDB {
  id: string;
  content: string;
  user_id: string;
}

export interface ILikeDB {
  id: string;
  post_id: string,
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
    this.id;
  };
  public getContent = () => {
    this.content;
  };
  public getUserId = () => {
    this.userid;
  };
  public getLikes = () => {
    this.likes;
  };
  public setId = (newId: string) => {
    this.id = newId;
  };
  public setContent = (newContent: string) => {
    this.content = newContent;
  };
  public setUserId = (newUserId: string) => {
    this.userid = newUserId;
  };
  public setLikes = (newLikes: number) => {
    this.likes = newLikes;
  };
}
