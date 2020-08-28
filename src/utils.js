export const extractHashTagsFromString = (string) => {
  const words = string.split(" ");
  const hashTags = words.filter((word) => word[0] === "#");
  return hashTags;
};

export const extractTodosContainingHashtags = (selectedHashTags) => {
  const todoListFromLS = JSON.parse(localStorage.getItem("todoList"));

  let filteredList = [];

  // A flat to make sure that the filter runs only once on the todoListFromLS list
  let hasFilteredOnce = false;

  while (selectedHashTags.length != 0) {
    const hashTag = selectedHashTags.shift();
    let list;
    if (hasFilteredOnce === false) {
      hasFilteredOnce = true;
      list = todoListFromLS;
    } else {
      list = filteredList;
    }
    filteredList = list.filter((todo) => todo.hashTags.includes(hashTag));
  }
  return filteredList;
};
