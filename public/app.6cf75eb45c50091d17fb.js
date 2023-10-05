(()=>{"use strict";var t={307:(t,e,i)=>{i.r(e)},225:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=i(882);e.default=class{x;y;maxX;maxY;minX;minY;#t;#e;constructor(t,e,i,s,n,o,l){this.x=t,this.y=e,this.maxX=-i,this.maxY=-n,this.minX=-s+l.width,this.minY=-o+l.height,this.#t=l.width/2-19,this.#e=l.height/2-19}lookAt(t,e){this.x=(0,s.constrain)((0,s.lerp)(this.x,this.#t-t,.1),this.minX,this.maxX),this.y=(0,s.constrain)((0,s.lerp)(this.y,this.#e-e,.1),this.minY,this.maxY)}}},196:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=class{x;y;radius;constructor(t,e,i){this.x=t,this.y=e,this.radius=i}}},778:function(t,e,i){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=s(i(196));Math.PI;class o extends n.default{angle;hitpoints;knockback;movementSpeed;punchAnimationOffset;punchSide;punchSpeed;swingAnimationOffset;swingDelay;swingDirection;swingSpeed;weaponIndex;worldXMax;worldXMin;worldYMax;worldYMin;xVelocity;yVelocity;keys;#i=Math.PI;#s=90;constructor(t,e){super(t,e,19),this.angle=0,this.hitpoints=3,this.knockback=.5,this.movementSpeed=2,this.punchAnimationOffset=0,this.punchSide=!1,this.punchSpeed=.3333,this.swingAnimationOffset=0,this.swingDelay=0,this.swingDirection=!1,this.swingSpeed=6,this.weaponIndex=0,this.xVelocity=0,this.yVelocity=0,this.keys=[]}bindEventListeners(t,e){t.tabIndex=1,t.addEventListener("mousemove",(t=>{this.angle=Math.atan2(t.offsetY-this.y-e.y,t.offsetX-this.x-e.x)+Math.PI/2}),{passive:!0}),t.addEventListener("keydown",(t=>{this.keys[t.keyCode]=!0})),t.addEventListener("keyup",(t=>{delete this.keys[t.keyCode]}))}setWorldBounds(t,e,i,s){this.worldXMin=t,this.worldXMax=e,this.worldYMin=i,this.worldYMax=s}update(t){this.xVelocity=0,this.yVelocity=0,this.keys[49]?this.weaponIndex=0:this.keys[50]&&(this.weaponIndex=1),this.keys[65]&&(this.xVelocity-=this.movementSpeed),this.keys[87]&&(this.yVelocity-=this.movementSpeed),this.keys[83]&&(this.yVelocity+=this.movementSpeed),this.keys[68]&&(this.xVelocity+=this.movementSpeed),this.x+=this.xVelocity,this.y+=this.yVelocity,this.x<this.worldXMin+this.radius?this.x=this.worldXMin+this.radius:this.x>this.worldXMax-this.radius&&(this.x=this.worldXMax-this.radius),this.y<this.worldYMin+this.radius?this.y=this.worldYMin+this.radius:this.y>this.worldYMax-this.radius&&(this.y=this.worldYMax-this.radius),t.forEach((t=>t.resolveCircleCollision(this)))}render(t,e){t.save(),t.translate(this.x,this.y),t.rotate(this.angle),this.weaponIndex,t.fillStyle="rgb(245, 216, 166)",t.strokeStyle="#000",t.lineWidth=3,this.punchSide?(t.beginPath(),t.ellipse(12,-16-this.punchAnimationOffset,6,6,0,0,2*Math.PI),t.closePath(),t.fill(),t.stroke(),t.beginPath(),t.ellipse(-12,-16,6,6,0,0,2*Math.PI),t.closePath(),t.fill(),t.stroke()):(t.beginPath(),t.ellipse(12,-16,6,6,0,0,2*Math.PI),t.closePath(),t.fill(),t.stroke(),t.beginPath(),t.ellipse(-12,-16-this.punchAnimationOffset,6,6,0,0,2*Math.PI),t.closePath(),t.fill(),t.stroke()),t.drawImage(e.player_body,-this.radius,-this.radius),t.restore()}}e.default=o},530:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=class{x;y;width;height;constructor(t,e,i,s){this.x=t,this.y=e,this.width=i,this.height=s}resolveCircleCollision(t){let e=Math.max(this.x,Math.min(t.x,this.x+this.width)),i=Math.max(this.y,Math.min(t.y,this.y+this.height)),s=t.x-e,n=t.y-i,o=Math.sqrt(s*s+n*n);if(o<=t.radius&&0!==o){let e=t.radius-o;t.x+=e*s/o,t.y+=e*n/o}}}},752:function(t,e,i){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=s(i(225)),o=s(i(778)),l=s(i(530));i(307);const h=i(882);let r={};const a={player_skin_tone:[245,216,166],asset_background:[0,0,0,0]},d=document.getElementById("game-wrapper"),c=document.createElement("canvas"),u=c.getContext("2d");c.width=600,c.height=600,d.appendChild(c);let f=[];for(let t=0;t<20;t++)f.push(new l.default(1200*Math.random(),1200*Math.random(),30*Math.random()+10,30*Math.random()+10));const y=new n.default(0,0,0,1200,0,1200,c),p=new o.default(300,300);let g;p.bindEventListeners(c,y);let m=0;function x(){u.save(),u.translate(y.x+m*Math.random()|0,y.y+m*Math.random()|0),m&&(m*=m>1?.8:0),u.drawImage(r.background,0,0),f.forEach((t=>{u.fillStyle="#000",u.fillRect(t.x,t.y,t.width,t.height)})),p.render(u,r),u.restore(),y.lookAt(p.x,p.y),p.update(f)}let w=function(){let t={background(){let t=document.createElement("canvas");t.width=1200,t.height=1200;let e=t.getContext("2d");e.fillStyle="rgb(31, 105, 27)",e.strokeStyle="rgb(21, 84, 17)";for(let t=0;t<30;t++)for(let i=0;i<30;i++)e.fillRect(44*i,44*t,44,44),e.strokeRect(44*i,44*t,44,44);return t},crate:()=>(u.fillStyle=`rgb(${a.asset_background.join(",")})`,u.fillRect(0,0,c.width,c.height),u.strokeStyle="rgb(94, 54, 14)",u.lineWidth=3,u.fillStyle="rgb(158, 117, 76)",u.fillStyle="rgb(158, 117, 76)",u.fillRect(1,1,61,61),u.strokeRect(1,1,61,61),u.fillRect(12,12,40,40),u.strokeRect(12,12,40,40),u.fillRect(12,12,10,40),u.strokeRect(12,12,10,40),u.fillRect(22,12,10,40),u.strokeRect(22,12,10,40),u.fillRect(32,12,10,40),u.strokeRect(32,12,10,40),u.beginPath(),u.moveTo(3,3),u.lineTo(12,12),u.stroke(),u.beginPath(),u.moveTo(60,60),u.lineTo(51,51),u.stroke(),u.beginPath(),u.moveTo(60,3),u.lineTo(51,12),u.stroke(),u.beginPath(),u.moveTo(3,60),u.lineTo(12,51),u.stroke(),(0,h.get)(c,0,0,64,64)),player_body:()=>(u.fillStyle=`rgb(${a.asset_background.join(",")})`,u.fillRect(0,0,c.width,c.height),u.strokeStyle="#000",u.lineWidth=3,u.fillStyle=`rgb(${a.player_skin_tone.join(",")})`,u.beginPath(),u.ellipse(19,19,17,17,0,0,2*Math.PI),u.closePath(),u.fill(),u.stroke(),u.fillStyle="#000",u.beginPath(),u.ellipse(14,18,3.5,3.5,0,0,2*Math.PI),u.closePath(),u.fill(),u.beginPath(),u.ellipse(26,18,3.5,3.5,0,0,2*Math.PI),u.closePath(),u.fill(),(0,h.get)(c,0,0,38,38))},e=0,i=Object.keys(t);return function(){if(e<i.length){let s=i[e++];r[s]=t[s](),u.clearRect(0,0,c.width,c.height)}else g=x}}();g=w;const k=1e3/60;let M=window.performance.now();requestAnimationFrame((function t(e){requestAnimationFrame(t);let i=e-M;i>k&&(M=e-i%k,g())}))},882:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.get=e.constrain=e.slerp=e.lerp=void 0,e.lerp=function(t,e,i){return(e-t)*i+t},e.slerp=function(t,e,i){let s=(e=(e%360+360)%360)-(t=(t%360+360)%360);return s>180?s-=360:s<-180&&(s+=360),t+s*i},e.constrain=function(t,e,i){return t>i?i:t<e?e:t},e.get=function(t,e,i,s,n){let o=document.createElement("canvas");return o.width=s,o.height=n,o.getContext("2d").drawImage(t,e,i,s,n,0,0,s,n),o}}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,i),o.exports}i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};i(752)})();