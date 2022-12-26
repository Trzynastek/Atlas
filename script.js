const apiUrl = 'https://raw.githubusercontent.com/Trzynastek/Public/main/list.json';

fetch(apiUrl)
  	.then(response => response.json())
  	.then(data => {
    	let products = data;
    	let output = "";
    	for (let item of products) {
    	output += `
			<div class="box game">
				<div class="offset item">
					<div class="coverdiv">
						<img class="cover" src="covers/${item.image}" loading="lazy" alt="game cover"></img>
					</div>
					<div class="content">
						<div class="gametitlebox"><p class=gametitle>${item.title}</p></div>
							<div class="iconbox">
								<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
								<path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
								</svg>
								<p class="ico">${item.platform}</p>
							</div>
							<div class="iconbox">
								<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
								<path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"/>
								</svg>
								<p class="ico">${item.multiplayer}</p>
							</div>
							<div class="iconbox">
								<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onclick="location.href='${item.link}';">
								<path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM244.7 395.3l-112-112c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l64 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 64 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0z"/>
								</svg>
								<p class="ico">${item.size}</p>
							</div>
							<div class="links">
							`;
							for (let linkType in item.links) {
								output += `<div class="${linkType} linkbox pc" onclick="location.href='${item.links[linkType]}'"><p class="link">${linkType}</p></div>`
							}
							output += `</div></div></div></div><div class="box outerlinkcontainer mobile"><div class=offset><div class="linkcontainer"><p id="download">Download :</p>`;
							for (let linkType in item.links) {
								output += `<div class="${linkType} linkbox mobile" onclick="location.href='${item.links[linkType]}'"><p class="link">${linkType}</p></div>`
							}
							output +=`</div></div></div>`;

	}
	document.querySelector(".list").innerHTML = output;
});

function submit() {
    const title = document.getElementById('issue-title').value;
    const body = document.getElementById('issue-body').value;
    fetch(`https://api.github.com/repos/Trzynastek/Public/issues`, {
      	method: 'POST',
      	headers: {
        	'Authorization': `Bearer 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`,
        	'Content-Type': 'application/json'
      	},
      	body: JSON.stringify({
        	title: title,
        	body: body
      	})
    })
	hide()
}

function show() {
    document.querySelector('.requests').style.display = 'flex';
	document.querySelector('.form').style.display = 'flex';
}
function hide() {
    document.querySelector('.requests').style.display = 'none';
	document.querySelector('.form').style.display = 'none';
}
const form = document.getElementById('create-issue-form');