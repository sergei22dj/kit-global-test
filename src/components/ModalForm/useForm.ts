import { useState } from "react";
import { z } from "zod";

export const useForm = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [text, setText] = useState("");

    const [tags, setTags] = useState<string[]>([]);
    const [newTagValue, setNewTagValue] = useState("");
    const [tagError, setTagError] = useState(false);
    
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTagValue.trim() !== "") {
      if (!tags.includes(newTagValue)) {
        setTags((prevTags) => [...prevTags, newTagValue]);
        setNewTagValue("");
      }
    }
  };
  const handleNewTagValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTagValue(e.target.value);
  };

  const deleteTag = (index: number) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
    setTagError(false);
  };

  const PostItemSchema = z.object({
    img: z.string().min(1, { message: "You nedd to choose image" }),
    category: z
      .array(z.string())
      .min(1, { message: "you need to add min 1 category" }),
    title: z
      .string()
      .min(5, { message: "Title: Must be 5 or more characters long" }),
    text: z.string().min(1, { message: "cant be empty" }),
  });
return {
    handleEnterKey,
    handleNewTagValueChange,
    deleteTag,
    PostItemSchema,
    title,
    setTitle,
    image,
    setImage,
    text,
    setText,
    tags,
    newTagValue
}
}