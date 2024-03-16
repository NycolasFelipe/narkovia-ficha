function getContentItem(content, id) {
    if (content !== undefined) {
        let contentItem;
        $.each(content, (_index, item) => {
            if (item.id === id) {
                contentItem = item;
                return false;
            }
        });
        return contentItem;
    }
}
export default getContentItem;
