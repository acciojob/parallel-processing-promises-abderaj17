//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener('click', (()=>{
	const imagePromises = images.map(images =>{
		return new Promise((resolve, reject)=>{
			let imgElement = new Image();
			imgElement.src = images.url;
			imgElement.onload = ()=> resolve(imgElement);
			imgElement.onerror = ()=> reject(`Failed to load image's URL: ${images.url}`);
		});
	});
	Promise.all(imagePromises)
	.then(imgElement =>{
		imgElement.forEach(imgElement=>{
			output.appendChild(imgElement);
		});
	}).catch(error=>{
		console.error(error);
	})
}))
