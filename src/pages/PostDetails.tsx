import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getPost } from "../services/posts.services";
import { PostType } from "../types/posts.types";

function PostDetails(props: any) {
  const { postId } = useParams();
  const [post, setPost] = useState<PostType>({} as PostType);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (postId) {
      setLoading(true);
      getPost(postId)
        .then((dt) => {
          setPost(dt);
          setLoading(false);
        })
        .catch((err) => {
          if (axios.isAxiosError(err)) {
            setError(err.message);
          } else {
            setError("Something wrong happen");
          }

          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="bg-slate-50 p-10">
          <p className="font-bold text-2xl">{post.title}</p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostDetails;
