import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-6 p-4 border rounded-lg bg-blue-100 dark:bg-purple-100">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      <div className="space-y-2">
        {comments.map((comment, index) => (
          <p key={index} className="text-sm text-gray-700 dark:text-gray-300">
            {comment}
          </p>
        ))}
      </div>
      <div className="flex gap-2 mt-3">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 border rounded px-2 py-1"
        />
        <button
          onClick={handleAddComment}
          className="bg-purple-600 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CommentSection;