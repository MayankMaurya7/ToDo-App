export const extractHashTagsFromString = (string) => {
  const words = string.split(" ");
  const hashTags = words.filter((word) => word[0] === "#");
  return hashTags;
};

export const extractTodosContainingHashtags = (hashTag) => {
  const todoListFromLS = JSON.parse(localStorage.getItem("todoList"));
  //   console.log(todoListFromLS);
  const listWithSameHashtag = todoListFromLS.filter((todo) =>
    todo.hashTags.includes(hashTag)
  );
  return listWithSameHashtag;
};
