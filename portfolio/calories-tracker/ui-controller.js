// UI Controller
const UICtrl = (() => {
  // UI elements selectors
  const UISelectors = {
    itemList: '#item-list',
    clearAllBtn: '.right',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    daleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
    totalCaloriesTitle: '#total-calories',
  };

  // Public methods
  return {
    populateItemList: (items) => {
      let html = '';

      items.forEach(item => {
        html += `
          <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="fa fa-pencil edit-item"></i>
            </a>
          </li>
        `;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getItemInput: () => {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      }
    },

    clearAllItems: () => {
      document.querySelector(UISelectors.itemList).innerHTML = '';
      UICtrl.hideList();
    },

    addListItem: (item) => {
      // Show the list
      UICtrl.showList();

      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="fa fa-pencil edit-item"></i>
        </a>
      `;

      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },

    clearInput: () => {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },

    hideList: () => {
      document.querySelector(UISelectors.itemList).style.display = 'none';
      document.querySelector(UISelectors.totalCaloriesTitle).style.display = 'none';
      document.querySelector(UISelectors.clearAllBtn).style.display = 'none';
    },

    showList: () => {
      document.querySelector(UISelectors.itemList).style.display = 'block';
      document.querySelector(UISelectors.totalCaloriesTitle).style.display = 'block';
      document.querySelector(UISelectors.clearAllBtn).style.display = 'block';
    },

    addItemToForm: () => {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },

    showTotalCalories: (totalCalories) => {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },

    clearEditState: () => {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.daleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },

    showEditState: () => {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.daleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },

    getSelectors: () => {
      return UISelectors;
    },
  };

})();
