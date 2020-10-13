// Storage Controller
const StorageCtrl = (() => {


  // Public methods
  return {
    storeItem: (item) => {
      let items;
      // Check if any items in ls
      if (localStorage.getItem('items') === null) {
        items = [];
        // Push new item
        items.push(item);
        // Set ls
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        // Get what is already in ls
        items = JSON.parse(localStorage.getItem('items'));

        // Push new item
        items.push(item);

        // Reset ls
        localStorage.setItem('items', JSON.stringify(items));
      }
    },

    getItemsFromStorage: () => {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
  };
})();