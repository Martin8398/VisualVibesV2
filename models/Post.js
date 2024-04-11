import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    fistName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: MessagePort,
      of: Boolean,
    },
    comments: {
      type: Array,
      defaults: [],
    },
  },
  { timestamp: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
