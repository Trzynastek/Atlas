let http = new XMLHttpRequest();
http.open('get', 'list.json', true);
http.send();
http.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let products = JSON.parse(this.responseText);
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
								<p class="platforms"><i class="fa-solid fa-server"></i>${item.platform}</p>
								<p class="download"><i class="fa-solid fa-file-arrow-down"></i>${item.download}</p>
							</div>
						</div>
					</div>
				</div>
			`;
		}
		document.querySelector(".list").innerHTML = output;
	}
} 