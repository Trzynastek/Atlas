var list = 

	//JSON

	//{
	//	"image": "",
	//	"title": "",
	//	"description": "",
	//	"platform": "",
	//	"download": "",
	//	"link": ""
	//}

[
	{
		"image": "Saturnalia.jpg",
		"title": "Saturnalia",
		"description": "A third person multi-character roguelite horror adventure: A game inspired and heavily influenced by the folklore of Sardinia, Italy (a region rich with unique traditions and culture) where you play as four characters, experiencing a deeply connected storyline that ties back to the haunting traditions of an ancient village.",
		"platform": "Windows",
		"download": "1.9GB",
		"link": "https://fitgirl-repacks.site/saturnalia/"
	},
	{
		"image": "Spotify.png",
		"title": "Spotify",
		"description": "If you are a music lover and have a habit of listening to music on your smartphone, you must have heard of Spotify Premium MOD APK, the world’s number 1 online music app today.",
		"platform": "Android",
		"download": "29MB",
		"link": "https://apkmody.com/apps/spotify-2"
	},
	{
		"image": "Vanced.png",
		"title": "Youtube Vanced",
		"description": "Vanced is a better version of the stock Android YouTube app! Includes adblocking, background playback, and lot more. Use the Vanced Manager app to install YouTube Vanced easily.",
		"platform": "Android",
		"download": "4.3MB",
		"link": "https://drive.google.com/file/d/1XzJvQQmecJ6TTO55fBPLkMmlbFgNdHJP/view?usp=share_link"
	},
	{
		"image": "Chernobylite.jpg",
		"title": "Chernobylite: Enhanced Deluxe Edition",
		"description": "Chernobylite is a Science Fiction Survival Horror RPG from developers Farm 51. Set in the hyper-realistic, 3D scanned wasteland of Chernobyl’s exclusion zone, you’ll take on the role of Igor, a physicist and ex-employee of the Chernobyl Power Plant, returning to Pripyat to investigate the mysterious disappearance of his fiancée, 30 years prior. Compete with the hostile military presence, other stalkers and supernatural creatures, as well as the harsh and unforgiving environment in your search to uncover the truth.",
		"platform": "Windows",
		"download": "24.2GB",
		"link": "https://fitgirl-repacks.site/chernobylite/"
	},
	{
		"image": "CODMWR.jpg",
		"title": "Call of Duty: Modern Warfare – Remastered",
		"description": "One of the most critically-acclaimed games in history. Call of Duty®4: Modern Warfare®, is back, remastered in true high-definition, featuring enhanced textures, rendering, high-dynamic range lighting, and much more to bring a new generation experience to fans.",
		"platform": "Windows",
		"download": "26.4GB",
		"link": "https://fitgirl-repacks.site/call-duty-modern-warfare-remastered-update-2/"
	},
	{
		"image": "SlimeRancher2.jpg",
		"title": "Slime Rancher 2",
		"description": "Slime Rancher 2 is a sequel to the award-winning, smash-hit original that has been enjoyed by over 15 million fans worldwide. Continue the adventures of Beatrix LeBeau as she journeys to Rainbow Island, a mysterious land brimming with ancient technology, unknown natural resources, and an avalanche of wiggling, jiggling, new slimes to discover.",
		"platform": "Windows",
		"download": "880MB",
		"link": "https://igg-games.com/slime-rancher-2-819319637-free-download.html"
	}
]

//CODE, DO NOT EDIT

let http = new XMLHttpRequest();
http.open('get', 'list.json', true);
http.send();
http.onload = function(){
	let products = list;
		let output = "";
		for(let item of products){
			output += `
				<div class="box snap">
					<div class="offset item">
						<div class="coverdiv">
							<img class="cover" src="covers/${item.image}" loading="lazy">
						</div>
						<div class = content>
							<p class="gametitle">${item.title}</p>
							<p class="description">${item.description}</p>
							<div class="tagline">
								<div class="iconbox">
									<svg class="staticicon" viewBox="8 8 16 16">
									<path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
									</svg>
									<p class="platforms">${item.platform}</p>
								</div>
								<div class="iconbox">
									<p class="download">${item.download}</p>
									<svg class="icon" viewBox="0 0 16 16">
									<path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>
									</svg>
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
	var query = document.getElementById('search').value.toLowerCase();
	let products = list;
		let output = "";
		for(let item of products){
			if(item.title.toLowerCase().includes(query)) {
				output += `
				<div class="box snap">
					<div class="offset item">
						<div class="coverdiv">
							<img class="cover" src="covers/${item.image}">
						</div>
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

