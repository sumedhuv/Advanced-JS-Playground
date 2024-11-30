class rectangle {
  constructor(height, width, color) {
    this.height = height;
    this.width = width;
    this.color = color;
  }
  area() {
    const area = this.height * this.width;
    return area;
  }
  paint() {
    console.log(`the color of the rectange is ${this.color}`);
  }
}

const myshape = new rectangle(4, 4);
console.log(myshape.area());

const date = new Date();
console.log(date.getMonth());

const map = new Map();
map.set("name", "sumedh");
map.set("size", "large");
console.log(map.get("name"));
