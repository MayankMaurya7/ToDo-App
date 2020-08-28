import React from "react";

function TodoCard(props) {
  const highlightHastags = (todo) => {
    const { todo: string, id, isComplete } = todo;
    const words = string.split(" ");
    const wordsArrayWithHighlightedHashtag = words.map((word, i) => {
      if (word[0] === "#") {
        return (
          <span
            className="hashtag"
            key={i}
            onClick={() => {
              console.log("Clickedhashtag");
              props.handleHashTagClicked(word);
            }}
          >
            {word}
          </span>
        );
      } else {
        return <span id="word">{word}</span>;
      }
    });
    return (
      <div className="task" id={isComplete ? "completed" : "pending"}>
        {wordsArrayWithHighlightedHashtag}
        <button
          className="removeButton"
          onClick={() => props.removeTodoFromTodoList(id)}
        >
          X
        </button>
        <button
          className="complete-Button"
          onClick={() => props.completeTask(props.todo)}
        >
          Done
        </button>
      </div>
    );
  };
  return (
    <div>
      <p>{highlightHastags(props.todo)}</p>
    </div>
  );
}

export default TodoCard;
