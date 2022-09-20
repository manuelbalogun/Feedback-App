function App() {
  let title = "Blog Post";
  let body = "This is a blog post.";
  let comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
    { id: 3, text: "Comment 3" },
    { id: 4, text: "Comment 4" },
  ];

  let loading = false;
  let loadingText = "Loading...";

  if (loading) return <h1>{loadingText}</h1>;

  let showComments = true;

  const commentBlock = (
    <div className="comments">
      <h4>Comments ({comments.length})</h4>

      <ul>
        {comments.map((comment, index) => (
          <li key={"id"}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container">
      <h1> {title} </h1>
      <p> {body} </p>

      {showComments && commentBlock}
    </div>
  );
}

export default App;
