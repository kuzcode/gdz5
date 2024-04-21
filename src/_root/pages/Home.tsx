import{Models}from"appwrite";
import{Loader,PostCard}from"@/components/shared";
import{useGetRecentPosts,useGetRecentSubjects}from"@/lib/react-query/queries";
const Home=()=>{
const{
data:posts,
isLoading:isPostLoading,
isError:isErrorPosts,
}=useGetRecentPosts();
const{
data:subjects,
isLoading:isSubjectLoading,
}=useGetRecentSubjects();
if(isErrorPosts){
return(
<div className="flex flex-1">
<div className="home-container">
<p className="body-medium text-light-1">Ошибка</p>
</div>
<div className="home-creators">
<p className="body-medium text-light-1">Ошибка</p>
</div>
</div>
);}
return (
<><div className="flex flex-1 w-full">
<div className="home-container">
<div className="home-posts">
<h2 className="h3-bold md:h1-bold text-center w-full text-light-1"><span className="gradient-text">Звучит</span> — ГДЗ с аудиозаписями.</h2>
<h4 className="h3-regular md:h3-regular text-center w-full text-light-2 marmin z-10">На нашем сайте вы можете ахуеть от количества ответов!</h4>
<h4 className="h3-regular md:h3-regular text-center w-full text-light-1 z-10">Классы:</h4>
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
<h4 className="h3-regular md:h3-regular text-center w-full text-light-1 z-10">Предметы:</h4>
{isSubjectLoading && !subjects ? (
<Loader />
) : (
<ul className="flex flex-row flex-1 w-full">
{subjects?.documents.map((sbjt: Models.Document) => (
<li key={sbjt.$id} className="flex justify-center w-full">
<PostCard post={sbjt} />
</li>
))}
</ul>
)}
</div></div></div><div className="bg">
<div className="bubble-1"></div>
</div></>);};
export default Home;