import React from "react";

function TodoCard(props) {
  const handleHashTagClicked = (hashTag) => {
    props.setHashTagSelected(hashTag);
  };

  const highlightHastags = (string) => {
    const words = string.split(" ");
    console.log(words);
    const wordsArrayWithHighlightedHashtag = words.map((word, i) => {
      if (word[0] === "#") {
        return (
          <span
            className="hashtag"
            key={i}
            onClick={() => handleHashTagClicked(word)}
          >
            {word}
          </span>
        );
      } else {
        return word;
      }
    });
    return <div className="task">{wordsArrayWithHighlightedHashtag}</div>;
  };
  return (
    <div>
      <p>{highlightHastags(props.todo.todo)}</p>
    </div>
  );
}

export default TodoCard;
