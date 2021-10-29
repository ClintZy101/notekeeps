import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  updateItems: [],
  itemsTotalCount: 0,
  itemsTotalAmount: 0,
  currentItem: null,
};

export const quotationSlice = createSlice({
  name: "quotation",
  initialState,
  reducers: {
    // Actions
    addToQuotation: (state, action) => {
      // returns -1 for false 0 for true
      const itemIndex = state.items.findIndex(item => item.description === action.payload.description);
      // if item exist , increment to 1
      if (itemIndex >= 0) {
        state.items[itemIndex].itemCount += 1
      } else {
        const tempProduct = { ...action.payload, itemCount: 1 };
        state.items.push(tempProduct)
      }
    },

    addToUpdate: (state, action) => {
      state.updateItems = [...state.updateItems, action.payload]
    },

    adjustCount: (state, action) => {
      // the id is the item itself
      state.items.map((item) => item.description === action.payload.description ? { ...item, itemCount: + action.payload.description } : item)
    },

    increment: (state, action) => {

      state.items.map((item) => item.item === action.payload.item ? { ...item, count: action.payload.item } : item)
    },

    decrement(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.description === action.payload.description
      );

      if (state.items[itemIndex].itemCount > 1) {
        state.items[itemIndex].itemCount -= 1;

      } else if (state.items[itemIndex].itemCount === 1) {
        const nextItems = state.items.filter(
          (item) => item.description !== action.payload.description
        );

        state.items = nextItems;
      }
    },

    clearItems (state) {
      state.items = []
    },

    clearUpdateItems (state) {
      state.updateItems = []
    },

    loadCurrentItem: (state, action) => {
      state.currentItem = [...state.currentItem, action.payload]
    },


    removeFromQuotation: (state, action) => {
      const index = state.items.findIndex(
        (quotationItem) => quotationItem.item === action.payload.item
      )
      // copy of the quotation
      let newQuotation = [...state.items];

      if (index >= 0) {
        // item exists in basket... remove it
        newQuotation.splice(index, 1)
      } else {
        console.warn(
          'Cant remove product'
        );
      }
      state.items = newQuotation;
    },
  },
});

export const { addToQuotation, addToUpdate, removeFromQuotation, adjustCount, getTotals, increment, decrement, clearItems, clearUpdateItems, addToUser } = quotationSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.quotation.items;

export const selectUpdateItems = (state) => state.quotation.updateItems;

// export const selectTotal = (state) => state.quotation.items.reduce((total, item) => total + item.price, 0)

export const selectTotal = (state) => state.quotation.items.reduce((prev, item) => prev + (item.price * item.itemCount), 0)

export const selectTotalCost = (state) => state.quotation.items.reduce((prev, item) => prev + (item.cost * item.itemCount), 0)

// export const selectTotalInterest = (state) => state.quotation.items.reduce((prev, item) => prev + (item.interest * item.itemCount), 0)

export default quotationSlice.reducer;
