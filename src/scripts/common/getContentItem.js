function getContentItem(content, id) {
  let contentItem;
  $.each(content, (index, item) => {
    if (item.id === id) {
      contentItem = item;
      return false;
    }
  });
  return contentItem;
}

export default getContentItem;