class Cricle {
    radius;
    color;
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get getRadius(){
        return this.radius;
    }
    get getArea(){
        let a = this.radius*this.radius * 3.14;
        return a.toFixed(2);
    }
}

let cri = new Cricle(6.5,"red");
console.log("giá trị của ",cri);
console.log("Diện tích là :",cri.getArea);


class Cylinder extends Cricle{
    Height;
    constructor(height, radius, color){
        super(radius, color);
        this.Height = height;
    }

    get getHeight(){
        return this.Height;
    }
    get getVollume(){
        return this.getArea * this.Height;
    }
}

let cy = new Cylinder(6,7,"blue");
console.log("Giá trị của ",cy);
console.log("Thế tích của hình là: ",cy.getVollume);

