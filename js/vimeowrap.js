!function(t,e){!function(i){function n(t){return new n.fn.init(t)}function a(e,i,n){if(!n.contentWindow.postMessage)return!1;var a=n.getAttribute("src").split("?")[0],r=JSON.stringify({method:e,value:i});"//"===a.substr(0,2)&&(a=t.location.protocol+a),n.contentWindow.postMessage(r,a)}function r(t){var e,i;try{e=JSON.parse(t.data),i=e.event||e.method}catch(n){}if("ready"!=i||c||(c=!0),"undefined"==typeof e)return!1;if(t.origin!=d)return!1;var a=e.value,r=e.data,o=""===o?null:e.player_id,l=s(i,o),h=[];return l?(void 0!==a&&h.push(a),r&&h.push(r),o&&h.push(o),h.length>0?l.apply(null,h):l.call()):!1}function o(t,e,i){i?(u[i]||(u[i]={}),u[i][t]=e):u[t]=e}function s(t,e){return e?u[e][t]:u[t]}function l(t,e){if(e&&u[e]){if(!u[e][t])return!1;u[e][t]=null}else{if(!u[t])return!1;u[t]=null}return!0}function h(e){"//"===e.substr(0,2)&&(e=t.location.protocol+e);for(var i=e.split("/"),n="",a=0,r=i.length;r>a&&3>a;a++)n+=i[a],2>a&&(n+="/");return n}function p(t){return!!(t&&t.constructor&&t.call&&t.apply)}var u={},c=!1,d=(Array.prototype.slice,"");return n.fn=n.prototype={element:null,init:function(t){return"string"==typeof t&&(t=e.getElementById(t)),this.element=t,d=h(this.element.getAttribute("src")),this},api:function(t,e){if(!this.element||!t)return!1;var i=this,n=i.element,r=""!==n.id?n.id:null,s=p(e)?null:e,l=p(e)?e:null;return l&&o(t,l,r),a(t,s,n),i},addEvent:function(t,e){if(!this.element)return!1;var i=this,n=i.element,r=""!==n.id?n.id:null;return o(t,e,r),"ready"!=t?a("addEventListener",t,n):"ready"==t&&c&&e.call(null,r),i},removeEvent:function(t){if(!this.element)return!1;var e=this,i=e.element,n=""!==i.id?i.id:null,r=l(t,n);"ready"!=t&&r&&a("removeEventListener",t,i)}},n.fn.init.prototype=n.fn,t.addEventListener?t.addEventListener("message",r,!1):t.attachEvent("onmessage",r),i.Froogaloop=i.$f=n}(t);var i=function(t){function e(t){for(var e=0;e<t.length;e++){var i="vimeo.com/api/v2/";t[e]=t[e].replace(/vimeo.com\/(\d+)$/i,i+"video/$1.json"),t[e]=t[e].replace(/vimeo.com\/([A-Z0-9]+)([\?A-Z0-9=]*)$/i,i+"$1/videos.json$2"),t[e]=t[e].replace(/vimeo.com\/groups\/([A-Z0-9]+)([\?A-Z0-9=]*)$/i,i+"group/$1/videos.json$2"),t[e]=t[e].replace(/vimeo.com\/channels\/([A-Z0-9]+)([\?A-Z0-9=]*)$/i,i+"channel/$1/videos.json$2"),t[e]=t[e].replace(/vimeo.com\/album\/([A-Z0-9]+)([\?A-Z0-9=]*)$/i,i+"album/$1/videos.json$2")}return t}function i(){a.jsonp(r.list[o++],{},n)}function n(e){s=s.concat(e),o<r.list.length?i():(t.events.playlist.dispatch(s),t.events.playlist.remove())}var r=this,o=0,s=[];this.load=function(t){return r.list=e(t),i(),s}},n=function(){var t=[];this.add=function(e){t.push(e)},this.dispatch=function(){for(var e=Array.prototype.slice.call(arguments),i=0;i<t.length;i++)"function"==typeof t[i]&&t[i].apply(this,e)},this.remove=function(e){if(e)for(var i=0;i<t.length;i++)t[i]===e&&(t.splice(i,1),i--);else t=[]}},a={};a.jsonp=function(i,n,r){var o=-1===i.indexOf("?")?"?":"&";n=n||{};for(var s in n)n.hasOwnProperty(s)&&(o+=encodeURIComponent(s)+"="+encodeURIComponent(n[s])+"&");var l=a.uniqueId("json_call");t[l]=function(e){r(e),t[l]=null};var h=e.createElement("script");h.src=i+o+"callback="+l,h.async=!0,h.onload=h.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(h.onload=h.onreadystatechange=null,h&&h.parentNode&&h.parentNode.removeChild(h))};var p=e.head||e.getElementsByTagName("head")[0]||e.documentElement;p.insertBefore(h,p.firstChild)},a.extend=function(t,e){for(var i in e)e[i]&&e[i].constructor&&e[i].constructor===Object?(t[i]=t[i]||{},arguments.callee(t[i],e[i])):t[i]=e[i];return t},a.css=function(t,e){if(t)for(var i in e)try{if("undefined"==typeof e[i])continue;if("number"==typeof e[i]&&"zIndex"!=i&&"opacity"!=i){if(isNaN(e[i]))continue;e[i]=Math.ceil(e[i])+"px"}t.style[i]=e[i]}catch(n){}},a.prepend=function(t,e){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)};var r=0;a.uniqueId=function(t){var e=r++;return t?t+e:e},Array.indexOf||(Array.prototype.indexOf=function(t){for(var e=0;e<this.length;e++)if(this[e]==t)return e;return-1}),String.prototype.populate=function(t,e){return this.replace(/\{\{\s*([^|\s}]+)\|?([^\s}]*)\s*\}\}/g,function(i,n,a){var r=t[n];if("undefined"!=typeof r){if(e&&a)for(var o=a.split("|"),s=0;s<o.length;s++){var l=o[s].split(":")[0],h=o[s].split(":")[1],p=h?h.split(","):[];p.unshift(r),"function"==typeof e[l]&&(r=e[l].apply(r,p))}return r}return i})};var o={},s=t.vimeowrap=function(t){var i;if(t.nodeType?i=t:"string"==typeof t&&(i=e.getElementById(t)),i){var n=o[i.id];return n?n:o[i.id]=new s.api(i)}return null};s.utils=a,s.getPlayers=function(){return o},s.api=function(t){function r(t){u=t;var e=u[c.item];p.events.playlistItem.dispatch(e,c.item),o(e.url)}function o(t){a.jsonp("http://vimeo.com/api/oembed.json",l({url:t}),function(t){var i=e.createElement("div");i.innerHTML=t.html,p.iframe=i.children[0],p.iframe.id=c.player_id,a.css(p.iframe,{position:"absolute",display:"none"});var n=function(){a.css(p.iframe,{display:"block"})};p.iframe.attachEvent?p.iframe.attachEvent("onload",n):p.iframe.onload=n,a.prepend(p.iframe,p.display),Froogaloop(p.iframe.id).addEvent("ready",function(){p.player=Froogaloop(p.iframe.id),p.events.playerReady.dispatch(p.player),p.player.addEvent("finish",h)})})}function l(t){for(var e=["url","width","maxwidth","height","maxheight","byline","title","portrait","color","callback","autoplay","loop","xhtml","api","wmode","iframe","player_id","badge"],i=0;i<e.length;i++){var n=e[i];if(c.hasOwnProperty(n)){var a=c[n];"boolean"==typeof a&&(a=a?1:0),t[n]=a}}return t}function h(){var t;switch(c.repeat){case"list":t=c.item+1,t<u.length&&p.playlistItem(t,!0);break;case"always":t=c.item+1,t>=u.length&&(t=0),p.playlistItem(t,!0);break;case"single":p.play()}}var p=this,u=null,c=null;this.container=t,this.id=t.id,this.display=null,this.iframe=null,this.player=null,this.config=null,this.plugins={},this.events={playerReady:new n,playlist:new n,playlistItem:new n},this.setup=function(t){var n={width:480,height:270,color:"00adef",repeat:"none",item:0,api:!0,player_id:a.uniqueId("player_")};c=a.extend(n,t),this.config=c,this.container.innerHTML="";var o={x:0,y:0,width:c.width,height:c.height},l=null;for(var h in c.plugins)if("function"==typeof s[h])switch(l=this.plugins[h]=new s[h](this,c.plugins[h]),l.config.position){case"left":case"right":o.width+=l.config.size||0,l.width=l.config.size,l.height=c.height;break;default:o.height+=l.config.size||0,l.width=c.width,l.height=l.config.size}a.css(this.container,{position:"relative",width:o.width,height:o.height});for(h in this.plugins){switch(l=this.plugins[h],l.config.position){case"left":l.x=o.x,o.x+=l.width,o.width-=l.width;break;case"right":l.x=o.x+o.width-l.width,o.width-=l.width;break;case"top":l.y=o.y,o.y+=l.height,o.height-=l.height;break;case"bottom":l.y=o.y+o.height-l.height,o.height-=l.height}this.plugins[h].setup()}this.display=e.createElement("div"),this.display.id=this.id+"_display",this.container.appendChild(this.display),a.css(this.display,{background:"#000000",width:o.width,height:o.height,position:"absolute",left:o.x,top:o.y}),this.events.playlist.add(r);var p=new i(this);return p.load(c.urls),this},this.playlistItem=function(t,e){c.item=t,this.pause(),a.css(this.iframe,{display:"none"}),"boolean"==typeof e&&(c.autoplay=e);for(var i=u[t],n="http://player.vimeo.com/video/"+i.id+"?",r=["byline","title","portrait","color","autoplay","loop","api","player_id","badge"],o=0;o<r.length;o++){var s=r[o];if(c.hasOwnProperty(s)){var l=c[s];"boolean"==typeof l&&(l=l?1:0),n+=encodeURIComponent(s)+"="+encodeURIComponent(l)+"&"}}this.iframe&&(this.iframe.src=n.slice(0,-1)),this.events.playlistItem.dispatch(i,t)},this.playlistNext=function(t){var e=c.item+1;e>=u.length&&(e=0),this.playlistItem(e,t)},this.playlistPrev=function(t){var e=c.item-1;0>e&&(e=u.length-1),this.playlistItem(e,t)},this.play=function(){this.player&&this.player.api("paused",function(t){t===!0&&p.player.api("play")})},this.pause=function(){this.player&&this.player.api("paused",function(t){t===!1&&p.player.api("pause")})},this.onPlay=function(t){this.player&&this.player.addEvent("play",t)},this.onPause=function(t){this.player&&this.player.addEvent("pause",t)},this.onFinish=function(t){this.player&&this.player.addEvent("finish",t)},this.getPlugin=function(t){return this.plugins[t]},this.getPlaylist=function(){return u}}}(window,document);