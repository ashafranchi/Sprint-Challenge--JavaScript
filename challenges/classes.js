// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(att) {
        this.length = att.length;
        this.width = att.width;
        this.height = att.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
let cuboid = new CuboidMaker({
    height: 5,
    width: 5,
    length: 4
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(cubeatt) {
        super(cubeatt);
    }
    vcube() {
        return Math.pow(this.length, 3);
    }
    sAcube() {
        return 6 * Math.pow(this.length, 2);
    }
}

let cube = new CubeMaker({
    length: 3
})

console.log(cube.vcube());
console.log(cube.sAcube());