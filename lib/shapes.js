class Shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

class Square extends Shape{
    render(){
        return `<rect x="70", y="0", width="160", height="160", fill="${this.color}"/>`
    }
}
  
class Circle extends Shape{
    render(){
        return `<circle cx="150", cy="80", r="80", fill="${this.color}"/>`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="40,20 150,200 260,20", fill="${this.color}"/>`
    }
} 

module.exports = {Square, Circle, Triangle};