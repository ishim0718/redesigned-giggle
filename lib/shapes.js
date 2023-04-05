class Square{
    render(){
        return `<rect "x": "50", "y": "0", "width": "200", "height": "200", "fill": "${shapeColor}">`
    }
}
  
class Circle{
    render(){
        return `<circle "cx": 150, "cy": 100, "r": 100, "fill": "${shapeColor}">`
    }
}

class Triangle{
    render(){
        return `<polygon "points": "40,20 150,200 260,20", "fill": "${shapeColor}">`
    }
} 

module.export = { Square, Circle, Triangle };