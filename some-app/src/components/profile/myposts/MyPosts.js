import Post from "./post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
    let postsData = [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 10 },
    ];
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsData.map((item) => (
                    <Post message={item.message} likesCount={item.likesCount} />
                ))}
            </div>
        </div>
    );
};

export default MyPosts;
