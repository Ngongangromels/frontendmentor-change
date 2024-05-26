import { useState, useEffect } from "react";
import "./App.css";
import { BackgroundImage } from "./components/BackgroundImage";
import iconStar from "./assets/images/iconStar.svg";
import { Accordion } from "./components/Accordion";
import { Comment, getAllPost, getCommentsByPostId, Post } from "./server";

function App() {
  const [posts, setPosts] = useState<Post[] | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getAllPost();
      setTimeout(() => {
        if (response.error) {
          setError(response.error);
        } else {
          setPosts(response.data);
        }
        setLoading(false);
      }, 3500);
    })();
  }, []);

  const renderAccordionTitle = (data: Record<any, any>) => (
    <div>
      <div>User name: {(data as Post).user.username}</div>
      <div>Post title: {(data as Post).title}</div>
    </div>
  );

  const renderAccordionContent = (data: any) => {
    console.log(data);
    const comments = data as Comment[];
    return (
      <>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.body}</p>
          </div>
        ))}
      </>
    );
  };

  const renderContent = () => {
    if (loading) {
      return <p className="loading">Loading....</p>;
    }
    if (error) {
      return (
        <p
          style={{
            color: "red",
          }}
          className="error"
        >
          The following error occurred while fetching all the posts: {error}
        </p>
      );
    }

    const retrieveItemContent = async (data: Record<any, any>) => {
      const comments = await getCommentsByPostId((data as Post).id);
      return comments.data;
    };

    return (
      <Accordion
        items={posts ?? []}
        retrieveContent={retrieveItemContent}
        renderTitle={renderAccordionTitle}
        renderContent={renderAccordionContent}
      />
    );
  };
  return (
    <div className="App">
      <BackgroundImage />
      <section className="faqs">
        <h1>
          {/* image */}
          <img className="icon-star" alt="icon star" src={iconStar} />
          <span className="title">Posts</span>
        </h1>
        {renderContent()}
      </section>
    </div>
  );
}

export default App;
