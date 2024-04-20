import { Models } from "appwrite";

type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
        <div className="flex-between form">
        <div className="flex items-center">
          <div className="flex flex-row">
            <p className="base-medium lg:body-bold text-light-1">
              {post.caption}
            </p>
          </div>
        </div>
      </div>
  );
};

export default PostCard;
