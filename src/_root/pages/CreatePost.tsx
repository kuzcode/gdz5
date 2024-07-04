import PostForm from "@/components/forms/PostForm";
const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
          <h2 className="title">Заявка</h2>
        <PostForm action="Create" />
      </div>
    </div>
  );
};

export default CreatePost;
