webpackJsonp([0],[,,,function(e,t,n){"use strict";var r=n(13),o=n.n(r),s=n(1),i=n(41);s.a.use(i.a);var a={score:0,bestScore:0},c={score:function(e){return e.score}},u={save:function(e){(0,e.commit)("saveState")},init:function(e){(0,e.commit)("init")}},l={addScore:function(e,t){e.score+=t,e.score>e.bestScore&&(e.bestScore=e.score)},saveState:function(e){console.log(e),localStorage.setItem("state",o()(e))},init:function(e){var t=JSON.parse(localStorage.getItem("state"));if(t){var n=t.score,r=t.bestScore;e.score=n,e.bestScore=r}}};t.a=new i.a.Store({state:a,getters:c,actions:u,mutations:l})},function(e,t,n){n(19);var r=n(0)(n(5),n(35),null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),o=(n.n(r),n(32)),s=n.n(o),i=n(28),a=n.n(i);t.default={name:"app",components:{gamehead:s.a,gamecontainer:a.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{cells:16}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(27),o=n.n(r),s=n(29),i=n.n(s);t.default={components:{grid:o.a,tiles:i.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(30),o=n.n(r);t.default={data:function(){return{tileslength:16,tiles:[],oldTiles:[],moved:!1,over:!1,map:{38:0,39:1,40:2,37:3,75:0,76:1,74:2,72:3,87:0,68:1,83:2,65:3}}},components:{row:o.a},created:function(){console.log(this.moveAndMerge([4,4,4,0],!1));for(var e=0;e<4;e++){this.tiles[e]=[];for(var t=0;t<4;t++)this.tiles[e][t]=null}this.gameInit(4)},mounted:function(){var e=this;document.addEventListener("keydown",function(t){var n=e.map[t.which];e.move(n)})},beforeUpdate:function(){if(this.moved&&!this.over){this.generateNewTile();var e=this;setTimeout(e.$forceUpdate,2e3),this.moved=!1}},methods:{gameInit:function(e){for(var t=0;t<e;t++){var n=Math.floor(4*Math.random()),r=Math.floor(4*Math.random());this.tiles[n][r]=this.randomNumber()}},randomNumber:function(){return 2+2*Math.round(Math.random())},move:function(e){var t=[],n=[];switch(e){case 3:for(var r=0;r<4;r++)t.push(this.moveAndMerge(this.tiles[r],!1));break;case 2:for(var o=0;o<4;o++){for(var s=[],i=0;i<4;i++)s.push(this.tiles[i][o]);n.push(this.moveAndMerge(s,!0))}for(var a=0;a<4;a++){for(var c=[],u=0;u<4;u++)c.push(n[u][a]);t.push(c)}break;case 1:for(var l=0;l<4;l++)t.push(this.moveAndMerge(this.tiles[l],!0));break;case 0:for(var f=0;f<4;f++){for(var s=[],i=0;i<4;i++)s.push(this.tiles[i][f]);n.push(this.moveAndMerge(s,!1))}for(var d=0;d<4;d++){for(var v=[],h=0;h<4;h++)v.push(n[h][d]);t.push(v)}}for(var p=0;p<4;p++)for(var m=0;m<4;m++)t[p][m]!=this.tiles[p][m]&&(this.moved=!0);this.oldTiles=this.tiles,this.tiles=t,t=[]},moveAndMerge:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?3:0,r=new Array(4).fill(null),o=!1;if(t)for(var s=3;s>-1;s--)null!==e[s]&&(e[s]!=r[n+1]||o?r[n--]=+e[s]:(r[n+1]*=2,o=!0,this.$store.commit("addScore",r[n+1])));else for(var s=0;s<4;s++)null!==e[s]&&(+e[s]!=+r[n-1]||o?r[n++]=+e[s]:(r[n-1]*=2,this.$store.commit("addScore",r[n-1]),o=!0));return r},generateNewTile:function(){var e,t;if(function(e){return e.some(function(e){return e.some(function(e){return null==e})})}(this.tiles)){do{e=Math.floor(4*Math.random()),t=Math.floor(4*Math.random())}while(null!==this.tiles[e][t]);this.tiles[e][t]=Math.random()>.5?"2":"4"}else this.over=!0}},watch:{over:function(){alert("哈哈，挂了吧")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(31),o=n.n(r);t.default={data:function(){return{colormap:{2:"#eee4da",4:"#ede0c8",8:"#f2b179",16:"#f59563",32:"#f67c5f",64:"#f65e3b",128:"#edcf72",256:"#edcc61",512:"#edc850",1024:"#edc53f",2048:"#edc22e",4096:"#3c3a32",8192:"#3c3a32"}}},props:{row:null},components:{tile:o.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{merged:!1,colormap:{2:"#eee4da",4:"#ede0c8",8:"#f2b179",16:"#f59563",32:"#f67c5f",64:"#f65e3b",128:"#edcf72",256:"#edcc61",512:"#edc850",1024:"#edc53f",2048:"#edc22e",4096:"#3c3a32",8192:"#3c3a32"}}},props:["tile"],computed:{style:function(){return{backgroundColor:this.colormap[this.tile],color:this.tile>4?"#f9f6f2":"#333",fontSize:this.tile>1e3?"36px":"48px"}}},watch:{tile:function(e,t){var n=this;e&&t&&e!==t&&(this.merged=!0,setTimeout(function(){return n.merged=!1},100))}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{addScore:0}},computed:{score:function(){return this.$store.state.score},bestScore:function(){return this.$store.state.bestScore}},watch:{score:function(e,t){var n=this;console.log(this.$refs.pplus),clearTimeout(this.timer),this.addScore=e-t,this.timer=setTimeout(function(){return n.addScore=0},1e3)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(4),s=n.n(o),i=n(3),a=new r.a({el:"#app",store:i.a,template:"<App/>",components:{App:s.a}});window.onload=function(){a.$store.dispatch("init")},window.onbeforeunload=function(){a.$store.dispatch("save")}},,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t,n){n(21);var r=n(0)(n(6),n(37),null,null);e.exports=r.exports},function(e,t,n){n(23);var r=n(0)(n(7),n(39),null,null);e.exports=r.exports},function(e,t,n){n(22);var r=n(0)(n(8),n(38),null,null);e.exports=r.exports},function(e,t,n){n(20);var r=n(0)(n(9),n(36),null,null);e.exports=r.exports},function(e,t,n){n(17);var r=n(0)(n(10),n(33),null,null);e.exports=r.exports},function(e,t,n){n(18);var r=n(0)(n(11),n(34),"data-v-0b6b2a5e",null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"tile",class:{new:"string"==typeof e.tile,merged:e.merged},style:e.style},[e._v("\r\n"+e._s(e.tile?e.tile:"")+"\r\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gamehead"},[n("h1",{staticClass:"title"},[e._v("2048")]),e._v(" "),n("div",[n("span",{staticClass:"score"},[n("span",{staticClass:"type"},[e._v("score")]),e._v(" "+e._s(e.score)+"\n    "),n("span",{ref:"plus",class:{addScore:e.addScore},staticStyle:{position:"absolute",right:"30px",opacity:"0",color:"#444","font-size":"16px"}},[e._v("+"+e._s(e.addScore))])]),e._v(" "),n("span",{staticClass:"score"},[n("span",{staticClass:"type"},[e._v("best")]),e._v(" "+e._s(e.bestScore))])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("gamehead"),e._v(" "),n("gamecontainer")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.row,function(e,t){return n("tile",{key:t,attrs:{tile:e}})}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid"},e._l(e.cells,function(e){return n("div",{key:e,staticClass:"cell"})}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tiles",on:{keydown:e.move}},e._l(e.tiles,function(e,t){return n("row",{key:t,staticClass:"row",attrs:{row:e,from:-2}})}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-container"},[n("grid"),e._v(" "),n("tiles")],1)},staticRenderFns:[]}}],[12]);
//# sourceMappingURL=app.1bb0d8c28f9b0a5b47b5.js.map