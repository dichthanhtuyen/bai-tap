class Invoice {
    id;
    customer;
    listSellProduct;
    constructor(id, customer) {
        this.id = id;
        this.customer = customer;
        this.listSellProduct = [];
    }
    getListItem(){
        return this.listSellProduct;
    }

    add(newItem){
        this.listSellProduct.push(newItem);
    }
}



