import Pet from './pet.js';
import {soundCat} from './src.js';

class Cat extends Pet{
	constructor(name, image){
	super(name, image);
	}
	addToThePage(){
		super.addToThePage();
	}
	makeSound() {
		super.makeSound(soundCat);
	}
}

export default Cat;