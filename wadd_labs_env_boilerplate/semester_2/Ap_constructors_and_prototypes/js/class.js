// class Car {
//     constructor(make, model, speed, color) {
//       this.make = make;
//       this.model = model;
//       this.speed = speed;
//       this.color = color;
//     }
//   }
  
//   const tesla = new Car("model x", "x", 0, "red");

//   class Bus {
//       constructor(make, model, speed, color){
//         this.make = make;
//         this.model = model;
//         this.speed = speed;
//         this.color = color;
//       }
//   }

  class Car {
    constructor(make, model, speed, color) {
      this.make = make;
      this.model = model;
      this.speed = speed;
      this.color = color;
    }
  
    accelerate(n) {
      this.speed += n;
    }
  
    deccelerate(n) {
      this.speed -= n;
    }
  }
  
  // bus using class syntax
  
  class Bus extends Car { // extends is inheriting from car
    constructor(make, model, speed, color, wheels) {
      super(make, model, speed, color); // super is calling the constructor of the parent class. In this case it is calling the constructor of Car
      this.wheels = wheels;
    }
  }
  
  const tesla = new Car("model x", "x", 0, "red");
  const teslaBus = new Bus("model bus", "bus", 0, "black", 6);

  class Truck extends Car{
    constructor(make, model, speed, color, engineType, fuelType){
        super(make, model, speed, color);
        this.engineType = engineType;
        this.fuelType = fuelType;
        
    }
    honk (){
        return "choooppooochooopooo";
    }
  }

  const optimus = new Truck("model x", "x", 0, "red","v8", "diesel");

  console.log(optimus);
  