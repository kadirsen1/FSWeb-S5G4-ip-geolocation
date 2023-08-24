//axios import buraya gelecek
import axios from "axios";


var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/
 ipAdresimiAl().then(()=>{
	const url = "https://apis.ergineer.com/ipgeoapi/" +benimIP ;
	axios.get(url)
			.then(response  => {
				const component	= Ip(response.data)
				document.querySelector(".cards").append(component)
			})
			.catch(error =>{
				console.log(error)
			}) 
 })

	



/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/
const Ip = (data) =>{
	const mainDiv = document.createElement("div")
	mainDiv.classList.add("card")
	const img = document.createElement("img")
	img.setAttribute("src",data.ülkebayrağı)
	const infoDiv = document.createElement("div")
	infoDiv.classList.add("card-info")
	const h3 = document.createElement("h3")
	h3.classList.add("ip")
	h3.textContent=data.sorgu
	const p1 = document.createElement("p")
	p1.classList.add("ulke")
	p1.textContent=data.ülke + " (" + data.ülkeKodu + ")"
	const p2 = document.createElement("p")
	p2.textContent = `Enlem: ${data.enlem} Boylam: ${data.boylam}`
	
	const p3 = document.createElement("p")
	p3.textContent = `Şehir: ${data.şehir}`
	const p4 = document.createElement("p")
	p4.textContent = `Saat dilimi: ${data.saatdilimi}`
	const p5 = document.createElement("p")
	p5.textContent = `Para birimi: ${data.parabirimi}`
	const p6= document.createElement("p")
	p6.textContent = `ISP: ${data.isp}`
	infoDiv.append(h3,p1,p2,p3,p4,p5,p6)
	mainDiv.append(img,infoDiv)
	return mainDiv 
}

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek
const news = document.getElementsByClassName("cards")[0];

function addcode(obj) {
  const hdiv = document.createElement("div");
  hdiv.classList.add("card");
  
  const himg = document.createElement("img");
  himg.setAttribute("src", obj.ülkebayrağı);
  hdiv.appendChild(himg);

  const cardinfo = document.createElement("div");
  cardinfo.classList.add("card-info");

  const h3 = document.createElement("h3");
  h3.classList.add("ip");
  h3.textContent = obj.sorgu;

  const pulke = document.createElement("p");
  pulke.classList.add("ulke");
  pulke.textContent = obj.ülke;

  const penlem = document.createElement("p");
  penlem.textContent = obj.enlem;

  const psehir = document.createElement("p");
  psehir.textContent = obj.şehir;

  const psaat = document.createElement("p");
  psaat.textContent = obj.saatdilimi;

  const ppara = document.createElement("p");
  ppara.textContent = obj.parabirimi;

  const pisp = document.createElement("p");
  pisp.textContent = obj.isp;

  cardinfo.append(h3, pulke, penlem, psehir, psaat, ppara, pisp);
  hdiv.appendChild(cardinfo);

  news.appendChild(hdiv);
}

axios.get("https://apis.ergineer.com/ipgeoapi/85.107.89.170")
  .then((response) => {
    const newss = response.data;
    addcode(newss);
  });
