class Store {
    id;
    name;
    listProduct;
    constructor(id, name) {
        this.listProduct = [];
        this.id = id;
        this.name = name;
    }
    getListProduct() {
        return this.listProduct;
    }

    add(newProduct) {
        this.listProduct.push(newProduct)
    }

    remove(id) {
        let index = -1;
        for (let i = 0; i < this.listProduct.length; i++) {
            let p = this.listProduct[i];
            if (p.id == id) {
                index = i;
                break;
            }
        }
        if (index == -1) {
            alert("Không có sản phẩm này")
        } else {
            this.listProduct.splice(index, 1);
            for (let i = 0; i < this.listProduct.length; i++) {
                this.listProduct[i].id = i + 1;
            }
        }
    }

    getProductById(id) {
for(let i =0; i<this.listProduct.length; i++){
    let p = this.listProduct[i];
    if (id = p.id){
        return p;
    }
}
    }

update(id,newProduct){
     let index = -1;
        for (let i = 0; i < this.listProduct.length; i++) {
            let p = this.listProduct[i];
            if (p.id == id) {
                index = i;
                break;
            }
        }
        if (index == -1) {
            alert("Không có sản phẩm này")
        } else {
            this.listProduct[index]=newProduct;
            }
        }
}

