// App Controller
const App = ((ItemCtrl, UICtrl) => {
  // Get UI selectors
  const UISelectors = UICtrl.getSelectors();

  // Load event listeners
  function loadEventListeners() {
    // Clear all items event
    document.querySelector(UISelectors.clearAllBtn).addEventListener('click', clearAllItems);

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
  }

  // Clear all items
  function clearAllItems(e) {
    console.log('### clearAllItems');
    // Clear all items from storage
    ItemCtrl.clearAllItems();

    // Clear all items in UI
    UICtrl.clearAllItems();

    e.preventDefault();
  }

  // Add item submit
  function itemAddSubmit(e) {
    // Get input values from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if (input.name !== '' && input.calories !== '') {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear input fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Click edit item
  function itemEditClick(e) {
    if (e.target.classList.contains('edit-item')) {
      // Get list item id (item0, item-1)
      const listId = e.target.parentNode.parentNode.id;

      // Break into an array
      const listIdArr = listId.split('-');

      // Get the actual id
      const id = parseInt(listIdArr[1]);

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  }

  // Public methods
  return {
    init: () => {
      // Set initial state
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Insert items to UI
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);
      }

      // Load event listeners
      loadEventListeners();
    },
  };

})(ItemCtrl, UICtrl);
