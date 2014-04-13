
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

dataUpdate ={
  "coordinates": null,
  "favorited": false,
  "created_at": "Wed Sep 05 00:37:15 +0000 2012",
  "truncated": false,
  "id_str": "2441019864",
  "entities": {
    "urls": [
 
    ],
    "hashtags": [
      {
        "text": "peterfalk",
        "indices": [
          35,
          45
        ]
      }
    ],
    "user_mentions": [
 
    ]
  },
  "in_reply_to_user_id_str": null,
  "text": "Maybe he'll finally find his keys.",
  "contributors": null,
  "retweet_count": 0,
  "id": 2441019864,
  "in_reply_to_status_id_str": null,
  "geo": null,
  "retweeted": false,
  "in_reply_to_user_id": null,
  "place": null,
  "user": {
    "name": "Jason Costa",
    "profile_sidebar_border_color": "86A4A6",
    "profile_sidebar_fill_color": "A0C5C7",
    "profile_background_tile": false,
    "profile_image_url": "http://a0.twimg.com/profile_images/1751674923/new_york_beard_normal.jpg",
    "created_at": "Wed May 28 00:20:15 +0000 2008",
    "location": "",
    "is_translator": true,
    "follow_request_sent": false,
    "id_str": "14927800",
    "profile_link_color": "FF3300",
    "entities": {
      "url": {
        "urls": [
          {
            "expanded_url": "http://www.jason-costa.blogspot.com/",
            "url": "http://t.co/YCA3ZKY",
            "indices": [
              0,
              19
            ],
            "display_url": "jason-costa.blogspot.com"
          }
        ]
      },
      "description": {
        "urls": [
 
        ]
      }
    },
    "default_profile": false,
    "contributors_enabled": false,
    "url": "http://t.co/YCA3ZKY",
    "favourites_count": 883,
    "utc_offset": -28800,
    "id": 14927800,
    "profile_image_url_https": "https://si0.twimg.com/profile_images/1751674923/new_york_beard_normal.jpg",
    "profile_use_background_image": true,
    "listed_count": 150,
    "profile_text_color": "333333",
    "protected": false,
    "lang": "en",
    "followers_count": 8760,
    "time_zone": "Pacific Time (US & Canada)",
    "profile_background_image_url_https": "https://si0.twimg.com/images/themes/theme6/bg.gif",
    "verified": false,
    "profile_background_color": "709397",
    "notifications": false,
    "description": "Platform at Twitter",
    "geo_enabled": true,
    "statuses_count": 5532,
    "default_profile_image": false,
    "friends_count": 166,
    "profile_background_image_url": "http://a0.twimg.com/images/themes/theme6/bg.gif",
    "show_all_inline_media": true,
    "screen_name": "jasoncosta",
    "following": false
  },
  "source": "<a href=\"http://jason-costa.blogspot.com\" rel=\"nofollow\">My Shiny App</a>",
  "in_reply_to_screen_name": null,
  "in_reply_to_status_id": "@wher3on3arth"
};

$.ajax({
    //url: "https://api.twitter.com/1.1/statuses/update.json",
    url: "proces.php",
    type:'POST',
    headers: {
        consumer_key: "ceMAQIxjwUYFNuIPMntd0Wiii",
        consumer_secret: "kgiFTojwr4d1jtvpOQvf4DqZ2lFKDgQCT5k7OJelC0hfUZUiZU",
        token: "2441019864-BWe9OFRrWu1FKZK4EcP6m9sRxmccX9Xv9bGCxF3",
        token_secret: "sSyvpd4rv440kLVEBBNLVfGxxttBgvZIMlo5O03V4rCu4"
    },
    data: {
      status: "Check this out!!"
    },
    success:function(data) { 
        alert(data);
    }
});
