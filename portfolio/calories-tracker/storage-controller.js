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

    updateItemStorage: (updatedItem) => {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if (updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
      });

      // Reset ls
      localStorage.setItem('items', JSON.stringify(items));
    },

    deleteItemFromStorage: (id) => {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if (id === item.id) {
          items.splice(index, 1);
        }
      });

      // Reset ls
      localStorage.setItem('items', JSON.stringify(items));
    },

    clearItemsFromStorage: () => {
      localStorage.removeItem('items');
    },
  };
})();