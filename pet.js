class Pet {
	constructor(name, image){
		this.name = name;
		this.image = image;
	}

		makeSound(sound){
		let image = document.createElement('img');
		image.setAttribute('src', this.image);

		let audio = document.createElement('audio');
		audio.setAttribute('src', sound);

		document.body.appendChild(image);
		document.body.appendChild(audio);

		image.addEventListener('click', fPlay, false);
		function fPlay() {
			audio.play();
		}
	}
}

export default Pet;