const button = document.querySelector(".hide-btn");
button.addEventListener('click', () => {
    button.style.display = 'none';
})

console.log(button)

const section1 = document.querySelector(".first-sec");
const secImage = document.createElement("img");
section1.append(secImage);
secImage.src = "https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8";
secImage.alt = "some image";

const section2 = document.querySelector(".second-sec");
section2.innerHTML = `<section id="images-list"></section>`;

const results = [
	{
		links: {
			self: "http://www.rijksmuseum.nl/api/en/collection/SK-C-5",
			web: "http://www.rijksmuseum.nl/en/collection/SK-C-5",
		},
		id: "en-SK-C-5",
		objectNumber: "SK-C-5",
		title: "The Night Watch",
		hasImage: true,
		principalOrFirstMaker: "Rembrandt van Rijn",
		longTitle: "The Night Watch, Rembrandt van Rijn, 1642",
		showImage: true,
		permitDownload: true,
		webImage: {
			guid: "bbd1fae8-4023-4859-8ed1-d38616aec96c",
			offsetPercentageX: 0,
			offsetPercentageY: 1,
			width: 5656,
			height: 4704,
			url: "https://lh3.googleusercontent.com/SsEIJWka3_cYRXXSE8VD3XNOgtOxoZhqW1uB6UFj78eg8gq3G4jAqL4Z_5KwA12aD7Leqp27F653aBkYkRBkEQyeKxfaZPyDx0O8CzWg=s0",
		},
		headerImage: {
			guid: "29a2a516-f1d2-4713-9cbd-7a4458026057",
			offsetPercentageX: 0,
			offsetPercentageY: 0,
			width: 1920,
			height: 460,
			url: "://lh3.googleusercontent.com/nAHNYM604vhPa1httpshbE_hBJw55JI01-ls0zCwHwvDEES38PpGyGHMgG_vaigVWSuK8GFkaxfn2Dmevw_Nmujn5dKW3jItgS6QaSI8VIsiH=s0",
		},
		productionPlaces: ["Amsterdam"],
	},
	{
		links: {
			self: "http://www.rijksmuseum.nl/api/en/collection/SK-C-216",
			web: "http://www.rijksmuseum.nl/en/collection/SK-C-216",
		},
		id: "en-SK-C-216",
		objectNumber: "SK-C-216",
		title: "Isaac and Rebecca, Known as ‘The Jewish Bride’",
		hasImage: true,
		principalOrFirstMaker: "Rembrandt van Rijn",
		longTitle:
			"Isaac and Rebecca, Known as ‘The Jewish Bride’, Rembrandt van Rijn, c. 1665 - c. 1669",
		showImage: true,
		permitDownload: true,
		webImage: {
			guid: "2fe159d5-619a-46d3-b3d2-9412e6f6bdd8",
			offsetPercentageX: 0,
			offsetPercentageY: 0,
			width: 2500,
			height: 1817,
			url: "https://lh3.googleusercontent.com/mAyAjvYjIeAIlByhJx1Huctgeb58y7519XYP38oL1FXarhVlcXW7kxuwayOCFdnwtOp6B6F0HJmmws-Ceo5b_pNSSQs=s0",
		},
		headerImage: {
			guid: "10911bfe-4e23-4c3a-95f7-515609f4d711",
			offsetPercentageX: 0,
			offsetPercentageY: 0,
			width: 1925,
			height: 461,
			url: "https://lh3.googleusercontent.com/0fTHP4xUsJZbQjzIHYtgHr1gRWBXjm9udaZT4ah35J_LyNzga-SyI0h61klse9sJqn53eUfuVIWZvP8IhW0jN4v91SM=s0",
		},
		productionPlaces: [],
	},
	{
		links: {
			self: "http://www.rijksmuseum.nl/api/en/collection/SK-C-6",
			web: "http://www.rijksmuseum.nl/en/collection/SK-C-6",
		},
		id: "en-SK-C-6",
		objectNumber: "SK-C-6",
		title:
			"The Sampling Officials of the Amsterdam Drapers’ Guild, Known as ‘The Syndics’",
		hasImage: true,
		principalOrFirstMaker: "Rembrandt van Rijn",
		longTitle:
			"The Sampling Officials of the Amsterdam Drapers’ Guild, Known as ‘The Syndics’, Rembrandt van Rijn, 1662",
		showImage: true,
		permitDownload: true,
		webImage: {
			guid: "2c1ac367-9b11-4266-bb08-eea14ca0bb76",
			offsetPercentageX: 0,
			offsetPercentageY: 0,
			width: 3000,
			height: 1975,
			url: "https://lh3.googleusercontent.com/gShVRyvLLbwVB8jeIPghCXgr96wxTHaM4zqfmxIWRsUpMhMn38PwuUU13o1mXQzLMt5HFqX761u8Tgo4L_JG1XLATvw=s0",
		},
		headerImage: {
			guid: "5f71570b-21d2-4f00-9219-edb93137110c",
			offsetPercentageX: 0,
			offsetPercentageY: 0,
			width: 1920,
			height: 460,
			url: "https://lh3.googleusercontent.com/8vtyRTsJdGXuZhnHl5wF6vBgDNInw3q56DFYYr0Rzm1JJYNRl2iSIC30d_erXkTe_Yv8uJq1ZL56zFrXUpTFJrBDcbE=s0",
		},
		productionPlaces: [],
	},
	{
		links: {
			self: "http://www.rijksmuseum.nl/api/en/collection/SK-A-4050",
			web: "http://www.rijksmuseum.nl/en/collection/SK-A-4050",
		},
		id: "en-SK-A-4050",
		objectNumber: "SK-A-4050",
		title: "Self-portrait as the Apostle Paul",
		hasImage: true,
		principalOrFirstMaker: "Rembrandt van Rijn",
		longTitle: "Self-portrait as the Apostle Paul, Rembrandt van Rijn, 1661",
		showImage: true,
		permitDownload: true,
		webImage: {
			guid: "58f00619-2e35-4d7d-a46d-0dcc6618f4ec",
			offsetPercentageX: 0,
			offsetPercentageY: 0,
			width: 2287,
			height: 2724,
			url: "https://lh3.googleusercontent.com/NrCcfeY0r2F3M2hIQe5SLDRofR2tVzeOH18VjflOYGj88v4clb4v2H_VgCZR4nJhYsxxH9ATzfkL2tRqOWEK5-gPVEE=s0",
		},
		headerImage: {
			guid: "aba7d9da-5d4b-4389-8347-c3de63c33d98",
			offsetPercentageX: 0,
			offsetPercentageY: 0,
			width: 2276,
			height: 544,
			url: "https://lh3.googleusercontent.com/koQbNAoqV857feer4wJRVF-lbFzyNdvSsjgnXTTF3P3Dmgm2s_7noCVyqsxr1466YiIccueR0DpaU9-wPchhM0bIiQ=s0",
		},
		productionPlaces: [],
	},
	{
		links: {
			self: "http://www.rijksmuseum.nl/api/en/collection/SK-C-597",
			web: "http://www.rijksmuseum.nl/en/collection/SK-C-597",
		},
		id: "en-SK-C-597",
		objectNumber: "SK-C-597",
		title: "Portrait of a Woman, Possibly Maria Trip",
		hasImage: true,
		principalOrFirstMaker: "Rembrandt van Rijn",
		longTitle:
			"Portrait of a Woman, Possibly Maria Trip, Rembrandt van Rijn, 1639",
		showImage: true,
		permitDownload: true,
		webImage: {
			guid: "165d03bb-95e8-4447-a911-865f1bd201d6",
			offsetPercentageX: 0,
			offsetPercentageY: 0,
			width: 2031,
			height: 2676,
			url: "https://lh3.googleusercontent.com/AyiKhdEWJ7XmtPXQbRg_kWqKn6mCV07bsuUB01hJHjVVP-ZQFmzjTWt7JIWiQFZbb9l5tKFhVOspmco4lMwqwWImfgg=s0",
		},
		headerImage: {
			guid: "f0270e59-baca-4429-ba00-d6c37b9ad00f",
			offsetPercentageX: 0,
			offsetPercentageY: 0,
			width: 1920,
			height: 460,
			url: "https://lh3.googleusercontent.com/MonorlaCKkTjeFrTBQyCb7kfmq8K--aWrThge7MsTItJxO_cw-8WbwgmTm0jTt-qfaFfnwa1qNEnsGYVHMPmCGmb0Pje=s0",
		},
		productionPlaces: [],
	},
	{
		links: {
			self: "http://www.rijksmuseum.nl/api/en/collection/SK-A-4691",
			web: "http://www.rijksmuseum.nl/en/collection/SK-A-4691",
		},
		id: "en-SK-A-4691",
		objectNumber: "SK-A-4691",
		title: "Self-portrait",
		hasImage: true,
		principalOrFirstMaker: "Rembrandt van Rijn",
		longTitle: "Self-portrait, Rembrandt van Rijn, c. 1628",
		showImage: true,
		permitDownload: true,
		webImage: {
			guid: "89de22aa-e19f-4c83-87ff-26dd8f319c05",
			offsetPercentageX: 0,
			offsetPercentageY: 0,
			width: 2118,
			height: 2598,
			url: "https://lh3.googleusercontent.com/7qzT0pbclLB7y3fdS1GxzMnV7m3gD3gWnhlquhFaJSn6gNOvMmTUAX3wVlTzhMXIs8kM9IH8AsjHNVTs8em3XQI6uMY=s0",
		},
		headerImage: {
			guid: "99061015-b788-42ed-a9d8-06db0bcf39e3",
			offsetPercentageX: 0,
			offsetPercentageY: 0,
			width: 1920,
			height: 460,
			url: "https://lh3.googleusercontent.com/WKIxue0nAIOYj00nGVoO4DTP9rU2na0qat5eoIuQTf6Fbp4mHHm-wbCes1Oo6K_6IdMl6Z_OCjGW_juCCf_jvQqaKw=s0",
		},
		productionPlaces: [],
	},
];
const resultsDiv = document.querySelector("#images-list");
function renderResults(){
	const resultsHTML = results.map((results1) => {
		return `<div class="cards">
            <img src="${results1.webImage.url}" alt="">
            <h2>${results1.title}</h2>
            <span class = "hiding">${results1.longTitle}</span>
            <span class = "hiding">for more information visit <a href="${results1.links.web}" target="#">here</a></span>
            <div class = "buttons">
			<button class = "more-btn">see more details</button>
            <button class = "remove-btn">remove card</button>
			</div>
        </div>`;
	});
	resultsDiv.innerHTML = resultsHTML.join("");
    // console.log(resultsHTML.join(""))
}





renderResults()
const removeBtns = document.querySelectorAll('.remove-btn');
removeBtns.forEach(function(removeBtn) {
	removeBtn.addEventListener('click', function() {
	  const parentDiv = this.parentNode.parentNode;
	  parentDiv.parentNode.removeChild(parentDiv);
	});
});

const moreBtns = document.querySelectorAll('.more-btn');
moreBtns.forEach(function(moreBtn) {
  moreBtn.addEventListener('click', function() {
    const parentDiv = this.parentNode.parentNode;
    const hidingElements = parentDiv.querySelectorAll('.hiding');
    hidingElements.forEach(function(hidingElement) {
      if (hidingElement.style.display === 'none') {
        hidingElement.style.display = 'block';
      } else {
        hidingElement.style.display = 'none';
      }
    });
  });
});
