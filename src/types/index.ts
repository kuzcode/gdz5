export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};


export type INewPost = {
  link: string;
  contact: string;
  caption: string;
};

export type IUpdatePost = {
  postId: string;
  caption: string;
};