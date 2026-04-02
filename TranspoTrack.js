const date = new Date().toDateString();

class Vehicle {
    constructor(name, manufacturer, id) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.id = id;
    }
}

class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

class Plane extends Vehicle {
    constructor(name, manufacturer, id, type) {
        super(name, manufacturer, id);
        this.type = type;
    }
}

class Employee {
    constructor(name, id, dob) {
        this.name = name;
        this.id = id;
        this.dob = dob;
    }
}

class Driver extends Employee {
    constructor(name, id, dob, licenseID) {
        super(name, id, dob);
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee {
    constructor(name, id, dob, licenseID) {
        super(name, id, dob);
        this.licenseID = licenseID;
    }
}

class Reserved {
    static reservationList = [];

    constructor(reservationDate, employeeId, vehicleId, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehicleId = vehicleId;
        this.reservationID = reservationID;
    }
}

const car1 = new Car("Lucid Air", "Lucid", 101, "electric");
const car2 = new Car("Camry", "Toyota", 102, "gas");
const car3 = new Car("Model 3", "Tesla", 103, "electric");

const plane1 = new Plane("Falcon 9", "SpaceX", 201, "Spacecraft");
const plane2 = new Plane("Gulfstream", "G650", 202, "Private");

const driver1 = new Driver("Mohammed", 1, "2000-01-01", "D123");
const pilot1 = new Pilot("Osama", 2, "1995-05-05", "P456");

const employees = [driver1, pilot1];
const vehicles = [car1, car2, car3, plane1, plane2];

function checkAndReserve(employeeId, vehicleId) {
    const employee = employees.find(e => e.id === employeeId);
    const vehicle = vehicles.find(v => v.id === vehicleId);

    if (!employee || !vehicle) {
        console.log("Error: Employee or Vehicle not found.");
        return;
    }

    if (employee instanceof Pilot && vehicle instanceof Car) {
        console.log(`Incompatible: Pilot ${employee.name} cannot be assigned to Car ${vehicle.name}.`);
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
        console.log(`Incompatible: Driver ${employee.name} cannot be assigned to Plane ${vehicle.name}.`);
    } else {
        const resId = "R" + Math.floor(Math.random() * 1000);
        const newReservation = new Reserved(date, employee.id, vehicle.id, resId);
        
        Reserved.reservationList.push(newReservation);
        console.log(`Success: Reservation created for ${employee.name} with ${vehicle.name}.`);
    }
}

checkAndReserve(1, 103);
checkAndReserve(2, 101);
checkAndReserve(2, 201);

console.log("\n--- Current Reservations List ---");
Reserved.reservationList.map((res) => {
    console.log(`ID: ${res.reservationID} | Date: ${res.reservationDate} | Employee ID: ${res.employeeId} | Vehicle ID: ${res.vehicleId}`);
});