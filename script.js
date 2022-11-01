var list = 

	//JSON

[
	{
		"image": "Saturnalia.jpg",
		"title": "test",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "PC (Steam)",
		"download": "10GB",
		"link": ""
	},
	{
		"image": "Saturnalia.jpg",
		"title": "cos",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "PC (Steam)",
		"download": "10GB",
		"link": ""
	},
	{
		"image": "Saturnalia.jpg",
		"title": "test",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "PC (Steam)",
		"download": "10GB",
		"link": ""
	},
	{
		"image": "Saturnalia.jpg",
		"title": "test",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "PC (Steam)",
		"download": "10GB",
		"link": ""
	},
	{
		"image": "Saturnalia.jpg",
		"title": "test",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "PC (Steam)",
		"download": "10GB",
		"link": ""
	},
	{
		"image": "Saturnalia.jpg",
		"title": "test",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "PC (Steam)",
		"download": "10GB",
		"link": ""
	},
	{
		"image": "Saturnalia.jpg",
		"title": "test",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "PC (Steam)",
		"download": "10GB",
		"link": ""
	},
	{
		"image": "Saturnalia.jpg",
		"title": "test",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "PC (Steam)",
		"download": "10GB",
		"link": ""
	},
	{
		"image": "Saturnalia.jpg",
		"title": "test",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "PC (Steam)",
		"download": "10GB",
		"link": ""
	},
	{
		"image": "Saturnalia.jpg",
		"title": "test",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "PC (Steam)",
		"download": "10GB",
		"link": ""
	},
	{
		"image": "Saturnalia.jpg",
		"title": "test",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "PC (Steam)",
		"download": "10GB",
		"link": ""
	}
]

//CODE, DO NOT EDIT

let http = new XMLHttpRequest();
http.open('get', 'list.json', true);
http.send();
http.onload = function(){
	var query = document.getElementById('search').value;
	let products = list;
		let output = "";
		for(let item of products){
			output += `
				<div class="box snap">
					<div class="offset item">
						<img class="cover" src="covers/${item.image}">
						<div class = content>
							<p class="gametitle">${item.title}</p>
							<p class="description">${item.description}</p>
							<div class="tagline">
								<p class="platforms">${item.platform}</p>
								<p class="download">${item.download}</p>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="download-ico" onclick="location.href='${item.link}';"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			`;
		}
		document.querySelector(".list").innerHTML = output;
 }

function search() {
	var query = document.getElementById('search').value;
	let products = list;
		let output = "";
		for(let item of products){
			if(item.title.includes(query)) {
				output += `
					<div class="box snap">
						<div class="offset item">
							<img class="cover" src="covers/${item.image}">
							<div class = content>
								<p class="gametitle">${item.title}</p>
								<p class="description">${item.description}</p>
								<div class="tagline">
									<p class="platforms">${item.platform}</p>
									<p class="download">${item.download}</p>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="download-ico" onclick="location.href='${item.link}';"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				`;
			}
		}
		document.querySelector(".list").innerHTML = output;
 }

