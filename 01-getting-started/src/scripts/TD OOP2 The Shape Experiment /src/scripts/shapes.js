function hello() {
    return "Hello";
}

class Shape {
    constructor(key, x, y) {
        this.key = key;
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
        this.updateElement();
    }
    updateElement() {

    }


    getElement(txt) {
        const shape = document.createElementNS("http://www.w3.org/2000/svg", txt);
        this.shape = shape;
        return shape;
    } 
}

class Rectangle extends Shape {
    getElement() {
        if(this.shape) return this.shape;
        //if there is no shape, it will actually continue
        // below and construct one
        const rect = super.getElement('rect');
        this.updateElement();
        return rect;
    }

    updateElement() {
        if(this.shape) {
            this.shape.setAttribute("x", this.x);
            this.shape.setAttribute("y", this.y);
            this.shape.setAttribute("width", "100");
            this.shape.setAttribute("height", "50");
            this.shape.setAttribute("key", this.key);
        }
    }
}

class Drawing {
    constructor(xxxwidth, height) {
        this.width = xxxwidth;
        this.height = height;
        this.shapes = {};
        this.counter = 1;
    }
    nextKey() {
        return `k${this.counter++}`;
    }
    createRectangle(x, y) {
        const key = this.nextKey();
        const rect = new Rectangle(key, x, y);
        this.shapes[key] = rect;
        if (this.svg) {
            const el = rect.getElement();
            this.svg.append(el);
        }

        return key;
    }
    getShape(theKey) {
        return this.shapes[theKey];
    }
    draw() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        svg.setAttribute("width",this.width);
        svg.setAttribute("height",this.height);
        this.svg = svg;
        svg.setAttribute("class", "clBox");
        for (let key in this.shapes) {
            // console.log(key);
            const el = this.shapes[key].getElement();
            svg.append(el);
        }
        return svg;

    }

    move(key, x, y) {
        const shape = this.getShape(key);
        shape.move(x, y);
    }
}
export default { hello, Shape, Rectangle, Drawing };

