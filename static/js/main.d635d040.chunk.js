(window.webpackJsonpmusin=window.webpackJsonpmusin||[]).push([[0],{162:function(e,g,o){e.exports=o(316)},167:function(e,g,o){},285:function(e,g,o){var t=o(286);e.exports={getSpotifySongs:function(e,g){return t({method:"get",url:"https://api.spotify.com/v1/search",Accept:"application/json","Content-Type":"application/json",headers:{Authorization:"Bearer "+g},params:{q:e,type:"track"}})},getSongChords:function(e){return t({method:"get",url:"http://api.guitarparty.com/v2/songs/",headers:{"Guitarparty-Api-Key":"b2db9d393e085c59afb865bebd33b54b250a5dd0"},params:{query:e}})},getAudioInfo:function(e,g){return t({method:"get",url:"".concat("https://api.spotify.com/v1/","audio-analysis/").concat(e),Accept:"application/json","Content-Type":"application/json",headers:{Authorization:"Bearer "+g}})}}},303:function(e,g,o){},313:function(e,g,o){"use strict";(function(e){var g=o(39),t=o.n(g);(function(){var g;g=function(e){var g,o;return null==e&&(e={}),e.positioning||(e.positioning="absolute"),e.scale||(e.scale=1),e.scaleX||(e.scaleX=1),e.scaleY||(e.scaleY=1),e.scaleZ||(e.scaleZ=1),e.verticalOffset||(e.verticalOffset=0),6,-100,o={absolute:function(g){return[window.innerWidth/2+6*g[0]*e.scale*e.scaleX,window.innerHeight+-100+e.verticalOffset-6*g[1]*e.scale*e.scaleY,6*g[2]*e.scale*e.scaleZ]}},g=function(g,t){var n;return null==t&&(t=!1),n="function"===typeof e.positioning?e.positioning.call(this,g):o[e.positioning].call(this,g),t&&(this.screenPositionVec3=n),n},{hand:{screenPosition:function(e){return g.call(this,e||this.palmPosition,!e)}},pointable:{screenPosition:function(e){return g.call(this,e||this.tipPosition,!e)}}}},"undefined"!==typeof t.a&&t.a.Controller?t.a.Controller.plugin("screenPosition",g):e.exports.screenPosition=g}).call(void 0)}).call(this,o(314)(e))},316:function(e,g,o){"use strict";o.r(g);var t=o(0),n=o.n(t),s=o(38),a=o.n(s),m=(o(167),o(17)),p=o(18),r=o(19),i=o(20),c=o(21),l=window.location.hash.substring(1).split("&").reduce((function(e,g){if(g){var o=g.split("=");e[o[0]]=decodeURIComponent(o[1])}return e}),{});window.location.hash="";var u=l,h=o(15),d=o(327),C=o(317),A=function(e){function g(){return Object(m.a)(this,g),Object(r.a)(this,Object(i.a)(g).apply(this,arguments))}return Object(c.a)(g,e),Object(p.a)(g,[{key:"render",value:function(){var e,g=this.props,o=g.song,t=g.songId;return""!==t&&(e=n.a.createElement("div",null,n.a.createElement(d.a,{basic:!0,style:{padding:"0"}},n.a.createElement("iframe",{src:"https://open.spotify.com/embed/track/".concat(t),title:"player",id:"music-player",width:"300",height:"80",frameborder:"0",allowtransparency:"true",allow:"encrypted-media",tabIndex:"-1"})),n.a.createElement(C.a,{circular:!0,icon:"caret down",onClick:this.props.startScroll},"Start Scroll"))),n.a.createElement("div",null,e,0===o.length?null:n.a.createElement(d.a,{style:{width:"30vw",marginLeft:"9vw"}},o[0].chords.map((function(e){return n.a.createElement("img",{key:e.code,src:e.image_url,alt:e.name})}))))}}]),g}(t.Component),D=o(323),f=function(e){function g(){var e;return Object(m.a)(this,g),(e=Object(r.a)(this,Object(i.a)(g).call(this))).state={songQuery:null},e._handleSubmit=e._handleSubmit.bind(Object(h.a)(e)),e._handleChange=e._handleChange.bind(Object(h.a)(e)),e}return Object(c.a)(g,e),Object(p.a)(g,[{key:"_handleSubmit",value:function(e){e.preventDefault();var g=this.state.songQuery;this.props.search(g)}},{key:"_handleChange",value:function(e){this.setState({songQuery:e.target.value})}},{key:"render",value:function(){return n.a.createElement("form",{id:"search-song",onSubmit:this._handleSubmit},n.a.createElement("br",null),n.a.createElement("label",null,"Search Song: "),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(D.a,{size:"mini",type:"text",placeholder:"Real Name",onChange:this._handleChange,autoFocus:!0,tabIndex:"-1",action:!0},n.a.createElement("input",null),n.a.createElement(C.a,{size:"large",inverted:!0,color:"blue",type:"search",tabIndex:"-1"},"Search")))}}]),g}(t.Component),F=o(325),G=o(152),y=function(e){function g(){var e;return Object(m.a)(this,g),(e=Object(r.a)(this,Object(i.a)(g).call(this)))._handleClick=e._handleClick.bind(Object(h.a)(e)),e}return Object(c.a)(g,e),Object(p.a)(g,[{key:"_handleClick",value:function(e,g,o,t){this.props.loadSong(e,g,o,t)}},{key:"render",value:function(){var e=this,g=this.props.searchResults;return n.a.createElement(F.a,{animated:!0,divided:!0,inverted:!0,selection:!0,verticalAlign:"middle",style:{overflow:"auto",maxHeight:"50vh",width:"55vw",textAlign:"start"}},g.map((function(g){return n.a.createElement(F.a.Item,{key:g.id,id:g.id,className:"search-list",onClick:function(){return e._handleClick(g.id,g.name,g.artists[0].name,g.duration_ms)}},n.a.createElement(G.a,{avatar:!0,size:"tiny",verticalAlign:"middle",src:g.album.images[2].url,alt:g.album.name}),n.a.createElement(F.a.Content,null,n.a.createElement(F.a.Header,null,g.name),n.a.createElement(F.a.Description,null,g.artists[0].name)))})))}}]),g}(t.Component),E=o(32),b=o(328),v=o(324),k=o(329),S=o(285),j=function(e){function g(){var e;return Object(m.a)(this,g),(e=Object(r.a)(this,Object(i.a)(g).call(this))).state={songId:"",loadedSong:[],searchResults:[],currentTime:"",chordsPerChordline:[],songDuration:0,totalChords:0,result:"Loading..."},e.selectSong=e.selectSong.bind(Object(h.a)(e)),e.fetchChords=e.fetchChords.bind(Object(h.a)(e)),e.fetchSongs=e.fetchSongs.bind(Object(h.a)(e)),e.startScroll=e.startScroll.bind(Object(h.a)(e)),e}return Object(c.a)(g,e),Object(p.a)(g,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({currentTime:(new Date).getSeconds()})}),1e3)}},{key:"fetchSongs",value:function(e){var g=this;S.getSpotifySongs(e,this.props.token).then((function(e){g.setState({songId:"",searchResults:e.data.tracks.items})}))}},{key:"selectSong",value:function(e,g,o,t){this.setState({songId:e,songDuration:t,songName:g,artistName:o}),this.fetchChords(g,o)}},{key:"fetchChords",value:function(e,g){var o=this;this.setState({loadedSong:[]}),S.getSongChords(e).then((function(e){var t=e.data.objects.filter((function(e){return e.authors.some((function(e){return e.name===g}))}));o.setState({loadedSong:t}),0!==t.length&&o.setState({result:"No Chords Available"}),o.getChordInfo(t[0])})).catch((function(e){console.log(e)}))}},{key:"getChordInfo",value:function(e){var g=[],o=E("#song-chords strong").length;E("#song-chords .chordline").map((function(e,o){g.push(E(o).find("strong").length)})),this.setState({chordsPerChordline:g,totalChords:o})}},{key:"startScroll",value:function(){for(var e=this.state,g=e.chordsPerChordline,o=e.songDuration,t=e.totalChords,n=E("#song-chords"),s=[],a=0,m=0,p=function(e){var p=o/t*g[e];s.push(p),setTimeout((function(){a+=E(".chordline:eq(".concat(e,")")).height(),n.scrollTop(a)}),m+=p)},r=0;r<g.length;r++)p(r)}},{key:"render",value:function(){var e,g=this.state,o=g.songId,t=g.loadedSong,s=g.searchResults,a=g.songName,m=g.artistName,p=g.result,r=this.props.token;return e=""!==o?n.a.createElement(d.a,{inverted:!0,placeholder:!0,size:"massive",style:{margin:"0 2em",width:"100vw",maxHeight:"70vh"}},n.a.createElement(b.a,{columns:2,stackable:!0,textAlign:"center"},n.a.createElement(v.a,{vertical:!0}),n.a.createElement(b.a.Row,{verticalAlign:"middle"},n.a.createElement(b.a.Column,null,n.a.createElement(f,{search:this.fetchSongs}),n.a.createElement(A,{song:t,songId:o,startScroll:this.startScroll})),n.a.createElement(b.a.Column,null,n.a.createElement(k.a,{as:"h2",dividing:!0,inverted:!0},"".concat(a," - ").concat(m)),0!==t.length?n.a.createElement("div",{id:"song-chords",dangerouslySetInnerHTML:{__html:t[0].body_chords_html}}):n.a.createElement("div",{id:"song-chords"},p))))):n.a.createElement("div",null,n.a.createElement(f,{search:this.fetchSongs}),n.a.createElement(y,{token:r,loadSong:this.selectSong,searchResults:s})),n.a.createElement("div",null,e)}}]),g}(t.Component),B=o(33),O=o.n(B),w={minify:!1,ext:".[mp3|ogg]",baseUrl:"../public/samples/",list:["bass-electric","bassoon","cello","clarinet","contrabass","flute","french-horn","guitar-acoustic","guitar-electric","guitar-nylon","harmonium","harp","organ","piano","saxophone","trombone","trumpet","tuba","violin","xylophone"],onload:null,setExt:function(e){var g;for(g=0;g<=this.list.length-1;g++)for(var o in this[this.list[g]])this[this.list[g]][o]=this[this.list[g]][o].replace(this.ext,e);return this.ext=e,console.log("sample extensions set to "+this.ext)},load:function(e){var g,o,t;if((g=e||{}).instruments=g.instruments||this.list,g.baseUrl=g.baseUrl||this.baseUrl,g.onload=g.onload||this.onload,g.ext&&(g.ext!=this.ext&&this.setExt(g.ext),g.ext=this.ext),o={},Array.isArray(g.instruments)){for(t=0;t<=g.instruments.length-1;t++){var n=this[g.instruments[t]];if(!0===this.minify||!0===g.minify){var s=1;Object.keys(n).length>=17&&(s=2),Object.keys(n).length>=33&&(s=4),Object.keys(n).length>=49&&(s=6);var a=Object.keys(n).filter((function(e,g){return g%s!=0}));a.forEach((function(e){delete n[e]}))}o[g.instruments[t]]=new O.a.Sampler(n,{baseUrl:g.baseUrl+g.instruments[t]+"/",onload:g.onload})}return o}return n=this[g.instruments],!0!==this.minify&&!0!==g.minify||(s=1,Object.keys(n).length>=17&&(s=2),Object.keys(n).length>=33&&(s=4),Object.keys(n).length>=49&&(s=6),(a=Object.keys(n).filter((function(e,g){return g%s!=0}))).forEach((function(e){delete n[e]}))),new O.a.Sampler(n,{baseUrl:g.baseUrl+g.instruments+"/",onload:g.onload})},"bass-electric":{"A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]","A#5":"As5.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]","C#5":"Cs5.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]",G5:"G5.[mp3|ogg]"},bassoon:{A3:"A3.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",E3:"E3.[mp3|ogg]",G1:"G1.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",A1:"A1.[mp3|ogg]",A2:"A2.[mp3|ogg]"},cello:{E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",B4:"B4.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]"},clarinet:{D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]",D5:"D5.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]",D2:"D2.[mp3|ogg]"},contrabass:{C1:"C1.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]",D1:"D1.[mp3|ogg]",E1:"E1.[mp3|ogg]",E2:"E2.[mp3|ogg]","F#0":"Fs0.[mp3|ogg]","F#1":"Fs1.[mp3|ogg]",G0:"G0.[mp3|ogg]","G#1":"Gs1.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]",A1:"A1.[mp3|ogg]","A#0":"As0.[mp3|ogg]",B2:"B2.[mp3|ogg]"},flute:{A5:"A5.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]"},"french-horn":{D2:"D2.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]",F2:"F2.[mp3|ogg]",F4:"F4.[mp3|ogg]",G1:"G1.[mp3|ogg]",A0:"A0.[mp3|ogg]",A2:"A2.[mp3|ogg]",C1:"C1.[mp3|ogg]",C3:"C3.[mp3|ogg]"},"guitar-acoustic":{F3:"F3.[mp3|ogg]","F#1":"Fs1.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]",G1:"G1.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]","G#1":"Gs1.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]",A1:"A1.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]","A#1":"As1.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]",B1:"B1.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]",D1:"D1.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]",E1:"E1.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",F1:"F1.[mp3|ogg]",F2:"F2.[mp3|ogg]"},"guitar-electric":{"D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]","D#5":"Ds5.[mp3|ogg]",E2:"E2.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]"},"guitar-nylon":{"F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]",G3:"G3.[mp3|ogg]",G5:"G3.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]","G#5":"Gs5.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]","A#5":"As5.[mp3|ogg]",B1:"B1.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",B4:"B4.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]","C#5":"Cs5.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D5:"D5.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]"},harmonium:{C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]","C#5":"Cs5.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]",D5:"D5.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]"},harp:{C5:"C5.[mp3|ogg]",D2:"D2.[mp3|ogg]",D4:"D4.[mp3|ogg]",D6:"D6.[mp3|ogg]",D7:"D7.[mp3|ogg]",E1:"E1.[mp3|ogg]",E3:"E3.[mp3|ogg]",E5:"E5.[mp3|ogg]",F2:"F2.[mp3|ogg]",F4:"F4.[mp3|ogg]",F6:"F6.[mp3|ogg]",F7:"F7.[mp3|ogg]",G1:"G1.[mp3|ogg]",G3:"G3.[mp3|ogg]",G5:"G5.[mp3|ogg]",A2:"A2.[mp3|ogg]",A4:"A4.[mp3|ogg]",A6:"A6.[mp3|ogg]",B1:"B1.[mp3|ogg]",B3:"B3.[mp3|ogg]",B5:"B5.[mp3|ogg]",B6:"B6.[mp3|ogg]",C3:"C3.[mp3|ogg]"},organ:{C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]","D#5":"Ds5.[mp3|ogg]","F#1":"Fs1.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]",A1:"A1.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]",C1:"C1.[mp3|ogg]",C2:"C2.[mp3|ogg]"},piano:{A0:"A0.[mp3|ogg]",A1:"A1.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]",A6:"A6.[mp3|ogg]","A#0":"As0.[mp3|ogg]","A#1":"As1.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]","A#5":"As5.[mp3|ogg]","A#6":"As6.[mp3|ogg]",B0:"B0.[mp3|ogg]",B1:"B1.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",B4:"B4.[mp3|ogg]",B5:"B5.[mp3|ogg]",B6:"B6.[mp3|ogg]",C0:"C0.[mp3|ogg]",C1:"C1.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]",C7:"C7.[mp3|ogg]","C#0":"Cs0.[mp3|ogg]","C#1":"Cs1.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]","C#5":"Cs5.[mp3|ogg]","C#6":"Cs6.[mp3|ogg]",D0:"D0.[mp3|ogg]",D1:"D1.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]",D5:"D5.[mp3|ogg]",D6:"D6.[mp3|ogg]","D#0":"Ds0.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]","D#5":"Ds5.[mp3|ogg]","D#6":"Ds6.[mp3|ogg]",E0:"E0.[mp3|ogg]",E1:"E1.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]",E6:"E6.[mp3|ogg]",F0:"F0.[mp3|ogg]",F1:"F1.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]",F5:"F5.[mp3|ogg]",F6:"F6.[mp3|ogg]","F#0":"Fs0.[mp3|ogg]","F#1":"Fs1.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]","F#6":"Fs6.[mp3|ogg]",G0:"G0.[mp3|ogg]",G1:"G1.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]",G5:"G5.[mp3|ogg]",G6:"G6.[mp3|ogg]","G#0":"Gs0.[mp3|ogg]","G#1":"Gs1.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]","G#5":"Gs5.[mp3|ogg]","G#6":"Gs6.[mp3|ogg]"},saxophone:{"D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]"},trombone:{"A#2":"As2.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]","C#1":"Cs1.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]",F1:"F1.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]","G#1":"Gs1.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","A#0":"As0.[mp3|ogg]","A#1":"As1.[mp3|ogg]"},trumpet:{C5:"C5.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]",G3:"G3.[mp3|ogg]",A2:"A2.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#3":"As3.[mp3|ogg]",C3:"C3.[mp3|ogg]"},tuba:{"A#1":"As1.[mp3|ogg]","A#2":"As2.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]",F0:"F0.[mp3|ogg]",F1:"F1.[mp3|ogg]",F2:"F2.[mp3|ogg]","A#0":"As0.[mp3|ogg]"},violin:{A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]",A6:"A6.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]",C7:"C7.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]",E6:"E6.[mp3|ogg]",G4:"G4.[mp3|ogg]",G5:"G5.[mp3|ogg]",G6:"G6.[mp3|ogg]"},xylophone:{C7:"C7.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]",G5:"G5.[mp3|ogg]",G6:"G6.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]"}},_=function(e){function g(){var e;return Object(m.a)(this,g),(e=Object(r.a)(this,Object(i.a)(g).call(this))).state={instrument:"",keys:[],setKeys:!1,playingKeys:new Map,firstNote:36},e._handleMouseDown=e._handleMouseDown.bind(Object(h.a)(e)),e._handleMouseUp=e._handleMouseUp.bind(Object(h.a)(e)),e._handleKeyDown=e._handleKeyDown.bind(Object(h.a)(e)),e._handleKeyUp=e._handleKeyUp.bind(Object(h.a)(e)),e.addKeys=e.addKeys.bind(Object(h.a)(e)),e}return Object(c.a)(g,e),Object(p.a)(g,[{key:"componentDidMount",value:function(){this.setState({instrument:w.load({instruments:"piano",baseUrl:"samples/"}).toMaster()}),O.a.Buffer.on("load",(function(){E("#container").css({display:"block"}),E("#loading").css({display:"none"})})),this.setKeys||this.addKeys()}},{key:"addKeys",value:function(){this.setState({setKeys:!0});for(var e=this.state.firstNote,g=[],o=1;o<=36;o++){var t=void 0,n=void 0;o%12===1?(n=!0,t=!0):o%12===3?(n=!0,t=!0):o%12===5?n=!0:o%12===6?(n=!0,t=!0):o%12===8?(n=!0,t=!0):o%12===10?(n=!0,t=!0):o%12===0&&(n=!0),n?g.push({sharp:!!t,frequency:e++}):e++}this.setState({keys:g})}},{key:"_handleMouseDown",value:function(e){var g=e.target.dataset.freq;g&&(e.preventDefault(),this.state.instrument.triggerAttack(O.a.Frequency(g,"midi").toNote()))}},{key:"_handleMouseUp",value:function(e){var g=e.target.dataset.freq;g&&(e.preventDefault(),this.state.instrument.triggerRelease(O.a.Frequency(g,"midi").toNote()))}},{key:"getFrequency",value:function(e,g){switch(e){case"q":return g;case"2":return g+1;case"w":return g+2;case"3":return g+3;case"e":return g+4;case"r":return g+5;case"5":return g+6;case"t":return g+7;case"6":return g+8;case"y":return g+9;case"7":return g+10;case"u":return g+11;case"i":return g+12;case"9":return g+13;case"o":return g+14;case"0":return g+15;case"p":return g+16;case"[":return g+17;case"=":return g+18;case"z":return g+19;case"s":return g+20;case"x":return g+21;case"d":return g+22;case"c":return g+23;case"v":return g+24;case"g":return g+25;case"b":return g+26;case"h":return g+27;case"n":return g+28;case"m":return g+29;case"k":return g+30;case",":return g+31;case"l":return g+32;case".":return g+33;case";":return g+34;case"/":return g+35;default:return}}},{key:"_handleKeyDown",value:function(e){var g=this.state,o=g.playingKeys,t=g.firstNote;"Tab"===e.key&&e.preventDefault();var n=this.getFrequency(e.key,t);if(n&&"pressed"!==o.get(n))return this.state.instrument.triggerAttack(O.a.Frequency(n,"midi").toNote()),void this.setState(o.set(n,"pressed"))}},{key:"_handleKeyUp",value:function(e){var g=this.state,o=g.playingKeys,t=g.firstNote,n=this.getFrequency(e.key,t);if(n&&"pressed"===o.get(n))return this.state.instrument.triggerRelease(O.a.Frequency(n,"midi").toNote()),void this.setState(o.set(n,""))}},{key:"render",value:function(){var e=this.state.playingKeys;return n.a.createElement("div",{id:"content",onKeyDown:this._handleKeyDown,onKeyUp:this._handleKeyUp,tabIndex:"0"},n.a.createElement("h3",{id:"loading"},"Loading..."),n.a.createElement("div",{id:"container"},n.a.createElement("ul",{id:"keyboard",onMouseDown:this._handleMouseDown,onMouseUp:this._handleMouseUp},this.state.keys.map((function(g){return n.a.createElement("li",{key:g.frequency,"data-freq":g.frequency,className:"key ".concat(e.has(g.frequency)?e.get(g.frequency):"")},g.sharp?n.a.createElement("div",{"data-freq":g.frequency+1,className:"black-key ".concat(e.get(g.frequency+1)?e.get(g.frequency+1):"")}):null)})))))}}]),g}(t.Component),x=(o(303),o(39)),q=o.n(x),K=(o(313),o(315),function(e){function g(){var e;return Object(m.a)(this,g),(e=Object(r.a)(this,Object(i.a)(g).call(this))).state={token:null},e}return Object(c.a)(g,e),Object(p.a)(g,[{key:"componentDidMount",value:function(){var e=u.access_token;e&&this.setState({token:e}),q.a.loop((function(e){console.log(e.hands.length)})),q.a.loop({hand:function(e){console.log(e.screenPosition())}}).use("screenPosition")}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},!this.state.token&&n.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("a4b845d70a5244339736fe8ef1435399","&redirect_uri=").concat("https://victorzw895.github.io/musin/","&response_type=token")},"Login to Spotify"),this.state.token&&n.a.createElement(j,{token:this.state.token})),n.a.createElement(_,null))}}]),g}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(n.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[162,1,2]]]);
//# sourceMappingURL=main.d635d040.chunk.js.map