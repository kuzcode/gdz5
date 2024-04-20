import { Models } from "appwrite";

// import { useToast } from "@/components/ui/use-toast";
import { Loader, PostCard } from "@/components/shared";
import { useGetRecentPosts } from "@/lib/react-query/queries";

const Home = () => {
  // const { toast } = useToast();

  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  if (isErrorPosts) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Ошибка</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Ошибка</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h1-bold text-center w-full text-light-1">Звучит — ГДЗ с аудиозаписями.</h2>
          <h4 className="h3-regular md:h3-regular text-center w-full text-light-2">На нашем сайте вы можете ахуеть от количества ответов!</h4>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-row flex-1 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
