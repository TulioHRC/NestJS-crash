export class Product {
    constructor(
        public id: string, 
        public title: string, 
        public description: string, 
        public price: number
    ) {};
    // public creates the parameters inside class, like a this.id = id; this.title = title; ...
}