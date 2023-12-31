export interface SearchList {
  searchWord: string;
  setIsFocused(data: boolean): void;
}

export interface IUser {
  _id: string;
  fullname: string;
  username: string;
  email: string;
  password?: string;
  status: 0 | 1;
  email_verify_token: string;
  forgot_password_token: string;
  verify: 0 | 1 | 2;
  role: 0 | 1;
  avatar: string;
  cover_photo: string;
}

export interface IDropdownBottomLefBar {
  currentUser: IUser | null; // Sử dụng kiểu dữ liệu bạn đã định nghĩa ở trước
}

export interface IValueInputProfile {
  fullname: string;
  username: string;
}
export interface IValueInputEditTweetContent {
  content?: string;
}
export interface IImageProfile {
  avatar: string;
  cover_photo: string;
}
export interface IImageEditTweet {
  medias: string[];
}

export interface IModal {
  isOpenModal: boolean;
  setIsOpenModal: (status: boolean) => void;
}
export interface IRemoveTweetModal {
  isOpenRemoveTweetModal: boolean;
  setIsOpenRemoveTweetModal: (status: boolean) => void;
  tweetId: string;
}

export interface IEditTweetModal {
  isOpenEditTweetModal: boolean;
  setIsOpenEditTweetModal: (status: boolean) => void;
  tweet: ITweetLocal | null;
}

export interface ITweetLocal {
  _id: string;
  type: string;
  author: IUser;
  content: string;
  parentId?: ITweetLocal | null;
  hashtags?: string[] | null;
  mentions?: string[] | null;
  medias?: string[] | null;
  likes: string[];
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface HomeHeaderProps {
  onNewTweet: () => void;
}

export interface ITweetProps {
  tweet: ITweetLocal;
}

export interface IDropdownTweetProps {
  tweetAuthorId: string;
  tweetId: string;
}

export interface INotification {
  senderId: IUser;
  receiverId: string;
  type: "like" | "comment"; // Loại thông báo
  tweetId: string; // ID của tweet liên quan
  createdAt: string; //
}
