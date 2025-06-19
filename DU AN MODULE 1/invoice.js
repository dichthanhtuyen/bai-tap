class Invoice {
    id;
    customer;
    listSellProduct;
    constructor(id, customer) {
        this.id = id;
        this.customer = customer;
        this.listSellProduct = [];
    }

    getListByName(nameSearch, priceFrom, priceTo) {
        let listOutPut = [];
        for (let i = 0; i < this.listSellProduct.length; i++) {
            let item = this.listSellProduct[i];
            if (item.name.toLowerCase().includes(nameSearch.toLowerCase())) {
                listOutPut.push(item);
            }
            }
            let listOutPut2 = [];
            for (let i = 0; i < listOutPut.length; i++) {
                let item = listOutPut[i];
                if (item.price >= priceFrom && item.price <= priceTo) {
                    listOutPut2.push(item);
                }
            }
        
        return listOutPut2;
    }

    getListItem() {
        return this.listSellProduct;
    }

    add(newItem) {
        this.listSellProduct.push(newItem);
        this.saveDataInStorage();
    }

    remove(id) {
        let index = -1;
        for (let i = 0; i < this.listSellProduct.length; i++) {
            if (this.listSellProduct[i].id == id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.listSellProduct.splice(index, 1);
            for (let i = 0; i < this.listSellProduct.length; i++) {
                this.listSellProduct[i].id = i + 1;
            }
        }
        this.saveDataInStorage();
    }

    getItemById(id) {
        for (let i = 0; i < this.listSellProduct.length; i++) {
            if (id = this.listSellProduct[i].id) {
                return this.listSellProduct[i];
            }
        }
    }

    update(id, newItem) {
        let index = -1;
        for (let i = 0; i < this.listSellProduct.length; i++) {
            if (this.listSellProduct[i].id == id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.listSellProduct[index] = newItem;
        }
        this.saveDataInStorage();
    }

    saveDataInStorage() {
        localStorage.setItem("listSellProduct", JSON.stringify(this.listSellProduct));
    }

    getDataInStorage() {
        let data = localStorage.getItem("listSellProduct");
        if (data) {
            this.listSellProduct = JSON.parse(data);
        } else {
            this.listSellProduct = [];
            this.saveDataInStorage()
        }
    }

}


