import Cat from './Cat.js'
import Dog from './Dog.js'
import {
	imgTom,
	imgSpike
} from './src.js'

let tom = new Cat('Tom', imgTom);
tom.makeSound();

let spike = new Dog ('Spike', imgSpike);
spike.makeSound();