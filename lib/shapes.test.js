const {Square, Circle, Triangle} = require('./shapes.js');

test('the shape renders correctly', () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(`<rect x="70", y="0", width="160", height="160", fill="red"/>`);
});

test('the shape renders correctly', () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<circle cx="150", cy="80", r="80", fill="green"/>`);
});

test('the shape renders correctly', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="40,20 150,200 260,20", fill="blue"/>`);
});
