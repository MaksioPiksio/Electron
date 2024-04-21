"use strict"
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
class Telefon{
    constructor(){
        this.haslo = 2137;
        this.inHaslo = "";
        this.flagodpalenie = false;
        this.flagLatarka = false;
        this.flagkamera = false;
        this.flaghaslo = false;
        this.flagOdblokowany = false;
        this.kulka = 0;
        this.wlwyl=document.querySelector("#wlwyl");
        this.wlwyl.setAttribute("onclick","telefon.odpalenie()");

        this.obudowa = document.querySelector("#obudowa");
        this.ekran = document.querySelector("#ekran");

        this.tapeta = document.createElement("img");setAttributes(this.tapeta, {"src":"img/tapeta.jpg","id":"tapeta",'class':"tapeta"});
        this.czas = document.createElement("div");setAttributes(this.czas, {"id":"czas",'class':"czas"});
        this.latarka = document.createElement("div");setAttributes(this.latarka, {"id":"PrzLatarka","class":"PrzLatarka",'onclick':"telefon.latarkaWL()"});
        this.iclatarka = document.createElement("i");setAttributes(this.iclatarka, {"id":"iclatarka",'class':"fa-solid fa-lightbulb"});
        this.Przkamera = document.createElement("div");setAttributes(this.Przkamera, {"id":"PrzKamera","class":"PrzKamera",'onclick':"telefon.kameraWL()"});
        this.icPrzkamera = document.createElement("i");setAttributes(this.icPrzkamera, {"id":"icPrzkamera",'class':"fa-solid fa-camera"});
        this.BottomLine = document.createElement("div");setAttributes(this.BottomLine, {"id":"BottomLine","onclick":"telefon.pokhaslo()",'class':"BottomLine"});
        this.kamera = document.createElement("video");setAttributes(this.kamera, {"autoplay":"true","id":"kamera","class":"kamera"});
        this.napis = document.createElement("div");setAttributes(this.napis, {"id":"napis","class":"napis"});this.napis.textContent = "Podaj Hasło";
        this.hasWrapper = document.createElement("div");setAttributes(this.hasWrapper, {"id":"hasWrapper","class":"hasWrapper"});
        this.hasK1 = document.createElement("div");setAttributes(this.hasK1, {"id":"hasK1","class":"hasK"}); 
        this.hasK2 = document.createElement("div");setAttributes(this.hasK2, {"id":"hasK2","class":"hasK"});
        this.hasK3 = document.createElement("div");setAttributes(this.hasK3, {"id":"hasK3","class":"hasK"});
        this.hasK4 = document.createElement("div");setAttributes(this.hasK4, {"id":"hasK4","class":"hasK"});
        this.hasWrapper.append(this.hasK1,this.hasK2,this.hasK3,this.hasK4);

        this.gridWrapper = document.createElement('div');
        this.gridWrapper.setAttribute("class", "gridWrapper");
        this.has0 = document.createElement("button");setAttributes(this.has0, {"id":"has0",'class':"numer"});this.has0.textContent=0;
        this.has1 = document.createElement("button");setAttributes(this.has1, {"id":"has1",'class':"numer"});this.has1.textContent=1;
        this.has2 = document.createElement("button");setAttributes(this.has2, {"id":"has2",'class':"numer"});this.has2.textContent=2;
        this.has3 = document.createElement("button");setAttributes(this.has3, {"id":"has3",'class':"numer"});this.has3.textContent=3;
        this.has4 = document.createElement("button");setAttributes(this.has4, {"id":"has4",'class':"numer"});this.has4.textContent=4;
        this.has5 = document.createElement("button");setAttributes(this.has5, {"id":"has5",'class':"numer"});this.has5.textContent=5;
        this.has6 = document.createElement("button");setAttributes(this.has6, {"id":"has6",'class':"numer"});this.has6.textContent=6;
        this.has7 = document.createElement("button");setAttributes(this.has7, {"id":"has7",'class':"numer"});this.has7.textContent=7;
        this.has8 = document.createElement("button");setAttributes(this.has8, {"id":"has8",'class':"numer"});this.has8.textContent=8;
        this.has9 = document.createElement("button");setAttributes(this.has9, {"id":"has9",'class':"numer"});this.has9.textContent=9;
        this.hash = document.createElement("button");setAttributes(this.hash, {"class":"numer","style":"visibility:hidden"});
        this.delete = document.createElement('button');setAttributes(this.delete, {"class":"numer"});
        this.icDelete = document.createElement('i');setAttributes(this.icDelete, {"id":"icDelete",'class':"fa-solid fa-delete-left"}); this.delete.append(this.icDelete)
        
        this.hasButtony = [this.has1, this.has2, this.has3, this.has4, this.has5, this.has6, this.has7, this.has8, this.has9, this.hash,this.has0, this.delete];
        this.odpRem1 = [this.gridWrapper,this.tapeta,this.hasWrapper,this.napis];
        this.odpRem2 = [this.tapeta,this.BottomLine,this.czas,this.latarka,this.Przkamera];
        this.TKamWL = [this.tapeta,this.czas,this.BottomLine,this.latarka,this.Przkamera];
        this.TPokhas = [this.czas,this.latarka,this.Przkamera,this.BottomLine];
        this.TSprHas = [this.gridWrapper,this.hasWrapper,this.napis];
        this.ThasK = [this.hasK1,this.hasK2,this.hasK3,this.hasK4]
        
        //ekranGlówny

        this.appContainer = document.createElement('div');
        this.appContainer.setAttribute("class", "appContainer");
        
        this.settings = document.createElement('button');setAttributes(this.settings, {"id":"settings","onclick":"odpalSettings", "class": "applications"});this.appContainer.append(this.settings)
        this.settingsIcon = document.createElement('i');setAttributes(this.settingsIcon, {"id":"settingsIcon","class":"fa-solid fa-sliders"});this.settings.append(this.settingsIcon)//this.settings.setAttribute("id","settingsIcon");
        

    }
    odpalenie(){
        if(this.flagodpalenie==0){
            this.ekran.append(this.tapeta,this.BottomLine,this.czas,this.latarka,this.Przkamera);
            this.latarka.appendChild(this.iclatarka);this.Przkamera.appendChild(this.icPrzkamera);
            this.flagodpalenie++;
        } else if(this.flagOdblokowany==1){
            this.ekran.removeChild(this.appContainer);
            this.ekran.style.backgroundColor='#101010';
            this.flagOdblokowany=0;
            this.flaghaslo=0

        }else if(this.flagodpalenie==1 && this.flagkamera==1 && this.flaghaslo==0){
            this.ekran.removeChild(this.kamera);
            this.flagodpalenie=0;this.flagkamera=0;this.flaghaslo=0;
        }else if(this.flagodpalenie==1 && this.flagkamera==0 && this.flaghaslo==1){
            for(let i=0;i<=3;i++){
                this.ekran.removeChild(this.odpRem1[i]);
            }
            this.tapeta.style.filter= "brightness(1)";
            this.ekran.style.backgroundColor='#101010';
            this.flagodpalenie=0;this.flagkamera=0;this.flaghaslo=0;
        }else if(this.flagodpalenie==1 && this.flagkamera==0 && this.flaghaslo==2){
            this.ekran.removeChild(this.tapeta);
            this.flagodpalenie=0;this.flagkamera=0;this.flaghaslo=0;
        }
        else{
            for(let i=0;i<=4;i++){
                this.ekran.removeChild(this.odpRem2[i]);
            }
            this.ekran.style.backgroundColor='#101010';
            this.flagkamera=0;this.flagodpalenie=0;    
        }
    }
    AktualnyCzas(){
        let czas =new Date();
        if(czas.getMinutes().toString().length===1){
            var minuta="0"+czas.getMinutes();
        } else{
            var minuta=czas.getMinutes();
        }
        let godzina=czas.getHours()+":"+minuta;
        if(this.czas!=null){
        this.czas.textContent=godzina;
        }
    }
    latarkaWL(){
        if(this.flagLatarka==0){
            this.obudowa.style.boxShadow="0px 0px 30rem white";
            this.iclatarka.classList.add('active');
            this.flagLatarka++;
        } else{
            this.obudowa.style.boxShadow="0px 0px 3rem #101010";
            this.iclatarka.classList.remove('active');
            this.flagLatarka--;
        }
    }
    kameraWL(){
        for(let i=0;i<=4;i++){
            this.ekran.removeChild(this.TKamWL[i]);
        }
        this.ekran.appendChild(this.kamera);
        var video = document.querySelector(".kamera");
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
                video.textContent = "Nie ma kamery";
            });
        } 
        this.flagkamera++;
    }
    pokhaslo(){
        for(let i=0;i<=3;i++){
            this.ekran.removeChild(this.TPokhas[i]);
        }
        for(let i=0;i<=11;i++){
            this.gridWrapper.append(this.hasButtony[i]);
        }
        this.ekran.append(this.napis,this.hasWrapper, this.gridWrapper);
        this.tapeta.style.filter= "blur(4px)";
        const numButtons = document.querySelectorAll('.numer');
        numButtons.forEach(button => {
        button.addEventListener('click',e => {
            this.inHaslo+=button.textContent;
            this.ThasK[this.kulka].style.backgroundColor="black";
            if(this.inHaslo>999){
                this.sprhaslo();
            }
            this.kulka++;
        });});
        this.flaghaslo++;
    }
    sprhaslo(){
        if(this.inHaslo==this.haslo){
            for(let i=0;i<=3;i++){
                this.ThasK[i].style.backgroundColor="white";
            }
            this.strGlowna();
            this.flagOdblokowany++
            this.flaghaslo = 2;
        }else{
            this.inHaslo="";this.kulka=-1;
            this.napis.textContent = "zle haslo";
            setTimeout(()=>{
                for(let i=0;i<=3;i++){
                    this.ThasK[i].style.backgroundColor="white";
                }
            },250);
            setTimeout(()=>{
                this.napis.textContent = "Podaj Hasło";
            },500);
        }
    }
    strGlowna(){
        this.tapeta.style.filter= "none";
        for(let i=0;i<=2;i++){
            this.ekran.removeChild(this.TSprHas[i]);
        }
        this.ekran.append(this.appContainer)
    }
    odpalSettings(){

    }
}
let telefon=new Telefon();
setInterval(telefon.AktualnyCzas,1);