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

    // Disable submit on enter
    document.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.code === 'Enter') {
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemEditSubmit);

    // Back button click event
    document.querySelector(UISelectors.backBtn).addEventListener('click', backClick);
  }

  // Clear all items
  function clearAllItems(e) {
    if (confirm('Are you sure?')) {
      // Clear all items from storage
      ItemCtrl.clearAllItems();

      // Clear all items in UI
      UICtrl.clearAllItems();

      // Restore state
      UICtrl.clearEditState();
    }

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

      // Change style
      const itemElementToEdit = e.target.parentNode.parentNode;
      UICtrl.setCurrentItem(itemElementToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  }

  // Update item submit
  function itemEditSubmit(e) {
    // Get item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update item in UI
    UICtrl.updateListItem(updatedItem);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();

    e.preventDefault();
  }

  // Click back button
  function backClick(e) {
    UICtrl.clearEditState();
    UICtrl.clearInput();

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
