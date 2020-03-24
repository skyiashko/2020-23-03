import Pet from './pet.js';
import {soundDog} from './src.js';

class Dog extends Pet{
	constructor(name, image){
	super(name, image);
	}
	addToThePage(){
		super.addToThePage();
	}
	makeSound() {
		super.makeSound(soundDog);
	}
}

export default Dog;