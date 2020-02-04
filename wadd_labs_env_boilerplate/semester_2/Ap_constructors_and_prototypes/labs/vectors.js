function Vector (x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
}

const v1 = new Vector(4,4,0);
const v2 = new Vector(1,2,2);

Vector.prototype.plus = function (instance){
    return new Vector(this.x+instance.x, this.y+instance.y, this.z+instance.z);
}

Vector.prototype.minus = function (instance){
    return new Vector(this.x-instance.x, this.y-instance.y, this.z-instance.z);
}

Vector.prototype.magnitude = function (){
    return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
}

console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v2.minus(v1));
console.log(v1.magnitude());
console.log(v2.magnitude());

