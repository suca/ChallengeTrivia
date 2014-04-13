
startGame = function () {
    alert("You started the game");
    Reveal.next();
};
goToSlide = function (layer) {
    Reveal.slide(layer);
};
setTimeout(function() {
    jQuery(".layout-loading").css("display","none");    
}, 5000);

//Twitter 

/*********************************************************************
*  #### Twitter Post Fetcher v10.0 ####
*  Coded by Jason Mayes 2013. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here: 
*  http://www.jasonmayes.com/projects/twitterApi/
*  Updates will be posted to this site.
*********************************************************************/
var twitterFetcher=function(){function x(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(c,e){return e}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function p(e,c){for(var g=[],f=RegExp("(^| )"+c+"( |$)"),a=e.getElementsByTagName("*"),h=0,d=a.length;h<d;h++)f.test(a[h].className)&&g.push(a[h]);return g}var y="",l=20,s=!0,k=[],t=!1,q=!0,r=!0,u=null,v=!0,z=!0,w=null,A=!0;return{fetch:function(e,c,g,f,a,h,d,b,m,n){void 0===g&&(g=20);void 0===f&&(s=!0);void 0===a&&(a=
!0);void 0===h&&(h=!0);void 0===d&&(d="default");void 0===b&&(b=!0);void 0===m&&(m=null);void 0===n&&(n=!0);t?k.push({id:e,domId:c,maxTweets:g,enableLinks:f,showUser:a,showTime:h,dateFunction:d,showRt:b,customCallback:m,showInteraction:n}):(t=!0,y=c,l=g,s=f,r=a,q=h,z=b,u=d,w=m,A=n,c=document.createElement("script"),c.type="text/javascript",c.src="//cdn.syndication.twimg.com/widgets/timelines/"+e+"?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),document.getElementsByTagName("head")[0].appendChild(c))},
callback:function(e){var c=document.createElement("div");c.innerHTML=e.body;"undefined"===typeof c.getElementsByClassName&&(v=!1);e=[];var g=[],f=[],a=[],h=[],d=0;if(v)for(c=c.getElementsByClassName("tweet");d<c.length;){0<c[d].getElementsByClassName("retweet-credit").length?a.push(!0):a.push(!1);if(!a[d]||a[d]&&z)e.push(c[d].getElementsByClassName("e-entry-title")[0]),h.push(c[d].getAttribute("data-tweet-id")),g.push(c[d].getElementsByClassName("p-author")[0]),f.push(c[d].getElementsByClassName("dt-updated")[0]);
d++}else for(c=p(c,"tweet");d<c.length;)e.push(p(c[d],"e-entry-title")[0]),h.push(c[d].getAttribute("data-tweet-id")),g.push(p(c[d],"p-author")[0]),f.push(p(c[d],"dt-updated")[0]),0<p(c[d],"retweet-credit").length?a.push(!0):a.push(!1),d++;e.length>l&&(e.splice(l,e.length-l),g.splice(l,g.length-l),f.splice(l,f.length-l),a.splice(l,a.length-l));c=[];d=e.length;for(a=0;a<d;){if("string"!==typeof u){var b=new Date(f[a].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),b=u(b);
f[a].setAttribute("aria-label",b);if(e[a].innerText)if(v)f[a].innerText=b;else{var m=document.createElement("p"),n=document.createTextNode(b);m.appendChild(n);m.setAttribute("aria-label",b);f[a]=m}else f[a].textContent=b}b="";s?(r&&(b+='<div class="user">'+x(g[a].innerHTML)+"</div>"),b+='<p class="tweet">'+x(e[a].innerHTML)+"</p>",q&&(b+='<p class="timePosted">'+f[a].getAttribute("aria-label")+"</p>")):e[a].innerText?(r&&(b+='<p class="user">'+g[a].innerText+"</p>"),b+='<p class="tweet">'+e[a].innerText+
"</p>",q&&(b+='<p class="timePosted">'+f[a].innerText+"</p>")):(r&&(b+='<p class="user">'+g[a].textContent+"</p>"),b+='<p class="tweet">'+e[a].textContent+"</p>",q&&(b+='<p class="timePosted">'+f[a].textContent+"</p>"));A&&(b+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+h[a]+'" class="twitter_reply_icon">Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+h[a]+'" class="twitter_retweet_icon">Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+
h[a]+'" class="twitter_fav_icon">Favorite</a></p>');c.push(b);a++}if(null==w){e=c.length;g=0;f=document.getElementById(y);for(h="<ul>";g<e;)h+="<li>"+c[g]+"</li>",g++;f.innerHTML=h+"</ul>"}else w(c);t=!1;0<k.length&&(twitterFetcher.fetch(k[0].id,k[0].domId,k[0].maxTweets,k[0].enableLinks,k[0].showUser,k[0].showTime,k[0].dateFunction,k[0].showRt,k[0].customCallback,k[0].showInteraction),k.splice(0,1))}}}();


/**
 * How to use fetch function:
 * @param {string} Your Twitter widget ID.
 * @param {string} The ID of the DOM element you want to write results to. 
 * @param {int} Optional - the maximum number of tweets you want returned. Must
 *     be a number between 1 and 20.
 * @param {boolean} Optional - set true if you want urls and hash
       tags to be hyperlinked!
 * @param {boolean} Optional - Set false if you dont want user photo /
 *     name for tweet to show.
 * @param {boolean} Optional - Set false if you dont want time of tweet
 *     to show.
 * @param {function/string} Optional - A function you can specify to format
 *     tweet date/time however you like. This function takes a JavaScript date
 *     as a parameter and returns a String representation of that date.
 *     Alternatively you may specify the string 'default' to leave it with
 *     Twitter's default renderings.
 * @param {boolean} Optional - Show retweets or not. Set false to not show.
 * @param {function/string} Optional - A function to call when data is ready. It
 *     also passes the data to this function should you wish to manipulate it
 *     yourself before outputting. If you specify this parameter you  must
 *     output data yourself!
 * @param {boolean} Optional - Show links for reply, retweet, favourite. Set false to not show.
 */


twitterFetcher.fetch('455207861358821378', 'lastTweet', 5, true);
twitterFetcher.fetch('455207861358821378', 'sayingTweet', 5, true, true, false);


function dateFormatter(date) {
  return date.toTimeString();
};
lastTweetFn = function () {
    jQuery("#lastTweet").css("display","block");
    jQuery("#sayingTweet").css("display","none");
};
sayingTweetFn = function () {
    jQuery("#sayingTweet").css("display","block");
    jQuery("#lastTweet").css("display","none");
};
onSoundFn = function () {
    if (jQuery(".offSound").length > 0) {
        jQuery(".offSound").removeClass("options-sound-selected");
    }
    jQuery("#soundConfiguration").css("display", "block");
    jQuery(".onSound").addClass("options-sound-selected");
    if (media) {
        media.play();
    } else {
        audio.play();    
    }
    

};
offSoundFn = function () {
    if (jQuery(".offSound").length > 0) {
        jQuery(".onSound").removeClass("options-sound-selected");
    }
    jQuery("#soundConfiguration").css("display", "none");
    jQuery(".offSound").addClass("options-sound-selected");
    if (media) {
        media.pause();
    } else {
        audio.pause();
    }

    
    
};
var media;
var audio;
if(typeof deviceready !== "undefined"){
    document.addEventListener("deviceready", onDeviceReady, false);
}


onDeviceReady = function () {
    media = new Media("res/dream.mp3");    
    media.play();
}
if (typeof Media === "undefined") {
    if (document.getElementsByTagName("audio").length === 0) {
        audio = document.createElement("audio");
        audio.loop = "loop";
        audio.autoplay = "autoplay";
        var source = document.createElement("source");
        source.src = "res/dream.mp3";
        source.type = "audio/mp3";
        audio.appendChild(source);
        jQuery("#soundConfiguration").append(audio);
    }

} else {
    var a = 1+1;
}


audio.pause();



//Easy Module
// JavaScript Document
var myWindow;

var bolivia = new Array("ib1.png", "ib2.png", "ib4.png", "ib5.png", "ib6.png", "ib7.png"),
    boliviaDesc = new Array("Illimani", "Lago Titicaca", "Sajama", "Salar de Uyuni", "Tiwanaku", "Valle de la Luna"),
    manmade = new Array("CAT ISLAND BAHAMAS.jpg", "Egyptian dust plume,red sea.jpg", "Hawaii.jpg", "Island of CRETE, GREECE.jpg", "Pavlof Volcano,Alaska Peninsula.jpg", "Smoke plumes over idaho and montana.jpg", "Sochi Olympic event.jpg", "Southern Intalian Peninsula al night.jpg", "The Koreas at night.jpg"),
    manmadeDesc = new Array("Cat Island Bahamas", "Egyptian Dust Plume", "Hawaii", "Island of CRETE", "Pavlof Volkano, Alaska", "Smoke plumes", "Sochi Olympic event", "Southern Intalian Peninsula", "The Koreas at Night"),
    nature = new Array("Abu Simbel, en Egipto-.jpg", "Baalbek, Líbano-.jpg", "Chichen Itza, en México-.jpg", "Dzibilchaltun, en México-.jpg", "La Gran Muralla China-.jpg", "Machu Picchu en Perú-.jpg", "Mayapan, México-.jpg", "Pirámides de Guiza, en Egipto-.jpg", "Saqqara, en Egipto-.jpg", "Stonehenge, en Inglaterra-.jpg", "Templo de Angkor Wat en Camboya-.jpg", "Teotihuacan, México-.jpg", "Uxmal, México-  .jpg"),
    natureDesc = new Array("Abu Simbel, Egipto", "Baalbek, Libano", "Chichen Itza, Mexico", "Dzibilchaltun, Mexico", "La Gran Muralla China", "Machuu Picchu, Peru", "Mayapan, Mexico", "Piramides de Guiza, Egipto", "Saqqara, Egipto", "Stonehenge, Inglaterra", "Templo de Angkor Wat, Camboya", "Teotihuacan, Mexico", "Uxmal, Mexico");
    
var randObj, puntaje = 0;

function redirect (page) {
    this.myWindow = location.href=page;
}

function closeWin () {
    this.myWindow.close();  
}

function getRandomNumber (lo, hi) {
    return Math.floor(Math.random()*(hi - lo + 1)) + lo - 1;
}

function getImage (index) {
    document.getElementById("puntaje").innerHTML = this.puntaje;
    document.getElementById("puntaje2").innerHTML = this.puntaje;
    document.getElementById("puntaje3").innerHTML = this.puntaje;
    if(index == 1) { //bolivia
        var randIndex = getRandomNumber(1, bolivia.length),
            randIndex2,
            vis = [],
            flag = true,
            i;
        document.getElementById("imagenJuego").src = "img/"+bolivia[randIndex];
        document.getElementById("imagenJuego2").src = "img/"+bolivia[randIndex];
        document.getElementById("imagenJuego3").src = "img/"+bolivia[randIndex];
        randObj = getRandomNumber(1, 4);
        vis.push(randIndex);
        document.getElementById("label"+randObj).innerHTML = boliviaDesc[randIndex];
        i = 0;
        for(; i < 4; ) {
            if(i !== randObj) {
                randIndex2 = getRandomNumber(1, bolivia.length);
                flag = true;
                for(var j = 0; j < vis.length; j++) {
                    if(randIndex2 === vis[j]) {
                        flag = false;
                        break;
                    }
                }
                if(flag === true) {
                    document.getElementById("label"+i).innerHTML = boliviaDesc[randIndex2];
                    vis.push(randIndex2);
                    i++;
                }
            } else {
                i++;
            }
        }
    } else if(index == 2) { //manmade
        var randIndex = getRandomNumber(1, manmade.length),
            randIndex2,
            vis = [],
            flag = true,
            i;
        document.getElementById("imagenJuego").src = "img/"+manmade[randIndex];
        document.getElementById("imagenJuego2").src = "img/"+manmade[randIndex];
        document.getElementById("imagenJuego3").src = "img/"+manmade[randIndex];
        randObj = getRandomNumber(1, 4);
        vis.push(randIndex);
        document.getElementById("label"+randObj).innerHTML = manmadeDesc[randIndex];
        i = 0;
        for(; i < 4; ) {
            if(i !== randObj) {
                randIndex2 = getRandomNumber(1, manmade.length);
                flag = true;
                for(var j = 0; j < vis.length; j++) {
                    if(randIndex2 === vis[j]) {
                        flag = false;
                        break;
                    }
                }
                if(flag === true) {
                    document.getElementById("label"+i).innerHTML = manmadeDesc[randIndex2];
                    vis.push(randIndex2);
                    i++;
                }
            } else {
                i++;
            }
        }
    } else if(index == 3) { //nature
        var randIndex = getRandomNumber(1, nature.length),
            randIndex2,
            vis = [],
            flag = true,
            i;
        document.getElementById("imagenJuego").src = "img/"+nature[randIndex];
        document.getElementById("imagenJuego2").src = "img/"+nature[randIndex];
        document.getElementById("imagenJuego3").src = "img/"+nature[randIndex];
        randObj = getRandomNumber(1, 4);
        vis.push(randIndex);
        document.getElementById("label"+randObj).innerHTML = natureDesc[randIndex];
        i = 0;
        for(; i < 4; ) {
            if(i !== randObj) {
                randIndex2 = getRandomNumber(1, nature.length);
                flag = true;
                for(var j = 0; j < vis.length; j++) {
                    if(randIndex2 === vis[j]) {
                        flag = false;
                        break;
                    }
                }
                if(flag === true) {
                    document.getElementById("label"+i).innerHTML = natureDesc[randIndex2];
                    vis.push(randIndex2);
                    i++;
                }
            } else {
                i++;
            }
        }
    }
}

function victory (i, selection) {
    if(selection == this.randObj) {
        alert("CORRECT ANSWER!");
        this.puntaje += 1;
        document.getElementById("puntaje").innerHTML = this.puntaje;
        document.getElementById("puntaje2").innerHTML = this.puntaje;
        document.getElementById("puntaje3").innerHTML = this.puntaje;
        if(i == 1) {
            getImage(1);
        } else if(i == 2) {
            getImage(2);
        } else {
            getImage(3);
        }
    } else {
        alert("WRONG ANSWER");  
    }   
}
loadMedium = function () {

    document.getElementById("mediumImage").background = "img/";
};