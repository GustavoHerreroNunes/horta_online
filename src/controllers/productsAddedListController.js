const productsAddedListController = {
    list: [],

    subTotal: 0.0,

    addProduct: (id, price) => {
        if(!productsAddedListController.productWasAdded(id)){
            productsAddedListController.list.push(id);
            productsAddedListController.subTotal += price;
            
            return "Success: Product added to list";
        }else{
            return "Error: Product already was added to list";
        }
    },

    removeProduct: (id, price) => {
        if(productsAddedListController.productWasAdded(id)){
            let productIndex = productsAddedListController.list.indexOf(id);
            productsAddedListController.list.splice(productIndex, 1);
            productsAddedListController.subTotal -= price;
            
            return "Success: Product removed from list";
        }else{
            return "Error: This product wasn't added to list";
        }
    },

    productWasAdded: (id) => {
        let list = productsAddedListController.list;
        return (list.indexOf(id) !== -1);
    }
};

export default productsAddedListController;