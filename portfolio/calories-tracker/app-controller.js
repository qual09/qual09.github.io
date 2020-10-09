// App Controller
const App = ((ItemCtrl, UICtrl) => {
  // Get UI selectors
  const UISelectors = UICtrl.getSelectors();

  // Load event listeners
  function loadEventListeners() {
    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
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

  // Public methods
  return {
    init: () => {
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
