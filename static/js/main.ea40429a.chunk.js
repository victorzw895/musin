(window.webpackJsonpmusin=window.webpackJsonpmusin||[]).push([[0],{164:function(e,t,o){e.exports=o(319)},169:function(e,t,o){},288:function(e,t,o){var g=o(289);e.exports={getSpotifySongs:function(e,t){return g({method:"get",url:"https://api.spotify.com/v1/search",Accept:"application/json","Content-Type":"application/json",headers:{Authorization:"Bearer "+t},params:{q:e,type:"track"}})},getSongChords:function(e){return g({method:"get",url:"http://api.guitarparty.com/v2/songs/",headers:{"Guitarparty-Api-Key":"b2db9d393e085c59afb865bebd33b54b250a5dd0"},params:{query:e}})},getAudioInfo:function(e,t){return g({method:"get",url:"".concat("https://api.spotify.com/v1/","audio-analysis/").concat(e),Accept:"application/json","Content-Type":"application/json",headers:{Authorization:"Bearer "+t}})}}},306:function(e,t,o){},316:function(e,t,o){"use strict";(function(e){var t=o(39),g=o.n(t);(function(){var t;t=function(e){var t,o;return null==e&&(e={}),e.positioning||(e.positioning="absolute"),e.scale||(e.scale=1),e.scaleX||(e.scaleX=1),e.scaleY||(e.scaleY=1),e.scaleZ||(e.scaleZ=1),e.verticalOffset||(e.verticalOffset=0),6,-100,o={absolute:function(t){return[window.innerWidth/2+6*t[0]*e.scale*e.scaleX,window.innerHeight+-100+e.verticalOffset-6*t[1]*e.scale*e.scaleY,6*t[2]*e.scale*e.scaleZ]}},t=function(t,g){var n;return null==g&&(g=!1),n="function"===typeof e.positioning?e.positioning.call(this,t):o[e.positioning].call(this,t),g&&(this.screenPositionVec3=n),n},{hand:{screenPosition:function(e){return t.call(this,e||this.palmPosition,!e)}},pointable:{screenPosition:function(e){return t.call(this,e||this.tipPosition,!e)}}}},"undefined"!==typeof g.a&&g.a.Controller?g.a.Controller.plugin("screenPosition",t):e.exports.screenPosition=t}).call(void 0)}).call(this,o(317)(e))},319:function(e,t,o){"use strict";o.r(t);var g=o(0),n=o.n(g),a=o(38),s=o.n(a),r=(o(169),o(16)),m=o(17),p=o(18),i=o(19),c=o(20),l=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var o=t.split("=");e[o[0]]=decodeURIComponent(o[1])}return e}),{});window.location.hash="";var u=l,h=o(45),d=o.n(h),C=o(70),f=o(10),A=o(330),y=o(320),D=(g.Component,o(326)),F=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(p.a)(this,Object(i.a)(t).call(this))).state={songQuery:null},e._handleSubmit=e._handleSubmit.bind(Object(f.a)(e)),e._handleChange=e._handleChange.bind(Object(f.a)(e)),e}return Object(c.a)(t,e),Object(m.a)(t,[{key:"_handleSubmit",value:function(e){e.preventDefault();var t=this.state.songQuery;this.props.search(t)}},{key:"_handleChange",value:function(e){this.setState({songQuery:e.target.value})}},{key:"render",value:function(){return n.a.createElement("form",{id:"search-song",onSubmit:this._handleSubmit},n.a.createElement("br",null),n.a.createElement("label",null,"Search Song: "),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(D.a,{size:"mini",type:"text",placeholder:"Real Name",onChange:this._handleChange,autoFocus:!0,tabIndex:"-1",action:!0},n.a.createElement("input",null),n.a.createElement(y.a,{size:"large",inverted:!0,color:"blue",type:"search",tabIndex:"-1"},"Search")))}}]),t}(g.Component),E=o(328),b=o(154),v=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(p.a)(this,Object(i.a)(t).call(this)))._handleClick=e._handleClick.bind(Object(f.a)(e)),e}return Object(c.a)(t,e),Object(m.a)(t,[{key:"_handleClick",value:function(e,t,o,g,n){this.props.loadSong(e,t,o,g,n)}},{key:"render",value:function(){var e=this,t=this.props.searchResults;return console.log(t),n.a.createElement(E.a,{animated:!0,divided:!0,inverted:!0,selection:!0,verticalAlign:"middle",style:{overflow:"auto",maxHeight:"50vh",width:"55vw",textAlign:"start"}},t.map((function(t){return n.a.createElement(E.a.Item,{key:t.id,id:t.id,className:"search-list",onClick:function(){return e._handleClick(t.id,t.name,t.artists[0].name,t.duration_ms,t.uri)}},n.a.createElement(b.a,{avatar:!0,size:"tiny",verticalAlign:"middle",src:t.album.images[2].url,alt:t.album.name}),n.a.createElement(E.a.Content,null,n.a.createElement(E.a.Header,null,t.name),n.a.createElement(E.a.Description,null,t.artists[0].name)))})))}}]),t}(g.Component),G=o(32),k=o(331),S=o(327),j=o(332),O=o(30),B=function(e){function t(e){var o;return Object(r.a)(this,t),(o=Object(p.a)(this,Object(i.a)(t).call(this,e))).state={token:"",deviceId:"",loggedIn:!1,error:"",trackName:"",artistName:"",albumName:"",albumImage:"",playing:!1,position:0,duration:0,uri:"",clicked:!1},o.onPlayClick=o.onPlayClick.bind(Object(f.a)(o)),o}return Object(c.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.token,o=e.uri;null!==t&&this.setState({loggedIn:!0,token:t,uri:o}),this.checkForPlayer(t)}},{key:"componentDidUpdate",value:function(e,t){this.state.uri!==t.uri&&this.setState({clicked:!1})}},{key:"checkForPlayer",value:function(e){null!==window.Spotify&&(this.player=new window.Spotify.Player({name:"Victor's Spotify Player",getOAuthToken:function(t){t(e)}}),this.createEventHandlers(),this.player.connect())}},{key:"createEventHandlers",value:function(){var e=this;this.player.on("initialization_error",(function(e){console.error(e)})),this.player.on("authentication_error",(function(t){console.error(t),e.setState({loggedIn:!1})})),this.player.on("account_error",(function(e){console.error(e)})),this.player.on("playback_error",(function(e){console.error(e)})),this.player.on("player_state_changed",(function(t){e.state.clicked||e.player.pause(),e.onStateChanged(t)})),this.player.on("ready",function(){var t=Object(C.a)(d.a.mark((function t(o){var g;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g=o.device_id,console.log("Let the music play on!"),t.next=4,e.setState({deviceId:g});case 4:return t.next=6,e.transferPlaybackHere(g);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"onStateChanged",value:function(e){if(console.log(e),null!==e){var t=e.track_window,o=t.current_track,g=t.position,n=t.duration,a=o.name,s=o.album.name,r=o.album.images[1].url,m=o.artists.map((function(e){return e.name})).join(", "),p=!e.paused;this.setState({position:g,duration:n,trackName:a,albumName:s,albumImage:r,artistName:m,playing:p})}}},{key:"transferPlaybackHere",value:function(e){var t=this.state,o=t.token,g=t.uri;fetch("https://api.spotify.com/v1/me/player/play?device_id=".concat(e),{method:"PUT",headers:{authorization:"Bearer ".concat(o),"Content-Type":"application/json"},body:JSON.stringify({uris:[g]})}).then((function(e){console.log(e)}))}},{key:"onPlayClick",value:function(){this.player.togglePlay(),this.setState({clicked:!0}),this.props.startScroll()}},{key:"onStopClick",value:function(){this.player.nextTrack(),this.props.startScroll()}},{key:"render",value:function(){var e=this,t=this.state,o=t.artistName,g=t.trackName,a=t.albumName,s=t.albumImage,r=t.error,m=(t.position,t.duration,t.playing),p=t.clicked;return n.a.createElement(A.a,{inverted:!0},n.a.createElement("div",null,n.a.createElement("h2",null,"Now Playing")),r&&n.a.createElement("p",null,"Error: ",r),o?n.a.createElement("div",null,n.a.createElement("img",{src:s,alt:a}),n.a.createElement("p",null,"Artist: ",o),n.a.createElement("p",null,"Track: ",g),n.a.createElement("p",null,"Album: ",a),n.a.createElement(y.a.Group,{icon:!0},m&&p?n.a.createElement(y.a,{onClick:function(){return e.onStopClick()}},n.a.createElement(O.a,{name:"stop"})):n.a.createElement(y.a,{icon:!0,onClick:function(){return e.onPlayClick()}},n.a.createElement(O.a,{name:"play"})))):"Loading...")}}]),t}(g.Component),w=o(288),_=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(p.a)(this,Object(i.a)(t).call(this))).state={songId:"",loadedSong:[],searchResults:[],currentTime:"",chordsPerChordline:[],songDuration:0,totalChords:0,result:"Loading...",uri:"",timeouts:[]},e.selectSong=e.selectSong.bind(Object(f.a)(e)),e.fetchChords=e.fetchChords.bind(Object(f.a)(e)),e.fetchSongs=e.fetchSongs.bind(Object(f.a)(e)),e.startScroll=e.startScroll.bind(Object(f.a)(e)),e}return Object(c.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"fetchSongs",value:function(e){var t=this;w.getSpotifySongs(e,this.props.token).then((function(e){t.setState({songId:"",searchResults:e.data.tracks.items})}))}},{key:"selectSong",value:function(e,t,o,g,n){this.setState({songId:e,songDuration:g,songName:t,artistName:o,uri:n}),this.fetchChords(t,o)}},{key:"fetchChords",value:function(e,t){var o=this;this.setState({loadedSong:[]}),w.getSongChords(e).then((function(e){var g=e.data.objects.filter((function(e){return e.authors.some((function(e){return e.name===t}))}));o.setState({loadedSong:g}),console.log(g),0===g.length&&o.setState({result:"No Chords Available"}),o.getChordInfo(g[0])})).catch((function(e){console.log(e)}))}},{key:"getChordInfo",value:function(e){var t=[],o=G("#song-chords strong").length;G("#song-chords .chordline").map((function(e,o){t.push(G(o).find("strong").length)})),this.setState({chordsPerChordline:t,totalChords:o})}},{key:"startScroll",value:function(){var e=Object(C.a)(d.a.mark((function e(){var t,o,g,n,a,s,r,m,p,i,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,o=t.chordsPerChordline,g=t.songDuration,n=t.totalChords,a=t.timeouts,s=G("#song-chords"),r=[],m=0,p=0,a.length>0)a.forEach(clearTimeout),s.scrollTop(0),this.setState({timeouts:[]});else for(i=function(e){var t=g/n*o[e];r.push(t),p+=t,a.push(setTimeout((function(){m+=G(".chordline:eq(".concat(e,")")).height(),s.scrollTop(m)}),p))},c=0;c<o.length;c++)i(c);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state,o=t.songId,g=t.loadedSong,a=t.searchResults,s=t.songName,r=t.artistName,m=t.result,p=t.uri,i=this.props.token;return e=""!==o?n.a.createElement(A.a,{inverted:!0,placeholder:!0,size:"massive",style:{margin:"0 2em",width:"100vw",maxHeight:"70vh"}},n.a.createElement(k.a,{columns:2,stackable:!0,textAlign:"center"},n.a.createElement(S.a,{vertical:!0}),n.a.createElement(k.a.Row,{verticalAlign:"middle"},n.a.createElement(k.a.Column,null,n.a.createElement(F,{search:this.fetchSongs}),n.a.createElement(B,{token:i,uri:p,startScroll:this.startScroll})),n.a.createElement(k.a.Column,null,n.a.createElement(j.a,{as:"h2",dividing:!0,inverted:!0},"".concat(s," - ").concat(r)),0!==g.length?n.a.createElement("div",{id:"song-chords",dangerouslySetInnerHTML:{__html:g[0].body_chords_html}}):n.a.createElement("div",{id:"song-chords"},m))))):n.a.createElement("div",null,n.a.createElement(F,{search:this.fetchSongs}),n.a.createElement(v,{token:i,loadSong:this.selectSong,searchResults:a})),n.a.createElement("div",null,e)}}]),t}(g.Component),x=o(33),N=o.n(x),P={minify:!1,ext:".[mp3|ogg]",baseUrl:"../public/samples/",list:["bass-electric","bassoon","cello","clarinet","contrabass","flute","french-horn","guitar-acoustic","guitar-electric","guitar-nylon","harmonium","harp","organ","piano","saxophone","trombone","trumpet","tuba","violin","xylophone"],onload:null,setExt:function(e){var t;for(t=0;t<=this.list.length-1;t++)for(var o in this[this.list[t]])this[this.list[t]][o]=this[this.list[t]][o].replace(this.ext,e);return this.ext=e,console.log("sample extensions set to "+this.ext)},load:function(e){var t,o,g;if((t=e||{}).instruments=t.instruments||this.list,t.baseUrl=t.baseUrl||this.baseUrl,t.onload=t.onload||this.onload,t.ext&&(t.ext!=this.ext&&this.setExt(t.ext),t.ext=this.ext),o={},Array.isArray(t.instruments)){for(g=0;g<=t.instruments.length-1;g++){var n=this[t.instruments[g]];if(!0===this.minify||!0===t.minify){var a=1;Object.keys(n).length>=17&&(a=2),Object.keys(n).length>=33&&(a=4),Object.keys(n).length>=49&&(a=6);var s=Object.keys(n).filter((function(e,t){return t%a!=0}));s.forEach((function(e){delete n[e]}))}o[t.instruments[g]]=new N.a.Sampler(n,{baseUrl:t.baseUrl+t.instruments[g]+"/",onload:t.onload})}return o}return n=this[t.instruments],!0!==this.minify&&!0!==t.minify||(a=1,Object.keys(n).length>=17&&(a=2),Object.keys(n).length>=33&&(a=4),Object.keys(n).length>=49&&(a=6),(s=Object.keys(n).filter((function(e,t){return t%a!=0}))).forEach((function(e){delete n[e]}))),new N.a.Sampler(n,{baseUrl:t.baseUrl+t.instruments+"/",onload:t.onload})},"bass-electric":{"A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]","A#5":"As5.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]","C#5":"Cs5.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]",G5:"G5.[mp3|ogg]"},bassoon:{A3:"A3.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",E3:"E3.[mp3|ogg]",G1:"G1.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",A1:"A1.[mp3|ogg]",A2:"A2.[mp3|ogg]"},cello:{E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",B4:"B4.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]"},clarinet:{D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]",D5:"D5.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]",D2:"D2.[mp3|ogg]"},contrabass:{C1:"C1.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]",D1:"D1.[mp3|ogg]",E1:"E1.[mp3|ogg]",E2:"E2.[mp3|ogg]","F#0":"Fs0.[mp3|ogg]","F#1":"Fs1.[mp3|ogg]",G0:"G0.[mp3|ogg]","G#1":"Gs1.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]",A1:"A1.[mp3|ogg]","A#0":"As0.[mp3|ogg]",B2:"B2.[mp3|ogg]"},flute:{A5:"A5.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]"},"french-horn":{D2:"D2.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]",F2:"F2.[mp3|ogg]",F4:"F4.[mp3|ogg]",G1:"G1.[mp3|ogg]",A0:"A0.[mp3|ogg]",A2:"A2.[mp3|ogg]",C1:"C1.[mp3|ogg]",C3:"C3.[mp3|ogg]"},"guitar-acoustic":{F3:"F3.[mp3|ogg]","F#1":"Fs1.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]",G1:"G1.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]","G#1":"Gs1.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]",A1:"A1.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]","A#1":"As1.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]",B1:"B1.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]",D1:"D1.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]",E1:"E1.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",F1:"F1.[mp3|ogg]",F2:"F2.[mp3|ogg]"},"guitar-electric":{"D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]","D#5":"Ds5.[mp3|ogg]",E2:"E2.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]"},"guitar-nylon":{"F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]",G3:"G3.[mp3|ogg]",G5:"G3.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]","G#5":"Gs5.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]","A#5":"As5.[mp3|ogg]",B1:"B1.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",B4:"B4.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]","C#5":"Cs5.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D5:"D5.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]"},harmonium:{C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]","C#5":"Cs5.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]",D5:"D5.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]"},harp:{C5:"C5.[mp3|ogg]",D2:"D2.[mp3|ogg]",D4:"D4.[mp3|ogg]",D6:"D6.[mp3|ogg]",D7:"D7.[mp3|ogg]",E1:"E1.[mp3|ogg]",E3:"E3.[mp3|ogg]",E5:"E5.[mp3|ogg]",F2:"F2.[mp3|ogg]",F4:"F4.[mp3|ogg]",F6:"F6.[mp3|ogg]",F7:"F7.[mp3|ogg]",G1:"G1.[mp3|ogg]",G3:"G3.[mp3|ogg]",G5:"G5.[mp3|ogg]",A2:"A2.[mp3|ogg]",A4:"A4.[mp3|ogg]",A6:"A6.[mp3|ogg]",B1:"B1.[mp3|ogg]",B3:"B3.[mp3|ogg]",B5:"B5.[mp3|ogg]",B6:"B6.[mp3|ogg]",C3:"C3.[mp3|ogg]"},organ:{C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]","D#5":"Ds5.[mp3|ogg]","F#1":"Fs1.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]",A1:"A1.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]",C1:"C1.[mp3|ogg]",C2:"C2.[mp3|ogg]"},piano:{A0:"A0.[mp3|ogg]",A1:"A1.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]",A6:"A6.[mp3|ogg]","A#0":"As0.[mp3|ogg]","A#1":"As1.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]","A#5":"As5.[mp3|ogg]","A#6":"As6.[mp3|ogg]",B0:"B0.[mp3|ogg]",B1:"B1.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",B4:"B4.[mp3|ogg]",B5:"B5.[mp3|ogg]",B6:"B6.[mp3|ogg]",C0:"C0.[mp3|ogg]",C1:"C1.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]",C7:"C7.[mp3|ogg]","C#0":"Cs0.[mp3|ogg]","C#1":"Cs1.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]","C#5":"Cs5.[mp3|ogg]","C#6":"Cs6.[mp3|ogg]",D0:"D0.[mp3|ogg]",D1:"D1.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]",D5:"D5.[mp3|ogg]",D6:"D6.[mp3|ogg]","D#0":"Ds0.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]","D#5":"Ds5.[mp3|ogg]","D#6":"Ds6.[mp3|ogg]",E0:"E0.[mp3|ogg]",E1:"E1.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]",E6:"E6.[mp3|ogg]",F0:"F0.[mp3|ogg]",F1:"F1.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]",F5:"F5.[mp3|ogg]",F6:"F6.[mp3|ogg]","F#0":"Fs0.[mp3|ogg]","F#1":"Fs1.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]","F#6":"Fs6.[mp3|ogg]",G0:"G0.[mp3|ogg]",G1:"G1.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]",G5:"G5.[mp3|ogg]",G6:"G6.[mp3|ogg]","G#0":"Gs0.[mp3|ogg]","G#1":"Gs1.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]","G#5":"Gs5.[mp3|ogg]","G#6":"Gs6.[mp3|ogg]"},saxophone:{"D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]"},trombone:{"A#2":"As2.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]","C#1":"Cs1.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]",F1:"F1.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]","G#1":"Gs1.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","A#0":"As0.[mp3|ogg]","A#1":"As1.[mp3|ogg]"},trumpet:{C5:"C5.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]",G3:"G3.[mp3|ogg]",A2:"A2.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#3":"As3.[mp3|ogg]",C3:"C3.[mp3|ogg]"},tuba:{"A#1":"As1.[mp3|ogg]","A#2":"As2.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]",F0:"F0.[mp3|ogg]",F1:"F1.[mp3|ogg]",F2:"F2.[mp3|ogg]","A#0":"As0.[mp3|ogg]"},violin:{A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]",A6:"A6.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]",C7:"C7.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]",E6:"E6.[mp3|ogg]",G4:"G4.[mp3|ogg]",G5:"G5.[mp3|ogg]",G6:"G6.[mp3|ogg]"},xylophone:{C7:"C7.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]",G5:"G5.[mp3|ogg]",G6:"G6.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]"}},q=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(p.a)(this,Object(i.a)(t).call(this))).state={instrument:"",keys:[],setKeys:!1,playingKeys:new Map,firstNote:36},e._handleMouseDown=e._handleMouseDown.bind(Object(f.a)(e)),e._handleMouseUp=e._handleMouseUp.bind(Object(f.a)(e)),e._handleKeyDown=e._handleKeyDown.bind(Object(f.a)(e)),e._handleKeyUp=e._handleKeyUp.bind(Object(f.a)(e)),e.addKeys=e.addKeys.bind(Object(f.a)(e)),e}return Object(c.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({instrument:P.load({instruments:"piano",baseUrl:"samples/"}).toMaster()}),N.a.Buffer.on("load",(function(){G("#container").css({display:"block"}),G("#loading").css({display:"none"})})),this.setKeys||this.addKeys()}},{key:"addKeys",value:function(){this.setState({setKeys:!0});for(var e=this.state.firstNote,t=[],o=1;o<=36;o++){var g=void 0,n=void 0;o%12===1?(n=!0,g=!0):o%12===3?(n=!0,g=!0):o%12===5?n=!0:o%12===6?(n=!0,g=!0):o%12===8?(n=!0,g=!0):o%12===10?(n=!0,g=!0):o%12===0&&(n=!0),n?t.push({sharp:!!g,frequency:e++}):e++}this.setState({keys:t})}},{key:"_handleMouseDown",value:function(e){var t=e.target.dataset.freq;t&&this.state.instrument.triggerAttack(N.a.Frequency(t,"midi").toNote())}},{key:"_handleMouseUp",value:function(e){var t=e.target.dataset.freq;t&&this.state.instrument.triggerRelease(N.a.Frequency(t,"midi").toNote())}},{key:"getFrequency",value:function(e,t){switch(e){case"q":return t;case"2":return t+1;case"w":return t+2;case"3":return t+3;case"e":return t+4;case"r":return t+5;case"5":return t+6;case"t":return t+7;case"6":return t+8;case"y":return t+9;case"7":return t+10;case"u":return t+11;case"i":return t+12;case"9":return t+13;case"o":return t+14;case"0":return t+15;case"p":return t+16;case"[":return t+17;case"=":return t+18;case"z":return t+19;case"s":return t+20;case"x":return t+21;case"d":return t+22;case"c":return t+23;case"v":return t+24;case"g":return t+25;case"b":return t+26;case"h":return t+27;case"n":return t+28;case"m":return t+29;case"k":return t+30;case",":return t+31;case"l":return t+32;case".":return t+33;case";":return t+34;case"/":return t+35;default:return}}},{key:"_handleKeyDown",value:function(e){var t=this.state,o=t.playingKeys,g=t.firstNote;"Tab"===e.key&&e.preventDefault();var n=this.getFrequency(e.key,g);if(n&&"pressed"!==o.get(n))return this.state.instrument.triggerAttack(N.a.Frequency(n,"midi").toNote()),void this.setState(o.set(n,"pressed"))}},{key:"_handleKeyUp",value:function(e){var t=this.state,o=t.playingKeys,g=t.firstNote,n=this.getFrequency(e.key,g);if(n&&"pressed"===o.get(n))return this.state.instrument.triggerRelease(N.a.Frequency(n,"midi").toNote()),void this.setState(o.set(n,""))}},{key:"render",value:function(){var e=this.state.playingKeys;return n.a.createElement("div",{id:"content"},n.a.createElement("h3",{id:"loading"},"Loading..."),n.a.createElement("div",{id:"container"},n.a.createElement("ul",{id:"keyboard",onMouseDown:this._handleMouseDown,onMouseUp:this._handleMouseUp,onKeyDown:this._handleKeyDown,onKeyUp:this._handleKeyUp,tabIndex:"0"},this.state.keys.map((function(t){return n.a.createElement("li",{key:t.frequency,"data-freq":t.frequency,className:"key ".concat(e.has(t.frequency)?e.get(t.frequency):"")},t.sharp?n.a.createElement("div",{"data-freq":t.frequency+1,className:"black-key ".concat(e.get(t.frequency+1)?e.get(t.frequency+1):"")}):null)})))))}}]),t}(g.Component),I=(o(306),o(39)),K=o.n(I),U=(o(316),o(318),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(p.a)(this,Object(i.a)(t).call(this))).state={token:null},e}return Object(c.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=u.access_token;e&&this.setState({token:e}),K.a.loop((function(e){console.log(e.hands.length)})),K.a.loop({hand:function(e){console.log(e.screenPosition())}}).use("screenPosition")}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},!this.state.token&&n.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("a4b845d70a5244339736fe8ef1435399","&redirect_uri=").concat("http://localhost:3000/","&response_type=token")},"Login to Spotify"),this.state.token&&n.a.createElement(_,{token:this.state.token})),n.a.createElement(q,null))}}]),t}(g.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[164,1,2]]]);
//# sourceMappingURL=main.ea40429a.chunk.js.map