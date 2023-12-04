
export type PostItem = {
    id: string;
    img: string;
    author: string;
    category: string[];
    date: string;
    avatar: string;
    title: string;
    text: string ;
    comments: CommentItem[]
}
export type CommentItem = {
    id: string;
    author: string;
    avatar: string;
    text: string;
    date: string;
    time: string;
}
export type ToastMessageProps = {
    title: string;
    info: string;
    type: "success" | "error" | "warn";
  };
export type ZodValidationError = {
    message: string;
    path: (string | number)[];
  };