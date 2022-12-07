class Auto {
	constructor(name, model, yearOfIssue, vin) {
		this.name = name;
		this.model = model;
		this.yearOfIssue = yearOfIssue;
		this.vin = vin;
	}

	log() {
		return this.name + ' ' + this.model + ' ' + this.yearOfIssue;
	}

	checkVin() {
		return this.vin.length === 17
	}

}

class Auto_Fuel extends Auto {
	constructor(name, model, yearOfIssue, vin, engineVolume, fuelConsumption) {
		super(name);
		this.name = name;
		this.model = model;
		this.yearOfIssue = yearOfIssue;
		this.vin = vin;
		this.engineVolume = engineVolume;
		this.fuelConsumption = fuelConsumption;
	}

	showFuelConsumption() {
		return this.engineVolume + 'L ' + this.fuelConsumption + 'L/100km';
	}
}

class Auto_Electric extends Auto {
	constructor(name, model, yearOfIssue, vin, batteryCapacity) {
		super(name);
		this.name = name;
		this.model = model;
		this.yearOfIssue = yearOfIssue;
		this.vin = vin;
		this.batteryCapacity = batteryCapacity;
	}

	showBatteryConfig() {
		return this.batteryCapacity + ' kWh';
	}
}

let volkswagen = new Auto_Fuel('Volkswagen', 'Touareg', 2014, 'IP7OL76432X200020', 3, 12);
let toyota = new Auto_Electric('Toyota', 'Prius', 2022, 'JH2PC35051M200020', '150');

