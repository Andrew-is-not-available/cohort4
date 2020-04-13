// npm shapes.test.js

import shapes from './shapes'

test('test plumbing', () => {
    expect(shapes.hello()).toBe("Hello");
});

test('test Shape', () => {
    const s =  new shapes.Shape('k',1,2);
    // expect(s.key).toBe('k');
    expect(s.x).toBe(1);
    expect(s.y).toBe(2);
});

test('test Rectangle', () => {
    const s =  new shapes.Rectangle('k',1,2);
    expect(s.x).toBe(1);
    expect(s.y).toBe(2);
});
test('test Drawing', () => {
    const panel =  new shapes.Drawing(401,402);
    expect(panel.width).toBe(401);
    expect(panel.height).toBe(402);

    expect(panel.nextKey()).toBe('k1');
    expect(panel.nextKey()).toBe('k2');
    expect(panel.nextKey()).toBe('k3');

    const k4 = panel.createRectangle(101,102);
    expect(k4).toBe('k4');

    const k5 = panel.createRectangle(201,202);
    expect(k5).toBe('k5');

    const rect1 = panel.getShape(k4);
    expect(rect1).toBeTruthy();
    
    expect(rect1.x).toBe(101);
    expect(rect1.y).toBe(102);

    const svg = panel.draw();
    expect(svg.children.length).toBe(2);
    expect(svg.getAttribute("width")).toBe("401")
    expect(svg.getAttribute("height")).toBe("402")

    expect(svg.children[0].getAttribute('x')).toBe("101");
    expect(svg.children[0].getAttribute('y')).toBe("102");
    expect(svg.children[0].getAttribute('key')).toBe("k4");

    panel.createRectangle(201, 202);
    expect(svg.children.length).toBe(3);
});

test('test Drawing move', () => {
    const s =  new shapes.Shape('k',1,2);
    s.move(5, 7);
    expect(s.x).toBe(6);
    expect(s.y).toBe(9);

    const panel =  new shapes.Drawing(401,402);
    const svg = panel.draw();
    
    const key = panel.createRectangle("101","102");
    panel.move(key, 3, 5);
    const shape = panel.getShape(key);
    expect(shape.x).toBe(104);
    expect(shape.y).toBe(107);
    const el = shape.getElement();
    expect(el.getAttribute('x')).toBe("104");
    expect(el.getAttribute('y')).toBe("107");

});