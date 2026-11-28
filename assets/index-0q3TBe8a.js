(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,k=1029,A=1030,j=1031,ee=1033,M=33776,N=33777,te=33778,P=33779,ne=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,ce=37496,F=37488,le=37489,ue=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,Me=36286,I=2300,Ne=2301,Pe=2302,Fe=2303,L=2400,Ie=2401,R=2402,Le=2500,Re=3200,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=2e3;function Ke(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Je(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ye(){let e=Je(`canvas`);return e.style.display=`block`,e}var Xe={};function Ze(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Qe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function $e(...e){let t=e.join(` `);t in Xe||(Xe[t]=!0,z(...e))}function et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var tt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},rt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),it=1234567,at=Math.PI/180,ot=180/Math.PI;function st(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(rt[e&255]+rt[e>>8&255]+rt[e>>16&255]+rt[e>>24&255]+`-`+rt[t&255]+rt[t>>8&255]+`-`+rt[t>>16&15|64]+rt[t>>24&255]+`-`+rt[n&63|128]+rt[n>>8&255]+`-`+rt[n>>16&255]+rt[n>>24&255]+rt[r&255]+rt[r>>8&255]+rt[r>>16&255]+rt[r>>24&255]).toLowerCase()}function ct(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t){return(e%t+t)%t}function ut(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function dt(e,t,n){return e===t?0:(n-e)/(t-e)}function ft(e,t,n){return(1-n)*e+n*t}function pt(e,t,n,r){return ft(e,t,1-Math.exp(-n*r))}function mt(e,t=1){return t-Math.abs(lt(e,t*2)-t)}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function _t(e,t){return e+Math.floor(Math.random()*(t-e+1))}function vt(e,t){return e+Math.random()*(t-e)}function yt(e){return e*(.5-Math.random())}function bt(e){e!==void 0&&(it=e);let t=it+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xt(e){return e*at}function St(e){return e*ot}function Ct(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function wt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Tt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Et(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:z(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var kt={DEG2RAD:at,RAD2DEG:ot,generateUUID:st,clamp:ct,euclideanModulo:lt,mapLinear:ut,inverseLerp:dt,lerp:ft,damp:pt,pingpong:mt,smoothstep:ht,smootherstep:gt,randInt:_t,randFloat:vt,randFloatSpread:yt,seededRandom:bt,degToRad:xt,radToDeg:St,isPowerOfTwo:Ct,ceilPowerOfTwo:wt,floorPowerOfTwo:Tt,setQuaternionFromProperEuler:Et,normalize:Ot,denormalize:Dt},V=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jt.copy(this).projectOnVector(e),this.sub(jt)}reflect(e){return this.sub(jt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jt=new H,Mt=new At,Nt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return $e(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Pt.makeScale(e,t)),this}rotate(e){return $e(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Pt.makeRotation(-e)),this}translate(e,t){return $e(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Pt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pt=new Nt,Ft=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),It=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lt(){let e={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return $e(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return $e(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Be]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var Rt=Lt();function zt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Bt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Vt,Ht=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vt===void 0&&(Vt=Je(`canvas`)),Vt.width=e.width,Vt.height=e.height;let t=Vt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Vt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Je(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=zt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(zt(t[e]/255)*255):t[e]=zt(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ut=0,Wt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=st(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Gt(r[t].image)):e.push(Gt(r[t]))}else e=Gt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Gt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ht.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var Kt=0,qt=new H,Jt=class e extends nt{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=st(),this.name=``,this.source=new Wt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qt).x}get height(){return this.source.getSize(qt).y}get depth(){return this.source.getSize(qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=300,Jt.DEFAULT_ANISOTROPY=1;var Yt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xt=class extends nt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];let r=new Jt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Wt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Zt=class extends Xt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qt=class extends Jt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},$t=class extends Jt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},U=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/en.setFromMatrixColumn(e,0).length(),i=1/en.setFromMatrixColumn(e,1).length(),a=1/en.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nn,e,rn)}lookAt(e,t,n){let r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),an.crossVectors(n,sn),an.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),an.crossVectors(n,sn)),an.normalize(),on.crossVectors(sn,an),r[0]=an.x,r[4]=on.x,r[8]=sn.x,r[1]=an.y,r[5]=on.y,r[9]=sn.y,r[2]=an.z,r[6]=on.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*ee+c*P,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*ee+f*P,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*ee+g*P,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*ee+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=en.set(r[0],r[1],r[2]).length(),o=en.set(r[4],r[5],r[6]).length(),s=en.set(r[8],r[9],r[10]).length();i<0&&(a=-a),tn.copy(this);let c=1/a,l=1/o,u=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=l,tn.elements[5]*=l,tn.elements[6]*=l,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},en=new H,tn=new U,nn=new H(0,0,0),rn=new H(1,1,1),an=new H,on=new H,sn=new H,cn=new U,ln=new At,un=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ct(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ln.setFromEuler(this),this.setFromQuaternion(ln,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER=`XYZ`;var dn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},fn=0,pn=new H,mn=new At,hn=new U,gn=new H,_n=new H,vn=new H,yn=new At,bn=new H(1,0,0),xn=new H(0,1,0),Sn=new H(0,0,1),Cn={type:`added`},wn={type:`removed`},Tn={type:`childadded`,child:null},En={type:`childremoved`,child:null},Dn=class e extends nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=st(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new un,r=new At,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new U},normalMatrix:{value:new Nt}}),this.matrix=new U,this.matrixWorld=new U,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(bn,e)}rotateY(e){return this.rotateOnAxis(xn,e)}rotateZ(e){return this.rotateOnAxis(Sn,e)}translateOnAxis(e,t){return pn.copy(e).applyQuaternion(this.quaternion),this.position.add(pn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bn,e)}translateY(e){return this.translateOnAxis(xn,e)}translateZ(e){return this.translateOnAxis(Sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gn.copy(e):gn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(_n,gn,this.up):hn.lookAt(gn,_n,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),mn.setFromRotationMatrix(hn),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,e,vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,yn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Dn.DEFAULT_UP=new H(0,1,0),Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends Dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},kn={type:`move`},An=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new On;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Nn={h:0,s:0,l:0};function Pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Rt.workingColorSpace){if(e=lt(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Pn(i,r,e+1/3),this.g=Pn(i,r,e),this.b=Pn(i,r,e-1/3)}return Rt.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=jn[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}copyLinearToSRGB(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Rt.workingToColorSpace(Fn.copy(this),e),Math.round(ct(Fn.r*255,0,255))*65536+Math.round(ct(Fn.g*255,0,255))*256+Math.round(ct(Fn.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,r=Fn.g,i=Fn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ze){Rt.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,r=Fn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Nn);let n=ft(Mn.h,Nn.h,t),r=ft(Mn.s,Nn.s,t),i=ft(Mn.l,Nn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new W;W.NAMES=jn;var In=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new W(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Ln=class extends Dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new H,zn=new H,Bn=new H,Vn=new H,Hn=new H,Un=new H,Wn=new H,Gn=new H,Kn=new H,qn=new H,Jn=new Yt,Yn=new Yt,Xn=new Yt,Zn=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Rn.subVectors(r,t),zn.subVectors(n,t),Bn.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(zn),s=Rn.dot(Bn),c=zn.dot(zn),l=zn.dot(Bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)!==null&&Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Vn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Vn.x),s.addScaledVector(a,Vn.y),s.addScaledVector(o,Vn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Jn.setScalar(0),Yn.setScalar(0),Xn.setScalar(0),Jn.fromBufferAttribute(e,t),Yn.fromBufferAttribute(e,n),Xn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jn,i.x),a.addScaledVector(Yn,i.y),a.addScaledVector(Xn,i.z),a}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),zn.subVectors(e,t),Rn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Rn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Hn.subVectors(r,n),Un.subVectors(i,n),Gn.subVectors(e,n);let s=Hn.dot(Gn),c=Un.dot(Gn);if(s<=0&&c<=0)return t.copy(n);Kn.subVectors(e,r);let l=Hn.dot(Kn),u=Un.dot(Kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Hn,a);qn.subVectors(e,i);let f=Hn.dot(qn),p=Un.dot(qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Un,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Hn,a).addScaledVector(Un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,er):er.fromBufferAttribute(r,t),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),lr.subVectors(this.max,cr),nr.subVectors(e.a,cr),rr.subVectors(e.b,cr),ir.subVectors(e.c,cr),ar.subVectors(rr,nr),or.subVectors(ir,rr),sr.subVectors(nr,ir);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-sr.z,sr.y,ar.z,0,-ar.x,or.z,0,-or.x,sr.z,0,-sr.x,-ar.y,ar.x,0,-or.y,or.x,0,-sr.y,sr.x,0];return!fr(t,nr,rr,ir,lr)||(t=[1,0,0,0,1,0,0,0,1],!fr(t,nr,rr,ir,lr))?!1:(ur.crossVectors(ar,or),t=[ur.x,ur.y,ur.z],fr(t,nr,rr,ir,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new H,new H,new H,new H,new H,new H,new H,new H],er=new H,tr=new Qn,nr=new H,rr=new H,ir=new H,ar=new H,or=new H,sr=new H,cr=new H,lr=new H,ur=new H,dr=new H;function fr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){dr.fromArray(e,a);let o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),s=t.dot(dr),c=n.dot(dr),l=r.dot(dr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var pr=new H,mr=new V,hr=0,gr=class extends nt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix4(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyNormalMatrix(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.transformDirection(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},_r=class extends gr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},vr=class extends gr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},yr=class extends gr{constructor(e,t,n){super(new Float32Array(e),t,n)}},br=new Qn,xr=new H,Sr=new H,Cr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?br.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Sr)),this.expandByPoint(xr.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wr=0,Tr=new U,Er=new Dn,Dr=new H,Or=new Qn,kr=new Qn,Ar=new H,jr=class e extends nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=st(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ke(e)?vr:_r)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Nt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tr.makeRotationFromQuaternion(e),this.applyMatrix4(Tr),this}rotateX(e){return Tr.makeRotationX(e),this.applyMatrix4(Tr),this}rotateY(e){return Tr.makeRotationY(e),this.applyMatrix4(Tr),this}rotateZ(e){return Tr.makeRotationZ(e),this.applyMatrix4(Tr),this}translate(e,t,n){return Tr.makeTranslation(e,t,n),this.applyMatrix4(Tr),this}scale(e,t,n){return Tr.makeScale(e,t,n),this.applyMatrix4(Tr),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new yr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(this.boundingBox.min,Or.min),this.boundingBox.expandByPoint(Ar),Ar.addVectors(this.boundingBox.max,Or.max),this.boundingBox.expandByPoint(Ar)):(this.boundingBox.expandByPoint(Or.min),this.boundingBox.expandByPoint(Or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(Or.min,kr.min),Or.expandByPoint(Ar),Ar.addVectors(Or.max,kr.max),Or.expandByPoint(Ar)):(Or.expandByPoint(kr.min),Or.expandByPoint(kr.max))}Or.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ar.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ar));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ar.fromBufferAttribute(a,t),o&&(Dr.fromBufferAttribute(e,t),Ar.add(Dr)),r=Math.max(r,n.distanceToSquared(Ar))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new gr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new gr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ar.fromBufferAttribute(e,t),Ar.normalize(),e.setXYZ(t,Ar.x,Ar.y,Ar.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new gr(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=We,this.updateRanges=[],this.version=0,this.uuid=st()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=st()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=st()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Nr=new H,Pr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix4(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyNormalMatrix(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.transformDirection(e),this.setXYZ(t,Nr.x,Nr.y,Nr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ze(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new gr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ze(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fr=new H,Ir=new H,Lr=new Nt,Rr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Fr.subVectors(n,t).cross(Ir.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Fr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lr.getNormalMatrix(e),r=this.coplanarPoint(Fr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zr=0,Br=class extends nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zr++}),this.uuid=st(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Rr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Vr=class extends Br{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hr,Ur=new H,Wr=new H,Gr=new H,Kr=new V,qr=new V,Jr=new U,Yr=new H,Xr=new H,Zr=new H,Qr=new V,$r=new V,ei=new V,ti=class extends Dn{constructor(e=new Vr){if(super(),this.isSprite=!0,this.type=`Sprite`,Hr===void 0){Hr=new jr;let e=new Mr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute(`position`,new Pr(e,3,0,!1)),Hr.setAttribute(`uv`,new Pr(e,2,3,!1))}this.geometry=Hr,this.material=e,this.center=new V(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&B(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Wr.setFromMatrixScale(this.matrixWorld),Jr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Gr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ni(Yr.set(-.5,-.5,0),Gr,a,Wr,r,i),ni(Xr.set(.5,-.5,0),Gr,a,Wr,r,i),ni(Zr.set(.5,.5,0),Gr,a,Wr,r,i),Qr.set(0,0),$r.set(1,0),ei.set(1,1);let o=e.ray.intersectTriangle(Yr,Xr,Zr,!1,Ur);if(o===null&&(ni(Xr.set(-.5,.5,0),Gr,a,Wr,r,i),$r.set(0,1),o=e.ray.intersectTriangle(Yr,Zr,Xr,!1,Ur),o===null))return;let s=e.ray.origin.distanceTo(Ur);s<e.near||s>e.far||t.push({distance:s,point:Ur.clone(),uv:Zn.getInterpolation(Ur,Yr,Xr,Zr,Qr,$r,ei,new V),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ni(e,t,n,r,i,a){Kr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?qr.copy(Kr):(qr.x=a*Kr.x-i*Kr.y,qr.y=i*Kr.x+a*Kr.y),e.copy(t),e.x+=qr.x,e.y+=qr.y,e.applyMatrix4(Jr)}var ri=new H,ii=new H,ai=new H,oi=new H,si=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ii.copy(e).add(t).multiplyScalar(.5),ai.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ii);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ai),o=oi.dot(this.direction),s=-oi.dot(ai),c=oi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ii).addScaledVector(ai,d),f}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),r=ri.dot(ri)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,te=C/w,P=1/w,ne=T-N*D,re=E-te*D,ie=O-N*A,ae=k-te*A,oe=j-N*M,se=ee-te*M,ce=oe*ae-se*ie,F=ne*se-re*oe,le=ie*re-ae*ne;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let de=P*(ce*D+F*A+le*M);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ci=class extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},li=new U,ui=new si,di=new Cr,fi=new H,pi=new H,mi=new H,hi=new H,gi=new H,_i=new H,vi=new H,yi=new H,G=class extends Dn{constructor(e=new jr,t=new ci){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){_i.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(gi.fromBufferAttribute(s,e),a?_i.addScaledVector(gi,r):_i.addScaledVector(gi.sub(t),r))}t.add(_i)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),di.copy(n.boundingSphere),di.applyMatrix4(i),ui.copy(e.ray).recast(e.near),!(di.containsPoint(ui.origin)===!1&&(ui.intersectSphere(di,fi)===null||ui.origin.distanceToSquared(fi)>(e.far-e.near)**2))&&(li.copy(i).invert(),ui.copy(e.ray).applyMatrix4(li),(n.boundingBox===null||ui.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=xi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=xi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=xi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=xi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function bi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;yi.copy(s),yi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(yi);return l<n.near||l>n.far?null:{distance:l,point:yi.clone(),object:e}}function xi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,pi),e.getVertexPosition(c,mi),e.getVertexPosition(l,hi);let u=bi(e,t,n,r,pi,mi,hi,vi);if(u){let e=new H;Zn.getBarycoord(vi,pi,mi,hi,e),i&&(u.uv=Zn.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=Zn.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=Zn.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Zn.getNormal(pi,mi,hi,t.normal),u.face=t,u.barycoord=e}return u}var Si=new Yt,Ci=new Yt,wi=new Yt,Ti=new Yt,Ei=new U,Di=new H,Oi=new Cr,ki=new U,Ai=new si,ji=class extends G{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new U,this.bindMatrixInverse=new U,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qn),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Di),this.boundingBox.expandByPoint(Di)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Di),this.boundingSphere.expandByPoint(Di)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(r),e.ray.intersectsSphere(Oi)!==!1&&(ki.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(ki),(this.boundingBox===null||Ai.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ai)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Yt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():z(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Ci.fromBufferAttribute(r.attributes.skinIndex,e),wi.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Si.copy(t),t.set(0,0,0,0)):(Si.set(...t,1),t.set(0,0,0)),Si.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=wi.getComponent(e);if(r!==0){let i=Ci.getComponent(e);Ei.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Ti.copy(Si).applyMatrix4(Ei),r)}}return t.isVector4&&(t.w=Si.w),t.applyMatrix4(this.bindMatrixInverse)}},Mi=class extends Dn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Ni=class extends Jt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pi=new U,Fi=new U,Ii=class e{constructor(e=[],t=[]){this.uuid=st(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){z(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new U)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new U;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Fi;Pi.multiplyMatrices(i,t[r]),Pi.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ni(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(z(`Skeleton: No bone found with UUID:`,r),i=new Mi),this.bones.push(i),this.boneInverses.push(new U().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Li=class extends gr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ri=new U,zi=new U,Bi=[],Vi=new Qn,Hi=new U,Ui=new G,Wi=new Cr,Gi=class extends G{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Li(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Hi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),Vi.copy(e.boundingBox).applyMatrix4(Ri),this.boundingBox.union(Vi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),Wi.copy(e.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(Wi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ui.geometry=this.geometry,Ui.material=this.material,Ui.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wi.copy(this.boundingSphere),Wi.applyMatrix4(n),e.ray.intersectsSphere(Wi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ri),zi.multiplyMatrices(n,Ri),Ui.matrixWorld=zi,Ui.raycast(e,Bi);for(let e=0,n=Bi.length;e<n;e++){let n=Bi[e];n.instanceId=i,n.object=this,t.push(n)}Bi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ni(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new Cr,qi=new V(.5,.5),Ji=new H,Yi=class{constructor(e=new Rr,t=new Rr,n=new Rr,r=new Rr,i=new Rr,a=new Rr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476+qi.distanceTo(e.center),Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ji.x=r.normal.x>0?e.max.x:e.min.x,Ji.y=r.normal.y>0?e.max.y:e.min.y,Ji.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ji)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xi=class extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zi=new H,Qi=new H,$i=new U,ea=new si,ta=new Cr,na=new H,ra=new H,ia=class extends Dn{constructor(e=new jr,t=new Xi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Zi.fromBufferAttribute(t,e-1),Qi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Zi.distanceTo(Qi);e.setAttribute(`lineDistance`,new yr(n,1))}else z(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),ta.radius+=i,e.ray.intersectsSphere(ta)===!1)return;$i.copy(r).invert(),ea.copy(e.ray).applyMatrix4($i);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=aa(this,e,ea,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=aa(this,e,ea,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=aa(this,e,ea,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=aa(this,e,ea,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function aa(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Zi.fromBufferAttribute(s,i),Qi.fromBufferAttribute(s,a),n.distanceSqToSegment(Zi,Qi,na,ra)>r)return;na.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(na);if(!(c<t.near||c>t.far))return{distance:c,point:ra.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var oa=new H,sa=new H,ca=class extends ia{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)oa.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+oa.distanceTo(sa);e.setAttribute(`lineDistance`,new yr(n,1))}else z(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},la=class extends ia{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},ua=class extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},da=new U,fa=new si,pa=new Cr,ma=new H,ha=class extends Dn{constructor(e=new jr,t=new ua){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),pa.radius+=i,e.ray.intersectsSphere(pa)===!1)return;da.copy(r).invert(),fa.copy(e.ray).applyMatrix4(da);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ma.fromBufferAttribute(l,n),ga(ma,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ma.fromBufferAttribute(l,a),ga(ma,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ga(e,t,n,r,i,a,o){let s=fa.distanceSqToPoint(e);if(s<n){let n=new H;fa.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var _a=class extends Jt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},va=class extends Jt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ya=class extends Jt{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ba=class extends ya{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xa=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Sa=class e extends jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new yr(c,3)),this.setAttribute(`normal`,new yr(l,3)),this.setAttribute(`uv`,new yr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ca=class e extends jr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new V;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new yr(a,3)),this.setAttribute(`normal`,new yr(o,3)),this.setAttribute(`uv`,new yr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wa=class e extends jr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new yr(u,3)),this.setAttribute(`normal`,new yr(d,3)),this.setAttribute(`uv`,new yr(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ta=class e extends wa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ea=class e extends jr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new yr(i,3)),this.setAttribute(`normal`,new yr(i.slice(),3)),this.setAttribute(`uv`,new yr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Da=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){z(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new V:new H);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,r=[],i=[],a=[],o=new H,s=new U;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new H)}i[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ct(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ct(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Oa=class extends Da{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new V){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ka=class extends Oa{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Aa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ja=new H,Ma=new H,Na=new Aa,Pa=new Aa,Fa=new Aa,Ia=class extends Da{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ma.subVectors(r[0],r[1]).add(r[0]),c=Ma);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ja.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ja),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Na.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Pa.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Fa.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Na.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Pa.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Fa.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Na.calc(s),Pa.calc(s),Fa.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function La(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ra(e,t){let n=1-e;return n*n*t}function za(e,t){return 2*(1-e)*e*t}function Ba(e,t){return e*e*t}function Va(e,t,n,r){return Ra(e,t)+za(e,n)+Ba(e,r)}function Ha(e,t){let n=1-e;return n*n*n*t}function Ua(e,t){let n=1-e;return 3*n*n*e*t}function Wa(e,t){return 3*(1-e)*e*e*t}function Ga(e,t){return e*e*e*t}function Ka(e,t,n,r,i){return Ha(e,t)+Ua(e,n)+Wa(e,r)+Ga(e,i)}var qa=class extends Da{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ka(e,r.x,i.x,a.x,o.x),Ka(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ja=class extends Da{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ka(e,r.x,i.x,a.x,o.x),Ka(e,r.y,i.y,a.y,o.y),Ka(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ya=class extends Da{constructor(e=new V,t=new V){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Da{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Da{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Va(e,r.x,i.x,a.x),Va(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Da{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Va(e,r.x,i.x,a.x),Va(e,r.y,i.y,a.y),Va(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends Da{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new V){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(La(o,s.x,c.x,l.x,u.x),La(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this}},eo=Object.freeze({__proto__:null,ArcCurve:ka,CatmullRomCurve3:Ia,CubicBezierCurve:qa,CubicBezierCurve3:Ja,EllipseCurve:Oa,LineCurve:Ya,LineCurve3:Xa,QuadraticBezierCurve:Za,QuadraticBezierCurve3:Qa,SplineCurve:$a}),to=class extends Da{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new eo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new eo[n.type]().fromJSON(n))}return this}},no=class extends to{constructor(e){super(),this.type=`Path`,this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ya(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Za(this.currentPoint.clone(),new V(e,t),new V(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new qa(this.currentPoint.clone(),new V(e,t),new V(n,r),new V(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new $a([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Oa(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ro=class extends no{constructor(e){super(e),this.uuid=st(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new no().fromJSON(n))}return this}};function io(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ao(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=po(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return so(a,o,n,s,c,l,0),o}function ao(e,t,n,r,i){let a;if(i===Lo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Po(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Po(i/r|0,e[i],e[i+1],a);return a&&Eo(a,a.next)&&(Fo(a),a=a.next),a}function oo(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Eo(n,n.next)||To(n.prev,n,n.next)===0)){if(Fo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function so(e,t,n,r,i,a,o){if(!e)return;!o&&a&&vo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?lo(e,r,i,a):co(e)){t.push(c.i,e.i,l.i),Fo(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=uo(oo(e),t),so(e,t,n,r,i,a,2)):o===2&&fo(e,t,n,r,i,a):so(oo(e),t,n,r,i,a,1);break}}}function co(e){let t=e.prev,n=e,r=e.next;if(To(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Co(i,s,a,c,o,l,m.x,m.y)&&To(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function lo(e,t,n,r){let i=e.prev,a=e,o=e.next;if(To(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=bo(p,m,t,n,r),v=bo(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Co(s,u,c,d,l,f,y.x,y.y)&&To(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Co(s,u,c,d,l,f,b.x,b.y)&&To(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Co(s,u,c,d,l,f,y.x,y.y)&&To(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Co(s,u,c,d,l,f,b.x,b.y)&&To(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function uo(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Eo(r,i)&&Do(r,n,n.next,i)&&jo(r,i)&&jo(i,r)&&(t.push(r.i,n.i,i.i),Fo(n),Fo(n.next),n=e=i),n=n.next}while(n!==e);return oo(n)}function fo(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&wo(o,e)){let s=No(o,e);o=oo(o,o.next),s=oo(s,s.next),so(o,t,n,r,i,a,0),so(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function po(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ao(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(xo(o))}i.sort(mo);for(let e=0;e<i.length;e++)n=ho(i[e],n);return n}function mo(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ho(e,t){let n=go(e,t);if(!n)return t;let r=No(n,e);return oo(r,r.next),oo(n,n.next)}function go(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Eo(e,n))return n;do{if(Eo(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&So(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);jo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&_o(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function _o(e,t){return To(e.prev,e,t.prev)<0&&To(t.next,e,e.next)<0}function vo(e,t,n,r){let i=e;do i.z===0&&(i.z=bo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,yo(i)}function yo(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function bo(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function xo(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function So(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Co(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&So(e,t,n,r,i,a,o,s)}function wo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ao(e,t)&&(jo(e,t)&&jo(t,e)&&Mo(e,t)&&(To(e.prev,e,t.prev)||To(e,t.prev,t))||Eo(e,t)&&To(e.prev,e,e.next)>0&&To(t.prev,t,t.next)>0)}function To(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Eo(e,t){return e.x===t.x&&e.y===t.y}function Do(e,t,n,r){let i=ko(To(e,t,n)),a=ko(To(e,t,r)),o=ko(To(n,r,e)),s=ko(To(n,r,t));return!!(i!==a&&o!==s||i===0&&Oo(e,n,t)||a===0&&Oo(e,r,t)||o===0&&Oo(n,e,r)||s===0&&Oo(n,t,r))}function Oo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ko(e){return e>0?1:e<0?-1:0}function Ao(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Do(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function jo(e,t){return To(e.prev,e,e.next)<0?To(e,t,e.next)>=0&&To(e,e.prev,t)>=0:To(e,t,e.prev)<0||To(e,e.next,t)<0}function Mo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function No(e,t){let n=Io(e.i,e.x,e.y),r=Io(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Po(e,t,n,r){let i=Io(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Fo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Io(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ro=class{static triangulate(e,t,n=2){return io(e,t,n)}},zo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Bo(e),Vo(n,e);let a=e.length;t.forEach(Bo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Vo(n,t[e]);let o=Ro.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Bo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Vo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ho=class e extends jr{constructor(e=new ro([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new yr(r,3)),this.setAttribute(`uv`,new yr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Uo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new H,b=new H,x=new H}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!zo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];zo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||B(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new V(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new V(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let ee=[],M,N=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=A(t[e],t[r],t[i]);ee.push(M),N=N.concat(M)}let te;if(p===0)te=zo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);oe(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];M=ee[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],M[e],a);oe(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}te=zo.triangulateShape(e,t)}let P=te.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],N[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),oe(x.x,x.y,x.z)):oe(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],N[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),oe(x.x,x.y,x.z)):oe(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);oe(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=ee[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],M[e],r);_?oe(i.x,i.y+g[s-1].y,g[s-1].x+n):oe(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<P;e++){let n=te[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<P;e++){let n=te[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<P;e++){let t=te[e];se(t[2],t[1],t[0])}for(let e=0;e<P;e++){let t=te[e];se(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ce(t+r+n,t+i+n,t+i+a,t+r+a)}}}function oe(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){F(e),F(t),F(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);le(o[0]),le(o[1]),le(o[2])}function ce(e,t,i,a){F(e),F(t),F(a),F(t),F(i),F(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);le(s[0]),le(s[1]),le(s[3]),le(s[1]),le(s[2]),le(s[3])}function F(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function le(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new eo[i.type]().fromJSON(i)),new e(r,t.options)}},Uo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new V(a,o),new V(s,c),new V(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new V(o,1-c),new V(l,1-d),new V(f,1-m),new V(h,1-_)]:[new V(s,1-c),new V(u,1-d),new V(p,1-m),new V(g,1-_)]}};function Wo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Go=class e extends Ea{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ko=class e extends jr{constructor(e=[new V(0,-.5),new V(.5,0),new V(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ct(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new H,d=new V,f=new H,p=new H,m=new H,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new yr(a,3)),this.setAttribute(`uv`,new yr(o,2)),this.setAttribute(`normal`,new yr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},qo=class e extends Ea{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Jo=class e extends jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Yo=class e extends jr{constructor(e=new ro([new V(0,.5),new V(-.5,-.5),new V(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new yr(r,3)),this.setAttribute(`normal`,new yr(i,3)),this.setAttribute(`uv`,new yr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;zo.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];zo.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=zo.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Xo(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Xo(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Zo=class e extends jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Qo=class e extends jr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new H,f=new H,p=new H;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new yr(c,3)),this.setAttribute(`normal`,new yr(l,3)),this.setAttribute(`uv`,new yr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},$o=class e extends jr{constructor(e=new Qa(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,s=new H,c=new V,l=new H,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new yr(u,3)),this.setAttribute(`normal`,new yr(d,3)),this.setAttribute(`uv`,new yr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new eo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function es(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ns(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ns(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ts(e){let t={};for(let n=0;n<e.length;n++){let r=es(e[n]);for(let e in r)t[e]=r[e]}return t}function ns(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function rs(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function is(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Rt.workingColorSpace}var as={clone:es,merge:ts},os=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ss=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cs=class extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=os,this.fragmentShader=ss,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=rs(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Yt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Nt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new U().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ls=class extends cs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},us=class extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ds=class extends us{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},fs=class extends Br{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new W(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ps=class extends Br{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ms=class extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Re,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hs=class extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gs(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function _s(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function vs(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function ys(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function bs(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var xs=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ss=class extends xs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:L,endingEnd:L}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ie:i=e,o=2*t-n;break;case R:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ie:a=e,s=2*n-t;break;case R:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Cs=class extends xs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ws=class extends xs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ts=class extends xs{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Os(n,t,g,y,r);i[p]=Es(x,o,_,b,m)}return i}};function Es(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ds(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Os(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Es(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ds(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ks=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),_s(e.settings)&&(n.settings={inTangents:gs(e.settings.inTangents,Array),outTangents:gs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ws(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ss(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ts(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case I:t=this.InterpolantFactoryMethodDiscrete;break;case Ne:t=this.InterpolantFactoryMethodLinear;break;case Pe:t=this.InterpolantFactoryMethodSmooth;break;case Fe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return I;case this.InterpolantFactoryMethodLinear:return Ne;case this.InterpolantFactoryMethodSmooth:return Pe;case this.InterpolantFactoryMethodBezier:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;_s(this.settings)&&(As(this.settings.inTangents,e),As(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&qe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,_s(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function As(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ks.prototype.ValueTypeName=``,ks.prototype.TimeBufferType=Float32Array,ks.prototype.ValueBufferType=Float32Array,ks.prototype.DefaultInterpolation=Ne;var js=class extends ks{constructor(e,t,n){super(e,t,n)}};js.prototype.ValueTypeName=`bool`,js.prototype.ValueBufferType=Array,js.prototype.DefaultInterpolation=I,js.prototype.InterpolantFactoryMethodLinear=void 0,js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends ks{constructor(e,t,n,r){super(e,t,n,r)}};Ms.prototype.ValueTypeName=`color`;var Ns=class extends ks{constructor(e,t,n,r){super(e,t,n,r)}};Ns.prototype.ValueTypeName=`number`;var Ps=class extends xs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)At.slerpFlat(i,0,a,c-o,a,c,s);return i}},Fs=class extends ks{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ps(this.times,this.values,this.getValueSize(),e)}};Fs.prototype.ValueTypeName=`quaternion`,Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends ks{constructor(e,t,n){super(e,t,n)}};Is.prototype.ValueTypeName=`string`,Is.prototype.ValueBufferType=Array,Is.prototype.DefaultInterpolation=I,Is.prototype.InterpolantFactoryMethodLinear=void 0,Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends ks{constructor(e,t,n,r){super(e,t,n,r)}};Ls.prototype.ValueTypeName=`vector`;var Rs=class{constructor(e=``,t=-1,n=[],r=Le){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=st(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Bs(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(ks.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=vs(o);o=ys(o,1,c),s=ys(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Ns(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function zs(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Ns;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Ls;case`color`:return Ms;case`quaternion`:return Fs;case`bool`:case`boolean`:return js;case`string`:return Is}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Bs(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=zs(e.type);if(e.times===void 0){let t=[],n=[];bs(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),_s(e.settings)&&(n.settings={inTangents:gs(e.settings.inTangents,Float32Array),outTangents:gs(e.settings.outTangents,Float32Array)}),n}var Vs={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Hs(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Hs(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Hs(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Us=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Ws=new Us,Gs=class{constructor(e){this.manager=e===void 0?Ws:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Gs.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Ks={},qs=class extends Error{constructor(e,t){super(e),this.response=t}},Js=class extends Gs{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Vs.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Ks[e]!==void 0){Ks[e].push({onLoad:t,onProgress:n,onError:r});return}Ks[e]=[],Ks[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&z(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Ks[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new qs(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Vs.add(`file:${e}`,t);let n=Ks[e];delete Ks[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Ks[e];if(n===void 0)throw this.manager.itemError(e),t;delete Ks[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ys=new WeakMap,Xs=class extends Gs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Vs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Ys.get(a);e===void 0&&(e=[],Ys.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Je(`img`);function s(){l(),t&&t(this);let n=Ys.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Ys.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Vs.remove(`image:${e}`);let n=Ys.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Ys.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vs.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Zs=class extends Gs{constructor(e){super(e)}load(e,t,n,r){let i=new Jt,a=new Xs(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Qs=class extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$s=class extends Qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ec=new U,tc=new H,nc=new H,rc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new U,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ec,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ic=new H,ac=new At,oc=new H,sc=class extends Dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new U,this.projectionMatrix=new U,this.projectionMatrixInverse=new U,this.coordinateSystem=Ge,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ic,ac,oc),oc.x===1&&oc.y===1&&oc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,ac,oc.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ic,ac,oc),oc.x===1&&oc.y===1&&oc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,ac,oc.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cc=new H,lc=new V,uc=new V,dc=class extends sc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(at*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ot*2*Math.atan(Math.tan(at*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cc.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cc.x,cc.y).multiplyScalar(-e/cc.z),cc.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cc.x,cc.y).multiplyScalar(-e/cc.z)}getViewSize(e,t){return this.getViewBounds(e,lc,uc),t.subVectors(uc,lc)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(at*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fc=class extends rc{constructor(){super(new dc(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ot*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},pc=class extends Qs{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new fc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},mc=class extends rc{constructor(){super(new dc(90,1,.5,500)),this.isPointLightShadow=!0}},hc=class extends Qs{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},gc=class extends sc{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_c=class extends rc{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vc=class extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},yc=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},bc=new WeakMap,xc=class extends Gs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&z(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&z(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Vs.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{bc.has(a)===!0?(r&&r(bc.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return Vs.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),bc.set(s,t),Vs.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Vs.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Sc=-90,Cc=1,wc=class extends Dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new dc(Sc,Cc,e,t);r.layers=this.layers,this.add(r);let i=new dc(Sc,Cc,e,t);i.layers=this.layers,this.add(i);let a=new dc(Sc,Cc,e,t);a.layers=this.layers,this.add(a);let o=new dc(Sc,Cc,e,t);o.layers=this.layers,this.add(o);let s=new dc(Sc,Cc,e,t);s.layers=this.layers,this.add(s);let c=new dc(Sc,Cc,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Tc=class extends dc{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ec=`\\[\\]\\.:\\/`,Dc=RegExp(`[\\[\\]\\.:\\/]`,`g`),Oc=`[^\\[\\]\\.:\\/]`,kc=`[^`+Ec.replace(`\\.`,``)+`]`,Ac=`((?:WC+[\\/:])*)`.replace(`WC`,Oc),jc=`(WCOD+)?`.replace(`WCOD`,kc),Mc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Oc),Nc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Oc),Pc=RegExp(`^`+Ac+jc+Mc+Nc+`$`),Fc=[`material`,`materials`,`bones`,`map`],Ic=class{constructor(e,t,n){let r=n||Lc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Dc,``)}static parseTrackName(e){let t=Pc.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Fc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lc.Composite=Ic,Lc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Lc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Lc.prototype.GetterByBindingType=[Lc.prototype._getValue_direct,Lc.prototype._getValue_array,Lc.prototype._getValue_arrayElement,Lc.prototype._getValue_toArray],Lc.prototype.SetterByBindingTypeAndVersioning=[[Lc.prototype._setValue_direct,Lc.prototype._setValue_direct_setNeedsUpdate,Lc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lc.prototype._setValue_array,Lc.prototype._setValue_array_setNeedsUpdate,Lc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lc.prototype._setValue_arrayElement,Lc.prototype._setValue_arrayElement_setNeedsUpdate,Lc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lc.prototype._setValue_fromArray,Lc.prototype._setValue_fromArray_setNeedsUpdate,Lc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,z(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function zc(e,t,n,r){let i=Bc(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case te:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case ne:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case F:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Bc(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Vc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Hc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Uc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Wc={basic:{uniforms:ts([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:Uc.meshbasic_vert,fragmentShader:Uc.meshbasic_frag},lambert:{uniforms:ts([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:Uc.meshlambert_vert,fragmentShader:Uc.meshlambert_frag},phong:{uniforms:ts([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Uc.meshphong_vert,fragmentShader:Uc.meshphong_frag},standard:{uniforms:ts([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Uc.meshphysical_vert,fragmentShader:Uc.meshphysical_frag},toon:{uniforms:ts([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:Uc.meshtoon_vert,fragmentShader:Uc.meshtoon_frag},matcap:{uniforms:ts([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:Uc.meshmatcap_vert,fragmentShader:Uc.meshmatcap_frag},points:{uniforms:ts([K.points,K.fog]),vertexShader:Uc.points_vert,fragmentShader:Uc.points_frag},dashed:{uniforms:ts([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Uc.linedashed_vert,fragmentShader:Uc.linedashed_frag},depth:{uniforms:ts([K.common,K.displacementmap]),vertexShader:Uc.depth_vert,fragmentShader:Uc.depth_frag},normal:{uniforms:ts([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:Uc.meshnormal_vert,fragmentShader:Uc.meshnormal_frag},sprite:{uniforms:ts([K.sprite,K.fog]),vertexShader:Uc.sprite_vert,fragmentShader:Uc.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Uc.background_vert,fragmentShader:Uc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Uc.backgroundCube_vert,fragmentShader:Uc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Uc.cube_vert,fragmentShader:Uc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Uc.equirect_vert,fragmentShader:Uc.equirect_frag},distance:{uniforms:ts([K.common,K.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Uc.distance_vert,fragmentShader:Uc.distance_frag},shadow:{uniforms:ts([K.lights,K.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:Uc.shadow_vert,fragmentShader:Uc.shadow_frag}};Wc.physical={uniforms:ts([Wc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Uc.meshphysical_vert,fragmentShader:Uc.meshphysical_frag};var Gc={r:0,b:0,g:0},Kc=new U,qc=new Nt;qc.set(-1,0,0,0,1,0,0,0,1);function Jc(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new G(new Sa(1,1,1),new cs({name:`BackgroundCubeMaterial`,uniforms:es(Wc.backgroundCube.uniforms),vertexShader:Wc.backgroundCube.vertexShader,fragmentShader:Wc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Kc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qc),l.material.toneMapped=Rt.getTransfer(i.colorSpace)!==He,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new G(new Jo(2,2),new cs({name:`BackgroundMaterial`,uniforms:es(Wc.background.uniforms),vertexShader:Wc.background.vertexShader,fragmentShader:Wc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(i.colorSpace)!==He,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Gc,is(e)),n.buffers.color.setClear(Gc.r,Gc.g,Gc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Yc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Xc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Zc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Qc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Rr,s=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var $c=4,el=6,tl=20,nl=256,rl=new gc,il=new W,al=null,ol=0,sl=0,cl=!1,ll=new H,ul=new H,dl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ll}=i;al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(al,ol,sl),this._renderer.xr.enabled=cl,e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:Be,depthBuffer:!1},r=pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fl(r)),this._blurMaterial=gl(r,e,t),this._ggxMaterial=hl(r,e,t)}return r}_compileMaterial(e){let t=new G(new jr,e);this._renderer.compile(t,rl)}_sceneToCubeUV(e,t,n,r,i){let a=new dc(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(il),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new G(new Sa,new ci({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(il),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ml(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ml(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,rl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-$c?n-d+$c:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ml(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,rl),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ml(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,rl)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];ml(t,3*l*(r>this._lodMax-$c?r-this._lodMax+$c:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,rl)}};function fl(e){let t=[],n=[],r=e,i=e-$c+1+el;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ul.set(1,r,n):e===1?ul.set(-n,1,-r):e===2?ul.set(-n,r,1):e===3?ul.set(-1,r,-n):e===4?ul.set(-n,-1,r):ul.set(n,r,-1),ul.toArray(l,(e*6+t)*3)}}let u=new jr;u.setAttribute(`position`,new gr(c,3)),u.setAttribute(`outputDirection`,new gr(l,3)),n.push(new G(u,null)),r>$c&&r--}return{lodMeshes:n,sizeLods:t}}function pl(e,t,n){let r=new Zt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ml(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function hl(e,t,n){return new cs({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:nl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function gl(e,t,n){return new cs({name:`SphericalGaussianBlur`,defines:{SAMPLES:tl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _l(){return new cs({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vl(){return new cs({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bl=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new _a(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Sa(5,5,5),i=new cs({name:`CubemapFromEquirect`,uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new G(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new wc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function xl(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new bl(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new dl(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new dl(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Sl(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&$e(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Cl(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?vr:_r)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function wl(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Tl(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function El(e,t,n){let r=new WeakMap,i=new Yt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new Qt(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new V(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Dl(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ol={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function kl(e,t,n,r,i,a){let o=new Zt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new jr;l.setAttribute(`position`,new yr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new yr([0,2,0,0,2,0],2));let u=new ls({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new G(l,u),f=new gc(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Zt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new Zt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Rt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ol[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Al=new Jt,jl=new ya(1,1),Ml=new Qt,Nl=new $t,Pl=new _a,Fl=[],Il=[],Ll=new Float32Array(16),Rl=new Float32Array(9),zl=new Float32Array(4);function Bl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Fl[i];if(a===void 0&&(a=new Float32Array(i),Fl[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Vl(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Hl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ul(e,t){let n=Il[t];n===void 0&&(n=new Int32Array(t),Il[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Wl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Gl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vl(n,t))return;e.uniform2fv(this.addr,t),Hl(n,t)}}function Kl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Vl(n,t))return;e.uniform3fv(this.addr,t),Hl(n,t)}}function ql(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vl(n,t))return;e.uniform4fv(this.addr,t),Hl(n,t)}}function Jl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vl(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Hl(n,t)}else{if(Vl(n,r))return;zl.set(r),e.uniformMatrix2fv(this.addr,!1,zl),Hl(n,r)}}function Yl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vl(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Hl(n,t)}else{if(Vl(n,r))return;Rl.set(r),e.uniformMatrix3fv(this.addr,!1,Rl),Hl(n,r)}}function Xl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vl(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Hl(n,t)}else{if(Vl(n,r))return;Ll.set(r),e.uniformMatrix4fv(this.addr,!1,Ll),Hl(n,r)}}function Zl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ql(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vl(n,t))return;e.uniform2iv(this.addr,t),Hl(n,t)}}function $l(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Vl(n,t))return;e.uniform3iv(this.addr,t),Hl(n,t)}}function eu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vl(n,t))return;e.uniform4iv(this.addr,t),Hl(n,t)}}function tu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function nu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vl(n,t))return;e.uniform2uiv(this.addr,t),Hl(n,t)}}function ru(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Vl(n,t))return;e.uniform3uiv(this.addr,t),Hl(n,t)}}function iu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vl(n,t))return;e.uniform4uiv(this.addr,t),Hl(n,t)}}function au(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(jl.compareFunction=n.isReversedDepthBuffer()?518:515,a=jl):a=Al,n.setTexture2D(t||a,i)}function ou(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Nl,i)}function su(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Pl,i)}function cu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ml,i)}function lu(e){switch(e){case 5126:return Wl;case 35664:return Gl;case 35665:return Kl;case 35666:return ql;case 35674:return Jl;case 35675:return Yl;case 35676:return Xl;case 5124:case 35670:return Zl;case 35667:case 35671:return Ql;case 35668:case 35672:return $l;case 35669:case 35673:return eu;case 5125:return tu;case 36294:return nu;case 36295:return ru;case 36296:return iu;case 35678:case 36198:case 36298:case 36306:case 35682:return au;case 35679:case 36299:case 36307:return ou;case 35680:case 36300:case 36308:case 36293:return su;case 36289:case 36303:case 36311:case 36292:return cu}}function uu(e,t){e.uniform1fv(this.addr,t)}function du(e,t){let n=Bl(t,this.size,2);e.uniform2fv(this.addr,n)}function fu(e,t){let n=Bl(t,this.size,3);e.uniform3fv(this.addr,n)}function pu(e,t){let n=Bl(t,this.size,4);e.uniform4fv(this.addr,n)}function mu(e,t){let n=Bl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function hu(e,t){let n=Bl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function gu(e,t){let n=Bl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _u(e,t){e.uniform1iv(this.addr,t)}function vu(e,t){e.uniform2iv(this.addr,t)}function yu(e,t){e.uniform3iv(this.addr,t)}function bu(e,t){e.uniform4iv(this.addr,t)}function xu(e,t){e.uniform1uiv(this.addr,t)}function Su(e,t){e.uniform2uiv(this.addr,t)}function Cu(e,t){e.uniform3uiv(this.addr,t)}function wu(e,t){e.uniform4uiv(this.addr,t)}function Tu(e,t,n){let r=this.cache,i=t.length,a=Ul(n,i);Vl(r,a)||(e.uniform1iv(this.addr,a),Hl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?jl:Al;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Eu(e,t,n){let r=this.cache,i=t.length,a=Ul(n,i);Vl(r,a)||(e.uniform1iv(this.addr,a),Hl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Nl,a[e])}function Du(e,t,n){let r=this.cache,i=t.length,a=Ul(n,i);Vl(r,a)||(e.uniform1iv(this.addr,a),Hl(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Pl,a[e])}function Ou(e,t,n){let r=this.cache,i=t.length,a=Ul(n,i);Vl(r,a)||(e.uniform1iv(this.addr,a),Hl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ml,a[e])}function ku(e){switch(e){case 5126:return uu;case 35664:return du;case 35665:return fu;case 35666:return pu;case 35674:return mu;case 35675:return hu;case 35676:return gu;case 5124:case 35670:return _u;case 35667:case 35671:return vu;case 35668:case 35672:return yu;case 35669:case 35673:return bu;case 5125:return xu;case 36294:return Su;case 36295:return Cu;case 36296:return wu;case 35678:case 36198:case 36298:case 36306:case 35682:return Tu;case 35679:case 36299:case 36307:return Eu;case 35680:case 36300:case 36308:case 36293:return Du;case 36289:case 36303:case 36311:case 36292:return Ou}}var Au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lu(t.type)}},ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ku(t.type)}},Mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Nu=/(\w+)(\])?(\[|\.)?/g;function Pu(e,t){e.seq.push(t),e.map[t.id]=t}function Fu(e,t,n){let r=e.name,i=r.length;for(Nu.lastIndex=0;;){let a=Nu.exec(r),o=Nu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Pu(n,l===void 0?new Au(s,e,t):new ju(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Mu(s),Pu(n,e)),n=e}}}var Iu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Fu(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Lu(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ru=37297,zu=0;function Bu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Vu=new Nt;function Hu(e){Rt._getMatrix(Vu,Rt.workingColorSpace,e);let t=`mat3( ${Vu.elements.map(e=>e.toFixed(4))} )`;switch(Rt.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Uu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Bu(e.getShaderSource(t),r)}return i}function Wu(e,t){let n=Hu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Gu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ku(e,t){let n=Gu[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var qu=new H;function Ju(){return Rt.getLuminanceCoefficients(qu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${qu.x.toFixed(4)}, ${qu.y.toFixed(4)}, ${qu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Yu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Qu).join(`
`)}function Xu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Zu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Qu(e){return e!==``}function $u(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ed(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var td=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(e){return e.replace(td,id)}var rd=new Map;function id(e,t){let n=Uc[t];if(n===void 0){let e=rd.get(t);if(e!==void 0)n=Uc[e],z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return nd(n)}var ad=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(e){return e.replace(ad,sd)}function sd(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function cd(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ld={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ud(e){return ld[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var dd={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function fd(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:dd[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var pd={302:`ENVMAP_MODE_REFRACTION`};function md(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:pd[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var hd={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function gd(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:hd[e.combine]||`ENVMAP_BLENDING_NONE`}function _d(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function vd(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ud(n),l=fd(n),u=md(n),d=gd(n),f=_d(n),p=Yu(n),m=Xu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Qu).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Qu).join(`
`),_.length>0&&(_+=`
`)):(g=[cd(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Qu).join(`
`),_=[cd(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Uc.tonemapping_pars_fragment,n.toneMapping===0?``:Ku(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Uc.colorspace_pars_fragment,Wu(`linearToOutputTexel`,n.outputColorSpace),Ju(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Qu).join(`
`)),o=nd(o),o=$u(o,n),o=ed(o,n),s=nd(s),s=$u(s,n),s=ed(s,n),o=od(o),s=od(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Lu(i,i.VERTEX_SHADER,y),S=Lu(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Uu(i,x,`vertex`),n=Uu(i,S,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Iu(i,h),T=Zu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ru)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zu++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var yd=0,bd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xd(e),t.set(e,n)),n}},xd=class{constructor(e){this.id=yd++,this.code=e,this.usedTimes=0}};function Sd(e){return e===1030||e===37490||e===36285}function Cd(e,t,n,r,i,a){let o=new dn,s=new bd,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Wc[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=ue&&!!i.anisotropyMap,ve=de&&!!i.clearcoatMap,ye=de&&!!i.clearcoatNormalMap,be=de&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,I=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Sd(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:_e,clearcoat:de,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:I,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:le&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&Rt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Wc[t];n=as.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new vd(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function wd(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Td(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ed(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Dd(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Td),r.length>1&&r.sort(t||Ed),i.length>1&&i.sort(t||Ed)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Od(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Dd,e.set(t,[i])):n>=r.length?(i=new Dd,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function kd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Ad(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var jd=0;function Md(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Nd(e){let t=new kd,n=Ad(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new U,o=new U;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Md);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=jd++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Pd(e){let t=new Nd(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Fd(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Pd(e),t.set(n,[a])):r>=i.length?(a=new Pd(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Id=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ld=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rd=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],zd=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Bd=new U,Vd=new H,Hd=new H;function Ud(e,t,n){let r=new Yi,a=new V,o=new V,c=new Yt,l=new ms,u=new hs,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Id,fragmentShader:Ld}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new jr;y.setAttribute(`position`,new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new G(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){z(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Zt(a.x,a.y,{format:A,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ya(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new bl(a.x),p.map.depthTexture=new ba(a.x,h)):(p.map=new Zt(a.x,a.y),p.map.depthTexture=new ya(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Vd.setFromMatrixPosition(d.matrixWorld),e.position.copy(Vd),Hd.copy(e.position),Hd.add(Rd[t]),e.up.copy(zd[t]),e.lookAt(Hd),e.updateMatrixWorld(),n.makeTranslation(-Vd.x,-Vd.y,-Vd.z),Bd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Bd,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Zt(a.x,a.y,{format:A,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Wd(e,t){function n(){let t=!1,n=new Yt,r=null,i=new Yt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=tt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Yt().fromArray(re),oe=new Yt().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(le(e.BLEND),g=!1);return}if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(M&&e.lineWidth(t),k=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+ee-1),P!==t&&(e.activeTexture(t),P=t)}function Ce(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+ee-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function I(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function L(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Ie(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function R(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:I,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:R,uniformBlockBinding:Le,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:L,viewport:Ie,reset:Re}}function Gd(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Je(`canvas`)}function T(e,t,n){let r=1,i=Pe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function k(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Ve:Rt.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function j(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ee(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),te(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),ne(t)}function te(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&P(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function P(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ne(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let re=0;function ie(){re=0}function ae(){return re}function oe(e){re=e}function se(){let e=re;return e>=p.maxTextures&&z(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),re+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function F(t,n){let r=f.get(t);if(t.isVideoTexture&&I(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function le(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){ye(r,t,n);return}t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function ue(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){ye(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function de(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){be(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let fe={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},pe={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},me={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,fe[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,fe[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,fe[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,pe[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,pe[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,me[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ce(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&P(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=_e(r.start,n.width,4),c=_e(t.start,n.width,4);r.start<=i+1&&s===c&&_e(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function ye(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ge(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Rt.getPrimaries(Rt.workingColorSpace),r=n.colorSpace===``?null:Rt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Ne(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=A(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);he(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ee(n,t);if(n.isDepthTexture)u=j(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&ve(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=zc(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=zc(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Pe(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Pe(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function be(t,n,r){if(n.image.length!==6)return;let i=ge(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Rt.getPrimaries(Rt.workingColorSpace),s=n.colorSpace===``?null:Rt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Ne(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=A(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ee(n,h);he(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Pe(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function xe(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=A(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Me(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,je(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=j(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Me(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=A(a.internalFormat,o,s,a.normalized,a.colorSpace);Me(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ce(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,M)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),he(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else F(n.depthTexture,0);let o=a.__webglTexture,s=je(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Me(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Me(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Ce(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ce(n.__webglFramebuffer[0],t,0):Ce(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Se(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Se(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){let i=f.get(t);n!==void 0&&xe(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&we(t)}function Ee(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,N);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Me(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=A(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=je(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),he(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)xe(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else xe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&O(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),he(s,i),xe(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&O(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),he(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)xe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else xe(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&O(a),d.unbindTexture()}t.depthBuffer&&we(t)}function De(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let Oe=[],ke=[];function Ae(t){if(t.samples>0){if(Me(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Oe.length=0,ke.length=0,Oe.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Oe.push(o),ke.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ke)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Oe))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function je(e){return Math.min(p.maxSamples,e.samples)}function Me(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function I(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ne(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Rt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=F,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Kd(e,t){function n(n,r=``){let i,a=Rt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var qd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cs({vertexShader:qd,fragmentShader:Jd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new Jo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xd=class extends nt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new Yd,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new V,k=null,A=null,j=new dc;j.viewport=new Yt;let ee=new dc;ee.viewport=new Yt;let M=[j,ee],N=new Tc,te=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getHandSpace()};function ne(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}te=null,P=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Zt(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new ya(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Zt(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ae=new H,oe=new H;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=ee.near=j.near=t,N.far=ee.far=j.far=n,(te!==N.near||P!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),te=N.near,P=N.far),N.layers.mask=e.layers.mask|6,j.layers.mask=N.layers.mask&-5,ee.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;ce(N,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(N,j,ee):N.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),F(e,N,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let le=null;function ue(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=M[n];o===void 0&&(o=new dc,o.layers.enable(n),o.viewport=new Yt,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new xa,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let de=new Vc;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},Zd=new U,Qd=new Nt;Qd.set(-1,0,0,0,1,0,0,0,1);function $d(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,is(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Qd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ef(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var tf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nf=null;function rf(){return nf===null&&(nf=new Ni(tf,16,16,A,_),nf.name=`DFG_LUT`,nf.minFilter=s,nf.magFilter=s,nf.wrapS=n,nf.wrapT=n,nf.generateMipmaps=!1,nf.needsUpdate=!0),nf}var af=class{constructor(e={}){let{canvas:t=Ye(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([ee,j,k]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D=new H,O=null,A=null,M=[],N=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,ne=!1,re=null,ie=null,ae=null,oe=null;this._outputColorSpace=ze;let se=0,ce=0,F=null,le=-1,ue=null,de=new Yt,fe=new Yt,pe=null,me=new W(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new Yt(0,0,ge,_e),Se=new Yt(0,0,ge,_e),Ce=!1,we=new Yi,Te=!1,Ee=!1,De=new U,Oe=new H,ke=new Yt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return F===null?ve:1}let I=n;function Ne(e,n){return t.getContext(e,n)}let Pe,Fe,L,Ie,R,Le,Re,Be,Ve,He,Ue,We,Ke,qe,Je,Xe,Qe,$e,tt,nt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),I===null){let t=`webgl2`;if(I=Ne(t,e),I===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),B(`WebGLRenderer: `+e.message),e}function ot(){Pe=new Sl(I),Pe.init(),rt=new Kd(I,Pe),Fe=new Zc(I,Pe,e,rt),L=new Wd(I,Pe),Fe.reversedDepthBuffer&&m&&L.buffers.depth.setReversed(!0),ie=I.createFramebuffer(),ae=I.createFramebuffer(),oe=I.createFramebuffer(),Ie=new Tl(I),R=new wd,Le=new Gd(I,Pe,L,R,Fe,rt,Ie),Re=new xl(P),Be=new Hc(I),it=new Yc(I,Be),Ve=new Cl(I,Be,Ie,it),He=new Dl(I,Ve,Be,it,Ie),$e=new El(I,Fe,Le),Je=new Qc(R),Ue=new Cd(P,Re,Pe,Fe,it,Je),We=new $d(P,R),Ke=new Od,qe=new Fd(Pe),Qe=new Jc(P,Re,L,He,x,s),Xe=new Ud(P,He,Fe),at=new ef(I,Ie,Fe,L),tt=new Xc(I,Pe,Ie),nt=new wl(I,Pe,Ie),Ie.programs=Ue.programs,P.capabilities=Fe,P.extensions=Pe,P.properties=R,P.renderLists=Ke,P.shadowMap=Xe,P.state=L,P.info=Ie}S!==1009&&(te=new kl(S,t.width,t.height,o,r,i));let st=new Xd(P,I);this.xr=st,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){if(st.isPresenting){z(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=C.has(t)}if(e){let e=F.texture.type,t=w.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,I.clearBufferuiv(I.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,I.clearBufferiv(I.COLOR,0,E))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),Qe.dispose(),Ke.dispose(),qe.dispose(),R.dispose(),Re.dispose(),He.dispose(),it.dispose(),at.dispose(),Ue.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,_t),st.removeEventListener(`sessionend`,vt),yt.stop()};function ct(e){e.preventDefault(),Ze(`WebGLRenderer: Context Lost.`),ne=!0}function lt(){Ze(`WebGLRenderer: Context Restored.`),ne=!1;let e=Ie.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;ot(),Ie.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ut(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),R.remove(e)}function pt(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Be.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Me()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){re!==null&&e.isNodeMaterial&&re.setObject(r,e),Te===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),re!==null&&re.renderStart(e,t,n),A=qe.get(n),A.init(t),N.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),re!==null&&re.updateLights(A.state.lightsArray),Ee=this.localClippingEnabled,Te=Je.init(this.clippingPlanes,Ee),Te===!0&&Je.setGlobalState(this.clippingPlanes,t),re!==null&&Xe.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),A=N.pop(),re!==null&&re.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function gt(e){ht&&ht(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new Vc;yt.setAnimationLoop(gt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ht=e,st.setAnimationLoop(e),e===null?yt.stop():yt.start()},st.addEventListener(`sessionstart`,_t),st.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=te!==null&&(F===null||n)&&te.begin(P,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,F),A=qe.get(e,N.length),A.init(t),A.state.textureUnits=Le.getTextureUnits(),N.push(A),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(De,Ge,t.reversedDepth),Ee=this.localClippingEnabled,Te=Je.init(this.clippingPlanes,Ee),O=Ke.get(e,M.length),O.init(),M.push(O),st.enabled===!0&&st.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,P.sortObjects)}bt(e,t,0,P.sortObjects),O.finish(),re!==null&&re.updateLights(A.state.lightsArray),P.sortObjects===!0&&O.sort(ye,be),je=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,je&&Qe.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&Je.beginShadows();let i=A.state.shadowsArray;if(Xe.render(i,e,t),Te===!0&&Je.endShadows(),(r&&te.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}je&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(O,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),je&&Qe.render(e),xt(O,e,t)}F!==null&&ce===0&&(Le.updateMultisampleRenderTarget(F),Le.updateRenderTargetMipmap(F)),r&&te.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),it.resetDefaultState(),le=-1,ue=null,N.pop(),N.length>0?(A=N[N.length-1],Le.setTextureUnits(A.state.textureUnits),Te===!0&&Je.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,M.pop(),O=M.length>0?M[M.length-1]:null,re!==null&&re.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)A.pushLightProbeGrid(e);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(we)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=He.update(e),a=e.material;a.visible&&O.push(e,i,a,n,ke.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(we))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,ke.z,s,t)}}else a.visible&&O.push(e,i,a,n,ke.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),Te===!0&&Je.setGlobalState(P.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new Zt(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),c=P.getActiveCubeFace(),d=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(me),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),je&&Qe.render(n);let f=P.toneMapping;P.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),Te===!0&&Je.setGlobalState(P.clippingPlanes,r),Ct(e,n,r),Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a))}P.setRenderTarget(s,c,d),P.setClearColor(me,he),p!==void 0&&(r.viewport=p),P.toneMapping=f}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){re!==null&&i.isNodeMaterial&&re.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=Ae);let r=R.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=Ue.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,P),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Dt(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=A.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Iu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=Ae),Le.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Rt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=A.state.lights;if(Te===!0&&(Ee===!0||e!==ue)){let t=e===ue&&r.id===le;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=A.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(L.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==le&&(le=r.id,C=!0),v.needsLights){let e=Ot(A.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(I,`projectionMatrix`,e.projectionMatrix),T.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(I,Oe.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&T.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(I,`sunShadowMap`,y.state.sunShadowMap,Le),y.state.directionalShadowMap.length>0&&T.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,Le),y.state.spotShadowMap.length>0&&T.setValue(I,`spotShadowMap`,y.state.spotShadowMap,Le),y.state.pointShadowMap.length>0&&T.setValue(I,`pointShadowMap`,y.state.pointShadowMap,Le)),i.isSkinnedMesh){T.setOptional(I,i,`bindMatrix`),T.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(I,`boneTexture`,e.boneTexture,Le))}i.isBatchedMesh&&(T.setOptional(I,i,`batchingTexture`),T.setValue(I,`batchingTexture`,i._matricesTexture,Le),T.setOptional(I,i,`batchingIdTexture`),T.setValue(I,`batchingIdTexture`,i._indirectTexture,Le),T.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(I,`batchingColorTexture`,i._colorsTexture,Le));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&$e.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=rf()),C){if(T.setValue(I,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&V(E,w),a&&r.fog===!0&&We.refreshFogUniforms(E,a),We.refreshMaterialUniforms(E,r,ve,_e,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Iu.upload(I,Et(v),E,Le)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Iu.upload(I,Et(v),E,Le),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(I,`center`,i.center),T.setValue(I,`modelViewMatrix`,i.modelViewMatrix),T.setValue(I,`normalMatrix`,i.normalMatrix),T.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,x),at.bind(n,x)}}return x}function V(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),le=-1;return}if(o.__webglFramebuffer===void 0)Le.setupRenderTarget(e);else if(o.__hasExternalTextures)Le.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Le.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Le.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=ie),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}le=-1};function jt(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=jt(o);if(u.__formatReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=jt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await et(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Le.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(Le.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Le.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(Le.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,ae),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&Le.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Le.setTextureCube(e,0):e.isData3DTexture?Le.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Le.setTexture2DArray(e,0):Le.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,L.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}};function of(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new jr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=sf(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=sf(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function sf(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new gr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function cf(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function lf(e){let t=new Map,n=new Map,r=e.clone();return uf(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function uf(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)uf(e.children[r],t.children[r],n)}var df=class extends Gs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new vf(e)}),this.register(function(e){return new yf(e)}),this.register(function(e){return new Of(e)}),this.register(function(e){return new kf(e)}),this.register(function(e){return new Af(e)}),this.register(function(e){return new xf(e)}),this.register(function(e){return new Sf(e)}),this.register(function(e){return new Cf(e)}),this.register(function(e){return new wf(e)}),this.register(function(e){return new _f(e)}),this.register(function(e){return new Tf(e)}),this.register(function(e){return new bf(e)}),this.register(function(e){return new Df(e)}),this.register(function(e){return new Ef(e)}),this.register(function(e){return new hf(e)}),this.register(function(e){return new jf(e,mf.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new jf(e,mf.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Mf(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=yc.extractUrlBase(e);a=yc.resolveURL(t,this.path)}else a=yc.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new Js(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Nf){try{a[mf.KHR_BINARY_GLTF]=new If(e)}catch(e){r&&r(e);return}i=JSON.parse(a[mf.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new cp(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case mf.KHR_MATERIALS_UNLIT:a[t]=new gf;break;case mf.KHR_DRACO_MESH_COMPRESSION:a[t]=new Lf(i,this.dracoLoader);break;case mf.KHR_TEXTURE_TRANSFORM:a[t]=new Rf;break;case mf.KHR_MESH_QUANTIZATION:a[t]=new zf;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function ff(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function pf(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var mf={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},hf=class{constructor(e){this.parser=e,this.name=mf.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new W(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Be);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new vc(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new hc(s),o.distance=c;break;case`spot`:o=new pc(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),ep(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},gf=class{constructor(){this.name=mf.KHR_MATERIALS_UNLIT}getMaterialType(){return ci}extendParams(e,t,n){let r=[];e.color=new W(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Be),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,ze))}return Promise.all(r)}},_f=class{constructor(e){this.parser=e,this.name=mf.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=pf(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},vf=class{constructor(e){this.parser=e,this.name=mf.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return pf(this.parser,e,this.name)===null?null:ds}extendMaterialParams(e,t){let n=pf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new V(e,e)}return Promise.all(r)}},yf=class{constructor(e){this.parser=e,this.name=mf.KHR_MATERIALS_DISPERSION}getMaterialType(e){return pf(this.parser,e,this.name)===null?null:ds}extendMaterialParams(e,t){let n=pf(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},bf=class{constructor(e){this.parser=e,this.name=mf.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return pf(this.parser,e,this.name)===null?null:ds}extendMaterialParams(e,t){let n=pf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},xf=class{constructor(e){this.parser=e,this.name=mf.KHR_MATERIALS_SHEEN}getMaterialType(e){return pf(this.parser,e,this.name)===null?null:ds}extendMaterialParams(e,t){let n=pf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new W(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Be)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,ze)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Sf=class{constructor(e){this.parser=e,this.name=mf.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return pf(this.parser,e,this.name)===null?null:ds}extendMaterialParams(e,t){let n=pf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Cf=class{constructor(e){this.parser=e,this.name=mf.KHR_MATERIALS_VOLUME}getMaterialType(e){return pf(this.parser,e,this.name)===null?null:ds}extendMaterialParams(e,t){let n=pf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new W().setRGB(i[0],i[1],i[2],Be),Promise.all(r)}},wf=class{constructor(e){this.parser=e,this.name=mf.KHR_MATERIALS_IOR}getMaterialType(e){return pf(this.parser,e,this.name)===null?null:ds}extendMaterialParams(e,t){let n=pf(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},Tf=class{constructor(e){this.parser=e,this.name=mf.KHR_MATERIALS_SPECULAR}getMaterialType(e){return pf(this.parser,e,this.name)===null?null:ds}extendMaterialParams(e,t){let n=pf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new W().setRGB(i[0],i[1],i[2],Be),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,ze)),Promise.all(r)}},Ef=class{constructor(e){this.parser=e,this.name=mf.EXT_MATERIALS_BUMP}getMaterialType(e){return pf(this.parser,e,this.name)===null?null:ds}extendMaterialParams(e,t){let n=pf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Df=class{constructor(e){this.parser=e,this.name=mf.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return pf(this.parser,e,this.name)===null?null:ds}extendMaterialParams(e,t){let n=pf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Of=class{constructor(e){this.parser=e,this.name=mf.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},kf=class{constructor(e){this.parser=e,this.name=mf.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Af=class{constructor(e){this.parser=e,this.name=mf.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},jf=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Mf=class{constructor(e){this.name=mf.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Uf.TRIANGLES&&e.mode!==Uf.TRIANGLE_STRIP&&e.mode!==Uf.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new U,n=new H,a=new At,s=new H(1,1,1),c=new Gi(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new Li(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new jr,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new Li(t.array,t.itemSize,t.normalized))}Dn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Nf=`glTF`,Pf=12,Ff={JSON:1313821514,BIN:5130562},If=class{constructor(e){this.name=mf.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Pf),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nf)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Pf,i=new DataView(e,Pf),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Ff.JSON){let r=new Uint8Array(e,Pf+a,t);this.content=n.decode(r)}else if(r===Ff.BIN){let n=Pf+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Lf=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=mf.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=Jf[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=Jf[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Wf[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Be,n)})})}},Rf=class{constructor(){this.name=mf.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},zf=class{constructor(){this.name=mf.KHR_MESH_QUANTIZATION}},Bf=class extends xs{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Vf=new At,Hf=class extends Bf{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Vf.fromArray(i).normalize().toArray(i),i}},Uf={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Wf={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gf={9728:i,9729:s,9984:a,9985:c,9986:o,9987:l},Kf={33071:n,33648:r,10497:t},qf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jf={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Yf={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},Xf={CUBICSPLINE:void 0,LINEAR:Ne,STEP:I},Zf={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Qf(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new us({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function $f(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function ep(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function tp(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function np(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function rp(e){let t,n=e.extensions&&e.extensions[mf.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+ip(n.attributes):e.indices+`:`+ip(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+ip(e.targets[n]);return t}function ip(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function ap(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function op(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var sp=new U,cp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ff,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new Zs(this.options.manager):new xc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Js(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return $f(i,a,r),ep(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mf.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(yc.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=qf[r.type],t=Wf[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new gr(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=qf[r.type],o=Wf[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Mr(f,u/s),t.cache.add(n,c)),p=new Pr(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new gr(f,a,d);if(r.sparse!==void 0){let t=qf.SCALAR,n=Wf[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new gr(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Gf[n.magFilter]||1006,t.minFilter=Gf[n.minFilter]||1008,t.wrapS=Kf[n.wrapS]||1e3,t.wrapT=Kf[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Jt(e);t.needsUpdate=!0,n(t)}),t.load(yc.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),ep(e,a),e.userData.mimeType=a.mimeType||op(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[mf.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[mf.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[mf.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new ua,Br.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Xi,Br.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return us}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[mf.KHR_MATERIALS_UNLIT]){let e=r[mf.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new W(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Be),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,ze)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||Zf.OPAQUE;if(l===Zf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Zf.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==ci&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new V(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==ci&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==ci){let e=i.emissiveFactor;o.emissive=new W().setRGB(e[0],e[1],e[2],Be)}return i.emissiveTexture!==void 0&&a!==ci&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,ze)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),ep(n,i),t.associations.set(n,{materials:e}),i.extensions&&$f(r,n,i),n})}createUniqueName(e){let t=Lc.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[mf.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return up(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=rp(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[mf.KHR_DRACO_MESH_COMPRESSION]?i(o):up(new jr,o,t),o.mode===Uf.TRIANGLE_STRIP?e=e.then(e=>cf(e,1)):o.mode===Uf.TRIANGLE_FAN&&(e=e.then(e=>cf(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Qf(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Uf.TRIANGLES||u.mode===Uf.TRIANGLE_STRIP||u.mode===Uf.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new ji(l,f):new G(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===Uf.LINES)d=new ca(l,f);else if(u.mode===Uf.LINE_STRIP)d=new ia(l,f);else if(u.mode===Uf.LINE_LOOP)d=new la(l,f);else if(u.mode===Uf.POINTS)d=new ha(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&np(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),ep(d,i),u.extensions&&$f(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&$f(r,c[0],i),c[0];let l=new On;i.extensions&&$f(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new dc(kt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new gc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ep(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new U;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Ii(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new Rs(i,void 0,l);return ep(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,sp)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new H().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Mi:t.length>1?new On:t.length===1?t[0]:new Dn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),ep(o,i),i.extensions&&$f(n,o,i),i.matrix!==void 0){let e=new U;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new On;n.name&&(i.name=r.createUniqueName(n.name)),ep(i,n),n.extensions&&$f(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(lf(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Br||e instanceof Jt)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Yf[i.path]===Yf.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Yf[i.path]){case Yf.weights:l=Ns;break;case Yf.rotation:l=Fs;break;case Yf.translation:case Yf.scale:l=Ls;break;default:switch(n.itemSize){case 1:l=Ns;break;default:l=Ls}}let u=r.interpolation===void 0?Ne:Xf[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Yf[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=ap(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Fs?Hf:Bf)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lp(e,t,n){let r=t.attributes,i=new Qn;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new H(t[0],t[1],t[2]),new H(a[0],a[1],a[2])),e.normalized){let t=ap(Wf[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new H,t=new H;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=ap(Wf[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Cr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function up(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=Jf[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Rt.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),ep(e,t),lp(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:tp(e,t.targets,n)})}var dp=class{manager=new Us;gltfLoader=new df(this.manager);textureLoader=new Zs(this.manager);cache=new Map;listeners=new Set;constructor(){this.manager.onProgress=(e,t,n)=>{let r=n>0?t/n:1;for(let e of this.listeners)e(r)}}onProgress(e){return this.listeners.add(e),()=>this.listeners.delete(e)}gltf(e){return this.memo(e,()=>this.gltfLoader.loadAsync(e))}texture(e,{color:n=!0,repeat:r}={}){return this.memo(`${e}#${n}#${r??1}`,async()=>{let i=await this.textureLoader.loadAsync(e);return n&&(i.colorSpace=ze),r&&(i.wrapS=i.wrapT=t,i.repeat.set(r,r)),i})}memo(e,t){let n=this.cache.get(e);return n||(n=t(),this.cache.set(e,n),n.catch(()=>this.cache.delete(e))),n}},fp={jump:[`Space`],sprint:[`ShiftLeft`,`ShiftRight`],dash:[`KeyF`,`KeyJ`],pause:[`Escape`,`KeyP`],confirm:[`Enter`,`NumpadEnter`],back:[],interact:[`KeyE`]},pp={up:[`KeyW`,`ArrowUp`],down:[`KeyS`,`ArrowDown`],left:[`KeyA`,`ArrowLeft`],right:[`KeyD`,`ArrowRight`]},mp={jump:[0],sprint:[4,10],dash:[2,5,7],pause:[9],confirm:[0],back:[1],interact:[3]},hp=class{canvas;move={x:0,y:0};look={x:0,y:0};method=`keyboard`;sensitivity=1;invertY=!1;keys=new Set;held_=new Set;pressed_=new Set;touchMove={x:0,y:0};touchButtons=new Set;padPrev=[];padIndex=-1;padId=``;listeners=[];constructor(e){this.canvas=e;let t=(e,t,n,r)=>{e.addEventListener(t,n,r),this.listeners.push(()=>e.removeEventListener(t,n,r))};t(window,`keydown`,e=>{if(!e.repeat){this.keys.add(e.code),this.method=`keyboard`;for(let[t,n]of Object.entries(fp))n.includes(e.code)&&this.pressed_.add(t);!e.target?.matches?.(`input, textarea`)&&(e.code===`Space`||e.code.startsWith(`Arrow`))&&e.preventDefault()}}),t(window,`keyup`,e=>this.keys.delete(e.code)),t(window,`blur`,()=>this.keys.clear()),t(window,`gamepaddisconnected`,e=>{e.gamepad.index===this.padIndex&&this.resetPad()}),t(window,`mousedown`,t=>{document.pointerLockElement===e&&t.button===0&&this.pressed_.add(`dash`)}),t(window,`mousemove`,t=>{document.pointerLockElement===e&&(this.look.x+=t.movementX*.0022,this.look.y+=t.movementY*.0022)})}lockPointer(){this.method!==`touch`&&document.pointerLockElement!==this.canvas&&this.canvas.requestPointerLock?.()?.catch?.(()=>void 0)}unlockPointer(){document.pointerLockElement&&document.exitPointerLock()}setTouchMove(e,t){this.method=`touch`,this.touchMove.x=e,this.touchMove.y=t}addTouchLook(e,t){this.method=`touch`,this.look.x+=e*.006,this.look.y+=t*.006}setTouchButton(e,t){this.method=`touch`,t&&!this.touchButtons.has(e)&&this.pressed_.add(e),t?this.touchButtons.add(e):this.touchButtons.delete(e)}resetPad(){this.padPrev=[],this.padIndex=-1,this.padId=``}update(e=1/60){let t=e=>e.some(e=>this.keys.has(e)),n=+!!t(pp.right)-!!t(pp.left),r=+!!t(pp.up)-!!t(pp.down);this.held_.clear();for(let[e,n]of Object.entries(fp))t(n)&&this.held_.add(e);for(let e of this.touchButtons)this.held_.add(e);(this.touchMove.x!==0||this.touchMove.y!==0)&&(n=this.touchMove.x,r=this.touchMove.y);let i=navigator.getGamepads?.().find(e=>e&&e.connected);if(i){(i.index!==this.padIndex||i.id!==this.padId)&&(this.padPrev=[]),this.padIndex=i.index,this.padId=i.id;let t=e=>Math.abs(e)<.18?0:e,a=t(i.axes[0]??0),o=t(i.axes[1]??0),s=t(i.axes[2]??0),c=t(i.axes[3]??0);(a!==0||o!==0||s!==0||c!==0||i.buttons.some(e=>e.pressed))&&(this.method=`gamepad`);let l=+!!i.buttons[15]?.pressed-!!i.buttons[14]?.pressed,u=+!!i.buttons[12]?.pressed-!!i.buttons[13]?.pressed;(a!==0||o!==0||l!==0||u!==0)&&(n=l||a,r=u||-o),this.look.x+=s*2.7*e,this.look.y+=c*2.7*e;for(let[e,t]of Object.entries(mp))t.some(e=>i.buttons[e]?.pressed)&&this.held_.add(e),t.some(e=>i.buttons[e]?.pressed&&!this.padPrev[e])&&this.pressed_.add(e);this.padPrev=i.buttons.map(e=>e.pressed)}else this.resetPad();let a=Math.hypot(n,r);this.move.x=a>1?n/a:n,this.move.y=a>1?r/a:r}held(e){return this.held_.has(e)}pressed(e){return this.pressed_.has(e)}consume(e){return this.pressed_.delete(e)}takeLook(){let e={x:this.look.x*this.sensitivity,y:this.look.y*this.sensitivity*(this.invertY?-1:1)};return this.look.x=0,this.look.y=0,e}endFrame(){this.pressed_.clear()}dispose(){for(let e of this.listeners)e();this.listeners=[]}},gp={low:{pixelRatio:1,shadows:!1,antialias:!1},medium:{pixelRatio:1.5,shadows:!0,antialias:!0},high:{pixelRatio:2,shadows:!0,antialias:!0}};function _p(){let e=matchMedia(`(pointer: coarse)`).matches,t=navigator.hardwareConcurrency??4;return e||t<=4?`medium`:`high`}var vp=class{canvas;gl;preset;quality;constructor(e,t){this.canvas=e,this.quality=t,this.preset=gp[t],this.gl=new af({canvas:e,antialias:this.preset.antialias,powerPreference:`high-performance`}),this.gl.outputColorSpace=ze,this.gl.toneMapping=0,this.gl.shadowMap.type=1,this.applyQuality(t),window.addEventListener(`resize`,()=>this.resize())}applyQuality(e){this.quality=e,this.preset=gp[e],this.gl.shadowMap.enabled=this.preset.shadows,this.gl.setPixelRatio(Math.min(window.devicePixelRatio||1,this.preset.pixelRatio)),this.resize()}get viewHeight(){return this.canvas.clientHeight||window.innerHeight}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.gl.setSize(e,t,!1)}render(e,t){let n=this.canvas.clientWidth||window.innerWidth,r=this.canvas.clientHeight||window.innerHeight;Math.abs(t.aspect-n/r)>.001&&(t.aspect=n/r,t.updateProjectionMatrix()),this.gl.render(e,t)}},yp={character:`patty`,outfit:`patisserie`,hairstyle:`buns`,hairColor:`rose`,eyeColor:`blue`},bp=`hillside.patisserie.save`,xp=`hillside.patisserie.slot`,Sp=e=>e===1?bp:`${bp}:${e}`;function Cp(e=globalThis.localStorage){try{let t=e?.getItem(xp);return t===`2`?2:t===`3`?3:1}catch{return 1}}var wp={preset:`mauve`,hairStyle:`bobBraid`,hairColor:`#7a4a32`,eyeColor:`#6a3b2a`,outfit:`kimono`,outfitColor:6,skin:0,apron:``,outfitKind:``,accessory:``};function Tp(){return{version:2,musicVolume:.6,sfxVolume:.8,muted:!1,sensitivity:1,quality:``,tutorialDone:!1,look:{...wp},lookSwapped:!0,appearance:{...yp},quest:0,cake:!1,started:!1,flowers:0,discovered:[],errandDay:``,errandState:0,errandDone:0,visited:[],talked:[],requests:{},reqData:{},album:[],fish:[],fishCaught:0,stars:[],cat:0,catDay:``,bagFlowers:0,bagFish:[],bagVeg:0,friends:{},friendDay:{},treasures:0,treasureDay:``,farmStart:[``,``,``,``,``,``],farmKind:[0,0,0,0,0,0],museum:[],homeItems:[]}}var Ep=e=>{if(!e||typeof e!=`object`||Array.isArray(e))return{};let t={};for(let[n,r]of Object.entries(e))if(n.length>0&&n.length<24&&typeof r==`number`&&Number.isFinite(r)&&(t[n]=Math.min(1e6,Math.max(0,Math.floor(r)))),Object.keys(t).length>=24)break;return t},Dp=(e,t)=>Array.isArray(e)?e.filter(e=>typeof e==`string`&&e.length<24).slice(0,t):[],Op=e=>{if(!e||typeof e!=`object`||Array.isArray(e))return{};let t={};for(let[n,r]of Object.entries(e))if(n.length>0&&n.length<24&&typeof r==`string`&&(t[n]=r),Object.keys(t).length>=24)break;return t},kp=(e,t)=>typeof e==`number`&&Number.isFinite(e)?Math.min(1,Math.max(0,e)):t,Ap=(e,t)=>typeof e==`string`&&e.length>0&&e.length<24?e:t,jp=(e,t)=>typeof e==`string`&&/^#[0-9a-fA-F]{6}$/.test(e)?e:t;function Mp(e){let t=Tp();if(!e)return t;let n;try{let r=JSON.parse(e);if(!r||typeof r!=`object`||Array.isArray(r))return t;n=r}catch{return t}if(n.version!==2)return t;let r=n.look&&typeof n.look==`object`?n.look:{},i={preset:Ap(r.preset,t.look.preset),hairStyle:Ap(r.hairStyle,t.look.hairStyle),hairColor:jp(r.hairColor,t.look.hairColor),eyeColor:jp(r.eyeColor,t.look.eyeColor),outfit:Ap(r.outfit,t.look.outfit),outfitColor:typeof r.outfitColor==`number`&&r.outfitColor>=0&&r.outfitColor<12?Math.floor(r.outfitColor):0,skin:typeof r.skin==`number`&&r.skin>=0&&r.skin<4?Math.floor(r.skin):0,apron:Ap(r.apron,t.look.apron),outfitKind:Ap(r.outfitKind,t.look.outfitKind),accessory:Ap(r.accessory,t.look.accessory)};n.lookSwapped!==!0&&(i.preset=`mauve`,i.hairStyle=`bobBraid`,i.apron=``,i.outfitKind=``,i.accessory=``);let a=n.appearance&&typeof n.appearance==`object`?n.appearance:{},o={character:Ap(a.character,t.appearance.character),outfit:Ap(a.outfit,t.appearance.outfit),hairstyle:Ap(a.hairstyle,t.appearance.hairstyle),hairColor:Ap(a.hairColor,t.appearance.hairColor),eyeColor:Ap(a.eyeColor,t.appearance.eyeColor)},s=n.quality;return{version:2,musicVolume:kp(n.musicVolume,t.musicVolume),sfxVolume:kp(n.sfxVolume,t.sfxVolume),muted:n.muted===!0,sensitivity:typeof n.sensitivity==`number`&&n.sensitivity>=.2&&n.sensitivity<=3?n.sensitivity:1,quality:s===`low`||s===`medium`||s===`high`?s:``,tutorialDone:n.tutorialDone===!0,look:i,lookSwapped:!0,appearance:o,quest:typeof n.quest==`number`&&n.quest>=0&&n.quest<=3?Math.floor(n.quest):0,cake:typeof n.cake==`boolean`?n.cake:typeof n.quest==`number`&&Math.floor(n.quest)===0,started:n.started!==!1,flowers:typeof n.flowers==`number`&&n.flowers>=0&&n.flowers<=5?Math.floor(n.flowers):0,discovered:Array.isArray(n.discovered)?n.discovered.filter(e=>typeof e==`string`).slice(0,40):[],errandDay:typeof n.errandDay==`string`&&/^\d{4}-\d{2}-\d{2}$/.test(n.errandDay)?n.errandDay:``,errandState:typeof n.errandState==`number`&&n.errandState>=0&&n.errandState<=2?Math.floor(n.errandState):0,errandDone:typeof n.errandDone==`number`&&n.errandDone>=0?Math.floor(n.errandDone):0,visited:Array.isArray(n.visited)?n.visited.filter(e=>typeof e==`string`).slice(0,60):[],talked:Array.isArray(n.talked)?n.talked.filter(e=>typeof e==`string`).slice(0,20):[],requests:Ep(n.requests),reqData:Ep(n.reqData),album:Array.isArray(n.album)?n.album.filter(e=>typeof e==`string`&&e.startsWith(`data:image/`)&&e.length<15e4).slice(0,12):[],fish:Array.isArray(n.fish)?n.fish.filter(e=>typeof e==`string`).slice(0,20):[],fishCaught:typeof n.fishCaught==`number`&&n.fishCaught>=0?Math.floor(n.fishCaught):0,stars:Array.isArray(n.stars)?n.stars.filter(e=>typeof e==`string`).slice(0,12):[],cat:typeof n.cat==`number`&&n.cat>=0&&n.cat<=5?Math.floor(n.cat):0,catDay:typeof n.catDay==`string`&&/^\d{4}-\d{2}-\d{2}$/.test(n.catDay)?n.catDay:``,bagFlowers:typeof n.bagFlowers==`number`&&n.bagFlowers>=0&&n.bagFlowers<=9?Math.floor(n.bagFlowers):0,bagFish:Dp(n.bagFish,6),bagVeg:typeof n.bagVeg==`number`&&n.bagVeg>=0&&n.bagVeg<=9?Math.floor(n.bagVeg):0,friends:Ep(n.friends),friendDay:Op(n.friendDay),treasures:typeof n.treasures==`number`&&n.treasures>=0?Math.floor(n.treasures):0,treasureDay:typeof n.treasureDay==`string`&&/^\d{4}-\d{2}-\d{2}$/.test(n.treasureDay)?n.treasureDay:``,farmStart:Array.from({length:6},(e,t)=>{let r=Array.isArray(n.farmStart)?n.farmStart[t]:``;return typeof r==`string`&&/^\d{4}-\d{2}-\d{2}$/.test(r)?r:``}),farmKind:Array.from({length:6},(e,t)=>{let r=Array.isArray(n.farmKind)?n.farmKind[t]:0;return r===1||r===2?r:0}),museum:Dp(n.museum,11),homeItems:(Array.isArray(n.homeItems)?n.homeItems:[]).filter(e=>!!e&&typeof e==`object`&&typeof e.id==`string`).map(e=>({id:e.id,x:typeof e.x==`number`&&Number.isFinite(e.x)?e.x:0,z:typeof e.z==`number`&&Number.isFinite(e.z)?e.z:0,ry:typeof e.ry==`number`&&Number.isFinite(e.ry)?e.ry:0})).slice(0,8)}}var Np=class{storage;data;key;constructor(e=globalThis.localStorage,t){this.storage=e,this.key=t??Sp(Cp(e));let n=null;try{n=this.storage?.getItem(this.key)??null}catch{n=null}this.data=Mp(n)}update(e){this.data={...this.data,...e};try{this.storage?.setItem(this.key,JSON.stringify(this.data))}catch{}}},Pp={uTime:{value:0},uSnow:{value:0},uWet:{value:0},uWind:{value:0},uNight:{value:0},uIce:{value:0},uRainT:{value:0}},Fp;function Ip(){return Fp||(Fp=new Ni(new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255]),3,1,T),Fp.minFilter=Fp.magFilter=i,Fp.generateMipmaps=!1,Fp.needsUpdate=!0,Fp)}var Lp=`
float gHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float gNoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(gHash(i), gHash(i+vec2(1.,0.)), f.x), mix(gHash(i+vec2(0.,1.)), gHash(i+vec2(1.,1.)), f.x), f.y);
}
`;function Rp(e,t={}){let n=`p${t.sway??0}_${t.snow?.join(`_`)??`n`}_${t.wet??0}`;return e.customProgramCacheKey=()=>n,e.onBeforeCompile=e=>{Object.assign(e.uniforms,Pp),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
         varying vec3 vWP; varying vec3 vWN;
         uniform float uTime; uniform float uWind;
         ${t.sway?`attribute float aSway;`:``}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
         ${t.sway?`{
           vec4 _m = vec4(transformed, 1.0);
           #ifdef USE_INSTANCING
             _m = instanceMatrix * _m;
           #endif
           vec3 _w = (modelMatrix * _m).xyz;
           float _a = (0.05 + uWind * 0.55) * ${t.sway.toFixed(3)} * aSway;
           float _s = uTime * (1.3 + uWind * 2.4);
           transformed.x += sin(_s + _w.x * 0.45 + _w.z * 0.3) * _a * 0.18;
           transformed.z += cos(_s * 0.9 + _w.z * 0.4 + _w.x * 0.25) * _a * 0.12;
         }`:``}`).replace(`#include <defaultnormal_vertex>`,`#include <defaultnormal_vertex>
         vWN = inverseTransformDirection(transformedNormal, viewMatrix);`).replace(`#include <project_vertex>`,`#include <project_vertex>
         {
           vec4 _p = vec4(transformed, 1.0);
           #ifdef USE_INSTANCING
             _p = instanceMatrix * _p;
           #endif
           vWP = (modelMatrix * _p).xyz;
         }`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
         varying vec3 vWP; varying vec3 vWN;
         uniform float uSnow; uniform float uWet; uniform float uTime;
         ${Lp}`).replace(`#include <color_fragment>`,`#include <color_fragment>
         {
           float _ny = normalize(vWN).y;
           ${t.snow?`float _sm = uSnow * smoothstep(${t.snow[0].toFixed(2)}, ${t.snow[1].toFixed(2)}, _ny);
           _sm *= 0.78 + 0.22 * gNoise(vWP.xz * 2.7 + vWP.y);
           _sm = smoothstep(0.15, 0.6, _sm);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.96, 1.0), _sm);`:``}
           ${t.wet?`diffuseColor.rgb *= 1.0 - ${t.wet.toFixed(2)} * uWet;`:``}
         }`)},e.needsUpdate=!0,e}function zp(e={},t){let n=new fs({gradientMap:Ip(),...e});return t?Rp(n,t):n}var Bp=(e,t,n)=>e<t?t:e>n?n:e,Vp=(e,t,n)=>e+(t-e)*n,Hp=(e,t,n)=>{let r=Bp((n-e)/(t-e),0,1);return r*r*(3-2*r)},Up=(e,t,n,r)=>Vp(e,t,1-Math.exp(-n*r));function Wp(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Gp(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Kp(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=Gp(n,r),l=Gp(n+1,r),u=Gp(n,r+1),d=Gp(n+1,r+1);return Vp(Vp(c,l,o),Vp(u,d,o),s)}function qp(e,t,n=3){let r=0,i=.5,a=1;for(let o=0;o<n;o+=1)r+=Kp(e*a,t*a)*i,i*=.5,a*=2.03;return r}function Jp(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>0?((e-n)*o+(t-r)*s)/c:0;return l=Bp(l,0,1),{d:Math.hypot(e-(n+o*l),t-(r+s*l)),t:l}}function Yp(e,t,n){let r=1/0;for(let i=0;i<n.length-1;i+=1)r=Math.min(r,Jp(e,t,n[i][0],n[i][1],n[i+1][0],n[i+1][1]).d);return r}var Xp=e=>{let t=parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255]},Zp=(e,t)=>{let[n,r,i]=Xp(e),a=e=>Math.round(Bp(t>=0?e+(255-e)*t:e*(1+t),0,255));return`#${[a(n),a(r),a(i)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`},Qp=6.4,$p=-.46,em=-.4,tm=.15,nm=.46,rm={minX:-145,maxX:145,minZ:-88,maxZ:230},im={x:47,z:-7,y:8.2},am=e=>63+2.5*Math.sin(e*.045+.6),om=5.2,sm=[[0,-10],[-1.5,-18],[1.5,-27],[0,-35],[0,-44]],cm=[[0,10],[0,24],[0,38],[0,52],[0,56]],lm=[[10,-8],[17,-9],[24,-9],[31,-9.5],[38,-9],[44.5,-7.5]],um=[[0,70],[-3,80],[4,90],[8,100],[12,110]],dm=[[-24,3],[-38,3],[-52,2],[-63,2]],fm=[[-9.5,-50],[-8,-58],[-4,-64],[0,-67]],pm=[[52,-7],[57,-8],[61,-8]],mm=[[[-63,2],[-76,0],[-86,-4],[-95,-10]],[[-95,-10],[-98,-25],[-102,-40]],[[-95,-10],[-103,4],[-110,20]],[[-110,20],[-120,36],[-130,55]],[[-86,-4],[-87,16],[-88,40]],[[61,-8],[72,-2],[84,6],[96,18],[96,25]],[[96,25],[100,-6],[105,-30]],[[96,18],[112,4],[128,10]],[[84,6],[87,26],[90,44],[100,44],[112,46]],[[12,110],[10,128],[10,146],[10,160],[18,182],[30,205]],[[10,128],[-24,130],[-48,138],[-66,128],[-70,120]],[[-48,138],[-56,146],[-60,150]],[[-66,128],[-78,142],[-90,160]],[[18,182],[0,196],[-28,206],[-50,215]],[[10,160],[-12,166],[-30,170]],[[10,128],[36,128],[58,124],[70,120]],[[58,124],[72,136],[85,150]],[[18,182],[34,180],[50,175]]],hm=[];function gm(e){hm.push(e)}var _m=e=>{let t=Bp((e+12)/-26,0,1);return Qp*t*t*(3-2*t)};function vm(e,t){let n=_m(t);n+=30*Hp(-50,-140,t)*(.7+.5*qp(e*.03,t*.03));let r=e-47,i=t+7;n+=8*Math.exp(-((Math.hypot(r,i)/13.5)**2));let a=Math.max(0,Math.abs(e)-60);n+=38*Hp(0,95,a);let o=am(e),s=Math.abs(t-o);{let r=t<o,i=Hp(6.800000000000001,3.6,s),a=tm;t<o-8&&(a=Vp(0,tm,Hp(30,52,t)));let c=a;r||(c+=1.3*Hp(o+8,o+50,t)+.35*qp(e*.06,t*.06)+9*Hp(o+55,o+100,t)),c=Vp(c,-1.15,i),n=Vp(n,c,Hp(-14,54,t))}return n+=(qp(e*.11,t*.11,2)-.4)*.35*(1-Hp(0,1,Math.max(0,14-Math.hypot(e,t))/14)),n}function ym(e,t,n){let r=Math.cos(e.rot),i=Math.sin(e.rot),a=t-e.x,o=n-e.z,s=a*r-o*i,c=a*i+o*r,l=Math.max(0,Math.abs(s)-e.hx),u=Math.max(0,Math.abs(c)-e.hz),d=Math.hypot(l,u);return 1-Hp(0,e.margin,d)}function q(e,t){let n=vm(e,t);n=Vp(0,n,Hp(11,17,Math.hypot(e,t)));for(let r of hm){let i=ym(r,e,t);i>0&&(n=Vp(n,r.y,i))}return n}function bm(e,t){let n=qp(e*.35,t*.35,2)-.5,r=1-Hp(11.6,12.4,Math.hypot(e,t)+n*1.2);r=Math.max(r,+(Math.abs(e)<13&&t<-37&&t>-50)*(1-Hp(10.5,13,Math.abs(e)+n))),r=Math.max(r,1-Hp(4.2,5.2,Math.hypot(e-im.x,t-im.z)+n*.6));let i=1-Hp(-.15,.55,Math.min(Yp(e,t,sm)-3.1,Yp(e,t,cm)-3)+n*.5);i=Math.max(i,1-Hp(2.2,3,Math.hypot(e,t-56)+n));let a=1-Hp(.7,1.7,Math.min(Yp(e,t,lm),Yp(e,t,um),Yp(e,t,dm),Yp(e,t,fm),Yp(e,t,pm),...mm.map(n=>Yp(e,t,n)))+n*.8),o=am(e),s=1-Hp(4.7,7.6,Math.abs(t-o)+n);a=Math.max(a,s),r=Math.min(1,r),i=Math.min(i,1-r),a=Math.min(a,1-r-i);let c=Math.max(0,1-r-i-a);return{plaza:r,road:i,grass:c,dirt:a}}var xm=(e,t)=>Math.abs(t-am(e)),Sm=(e,t)=>xm(e,t)<6.4,Cm=`#6b3f4c`,wm=`#5a4a5c`,Tm=`#a65d48`,Em=[{id:`florist`,kind:`florist`,enter:!0,name:`花屋 はなびより`,x:-19,z:-3,w:8.5,d:7,ry:Math.PI/2,floors:2,wall:`#f3e4cd`,roof:Cm,trim:`#6f4a3b`,awning:[`#d8708a`,`#fbeee4`],doorX:-1.5,chimney:!0},{id:`cafe`,kind:`cafe`,name:`喫茶 こもれび`,x:19.5,z:4,w:9.5,d:8.5,ry:-Math.PI/2,floors:2,enter:!0,wall:`#efd9b5`,roof:Tm,trim:`#5b3d2e`,awning:[`#3f7d73`,`#f6ecd9`],doorX:-2.2},{id:`bookshop`,kind:`bookshop`,enter:!0,name:`広場の本屋`,x:-11,z:17.5,w:8,d:6.5,ry:Math.PI,floors:2,wall:`#e7dccb`,roof:Cm,trim:`#5a3c34`,awning:[`#7a3b52`,`#e8cfa8`],doorX:1.4},{id:`goods`,kind:`goods`,enter:!0,name:`雑貨 ことり`,x:10.5,z:17.5,w:7.5,d:6.5,ry:Math.PI,floors:2,wall:`#f1e2c4`,roof:wm,trim:`#6f4a3b`,awning:[`#e9a948`,`#fbf3e3`],doorX:-1.2},{id:`home`,kind:`home`,name:`ミナの家`,x:-12,z:-19.5,w:8.5,d:7.5,ry:0,floors:2,enter:!0,wall:`#f0dcc0`,roof:`#8a4b44`,trim:`#5f4132`,doorX:1.8,chimney:!0},{id:`bakery`,kind:`bakery`,enter:!0,name:`パン工房`,x:11.5,z:-19.5,w:8,d:7,ry:0,floors:2,wall:`#ead7ba`,roof:wm,trim:`#5f4132`,awning:[`#c8553d`,`#f6ead8`],doorX:-1.5,chimney:!0},{id:`house_w1`,kind:`house`,enter:!0,name:`さくらの家`,x:-10.5,z:-29.5,w:6.5,d:6,ry:Math.PI/2,floors:2,wall:`#e9d2c0`,roof:Cm,trim:`#614236`,doorX:.5},{id:`house_e1`,kind:`house`,enter:!0,name:`あおぞらの家`,x:10,z:-31,w:6.5,d:6,ry:-Math.PI/2,floors:2,wall:`#e3dcc4`,roof:Tm,trim:`#614236`,doorX:-.5,chimney:!0},{id:`house_w2`,kind:`house`,enter:!0,name:`もみの木の家`,x:-10.5,z:-39,w:6.5,d:6,ry:Math.PI/2,floors:2,wall:`#efe0c6`,roof:wm,trim:`#614236`,doorX:.2},{id:`house_e2`,kind:`house`,enter:!0,name:`星見の家`,x:14.5,z:-41,w:6,d:6,ry:-Math.PI/2,floors:2,wall:`#f0d9c6`,roof:Cm,trim:`#614236`,doorX:.4},{id:`patisserie`,kind:`patisserie`,name:`ヒルサイド・パティスリー`,x:0,z:-49,w:13,d:9.5,ry:0,floors:2,enter:!0,wall:`#f6e6d2`,roof:`#7a4455`,trim:`#6a4636`,awning:[`#e86f8d`,`#fff4ea`],doorX:0,chimney:!0},{id:`house_w3`,kind:`house`,enter:!0,name:`川辺の家`,x:-9.5,z:25,w:6.5,d:6,ry:Math.PI/2,floors:2,wall:`#ead9c0`,roof:Tm,trim:`#614236`,doorX:.3},{id:`house_e3`,kind:`house`,enter:!0,name:`はな畑の家`,x:9.5,z:28.5,w:6.5,d:6,ry:-Math.PI/2,floors:2,wall:`#e8dcc9`,roof:Cm,trim:`#614236`,doorX:-.4,chimney:!0},{id:`house_w4`,kind:`house`,enter:!0,name:`ねこの家`,x:-9.8,z:36,w:6.5,d:6,ry:Math.PI/2,floors:2,wall:`#efd6bd`,roof:wm,trim:`#614236`,doorX:-.3},{id:`house_e4`,kind:`house`,enter:!0,name:`そよ風の家`,x:9.8,z:38,w:6.5,d:6,ry:-Math.PI/2,floors:2,wall:`#f1e4cf`,roof:Tm,trim:`#614236`,doorX:.3},{id:`house_wv1`,kind:`house`,enter:!0,name:`山の家`,x:-95,z:-10,w:7,d:6,ry:Math.PI/2,floors:2,wall:`#e9d2c0`,roof:Cm,trim:`#614236`,doorX:.3,chimney:!0},{id:`house_wv2`,kind:`house`,enter:!0,name:`雲の家`,x:-110,z:20,w:6.5,d:6,ry:Math.PI/2,floors:2,wall:`#e3dcc4`,roof:wm,trim:`#614236`,doorX:-.4},{id:`house_wv3`,kind:`house`,enter:!0,name:`風の家`,x:-102,z:-40,w:6.5,d:6,ry:Math.PI/2,floors:1,wall:`#efe0c6`,roof:Tm,trim:`#614236`,doorX:0},{id:`house_wv4`,kind:`house`,enter:!0,name:`畑の家`,x:-88,z:40,w:6.5,d:6,ry:Math.PI,floors:1,wall:`#dfe4da`,roof:Tm,trim:`#614236`,doorX:.4},{id:`house_wv5`,kind:`house`,enter:!0,name:`遠見の家`,x:-130,z:55,w:6.5,d:6,ry:Math.PI/2,floors:2,wall:`#e8d8e0`,roof:Cm,trim:`#614236`,doorX:-.3,chimney:!0},{id:`house_ev1`,kind:`house`,enter:!0,name:`東の山の家`,x:96,z:25,w:7,d:6,ry:-Math.PI/2,floors:2,wall:`#e9d2c0`,roof:Tm,trim:`#614236`,doorX:.2,chimney:!0},{id:`house_ev2`,kind:`house`,enter:!0,name:`岩の家`,x:128,z:10,w:6.5,d:6,ry:-Math.PI/2,floors:1,wall:`#e3dcc4`,roof:wm,trim:`#614236`,doorX:0},{id:`house_ev3`,kind:`house`,enter:!0,name:`朝日の家`,x:105,z:-30,w:6.5,d:6,ry:-Math.PI/2,floors:2,wall:`#f0d9c6`,roof:Cm,trim:`#614236`,doorX:-.4},{id:`house_ev4`,kind:`house`,enter:!0,name:`川向かいの家`,x:112,z:48,w:6.5,d:6,ry:Math.PI,floors:1,wall:`#ead9c0`,roof:Tm,trim:`#614236`,doorX:.3},{id:`house_ev5`,kind:`house`,enter:!0,name:`岸辺の家`,x:90,z:48,w:6.5,d:6,ry:Math.PI,floors:1,wall:`#e8dcc9`,roof:Cm,trim:`#614236`,doorX:-.2},{id:`house_sv1`,kind:`house`,enter:!0,name:`ひまわりの家`,x:-70,z:120,w:6.5,d:6,ry:Math.PI/2,floors:1,wall:`#efe0c6`,roof:Tm,trim:`#614236`,doorX:.3},{id:`house_sv2`,kind:`house`,enter:!0,name:`そらの家`,x:70,z:120,w:6.5,d:6,ry:-Math.PI/2,floors:1,wall:`#e3dcc4`,roof:Cm,trim:`#614236`,doorX:-.3},{id:`house_sv3`,kind:`house`,enter:!0,name:`麦の家`,x:-60,z:150,w:6.5,d:6,ry:Math.PI,floors:2,wall:`#e9d2c0`,roof:wm,trim:`#614236`,doorX:0,chimney:!0},{id:`house_sv4`,kind:`house`,enter:!0,name:`西はずれの家`,x:-90,z:160,w:6.5,d:6,ry:Math.PI/2,floors:1,wall:`#dfe4da`,roof:Tm,trim:`#614236`,doorX:.2},{id:`house_sv5`,kind:`house`,enter:!0,name:`まんなかの家`,x:10,z:160,w:7,d:6.5,ry:Math.PI,floors:2,wall:`#f0dcc0`,roof:Cm,trim:`#614236`,doorX:.4,chimney:!0},{id:`house_sv6`,kind:`house`,enter:!0,name:`ぶどうの家`,x:-30,z:170,w:6.5,d:6,ry:Math.PI,floors:1,wall:`#e8d8e0`,roof:wm,trim:`#614236`,doorX:-.2},{id:`house_sv7`,kind:`house`,enter:!0,name:`みかんの家`,x:50,z:175,w:6.5,d:6,ry:Math.PI,floors:1,wall:`#efe0c6`,roof:Tm,trim:`#614236`,doorX:.3},{id:`house_sv8`,kind:`house`,enter:!0,name:`東はずれの家`,x:85,z:150,w:6.5,d:6,ry:-Math.PI/2,floors:2,wall:`#e3dcc4`,roof:Cm,trim:`#614236`,doorX:0},{id:`house_sv9`,kind:`house`,enter:!0,name:`みなみの家`,x:30,z:205,w:6.5,d:6,ry:Math.PI,floors:2,wall:`#e9d2c0`,roof:Tm,trim:`#614236`,doorX:-.4,chimney:!0},{id:`house_sv10`,kind:`house`,enter:!0,name:`はての家`,x:-50,z:215,w:6.5,d:6,ry:Math.PI,floors:1,wall:`#ead9c0`,roof:wm,trim:`#614236`,doorX:.2},{id:`library`,kind:`library`,enter:!0,name:`丘の図書館`,x:-27,z:-16,w:11,d:9,ry:Math.PI/2,floors:2,wall:`#e8e0cc`,roof:`#4a5a6a`,trim:`#5a4632`,doorX:0,chimney:!1},{id:`museum`,kind:`museum`,enter:!0,name:`坂の上博物館`,x:27,z:-16,w:11,d:9,ry:-Math.PI/2,floors:2,wall:`#ddd6c8`,roof:`#6a4a3a`,trim:`#4a3a30`,doorX:0,chimney:!1},{id:`onsen`,kind:`onsen`,enter:!0,name:`こもれび温泉`,x:-26,z:32,w:11,d:10,ry:Math.PI/2,floors:1,wall:`#e5d3ae`,roof:`#3f5a52`,trim:`#5f4132`,doorX:0,chimney:!0},{id:`hall`,kind:`hall`,enter:!0,name:`こもれびホール`,x:26,z:32,w:12,d:9,ry:-Math.PI/2,floors:2,wall:`#f0dfc0`,roof:`#a65d48`,trim:`#6a4636`,doorX:0,chimney:!1},{id:`myhome`,kind:`myhome`,enter:!0,name:`わたしの家`,x:-25,z:-33,w:7.5,d:7,ry:Math.PI/2,floors:1,wall:`#f6ead2`,roof:`#b0563f`,trim:`#6a4636`,doorX:0,chimney:!0}];function Dm(e){return Math.round(vm(e.x,e.z)*20)/20}function Om(){hm.length=0;for(let e of Em){let t=Math.abs(Math.sin(e.ry))>.5,n=(t?e.d:e.w)/2+.4,r=(t?e.w:e.d)/2+.4;gm({x:e.x,z:e.z,hx:n,hz:r,rot:0,y:Dm(e),margin:2.6})}gm({x:0,z:-46.5,hx:13,hz:10.5,rot:0,y:Qp,margin:5}),gm({x:im.x,z:im.z,hx:4.4,hz:4.4,rot:0,y:im.y-.5,margin:5}),gm({x:-70,z:2,hx:5,hz:5,rot:0,y:1.5,margin:6}),gm({x:0,z:-72,hx:9,hz:7,rot:0,y:10.6,margin:7}),gm({x:66,z:-8,hx:5,hz:5,rot:0,y:4.3,margin:6}),gm({x:13,z:101,hx:4.6,hz:4.6,rot:0,y:.5,margin:3.5})}Om();var km={flower:`<g stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"><circle cx="12" cy="7.6" r="2.1" fill="#f7d774"/><circle cx="7.4" cy="10.6" r="2.5" fill="#f2a7c3"/><circle cx="16.6" cy="10.6" r="2.5" fill="#f2a7c3"/><circle cx="9.2" cy="5.4" r="2.5" fill="#f7bcd2"/><circle cx="14.8" cy="5.4" r="2.5" fill="#f7bcd2"/><circle cx="12" cy="9.4" r="1.7" fill="#f7d774"/></g><path d="M12 13v6M12 16.4c-1.8.2-2.8-.6-3.4-1.8 1.7-.3 2.9.3 3.4 1.8z" stroke="#4e7a3a" stroke-width="1.4" fill="#7ab87a" stroke-linejoin="round"/>`,coffee:`<path d="M6 4.4c-1 1.4 1 2-.2 3.4M11 3.6c-1 1.4 1 2-.2 3.4M16 4.4c-1 1.4 1 2-.2 3.4" stroke="#b08968" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M4.5 10h12v4.6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z" fill="#fffdf7" stroke="#5a3c3d" stroke-width="1.1"/><path d="M16.5 11h1.2a2.6 2.6 0 0 1 0 5.2h-1.4" fill="none" stroke="#5a3c3d" stroke-width="1.1"/><path d="M4.5 11.4h12" stroke="#8a5a34" stroke-width="2.2"/><ellipse cx="10.5" cy="21" rx="7.4" ry="1.1" fill="#d9c8a8" stroke="#5a3c3d" stroke-width=".9"/>`,book:`<path d="M12 6.4C10.2 4.9 7.6 4.4 4.8 4.8v13c2.8-.4 5.4.1 7.2 1.6 1.8-1.5 4.4-2 7.2-1.6v-13C16.4 4.4 13.8 4.9 12 6.4z" fill="#fff8ea" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/><path d="M12 6.4v13" stroke="#5a3c3d" stroke-width="1"/><path d="M4.8 4.8C4 4.9 3.4 5.5 3.4 6.3v13c.5-.1.9-.2 1.4-.3zM19.2 4.8c.8.1 1.4.7 1.4 1.5v13c-.5-.1-.9-.2-1.4-.3z" fill="#8c4d5d"/><path d="M6.8 8.6c1.2-.2 2.3 0 3.2.5M6.8 11.4c1.2-.2 2.3 0 3.2.5M13.8 9.1c1-.5 2-1 3.2-.5M13.8 11.9c1-.5 2-1 3.2-.5" stroke="#b08968" stroke-width=".9" fill="none" stroke-linecap="round"/>`,note:`<path d="M9 20.4V10l7-2.2v10.4" fill="none" stroke="#f2c14e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6.8" cy="20.2" r="2.3" fill="#f2c14e"/><circle cx="13.8" cy="18" r="2.3" fill="#f2c14e"/><path d="M18.6 4.6c1.8.4 2.6 1.6 2.4 3.2-1.7-.2-2.6-1.4-2.4-3.2z" fill="#7ab87a" stroke="#4e7a3a" stroke-width=".8"/>`,bread:`<path d="M5.4 10.2C4 8.9 4.4 6.4 6.6 5.7 7.4 4.2 9.6 3.8 12 3.8s4.6.4 5.4 1.9c2.2.7 2.6 3.2 1.2 4.5.5.5.3 1.5-.6 1.5H6c-.9 0-1.1-1-.6-1.5z" fill="#e8a861" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/><path d="M5.8 11.6h12.4V19a1.4 1.4 0 0 1-1.4 1.4H7.2A1.4 1.4 0 0 1 5.8 19z" fill="#f0bc7d" stroke="#5a3c3d" stroke-width="1.1"/><path d="M8.8 7.2c.5.7.5 1.4 0 2.1M12 6.8c.5.7.5 1.4 0 2.1M15.2 7.2c.5.7.5 1.4 0 2.1" stroke="#b4713a" stroke-width="1" fill="none" stroke-linecap="round"/>`,cupcake:`<path d="M6.8 11h10.4l-1.4 8.2a1.5 1.5 0 0 1-1.5 1.3H9.7a1.5 1.5 0 0 1-1.5-1.3z" fill="#e8b4a0" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/><path d="M5.5 11a3.4 3.4 0 0 1 .6-6.7A5 5 0 0 1 12 2.6a5 5 0 0 1 5.9 1.7 3.4 3.4 0 0 1 .6 6.7" fill="#fff6ec" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/><circle cx="12" cy="2.4" r="1.3" fill="#d94f3d" stroke="#5a3c3d" stroke-width=".8"/><path d="M10 14.2v3M14 14.2v3" stroke="#b0563f" stroke-width="1.1" stroke-linecap="round"/>`,vase:`<path d="M9.2 3.6h5.6M10 3.6c-1.8 2.2-2.8 4.4-2.8 7 0 2 .8 3.4 1.8 4.6.7.9 1.1 1.7 1.1 2.7v1c0 .8.6 1.5 1.4 1.5h.9c.8 0 1.4-.7 1.4-1.5v-1c0-1 .4-1.8 1.1-2.7 1-1.2 1.8-2.6 1.8-4.6 0-2.6-1-4.8-2.8-7" fill="#c96f4e" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/><path d="M7.4 9.4c3 1.1 6.2 1.1 9.2 0M8.2 13.6c2.5.9 5.1.9 7.6 0" stroke="#8a4a30" stroke-width="1" fill="none"/>`,house:`<path d="M4 11.4L12 4l8 7.4" fill="none" stroke="#b0563f" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.4 10v9.4h11.2V10" fill="#fff6e8" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/><path d="M10.2 19.4v-4.6a1.8 1.8 0 0 1 3.6 0v4.6" fill="#b0563f" stroke="#5a3c3d" stroke-width=".9"/><path d="M16.8 6.2v-2h2.4v3" fill="#d9c8a8" stroke="#5a3c3d" stroke-width=".8"/>`,onsen:`<path d="M8.6 3.8c-1.2 1.6 1.2 2.2 0 3.8M12.6 3.2c-1.2 1.6 1.2 2.2 0 3.8M16.6 3.8c-1.2 1.6 1.2 2.2 0 3.8" stroke="#7fa8c9" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M4 12.6h16l-1.7 6.2a2 2 0 0 1-1.9 1.5H7.6a2 2 0 0 1-1.9-1.5z" fill="#a87950" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/><path d="M4.6 14.6h14.8" stroke="#7ec3c9" stroke-width="2.4"/>`,star:`<path d="M12 3.4l2.4 5.3 5.8.6-4.3 3.9 1.2 5.7L12 16l-5.1 2.9 1.2-5.7-4.3-3.9 5.8-.6z" fill="#f2c14e" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/>`,sun:`<circle cx="12" cy="12" r="4.6" fill="#f2c14e" stroke="#5a3c3d" stroke-width="1.1"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7" stroke="#e8913a" stroke-width="1.6" stroke-linecap="round"/>`,cloud:`<path d="M7 18.4a4.4 4.4 0 0 1-.4-8.8 5.8 5.8 0 0 1 11.2 1.2A4 4 0 0 1 17 18.4z" fill="#eef1f3" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/>`,rain:`<path d="M7 13.4a4.4 4.4 0 0 1-.4-8.8 5.8 5.8 0 0 1 11.2 1.2A4 4 0 0 1 17 13.4z" fill="#dfe7ec" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/><path d="M8.4 16.4l-1 2.4M12.6 16.4l-1 2.4M16.8 16.4l-1 2.4" stroke="#4a90c9" stroke-width="1.5" stroke-linecap="round"/>`,wind:`<path d="M3.4 9.4h9.6a2.9 2.9 0 1 0-2.8-3.8M2.8 13.4h13a3.2 3.2 0 1 1-3.1 4.1" fill="none" stroke="#7fa8c9" stroke-width="1.6" stroke-linecap="round"/><path d="M17.6 4.2c1.9.3 3 1.6 3.1 3.4-1.9-.2-3-1.5-3.1-3.4z" fill="#7ab87a" stroke="#4e7a3a" stroke-width=".8" stroke-linejoin="round"/>`,snow:`<path d="M7 13a4.4 4.4 0 0 1-.4-8.8A5.8 5.8 0 0 1 17.8 5.4 4 4 0 0 1 17 13z" fill="#eef4f8" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/><path d="M8 15.8v4M6.6 16.8l2.8 2M9.4 16.8l-2.8 2M15.8 15.8v4M14.4 16.8l2.8 2M17.2 16.8l-2.8 2" stroke="#7fb6d9" stroke-width="1.2" stroke-linecap="round"/>`,fog:`<path d="M7 12.4a4.4 4.4 0 0 1-.4-8.8 5.8 5.8 0 0 1 11.2 1.2 4 4 0 0 1-.8 7.6z" fill="#e8ecec" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/><path d="M5 16.4h14M7.4 19.6h9.2" stroke="#9db3b8" stroke-width="1.6" stroke-linecap="round"/>`,thunder:`<path d="M7 12.8a4.4 4.4 0 0 1-.4-8.8 5.8 5.8 0 0 1 11.2 1.2 4 4 0 0 1-.8 7.6z" fill="#d8dee6" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/><path d="M12.8 12.6l-2.7 4h2.2l-1.2 3.6 3.9-4.6h-2.4l1.6-3z" fill="#f2c14e" stroke="#5a3c3d" stroke-width=".9" stroke-linejoin="round"/>`,camera:`<rect x="3.4" y="7.4" width="17.2" height="12.4" rx="2.6" fill="#6b4a52" stroke="#3c2a30" stroke-width="1.1"/><path d="M9 7.4l1.4-2.6h3.2L15 7.4" fill="#6b4a52" stroke="#3c2a30" stroke-width="1.1" stroke-linejoin="round"/><circle cx="12" cy="13.6" r="3.6" fill="#bfe3e2" stroke="#3c2a30" stroke-width="1.1"/><circle cx="12" cy="13.6" r="1.7" fill="#4aa3a2"/><circle cx="17.8" cy="10.4" r=".95" fill="#f7d774"/>`,cameraLight:`<rect x="3.4" y="7.4" width="17.2" height="12.4" rx="2.6" fill="#f3e3c2" stroke="#2e2126" stroke-width="1.2"/><path d="M9 7.4l1.4-2.6h3.2L15 7.4" fill="#f3e3c2" stroke="#2e2126" stroke-width="1.2" stroke-linejoin="round"/><circle cx="12" cy="13.6" r="3.6" fill="#bfe3e2" stroke="#2e2126" stroke-width="1.2"/><circle cx="12" cy="13.6" r="1.7" fill="#4aa3a2"/><circle cx="17.8" cy="10.4" r=".95" fill="#f7d774"/>`,heart:`<path d="M12 20.2S4.9 16 2.7 11.2A5.3 5.3 0 0 1 12 6.6a5.3 5.3 0 0 1 9.3 4.6C19.1 16 12 20.2 12 20.2z" fill="#e56b8c" stroke="#5a3c3d" stroke-width="1.1" stroke-linejoin="round"/>`},Am=(e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${t}" height="${t}" aria-hidden="true">${km[e]??``}</svg>`,jm=new Map,Mm=null;function Nm(){return Mm||(Mm=Promise.all(Object.keys(km).map(e=>new Promise(t=>{let n=new Image;n.onload=()=>{jm.set(e,n),t()},n.onerror=()=>t(),n.src=`data:image/svg+xml;charset=utf-8,`+encodeURIComponent(Am(e,96))}))).then(()=>void 0),Mm)}var Pm=e=>jm.get(e);function Fm(e,t=e){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function Im(e,n={}){let r=new va(e);return n.repeat!==!1&&(r.wrapS=r.wrapT=t),r.colorSpace=n.color===!1?``:ze,r.anisotropy=n.aniso??4,r.generateMipmaps=!0,r.minFilter=l,r}function Lm(e,t){for(let n of[-e,0,e])for(let r of[-e,0,e])t(n,r)}function Rm(e,t,n,r,i,a,o=.1){for(let s=0;s<r;s+=1)e.fillStyle=n()>.5?i:a,e.globalAlpha=o*(.4+n()),e.fillRect(n()*t,n()*t,1+n()*2,1+n()*2);e.globalAlpha=1}function zm(){let[e,t]=Fm(512),n=Wp(11);t.fillStyle=`#7d6e5e`,t.fillRect(0,0,512,512);let r=[`#c4b19a`,`#b3a089`,`#d3c2aa`,`#a89681`,`#c9b6a0`,`#bba48b`,`#cdbba2`,`#b7a58f`];for(let e=0;e<11;e+=1){let i=-n()*40,a=e*46.54545454545455;for(;i<512;){let e=36+n()*30,o=43.54545454545455-n()*2,s=r[Math.floor(n()*r.length)];Lm(512,(r,c)=>{let l=i+1.5+r,u=a+1.5+c;if(l>517||l+e<-5||u>517||u+o<-5)return;let d=t.createLinearGradient(l,u,l+e*.4,u+o);d.addColorStop(0,Zp(s,.1)),d.addColorStop(1,Zp(s,-.1)),t.fillStyle=d,t.beginPath(),t.roundRect(l,u,e-3,o,10+n()*4),t.fill(),t.strokeStyle=`rgba(255,248,235,0.22)`,t.lineWidth=1.5,t.beginPath(),t.roundRect(l+1,u+1,e-5,o-2,9),t.stroke()}),i+=e}}return Rm(t,512,n,1600,`#5a4b3e`,`#fff3de`,.14),Im(e)}function Bm(){let[e,t]=Fm(256),n=Wp(5);t.fillStyle=`#9fba6f`,t.fillRect(0,0,256,256);for(let e=0;e<90;e+=1){let e=n()*256,r=n()*256,i=10+n()*26;Lm(256,(a,o)=>{let s=t.createRadialGradient(e+a,r+o,0,e+a,r+o,i);s.addColorStop(0,n()>.5?`rgba(190,215,120,0.35)`:`rgba(110,150,80,0.3)`),s.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=s,t.fillRect(e+a-i,r+o-i,i*2,i*2)})}for(let e=0;e<700;e+=1){let e=n()*256,r=n()*256;t.strokeStyle=n()>.5?`rgba(75,120,60,0.45)`:`rgba(215,235,150,0.5)`,t.lineWidth=1,t.beginPath(),t.moveTo(e,r),t.lineTo(e+(n()-.5)*3,r-3-n()*4),t.stroke()}return Im(e)}function Vm(){let[e,t]=Fm(256),n=Wp(17);t.fillStyle=`#b79a77`,t.fillRect(0,0,256,256);for(let e=0;e<60;e+=1){let e=n()*256,r=n()*256,i=8+n()*24;Lm(256,(a,o)=>{let s=t.createRadialGradient(e+a,r+o,0,e+a,r+o,i);s.addColorStop(0,n()>.5?`rgba(220,195,160,0.4)`:`rgba(120,90,65,0.3)`),s.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=s,t.fillRect(e+a-i,r+o-i,i*2,i*2)})}return Rm(t,256,n,1400,`#5a4332`,`#f1e0c4`,.3),Im(e)}function Hm(){let[e,t]=Fm(256),n=Wp(23);t.fillStyle=`#ffffff`,t.fillRect(0,0,256,256);for(let e=0;e<140;e+=1){let e=n()*256,r=n()*256,i=12+n()*30;Lm(256,(a,o)=>{let s=t.createRadialGradient(e+a,r+o,0,e+a,r+o,i);s.addColorStop(0,n()>.5?`rgba(120,100,80,0.07)`:`rgba(255,255,255,0.35)`),s.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=s,t.fillRect(e+a-i,r+o-i,i*2,i*2)})}return Rm(t,256,n,900,`#6b5744`,`#ffffff`,.12),Im(e)}function Um(){let[e,t]=Fm(256),n=Wp(31);t.fillStyle=`#e9e1d8`,t.fillRect(0,0,256,256);for(let e=0;e<46;e+=1){let r=n()*256;t.strokeStyle=n()>.4?`rgba(90,60,40,0.22)`:`rgba(255,255,255,0.3)`,t.lineWidth=1+n()*2,t.beginPath(),t.moveTo(0,r);for(let n=0;n<=256;n+=32)t.lineTo(n,r+Math.sin(n*.04+e)*2.4);t.stroke()}for(let e=0;e<4;e+=1){let e=n()*256,r=n()*256;t.fillStyle=`rgba(80,50,30,0.25)`,t.beginPath(),t.ellipse(e,r,6,3,0,0,7),t.fill()}return Im(e)}function Wm(){let[e,t]=Fm(256),n=Wp(37);for(let e=0;e<4;e+=1){let r=e*64;t.fillStyle=Zp(`#e8d6bc`,(n()-.5)*.18),t.fillRect(0,r,256,64);for(let i=0;i<7;i+=1){t.strokeStyle=`rgba(110,75,45,0.16)`,t.lineWidth=1;let a=r+6+i*8+n()*3;t.beginPath(),t.moveTo(0,a);for(let n=0;n<=256;n+=32)t.lineTo(n,a+Math.sin(n*.05+i+e)*1.5);t.stroke()}t.fillStyle=`rgba(70,45,30,0.55)`,t.fillRect(0,r,256,2);let i=n()*256;t.fillRect(i,r,2,64)}return Im(e)}function Gm(){let[e,t]=Fm(256),n=Wp(41);t.fillStyle=`#d6d0d0`,t.fillRect(0,0,256,256);for(let e=0;e<8;e+=1)for(let r=0;r<8;r+=1){let i=r*32+e%2*16,a=e*32,o=.88+n()*.12;Lm(256,(e,n)=>{let r=t.createLinearGradient(0,a+n,0,a+n+38.4);r.addColorStop(0,`rgba(255,255,255,${o*.9})`),r.addColorStop(1,`rgba(150,140,150,0.95)`),t.fillStyle=r,t.beginPath(),t.moveTo(i+e+1,a+n),t.lineTo(i+e+32-1,a+n),t.lineTo(i+e+32-1,a+n+22.4),t.quadraticCurveTo(i+e+16,a+n+40,i+e+1,a+n+22.4),t.closePath(),t.fill(),t.strokeStyle=`rgba(60,40,50,0.35)`,t.lineWidth=1.2,t.stroke()})}return Im(e)}function Km(){let[e,t]=Fm(256),n=Wp(47);t.fillStyle=`#9b8c7b`,t.fillRect(0,0,256,256);for(let e=0;e<5;e+=1){let r=-n()*30;for(;r<256;){let i=40+n()*40,a=[`#cdbfae`,`#c0b09d`,`#d6c9b7`,`#b9a893`][Math.floor(n()*4)];Lm(256,(n,o)=>{t.fillStyle=a,t.beginPath(),t.roundRect(r+n+2,e*51.2+o+2,i-4,47.2,5),t.fill()}),r+=i}}return Rm(t,256,n,800,`#5e5144`,`#fff`,.15),Im(e)}function qm(){let[e,t]=Fm(64);t.fillStyle=`#fff`,t.fillRect(0,0,64,64),t.fillStyle=`rgba(0,0,0,0.07)`;for(let e=0;e<64;e+=4)t.fillRect(e,0,2,64),t.fillRect(0,e,64,1);return Im(e)}function Jm(){let[e,t]=Fm(128);t.fillStyle=`#fff`,t.fillRect(0,0,128,128),t.fillStyle=`rgba(200,120,110,0.18)`;for(let e=0;e<2;e+=1)for(let n=0;n<2;n+=1){let r=32+n*64+e%2*0,i=32+e*64;t.beginPath();for(let e=0;e<5;e+=1){let n=e/5*Math.PI*2;t.moveTo(r,i),t.arc(r+Math.cos(n)*6,i+Math.sin(n)*6,4,0,7)}t.fill()}return Im(e)}function Ym(){let[e,t]=Fm(64),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,240,200,1)`),n.addColorStop(.25,`rgba(255,210,130,0.55)`),n.addColorStop(1,`rgba(255,190,100,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),Im(e,{repeat:!1})}function Xm(){let[e,t]=Fm(32),n=t.createRadialGradient(16,16,0,16,16,16);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.55,`rgba(255,255,255,0.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,32,32),Im(e,{repeat:!1})}function Zm(){let[e,t]=Fm(32);return t.fillStyle=`#fff`,t.beginPath(),t.ellipse(16,16,9,6,.5,0,7),t.fill(),Im(e,{repeat:!1})}function Qm(){let[e,t]=Fm(256),n=Wp(53);t.fillStyle=`#d7eef7`,t.fillRect(0,0,256,256);for(let e=0;e<40;e+=1){let e=n()*256,r=n()*256,i=16+n()*34;Lm(256,(a,o)=>{let s=t.createRadialGradient(e+a,r+o,0,e+a,r+o,i);s.addColorStop(0,n()>.5?`rgba(255,255,255,0.5)`:`rgba(120,180,210,0.35)`),s.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=s,t.fillRect(e+a-i,r+o-i,i*2,i*2)})}t.strokeStyle=`rgba(255,255,255,0.8)`,t.lineWidth=1.2;for(let e=0;e<16;e+=1){let e=n()*256,r=n()*256;t.beginPath(),t.moveTo(e,r);for(let i=0;i<6;i+=1)e+=(n()-.5)*50,r+=(n()-.5)*50,t.lineTo(e,r);t.stroke()}return Im(e)}function $m(e,t,n,r,i){let[a,o]=Fm(512,160);o.fillStyle=t,o.beginPath(),o.roundRect(0,0,512,160,24),o.fill(),o.strokeStyle=n,o.globalAlpha=.6,o.lineWidth=5,o.beginPath(),o.roundRect(10,10,492,140,16),o.stroke(),o.globalAlpha=1,o.fillStyle=n,o.textAlign=`center`,o.textBaseline=`middle`;let s=`"Shippori Mincho","M PLUS Rounded 1c",serif`,c=64;for(o.font=`700 ${c}px ${s}`;o.measureText(e).width>400&&c>28;)c-=4,o.font=`700 ${c}px ${s}`;if(o.fillText(e,i?276:256,r?70:82),r&&(o.font=`600 26px "M PLUS Rounded 1c",sans-serif`,o.globalAlpha=.85,o.fillText(r,i?276:256,120),o.globalAlpha=1),i){let e=Pm(i);e?o.drawImage(e,24,38,84,84):(o.font=`64px "M PLUS Rounded 1c",sans-serif`,o.fillText(i,66,82))}let l=Im(a,{repeat:!1});return l.anisotropy=8,l}var eh={uSkyRefl:{value:new W(`#a9c6d8`)},uSunTint:{value:new W(`#ffffff`)}};function th(e,t,n,r){let i=[];for(let n=e;n<=t+1e-6;n+=1)i.push(n);let a=1.6;for(let e=t+a,n=0;e<r;e+=a,n+=1)i.push(e),a*=1.3;a=1.6;let o=[];for(let t=e-a;t>n;t-=a)o.push(t),a*=1.3;return[...o.reverse(),...i]}function nh(){let e=th(rm.minX,rm.maxX,-420,420),t=th(rm.minZ,rm.maxZ,-330,420),n=e.length,r=t.length,i=new Float32Array(n*r*3),a=new Float32Array(n*r*4),o=[];for(let o=0;o<r;o+=1)for(let r=0;r<n;r+=1){let s=o*n+r,c=e[r],l=t[o];i[s*3]=c,i[s*3+1]=q(c,l),i[s*3+2]=l;let u=bm(c,l);a[s*4]=u.plaza,a[s*4+1]=u.road,a[s*4+2]=u.grass,a[s*4+3]=u.dirt}for(let e=0;e<r-1;e+=1)for(let t=0;t<n-1;t+=1){let r=e*n+t,i=r+1,a=r+n,s=a+1;o.push(r,a,i,i,a,s)}let s=new jr;s.setAttribute(`position`,new gr(i,3)),s.setAttribute(`splat`,new gr(a,4)),s.setIndex(o),s.computeVertexNormals(),s.computeBoundingSphere();let c=zm(),l=Bm(),u=Vm(),d=new fs({gradientMap:Ip(),color:`#ffffff`});d.customProgramCacheKey=()=>`terrain`,d.onBeforeCompile=e=>{Object.assign(e.uniforms,Pp,eh,{tCobble:{value:c},tGrass:{value:l},tDirt:{value:u}}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
         attribute vec4 splat; varying vec4 vSplat; varying vec3 vWP; varying vec3 vWN;`).replace(`#include <defaultnormal_vertex>`,`#include <defaultnormal_vertex>
         vWN = inverseTransformDirection(transformedNormal, viewMatrix);`).replace(`#include <project_vertex>`,`#include <project_vertex>
         vSplat = splat; vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
         varying vec4 vSplat; varying vec3 vWP; varying vec3 vWN;
         uniform sampler2D tCobble; uniform sampler2D tGrass; uniform sampler2D tDirt;
         uniform float uSnow; uniform float uWet; uniform float uTime; uniform float uRainT;
         uniform vec3 uSkyRefl;
         float tHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
         float tNoise(vec2 p){
           vec2 i = floor(p); vec2 f = fract(p); f = f*f*(3.0-2.0*f);
           return mix(mix(tHash(i), tHash(i+vec2(1.,0.)), f.x), mix(tHash(i+vec2(0.,1.)), tHash(i+vec2(1.,1.)), f.x), f.y);
         }`).replace(`#include <map_fragment>`,`
        vec2 wp = vWP.xz;
        float n1 = tNoise(wp * 0.23);
        float n2 = tNoise(wp * 1.7 + 4.0);
        float nz = tNoise(wp * 5.0);
        // irregular blend edges
        float wCob = clamp(vSplat.x + vSplat.y, 0.0, 1.0);
        wCob = smoothstep(0.38, 0.62, wCob + (n2 - 0.5) * 0.35);
        float wDirt = smoothstep(0.38, 0.62, vSplat.w + (n2 - 0.5) * 0.4) * (1.0 - wCob);
        float wGrass = max(0.0, 1.0 - wCob - wDirt);
        vec3 cobA = texture2D(tCobble, wp / 2.4).rgb;
        vec3 cobB = texture2D(tCobble, wp / 3.7 + vec2(0.37, 0.61)).rgb;
        vec3 cob = mix(cobA, cobB, 0.28) * (0.9 + 0.2 * n1);
        float r = length(wp);
        // plaza decoration rings
        float plazaW = smoothstep(0.4, 0.8, vSplat.x);
        float ringA = 1.0 - smoothstep(0.1, 0.22, abs(r - 6.6));
        float ringB = 1.0 - smoothstep(0.12, 0.3, abs(r - 10.9));
        float ringC = 1.0 - smoothstep(0.08, 0.2, abs(r - 6.1));
        cob = mix(cob, vec3(0.80, 0.55, 0.50) * (0.8 + 0.3 * cobA.r), (ringA * 0.7 + ringC * 0.5) * plazaW);
        cob = mix(cob, vec3(0.52, 0.42, 0.36) * (0.8 + 0.3 * cobB.r), ringB * 0.7 * plazaW);
        cob = mix(cob, vec3(0.62, 0.52, 0.46), smoothstep(0.0, 1.0, plazaW) * smoothstep(7.5, 8.5, r) * (1.0 - smoothstep(10.2, 10.4, r)) * 0.12);
        vec3 gr = texture2D(tGrass, wp / 3.2).rgb * mix(vec3(0.93, 1.0, 0.82), vec3(1.0, 0.98, 0.78), n1);
        gr *= 0.88 + 0.22 * nz;
        vec3 dr = texture2D(tDirt, wp / 2.6).rgb;
        vec3 col = cob * wCob + dr * wDirt + gr * wGrass;
        // altitude tint: rocky and cool up high
        float hy = vWP.y;
        float rock = smoothstep(11.0, 26.0, hy) * wGrass;
        col = mix(col, vec3(0.62, 0.6, 0.6) * (0.85 + 0.3 * n2), rock * 0.8);
        // wet darkening, puddles and ripples on cobbles
        float flatN = smoothstep(0.93, 0.985, normalize(vWN).y);
        float pn = tNoise(wp * 0.55 + 9.0) * 0.6 + tNoise(wp * 1.3) * 0.4;
        float pm = smoothstep(0.62 - 0.12 * uWet, 0.7 - 0.12 * uWet, pn) * smoothstep(0.1, 0.6, uWet) * wCob * flatN;
        col *= 1.0 - 0.22 * uWet * (wCob + wDirt * 0.8);
        vec2 rc = wp * 2.2;
        vec2 cid = floor(rc);
        float rh = tHash(cid);
        float ph = fract(uTime * 0.8 + rh * 7.0);
        vec2 rf = fract(rc) - vec2(0.3 + 0.4 * rh, 0.3 + 0.4 * tHash(cid + 3.0));
        float rd = length(rf);
        float ripple = (1.0 - smoothstep(0.0, 0.05, abs(rd - ph * 0.45))) * (1.0 - ph) * uRainT;
        vec3 pud = uSkyRefl * 0.85 + vec3(ripple * 0.55);
        col = mix(col, pud, pm * 0.78);
        // snow cover
        float sn = uSnow * smoothstep(0.5, 0.8, normalize(vWN).y);
        float sp = 0.55 + 0.45 * (tNoise(wp * 0.8) * 0.6 + tNoise(wp * 3.0) * 0.4);
        sn = smoothstep(0.28, 0.62, sn * sp * (1.1 - 0.5 * wCob * (1.0 - pm)));
        vec3 snowCol = vec3(0.93, 0.96, 1.0) * (0.96 + 0.06 * nz);
        col = mix(col, snowCol, sn * (1.0 - pm * 0.6));
        diffuseColor.rgb *= col;
        `)};let f=new G(s,d);return f.receiveShadow=!0,f.frustumCulled=!1,f.name=`terrain`,f}var rh={uSky:{value:new W(`#9cc6dc`)}};function ih(){let e=[],t=[],n=[],r=om+.6;for(let i=0;i<=220;i+=1){let a=-330+660*i/220,o=am(a);if(e.push(a,$p,o-r,a,$p,o+r),t.push(a,-1,a,1),i<220){let e=i*2;n.push(e,e+1,e+2,e+1,e+3,e+2)}}let i=new jr;i.setAttribute(`position`,new yr(e,3)),i.setAttribute(`uv`,new yr(t,2)),i.setIndex(n);let a=Qm(),o=new G(i,new cs({transparent:!0,fog:!0,depthWrite:!1,uniforms:Object.assign(as.clone(K.fog),{tIce:{value:a}},Pp,rh),vertexShader:`
      uniform float uIce; uniform float uTime;
      varying vec2 vUv; varying vec3 vWP;
      #include <fog_pars_vertex>
      void main(){
        vUv = uv;
        vec3 p = position;
        p.y += uIce * ${(em-$p).toFixed(3)};
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        vWP = (modelMatrix * vec4(p, 1.0)).xyz;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uIce; uniform float uTime; uniform float uSnow; uniform vec3 uSky; uniform sampler2D tIce;
      varying vec2 vUv; varying vec3 vWP;
      #include <fog_pars_fragment>
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float nz(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y); }
      void main(){
        float edge = abs(vUv.y);
        vec2 q = vec2(vWP.x * 0.35 - uTime * 0.25, vWP.z * 0.8);
        float w1 = nz(q * 1.6 + vec2(uTime * 0.2, 0.0));
        float w2 = nz(q * 3.4 - vec2(uTime * 0.3, uTime * 0.1));
        float streak = smoothstep(0.62, 0.8, w1 * 0.6 + w2 * 0.5);
        vec3 deep = vec3(0.05, 0.33, 0.52);
        vec3 shallow = vec3(0.10, 0.45, 0.62);
        vec3 col = mix(deep, shallow, smoothstep(0.35, 0.95, edge) * 0.8 + w1 * 0.15);
        col = mix(col, uSky, 0.15);
        col += vec3(streak * 0.28);
        float foam = smoothstep(0.84, 0.96, edge + (w2 - 0.5) * 0.12);
        col = mix(col, vec3(0.95, 0.98, 1.0), foam * 0.8);
        float alpha = mix(0.86, 0.95, edge);
        // ice
        vec3 ic = texture2D(tIce, vWP.xz / 5.0).rgb;
        float cracks = smoothstep(0.02, 0.0, abs(nz(vWP.xz * 0.9) - 0.5));
        ic = mix(ic, vec3(1.0), cracks * 0.5);
        ic = mix(ic, vec3(0.93, 0.96, 1.0), uSnow * 0.55 * smoothstep(0.3, 0.7, nz(vWP.xz * 0.7)));
        float iceMix = smoothstep(0.0, 0.2, uIce);
        // ice forms from the banks first
        float grow = smoothstep(1.02 - uIce * 1.25, 1.12 - uIce * 1.25, edge + 0.0);
        float im = clamp(max(iceMix * step(0.99, uIce), grow * iceMix), 0.0, 1.0);
        col = mix(col, ic * vec3(0.98, 1.0, 1.02), im);
        alpha = mix(alpha, 0.98, im);
        gl_FragColor = vec4(col, alpha);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}));return o.renderOrder=2,o.frustumCulled=!1,o.name=`river`,o}var ah={clear:`晴れ`,cloudy:`曇り`,rain:`雨`,wind:`強風`,snow:`雪`,fog:`霧`,thunder:`雷雨`},oh=[{h:0,zenith:`#0e1736`,horizon:`#2c3260`,sun:`#9db2ff`,sunI:.75,hemiSky:`#5568a8`,hemiGround:`#252a45`,hemiI:1.15},{h:5,zenith:`#1a2650`,horizon:`#46467a`,sun:`#9db2ff`,sunI:.7,hemiSky:`#5568a8`,hemiGround:`#252a45`,hemiI:1.15},{h:6.3,zenith:`#7d91c6`,horizon:`#ffc5a2`,sun:`#ffbd90`,sunI:1.6,hemiSky:`#c9bfd6`,hemiGround:`#8a7466`,hemiI:1.3},{h:8.2,zenith:`#74b2e6`,horizon:`#e0eef2`,sun:`#fff0d6`,sunI:2.6,hemiSky:`#cfe3f2`,hemiGround:`#a39078`,hemiI:1.4},{h:12,zenith:`#5da7e8`,horizon:`#d2e9f6`,sun:`#fff8ec`,sunI:2.9,hemiSky:`#d6e8f6`,hemiGround:`#a89a82`,hemiI:1.45},{h:16,zenith:`#6ba6de`,horizon:`#f2e5d0`,sun:`#ffe4b4`,sunI:2.6,hemiSky:`#d9e2ee`,hemiGround:`#a8957b`,hemiI:1.4},{h:17.9,zenith:`#5e74b6`,horizon:`#ffab73`,sun:`#ff9d5c`,sunI:1.9,hemiSky:`#cdb4c0`,hemiGround:`#7e6458`,hemiI:1.25},{h:19.2,zenith:`#2b3070`,horizon:`#c26b8a`,sun:`#8d78ba`,sunI:.9,hemiSky:`#7a78b0`,hemiGround:`#3a3550`,hemiI:1.1},{h:20.6,zenith:`#101a3c`,horizon:`#2e3566`,sun:`#9db2ff`,sunI:.75,hemiSky:`#5568a8`,hemiGround:`#252a45`,hemiI:1.15},{h:24,zenith:`#0e1736`,horizon:`#2c3260`,sun:`#9db2ff`,sunI:.75,hemiSky:`#5568a8`,hemiGround:`#252a45`,hemiI:1.15}],sh=new W,ch=new W;function lh(e){let t=0;for(;t<oh.length-2&&e>=oh[t+1].h;)t+=1;let n=oh[t],r=oh[t+1],i=Bp((e-n.h)/(r.h-n.h),0,1),a=(e,t)=>sh.set(e).lerp(ch.set(t),i).clone();return{zenith:a(n.zenith,r.zenith),horizon:a(n.horizon,r.horizon),sun:a(n.sun,r.sun),hemiSky:a(n.hemiSky,r.hemiSky),hemiGround:a(n.hemiGround,r.hemiGround),sunI:Vp(n.sunI,r.sunI,i),hemiI:Vp(n.hemiI,r.hemiI,i)}}var uh=e=>{let t=Math.floor(e)%24,n=Math.floor((e-Math.floor(e))*60);return`${e>=5&&e<12?`朝`:e>=12&&e<16.5?`昼`:e>=16.5&&e<19?`夕`:`夜`} ${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`},dh={clear:{rain:0,snow:0,fog:0,wind:.12,cloud:.08},cloudy:{rain:0,snow:0,fog:.15,wind:.3,cloud:1},rain:{rain:1,snow:0,fog:.25,wind:.3,cloud:.85},wind:{rain:0,snow:0,fog:0,wind:1,cloud:.35},snow:{rain:0,snow:1,fog:.3,wind:.2,cloud:.7},fog:{rain:0,snow:0,fog:1,wind:.05,cloud:.6},thunder:{rain:1,snow:0,fog:.35,wind:.6,cloud:1,dark:.3}},fh=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
  gl_Position.z = gl_Position.w * 0.9999;
}`,ph=`
uniform vec3 uZenith; uniform vec3 uHorizon; uniform vec3 uSunCol; uniform vec3 uSunDir; uniform vec3 uMoonDir;
uniform float uCloud; uniform float uNight; uniform float uTime; uniform float uSunVis; uniform float uFogAmt; uniform float uFlash;
uniform vec3 uFogCol;
varying vec3 vDir;
float hh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float nn(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hh(i),hh(i+vec2(1.,0.)),f.x),mix(hh(i+vec2(0.,1.)),hh(i+vec2(1.,1.)),f.x),f.y); }
float fbm(vec2 p){ float s=0.0; float a=0.5; for(int i=0;i<4;i++){ s+=nn(p)*a; p*=2.03; a*=0.5; } return s; }
void main(){
  vec3 d = normalize(vDir);
  float up = clamp(d.y, 0.0, 1.0);
  vec3 col = mix(uHorizon, uZenith, pow(up, 0.5));
  // sun glow and disc
  float sd = max(dot(d, uSunDir), 0.0);
  col += uSunCol * (pow(sd, 6.0) * 0.18 + pow(sd, 90.0) * 0.5) * uSunVis;
  col = mix(col, vec3(1.0, 0.97, 0.88), smoothstep(0.9993, 0.9997, sd) * uSunVis);
  float md = max(dot(d, uMoonDir), 0.0);
  col = mix(col, vec3(0.96, 0.97, 1.0), smoothstep(0.9993, 0.9996, md) * uNight);
  col += vec3(0.5, 0.6, 0.9) * pow(md, 40.0) * 0.12 * uNight;
  // stars
  vec2 sp = d.xz / (d.y + 0.2) * 38.0;
  float st = step(0.985, hh(floor(sp))) * smoothstep(0.1, 0.4, d.y) * uNight * (0.6 + 0.4 * sin(uTime * 2.0 + hh(floor(sp)) * 20.0));
  col += vec3(st);
  // clouds
  if (d.y > 0.0) {
    vec2 cp = d.xz / (d.y + 0.25) * 1.6 + vec2(uTime * 0.01, 0.0);
    float c = fbm(cp);
    float cov = mix(0.62, 0.22, uCloud);
    float cm = smoothstep(cov, cov + 0.22, c) * smoothstep(0.0, 0.25, d.y);
    vec3 cc = mix(vec3(1.0), uSunCol, 0.25) * mix(1.0, 0.6, uCloud);
    cc = mix(cc, uHorizon * 0.8 + 0.1, uNight * 0.8);
    cc *= 0.85 + 0.15 * smoothstep(0.3, 0.8, fbm(cp * 2.5 + 3.0));
    col = mix(col, cc, cm * mix(0.75, 0.95, uCloud));
  }
  col += uFlash * vec3(0.85, 0.9, 1.05) * (0.30 + 0.30 * (1.0 - up));
  col = mix(col, uFogCol, uFogAmt * (1.0 - up * 0.55));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,mh={low:{rain:450,snow:420,petal:70},medium:{rain:900,snow:800,petal:140},high:{rain:1600,snow:1400,petal:240}},hh=class{kind;count;box;obj;mat;constructor(e,t,n){this.kind=e,this.count=t,this.box=n;let r=new Float32Array(t*3);for(let e=0;e<t*3;e+=1)r[e]=Math.random();let i=`
      uniform float uTime; uniform vec3 uBox; uniform vec3 uCenter; uniform float uFall; uniform vec2 uDrift; uniform float uAmt;
      attribute vec3 aSeed;
      vec3 field(vec3 s, float t){
        vec3 p = s * uBox;
        p.y -= t * uFall * (0.75 + s.x * 0.5);
        p.xz += t * uDrift * (0.8 + s.z * 0.4);
        ${e===`snow`?`p.x += sin(t * 0.9 + s.y * 20.0) * 0.5; p.z += cos(t * 0.7 + s.x * 20.0) * 0.5;`:``}
        ${e===`petal`?`p.y += sin(t * 1.6 + s.x * 30.0) * 0.8; p.z += sin(t * 1.1 + s.z * 30.0) * 1.2;`:``}
        p = mod(p - uCenter + uBox * 0.5, uBox) - uBox * 0.5 + uCenter;
        return p;
      }`;if(e===`rain`){let e=new Float32Array(t*6),n=new Float32Array(t*6),a=new Float32Array(t*2);for(let e=0;e<t;e+=1)for(let t=0;t<2;t+=1)n.set([r[e*3],r[e*3+1],r[e*3+2]],e*6+t*3),a[e*2+t]=t;let o=new jr;o.setAttribute(`position`,new gr(e,3)),o.setAttribute(`aSeed`,new gr(n,3)),o.setAttribute(`aEnd`,new gr(a,1)),o.boundingSphere=new Cr(new H,1e6),this.mat=new cs({transparent:!0,depthWrite:!1,fog:!1,uniforms:this.uniforms(),vertexShader:`${i}
          attribute float aEnd; varying float vA;
          void main(){
            vec3 p = field(aSeed, uTime);
            vec3 v = vec3(uDrift.x, -uFall, uDrift.y);
            p += normalize(v) * aEnd * 0.55;
            vA = mix(1.0, 0.0, aEnd) * uAmt * (0.5 + aSeed.x * 0.5);
            gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
          }`,fragmentShader:`varying float vA; void main(){ gl_FragColor = vec4(0.82, 0.9, 1.0, vA * 0.7); }`}),this.obj=new ca(o,this.mat)}else{let n=new jr;n.setAttribute(`position`,new gr(new Float32Array(t*3),3)),n.setAttribute(`aSeed`,new gr(r,3)),n.boundingSphere=new Cr(new H,1e6);let a=e===`snow`?Xm():Zm();this.mat=new cs({transparent:!0,depthWrite:!1,fog:!1,uniforms:{...this.uniforms(),uTex:{value:a},uSize:{value:e===`snow`?.085:.13},uScale:{value:600}},vertexShader:`${i}
          uniform float uSize; uniform float uScale; varying float vA; varying float vRot; varying float vTint;
          void main(){
            vec3 p = field(aSeed, uTime);
            vec4 mv = viewMatrix * vec4(p, 1.0);
            gl_Position = projectionMatrix * mv;
            gl_PointSize = clamp(uSize * uScale / max(-mv.z, 0.3) * (0.7 + aSeed.y * 0.6), 1.0, 40.0);
            vA = uAmt * smoothstep(0.0, 1.5, -mv.z);
            vRot = uTime * (1.0 + aSeed.x * 2.0) + aSeed.z * 6.28;
            vTint = aSeed.y;
          }`,fragmentShader:`uniform sampler2D uTex; varying float vA; varying float vRot; varying float vTint;
          void main(){
            vec2 c = gl_PointCoord - 0.5;
            ${e===`petal`?`float s = sin(vRot); float co = cos(vRot); c = mat2(co, -s, s, co) * c; c.y *= 1.0 + abs(sin(vRot * 1.7)) * 1.2;`:``}
            vec4 t = texture2D(uTex, c + 0.5);
            ${e===`petal`?`vec3 col = mix(vec3(1.0, 0.75, 0.82), vec3(1.0, 0.92, 0.94), vTint);`:`vec3 col = vec3(1.0);`}
            gl_FragColor = vec4(col, t.a * vA);
          }`}),this.obj=new ha(n,this.mat)}this.obj.frustumCulled=!1,this.obj.renderOrder=5,this.obj.visible=!1}uniforms(){return{uTime:Pp.uTime,uBox:{value:this.box},uCenter:{value:new H},uFall:{value:this.kind===`rain`?22:this.kind===`snow`?1.6:.3},uDrift:{value:new V},uAmt:{value:0}}}set(e,t,n,r){this.obj.visible=e>.01,this.mat.uniforms.uAmt.value=e,this.mat.uniforms.uCenter.value.copy(t),this.mat.uniforms.uDrift.value.copy(n),this.mat.uniforms.uScale&&(this.mat.uniforms.uScale.value=r)}},gh=class{group=new On;scene;sun=new vc(`#fff`,2);hemi=new $s(`#cfe`,`#987`,1.2);fog=new In(`#cfe0ea`,.004);hour=11.75;autoTime=!0;timeSpeed=1/3.2;kind=`snow`;rain=0;snow=0;fogAmt=0;wind=.2;cloud=.6;snowCover=.6;wet=0;freeze=0;frozen=!1;night=0;flash=0;boltIn=4;flashEff=0;dome;fields;quality=`medium`;shadowCenter=new H;skyTint=new W;sunDirVec=new H(0,1,0);constructor(e,t){this.scene=e,this.quality=t,e.fog=this.fog,e.add(this.hemi,this.sun,this.sun.target,this.group),this.sun.castShadow=!0,this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.05;let n=new Zo(900,24,16),r=new cs({side:1,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:new W},uHorizon:{value:new W},uSunCol:{value:new W},uSunDir:{value:new H(0,1,0)},uMoonDir:{value:new H(0,-1,0)},uCloud:{value:.2},uNight:{value:0},uTime:Pp.uTime,uSunVis:{value:1},uFogAmt:{value:0},uFlash:{value:0},uFogCol:{value:new W}},vertexShader:fh,fragmentShader:ph});this.dome=new G(n,r),this.dome.renderOrder=-10,this.dome.frustumCulled=!1,this.group.add(this.dome);let i=mh[t];this.fields={rain:new hh(`rain`,i.rain,new H(34,22,34)),snow:new hh(`snow`,i.snow,new H(34,18,34)),petal:new hh(`petal`,i.petal,new H(46,12,46))},this.group.add(this.fields.rain.obj,this.fields.snow.obj,this.fields.petal.obj),this.applyQuality(t)}applyQuality(e){this.quality=e;let t=mh[e];for(let e of[`rain`,`snow`,`petal`]){let n=this.fields[e],r=t[e];(n.obj instanceof ha||n.obj instanceof ca)&&n.obj.geometry.setDrawRange(0,e===`rain`?r*2:r)}let n=e!==`low`;this.sun.castShadow=n;let r=e===`high`?2048:1024;this.sun.shadow.mapSize.x!==r&&(this.sun.shadow.mapSize.set(r,r),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null);let i=e===`high`?34:28,a=this.sun.shadow.camera;a.left=-i,a.right=i,a.top=i,a.bottom=-i,a.near=1,a.far=140,a.updateProjectionMatrix()}setWeather(e){this.kind=e}nightAmount(e){return e>=19.5||e<4.8?1:e>=17.4?Hp(17.4,19.5,e):e<7?1-Hp(4.8,7,e):0}update(e,t,n,r){this.autoTime&&(this.hour=(this.hour+e*this.timeSpeed/60+24)%24);let i=dh[this.kind],a=.9;this.kind===`thunder`&&(this.boltIn-=e,this.boltIn<=0&&(this.flash=1,this.boltIn=3+Math.random()*8)),this.flash=Math.max(0,this.flash-e*5),this.flashEff=this.flash*this.flash*(.65+Math.random()*.35),this.rain=Up(this.rain,i.rain,a,e),this.snow=Up(this.snow,i.snow,a,e),this.fogAmt=Up(this.fogAmt,i.fog,.7,e),this.wind=Up(this.wind,i.wind,.8,e),this.cloud=Up(this.cloud,i.cloud,.5,e),this.snowCover=this.snow>.3?Math.min(1,this.snowCover+e/55):Math.max(0,this.snowCover-e/(this.rain>.3?40:170)),this.wet=this.rain>.3?Math.min(1,this.wet+e/9):Math.max(this.snow>.3?.35:0,this.wet-e/100),this.freeze=this.snow>.5&&this.snowCover>.3?Math.min(1,this.freeze+e/38):Math.max(0,this.freeze-e/(this.kind===`clear`?70:140)),!this.frozen&&this.freeze>=.985&&(this.frozen=!0),this.frozen&&this.freeze<.55&&(this.frozen=!1);let o=lh(this.hour),s=this.nightAmount(this.hour);this.night=s;let c=this.cloud,l=new W(`#aeb4bb`).multiplyScalar(.4+.6*(1-s*.8)),u=o.zenith.clone().lerp(l,c*.55),d=o.horizon.clone().lerp(l.clone().lerp(new W(`#dde3e8`),.4*(1-s)),c*.6),f=d.clone().lerp(new W(this.snow>.3?`#e4e9ee`:`#d3d9de`).multiplyScalar(1-s*.75),this.fogAmt*.5);this.skyTint.copy(d);let p=this.hour>=5.5&&this.hour<=19,m;m=p?(this.hour-5.5)/13.5*Math.PI:((this.hour<5.5?this.hour+24:this.hour)-19)/10.5*Math.PI;let h=Math.sin(m),g=new H(Math.cos(m)*.9,Math.max(h,0)*.95+.12,.5+.25*h).normalize();this.sunDirVec.copy(g);let _=new H(Math.cos((this.hour-5.5)/13.5*Math.PI)*.9,Math.sin((this.hour-5.5)/13.5*Math.PI),.5).normalize(),v=((this.hour<5.5?this.hour+24:this.hour)-19)/10.5,y=new H(Math.cos(v*Math.PI)*.9,Math.sin(v*Math.PI),.5).normalize(),b=this.dome.material.uniforms;b.uZenith.value.copy(u),b.uHorizon.value.copy(d),b.uSunCol.value.copy(o.sun),b.uSunDir.value.copy(_),b.uMoonDir.value.copy(y),b.uCloud.value=c,b.uNight.value=s,b.uSunVis.value=(1-c*.8)*(1-s),b.uFogAmt.value=this.fogAmt*.85,b.uFlash.value=this.flashEff,b.uFogCol.value.copy(f),this.dome.position.copy(n.position);let x=(1-c*.45)*(1-(i.dark??0));this.sun.color.copy(o.sun),this.sun.intensity=o.sunI*x*(p?1:.8)*(1-this.fogAmt*.35)+this.flashEff*2.4,this.hemi.color.copy(o.hemiSky).lerp(l,c*.35),this.hemi.groundColor.copy(o.hemiGround),this.hemi.intensity=o.hemiI*(.9+c*.2)+this.flashEff*.8,this.fog.color.copy(f);let S=.0034+s*8e-4;this.fog.density=S+this.fogAmt*.0145+this.rain*.003+this.snow*.0035,this.scene.background=null,this.shadowCenter.lerp(t,1-Math.exp(-e*6)),this.shadowCenter.distanceTo(t)>4&&this.shadowCenter.copy(t);let C=.5,w=Math.round(this.shadowCenter.x/C)*C,T=Math.round(this.shadowCenter.z/C)*C;this.sun.target.position.set(w,this.shadowCenter.y,T),this.sun.position.set(w,this.shadowCenter.y,T).addScaledVector(g,70),this.sun.target.updateMatrixWorld(),Pp.uSnow.value=this.snowCover,Pp.uWet.value=this.wet,Pp.uWind.value=this.wind,Pp.uNight.value=Math.max(s,c*.3*(1-this.fogAmt*.3)),Pp.uIce.value=this.freeze,Pp.uRainT.value=this.rain,eh.uSkyRefl.value.copy(d).multiplyScalar(.92),rh.uSky.value.copy(d);let E=r/(2*Math.tan(n.fov*Math.PI/360)),D=.6+this.wind*5.5;this.fields.rain.set(this.rain,t,new V(D*.7,.5),E),this.fields.snow.set(this.snow,t,new V(D*.5,.2),E);let O=Math.max(+(this.kind===`wind`),this.wind>.5?(this.wind-.4)/.6:0);this.fields.petal.set(O,t,new V(3.5+this.wind*6,1.5),E),Pp.uTime.value+=e}get lightDir(){return this.sunDirVec}get qualityLevel(){return this.quality}},_h={bench:`./models/bench.glb`,cake_tray:`./models/cake_tray.glb`,cat:`./models/cat.glb`,flower_cart:`./models/flower_cart.glb`,fountain:`./models/fountain.glb`,lamp:`./models/lamp.glb`,tree_blossom:`./models/tree_blossom.glb`,tree_round:`./models/tree_round.glb`},vh=new U,yh=new At,bh=new un,xh=new W,Sh=new W;function Ch(e,t,n,r=1){let i=new Sa(e,t,n),a=i.getAttribute(`uv`),o=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let e=0;e<6;e+=1)for(let t=0;t<4;t+=1){let n=e*4+t;a.setXY(n,a.getX(n)*o[e][0]/r,a.getY(n)*o[e][1]/r)}return i}function J(e,t,n,r=10,i=1,a=!1){let o=new wa(e,t,n,r,1,a),s=o.getAttribute(`uv`);for(let r=0;r<s.count;r+=1)s.setXY(r,s.getX(r)*Math.PI*2*Math.max(e,t)/i,s.getY(r)*n/i);return o}function wh(e,t=8,n=6){return new Zo(e,t,n)}function Th(e,t,n=1){let r=new Jo(e,t),i=r.getAttribute(`uv`);for(let r=0;r<i.count;r+=1)i.setXY(r,i.getX(r)*e/n,i.getY(r)*t/n);return r}function Eh(e,t){return new Jo(e,t)}function Dh(e,t,n,r=1){let i=new ro;i.moveTo(-e/2,0),i.lineTo(e/2,0),i.lineTo(0,t),i.closePath();let a=new Ho(i,{depth:n,bevelEnabled:!1});a.translate(0,0,-n/2);let o=a.getAttribute(`uv`),s=a.getAttribute(`position`),c=a.getAttribute(`normal`);for(let e=0;e<o.count;e+=1)Math.abs(c.getZ(e))>.5?o.setXY(e,s.getX(e)/r,s.getY(e)/r):o.setXY(e,(s.getZ(e)+s.getX(e))/r,s.getY(e)/r);return a}function Oh(e,t=12,n=1){let r=new Ko(e.map(([e,t])=>new V(e,t)),t),i=r.getAttribute(`uv`),a=r.getAttribute(`position`);for(let e=0;e<i.count;e+=1){let t=Math.hypot(a.getX(e),a.getZ(e));i.setXY(e,i.getX(e)*Math.PI*2*Math.max(t,.05)/n,a.getY(e)/n)}return r}function kh(e,t,n){let r=e.clone();if(!r.index){let e=r.getAttribute(`position`).count;r.setIndex(Array.from({length:e},(e,t)=>t))}r.getAttribute(`uv`)||r.setAttribute(`uv`,new yr(new Float32Array(r.getAttribute(`position`).count*2),2)),r.getAttribute(`normal`)||r.computeVertexNormals();let i=r.getAttribute(`position`).count,a=r.getAttribute(`position`),o=new Float32Array(i*3);if(t.grad){r.computeBoundingBox();let e=r.boundingBox.min.y,n=r.boundingBox.max.y;xh.set(t.grad[0]),Sh.set(t.grad[1]);for(let t=0;t<i;t+=1){let r=n>e?(a.getY(t)-e)/(n-e):0;o[t*3]=xh.r+(Sh.r-xh.r)*r,o[t*3+1]=xh.g+(Sh.g-xh.g)*r,o[t*3+2]=xh.b+(Sh.b-xh.b)*r}}else{xh.set(t.c??`#ffffff`);for(let e=0;e<i;e+=1)o[e*3]=xh.r,o[e*3+1]=xh.g,o[e*3+2]=xh.b}r.setAttribute(`color`,new gr(o,3));let s=new Float32Array(i);if(t.sway!==void 0){if(typeof t.sway==`number`)s.fill(t.sway);else{let[e,n]=t.sway;for(let t=0;t<i;t+=1){let r=Bp((a.getY(t)-e)/(n-e),0,1);s[t]=r*r*(3-2*r)}}}r.setAttribute(`aSway`,new gr(s,1));let c=t.s===void 0?[1,1,1]:typeof t.s==`number`?[t.s,t.s,t.s]:t.s,l=t.p??[0,0,0],u=t.r??[0,0,0];yh.setFromEuler(bh.set(u[0],u[1],u[2],`YXZ`)),vh.compose(new H(...l),yh,new H(c[0],c[1],c[2])),n&&vh.premultiply(n),r.applyMatrix4(vh);for(let e of Object.keys(r.attributes))[`position`,`normal`,`uv`,`color`,`aSway`].includes(e)||r.deleteAttribute(e);return r}var Ah=class{chunk;buckets=new Map;matrix=new U;constructor(e=36){this.chunk=e}setPlacement(e,t,n,r){this.matrix.compose(new H(e,t,n),new At().setFromAxisAngle(new H(0,1,0),r),new H(1,1,1))}clearPlacement(){this.matrix.identity()}put(e,t,n={}){let r=kh(t,n,this.matrix);r.computeBoundingBox();let i=r.boundingBox.getCenter(new H),a=`${e}|${Math.floor(i.x/this.chunk)}|${Math.floor(i.z/this.chunk)}`,o=this.buckets.get(a);o||(o={mat:e,geos:[]},this.buckets.set(a,o)),o.geos.push(r)}box(e,t,n,r,i={}){this.put(e,Ch(t,n,r,i.tile??1),i)}build(e,t={}){let n=new On;for(let[r,i]of this.buckets){let a=of(i.geos,!1);for(let e of i.geos)e.dispose();if(!a)continue;a.computeBoundingSphere();let o=new G(a,e[i.mat]),s=t[i.mat]??{cast:!0,receive:!0};o.castShadow=s.cast!==!1,o.receiveShadow=s.receive!==!1,o.name=r,n.add(o)}return this.buckets.clear(),n}},jh;function Mh(){if(jh)return jh;let e=Hm(),t=Um(),n=Gm(),r=Km(),i=qm(),a=Wm(),o=Jm(),s=new ci({color:`#bcdbe6`,transparent:!0,opacity:.4,depthWrite:!1});s.fog=!0;let c={plaster:zp({map:e,vertexColors:!0},{snow:[.92,.97]}),wood:zp({map:t,vertexColors:!0},{snow:[.55,.9],wet:.18}),roof:zp({map:n,vertexColors:!0},{snow:[.3,.55],wet:.2}),stone:zp({map:r,vertexColors:!0},{snow:[.6,.9],wet:.2}),cloth:zp({map:i,vertexColors:!0,side:2},{snow:[.25,.5]}),plank:zp({map:a,vertexColors:!0},{}),paper:zp({map:o,vertexColors:!0},{}),metal:zp({vertexColors:!0},{snow:[.7,.95]}),paint:zp({vertexColors:!0},{snow:[.7,.95],wet:.1}),flower:zp({vertexColors:!0,side:2},{sway:1}),leaf:zp({vertexColors:!0,side:2},{sway:1.8,snow:[.55,.85]}),grassBlade:zp({vertexColors:!0,side:2},{sway:1.2,snow:[.5,.8]}),glow:new ci({vertexColors:!0}),glass:s},l=c.glass;return Rp(l,{}),jh=c,jh}function Nh(e,t){if(!jh)return;let n=jh.glass;n.color.copy(t).lerp(new W(`#ffd68a`),e),n.opacity=.38+e*.5}var Ph={pastel:[`#f7a8b8`,`#ffd1a6`,`#fff0a8`,`#cdb8f0`,`#ffffff`,`#f48fb1`],warm:[`#ff8a65`,`#ffb74d`,`#ffd54f`,`#ef5350`,`#ffa07a`],pink:[`#f48fb1`,`#f8bbd0`,`#ffffff`,`#ec407a`,`#ffd1dc`],wild:[`#ffffff`,`#ffe27a`,`#b9a4f0`,`#ff9ab0`,`#8fd0ff`]},Fh=new Go(1,0);function Ih(e,t,n,r,i,a,o,s=`#5f9a4a`){let c=.045+o()*.03;e.put(`flower`,J(.008,.012,i,3),{p:[t,n+i/2,r],c:s,sway:[0,1]}),e.put(`flower`,Fh,{p:[t,n+i,r],s:[c,c*.65,c],c:a,sway:.7,r:[o()*3,o()*3,0]}),e.put(`glow`,Fh,{p:[t,n+i+c*.35,r],s:[c*.38,c*.3,c*.38],c:`#ffd966`})}function Lh(e,t,n,r,i,a,o,s=1,c=.18,l=.4){let u=Wp(s*7919+Math.floor(t*31+r*17));for(let s=0;s<i;s+=1){let i=u()*Math.PI*2,s=Math.sqrt(u())*a;Ih(e,t+Math.cos(i)*s,n,r+Math.sin(i)*s,c+u()*(l-c),o[Math.floor(u()*o.length)],u)}}function Rh(e,t,n,r,i,a,o=1,s=1){let c=Wp(o+Math.floor(t*13+r*7));for(let o=0;o<5;o+=1){let o=i*(.55+c()*.35);e.put(`leaf`,Fh,{p:[t+(c()-.5)*i*.9,n+c()*i*.5,r+(c()-.5)*i*.9],s:[o,o*.8,o],c:Zp(a,(c()-.5)*.25),sway:s>0?[n-i*.2,n+i*1.2]:0,r:[c()*3,c()*3,c()*3]})}}function zh(e,t,n,r,i,a=`#79a85a`,o=1,s){if(Rh(e,t,n+i*.2,r,i,a,o),s){let a=Wp(o*31+5);for(let o=0;o<9;o+=1){let o=a()*Math.PI*2,c=i*(.5+a()*.5);e.put(`flower`,Fh,{p:[t+Math.cos(o)*c,n+i*(.45+a()*.6),r+Math.sin(o)*c],s:.06+a()*.03,c:s[Math.floor(a()*s.length)],sway:.5})}}}function Bh(e,t,n,r,i=.38,a=.8,o=`#9b6b45`){e.put(`wood`,Oh([[i*.82,0],[i,a*.3],[i*1.04,a*.5],[i,a*.7],[i*.82,a]],10,.8),{p:[t,n,r],c:o});for(let o of[.18,.82])e.put(`metal`,J(i*1.02,i*1.02,.05,10),{p:[t,n+a*o,r],c:`#3d3536`});e.put(`wood`,J(i*.8,i*.8,.04,10),{p:[t,n+a,r],c:Zp(o,.1)})}function Vh(e,t,n,r,i=.6,a=.4,o=.45,s=0,c=`#b98b5e`){e.box(`wood`,i,a,o,{p:[t,n+a/2,r],r:[0,s,0],c,tile:.8}),e.box(`wood`,i+.03,.05,o+.03,{p:[t,n+a-.05,r],r:[0,s,0],c:Zp(c,-.2)}),e.box(`wood`,i+.03,.05,o+.03,{p:[t,n+.08,r],r:[0,s,0],c:Zp(c,-.2)})}function Hh(e,t,n,r,i=.2,a=.34,o=`#8aa7b8`){e.put(`metal`,J(i,i*.78,a,10),{p:[t,n+a/2,r],c:o}),e.put(`metal`,J(i*.92,i*.92,.02,10),{p:[t,n+a-.02,r],c:`#4b5a63`})}function Uh(e,t,n,r,i=.18,a=.22,o=`#c8714e`){e.put(`stone`,J(i,i*.7,a,9,.8),{p:[t,n+a/2,r],c:o}),e.put(`stone`,J(i*1.1,i*1.1,.04,9),{p:[t,n+a-.01,r],c:Zp(o,-.1)})}function Wh(e,t,n,r,i=1,a=1,o){Uh(e,t,n,r,.17*i,.22*i),zh(e,t,n+.2*i,r,.22*i,`#6aa157`,a,o)}function Gh(e,t,n,r,i,a,o,s,c,l=`#8d6246`){e.box(`wood`,i,.22,a,{p:[t,n+.11,r],r:[0,o,0],c:l,tile:.7}),e.box(`paint`,i-.06,.03,a-.06,{p:[t,n+.225,r],r:[0,o,0],c:`#4d3a2c`});let u=Math.cos(o),d=Math.sin(o),f=Wp(c*101+Math.floor(t*13+r*7)),p=Math.max(5,Math.round(i*9));for(let o=0;o<p;o+=1){let l=(f()-.5)*(i-.12),p=(f()-.5)*(a-.1),m=t+l*u+p*d,h=r-l*d+p*u;f()>.55?Ih(e,m,n+.22,h,.12+f()*.18,s[Math.floor(f()*s.length)],f):Rh(e,m,n+.24,h,.1+f()*.05,`#6aa157`,c+o,.6)}}function Kh(e,t,n,r,i=1,a=`#ffe0a0`){e.put(`metal`,J(.07*i,.09*i,.03,6),{p:[t,n-.12*i,r],c:`#2f2a2c`}),e.put(`glow`,wh(.1*i,8,6),{p:[t,n,r],c:a,s:[1,1.25,1]}),e.put(`metal`,J(0,.11*i,.1*i,6),{p:[t,n+.17*i,r],c:`#2f2a2c`})}function qh(e,t,n,r,i,a=`#a9754f`,o=`#e9cfa4`){let s=(e,a,o)=>{let s=Math.cos(i),c=Math.sin(i);return[t+e*s+o*c,n+a,r-e*c+o*s]};for(let[t,n]of[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]])e.put(`wood`,J(.025,.02,.44,5),{p:s(t,.22,n),c:a});e.box(`wood`,.42,.05,.42,{p:s(0,.46,0),r:[0,i,0],c:a}),e.box(`cloth`,.36,.05,.36,{p:s(0,.5,0),r:[0,i,0],c:o}),e.box(`wood`,.4,.34,.04,{p:s(0,.72,-.2),r:[.1,i,0],c:a});for(let t of[-.15,.15])e.put(`wood`,J(.02,.02,.34,5),{p:s(t,.7,-.2),c:a})}function Jh(e,t,n,r,i=.55,a=`#a9754f`,o=`#c75b5b`){e.put(`wood`,J(.03,.04,i,5),{p:[t,n+i/2,r],c:a}),e.put(`cloth`,J(.17,.17,.07,10),{p:[t,n+i,r],c:o}),e.put(`metal`,J(.14,.14,.015,8),{p:[t,n+i*.35,r],c:`#3d3536`})}function Yh(e,t,n,r,i=.9,a=.9,o=.74,s=!1,c=`#b27e55`,l){if(s)e.put(`wood`,J(i/2,i/2,.05,14,.8),{p:[t,n+o,r],c}),e.put(`wood`,J(.05,.08,o,6),{p:[t,n+o/2,r],c:Zp(c,-.15)}),e.put(`wood`,J(.26,.26,.04,10),{p:[t,n+.02,r],c:Zp(c,-.15)}),l&&e.put(`cloth`,J(i/2+.02,i/2+.07,.15,14),{p:[t,n+o-.08,r],c:l});else{e.box(`wood`,i,.05,a,{p:[t,n+o,r],c,tile:.8});for(let s of[-1,1])for(let l of[-1,1])e.put(`wood`,J(.03,.025,o,5),{p:[t+s*(i/2-.07),n+o/2,r+l*(a/2-.07)],c:Zp(c,-.15)});l&&e.box(`cloth`,i+.02,.012,a+.02,{p:[t,n+o+.03,r],c:l})}}function Xh(e,t,n,r,i,a=1.4,o=2,s=.35,c=4,l=1,u=`#8f633f`,d=`books`){let f=Math.cos(i),p=Math.sin(i),m=(e,i,a)=>[t+e*f+a*p,n+i,r-e*p+a*f];e.box(`wood`,a,o,.04,{p:m(0,o/2,-s/2+.02),r:[0,i,0],c:Zp(u,-.1)});for(let t of[-1,1])e.box(`wood`,.05,o,s,{p:m(t*(a/2-.025),o/2,0),r:[0,i,0],c:u});let h=Wp(l*977),g=[`#c0504d`,`#e0a458`,`#4f7f8a`,`#6b8e5a`,`#8e5c8a`,`#d9c7a0`,`#44546a`,`#b86f50`];for(let t=0;t<=c;t+=1){let n=t/c*(o-.05);if(e.box(`wood`,a,.045,s,{p:m(0,n+.02,0),r:[0,i,0],c:u}),t===c)break;let r=(o-.05)/c-.08,l=-a/2+.08;for(;l<a/2-.1;)if(d===`books`){let t=.04+h()*.04,a=r*(.65+h()*.3);e.box(`paint`,t,a,s*.7,{p:m(l+t/2,n+.045+a/2,0),r:[0,i,0],c:g[Math.floor(h()*g.length)]}),l+=t+.005}else if(d===`jars`){let t=.05+h()*.03;e.put(`paint`,J(t,t,r*.6,8),{p:m(l+t,n+.045+r*.3,0),c:g[Math.floor(h()*g.length)]}),e.put(`wood`,J(t*.8,t*.8,.03,8),{p:m(l+t,n+.045+r*.62,0),c:`#9b6b45`}),l+=t*2+.05}else{let t=.12+h()*.12;h()>.5?e.put(`paint`,wh(t*.4,7,5),{p:m(l+t/2,n+.045+t*.4,0),c:g[Math.floor(h()*g.length)]}):e.box(`paint`,t,t*.8,t*.7,{p:m(l+t/2,n+.045+t*.4,0),r:[0,i,0],c:g[Math.floor(h()*g.length)]}),l+=t+.08}}}function Zh(e,t,n,r,i,a=`#d98a9c`,o=1.1,s=2){let c=Math.cos(i),l=Math.sin(i),u=(e,i,a)=>[t+e*c+a*l,n+i,r-e*l+a*c];e.box(`wood`,o+.1,.3,s+.1,{p:u(0,.15,0),r:[0,i,0],c:`#a9754f`}),e.box(`wood`,o+.1,.9,.08,{p:u(0,.45,-s/2-.02),r:[0,i,0],c:`#8f633f`}),e.box(`cloth`,o,.2,s-.05,{p:u(0,.38,.02),r:[0,i,0],c:`#fbf3e6`}),e.box(`cloth`,o+.04,.12,s*.62,{p:u(0,.46,.3),r:[0,i,0],c:a}),e.put(`cloth`,wh(.2,8,6),{p:u(0,.52,-s/2+.32),r:[0,i,0],s:[1.6,.55,1],c:`#ffffff`})}function Qh(e,t,n,r,i,a=`#c8786b`,o=1.8){let s=Math.cos(i),c=Math.sin(i),l=(e,i,a)=>[t+e*s+a*c,n+i,r-e*c+a*s];e.box(`cloth`,o,.4,.8,{p:l(0,.25,0),r:[0,i,0],c:a}),e.box(`cloth`,o,.5,.2,{p:l(0,.6,-.32),r:[0,i,0],c:Zp(a,-.1)});for(let t of[-1,1])e.box(`cloth`,.2,.5,.8,{p:l(t*(o/2-.1),.45,0),r:[0,i,0],c:Zp(a,-.12)});e.box(`cloth`,o-.5,.12,.6,{p:l(0,.5,.06),r:[0,i,0],c:Zp(a,.12)})}function $h(e,t,n,r,i,a,o=!0,s=0,c=0,l=0){o?(e.put(`cloth`,J(i,i,.015,20),{p:[t,n+.03,r],c:a}),e.put(`cloth`,J(i*.7,i*.7,.018,20),{p:[t,n+.034,r],c:Zp(a,.25)})):(e.box(`cloth`,s,.015,c,{p:[t,n+.03,r],r:[0,l,0],c:a}),e.box(`cloth`,s*.78,.018,c*.78,{p:[t,n+.034,r],r:[0,l,0],c:Zp(a,.25)}))}function eg(e,t,n,r,i=`#d9c7a0`){e.put(`cloth`,wh(.25,8,6),{p:[t,n+.2,r],s:[1,.9,.8],c:i}),e.put(`cloth`,J(.07,.1,.1,6),{p:[t,n+.43,r],c:Zp(i,-.2)})}var tg=new us({color:`#d3b462`,roughness:.35,metalness:.6}),ng=.3;function rg(e,t,n){let r=new Set([0,e]);for(let t of n)r.add(Math.max(0,t.u0)),r.add(Math.min(e,t.u1));let i=[...r].sort((e,t)=>e-t),a=[];for(let e=0;e<i.length-1;e+=1){let r=i[e],o=i[e+1];if(o-r<.01)continue;let s=(r+o)/2,c=n.filter(e=>e.u0<=s&&e.u1>=s).sort((e,t)=>e.v0-t.v0),l=0;for(let e of c)e.v0>l+.005&&a.push({u0:r,u1:o,v0:l,v1:e.v0}),l=Math.max(l,e.v1);l<t-.005&&a.push({u0:r,u1:o,v0:l,v1:t})}return a}function ig(e,t,n,r){let i=[],a=-e/2+r,o=e/2-r;t?(t[0]-a>1.3&&i.push([a,t[0]]),o-t[1]>1.3&&i.push([t[1],o])):i.push([a,o]);let s=[];for(let[e,t]of i){let r=Math.max(1,Math.round((t-e)/n));for(let n=0;n<r;n+=1)s.push(e+(n+.5)/r*(t-e))}return s}var ag=new Set([`florist`,`cafe`,`bookshop`,`goods`,`bakery`,`patisserie`,`shop`]);function og(e,t){let{M:n,coll:r,out:i}=t,a=Dm(e),o=e.w,s=e.d,c=e.floors,l=c*3,u=!!e.enter,d=ag.has(e.kind),f=Wp(e.x*31+e.z*17+3),p=new U().compose(new H(e.x,a,e.z),new At().setFromAxisAngle(new H(0,1,0),e.ry),new H(1,1,1));n.matrix.copy(p),t.roofM.matrix.copy(p);let m=(t,n)=>{let r=Math.cos(e.ry),i=Math.sin(e.ry);return[e.x+t*r+n*i,e.z-t*i+n*r]},h=(t,n,i,o,s,c,l,u)=>r.addLocalBox(e.x,e.z,e.ry,t,n,i,o,c+a,l+a,u),g=e.doorX??0,_=u?1.7:1.3,v=[Ph.pastel,Ph.pink,Ph.warm][Math.floor(f()*3)],y=e.awning?.[0]??`#6e8f6a`;n.box(`stone`,o+.14,.5,s+.14,{p:[0,.2,0],c:`#d4c6b2`,tile:1.2}),n.box(`stone`,o+.24,.1,s+.24,{p:[0,.47,0],c:`#e0d3be`,tile:1.2});let b=[{name:`front`,len:o,cx:0,cz:s/2-ng/2,ry:0},{name:`back`,len:o,cx:0,cz:-s/2+ng/2,ry:Math.PI},{name:`left`,len:s-2*ng,cx:-o/2+ng/2,cz:0,ry:-Math.PI/2},{name:`right`,len:s-2*ng,cx:o/2-ng/2,cz:0,ry:Math.PI/2}],x=e=>{let t=new U().compose(new H(e.cx,0,e.cz),new At().setFromAxisAngle(new H(0,1,0),e.ry),new H(1,1,1));n.matrix.copy(p).multiply(t)},S={front:[],back:[],left:[],right:[]};for(let e of b){let t=S[e.name];for(let n=0;n<c;n+=1){let r=n*3;if(e.name===`front`){if(n===0){let i=[g-_/2-.35,g+_/2+.35],a=ig(e.len,i,d?3:2.5,.7);for(let e of a)t.push({u:e,v:d?r+.8:r+1,w:d?1.9:1,h:d?1.45:1.3,floor:n,shopfront:d})}else for(let i of ig(e.len,void 0,2.5,.9))t.push({u:i,v:r+.95,w:1,h:1.4,floor:n,shopfront:!1})}else if(e.name===`back`)for(let i of ig(e.len,void 0,3.2,1.2))t.push({u:i,v:r+1,w:1,h:1.3,floor:n,shopfront:!1});else for(let i of ig(e.len,void 0,3.4,1.2))t.push({u:i,v:r+1,w:1,h:1.3,floor:n,shopfront:!1})}}let C=e.wall,w=e.trim,T={patisserie:`#f9e7e0`,cafe:`#f0e0c8`,home:`#f3e8d2`}[e.id]??`#f2e6d4`;for(let e of b){x(e);let t=e.len/2,r=[];for(let n of S[e.name])u&&r.push({u0:n.u+t-n.w/2,u1:n.u+t+n.w/2,v0:n.v,v1:n.v+n.h});e.name===`front`&&u&&r.push({u0:g+t-_/2,u1:g+t+_/2,v0:0,v1:2.45});let i=rg(e.len,l,r);for(let e of i){let r=(e.u0+e.u1)/2-t;n.box(`plaster`,e.u1-e.u0,e.v1-e.v0,ng,{p:[r,(e.v0+e.v1)/2,0],c:C,tile:2.2}),u&&n.box(`paper`,e.u1-e.u0,e.v1-e.v0,.03,{p:[r,(e.v0+e.v1)/2,-.3/2-.015],c:T,tile:1.6})}if(u)for(let i of rg(e.len,.14,r.filter(e=>e.v0<.14)))n.box(`wood`,i.u1-i.u0,.14,.05,{p:[(i.u0+i.u1)/2-t,.07,-.3/2-.04],c:Zp(w,.1)});for(let t=1;t<=c;t+=1)n.box(`wood`,e.len+.04,.2,.4,{p:[0,t*3-(t===c?.1:0),0],c:w,tile:.9});if(n.box(`wood`,e.len+.04,.16,.4,{p:[0,.58,0],c:w,tile:.9}),c>1){let r=S[e.name].filter(e=>e.floor===1).map(e=>e.u).sort((e,t)=>e-t),i=[];if(r.length){i.push(-t+.1);for(let e=0;e<r.length-1;e+=1)i.push((r[e]+r[e+1])/2);i.push(t-.1)}for(let e of i)n.box(`wood`,.14,2.7199999999999998,.38,{p:[e,4.5,0],c:w,tile:.9});for(let e of[-1,1]){let r=e*(t-.65);n.box(`wood`,.1,1.5,.37,{p:[r,4.4,0],r:[0,0,-e*.75],c:w,tile:.9})}}}for(let e of[-1,1])for(let t of[-1,1])n.matrix.copy(p),n.box(`wood`,.3,l,.3,{p:[e*(o/2-.1),l/2,t*(s/2-.1)],c:w,tile:.9});for(let e of b){x(e);for(let t of S[e.name]){let r=t.u,i=u?0:.162;n.box(`glass`,t.w,t.h,.03,{p:[r,t.v+t.h/2,i]});let a=.18,o=.09;n.box(`wood`,t.w+.2,o,.14,{p:[r,t.v+t.h+o/2,a],c:w}),n.box(`wood`,t.w+.2,o,.14,{p:[r,t.v-o/2,a],c:w});for(let e of[-1,1])n.box(`wood`,o,t.h+.1,.14,{p:[r+e*(t.w/2+o/2),t.v+t.h/2,a],c:w});if(n.box(`wood`,.045,t.h,.07,{p:[r,t.v+t.h/2,.16999999999999998],c:w}),n.box(`wood`,t.w,.045,.07,{p:[r,t.v+t.h*.58,.16999999999999998],c:w}),n.box(`wood`,t.w+.34,.07,.3,{p:[r,t.v-o-.03,.25],c:Zp(w,.12)}),u){n.box(`wood`,t.w+.12,.05,.14,{p:[r,t.v-.025,-.3/2-.07],c:w}),n.box(`wood`,t.w+.12,.05,.14,{p:[r,t.v+t.h+.025,-.3/2-.05],c:w});for(let e of[-1,1])n.box(`wood`,.05,t.h,.07,{p:[r+e*(t.w/2+.025),t.v+t.h/2,-.3/2-.035],c:w})}if((t.floor===0||f()>.45)&&(e.name===`front`||t.shopfront||e.name===`back`)&&Gh(n,r,t.v-.28,.35,t.w+.1,.24,0,v,Math.floor(r*7+t.v*3),`#8a5e44`),!t.shopfront&&e.name===`front`&&t.w<1.3)for(let e of[-1,1]){n.box(`wood`,.42,t.h+.1,.035,{p:[r+e*(t.w/2+.3),t.v+t.h/2,.2],c:y,tile:.5});for(let i=0;i<4;i+=1)n.box(`wood`,.36,.015,.04,{p:[r+e*(t.w/2+.3),t.v+.15+i*(t.h/4),.22499999999999998],c:Zp(y,-.25)})}t.shopfront&&n.box(`wood`,t.w+.4,.14,.2,{p:[r,t.v+t.h+.17,.22999999999999998],c:Zp(w,-.05)})}}let E=b[0];x(E),n.box(`wood`,_+.5,.14,.2,{p:[g,2.5,.22],c:w});for(let e of[-1,1])n.box(`wood`,.14,2.5,.2,{p:[g+e*(_/2+.17),1.25,.22],c:w});if(n.box(`stone`,_+.7,.57,.8,{p:[g,.285,.55],c:`#e6d9c4`}),n.box(`stone`,_+1.2,.47,1.3,{p:[g,.235,.8],c:`#dccfba`}),u){let t=m(g-_/2+.02,s/2),n=m(g,s/2),o=new On;o.position.set(t[0],a,t[1]),o.rotation.y=e.ry;let c=new us({color:y===`#6e8f6a`?`#7a4d3a`:Zp(y,-.35),roughness:.85}),l=new G(new Sa(_-.04,2.35,.07),c);l.position.set((_-.04)/2,1.2,0);let u=new G(new Zo(.05,8,6),tg);u.position.set(_-.32,1.1,.09),o.add(l,u),i.meshes.push(o);let d={group:o,x:n[0],z:n[1],baseRy:e.ry,angle:0};i.doorAnims.push(d),r.addDyn({x:n[0],z:n[1],hx:_/2,hz:.14,rot:e.ry,y0:a+.4,y1:a+2.6,on:()=>d.angle<.5}),i.doors.push({id:e.id,x:m(g,s/2+1)[0],z:m(g,s/2+1)[1]})}else{n.box(`wood`,_,2.35,.08,{p:[g,1.2,.13999999999999999],c:y===`#6e8f6a`?`#7a4d3a`:Zp(y,-.35),tile:.8}),n.box(`glass`,_*.55,.7,.03,{p:[g,1.75,.19]});for(let e of[-1,1])n.box(`wood`,.04,.7,.05,{p:[g+e*_*.275,1.75,.2],c:w});n.put(`metal`,wh(.045,6,4),{p:[g+_*.38,1.1,.25],c:`#d3b462`}),i.doors.push({id:e.id,x:m(g,s/2+1)[0],z:m(g,s/2+1)[1]})}for(let e of[-1,1]){let t=g+e*(_/2+.55);n.put(`metal`,J(.015,.015,.4,4),{p:[t,2.15,.37],r:[Math.PI/2,0,0],c:`#2f2a2c`}),Kh(n,t,2,.55,1.2);let r=new H(t,2,.55).applyMatrix4(n.matrix);i.glows.push(r)}if(e.awning){let[t,r]=e.awning,i=d?o-1:_+1.6,a=d?0:g,s=Math.max(4,Math.round(i/.46)&-2),c=i/s,l=2.62,u=.5,f=1.3;for(let e=0;e<s;e+=1){let o=a-i/2+e*c,s=e%2==0?t:r,u=new Float32Array([o,l,.16999999999999998,o+c,l,.16999999999999998,o,2.12,1.45,o+c,2.12,1.45]),d=new jr;d.setAttribute(`position`,new gr(u,3)),d.setAttribute(`uv`,new yr([0,0,1,0,0,1,1,1],2)),d.setIndex([0,2,1,1,2,3]),d.computeVertexNormals(),n.put(`cloth`,d,{c:s});let f=new Ca(c/2*.99,8,Math.PI,Math.PI);n.put(`cloth`,f,{p:[o+c/2,2.12,1.45],c:s})}for(let e of[-1,1])n.box(`metal`,.04,.04,Math.hypot(f,u),{p:[a+e*(i/2-.05),l-u/2-.03,.8],r:[Math.atan2(u,f),0,0],c:`#2f2a2c`});n.box(`wood`,i,.08,.06,{p:[a,2.66,.19],c:w})}if(e.name){let t={florist:[`花屋 はなびより`,`#f7e5e8`,`#7a3b52`,`flower`],cafe:[`喫茶 こもれび`,`#2f5a52`,`#f7efdc`,`coffee`],bookshop:[`広場の本屋`,`#4c2f3d`,`#f1deb6`,`book`],goods:[`雑貨 ことり`,`#f6dfa8`,`#6a4733`,`note`],home:[`ミナの家`,`#fff6e8`,`#6a4733`,`house`],bakery:[`パン工房`,`#f3e0c0`,`#8a3f2e`,`bread`],patisserie:[`ヒルサイド・パティスリー`,`#fbeee6`,`#7a3550`,`cupcake`],library:[`丘の図書館`,`#e9e2d0`,`#46586a`,`book`],museum:[`坂の上博物館`,`#efe6d4`,`#6a4a3a`,`vase`],myhome:[`わたしの家`,`#f6ead2`,`#b0563f`,`house`],onsen:[`こもれび温泉`,`#e6f0e8`,`#3f5a52`,`onsen`],hall:[`こもれびホール`,`#fbeee6`,`#a65d48`,`star`]},r=t[e.kind===`house`?``:e.id]??t[e.kind];if(r){let e=zp({map:$m(r[0],r[1],r[2],void 0,r[3]),transparent:!1}),t=new G(Eh(2.7,.84),e),a=3.55,o=d?0:g,s=new U().compose(new H(o,a,.265),new At,new H(1,1,1));t.applyMatrix4(n.matrix.clone().multiply(s)),t.castShadow=!1,i.meshes.push(t),n.box(`wood`,2.9,.98,.1,{p:[o,a,.2],c:w})}}let D=t.roofM;D.matrix.copy(p);let O=s/2+.62,k=O*.66,A=Math.hypot(O,k)+.12,j=Math.atan2(k,O),ee=o+.9,M=e.roof,N=u?D:n;u||n.matrix.copy(p);for(let e of[1,-1])N.box(`roof`,ee,.22,A,{p:[0,l+k/2+.02,e*O/2],r:[e*j,0,0],c:M,tile:1.9}),N.box(`wood`,ee+.04,.12,.1,{p:[0,l+0,e*(O-.02)],r:[e*j,0,0],c:w});N.box(`roof`,ee+.1,.2,.34,{p:[0,l+k+.12,0],c:Zp(M,-.15),tile:1.2});for(let e of[-1,1]){N.put(`plaster`,Dh(s+.02,k+.02,ng,2.2),{p:[e*(o/2-ng/2),l,0],r:[0,Math.PI/2,0],c:C}),N.box(`wood`,.1,k*.95,.1,{p:[e*(o/2+.02),l+k*.48,0],c:w}),N.put(`glass`,J(.4,.4,.04,14),{p:[e*(o/2+.01),l+k*.38,0],r:[0,0,Math.PI/2],c:`#ffffff`}),N.put(`wood`,J(.47,.47,.05,14),{p:[e*(o/2+0),l+k*.38,0],r:[0,0,Math.PI/2],c:w});for(let t of[-1,1])N.box(`wood`,.14,.12,Math.hypot(O,k)+.1,{p:[e*(o/2+.38),l+k/2+.2,t*O*.5],r:[t*j,0,0],c:w})}if(e.chimney){let t=o*.26*(e.doorX&&e.doorX>0?-1:1),r=-s*.22,a=l+k*.55+1.5;n.box(`stone`,.9,a-l+.6,.9,{p:[t,l-.5+(a-l+.6)/2,r],c:`#c9b9a5`,tile:1}),n.box(`stone`,1.1,.15,1.1,{p:[t,a+.15,r],c:`#b7a794`}),n.box(`metal`,.5,.08,.5,{p:[t,a+.25,r],c:`#3a3235`}),i.chimneys.push(new H(t,a+.3,r).applyMatrix4(p))}if(n.matrix.copy(p),!u)h(0,0,o/2,s/2,0,-5,99);else{let e=o/2,t=s/2;h(0,-t+ng/2,e,ng/2,0,-5,99,`wall`),h(-e+ng/2,0,ng/2,t,0,-5,99,`wall`),h(e-ng/2,0,ng/2,t,0,-5,99,`wall`);let n=g-_/2,r=g+_/2;h((-e+n)/2,t-ng/2,(n+e)/2,ng/2,0,-5,99,`wall`),h((r+e)/2,t-ng/2,(e-r)/2,ng/2,0,-5,99,`wall`),h(g,t-ng/2,_/2,ng/2,0,2.45,99,`wall`)}u?cg(e,t,a,p):sg(e,t,a,p),n.clearPlacement(),D.clearPlacement()}function sg(e,t,n,r){let{M:i,coll:a,out:o}=t,s=e.w,c=e.d,l=c/2,u=e.doorX??0;i.matrix.copy(r);let d=(t,n)=>{let r=Math.cos(e.ry),i=Math.sin(e.ry);return[e.x+t*r+n*i,e.z-t*i+n*r]},f=(e,t,r,i=1.2)=>{let[o,s]=d(e,t);a.addCirc({x:o,z:s,r,y0:n-1,y1:n+i})},p=(t,r,i,o,s=1)=>a.addLocalBox(e.x,e.z,e.ry,t,r,i,o,n-1,n+s);switch(e.kind){case`florist`:for(let e=0;e<4;e+=1){let t=-s/2+1.3+e*.9;Math.abs(t-u)<1.2||(Hh(i,t,.5,l+.6,.2,.34),Lh(i,t,.82,l+.6,9,.14,[Ph.pastel,Ph.warm,Ph.pink][e%3],e+3,.25,.55))}i.box(`wood`,3.6,.9,.5,{p:[-s/2+2.4,.95,l+.9],c:`#c79a6b`}),p(-s/2+2.4,l+.9,1.8,.25,1.4);for(let e=0;e<8;e+=1)Lh(i,-s/2+1+e*.45,1.4,l+.9,7,.1,Ph.pastel,e+11,.2,.45);zh(i,s/2-.4,.5,l+.7,.55,`#6aa157`,3,Ph.pink);break;case`bookshop`:Vh(i,-s/2+1.2,.5,l+.7,.9,.5,.5,.1);for(let e=0;e<6;e+=1)i.box(`paint`,.05,.28,.2,{p:[-s/2+.95+e*.1,1.15,l+.7],c:[`#c0504d`,`#4f7f8a`,`#e0a458`][e%3]});Vh(i,s/2-1.4,.5,l+.7,.8,.45,.5,-.1),i.put(`wood`,J(.02,.02,1.6,4),{p:[s/2-.5,1.3,l+.5],c:`#2f2a2c`}),p(-s/2+1.2,l+.7,.45,.25,.9),p(s/2-1.4,l+.7,.4,.25,.9);break;case`goods`:for(let e=0;e<4;e+=1)Wh(i,s/2-1-e*.55,.5,l+.8,1,e+5,Ph.wild);Bh(i,-s/2+.9,.5,l+.7,.34,.75);for(let e=0;e<5;e+=1){let t=-1.6+e*.8;i.put(`paint`,wh(.12,8,6),{p:[t,2-e%2*.25,l+.9],c:[`#ef9a9a`,`#ffd54f`,`#90caf9`,`#a5d6a7`,`#ce93d8`][e]}),i.put(`metal`,J(.004,.004,.5+e%2*.25,3),{p:[t,2.3-e%2*.12,l+.9],c:`#e8dfd0`})}p(-s/2+.9,l+.7,.34,.34,1);break;case`bakery`:eg(i,-s/2+.9,.5,l+.7),eg(i,-s/2+1.4,.5,l+.9,`#e6d4b0`),Vh(i,s/2-1.2,.5,l+.7,.9,.5,.5);for(let e=0;e<5;e+=1)i.put(`wood`,wh(.11,6,5),{p:[s/2-1.4+e*.13,1.05,l+.7],s:[1.4,.8,.9],c:`#d9a066`});p(s/2-1.2,l+.7,.45,.25,1);break;default:{let e=u>0?-1:1;Bh(i,e*(s/2-.6),.5,l+.6,.32,.7),f(e*(s/2-.6),l+.6,.34,.9),Wh(i,-e*(s/2-.6),.5,l+.6,1.3,9,Ph.pastel),i.box(`wood`,.9,.8,.4,{p:[e*1.8+u,.9,-c/2-.3],c:`#a77b55`});break}}}function cg(e,t,n,r){let{M:i,coll:a,out:o}=t,s=n+.54,c=r.clone().multiply(new U().makeTranslation(0,.54,0));i.matrix.copy(c);let l=e.w,u=e.d,d=-l/2+ng,f=l/2-ng,p=-u/2+ng,m=u/2-ng,h=f-d,g=m-p,_=Math.round(g*.38*10)/10,v=1.35,y=Math.min(4.2,Math.max(2.2,g-_-1.1)),b=p+_,x=(t,n)=>{let r=Math.cos(e.ry),i=Math.sin(e.ry);return[e.x+t*r+n*i,e.z-t*i+n*r]},S=(t,n,r,i,o,c,l=0)=>{let[u,d]=x(t,n);a.addBox({x:u,z:d,hx:r,hz:i,rot:e.ry+l,y0:s+o,y1:s+c})},C=(e,t,n,r,i=0)=>{let[o,c]=x(e,t);a.addCirc({x:o,z:c,r:n,y0:s+i-.1,y1:s+i+r})},w=(t,n,r,i,o,c)=>{let[l,u]=x(t,n);a.addSurf({x:l,z:u,hx:r,hz:i,rot:e.ry,yA:s+o,yB:s+c})},T=(t,n,r,i,a,c)=>{let[l,u]=x(r,a);o.sits.push({id:`${e.id}:${t}`,x:l,y:s+i,z:u,ry:c+e.ry,kind:n})},E=(t,n,r)=>{let[i,a]=x(t,r);o.beds.push({x:i,y:s+n+.5,z:a,ry:e.ry})},D=e.trim,O={patisserie:`#f5cfd0`,cafe:`#c9d8c2`,home:`#d9c9a8`}[e.id]??`#e8d6bc`;i.box(`plank`,h,.12,g,{p:[0,-.04,0],c:`#ffffff`,tile:1}),i.box(`plank`,h+.2,.06,g+.2,{p:[0,-.1,0],c:`#ffffff`,tile:1}),w(0,0,h/2,g/2,.02,.02),i.box(`plank`,h,.22,_,{p:[0,2.89,p+_/2],c:`#e7cfa8`,tile:1}),w(0,p+_/2,h/2,_/2,3,3);for(let e=0;e<4;e+=1)i.box(`wood`,.18,.16,_,{p:[d+.8+e*(h-1.6)/3,2.7,p+_/2],c:D});i.box(`wood`,h,.22,.2,{p:[0,2.78,b-.1],c:D});let k=d+v+.1;i.box(`wood`,f-k,.08,.08,{p:[(k+f)/2,4,b-.04],c:D});for(let e=k+.1;e<f;e+=.28)i.box(`wood`,.04,.95,.04,{p:[e,3.5,b-.04],c:D});S((k+f)/2,b-.04,(f-k)/2,.08,3,4.3);let A=Math.max(9,Math.min(16,Math.round(y/.27))),j=y/A;for(let e=0;e<A;e+=1){let t=3*(e+1)/A,n=b+y-(e+.5)*j;i.box(`wood`,v,t,j+.03,{p:[d+v/2,t/2,n],c:`#e0c096`,tile:.8})}i.box(`wood`,.08,.34,Math.hypot(y,3),{p:[d+v+.02,3/2-.12,b+y/2],r:[Math.atan2(3,y),0,0],c:D}),w(d+v/2,b+y/2,v/2,y/2,3,.02);let ee=d+v+.05;i.box(`wood`,.06,.06,Math.hypot(y,3),{p:[ee,2.45,b+y/2],r:[Math.atan2(3,y),0,0],c:D});for(let e=0;e<9;e+=1){let t=e/8;i.box(`wood`,.04,.9+(1-t)*0,.04,{p:[ee,3*(1-t)+.45,b+t*y],c:D})}S(ee,b+y/2+.2,.05,y/2-.1,0,4);let M=(e,t,n)=>{i.put(`metal`,J(.012,.012,3-n,3),{p:[e,(3+n)/2+.2,t],c:`#2f2a2c`}),i.put(`glow`,wh(.18,8,6),{p:[e,n,t],c:`#ffe6b0`}),i.put(`paint`,J(.05,.26,.18,10),{p:[e,n+.2,t],c:`#f1d9a8`})},N=Wp(e.x*5+1);switch(e.id){case`patisserie`:{let t=3.2;i.box(`wood`,.9,1,4,{p:[t,1/2,-1],c:`#f4e3d0`,tile:1}),i.box(`wood`,1.1,.07,4.2,{p:[t,1.03,-1],c:`#b98b5e`}),i.box(`glass`,.8,.5,3.6,{p:[t,1.35,-1]});for(let e of[-2.9,.9])i.box(`metal`,.9,.52,.04,{p:[t,1.35,e],c:`#d6c7a8`});i.box(`metal`,.04,.06,3.8,{p:[2.7800000000000002,1.62,-1],c:`#d6c7a8`}),S(t,-1,.5,2.1,0,1.4);for(let t=0;t<4;t+=1)o.displays.push({model:`cake`,x:x(3.22,-2.4+t*.95)[0],y:s+1+.1,z:x(3.22,-2.4+t*.95)[1],ry:e.ry+t,scale:.34});i.box(`paint`,.35,.22,.3,{p:[3.3000000000000003,1.18,1.3],c:`#6d5a52`});for(let e=0;e<3;e+=1)Xh(i,d+1.6+0+e*2.15+1.6,0,p+.3,0,1.9,2.4,.4,4,6+e,`#8f633f`,e===1?`goods`:`jars`),S(d+1.6+e*2.15+1.6,p+.3,.95,.22,0,2.5);i.box(`stone`,1.6,1.5,.9,{p:[f-1.4,.75,p+.55],c:`#cbb8a2`}),i.box(`glow`,.7,.45,.04,{p:[f-1.4,.7,p+1.02],c:`#ff9e4a`}),S(f-1.4,p+.55,.8,.45,0,1.6),[[-2.6,2],[-.2,2.9],[-3.4,2.1]].forEach(([e,t],n)=>{Yh(i,e,0,t,.9,.9,.74,!0,`#e6c9a0`,n%2?`#f8d7de`:`#fdf0e0`),C(e,t,.5,.85);for(let r=0;r<2;r+=1){let a=r*Math.PI+n*.8,o=e+Math.sin(a)*.75,s=t+Math.cos(a)*.75;qh(i,o,0,s,a+Math.PI,`#b98b5e`,`#f1b3c0`),T(`t${n}c${r}`,`chair`,o,.48,s,a+Math.PI)}i.put(`paint`,J(.05,.05,.2,8),{p:[e,.84,t],c:`#ffffff`}),Ih(i,e,.94,t,.15,`#f48fb1`,N)}),M(-2.6,1.5,2.5),M(.8,.8,2.5),$h(i,-1.7,0,1.8,2.2,`#e8a4b4`),Zh(i,f-1.2,3,p+1.3,Math.PI/2*0,`#f0a8b8`),E(f-1.2,3,p+1.3),i.box(`wood`,1.2,.05,.6,{p:[-1.5,3.75,p+.5],c:`#b27e55`}),S(-1.5,p+.5,.6,.3,3,4),Xh(i,-3.6,3,p+.25,0,1.6,2.2,.35,4,21,`#8f633f`,`books`),S(-3.6,p+.25,.8,.2,3,5.2),S(f-1.2,p+1.3,.62,1.05,3,3.6),$h(i,.6,3.02,p+1.6,1,`#f3b7a4`),Yh(i,.8,3,p+1.4,.9,.9,.74,!0,`#e6c9a0`,`#fff1e6`),C(.8,p+1.4,.5,.85,3),qh(i,.8,3,p+2.15,Math.PI,`#b98b5e`,`#f1b3c0`),T(`loft`,`chair`,.8,3.48,p+2.15,Math.PI),Wh(i,f-.5,3,p+2.9,1.6,2),M(.5,p+1.4,4.6);break}case`cafe`:i.box(`wood`,.9,1,4.2,{p:[f-.8,1/2,.3],c:`#9c6b45`,tile:1}),i.box(`wood`,1.1,.07,4.4,{p:[f-.8,1.03,.3],c:`#6c4a34`}),S(f-.8,.3,.55,2.2,0,1.4);for(let e=0;e<4;e+=1)Jh(i,f-1.75,0,-1.2+e*1,.62,`#6c4a34`,`#3f7d73`),T(`s${e}`,`stool`,f-1.75,.66,-1.2+e*1,-Math.PI/2),C(f-1.75,-1.2+e*1,.2,.7);i.box(`metal`,.5,.45,.4,{p:[f-.7,1.3,-.8],c:`#b0a79c`});for(let e=0;e<3;e+=1)i.put(`paint`,J(.07,.06,.1,8),{p:[f-.8,1.12,.7+e*.4],c:`#fffaf0`});Xh(i,f-.2,0,-1,-Math.PI/2,2.4,2.3,.35,4,33,`#6c4a34`,`jars`),i.box(`stone`,2,1.5,.7,{p:[-1,.75,p+.35],c:`#cbb8a2`,tile:1}),i.box(`metal`,1,.7,.05,{p:[-1,.55,p+.72],c:`#2a2224`}),i.box(`glow`,.8,.5,.04,{p:[-1,.5,p+.74],c:`#ff9a3c`}),i.box(`wood`,2.3,.1,.8,{p:[-1,1.55,p+.4],c:`#8f633f`}),S(-1,p+.4,1,.4,0,1.6),o.glows.push(new H(-1,.6,p+.9).applyMatrix4(c)),[[-1.8,1.8],[.9,2.4],[-3,-.3+1.2],[1.4,.6]].forEach(([e,t],n)=>{if(n!==3){Yh(i,e,0,t,1,.8,.74,!1,`#a9754f`,n%2?`#e8f0e4`:`#f9f2e2`),S(e,t,.5,.4,0,.85);for(let r of[-1,1])qh(i,e+r*0,0,t+r*.7,r>0?Math.PI:0,`#8f633f`,`#6fa596`),T(`t${n}c${r}`,`chair`,e,.48,t+r*.7,r>0?Math.PI:0);Ih(i,e,.78,t,.16,`#ffd54f`,N)}}),Qh(i,-f+1.3-.3+3.2,0,3.1,Math.PI,`#3f7d73`,1.9),T(`sofa`,`sofa`,3.9-3.2+0+(-f+1-.3+3.2)-.7,.52,2.85,Math.PI),S(-f+1-.3+3.2+.1,3.1,1,.5,0,.9),M(-1.8,1.6,2.5),M(1.2,-.5,2.5),$h(i,-1.2,0,1.2,2,`#d9b8a0`,!1,3,2.2),Xh(i,d+1.6,3,p+.25,0,2,2.3,.35,4,41,`#6c4a34`,`books`),S(d+1.6+0,p+.25,1,.2,3,5.3),Qh(i,1.2,3,p+1,0,`#c8786b`,1.8),S(1.2,p+1,.95,.45,3,3.8),T(`loftsofa`,`sofa`,1.2,3.52,p+1.15,0),Yh(i,1.2,3,p+2.3,.9,.5,.45,!1,`#a9754f`,void 0),$h(i,1.2,3.02,p+1.8,1.2,`#e4c9a6`,!1,2.6,1.8),Wh(i,f-.5,3,p+.5,1.7,7),M(1,p+1.6,4.6);break;case`home`:i.box(`wood`,.75,.95,3,{p:[f-.4,.475,.3],c:`#e9d7b9`,tile:1}),i.box(`wood`,.85,.06,3.1,{p:[f-.4,.98,.3],c:`#9c6b45`}),i.box(`metal`,.5,.4,.6,{p:[f-.4,1.2,1.2],c:`#3a3235`}),i.box(`glow`,.04,.2,.3,{p:[f-.66,.75,1.2],c:`#ff9a3c`}),S(f-.4,.3,.45,1.55,0,1.4),Xh(i,f-.2,0,-.7,-Math.PI/2,1.5,2.2,.35,4,71,`#8f633f`,`goods`),Yh(i,-1.5,0,.2,1.6,.9,.76,!1,`#b88a60`,`#fff4e4`),S(-1.5,.2,.85,.5,0,.9);for(let[e,t,n]of[[-2,-.5,0],[-1,-.5,0],[-2,.9,Math.PI],[-1,.9,Math.PI]])qh(i,e,0,t,n,`#9c6b45`,`#d9a0a0`),T(`c${e}${t}`,`chair`,e,.48,t,n);Ih(i,-1.5,.8,.2,.16,`#f48fb1`,N),Qh(i,-1.6,0,p+1,0,`#c8786b`,1.8),S(-1.6,p+1,.95,.45,0,.8),T(`sofa`,`sofa`,-1.6,.52,p+1.1,0),$h(i,-1.2,0,p+1.9,1.3,`#e5b88e`,!1,3,2),i.box(`stone`,1.5,1.4,.6,{p:[1.1,.7,p+.3],c:`#cbb8a2`,tile:1}),i.box(`glow`,.7,.45,.04,{p:[1.1,.5,p+.62],c:`#ff9a3c`}),S(1.1,p+.3,.75,.3,0,1.4),o.glows.push(new H(1.1,.6,p+.9).applyMatrix4(c)),M(-1.5,.2,2.5),Wh(i,d+.4,0,m-.5,1.7,5,Ph.wild),Zh(i,f-1.2,3,p+1.3,0,`#9fc3d6`),E(f-1.2,3,p+1.3),S(f-1.2,p+1.3,.62,1.05,3,3.6),i.box(`wood`,1.3,.05,.6,{p:[-1.3,3.75,p+.5],c:`#b27e55`});for(let e of[-1,1])i.box(`wood`,.05,.75,.5,{p:[-1.3+e*.6,3.37,p+.5],c:`#8f633f`});S(-1.3,p+.5,.65,.3,3,4),qh(i,-1.3,3,p+1.2,Math.PI,`#9c6b45`,`#9fc3d6`),T(`desk`,`chair`,-1.3,3.48,p+1.2,Math.PI),Xh(i,-3,3,p+.25,0,1.4,2.2,.35,4,77,`#8f633f`,`books`),S(-3,p+.25,.7,.2,3,5.2),$h(i,.4,3.02,p+1.6,.9,`#b9d4a8`),o.displays.push({model:`cat`,x:x(.4,p+1.6)[0],y:s+3+.05,z:x(.4,p+1.6)[1],ry:e.ry+.5,scale:.4}),M(.4,p+1.6,4.6);break;case`library`:for(let e of[-3.4,0,3.4])Xh(i,e,0,p+.28,0,3,2.2,.35,4,31+e*7,`#7a5a38`,`books`),S(e,p+.28,1.55,.22,0,2.2);for(let e of[-1.6,1.6])Xh(i,f-.28,0,e,-Math.PI/2,2.8,2.2,.35,4,47+e*5,`#7a5a38`,`books`),S(f-.28,e,.22,1.45,0,2.2);for(let e of[-2.6,1.4]){Yh(i,e,0,1.7,1.9,.95,.76,!1,`#8a6844`,`#f7efdc`),S(e,1.7,1,.52,0,.9);for(let[t,n,r]of[[e-.55,.95,0],[e+.55,.95,0],[e-.55,2.45,Math.PI],[e+.55,2.45,Math.PI]])qh(i,t,0,n,r,`#7a5a38`,`#a8c0a0`),T(`r${e}${t}${n}`,`chair`,t,.48,n,r);M(e,1.7,2.5)}i.box(`wood`,1.9,1,.6,{p:[3.9,1/2,3.6],c:`#e9d7b9`,tile:1}),i.box(`wood`,2,.06,.7,{p:[3.9,1.03,3.6],c:`#8a6844`}),S(3.9,3.6,1,.35,0,1.3),Wh(i,d+.5,0,m-.5,1.6,9);for(let e of[-2.6,.6])Xh(i,e,3,p+.25,0,2.8,1.9,.35,4,83+e*3,`#7a5a38`,`books`),S(e,p+.25,1.45,.2,3,4.9);Yh(i,3.4,3,p+1.3,1.2,.8,.74,!1,`#8a6844`,`#f7efdc`),S(3.4,p+1.3,.65,.45,3,3.9),qh(i,3.4,3,p+2.2,Math.PI,`#7a5a38`,`#a8c0a0`),T(`desk`,`chair`,3.4,3.48,p+2.2,Math.PI),$h(i,.4,3.02,p+1.6,1,`#a8c0a0`,!1,3,1.9),M(.4,p+1.6,4.7);break;case`museum`:{let t=(e,t)=>{i.box(`stone`,.85,1.02,.85,{p:[e,.51,t],c:`#cfc4ae`,tile:1}),i.box(`wood`,.95,.06,.95,{p:[e,1.05,t],c:`#6a4a3a`}),S(e,t,.48,.48,0,1.3)},n=(t,n,r,i,a)=>{let[c,l]=x(n,r);o.displays.push({model:t,x:c,y:s+i,z:l,ry:e.ry+.4,scale:a})};t(-3.3,1.9),n(`cake`,-3.3,1.9,1.08,.9),t(0,1.3),n(`tree`,0,1.3,1.08,.75),t(3.3,1.9),n(`lamp`,3.3,1.9,1.08,.9),t(-3.3,-2.3),n(`cat`,-3.3,-2.3,1.08,.5),t(3.3,-2.3),i.put(`paint`,wh(.3,10,8),{p:[3.3,1.38,-2.3],c:`#7fa8c9`});for(let[e,t]of[[-1.4,`#a8c0a0`],[1.4,`#d9a0a0`]])i.box(`wood`,1.5,1.1,.06,{p:[e,1.8,p+.1],c:`#6a4a3a`}),i.box(`paint`,1.3,.9,.07,{p:[e,1.8,p+.1],c:t});[[`メダカ`,`#c9a86a`],[`フナ`,`#b08968`],[`コイ`,`#d96f4e`],[`キンギョ`,`#e2574c`],[`ニシキゴイ`,`#d94f3d`],[`ハヤ`,`#9db8a4`],[`アユ`,`#a8c8b8`],[`ワカサギ`,`#cfd8dc`],[`ヤマメ`,`#7fae7a`],[`ニジマス`,`#c97b9c`],[`サクラマス`,`#e5a9b8`]].forEach(([e,t],n)=>{let r=-4.6+n*.92,i=p+.62,[a,c]=x(r,i),l=new On;l.position.set(a,s,c);let u=new G(new Sa(.5,.8,.5),new us({color:`#cfc4ae`,roughness:.9}));u.position.y=.4,l.add(u);let d=new G(new Zo(.5,10,8),new us({color:t,roughness:.6}));d.scale.set(.34,.12,.1),d.position.y=.98,l.add(d);let f=new G(new Ta(.09,.16,6),new us({color:t,roughness:.6}));f.rotation.z=Math.PI/2,f.position.set(-.22,.98,0),l.add(f),l.visible=!1,o.meshes.push(l),o.exhibits.push({species:e,group:l})}),Qh(i,0,0,3.6,Math.PI,`#8a7a5c`,1.9),S(0,3.6,1,.45,0,.8),T(`bench`,`sofa`,0,.52,3.5,Math.PI),M(-3.3,1.9,2.5),M(3.3,1.9,2.5);for(let e of[-2.8,2.8])i.box(`stone`,.85,1.02,.85,{p:[e,3.51,p+1.1],c:`#cfc4ae`,tile:1}),i.box(`wood`,.95,.06,.95,{p:[e,4.05,p+1.1],c:`#6a4a3a`}),S(e,p+1.1,.48,.48,3,4.3);n(`cake`,-2.8,p+1.1,4.08,.8),i.put(`paint`,wh(.28,10,8),{p:[2.8,4.36,p+1.1],c:`#d98a9c`}),Qh(i,0,3,p+1.7,0,`#8a7a5c`,1.8),T(`gbench`,`sofa`,0,3.52,p+1.8,0),M(0,p+1.4,4.7);break}case`onsen`:{let e=1.3,t=-.6;i.box(`stone`,4.9,.5,.3,{p:[e,.25,-2],c:`#b8ab94`,tile:1}),i.box(`stone`,4.9,.5,.3,{p:[e,.25,.7999999999999999],c:`#b8ab94`,tile:1}),i.box(`stone`,.3,.5,3.1,{p:[-.9000000000000001,.25,t],c:`#b8ab94`,tile:1}),i.box(`stone`,.3,.5,3.1,{p:[3.5,.25,t],c:`#b8ab94`,tile:1}),i.box(`stone`,4.1,.08,2.5,{p:[e,.04,t],c:`#9a8c72`,tile:1}),i.box(`paint`,4.1,.12,2.5,{p:[e,.34,t],c:`#7fc4d8`}),S(e,-2,2.45,.15,0,.65),S(e,.7999999999999999,2.45,.15,0,.65),S(-.9000000000000001,t,.15,1.55,0,.65),S(3.5,t,.15,1.55,0,.65),T(`bath1`,`sofa`,.6000000000000001,.42,.45000000000000007,Math.PI),T(`bath2`,`sofa`,2.2,.42,.45000000000000007,Math.PI),Hh(i,-.3999999999999999,.22,1.5,.2,.34),Hh(i,4.2,.22,1.2999999999999998,.2,.34),i.box(`wood`,.5,.45,2.2,{p:[f-.45,.225,2.6],c:`#b88a60`,tile:1}),T(`bench`,`sofa`,f-.55,.48,2.6,-Math.PI/2),Xh(i,-3.6,0,m-.3,Math.PI,1.8,1.6,.35,3,61,`#8a6844`,`goods`),S(-3.6,m-.3,.95,.22,0,1.6),i.box(`wood`,1.6,1,.55,{p:[4.1,1/2,3.9],c:`#e9d7b9`,tile:1}),S(4.1,3.9,.85,.32,0,1.3),M(e,t,2.6),M(-2.5,2,2.5),Qh(i,-1.8,3,p+1.2,0,`#a8c0a0`,1.8),S(-1.8,p+1.2,.95,.45,3,3.8),T(`rest`,`sofa`,-1.8,3.52,p+1.3,0),$h(i,.6,3.02,p+1.7,1.1,`#cfe0d2`,!1,3.2,2),Yh(i,1.9,3,p+1.2,.9,.7,.5,!1,`#8a6844`,`#f7efdc`),Wh(i,3.9,3,p+.7,1.5,4,Ph.wild),M(.6,p+1.7,4.7);break}case`hall`:i.box(`wood`,7.6,.28,2.7,{p:[.7,.14,p+1.55],c:`#a87950`,tile:1}),w(.7,p+1.55,3.8,1.35,.3,.3);for(let e of[-3,4.4])i.box(`paint`,.35,2.7,.25,{p:[e,1.35,p+.5],c:`#a03a48`});i.box(`paint`,7.6,.5,.25,{p:[.7,2.75,p+.5],c:`#a03a48`}),i.box(`paint`,1.4,.75,.9,{p:[3.6,.66,p+1.5],c:`#2f2a2c`}),i.box(`paint`,1.4,.45,.25,{p:[3.6,1.26,p+1.85],c:`#2f2a2c`}),S(3.6,p+1.5,.7,.45,.3,1.5);for(let e of[1.3,2.6])for(let t of[-2.4,0,2.4])qh(i,t,0,e,Math.PI,`#7a5a38`,`#c9a0a8`),T(`a${t}${e}`,`chair`,t,.48,e,Math.PI);Yh(i,-4.7,0,.9,.9,.9,.74,!0,`#8a6844`,`#f7efdc`),S(-4.7,.9,.5,.5,0,.9),Wh(i,f-.55,0,m-.55,1.7,6,Ph.wild),Wh(i,d+.55,0,m-.55,1.5,8),M(0,1.9,2.6),M(-3.2,1.9,2.6),M(3.2,1.9,2.6),Qh(i,0,3,p+1.6,0,`#b3816e`,1.9),S(0,p+1.6,1,.45,3,3.8),T(`gsofa`,`sofa`,0,3.52,p+1.7,0);for(let e of[-2.8,2.8])qh(i,e,3,p+1.6,0,`#7a5a38`,`#c9a0a8`),T(`g${e}`,`chair`,e,3.48,p+1.6,0);$h(i,0,3.02,p+1.7,1.2,`#e5b88e`,!1,3.4,2),M(0,p+1.5,4.7);break;case`myhome`:{$h(i,0,0,.4,1.1,`#c9d6c0`,!1,2.8,2),Zh(i,d+1.2,0,p+1.3,0,`#a8c0e0`),S(d+1.2,p+1.3,.62,1.05,0,.7),E(d+1.2,0,p+1.3),qh(i,f-1,0,m-1.1,Math.PI,`#9c6b45`,`#d9a0a0`),T(`home`,`chair`,f-1,.48,m-1.1,Math.PI),M(0,.4,2.5),o.homeFrame={x:e.x,z:e.z,ry:e.ry,y:s,hw:h/2-.55,hd:g/2-.55};let t=(e,t=0)=>new us({color:e,roughness:.85,emissive:e,emissiveIntensity:t}),n=(e,n,r,i,a,o,s,c,l=0)=>{let u=new G(new Sa(n,r,i),t(c,l));u.position.set(a,o,s),e.add(u)},r=(e,n,r,i,a,o,s)=>{let c=new G(new wa(n,n*1.1,r,10),t(s));c.position.set(i,a,o),e.add(c)},a=(e,t,n,r)=>{let i=new On;r(i),i.visible=!1,o.meshes.push(i),o.homeItems.push({id:e,group:i,hx:t,hz:n})};a(`table`,.55,.4,e=>{n(e,1.1,.05,.8,0,.72,0,`#b88a60`);for(let t of[-.48,.48])for(let r of[-.32,.32])n(e,.07,.72,.07,t,.36,r,`#9c6b45`)}),a(`chair`,.26,.26,e=>{n(e,.46,.05,.46,0,.45,0,`#b88a60`),n(e,.46,.55,.05,0,.75,-.21,`#9c6b45`);for(let t of[-.19,.19])for(let r of[-.19,.19])n(e,.05,.45,.05,t,.22,r,`#9c6b45`)}),a(`sofa`,.85,.4,e=>{n(e,1.7,.35,.8,0,.28,0,`#c98a94`),n(e,1.7,.55,.18,0,.68,-.31,`#bd7f89`);for(let t of[-.78,.78])n(e,.16,.3,.8,t,.6,0,`#bd7f89`)}),a(`shelf`,.7,.2,e=>{for(let t of[-.66,.66])n(e,.07,1.9,.38,t,.95,0,`#8f633f`);for(let t of[.35,.95,1.55])n(e,1.38,.05,.38,0,t,0,`#8f633f`);let t=[`#c96f6f`,`#6f9cc9`,`#7ab87a`,`#d9b45c`,`#9a7fc9`];for(let r=0;r<10;r++)n(e,.09,.3,.24,-.55+r%5*.24,.53+Math.floor(r/5)*.6,0,t[r%5])}),a(`bed`,.55,1,e=>{n(e,1.1,.25,2,0,.15,0,`#9c6b45`),n(e,1.05,.16,1.95,0,.34,0,`#f7f2e8`),n(e,.6,.1,.35,0,.45,-.72,`#ffffff`),n(e,1.06,.07,1.15,0,.4,.32,`#f0a8b8`)}),a(`lamp`,.18,.18,e=>{r(e,.16,.04,0,.02,0,`#6a5a48`),r(e,.03,1.35,0,.7,0,`#6a5a48`);let n=new G(new Ta(.24,.26,10,1,!0),t(`#ffd9a0`,.55));n.position.y=1.48,e.add(n)}),a(`plant`,.24,.24,e=>{r(e,.19,.3,0,.15,0,`#a8663f`);for(let[n,r,i,a]of[[0,.62,0,.26],[.14,.5,.08,.18],[-.13,.52,-.06,.17]]){let o=new G(new Zo(a,8,6),t(`#5d8a4e`));o.position.set(n,r,i),e.add(o)}}),a(`rug`,1,.7,e=>{n(e,2,.03,1.4,0,.015,0,`#d98a7a`),n(e,1.7,.032,1.1,0,.016,0,`#e8b4a0`)});break}default:{let e=d+2.1,t=p+1.6;$h(i,e,0,t,1.1,`#e5b88e`,!1,2.6,1.8),Yh(i,e,0,t,1.1,.8,.74,!1,`#b88a60`,`#fff4e4`),S(e,t,.6,.45,0,.9);for(let n of[-1,1])qh(i,e,0,t+n*.72,n>0?Math.PI:0,`#9c6b45`,`#d9a0a0`),T(`c${n}`,`chair`,e,.48,t+n*.72,n>0?Math.PI:0);Ih(i,e,.8,t,.15,`#f48fb1`,N),Xh(i,d+1.1,0,p+.28,0,1.8,2.1,.35,4,55,`#8f633f`,`books`),S(d+1.1,p+.28,.95,.22,0,2.2),Wh(i,f-.55,0,m-.55,1.6,9),M(e,t,2.5),Zh(i,f-1.15,3,p+1.25,0,`#f0a8b8`),E(f-1.15,3,p+1.25),S(f-1.15,p+1.25,.62,1.05,3,3.6),$h(i,.2,3.02,p+1.5,.9,`#f3b7a4`),Xh(i,d+1,3,p+.25,0,1.4,1.9,.35,4,91,`#8f633f`,`goods`),S(d+1,p+.25,.75,.2,3,5),M(.2,p+1.4,4.6);break}}let te=new H(0,2.4,.4).applyMatrix4(c),P=t.roofM.build(Mh(),{});P.name=`roof:${e.id}`;let[ne,re]=[e.x,e.z];o.interiors.push({id:e.id,name:e.name??e.id,x:ne,z:re,hx:h/2,hz:g/2,rot:e.ry,floorY:s,roof:P,light:te,lightColor:O,loftY:3}),o.meshes.push(P)}function lg(){return{sits:[],beds:[],interiors:[],meshes:[],glows:[],displays:[],doors:[],doorAnims:[],chimneys:[],exhibits:[],homeItems:[],homeFrame:null}}var ug=8;function dg(e,t,n,r,i){let a=Math.cos(i),o=Math.sin(i),s=e-n,c=t-r;return[s*a-c*o,s*o+c*a]}var fg=class{dyn=[];addDyn(e){this.dyn.push(e)}cells=new Map;boxes=[];circs=[];surfs=[];frozen=!1;cell(e,t){let n=`${e},${t}`,r=this.cells.get(n);return r||(r={boxes:[],circs:[],surfs:[],discs:[],rings:[]},this.cells.set(n,r)),r}forRect(e,t,n,r,i){let a=Math.max(n,r)*1.45;for(let n=Math.floor((e-a)/ug);n<=Math.floor((e+a)/ug);n+=1)for(let e=Math.floor((t-a)/ug);e<=Math.floor((t+a)/ug);e+=1)i(this.cell(n,e))}addBox(e){this.boxes.push(e),this.forRect(e.x,e.z,e.hx,e.hz,t=>t.boxes.push(e))}addCirc(e){this.circs.push(e),this.forRect(e.x,e.z,e.r,e.r,t=>t.circs.push(e))}addSurf(e){this.surfs.push(e),this.forRect(e.x,e.z,e.hx,e.hz,t=>t.surfs.push(e))}addDisc(e){this.forRect(e.x,e.z,e.r,e.r,t=>t.discs.push(e))}addRing(e){this.forRect(e.x,e.z,e.r1,e.r1,t=>t.rings.push(e))}addLocalBox(e,t,n,r,i,a,o,s,c,l){let u=Math.cos(n),d=Math.sin(n);this.addBox({x:e+r*u+i*d,z:t-r*d+i*u,hx:a,hz:o,rot:n,y0:s,y1:c,tag:l})}near(e,t){return this.cells.get(`${Math.floor(e/ug)},${Math.floor(t/ug)}`)}resolve(e,t,n,r,i){let a=e,o=t,s=!1;for(let e=0;e<3;e+=1){let e=this.near(a,o);if(!e)break;for(let t of e.boxes){if(r+i<=t.y0||r+.45>=t.y1)continue;let[e,c]=dg(a,o,t.x,t.z,t.rot),l=Bp(e,-t.hx,t.hx),u=Bp(c,-t.hz,t.hz),d=e-l,f=c-u,p=d*d+f*f;if(p>=n*n)continue;let m,h,g;if(p>1e-8){let e=Math.sqrt(p);m=d/e,h=f/e,g=n-e}else{let r=t.hx-Math.abs(e),i=t.hz-Math.abs(c);r<i?(m=Math.sign(e)||1,h=0,g=r+n):(m=0,h=Math.sign(c)||1,g=i+n),d=0,f=0}let _=Math.cos(t.rot),v=Math.sin(t.rot);a+=(m*_+h*v)*g,o+=(-m*v+h*_)*g,s=!0}for(let t of e.circs){if(r+i<=t.y0||r+.45>=t.y1)continue;let e=a-t.x,c=o-t.z,l=t.r+n,u=e*e+c*c;if(u>=l*l)continue;let d=Math.sqrt(u)||1e-4;a=t.x+e/d*l,o=t.z+c/d*l,s=!0}}for(let c of this.dyn){if(!c.on()||r+i<=c.y0||r+.45>=c.y1||Math.abs(e-c.x)>4||Math.abs(t-c.z)>4)continue;let[l,u]=dg(a,o,c.x,c.z,c.rot),d=Bp(l,-c.hx,c.hx),f=Bp(u,-c.hz,c.hz),p=l-d,m=u-f,h=p*p+m*m;if(h>=n*n)continue;let g,_,v;if(h>1e-8){let e=Math.sqrt(h);g=p/e,_=m/e,v=n-e}else{let e=c.hx-Math.abs(l),t=c.hz-Math.abs(u);e<t?(g=Math.sign(l)||1,_=0,v=e+n):(g=0,_=Math.sign(u)||1,v=t+n)}let y=Math.cos(c.rot),b=Math.sin(c.rot);a+=(g*y+_*b)*v,o+=(-g*b+_*y)*v,s=!0}return a=Bp(a,rm.minX+1,rm.maxX-1),o=Bp(o,rm.minZ+1,rm.maxZ-1),{x:a,z:o,hit:s}}structureY(e,t,n){let r=this.near(e,t),i=-1/0;if(!r)return i;for(let a of r.surfs){let[r,o]=dg(e,t,a.x,a.z,a.rot);if(Math.abs(r)>a.hx||Math.abs(o)>a.hz)continue;let s=(o+a.hz)/(2*a.hz),c=a.yA+(a.yB-a.yA)*s;c<=n&&c>i&&(i=c)}for(let a of r.discs)a.y>n||a.y<=i||Math.hypot(e-a.x,t-a.z)<=a.r&&(i=a.y);for(let a of r.rings){if(a.y>n||a.y<=i)continue;let r=Math.hypot(e-a.x,t-a.z);r>=a.r0&&r<=a.r1&&(i=a.y)}return i}terrainY(e,t){let n=q(e,t);return n<-.2&&Sm(e,t)?this.frozen?em:NaN:Math.hypot(e-13,t-101)<=4.6?this.frozen?.66:NaN:n}groundAt(e,t,n,r=.6){let i=this.terrainY(e,t),a=this.structureY(e,t,n+r);return Number.isNaN(i)?a===-1/0?NaN:a:Math.max(i,a)}onStructure(e,t,n){return this.structureY(e,t,n+.3)>q(e,t)+.05}rayFree(e,t,n,r,i,a){let o=1;for(let s=1;s<=24;s+=1){let c=s/24,l=e+(r-e)*c,u=t+(i-t)*c,d=n+(a-n)*c,f=this.near(l,d);if(!f)continue;let p=!1;for(let e of f.boxes){if(e.tag===`low`||u<e.y0||u>e.y1)continue;let[t,n]=dg(l,d,e.x,e.z,e.rot);if(Math.abs(t)<=e.hx&&Math.abs(n)<=e.hz){p=!0;break}}if(p){o=(s-1)/24;break}}return o}},pg={x:-11.5,z:-3.5},mg={fountain:{size:[3.6,3.2,3.6]},tree_blossom:{size:[7.4,6.6,7.4],sway:!0},tree_round:{size:[6.4,7.2,5.6],sway:!0},lamp:{size:[.95,3.7,.65]},bench:{size:[1.9,.95,.62],face:`bench`},flower_cart:{size:[2.2,1.9,1.5],face:`cart`},cake_tray:{size:[1,1,1]},cat:{size:[.45,.42,.38],face:`cat`}};async function hg(e,t){let n=await e.gltf(_h[t]),r;if(n.scene.traverse(e=>{!r&&e.isMesh&&(r=e)}),!r)throw Error(`no mesh in ${t}`);r.updateWorldMatrix(!0,!1);let i=r.geometry.clone();i.applyMatrix4(r.matrixWorld);for(let e of Object.keys(i.attributes))[`position`,`normal`,`uv`].includes(e)||i.deleteAttribute(e);i.attributes.normal||i.computeVertexNormals();let a=mg[t];if(i.computeBoundingBox(),a.face){let e=i.boundingBox,t=i.attributes.position,n=e.max.y-e.min.y,r=0,o=0;for(let i=0;i<t.count;i+=1)t.getY(i)>e.min.y+n*.7&&(r+=t.getX(i),o+=1);let s=o>0&&r/o>0?1:-1;a.face===`bench`?i.rotateY(Math.PI/2*s):a.face===`cat`?i.rotateY(-Math.PI/2):a.face===`cart`&&i.rotateY(-s*(Math.PI/2)),i.computeBoundingBox()}let o=i.boundingBox,s=o.getCenter(new H);i.translate(-s.x,-o.min.y,-s.z);let c=o.getSize(new H);if(i.scale(a.size[0]/c.x,a.size[1]/c.y,a.size[2]/c.z),i.computeBoundingBox(),i.computeBoundingSphere(),a.sway){let e=i.attributes.position,t=new Float32Array(e.count),n=a.size[1];for(let r=0;r<e.count;r+=1){let i=Bp(e.getY(r)/n,0,1);t[r]=Bp((i-.3)/.7,0,1)**1.2}i.setAttribute(`aSway`,new gr(t,1))}let l=r.material.map??null;return l&&(l.colorSpace=ze,l.anisotropy=4),{geo:i,map:l,size:new H(...a.size)}}function gg(e,t,n,r=`#ffffff`){return zp({map:e.map,color:r},{sway:+!!t,snow:n,wet:.12})}function _g(e,t,n,r=!0){let i=new Gi(e.geo,t,Math.max(1,n.length)),a=new U,o=new At,s=new H(0,1,0),c=new W;return n.forEach((e,t)=>{let n=e.y??q(e.x,e.z);o.setFromAxisAngle(s,e.ry??0);let r=e.s??1;a.compose(new H(e.x,n,e.z),o,new H((e.sx??1)*r,(e.sy??1)*r,(e.sx??1)*r)),i.setMatrixAt(t,a),i.setColorAt(t,c.set(e.color??`#ffffff`))}),i.count=n.length,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=r,i.receiveShadow=!0,i.frustumCulled=!1,i}function vg(e,t,n){for(let r of Em){let i=Math.abs(Math.sin(r.ry))>.5,a=(i?r.d:r.w)/2+n,o=(i?r.w:r.d)/2+n;if(Math.abs(e-r.x)<a&&Math.abs(t-r.z)<o)return!0}return!1}function yg(e,t,n=1.5){return!(vg(e,t,n)||Math.hypot(e,t)<13.2||Yp(e,t,sm)<3.9+n*.3||Yp(e,t,cm)<3.9+n*.3||Yp(e,t,lm)<2.6||Yp(e,t,um)<2.6||Sm(e,t)||Math.abs(t-am(e))<7.7||Math.hypot(e-im.x,t-im.z)<6.5||t<-35&&Math.abs(e)<14.5&&t>-58||Math.abs(t-46)<2.2)}function bg(e,t,n,r,i,a){let o=q(n,r);e.setPlacement(n,o,r,i),e.put(`wood`,J(.07,.09,2.7,7),{p:[0,1.35,0],c:`#7a5238`}),e.put(`wood`,J(.12,.12,.08,7),{p:[0,2.72,0],c:`#8a6143`}),e.clearPlacement(),a.forEach((e,a)=>{let s=$m(e.text,e.bg,`#fff6e4`),c=new G(Eh(1.45,.45),zp({map:s,side:2},{})),l=o+2.25-a*.55,u=e.dir*.82;c.position.set(n+Math.cos(i)*u,l,r-Math.sin(i)*u),c.rotation.y=i+(e.dir,0),c.castShadow=!0,t.add(c);let d=new G(Ch(1.5,.05,.05),zp({color:`#7a5238`},{}));d.position.copy(c.position),d.position.z+=0,t.add(d)})}async function xg(e,t,n=`autumn`,r=``){let i=new On,a=Mh(),o=new fg,s=lg(),c=new Ah(36),l=new Ah(36),u=Object.keys(_h),d=Object.fromEntries(await Promise.all(u.map(async t=>[t,await hg(e,t)]))),f=nh(),p=ih();i.add(f,p);for(let e of Em)c.clearPlacement(),l.clearPlacement(),og(e,{M:c,coll:o,out:s,roofM:l});c.clearPlacement(),l.clearPlacement(),c.put(`stone`,Oh([[3.05,0],[3.95,0],[4.05,.42],[3.85,.5],[3.55,.46],[3.25,.4],[3.05,.4]],28,3),{p:[0,0,0],c:`#d9cdb9`}),c.put(`stone`,Oh([[0,0],[3.1,0],[3.1,.25],[0,.25]],28,3),{p:[0,0,0],c:`#cbbfae`}),o.addRing({x:0,z:0,r0:3.12,r1:4.08,y:.47}),o.addDisc({x:0,z:0,r:3.18,y:.27}),o.addDisc({x:0,z:0,r:1.7,y:1.5}),o.addDisc({x:0,z:0,r:.78,y:2.72}),o.addDisc({x:0,z:0,r:.34,y:3.36}),o.addCirc({x:0,z:0,r:1.78,y0:.85,y1:1.52,tag:`fountain`}),o.addCirc({x:0,z:0,r:.92,y0:-.1,y1:1.02,tag:`fountain`}),o.addCirc({x:0,z:0,r:.42,y0:1.45,y1:2.66,tag:`fountain`}),o.addCirc({x:0,z:0,r:.26,y0:2.66,y1:3.42,tag:`fountain`});let m=new ci({color:`#40a0c0`,transparent:!0,opacity:.88,depthWrite:!1}),h=new us({color:`#e8f4f8`,roughness:.35,transparent:!0,opacity:0}),g=new G(new Ca(3.15,32).rotateX(-Math.PI/2),m);g.position.y=.3,g.renderOrder=2,i.add(g);let _=gg(d.fountain,!1,[.5,.85]),v=_g(d.fountain,_,[{x:0,z:0,y:.2,s:1}]);i.add(v);let y=4.6,b=[],x=Wp(20261127),S=(e,t)=>(e+Math.sqrt(e*e+2*y*t))/y,C=(e,t,n,r)=>{for(let i=0;i<e;i+=1){let e=x()*Math.PI*2,[i,a,o]=t(e),[s,c,l]=n(e);b.push({ox:i,oy:a,oz:o,vx:s,vy:c,vz:l,T:S(c,a-r),ph:x()})}};C(26,()=>[0,3.42,0],e=>{let t=.22+x()*.3;return[Math.cos(e)*t,1.9+x()*.5,Math.sin(e)*t]},2.8);for(let e=0;e<8;e+=1){let t=e/8*Math.PI*2+.2;C(9,()=>[Math.cos(t)*.6,2.74,Math.sin(t)*.6],()=>[Math.cos(t)*1.05,.35,Math.sin(t)*1.05],1.58)}for(let e=0;e<10;e+=1){let t=e/10*Math.PI*2;C(11,()=>[Math.cos(t)*1.66,1.54,Math.sin(t)*1.66],()=>[Math.cos(t)*1.5,.25,Math.sin(t)*1.5],.34)}let w=new jr,T=new Float32Array(b.length*3);w.setAttribute(`position`,new gr(T,3));let E=new ha(w,new ua({size:.13,map:Xm(),transparent:!0,opacity:.8,color:`#d8f1ff`,depthWrite:!1}));E.frustumCulled=!1,E.renderOrder=3,i.add(E);let D=e=>{for(let t=0;t<b.length;t+=1){let n=b[t],r=(e/n.T+n.ph)%1*n.T;T[t*3]=n.ox+n.vx*r,T[t*3+1]=n.oy+n.vy*r-.5*y*r*r,T[t*3+2]=n.oz+n.vz*r}w.attributes.position.needsUpdate=!0};D(0);let O=[Ph.pink,Ph.pastel,Ph.warm];for(let e=0;e<12;e+=1){let t=e/12*Math.PI*2+.26,n=11.1,r=Math.cos(t)*n,i=Math.sin(t)*n;if(Math.abs(r)<4.2&&Math.abs(i)>6||Math.abs(i)<4.2&&Math.abs(r)>6||vg(r,i,2.2))continue;let a=-t+Math.PI/2;Gh(c,r,.02,i,3,.8,a,O[e%3],e+3),o.addLocalBox(r,i,a,0,0,1.55,.45,-1,1)}let k=[],A=[],j=(e,t,n=0)=>{let r=q(e,t);A.push({x:e,z:t,y:r,ry:n}),o.addCirc({x:e,z:t,r:.28,y0:r-1,y1:r+4}),k.push(new H(e,r+3.35,t))};for(let[e,t]of[[8,8],[-8,8],[8,-8],[-8,-8]])j(e,t);for(let e of[-14,-24,-34])j(3.7,e),j(-3.7,e+4);for(let e of[17,27,37])j(-3.8,e),j(3.8,e+5);j(-3.6,59),j(3.6,59),j(-3.3,69.5),j(3.3,69.5),j(im.x-3.2,im.z+3.2),j(-6.5,-41.5),j(6.5,-41.5);let ee=_g(d.lamp,gg(d.lamp,!1,[.6,.9]),A);i.add(ee);let M=[],N=[],te=(e,t,n,r,i)=>{let a=Math.atan2(n-e,r-t),s=i??q(e,t);N.push({x:e,z:t,y:s,ry:a}),o.addLocalBox(e,t,a,0,0,.98,.34,s-.5,s+1.1);let c=-.04;M.push({id:`bench:${N.length}`,x:e+Math.sin(a)*c,y:s+.53,z:t+Math.cos(a)*c,ry:a,kind:`bench`})};for(let[e,t]of[[5.6,5.6],[-5.6,5.6],[5.6,-5.6],[-5.6,-5.6]])te(e*1,t*1,0,0);te(-6.4,41.5,-6.4,48),te(5.2,57.3,5.2,66),te(-5.2,57.3,-5.2,66),te(im.x-1.8,im.z-3.9,im.x-1.8,im.z-12,im.y-.3),te(im.x+3.2,im.z+.5,im.x+12,im.z+.5,im.y-.3),te(0,-41.2,0,-30),i.add(_g(d.bench,gg(d.bench,!1,[.5,.85]),N));let P={x:0,z:-72.9,y:q(0,-74)};{let e=[],t=(t,n,r,i)=>{let a=Math.atan2(r-t,i-n),s=q(t,n);e.push({x:t,z:n,y:s,ry:a}),o.addLocalBox(t,n,a,0,0,.98,.34,s-.5,s+1.1),M.push({id:`bench:o${e.length}`,x:t-Math.sin(a)*.04,y:s+.53,z:n-Math.cos(a)*.04,ry:a,kind:`bench`})},n=(e,t,n,r)=>{let i=q(e,t);c.put(`leaf`,wh(n,7,5),{p:[e,i+n*.55,t],s:[1,.72,1],c:r})},r=(e,t,n,r)=>{let i=q(e,t),a=Zp(`#3f7050`,r);c.put(`wood`,J(.09*n,.14*n,1.1*n,6),{p:[e,i+.55*n,t],c:`#6b4a35`}),c.put(`leaf`,J(.04*n,.88*n,1.8*n,7),{p:[e,i+1.95*n,t],c:a}),c.put(`leaf`,J(.03*n,.58*n,1.5*n,7),{p:[e,i+3.05*n,t],c:Zp(a,.08)}),o.addCirc({x:e,z:t,r:.32*n,y0:i-1,y1:i+3})};{let e=.5,r=q(-71,e);c.put(`wood`,J(.3,.46,2.6,7),{p:[-71,r+1.3,e],c:`#7b563c`}),c.put(`leaf`,wh(2.3,8,6),{p:[-71,r+4.4,e],s:[1,.82,1],c:`#6f9d5d`}),c.put(`leaf`,wh(1.6,7,5),{p:[-69.5,r+3.6,1.1],c:`#7fae67`}),c.put(`leaf`,wh(1.4,7,5),{p:[-72.4,r+3.7,-.19999999999999996],c:`#659552`}),o.addCirc({x:-71,z:e,r:.55,y0:r-1,y1:r+3});for(let e=-74.6;e<=-65.6;e+=1.15)c.put(`wood`,Ch(.09,.8,.09),{p:[e,8,6.1],c:`#8a6a4c`});c.put(`wood`,Ch(9.4,.07,.05),{p:[-70,8.18,6.1],c:`#8a6a4c`}),c.put(`wood`,Ch(9.4,.07,.05),{p:[-70,7.6+.3,6.1],c:`#8a6a4c`}),t(-68.3,3.2,-55,3),n(-73.5,-2.5,.8,`#5d8a4a`),n(-66.2,5.2,.6,`#6f9d5d`),n(-65.8,-1.8,.7,`#5d8a4a`)}{let e=Wp(777);for(let t=0;t<18;t+=1){let t=e()*Math.PI*2,n=9.5+e()*4.5,i=Math.sin(t)*n,a=-72+Math.cos(t)*n*.85;a>-66&&Math.abs(i)<3.4||r(i,a,.95+e()*.5,(e()-.5)*.25)}r(-6.5,-60,1.1,.1),r(5.5,-62,1,-.12),r(-3.5,-56.5,.9,.05);let t=q(0,-74);c.put(`stone`,Ch(1.7,.25,1.3),{p:[0,t+.12,-74],c:`#a49a8c`});for(let e of[-.62,.62])for(let n of[-.42,.42])c.put(`wood`,Ch(.12,.95,.12),{p:[0+e,t+.72,-74+n],c:`#7a5a40`});c.put(`wood`,Ch(1.35,.8,.08),{p:[0,t+.65,-74.44],c:`#6e4f36`}),c.put(`wood`,Ch(.5,.45,.4),{p:[0,t+.5,-74.1],c:`#3a2c28`}),c.put(`roof`,Dh(1.95,.55,1.55),{p:[0,t+1.3,-74],c:`#5a4a5c`}),o.addCirc({x:0,z:-74,r:1.05,y0:t-1,y1:t+2.6});for(let e of[-1.6,1.6]){let t=q(e,-72.4);c.put(`stone`,Ch(.36,.14,.36),{p:[e,t+.07,-72.4],c:`#a49a8c`}),c.put(`stone`,Ch(.16,.5,.16),{p:[e,t+.39,-72.4],c:`#9a9082`}),c.put(`stone`,Ch(.22,.2,.22),{p:[e,t+.62,-72.4],c:`#f7e3b0`}),c.put(`stone`,Ch(.42,.12,.42),{p:[e,t+.78,-72.4],c:`#a49a8c`}),c.put(`stone`,Ch(.2,.14,.2),{p:[e,t+.91,-72.4],c:`#9a9082`})}c.put(`stone`,Ch(1.5,.09,.55),{p:[0,t+.03,-72.8],c:`#b0a696`})}{let e=new G(new Ca(4.6,26),m);e.rotation.x=-Math.PI/2,e.position.set(13,.62,101),e.renderOrder=2,i.add(e);let n=new G(new Ca(4.6,26),h);n.rotation.x=-Math.PI/2,n.position.set(13,.645,101),n.renderOrder=3,i.add(n);let r=Wp(4242);for(let e=0;e<9;e+=1){let t=e/9*Math.PI*2+r()*.4,n=13+Math.cos(t)*4.85,i=101+Math.sin(t)*4.85;c.put(`stone`,wh(.32+r()*.2,6,4),{p:[n,q(n,i)+.1,i],s:[1,.7,1],c:`#9a958c`})}for(let e=0;e<30;e+=1){let e=r()*Math.PI*2,t=4.25+r()*.6,n=13+Math.cos(e)*t,i=101+Math.sin(e)*t,a=q(n,i),o=.85+r()*.5;c.put(`leaf`,J(.028,.04,o,4),{p:[n,a+o/2,i],c:`#5d8a4a`}),r()>.55&&c.put(`wood`,J(.05,.05,.26,5),{p:[n,a+o+.1,i],c:`#7a5230`})}for(let[e,t]of[[10.5,98.6],[15.8,103.2],[11.8,104.4]])c.put(`leaf`,J(.36,.36,.04,9),{p:[e,.635,t],c:`#4a7a44`});t(7.4,98.2,13,101)}{let e=Wp(99),r=(t,n,r)=>{let i=q(t,n);c.put(`stone`,wh(r,7,5),{p:[t,i+r*.4,n],s:[1,.68,.9],c:Zp(`#9a958c`,(e()-.5)*.15)}),o.addCirc({x:t,z:n,r:r*.85,y0:i-1,y1:i+r*1.4})};r(69.5,-11.5,1.5),r(70.5,-5.5,1.1),r(63.5,-12.5,.8),r(68.8,-3.2,.7),r(62.8,-3.8,.55),t(64.6,-8,50,-8),n(62.5,-11,.6,`#5d8a4a`),n(69,-13.5,.7,`#6f9d5d`)}i.add(_g(d.bench,gg(d.bench,!1,[.5,.85]),e))}{let e=q(pg.x,pg.z);i.add(_g(d.flower_cart,gg(d.flower_cart,!1,[.45,.8]),[{x:pg.x,z:pg.z,y:e,ry:Math.PI/2}])),o.addLocalBox(pg.x,pg.z,Math.PI/2,0,0,1,.8,e-.5,e+2)}let ne=[],re=[],ie=Wp(2024),ae=(e,t,n,r=1)=>{let i=q(t,n);e.push({x:t,z:n,y:i-.05,ry:ie()*Math.PI*2,s:r,sx:.92+ie()*.16}),o.addCirc({x:t,z:n,r:.42*r,y0:i-1,y1:i+6})};ae(ne,-7.5,6.5,1),ae(ne,8.2,-6.8,1.05),ae(ne,9.5,8.8,.9),ae(ne,18.5,-9.5,1),ae(ne,-4.5,20,.95),ae(re,-8.2,-10.8,1),ae(re,5.5,-12,.9);for(let[e,t,n]of[[-5.6,-23,1],[5.9,-23.5,.95],[5.2,-34,1.05],[-6,-33.5,.9],[4.9,22.5,.95],[-5.4,31,1],[5.2,33,1],[6,44,.9],[-6,43.8,.9]])yg(e,t,1.2)&&ae(re,e,t,n);for(let[e,t,n]of[[-16,8,1.1],[24,-14,1.1],[-23,-12,1],[-17,30,1.1],[18,31,1.1],[27,12,1],[-24,20,1.2],[26,22,1.2]])yg(e,t,1)&&ae(Math.hypot(e,t)<26?ne:re,e,t,n);for(let[e,t,n]of[[-14,72,1.1],[16,74,1.1],[-24,88,1.2],[26,96,1.2],[-10,104,1.1],[34,82,1.2],[-34,76,1.2],[41,-2,1],[52,-12,1.1],[50,2,1.1],[40,-17,1.2]])yg(e,t,1)&&ae(ne.length<16&&Gp(e,t)>.55?ne:re,e,t,n);let oe=[.5,.82],se=gg(d.tree_blossom,!0,oe,`#f3e3e0`),ce=gg(d.tree_round,!0,oe,`#b9c79a`);i.add(_g(d.tree_blossom,se,ne),_g(d.tree_round,ce,re));{let e=am(0),t=om+2,n=t*2,r=e;c.put(`plank`,Ch(4.2,.22,n,1.4),{p:[0,nm-.11,r],c:`#b88a5e`});for(let e of[-1,1]){c.put(`wood`,Ch(.26,.5,n+.2),{p:[e*2,nm-.4,r],c:`#7d5539`}),c.put(`wood`,Ch(.12,.1,n-.6),{p:[e*2,nm+1,r],c:`#8e623f`}),c.put(`wood`,Ch(.08,.08,n-.6),{p:[e*2,nm+.55,r],c:`#8e623f`});for(let i=0;i<=8;i+=1){let a=r-t+.4+i/8*(n-.8);c.put(`wood`,Ch(.14,1.05,.14),{p:[e*2,nm+.5,a],c:`#8e623f`}),i%4==0&&Kh(c,e*2,nm+1.3,a,.8)}o.addBox({x:e*2,z:r,hx:.13,hz:n/2-.2,rot:0,y0:nm-.2,y1:nm+1.6,tag:`rail`})}for(let e of[-1,1])c.put(`stone`,Ch(4.6,1.6,1.4,1.2),{p:[0,nm-1.3,r+e*(om-.6)],c:`#d1c4b0`});c.put(`stone`,Ch(1.2,1.6,1,1.2),{p:[0,nm-1.2,r],c:`#cdbfa9`});let i=t-1.4;o.addSurf({x:0,z:r,hx:2,hz:i-1.2,rot:0,yA:nm,yB:nm,tag:`bridge`}),o.addSurf({x:0,z:r-i+.1,hx:2,hz:1.3,rot:0,yA:tm,yB:nm,tag:`bridge`}),o.addSurf({x:0,z:r+i-.1,hx:2,hz:1.3,rot:0,yA:nm,yB:tm,tag:`bridge`})}{let e=2.7;for(let t of[-1,1]){for(let n=4.9;n<74;n+=3){let r=t*(n+3/2-0),i=q(r,46),a=3.5;c.put(`stone`,Ch(3.02,a,.7,1.2),{p:[r,i-.8+a/2,46],c:Zp(`#d5c8b2`,n*7%5*.012)}),c.put(`stone`,Ch(3.02,.16,.95,1.2),{p:[r,i+e-0,46],c:`#c9bba5`}),o.addBox({x:r,z:46,hx:3/2,hz:.45,rot:0,y0:i-1,y1:i+e+1})}let n=t*4.1,r=q(n,46);c.put(`stone`,Ch(1.5,4.6,1.5,1.2),{p:[n,r+1.8,46],c:`#d8cbb5`}),c.put(`stone`,Ch(1.8,.28,1.8,1.2),{p:[n,r+4.2,46],c:`#c6b8a2`}),c.put(`roof`,Dh(2,.9,1.8,1),{p:[n,r+4.34,46],r:[0,Math.PI/2,0],c:`#7a4455`}),o.addBox({x:n,z:46,hx:.78,hz:.78,rot:0,y0:r-1,y1:r+6}),Kh(c,t*3.2,r+3,46.9,1.1)}let t=q(0,46);c.put(`wood`,Ch(7.4,.5,.7),{p:[0,t+4.05,46],c:`#6f4a3b`}),c.put(`wood`,Ch(6.4,.18,.85),{p:[0,t+3.62,46],c:`#8a5d42`});let n=new G(Eh(3,.94),zp({map:$m(`ようこそ`,`#f6ead6`,`#6b3f4c`,`Hillside Pâtisserie`),side:2},{}));n.position.set(0,t+4.05,46.42),i.add(n);let r=n.clone();r.position.z=45.58,r.rotation.y=Math.PI,i.add(r)}{let e=2.7;for(let t=-64;t<52;t+=3){let n=t+3/2;if(Math.abs(n-2)<4.9)continue;let r=q(-40,n),i=3.5;c.put(`stone`,Ch(.7,i,3.02,1.2),{p:[-40,r-.8+i/2,n],c:Zp(`#d5c8b2`,t*7%5*.012)}),c.put(`stone`,Ch(.95,.16,3.02,1.2),{p:[-40,r+e,n],c:`#c9bba5`}),o.addBox({x:-40,z:n,hx:.45,hz:3/2,rot:0,y0:r-1,y1:r+e+1})}let t=q(-40,2);for(let e of[-1,1]){let t=2+e*4.1,n=q(-40,t);c.put(`stone`,Ch(1.5,4.6,1.5,1.2),{p:[-40,n+1.8,t],c:`#d8cbb5`}),c.put(`stone`,Ch(1.8,.28,1.8,1.2),{p:[-40,n+4.2,t],c:`#c6b8a2`}),c.put(`roof`,Dh(2,.9,1.8,1),{p:[-40,n+4.34,t],c:`#7a4455`}),o.addBox({x:-40,z:t,hx:.78,hz:.78,rot:0,y0:n-1,y1:n+6}),Kh(c,-40.9,n+3,2+e*3.2,1.1)}c.put(`wood`,Ch(.7,.5,7.4),{p:[-40,t+4.05,2],c:`#6f4a3b`}),c.put(`wood`,Ch(.85,.18,6.4),{p:[-40,t+3.62,2],c:`#8a5d42`});let n=new G(Eh(3,.94),zp({map:$m(`ようこそ`,`#f6ead6`,`#6b3f4c`,`Hillside Pâtisserie`),side:2},{}));n.position.set(-40.42,t+4.05,2),n.rotation.y=-Math.PI/2,i.add(n);let r=n.clone();r.position.x=-39.58,r.rotation.y=Math.PI/2,i.add(r);let a=new us({color:`#7a5238`,roughness:.85}),l=new us({color:`#5f4132`,roughness:.85}),u=(e,n,r)=>{let o=new On;o.position.set(-40,t,e),o.rotation.y=n;let c=new G(new Sa(3.35,2.6,.09),a);c.position.set(1.675,1.35,0);let u=new G(new Sa(3.35,.18,.13),l);u.position.set(1.675,2.2,0);let d=u.clone();d.position.y=.5,o.add(c,u,d),i.add(o);let f={group:o,x:-40,z:2,baseRy:n,angle:0,swing:r};return s.doorAnims.push(f),f},d=u(-1.35,-Math.PI/2,1.85);u(5.35,Math.PI/2,-1.85),o.addDyn({x:-40,z:2,hx:.3,hz:3.4,rot:0,y0:t-.5,y1:t+3,on:()=>d.angle<.5})}{let{x:e,z:t,y:n}=im,r=n-.25;c.put(`plank`,Ch(8.6,.4,8.6,1.6),{p:[e,r-.2,t],c:`#b48a5f`}),c.put(`wood`,Ch(8.9,.14,8.9,1.6),{p:[e,r-.45,t],c:`#7a5238`}),o.addSurf({x:e,z:t,hx:4.3,hz:4.3,rot:0,yA:r,yB:r,tag:`lookout`});let a=(e,t)=>c.put(`wood`,Ch(.18,1.15,.18),{p:[e,r+.57,t],c:`#8e623f`}),s=4.2;for(let n=-4;n<=4;n+=1){let r=n/4*s;a(e+r,t-s),a(e+r,t+s),Math.abs(n)<4&&(a(e-s,t+r),a(e+s,t+r))}for(let n of[-1,1])c.put(`wood`,Ch(8.6,.1,.1),{p:[e,r+1.1,t+n*s],c:`#9a6b46`}),o.addBox({x:e,z:t+n*s,hx:4.3,hz:.12,rot:0,y0:r-.2,y1:r+1.5,tag:`rail`});c.put(`wood`,Ch(.1,.1,8.6),{p:[e+s,r+1.1,t],c:`#9a6b46`}),o.addBox({x:e+s,z:t,hx:.12,hz:4.3,rot:0,y0:r-.2,y1:r+1.5,tag:`rail`});for(let n of[-1,1])c.put(`wood`,Ch(.1,.1,3),{p:[e-s,r+1.1,t+n*2.9],c:`#9a6b46`}),o.addBox({x:e-s,z:t+n*2.9,hx:.12,hz:1.5,rot:0,y0:r-.2,y1:r+1.5,tag:`rail`});c.put(`metal`,J(.05,.05,1.2,6),{p:[e+2.4,r+.6,t-2.6],c:`#4a3b3b`}),c.put(`metal`,J(.12,.09,.8,8),{p:[e+2.4,r+1.3,t-2.6],r:[0,0,1.2],c:`#b8864a`}),o.addCirc({x:e+2.4,z:t-2.6,r:.25,y0:r,y1:r+1.5});let l=new G(Eh(1.8,.56),zp({map:$m(`展望台`,`#6b3f4c`,`#fff3de`,`いい景色`),side:2},{}));l.position.set(e-s-.05,r+1.55,t),l.rotation.y=-Math.PI/2,i.add(l)}bg(c,i,3.3,11.5,0,[{text:`喫茶 こもれび →`,dir:1,bg:`#3f7d73`},{text:`← 花屋 はなびより`,dir:-1,bg:`#c4607a`}]),bg(c,i,-4.6,50,.2,[{text:`川と花畑 ↓`,dir:1,bg:`#4f7f9a`},{text:`↑ 広場`,dir:-1,bg:`#8a5d42`}]),bg(c,i,5,-10,0,[{text:`展望台 →`,dir:1,bg:`#6b3f4c`},{text:`↑ パティスリー`,dir:-1,bg:`#e07a93`}]);let F=Wp(77);for(let e=0;e<60;e+=1){let t=(F()-.5)*120,n=-30+F()*80;!yg(t,n,1.2)||n>44||zh(c,t,q(t,n),n,.5+F()*.5,Zp(`#79a85a`,(F()-.5)*.3),e+1,F()>.5?Ph.pastel:void 0)}let le=[Ph.pastel,Ph.warm,Ph.pink];for(let e=0;e<26;e+=1){let t=(F()-.5)*80,n=74+F()*40;Yp(t,n,um)<2||Math.abs(n-am(t))<8.2||Lh(c,t,q(t,n),n,10,1.6,le[e%3],e+5)}let ue=t===`low`?1200:2600,de=(()=>{let e=Th(.2,.34);e.translate(0,.17,0);let t=e.clone();return t.rotateY(Math.PI/2),[e,t]})(),fe=Wp(9);for(let e=0;e<ue;e+=1){let e=(fe()-.5)*150,t=-52+fe()*175;if(!yg(e,t,.3)||Math.hypot(e,t)<14)continue;let n=q(e,t);if(n<-.1)continue;let r=Zp(`#8bb865`,(fe()-.5)*.3),i=.7+fe()*.9;c.put(`grassBlade`,de[0],{p:[e,n,t],r:[0,fe()*3,0],s:i,c:r,sway:[0,.34]}),c.put(`grassBlade`,de[1],{p:[e,n,t],r:[0,fe()*3,0],s:i,c:r,sway:[0,.34]})}let pe=[[-9,76],[12,79],[-17,86],[18,92],[-5,95],[6,101],[-23,100]],me=[],he=Ym();pe.forEach(([e,t],n)=>{let r=q(e,t),o=new Ah(200),s=[Ph.warm,Ph.pastel,Ph.pink][n%3];Lh(o,e,r,t,16,.55,s,n+40,.3,.55),o.put(`leaf`,wh(.3,6,4),{p:[e,r+.06,t],s:[1,.4,1],c:`#6fa15a`,sway:0});let c=o.build(a);i.add(c);let l=new ti(new Vr({map:he,color:`#fff2b0`,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));l.position.set(e,r+.6,t),l.scale.setScalar(1.7),i.add(l),me.push({id:n,x:e,y:r,z:t,group:c,picked:!1,ring:l})});let ge=new On;{let e=q(5.6,5.6),t=new us({color:`#e88bb0`,roughness:.7}),n=new G(new Zo(.055,8,6),t);n.position.set(5.6,e+.6,5.6);let r=new Ta(.075,.17,6),i=new G(r,t);i.position.set(5.51,e+.62,5.6),i.rotation.z=1.1;let a=new G(r,t);a.position.set(5.69,e+.62,5.6),a.rotation.z=-1.1,ge.add(n,i,a),ge.visible=!1}i.add(ge);let _e={x:5.6,y:q(5.6,5.6)+.53,z:5.6},ve={x:9.5,z:82};{let e=q(ve.x,ve.z),t=new Ah(40);t.put(`leaf`,J(.03,.05,1.5,5),{p:[ve.x,e+.75,ve.z],c:`#5d8a48`}),t.put(`leaf`,wh(.16,6,4),{p:[ve.x+.12,e+.55,ve.z],s:[1,.4,1],c:`#6fa15a`}),t.put(`paint`,wh(.17,8,6),{p:[ve.x,e+1.58,ve.z],c:`#e86a8a`}),t.put(`paint`,wh(.07,8,6),{p:[ve.x,e+1.62,ve.z],c:`#f7c948`}),i.add(t.build(a))}let ye=[{x:11.3,z:1.8},{x:3,z:-12.5},{x:2,z:-34.5}];{let e=new Ah(300),t=[Ph.pink,Ph.warm,Ph.pastel];ye.forEach((n,r)=>Lh(e,n.x,q(n.x,n.z),n.z,14,.6,t[r],90+r*7,.3,.55)),i.add(e.build(a))}{let e=new Ah(60),n=Wp(555),r=t===`low`?160:320,s=0;for(let t=0;t<r*4&&s<r;t+=1){let t=(n()-.5)*560,r=-260+n()*640;if(Math.abs(t)<60&&r>-60&&r<130||Math.hypot(t,r+72)<13||Math.hypot(t+70,r-2)<9||Math.hypot(t-66,r+8)<9||Em.some(e=>Math.hypot(t-e.x,r-e.z)<10)||Math.abs(r-am(t))<10)continue;let i=q(t,r);if(i>60)continue;let a=1.8+n()*2,c=Zp(n()>.4?`#6f9d5d`:`#8aab5d`,(n()-.5)*.3);e.put(`wood`,J(.18*a,.26*a,1.6*a,5),{p:[t,i,r],c:`#7b563c`}),e.put(`leaf`,wh(1,6,4),{p:[t,i+2.1*a,r],s:[1.45*a,1.5*a,1.45*a],c,sway:0}),t>rm.minX&&t<rm.maxX&&r>rm.minZ&&r<rm.maxZ&&o.addCirc({x:t,z:r,r:.3*a,y0:i-1,y1:i+4*a}),s+=1}e.clearPlacement(),i.add(e.build(a,{plaster:{cast:!1},roof:{cast:!1},leaf:{cast:!1},wood:{cast:!1}}))}let be=c.build(a,{glass:{cast:!1,receive:!1},glow:{cast:!1,receive:!1},grassBlade:{cast:!1,receive:!0},flower:{cast:!1,receive:!0}});i.add(be);for(let e of s.meshes)i.add(e);let xe=l.build(a);i.add(xe);let Se=gg(d.cake_tray,!1,void 0),Ce=gg(d.cat,!1,void 0),we=[];for(let e of s.displays)e.model===`cake`&&we.push({x:e.x,z:e.z,y:e.y,ry:e.ry,s:e.scale});we.length&&i.add(_g(d.cake_tray,Se,we,!1));let Te=s.displays.filter(e=>e.model===`cat`);Te.length&&i.add(_g(d.cat,Ce,Te.map(e=>({x:e.x,z:e.z,y:e.y,ry:e.ry,s:e.scale/.4})),!1));let Ee={x:-8.6,z:-5.8},De=new G(d.cat.geo,Ce);De.position.set(Ee.x,q(Ee.x,Ee.z)+.02,Ee.z),De.rotation.y=.8,i.add(De);let Oe=new On;{let e=new G(new qo(.17),new us({color:`#f2c14e`,roughness:.3,metalness:.5,emissive:`#f2c14e`,emissiveIntensity:.35}));e.scale.y=1.5,Oe.add(e);let t=new ti(new Vr({map:Ym(),color:`#ffd977`,transparent:!0,depthWrite:!1,blending:2,opacity:.85}));t.scale.setScalar(1.1),Oe.add(t),Oe.visible=!1,i.add(Oe)}let ke=[],Ae=[];{let e=new us({color:`#5a4030`,roughness:1}),t=new us({color:`#4e7a3a`,roughness:.9}),n=new us({color:`#5d8a4e`,roughness:.9});for(let r=0;r<6;r++){let a=22.3+r%3*1.7,o=83.2+Math.floor(r/3)*1.7,s=q(a,o);ke.push({x:a,z:o,y:s});let c=new G(new wa(.62,.68,.14,10),e);c.position.set(a,s+.05,o),i.add(c);let l=[],u=e=>{let t=new On;t.position.set(a,s+.1,o),t.visible=!1,e(t),i.add(t),l.push(t)},d=(e,n)=>{let r=new G(new wa(.03,.04,n,6),t);r.position.y=n/2,e.add(r)},f=(e,t,r,i,a)=>{let o=new G(new Zo(a,7,5),n);o.position.set(t,r,i),e.add(o)};u(e=>{f(e,-.07,.09,0,.08),f(e,.07,.11,.02,.07)}),u(e=>{d(e,.38),f(e,-.1,.3,0,.11),f(e,.1,.36,.03,.1),f(e,0,.2,-.09,.09)}),u(e=>{d(e,.5);for(let t=0;t<5;t++){let n=t/5*Math.PI*2,r=new G(new Zo(.075,7,5),new us({color:`#f2a7c3`,roughness:.8}));r.position.set(Math.cos(n)*.11,.55,Math.sin(n)*.11),e.add(r)}let t=new G(new Zo(.055,7,5),new us({color:`#f7d774`,roughness:.8}));t.position.y=.56,e.add(t)}),u(e=>{f(e,-.16,.1,.1,.13),f(e,.15,.09,-.08,.12);let n=new G(new Zo(.21,9,7),new us({color:`#e07f2e`,roughness:.75}));n.scale.y=.78,n.position.y=.16,e.add(n);let r=new G(new wa(.03,.04,.1,6),t);r.position.y=.35,e.add(r)}),Ae.push(l)}}let je=new Vr({map:Ym(),color:`#ffcf80`,transparent:!0,depthWrite:!1,blending:2,opacity:0});je.fog=!1;let Me=[];for(let e of k){let t=new ti(je);t.position.copy(e),t.scale.setScalar(2.6),i.add(t),Me.push(t)}for(let e of s.glows){let t=new ti(je);t.position.copy(e),t.scale.setScalar(1.8),i.add(t),Me.push(t)}let I=Xm(),Ne=[];s.chimneys.forEach((e,t)=>{for(let n=0;n<4;n+=1){let r=new ti(new Vr({map:I,color:`#f4efe8`,transparent:!0,depthWrite:!1,opacity:.4}));i.add(r),Ne.push({s:r,base:e,ph:n/4+t*.13})}});let Pe=new hc(`#ffd9a0`,0,12,1.6);i.add(Pe);let Fe=null,L=s.interiors,Ie=(e,t,n)=>{for(let r of L){let i=e-r.x,a=t-r.z,o=Math.cos(r.rot),s=Math.sin(r.rot),c=i*o-a*s,l=i*s+a*o;if(Math.abs(c)<r.hx&&Math.abs(l)<r.hz&&n>r.floorY-.6&&n<r.floorY+7)return r}return null};{let e=new On,t=(e,t,n,r,i,a)=>{let o=new G(t,zp({color:n},{}));return o.position.set(r,i,a),e.add(o),o},r=(e,t,n)=>new Sa(e,t,n),a=e=>new Zo(e,10,8),s=new On,c=[`#f2a7c3`,`#ffffff`,`#f6d67c`,`#e88bb0`];for(let e=0;e<12;e++){let n=e/12*Math.PI*2,r=Math.sin(n)*13.5,i=Math.cos(n)*13.5,o=q(r,i);t(s,new wa(.03,.04,.4,5),`#4a7d46`,r,o+.2,i);for(let n=0;n<3;n++)t(s,a(.13),c[(e+n)%4],r+(n-1)*.16,o+.45+n%2*.07,i+(n*7%3-1)*.12)}e.add(s);let l=new On,u=(e,n,i)=>{let s=new On;s.position.set(e,q(e,n),n),s.rotation.y=i;for(let[e,n]of[[-1.1,-.5],[1.1,-.5],[-1.1,.5],[1.1,.5]])t(s,r(.09,2.1,.09),`#7a5236`,e,1.05,n);t(s,r(2.5,.75,1.1),`#8a5f43`,0,.55,.25),t(s,r(2.6,.08,1.3),`#f3e4cd`,0,.98,.25);for(let e=0;e<6;e++)t(s,r(.44,.1,1.5),e%2?`#ffffff`:`#d84f5a`,-1.1+e*.44,2.18,0);for(let e=0;e<3;e++){let n=t(s,a(.14),`#ffd9a0`,-.8+e*.8,1.82,.62);n.scale.y=1.25}l.add(s),o.addCirc({x:e,z:n,r:1.55,y0:q(e,n)-1,y1:q(e,n)+2.6})};u(8.6,7.6,Math.PI*.85),u(-8.6,7.6,-Math.PI*.85),e.add(l);let d=new On;{let e=new On;e.position.set(11,q(11,74),74),e.rotation.y=-.5,t(e,new wa(.05,.05,1.9,6),`#7a5236`,0,.95,0),t(e,r(1.3,.07,.07),`#7a5236`,0,1.45,0),t(e,r(.55,.7,.3),`#d88f3f`,0,1.05,0),t(e,a(.21),`#e8c9a0`,0,1.78,0),t(e,new Ta(.34,.22,10),`#c9a44f`,0,1.98,0),d.add(e),o.addCirc({x:11,z:74,r:.35,y0:q(11,74)-1,y1:q(11,74)+2.4});let n=(e,n,r)=>{let i=q(e,n),o=t(d,a(.3*r),`#e07f2e`,e,i+.2*r,n);o.scale.y=.72,t(d,new wa(.04,.05,.12,5),`#4a7d46`,e,i+.42*r,n)};n(-14.2,1.8,1),n(-13.4,2.6,.7),n(9.5,71,1.1),n(-6,76,.85),n(30,130,1)}e.add(d);let f=new On,p=(e,n,r)=>{let i=new On;i.position.set(e,q(e,n),n),i.rotation.y=r,t(i,a(.52),`#ffffff`,0,.42,0),t(i,a(.36),`#ffffff`,0,1.08,0),t(i,new Ta(.07,.34,7),`#e07f2e`,0,1.12,.38).rotation.x=Math.PI/2,t(i,a(.045),`#333333`,-.12,1.2,.31),t(i,a(.045),`#333333`,.12,1.2,.31),t(i,new wa(.025,.025,.7,5),`#7a5236`,.55,1.15,0).rotation.z=-.9,t(i,new wa(.025,.025,.7,5),`#7a5236`,-.55,1.15,0).rotation.z=.9,f.add(i),o.addCirc({x:e,z:n,r:.55,y0:q(e,n)-1,y1:q(e,n)+2})};p(6.2,-7.5,2.6),p(-4.2,41.5,.4),e.add(f),s.visible=n===`spring`,l.visible=n===`summer`,d.visible=n===`autumn`,f.visible=n===`winter`,i.add(e)}let R=new Vr({map:Ym(),color:`#ffd9a0`,transparent:!0,depthWrite:!1,blending:2,opacity:0});R.fog=!1;let Le=[],Re=(e,t,n,r,a=1.1)=>{let o=R.clone();o.color.set(r);let s=new ti(o);return s.position.set(e,t,n),s.scale.setScalar(a),s.visible=!1,Le.push(s),i.add(s),s},ze=null;{let e=new On,t=(t,n,r,i,a)=>{let o=new G(t,zp({color:n},{}));return o.position.set(r,i,a),e.add(o),o},n=(e,t,n)=>new Sa(e,t,n),a=e=>new Zo(e,10,8);if(r===`ohanami`)for(let e=0;e<6;e++){let n=e/6*Math.PI*2+.26,r=Math.sin(n)*11,i=Math.cos(n)*11,o=q(r,i);t(new wa(.045,.055,2.3,6),`#6a4a3a`,r,o+1.15,i);let s=t(a(.21),`#f6b8cd`,r,o+2.25,i);s.scale.y=1.2,Re(r,o+2.25,i,`#f6a8c8`,1.3)}else if(r===`natsuri`){let e=[[9,9],[-9,9],[-9,-9],[9,-9]].map(([e,n])=>{let r=q(e,n);return t(new wa(.05,.06,3.1,6),`#5f4132`,e,r+1.55,n),{x:e,y:r+3.05,z:n}}),n=[`#ffd9a0`,`#ff9d9d`,`#a0e8ff`,`#c8ffb0`];for(let r=0;r<4;r++){let i=e[r],o=e[(r+1)%4];for(let e=1;e<8;e++){let r=e/8,s=i.x+(o.x-i.x)*r,c=i.z+(o.z-i.z)*r,l=i.y+(o.y-i.y)*r-Math.sin(r*Math.PI)*.55;t(a(.075),n[e%4],s,l,c),Re(s,l,c,n[e%4],.65)}}let r=q(0,44),o=t(a(.42),`#e84f5a`,0,r+3.4,44);o.scale.y=1.25,Re(0,r+3.4,44,`#ff8a7a`,2.2);let s=[];for(let e=0;e<72;e++){let e=new Vr({map:Ym(),color:`#ffffff`,transparent:!0,depthWrite:!1,blending:2,opacity:0});e.fog=!1;let t=new ti(e);t.visible=!1,t.scale.setScalar(1.5),i.add(t),s.push({s:t,vx:0,vy:0,vz:0,life:0,max:1})}ze={parts:s,timer:1.2}}else if(r===`shukaku`){let r=(t,r,i)=>{let s=new On;s.position.set(t,q(t,r),r),s.rotation.y=i;let c=(e,t,n,r,i)=>{let a=new G(e,zp({color:t},{}));return a.position.set(n,r,i),s.add(a),a};c(new wa(.05,.05,1.9,6),`#7a5236`,0,.95,0),c(n(1.3,.07,.07),`#7a5236`,0,1.45,0),c(n(.55,.7,.3),`#b3816e`,0,1.05,0),c(a(.21),`#e8c9a0`,0,1.78,0),c(new Ta(.34,.22,10),`#c9a44f`,0,1.98,0),e.add(s),o.addCirc({x:t,z:r,r:.35,y0:q(t,r)-1,y1:q(t,r)+2.4})};r(14,68,.4),r(-30,140,-.8);let i=(e,n)=>{let r=q(e,n),i=t(a(.3),`#e07f2e`,e,r+.2,n);i.scale.y=.72;let o=t(a(.22),`#e07f2e`,e+.45,r+.15,n+.2);o.scale.y=.72;let s=t(a(.18),`#d88f3f`,e+.2,r+.48,n);s.scale.y=.72};i(7.5,-7.5),i(-7.5,7.5)}else if(r===`illumi`){let e=[`#ff8a8a`,`#ffd97a`,`#8affc1`,`#8ab8ff`,`#e88aff`];for(let n=0;n<14;n++){let r=n/14*Math.PI*2,i=Math.sin(r)*4.6,o=Math.cos(r)*4.6;t(a(.085),e[n%5],i,1.55,o),Re(i,1.55,o,e[n%5],.8)}let n=[[10,0],[-10,0],[0,10],[0,-10]].map(([e,n])=>{let r=q(e,n);return t(new wa(.05,.06,3.4,6),`#4a3a30`,e,r+1.7,n),{x:e,y:r+3.3,z:n}});for(let r of n)for(let n=1;n<7;n++){let i=n/7,o=r.x*(1-i),s=r.z*(1-i),c=r.y+(2.6-r.y)*i-Math.sin(i*Math.PI)*.4;t(a(.07),e[n%5],o,c,s),Re(o,c,s,e[n%5],.6)}}i.add(e)}let Be=[];{let e=new Vr({map:Ym(),color:`#d8f79a`,transparent:!0,depthWrite:!1,blending:2,opacity:0});e.fog=!1;for(let t=0;t<24;t++){let n=new ti(e.clone());n.scale.setScalar(.55),n.visible=!1,i.add(n);let r=t<14;Be.push({s:n,bx:r?-20+t*3.1%40:13+Math.sin(t*2.4)*6.5,by:r?.9:1.1,bz:r?47.5+t%3:101+Math.cos(t*2.4)*6.5,ph:t*1.37})}}let Ve=new W,He=0;return{group:i,coll:o,out:s,sits:[...M,...s.sits],beds:s.beds,shrine:P,catMesh:De,catHome:Ee,treasure:Oe,farmPlots:ke,farmStages:Ae,ribbonGroup:ge,ribbonSpot:_e,tallFlower:ve,yukiFlowers:ye,flowers:me,interiors:L,cat:d.cat,setInside(e){Fe=e;for(let t of L)t.roof.visible=t!==e},interiorAt:Ie,applyQuality(e){for(let e of Me)e.visible=!0},update(e,t,r,i){He+=e,Oe.visible&&(Oe.rotation.y+=e*1.6,typeof Oe.userData.y==`number`&&(Oe.position.y=Oe.userData.y+Math.sin(He*2.2)*.07));for(let t of s.doorAnims){let n=+(Math.hypot(r.x-t.x,r.z-t.z)<2);t.angle+=(n-t.angle)*Math.min(1,e*6.5),Math.abs(n-t.angle)<.002&&(t.angle=n),t.group.rotation.y=t.baseRy+t.angle*(t.swing??1.85)}Nh(t.night,t.skyTint),je.opacity=Bp(t.night*.95+t.fogAmt*.12+(t.rain>.4?.15:0),0,1)*.85,Ve.set(`#40a0c0`).lerp(new W(`#e4f2f8`),Bp(t.freeze*.9+t.snowCover*.4,0,1)).lerp(t.skyTint,.2),h.opacity=t.freeze*.94,m.color.copy(Ve),g.position.y=.3+Math.sin(He*1.5)*.008,D(He);for(let e of me)if(e.group.visible=!e.picked,e.ring.visible=!e.picked,!e.picked){let t=1.5+Math.sin(He*2+e.id)*.18;e.ring.scale.setScalar(t)}for(let e of Le)e.visible=t.night>.04,e.material.opacity=t.night*.85;{let e=n===`summer`&&t.night>.35;for(let t of Be)t.s.visible=e,e&&(t.s.position.set(t.bx+Math.sin(He*.6+t.ph)*1.1,t.by+Math.sin(He*1.3+t.ph*2)*.3,t.bz+Math.cos(He*.45+t.ph)*1.1),t.s.material.opacity=.35+.4*(.5+.5*Math.sin(He*2.2+t.ph*3)))}if(ze){if(t.hour>=18.5&&t.hour<=22.5&&(ze.timer-=e,ze.timer<=0)){ze.timer=2.4+Math.random()*2;let e=(Math.random()-.5)*22,t=24+Math.random()*9,n=-4+Math.random()*12,r=[`#ff9d9d`,`#ffd97a`,`#a0e8ff`,`#c8ffb0`,`#e8a8ff`][Math.floor(Math.random()*5)],i=0;for(let a of ze.parts){if(a.life>0)continue;let o=i/16*Math.PI*2,s=Math.acos(2*(i*7%16)/16-1),c=4.6;if(a.vx=Math.sin(s)*Math.cos(o)*c,a.vy=Math.cos(s)*c*.8,a.vz=Math.sin(s)*Math.sin(o)*c,a.s.position.set(e,t,n),a.s.material.color.set(r),a.max=1.3+Math.random()*.5,a.life=a.max,a.s.visible=!0,++i>=16)break}}for(let t of ze.parts)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.s.visible=!1;continue}t.vy-=2*e,t.s.position.x+=t.vx*e,t.s.position.y+=t.vy*e,t.s.position.z+=t.vz*e,t.s.material.opacity=Math.min(1,t.life/t.max)}}let a=.4+t.wind*2.2;for(let e of Ne){let t=(He*.12+e.ph)%1;e.s.position.set(e.base.x+t*a*2.4,e.base.y+t*3.2,e.base.z+t*a*.8),e.s.scale.setScalar(.5+t*1.5),e.s.material.opacity=.42*(1-t)*Math.min(1,t*5)}if(Fe){Pe.position.copy(r).add(new H(0,2.2,0));let n=14+t.night*10;Pe.intensity+=(n-Pe.intensity)*Math.min(1,e*6),Pe.color.set(Fe.lightColor)}else Pe.intensity+=(0-Pe.intensity)*Math.min(1,e*6);Pp.uTime.value=He}}}var Sg={patty:{name:`パティ（公式）`,outfit:`patisserie`,hairstyle:`buns`,hairColor:`rose`,eyeColor:`blue`},festival:{name:`夏祭りの子（公式）`,outfit:`yukata`,hairstyle:`sideUpdo`,hairColor:`chestnut`,eyeColor:`brown`},original:{name:`オリジナル`,outfit:`garden`,hairstyle:`bob`,hairColor:`ash`,eyeColor:`green`}},Cg={patisserie:{name:`パティの制服`,description:`原画のリボンとフリル付きエプロン`,main:`#593640`,dark:`#482936`,accent:`#cc7992`,light:`#ffead3`},garden:{name:`花の広場`,description:`セージ色のワンピースと明るいエプロン`,main:`#66816b`,dark:`#ebd8bb`,accent:`#96ab80`,light:`#fff1d8`},yukata:{name:`赤い千鳥の浴衣`,description:`千鳥と波の模様に、紺の帯と赤い組紐`,main:`#bc504b`,dark:`#29334e`,accent:`#cf574c`,light:`#fff0de`},evening:{name:`夕暮れの散歩`,description:`藍色のワンピースと金色のリボン`,main:`#404b70`,dark:`#303449`,accent:`#e6b979`,light:`#e8e5f2`},festival:{name:`夏祭り`,description:`藍色の浴衣に赤い帯、金色の飾り`,main:`#3a4a7a`,dark:`#b7403c`,accent:`#e8b34b`,light:`#fff0de`},sakura:{name:`桜色ワンピース`,description:`桜色のワンピースと白いエプロン`,main:`#c97b96`,dark:`#a85a76`,accent:`#f2c4d0`,light:`#fff3e6`},marine:{name:`マリンルック`,description:`紺のワンピースと白い襟、赤いスカーフ`,main:`#3c4f7e`,dark:`#2c3a5e`,accent:`#c9503f`,light:`#f4f1e6`},forest:{name:`森の探検服`,description:`深い緑のワンピースと革色のエプロン`,main:`#5d6e46`,dark:`#4a3b2c`,accent:`#d9a05a`,light:`#f1e8d2`}},wg={buns:{name:`おだんご`},bob:{name:`ボブ`},ponytail:{name:`ポニーテール`},sideUpdo:{name:`横まとめ髪`},twintail:{name:`ツインテール`},long:{name:`ロング`},braid:{name:`みつあみ`}},Tg={rose:{name:`ローズ`,base:`#a96e89`,shade:`#87536d`,shine:`#cb95aa`},chestnut:{name:`栗色`,base:`#825846`,shade:`#624033`,shine:`#bc8a6e`},ash:{name:`アッシュ`,base:`#6c687f`,shade:`#4f4a62`,shine:`#9996b2`},honey:{name:`はちみつ`,base:`#bd895a`,shade:`#89643f`,shine:`#e6bc83`},brown:{name:`ブラウン`,base:`#6b4a35`,shade:`#4c3423`,shine:`#96714f`},black:{name:`ブラック`,base:`#37343e`,shade:`#23222a`,shine:`#5d5a6a`},pink:{name:`ピンク`,base:`#e0a3ba`,shade:`#bd7f99`,shine:`#f4c9d8`},blonde:{name:`ブロンド`,base:`#dcb878`,shade:`#b8934f`,shine:`#f2ddab`},mint:{name:`ミント`,base:`#8fc7ae`,shade:`#639a80`,shine:`#bde8d2`}},Eg={blue:{name:`空色`,base:`#5a789c`,shine:`#8ebad2`},brown:{name:`琥珀`,base:`#975e3e`,shine:`#d8a777`},green:{name:`若葉`,base:`#577c68`,shine:`#93b990`}},Dg={outfit:Cg,hairstyle:wg,hairColor:Tg,eyeColor:Eg};function Og(e){let{outfit:t,hairstyle:n,hairColor:r,eyeColor:i}=Sg[e];return{character:e,outfit:t,hairstyle:n,hairColor:r,eyeColor:i}}Object.freeze(Og(`patty`));var kg=Object.keys(Dg);function Ag(e){return typeof e==`string`&&Object.hasOwn(Sg,e)?e:`patty`}function jg(e,t){return Object.fromEntries(kg.map(n=>{let r=e?.[n];return[n,typeof r==`string`&&Object.hasOwn(Dg[n],r)?r:t[n]]}))}function Mg(e){return{character:`original`,...jg(e,Sg.original)}}function Ng(e){let t=Ag(e?.character);return t===`original`?Mg(e):Og(t)}var Pg=Object.freeze({faceY:1.58,faceWidth:.157,faceHeight:.179,faceDepth:.144});function Fg(e,t,n){let{faceWidth:r,faceHeight:i,faceDepth:a}=Pg,o=(e,t)=>a*Math.sqrt(1-(e/r)**2-(t/i)**2);Y(e,t,0,0,0,r,i,a,!0);let s=n?`#`+new W(n.base).lerp(new W(`#37272f`),.62).getHexString():`#473a47`;for(let t of[-1,1]){let r=t*.062,i=.022,a=Ug(e,r,i,o(r,i));if(a.rotation.y=t*.33,Y(a,s,0,0,0,.017,.025,.009,!0),n){Y(a,`#fff5e9`,-.005,.008,.008,.0039,.0046,.0023,!0);let n=new Ca(1,24),r=n.attributes.position;for(let e=0;e<r.count;e++){let n=t*.102+r.getX(e)*.02,i=-.026+r.getY(e)*.008;r.setXYZ(e,n,i,o(n,i)+.0012)}n.computeVertexNormals(),Hg(e,n,`#f4b6a8`,0,0,0,!0)}}Kg(e,`#985864`,[[-.023,-.052],[-.012,-.059],[0,-.061],[.012,-.059],[.023,-.052]].map(([e,t])=>[e,t,o(e,t)+.003]),.0042,!0)}var Ig=new Map,Lg=new Zo(1,20,14),Rg=new Zo(1,12,8),zg=new Sa(1,1,1),Bg=new wa(1,1,1,24),Vg=new Ni(new Uint8Array([115,179,235,255]),4,1,O);Vg.minFilter=Vg.magFilter=i,Vg.needsUpdate=!0;function Hg(e,t,n,r=0,i=0,a=0,o=!1){let s=n+String(o);Ig.has(s)||Ig.set(s,o?new fs({color:n,gradientMap:Vg,side:2}):new ps({color:n,side:2}));let c=new G(t,Ig.get(s));return c.position.set(r,i,a),e.add(c),c}function Ug(e,t=0,n=0,r=0){let i=new On;return i.position.set(t,n,r),e.add(i),i}function Y(e,t,n,r,i,a,o,s,c=!1){let l=Hg(e,c?Lg:Rg,t,n,r,i,c);return l.scale.set(a,o,s),l}function Wg(e,t,n,r,i,a,o,s){let c=Hg(e,zg,t,n,r,i);return c.scale.set(a,o,s),c}function Gg(e,t,n,r,i,a,o,s=a,c=!1){let l=Hg(e,Bg,t,n,r,i,c);return l.scale.set(a,o,s),l}function Kg(e,t,n,r,i=!1){return Hg(e,new $o(new Ia(n.map(e=>new H(...e))),Math.max(8,n.length*4),r,7,!1),t,0,0,0,i)}function qg(e,t,n,r){let i=new ro;i.moveTo(...n[0]);for(let[e,t,r,a]of n.slice(1))i.quadraticCurveTo(e,t,r,a);return i.closePath(),Hg(e,new Yo(i,14),t,0,0,r,!0)}function Jg(e,t,n,r,i,a=1){let o=Ug(e,t,n,r);o.scale.setScalar(a);let s=[`#d74949`,`#344579`,`#f1a040`][i];Gg(o,`#cf8850`,0,.023,0,.068,.046,.068,!0),Gg(o,i===1?`#e4b376`:`#f7e5bb`,0,.055,0,.064,.022,.064,!0),i!==1&&(Gg(o,s,0,.074,0,.066,.017,.066,!0),Gg(o,`#fff3d8`,0,.09,0,.067,.017,.067,!0));for(let e=0;e<6;e++){let t=e*Math.PI/3;Y(o,i===1?s:`#fff3e6`,Math.cos(t)*.037,.106,Math.sin(t)*.037,.024,.022,.024,!0)}Y(o,s,0,.132,0,.026,i===0?.039:.026,.025,!0);let c=Y(o,`#659747`,.016,.153,-.004,.024,.007,.009,!0);return c.rotation.z=.45,o}function Yg(e,t,n,r,i,a){let o=Ug(e,t,n,r);o.scale.setScalar(a);for(let e of[-1,1])Y(o,i,e*.075,.025,0,.082,.041,.025,!0).rotation.z=e*.25,Wg(o,i,e*.052,-.055,-.002,.048,.129,.019).rotation.z=e*.31;return Y(o,i,0,0,.016,.033,.029,.024,!0),o}function Xg(e,t,n,r,i){for(let a=0;a<5;a++){let o=a*Math.PI*.4;Y(e,`#fff0d7`,t+Math.cos(o)*i*.62,n+Math.sin(o)*i*.62,r,i*.54,i*.6,i*.31,!0)}Y(e,`#d8a662`,t,n,r+i*.2,i*.37,i*.37,i*.3,!0)}var Zg=`#ffd5bd`,Qg=`#dca965`,$g=.88,e_=.86,t_=.023,n_=Pg.faceWidth/(.206*$g),r_=Pg.faceHeight/(.229*e_);function i_(e,t,n,r=0){let i=[],a=[];for(let[e,t,a,o]of n)for(let n=0;n<=64;n++){let s=n/64*Math.PI*2,c=1+Math.cos(s*12+r)*o;i.push(Math.sin(s)*t*c,e+(Math.cos(s*12+r)-.3)*o*.15,Math.cos(s)*a*c)}for(let e=0;e<n.length-1;e++)for(let t=0;t<64;t++){let n=e*65+t;a.push(n,n+1,n+64+1,n+1,n+64+2,n+64+1)}let o=new jr;return o.setAttribute(`position`,new yr(i,3)),o.setIndex(a),o.computeVertexNormals(),Hg(e,o,t,0,0,0,!0)}function a_(e,t,{main:n,dark:r,accent:i,light:a}){let{base:o,shade:s,shine:c}=Tg[t.hairColor],l=Eg[t.eyeColor],u=Ug(e,0,(Pg.faceY+t_)/e_-.015*r_,.015),d=Ug(u);if(u.scale.set(n_,r_,.88),t.hairstyle===`bob`){Y(d,s,0,-.08,-.083,.241,.228,.188,!0);for(let e of[-1,1])Y(d,o,e*.179,-.096,.008,.076,.197,.105,!0).rotation.z=-e*.1,Y(d,c,e*.205,-.066,.089,.024,.088,.02,!0).rotation.z=-e*.1}if(t.hairstyle===`ponytail`&&(Y(d,i,0,.101,-.237,.075,.058,.053,!0),Y(d,o,0,-.051,-.282,.11,.163,.095,!0).rotation.x=.29,Y(d,s,.017,-.184,-.317,.072,.162,.063,!0).rotation.z=.24,Y(d,c,-.039,-.055,-.347,.039,.111,.023,!0).rotation.x=.25),t.hairstyle===`sideUpdo`){let e=Ug(d,.182,-.075,-.143);Y(e,s,0,0,0,.123,.124,.135,!0),Y(e,o,.026,.017,.02,.111,.096,.119,!0).rotation.z=.58;for(let t=0;t<3;t++){let n=-.028+t*.043;Kg(e,c,[[n,.091,.042],[n+.021,.049,.102],[n+.026,-.014,.121],[n+.012,-.072,.089]],.007,!0)}let t=Yg(d,.263,-.023,-.04,`#b7403c`,.76);t.rotation.set(.1,.46,.36);for(let e of[-1,1])Y(t,Qg,e*.072,-.12,.008,.022,.022,.019,!0),Y(t,`#a33535`,e*.08,-.166,.01,.024,.042,.022,!0);Kg(d,o,[[.149,.126,.125],[.192,.021,.153],[.168,-.088,.133],[.185,-.199,.153]],.016,!0)}if(t.hairstyle===`twintail`)for(let e of[-1,1])Y(d,i,e*.226,.062,-.052,.052,.042,.046,!0),Y(d,o,e*.243,-.028,-.058,.082,.128,.078,!0),Y(d,s,e*.251,-.148,-.062,.068,.118,.064,!0),Y(d,o,e*.255,-.252,-.058,.052,.096,.05,!0),Y(d,c,e*.228,-.118,-.012,.02,.082,.016,!0);if(t.hairstyle===`long`){Y(d,s,0,-.148,-.128,.238,.302,.142,!0),Y(d,o,0,-.128,-.142,.224,.282,.128,!0);for(let e of[-1,1])Y(d,o,e*.196,-.148,.028,.062,.208,.082,!0).rotation.z=-e*.06}if(t.hairstyle===`braid`){let e=Ug(d,.196,-.018,.096);for(let t=0;t<6;t++){let n=t/5,r=Y(e,t%2?s:o,.012*Math.sin(n*5.2),-.078*t,.012*n,.047,.041,.045,!0);r.rotation.z=.1*Math.cos(n*5.2)}Y(e,i,.012,-.442,.014,.03,.024,.028,!0),Y(e,o,.012,-.478,.014,.026,.036,.024,!0)}Y(d,s,0,.05,-.054,.245,.269,.215,!0);let f=Ug(d,0,.015,.022);f.scale.set(.206/Pg.faceWidth,.229/Pg.faceHeight,.187/Pg.faceDepth),Fg(f,Zg,l),Y(d,o,0,.15,-.048,.245,.168,.208,!0).rotation.z=.08;for(let e of[-1,1]){if(Y(d,Zg,e*.196,-.027,.025,.055,.074,.048,!0),t.hairstyle===`buns`){let t=Ug(d,e*.207,-.094,-.08);Y(t,o,0,0,0,.117,.107,.114,!0).rotation.z=e*.4;for(let n=0;n<4;n++){let r=(n-1.5)*.036;Kg(t,n%2?c:s,[[r,.074,.052],[r+e*.035,.032,.089],[r+e*.031,-.032,.093],[r-e*.005,-.082,.048]],.008,!0)}Xg(t,e*.01,.061,.088,.036),Xg(t,-e*.044,.073,.079,.024)}let n=Y(d,o,e*.179,.063,.087,.055,.16,.07,!0);n.rotation.z=e*-.23,Kg(d,c,[[e*.158,.2,.108],[e*.202,.114,.139],[e*.191,.01,.138],[e*.162,-.08,.153]],.007,!0)}for(let[e,t,n,r,i,a,s]of[[-.116,.149,.137,.067,.139,.082,-.48],[-.055,.155,.172,.063,.133,.071,-.25],[.011,.169,.166,.057,.127,.067,-.23],[.087,.182,.133,.053,.103,.06,.69],[.136,.149,.121,.057,.093,.076,.63]]){let l=Y(d,o,e,t+.025,n,r,i*.92,a*.91,!0);l.rotation.z=s;let u=Y(d,c,e-.012,t+.048,n+a*.83,r*.29,i*.33,a*.12,!0);u.rotation.z=s}for(let[e,t]of[[.139,-.58],[.158,.56]]){let n=Wg(d,Qg,.137,e,.191,.06,.009,.011);n.rotation.z=t,n.rotation.y=.3}if(t.outfit===`patisserie`){let e=Ug(d,-.069,.241,-.009);e.rotation.set(-.11,-.18,.34),Y(e,r,0,.024,-.023,.248,.087,.207,!0),Y(e,n,0,.056,-.029,.243,.083,.194,!0);for(let t=0;t<19;t++){let n=.18+t*.153;Y(e,a,Math.cos(n)*.238,.005,Math.sin(n)*.189,.032,.026,.029,!0).rotation.y=-n}Yg(e,-.209,-.014,.079,i,.76).rotation.z=.42,Y(e,Qg,-.175,-.003,.12,.03,.03,.011,!0)}else if(t.outfit===`garden`||t.outfit===`sakura`)Xg(d,-.195,.118,.134,.051),Xg(d,-.22,.061,.118,.033);else if(t.outfit===`marine`){let e=Yg(d,0,-.302,.148,i,.62);e.rotation.x=.35,Y(d,a,-.072,-.252,.128,.072,.026,.03,!0).rotation.z=.5,Y(d,a,.072,-.252,.128,.072,.026,.03,!0).rotation.z=-.5}else t.outfit===`evening`&&(Yg(d,-.184,.106,.085,i,.59).rotation.z=.49);return u}function o_(e,t){let n=Ug(e);n.scale.setScalar(t),Y(n,`#fff2dc`,0,0,.007,.043,.027,.008,!0).rotation.z=.18,Y(n,`#dbc4a8`,-.007,.006,.014,.027,.013,.004,!0).rotation.z=.35,Y(n,`#fff4e1`,.032,.025,.01,.022,.021,.006,!0),Y(n,`#4d3436`,.039,.029,.016,.005,.005,.003,!0),Y(n,`#c98c69`,.054,.02,.011,.012,.005,.004,!0);for(let e of[-.013,.008])Kg(n,`#ebaf67`,[[e,-.017,.008],[e+.004,-.034,.009],[e+.014,-.039,.009]],.0035,!0)}function s_(e,t){let n=Ug(e);n.scale.setScalar(t);for(let e of[0,.018])Kg(n,`#fff0de`,[[-.054,e,.004],[-.018,.03+e,.009],[.019,.038+e,.01],[.056,.022+e,.004]],.0038,!0)}function c_(e,t){let{main:n,dark:r,light:i,accent:a}=t,o=Ug(e,0,1.13,0);i_(o,n,[[-.888,.213,.161,.029],[-.849,.22,.169,.026],[-.61,.232,.154,.02],[-.33,.228,.148,.025],[-.11,.212,.145,.026],[0,.175,.131,.018]],.48),i_(o,`#9b3d3e`,[[-.891,.212,.16,.029],[-.869,.218,.168,.027]],.48),Kg(o,`#923b38`,[[.11,-.015,.106],[.124,-.25,.13],[.128,-.53,.134],[.168,-.866,.117]],.005,!0);for(let[e,t,n]of[[-.54,-.16,!0],[.65,-.29,!1],[-.73,-.41,!1],[.24,-.53,!0],[-.5,-.7,!0],[.66,-.78,!1],[2.55,-.18,!1],[3.33,-.35,!0],[2.65,-.53,!1],[3.49,-.74,!0],[-1.65,-.59,!0],[1.63,-.49,!1]]){let r=Ug(o,Math.sin(e)*.232,t,Math.cos(e)*.162);r.rotation.y=e,n?o_(r,1.06):s_(r,1.02)}i_(e,n,[[1.11,.18,.129,.01],[1.27,.192,.149,.02],[1.43,.189,.139,.02],[1.52,.184,.11,.01],[1.59,.145,.095,.01],[1.643,.08,.069,0]]),Gg(e,Zg,0,1.674,0,.067,.122,.063,!0),Kg(e,i,[[-.086,1.625,.057],[-.064,1.56,.105],[-.03,1.505,.135],[.025,1.444,.147]],.016,!0),Kg(e,i,[[.084,1.625,.057],[.063,1.555,.109],[.021,1.476,.141],[-.069,1.369,.15],[-.156,1.273,.103]],.016,!0),Kg(e,`#a13b36`,[[.067,1.497,.13],[-.01,1.376,.154],[-.132,1.25,.122]],.009,!0);let s=Ug(e,.094,1.393,.137);s.rotation.y=.4,o_(s,.83);let c=Ug(e,-.101,1.341,.135);c.rotation.y=-.35,s_(c,.66),i_(e,r,[[1.106,.189,.144,.011],[1.124,.203,.161,.012],[1.25,.204,.169,.008],[1.277,.199,.16,.006]]),i_(e,`#da6d5c`,[[1.175,.207,.172,.014],[1.195,.208,.173,.014]]),Yg(e,.067,1.187,.179,a,.63).rotation.z=-.22,Yg(e,0,1.201,-.17,r,1.23).rotation.y=Math.PI;for(let t of[-1,1])Y(e,Qg,.074+t*.041,1.1,.17,.01,.013,.01,!0);return o}function l_(e){let t=Ug(e,-.018,-.233,.035);t.rotation.set(.78,0,-.16),Gg(t,`#bb8955`,0,.041,0,.012,.168,.012,!0),Y(t,`#9c1c24`,0,.139,0,.067,.069,.062,!0),Y(t,`#e62d24`,0,.152,.008,.063,.062,.059,!0),Y(t,`#ffae91`,-.025,.175,.057,.016,.01,.005,!0).rotation.z=.42,Y(t,`#fff3de`,-.027,.177,.059,.009,.008,.003,!0)}function u_(e,t){let n=Ng(t),r=Cg[n.outfit],{light:i,accent:a,main:o,dark:s}=r,c=n.outfit===`yukata`||n.outfit===`festival`,l=n.character===`festival`,u=n.outfit===`garden`?`#655044`:s,d=Ug(e),f=Ug(d,0,-.023,0);f.scale.set($g,e_,.88);let p=[],m=[];for(let e of[-1,1]){let t=Ug(f,e*(c?.085:.124),.93,0),n=Ug(t,0,-.46,0);if(m.push(n),c){Y(t,Zg,0,-.235,0,.061,.255,.063,!0),Y(n,Zg,0,-.187,0,.058,.201,.063,!0),Y(n,Zg,0,-.373,.044,.066,.043,.111,!0),Y(n,`#74504a`,0,-.407,.04,.079,.034,.117,!0);for(let e of[-1,1])Kg(n,a,[[0,-.335,.112],[e*.032,-.342,.078],[e*.059,-.361,.037]],.012,!0);p.push(t);continue}Y(t,Zg,0,-.27,0,.067,.28,.068,!0),Y(n,i,0,-.19,0,.068,.22,.073,!0);let r=Y(n,u,0,-.376,.061,.086,.058,.144,!0);r.rotation.x=-.07,Wg(n,u,0,-.406,-.042,.113,.075,.09),Gg(n,o,0,-.314,.014,.072,.028,.088,!0),Yg(n,0,-.34,.155,a,.29).rotation.x=-.26,Wg(n,Qg,e*.045,-.297,.052,.027,.027,.02),p.push(t)}let h=Ug(f),g=c?c_(h,r):f_(h,n.outfit,r,u),_=[];for(let e of[-1,1]){let t=Ug(h,e*.177,1.505,.002);c?(Y(t,o,e*.021,-.131,.004,.072,.187,.076,!0).rotation.z=e*.18,Y(t,o,e*.047,-.263,-.008,.089,.2,.092,!0).rotation.z=e*.17,o_(Ug(t,e*.058,-.276,.097),.7),s_(Ug(t,e*.045,-.355,.069),.69)):Y(t,i,e*.03,-.117,.006,.07,.176,.077,!0).rotation.z=e*.25;let n=Ug(t,e*.06,-.225,.023);if(n.rotation.x=e===1?-1.3:l?-.72:-.17,Y(n,c?o:i,0,-.09,.011,.066,.133,.067,!0),Gg(n,c?`#9b3d3b`:`#edd2b7`,0,-.186,0,.053,.047,.057,!0),!c)for(let e=0;e<6;e++){let t=e*Math.PI/3;Y(n,i,Math.sin(t)*.046,-.19,Math.cos(t)*.046,.019,.024,.019,!0)}Y(n,Zg,0,-.243,.001,.041,.061,.027,!0),Y(n,Zg,-e*.031,-.239,.018,.016,.033,.016,!0).rotation.z=e*.5,e===-1&&l&&(t.rotation.x=-.14,l_(n)),_.push({arm:t,fore:n})}let v=Ug(h,.247,1.372,.287);Gg(v,`#707786`,0,0,0,.244,.029,.204,!0),Gg(v,`#c9c7ce`,0,.013,0,.229,.018,.192,!0),Gg(v,`#a5a5b0`,0,.026,0,.211,.011,.178,!0);let y=Ug(v);for(let[e,t,n]of[[-.128,.034,0],[.009,-.042,1],[.136,.032,2]])Jg(y,e,.032,t,n,.82);return{root:d,head:a_(h,n,r),body:h,legs:p,knees:m,arms:_,skirt:g,tray:v,cakes:y,yukata:c,festival:l,hipHeight:.93*e_-t_}}function d_(e,t){for(let[n,r]of e.legs.entries())r.position.y=.93,r.rotation.x=t?-1.37:0,e.knees[n].rotation.x=t?1.39:0;e.body.position.y=0,e.body.rotation.set(0,0,0),e.skirt.position.y=t?1.04:e.yukata?1.13:1.12,e.skirt.rotation.set(t?e.yukata?-.72:-.93:0,0,0),e.skirt.scale.y=t&&e.yukata?.63:1,e.arms[0].arm.rotation.set(t?-.28:0,0,0),e.arms[1].arm.rotation.set(t?-.32:0,0,0),e.arms[1].fore.rotation.x=t?-.22:-1.3,e.tray.visible=!t}function f_(e,t,n,r){let{light:i,accent:a,main:o,dark:s}=n,c=Ug(e,0,1.12,0);i_(c,i,[[-.477,.432,.337,.11],[-.435,.412,.321,.1],[-.38,.38,.29,.08]]),i_(c,o,[[-.445,.438,.34,.082],[-.399,.426,.329,.078],[-.339,.39,.309,.082],[-.18,.311,.241,.07],[0,.185,.122,.018]]),i_(c,a,[[-.383,.419,.328,.078],[-.352,.406,.319,.081]]),i_(c,r,[[-.447,.436,.338,.082],[-.418,.432,.332,.08]]);let l=Ug(c,0,-.08,.154),u=[[-.133,.077],[-.097,.11,.135,.089],[.226,-.052,.254,-.228],[.162,-.295,0,-.283],[-.173,-.288,-.249,-.24],[-.226,-.045,-.133,.077]];function d(e,t,n){let r=qg(l,e,u,0),i=r.geometry.attributes.position;for(let e=0;e<i.count;e++){let r=i.getX(e)*t,a=i.getY(e)*t;i.setXYZ(e,r,a,.089-a*.39-r*r*.75+n)}r.geometry.computeVertexNormals()}if(t!==`evening`&&t!==`marine`){d(a,1.09,0),d(s,1,.006);for(let e of[-1,1]){let t=Wg(l,o,e*.109,-.105,.134,.092,.086,.016);t.rotation.z=e*.14;let n=Wg(l,a,e*.109,-.065,.129,.096,.01,.017);n.rotation.z=e*.14,Y(l,Qg,e*.109,-.082,.14,.011,.011,.006,!0)}}let f=Gg(e,a,0,1.133,0,.195,.041,.128,!0);f.rotation.z=.015,Yg(e,.07,1.12,.15,i,.64),Yg(e,0,1.13,-.13,a,1.05).rotation.y=Math.PI,Y(e,i,0,1.377,.009,.181,.274,.141,!0),Y(e,o,0,1.254,.043,.184,.14,.122,!0);for(let t of[-1,1]){Kg(e,o,[[t*.113,1.268,.136],[t*.117,1.435,.132],[t*.126,1.584,.073],[t*.128,1.586,-.062],[t*.119,1.355,-.118]],.032,!0);for(let n=0;n<4;n++)Y(e,i,t*(.148+.011*Math.sin(n)),1.55-n*.054,.057,.037,.032,.055,!0).rotation.z=t*.33;for(let n of[1.255,1.33])Y(e,Qg,t*.092,n,.153,.019,.019,.012,!0)}Gg(e,Zg,0,1.675,0,.067,.145,.063,!0),Gg(e,i,0,1.64,.006,.091,.07,.079,!0);for(let t=0;t<10;t++){let n=t*Math.PI/5;Y(e,i,Math.cos(n)*.082,1.662,Math.sin(n)*.074,.019,.029,.019,!0)}return Yg(e,0,1.584,.118,a,.69),Y(e,Qg,0,1.583,.146,.025,.025,.012,!0),Y(e,`#bc5591`,0,1.583,.156,.016,.016,.008,!0),c}function p_(e){e.root.removeFromParent(),e.root.traverse(e=>{let t=e.geometry;t&&t!==Lg&&t!==Rg&&t!==zg&&t!==Bg&&t.dispose()})}var m_=1.5,h_=class{root=new On;visual=new On;sitDrop=.79;pose=`stand`;model;appearance;carrying=!1;seatedApplied=!1;walkPhase=0;moveBlend=0;step=0;constructor(e){this.appearance=Ng(e),this.visual.scale.setScalar(m_),this.root.add(this.visual),this.model=u_(this.visual,this.appearance)}setLook(e){this.appearance=Ng(e);let t=this.model;this.visual.remove(t.root),p_(t),this.model=u_(this.visual,this.appearance),this.seatedApplied=!1,this.applyCarrying(),this.pose===`sit`&&(d_(this.model,!0),this.seatedApplied=!0)}setCarrying(e){this.carrying=e,this.applyCarrying()}applyCarrying(){this.model&&(this.model.tray.visible=this.carrying&&this.pose!==`sit`,this.pose!==`sit`&&(this.model.arms[1].fore.rotation.x=this.carrying?-1.3:-.17,this.carrying||(this.model.arms[1].arm.rotation.x=-.08)))}update(e,t,n,r){this.step+=e;let i=this.model;if(!i)return;let a=this.pose===`lie`?-Math.PI/2:0;if(this.visual.rotation.x+=(a-this.visual.rotation.x)*Math.min(1,e*7),this.pose===`sit`){this.seatedApplied||=(d_(i,!0),!0),this.moveBlend+=(0-this.moveBlend)*Math.min(1,e*10);return}if(this.seatedApplied&&(d_(i,!1),this.seatedApplied=!1,this.applyCarrying()),this.pose===`lie`){this.moveBlend+=(0-this.moveBlend)*Math.min(1,e*10);return}let o=+(t>.05);this.moveBlend+=(o-this.moveBlend)*Math.min(1,e*10),o>0&&(this.walkPhase+=e*(n?11.7:8.65));let s=Math.sin(this.walkPhase)*this.moveBlend,c=+!!r;i.legs[0].rotation.x=s*(n?.64:.46)-c*.26,i.legs[1].rotation.x=-s*(n?.64:.46)+c*.29,i.legs[0].position.y=.93+Math.max(0,Math.cos(this.walkPhase))*.095*this.moveBlend,i.legs[1].position.y=.93+Math.max(0,-Math.cos(this.walkPhase))*.095*this.moveBlend,i.body.position.y=(.022*Math.cos(this.walkPhase*2)-.008)*this.moveBlend+Math.sin(this.step*2.4)*.012,i.body.rotation.x=-(n?.09:.044)*this.moveBlend,i.body.rotation.z=Math.sin(this.walkPhase)*.02*this.moveBlend,i.arms[0].arm.rotation.x=i.festival?-.14-s*.15:-s*(n?.52:.43)+c*.24,i.arms[0].arm.rotation.z=-.1-c*.23,i.arms[1].arm.rotation.z=.035,this.carrying?(i.arms[1].arm.rotation.x=-.08,i.tray.rotation.set(-i.body.rotation.x,0,-i.body.rotation.z)):i.arms[1].arm.rotation.x=s*(n?.52:.43)+c*.24,i.skirt.rotation.set(-s*.033,Math.cos(this.walkPhase)*.065*this.moveBlend,s*.047)}},g_=[{name:`はな`,lines:[`いらっしゃい！<wbr>今日のお花は<wbr>どれも元気よ。`,`噴水広場の花壇も<wbr>私がお世話<wbr>しているの。`,`ケーキの配達、<wbr>いつもありがとう。`],appearance:{character:`original`,outfit:`garden`,hairstyle:`bob`,hairColor:`brown`,eyeColor:`brown`},scale:1,at:{x:pg.x+1.3,z:pg.z,ry:Math.PI/2}},{name:`そら`,lines:[`噴水の水しぶき、<wbr>見ていて<wbr>飽きないなあ。`,`ここのベンチ、<wbr>お昼寝に<wbr>最高だよ。`],appearance:{character:`original`,outfit:`patisserie`,hairstyle:`buns`,hairColor:`black`,eyeColor:`brown`},scale:.98,at:{x:10.6,z:4.2,ry:Math.atan2(-10.6,-4.2)}},{name:`ほし`,lines:[`ここから街が<wbr>全部見えるんだ。`,`夜の星空も<wbr>すごいんだよ。`],appearance:{character:`original`,outfit:`evening`,hairstyle:`bob`,hairColor:`rose`,eyeColor:`brown`},scale:1.01,at:{x:45,z:-4.2,ry:-Math.PI/2}},{name:`のの`,lines:[`野花を摘みに来たの。<wbr>5本集めると<wbr>花かごになるよ。`,`川の向こうの景色、<wbr>大好き。`],appearance:{character:`original`,outfit:`yukata`,hairstyle:`buns`,hairColor:`brown`,eyeColor:`black`},scale:.99,at:{x:6,z:78,ry:Math.PI}},{name:`かえで`,lines:[`パティスリーの<wbr>焼きたての匂い、<wbr>坂の下まで届くんだ。`,`おつかい中？<wbr>がんばってね。`],appearance:{character:`original`,outfit:`garden`,hairstyle:`ponytail`,hairColor:`brown`,eyeColor:`blue`},scale:1.02,at:{x:-4.5,z:-22,ry:Math.PI/2}},{name:`ゆき`,lines:[`お散歩中なの。<wbr>坂道はいい運動に<wbr>なるわ。`,`広場をぐるっと回るのが<wbr>日課なの。`],appearance:{character:`original`,outfit:`yukata`,hairstyle:`sideUpdo`,hairColor:`black`,eyeColor:`black`},scale:1,route:[{x:2.5,z:10},{x:6.2,z:6.4},{x:9.8,z:.5},{x:6.2,z:-6.4},{x:1.5,z:-11},{x:0,z:-18},{x:1.5,z:-27},{x:.5,z:-33}]},{name:`りん`,lines:[`街門の向こうにも<wbr>行ってみたいな。`,`今日はいい天気。<wbr>歩くのに<wbr>ぴったり。`],appearance:{character:`original`,outfit:`evening`,hairstyle:`ponytail`,hairColor:`pink`,eyeColor:`blue`},scale:.97,route:[{x:-6,z:6},{x:-2,z:24},{x:0,z:43}]}];function __(e){let t=[];for(let n of g_){let r=new On,i=u_(r,n.appearance);i.tray.visible=!1,i.arms[1].fore.rotation.x=-.17,r.scale.setScalar(n.scale),e.add(r);let a=n.at??n.route[0];r.position.set(a.x,q(a.x,a.z),a.z),r.rotation.y=n.at?n.at.ry:0,t.push({model:i,name:n.name,lines:n.lines,lineIdx:0,phase:Math.random()*Math.PI*2,route:n.route,target:1,dir:1,pause:0,walkPhase:Math.random()*6,speed:1.05,faceYaw:null,faceT:0,homeYaw:r.rotation.y})}let n=e=>e.model.root.parent,r=0;function i(e){r+=e;for(let i of t){let t=i.model,a=n(i);if(i.faceT>0&&i.faceYaw!==null){i.faceT-=e;let n=i.faceYaw-a.rotation.y;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;a.rotation.y+=n*Math.min(1,e*8),t.body.position.y=Math.sin(r*2.4+i.phase)*.012,i.faceT<=0&&(i.faceYaw=null);continue}if(!i.route){t.body.position.y=Math.sin(r*2.4+i.phase)*.012,t.head.rotation.y=Math.sin(r*.35+i.phase)*.22;continue}if(i.pause>0){i.pause-=e,t.body.position.y=Math.sin(r*2.4+i.phase)*.012,t.legs[0].rotation.x*=.8,t.legs[1].rotation.x*=.8,t.arms[0].arm.rotation.x*=.8,t.arms[1].arm.rotation.x*=.8;continue}let o=i.route[i.target],s=o.x-a.position.x,c=o.z-a.position.z,l=Math.hypot(s,c);if(l<.15){i.target===i.route.length-1?(i.dir=-1,i.pause=2.5):i.target===0&&(i.dir=1,i.pause=2.5),i.target+=i.dir;continue}let u=Math.atan2(s,c)-a.rotation.y;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;a.rotation.y+=u*Math.min(1,e*6);let d=Math.min(l,i.speed*e);a.position.x+=Math.sin(a.rotation.y)*d,a.position.z+=Math.cos(a.rotation.y)*d,a.position.y=q(a.position.x,a.position.z),i.walkPhase+=e*8.65;let f=Math.sin(i.walkPhase);t.legs[0].rotation.x=f*.46,t.legs[1].rotation.x=-f*.46,t.legs[0].position.y=.93+Math.max(0,Math.cos(i.walkPhase))*.095,t.legs[1].position.y=.93+Math.max(0,-Math.cos(i.walkPhase))*.095,t.body.position.y=.022*Math.cos(i.walkPhase*2)-.008,t.body.rotation.x=-.044,t.arms[0].arm.rotation.x=t.festival?-.14-f*.15:-f*.43,t.arms[1].arm.rotation.x=f*.43,t.skirt.rotation.set(-f*.033,Math.cos(i.walkPhase)*.065,f*.047)}}function a(e,r){for(let i of t){let t=n(i).position;if(Math.abs(t.y-r)>1.4)continue;let a=e.x-t.x,o=e.z-t.z,s=a*a+o*o,c=.64;if(s>=c*c)continue;if(s<1e-6){e.x=t.x+c,e.z=t.z;continue}let l=Math.sqrt(s);e.x=t.x+a/l*c,e.z=t.z+o/l*c}}function o(e,r,i,a,o,s){let c=[];for(let l of t){let t=n(l).position,u=Math.hypot(e-t.x,r-t.z);u>2.3||Math.abs(t.y-i)>1.6||c.push({d:u,label:`E / ✦　${l.name}さんと話す`,run:()=>{l.faceYaw=Math.atan2(e-t.x,r-t.z),l.faceT=3.5,l.route&&(l.pause=Math.max(l.pause,3.5)),o?.(l.name);let n=s?.(l.name);if(n!=null){a(`「${l.name}」<wbr>${n}`);return}let i=l.lines[l.lineIdx%l.lines.length];l.lineIdx+=1,a(`「${l.name}」<wbr>${i}`)}})}return c}function s(){return t.map(e=>{let t=n(e).position;return{name:e.name,x:t.x,z:t.z}})}return{update:i,separate:a,talkTargets:o,positions:s}}var X=e=>document.querySelector(e),v_=X(`#ui`),y_=X(`#game`),Z=new Np,b_=Z.data.quality||_p(),Q,x_,S_,C_,w_,T_=Z.data.quest,E_=Z.data.cake,D_=null,O_=Z.data.flowers,k_=0,A_=0,j_=-.12,M_=0,N_=!1,P_=0,F_=7.2,I_=0,L_=!1,R_=!1,z_=null,B_=!1,V_=new Date().getMonth()+1,H_=V_>=3&&V_<=5?`spring`:V_>=6&&V_<=8?`summer`:V_>=9&&V_<=11?`autumn`:`winter`,U_={spring:`春`,summer:`夏`,autumn:`秋`,winter:`冬`}[H_];function W_(){let e=new Date,t=e.getMonth()+1,n=e.getDate();return t===4&&n<=7?{id:`ohanami`,name:`お花見`}:t===8&&n>=10&&n<=16?{id:`natsuri`,name:`夏祭り`}:t===10&&n>=10&&n<=16?{id:`shukaku`,name:`収穫祭`}:t===12&&n>=20&&n<=25?{id:`illumi`,name:`イルミネーション`}:null}var G_=W_(),K_=Z.data.errandState,q_=Z.data.errandDone,J_=()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`};function Y_(e){let t=Em.find(t=>t.id===e),n=t.doorX??0,r=t.d/2+1.7;return{x:t.x+Math.sin(t.ry)*r+Math.cos(t.ry)*n,z:t.z+Math.cos(t.ry)*r-Math.sin(t.ry)*n}}var X_=[{giver:`counter`,giverName:`パティスリー`,item:`ケーキ`,destName:`西の村の畑の家`,dest:()=>Y_(`house_wv4`)},{giver:`counter`,giverName:`パティスリー`,item:`焼き菓子`,destName:`南の村のまんなかの家`,dest:()=>Y_(`house_sv5`)},{giver:`cart`,giverName:`花屋さん`,item:`花束`,destName:`東の村の朝日の家`,dest:()=>Y_(`house_ev3`)},{giver:`cart`,giverName:`花屋さん`,item:`花束`,destName:`西の村の雲の家`,dest:()=>Y_(`house_wv2`)},{giver:`counter`,giverName:`パティスリー`,item:`ケーキ`,destName:`東の村の川向かいの家`,dest:()=>Y_(`house_ev4`)},{giver:`cart`,giverName:`花屋さん`,item:`花束`,destName:`南の村のひまわりの家`,dest:()=>Y_(`house_sv1`)}],Z_={spring:{giver:`cart`,giverName:`花屋さん`,item:`春の花束`,destName:`野花畑の ののさん`,dest:()=>{let e=x_.positions().find(e=>e.name===`のの`);return e?{x:e.x,z:e.z}:{x:6,z:78}}},summer:{giver:`counter`,giverName:`パティスリー`,item:`かき氷`,destName:`噴水広場の屋台`,dest:()=>({x:8.6,z:7.6})},autumn:{giver:`counter`,giverName:`パティスリー`,item:`お供えの焼き菓子`,destName:`ほしの森の祠`,dest:()=>({x:S_.shrine.x,z:S_.shrine.z+1.6})},winter:{giver:`cart`,giverName:`花屋さん`,item:`冬の花束`,destName:`東の村の岸辺の家`,dest:()=>Y_(`house_ev5`)}};function Q_(){let e=[...X_,Z_[H_]],t=0,n=J_();for(let e=0;e<n.length;e++)t=t*31+n.charCodeAt(e)>>>0;return e[t%e.length]}var $_={はな:{offer:`お願いがあるの。<wbr>野花を5本<wbr>摘んで来てくれない？<wbr>川向こうの野花畑に<wbr>咲いているよ。`,remind:e=>`野花は ${e} / 5 本。<wbr>川向こうの野花畑で<wbr>摘めるよ。`,done:`まあ、きれいな野花！<wbr>ありがとう、<wbr>お店に飾るね。`},そら:{offer:`大変！お気に入りの<wbr>リボンを、広場のベンチに<wbr>置き忘れちゃった。<wbr>探してくれる？`,remind:()=>`リボンは広場の<wbr>ベンチの上にあると<wbr>思うの。ピンク色だよ。`,done:`あった！私のリボン！<wbr>探してくれて<wbr>本当にありがとう。`},ほし:{offer:`夕方の展望台を<wbr>写真に撮って<wbr>見せてほしいな。<wbr>写真モードで<wbr>撮ってね。`,remind:()=>`夕方（16時〜19時）に<wbr>展望台で写真を<wbr>撮ってね。`,done:`わあ、夕日の展望台！<wbr>素敵な写真を<wbr>ありがとう。`},のの:{offer:`野花畑に、ひときわ<wbr>背の高い花が<wbr>咲いたの。見つけて<wbr>教えてくれる？`,remind:()=>`背の高い花は<wbr>野花畑のどこかに<wbr>咲いているよ。`,done:`本当に背が高かった<wbr>でしょう？教えてくれて<wbr>ありがとう。`},かえで:{offer:`坂道の道標、<wbr>文字が薄れて<wbr>いないか心配で。<wbr>見てきてくれる？`,remind:()=>`道標は坂道の途中、<wbr>展望台への分かれ道に<wbr>あるよ。`,done:`まだちゃんと<wbr>読めるのね。<wbr>安心したわ、ありがとう。`},ゆき:{offer:`散歩道の花の色を<wbr>数えてほしいの。<wbr>3か所の花だまりを<wbr>調べてくれる？`,remind:e=>`花だまりは ${e} / 3 か所。<wbr>散歩道の脇に<wbr>咲いているよ。`,done:`3か所とも見て<wbr>くれたのね。<wbr>ありがとう！`},りん:{offer:`ほしの森の祠に<wbr>お参りしたいけど、<wbr>今日は歩けなくて。<wbr>代わりに行ってくれる？`,remind:()=>`祠はほしの森、<wbr>街の北の森の<wbr>奥にあるよ。`,done:`お参りしてくれたのね。<wbr>なんだか良いことが<wbr>ありそう。ありがとう。`}},ev=e=>Z.data.requests[e]??0,tv=e=>Z.data.reqData[e]??0;function nv(e){Z.update({reqData:{...Z.data.reqData,...e}})}function rv(e){switch(e){case`はな`:return{cur:Math.min(tv(`hana`),5),max:5};case`そら`:return{cur:tv(`ribbon`),max:1};case`ほし`:return{cur:tv(`photo`),max:1};case`のの`:return{cur:tv(`tall`),max:1};case`かえで`:return{cur:tv(`sign`),max:1};case`ゆき`:{let e=tv(`yukiMask`);return{cur:(e&1)+(e>>1&1)+(e>>2&1),max:3}}case`りん`:return{cur:tv(`shrine`),max:1};default:return{cur:0,max:1}}}function iv(e){if(T_<3)return null;let t=ev(e);if(t===2)return null;let n=$_[e];if(!n)return null;if(t===0){if(Z.update({requests:{...Z.data.requests,[e]:1}}),e===`はな`){nv({hana:0});for(let e of S_.flowers)e.picked=!1}return $v(),n.offer}let r=rv(e);if(r.cur>=r.max){Z.update({requests:{...Z.data.requests,[e]:2}}),$v();let t=Object.values(Z.data.requests).filter(e=>e===2).length;return`${n.done}<wbr>（お願い達成 ${t} / 7）`}return n.remind(r.cur)}function av(e){let t=iv(e);if(t!==null)return t;if(Z.data.friendDay[e]===J_())return null;let n=Z.data,r=null,i={};if(n.bagFish.length?(r=`魚の「${n.bagFish[0]}」`,i={bagFish:n.bagFish.slice(1)}):n.bagVeg>0?(r=`畑のかぼちゃ`,i={bagVeg:n.bagVeg-1}):n.bagFlowers>0&&(r=`野花`,i={bagFlowers:n.bagFlowers-1}),!r)return null;let a=Math.min(5,(n.friends[e]??0)+1);return Z.update({...i,friends:{...n.friends,[e]:a},friendDay:{...n.friendDay,[e]:J_()}}),$v(),`${r}を<wbr>プレゼントしました！<wbr>${e}さんが<wbr>喜んでいます<wbr>（なかよし度 ${Am(`heart`,13)} ${a} / 5）`}var ov=[[`hill`,`丘の坂道`],[`plaza`,`噴水広場`],[`gate`,`街門と川辺`],[`meadow`,`野花畑`],[`pond`,`はな畑の池`],[`forest`,`ほしの森`],[`westhill`,`かぜの丘`],[`rocks`,`いわ山の見晴らし`],[`wv`,`西の村`],[`ev`,`東の村`],[`sv`,`南の村`]],sv=Object.fromEntries(ov),cv=[`はな`,`そら`,`ほし`,`のの`,`かえで`,`ゆき`,`りん`],lv=null,uv=``,dv=null,fv=!1,pv=[{id:`pond`,x:13,z:95.2,bx:13,bz:98.6,waterY:.66},{id:`river`,x:3.5,z:61.8,bx:3.5,bz:58.2,waterY:-.3}],mv={pond:[{name:`メダカ`,w:30},{name:`フナ`,w:30},{name:`コイ`,w:22},{name:`キンギョ`,w:12},{name:`ニシキゴイ`,w:6}],river:[{name:`ハヤ`,w:30},{name:`アユ`,w:28},{name:`ヤマメ`,w:24},{name:`ニジマス`,w:12},{name:`サクラマス`,w:6}]},hv=[`メダカ`,`フナ`,`コイ`,`キンギョ`,`ニシキゴイ`,`ハヤ`,`アユ`,`ワカサギ`,`ヤマメ`,`ニジマス`,`サクラマス`],gv=null,_v=null;function vv(e){if(C_.frozen){$(`凍っていて<wbr>釣りができません`);return}gv={spot:e,phase:`wait`,t:0,biteAt:2+Math.random()*3.5,cancelT:0},_v&&(_v.position.set(e.bx,e.waterY,e.bz),_v.visible=!0),$(`うきを投げました。<wbr>魚がかかるのを<wbr>待とう…`)}function yv(){if(!gv)return;if(gv.phase===`wait`){gv.biteAt=gv.t+1.5+Math.random()*3,$(`まだ魚は<wbr>来ていないみたい…`);return}let e=gv.spot;gv=null,_v&&(_v.visible=!1);let t=mv[e.id],n=Math.random()*t.reduce((e,t)=>e+t.w,0),r=t[0].name;for(let e of t)if(n-=e.w,n<=0){r=e.name;break}e.id===`river`&&H_===`winter`&&r===`アユ`&&(r=`ワカサギ`);let i=!Z.data.fish.includes(r);Z.update({fish:i?[...Z.data.fish,r]:Z.data.fish,fishCaught:Z.data.fishCaught+1,bagFish:Z.data.bagFish.length<6?[...Z.data.bagFish,r]:Z.data.bagFish}),$v(),$(i?`「${r}」が<wbr>釣れました！<wbr>魚図鑑に記録しました`:`「${r}」が<wbr>釣れました！`)}var bv={spring:[{name:`北斗七星`,desc:`ひしゃくの形の<wbr>7つの星です`},{name:`しし座`,desc:`春の夜空の<wbr>ライオンです`}],summer:[{name:`夏の大三角`,desc:`ベガ・アルタイル・<wbr>デネブの三角形です`},{name:`さそり座`,desc:`S字のしっぽが<wbr>特徴です`}],autumn:[{name:`カシオペア座`,desc:`Wの形の<wbr>星座です`},{name:`ペガスス座`,desc:`秋の四辺形が<wbr>目印です`}],winter:[{name:`オリオン座`,desc:`3つ星とベテルギウスが<wbr>輝きます`},{name:`おうし座`,desc:`オレンジ色の星が<wbr>目印です`}]},xv=Object.values(bv).flat().map(e=>e.name),Sv=null,Cv=0,wv=!1,Tv=null,Ev={x:0,z:0},Dv={clear:`晴れ`,cloudy:`曇り`,rain:`雨`,snow:`雪`,fog:`霧`,thunder:`雷雨`,wind:`風が強い`},Ov=[];async function kv(){if(iy)try{let e=`https://api.open-meteo.com/v1/forecast?latitude=${iy.lat.toFixed(4)}&longitude=${iy.lon.toFixed(4)}&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=3&timezone=auto`,t=await fetch(e);if(!t.ok)return;let n=(await t.json()).daily;if(!n?.time||!n.weather_code)return;let r=[`日`,`月`,`火`,`水`,`木`,`金`,`土`];Ov=[1,2].filter(e=>n.time[e]).map(e=>({label:`${e===1?`明日`:`明後日`}（${r[new Date(n.time[e]+`T12:00:00`).getDay()]}）`,kind:ay(n.weather_code[e],0),tmax:Math.round(n.temperature_2m_max?.[e]??0),tmin:Math.round(n.temperature_2m_min?.[e]??0)})),$v()}catch{}}var Av=null,jv=0,Mv=``,Nv=null,Pv=null,Fv=6,Iv=-1,Lv=new H,Rv=new H,zv=[[42,-12],[0,-71.5],[8,97],[-70,2],[66,-8],[10.6,5.6],[-4.5,-20.5],[12,152],[-95,-6],[0,41.5]];function Bv(){let e=0,t=J_();for(let n=0;n<t.length;n++)e=e*31+t.charCodeAt(n)>>>0;return zv[e%zv.length]}function Vv(){if(!S_)return;let[e,t]=Bv(),n=q(e,t)+.55;S_.treasure.position.set(e,n,t),S_.treasure.userData.y=n,S_.treasure.visible=Z.data.treasureDay!==J_()}function Hv(e){let t=Z.data.farmStart[e];if(!t)return 0;let n=Math.floor((Date.parse(J_())-Date.parse(t))/864e5);return n<=0?1:n===1?2:3}function Uv(){S_&&S_.farmStages.forEach((e,t)=>{let n=Hv(t),r=Z.data.farmKind[t];e.forEach((e,t)=>{e.visible=n===1&&t===0||n===2&&t===1||n===3&&(r===1&&t===2||r===2&&t===3)})})}function Wv(){if(S_)for(let e of S_.out.exhibits)e.group.visible=Z.data.museum.includes(e.species)}var Gv=[[`table`,`テーブル`],[`chair`,`いす`],[`sofa`,`ソファ`],[`shelf`,`本棚`],[`bed`,`ベッド`],[`lamp`,`ランプ`],[`plant`,`観葉植物`],[`rug`,`ラグ`]],Kv=Em.find(e=>e.id===`myhome`);function qv(e,t){let n=Math.cos(Kv.ry),r=Math.sin(Kv.ry);return[Kv.x+e*n+t*r,Kv.z-e*r+t*n]}function Jv(e,t){let n=Math.cos(Kv.ry),r=Math.sin(Kv.ry),i=e-Kv.x,a=t-Kv.z;return[n*i-r*a,r*i+n*a]}var Yv=new Map,Xv=null;function Zv(){let e=S_?.out.homeFrame;if(S_&&e){for(let t of S_.out.homeItems){let n=Z.data.homeItems.find(e=>e.id===t.id);if(t.group.visible=!!n,!n)continue;let[r,i]=qv(n.x,n.z);t.group.position.set(r,e.y,i),t.group.rotation.y=e.ry+n.ry;let a=Yv.get(t.id);a&&(a.x=r,a.z=i,a.rot=e.ry+n.ry,a.y0=e.y-.2,a.y1=e.y+1.1)}Qv()}}function Qv(){let e=document.querySelector(`#arrangeBtns`);e&&(e.innerHTML=Gv.map(([e,t])=>{let n=Z.data.homeItems.some(t=>t.id===e);return`<button class="arrange-btn ${Xv===e?`sel`:``}" data-item="${e}">${t}${n?`（置いてある）`:``}</button>`}).join(``),e.querySelectorAll(`.arrange-btn`).forEach(e=>e.addEventListener(`click`,()=>{let t=e.dataset.item;if(Xv=t,lv!==`myhome`){$(`模様替えは<wbr>家の中でできます`),Qv();return}let n=S_.out.homeFrame;if(!n)return;let r=Q.root.position,[i,a]=Jv(r.x,r.z),o=Math.max(-n.hw,Math.min(n.hw,i)),s=Math.max(-n.hd,Math.min(n.hd,a)),c=Z.data.homeItems.filter(e=>e.id!==t),l=Z.data.homeItems.find(e=>e.id===t);c.push({id:t,x:Math.round(o*10)/10,z:Math.round(s*10)/10,ry:l?.ry??0}),Z.update({homeItems:c}),Zv(),$(`${Gv.find(e=>e[0]===t)?.[1]}を<wbr>置きました`)})))}function $v(){let e=document.querySelector(`#records`);if(!e)return;let t=(e,t)=>t.map(([t,n])=>`<span class="rec-chip ${e.includes(t)?`got`:``}">${e.includes(t)?`●`:`○`} ${n}</span>`).join(``),n=cv.map(e=>[e,e]);e.innerHTML=`<div class="rec-head">きろく（季節：${U_}${G_?`・${G_.name}`:``}）</div>${Ov.map(e=>`<div class="rec-line">${e.label}の天気　${Dv[e.kind]}（最高 ${e.tmax}° / 最低 ${e.tmin}°）</div>`).join(``)}<div class="rec-line">おつかい完了　${q_} 件</div><div class="rec-line">住人のお願い　${Object.values(Z.data.requests).filter(e=>e===2).length} / 7</div><div class="rec-line">猫のなかよし度　${Am(`heart`,13)} ${Z.data.cat} / 5</div><div class="rec-line">つった魚　${Z.data.fishCaught} 匹</div><div class="rec-line">見つけた宝物　${Z.data.treasures} 個</div><div class="rec-line">博物館の展示　${Z.data.museum.length} / 11</div><div class="rec-line">持っているもの　野花 ${Z.data.bagFlowers}・魚 ${Z.data.bagFish.length}・かぼちゃ ${Z.data.bagVeg}</div><div class="rec-line">入った建物　${Z.data.visited.length} / ${S_?.interiors.length??35}</div><div class="rec-sub">エリア</div><div class="rec-chips">${t(Z.data.discovered,ov)}</div><div class="rec-sub">話した住人</div><div class="rec-chips">${t(Z.data.talked,n)}</div><div class="rec-sub">魚図鑑</div><div class="rec-chips">${t(Z.data.fish,hv.map(e=>[e,e]))}</div><div class="rec-sub">見つけた星座</div><div class="rec-chips">${t(Z.data.stars,xv.map(e=>[e,e]))}</div><div class="rec-sub">住人のお願い</div><div class="rec-chips">${cv.map(e=>{let t=Z.data.requests[e]??0;return`<span class="rec-chip ${t===2?`got`:``}">${t===2?`●`:t===1?`▲`:`○`} ${e}</span>`}).join(``)}</div><div class="rec-sub">住人とのなかよし度</div><div class="rec-chips">${cv.map(e=>{let t=Z.data.friends[e]??0;return`<span class="rec-chip ${t>=3?`got`:``}">${Am(`heart`,12)} ${t} ${e}</span>`}).join(``)}</div><div class="rec-sub">アルバム</div>${Z.data.album.length?`<div class="album-grid">${Z.data.album.map((e,t)=>`<img class="album-img" data-idx="${t}" src="${e}" alt="写真">`).join(``)}</div>`:`<div class="rec-line">まだ写真がありません。<wbr>写真モードで撮ってみよう</div>`}`}var ey=!1,ty=30,ny=!1,ry=0,iy=null;function ay(e,t){let n;return n=e===0||e===1?`clear`:e===2||e===3?`cloudy`:e===45||e===48?`fog`:e>=71&&e<=77||e===85||e===86?`snow`:e>=95?`thunder`:`rain`,(n===`clear`||n===`cloudy`)&&t>=8&&(n=`wind`),n}async function oy(){if(!iy)return!1;try{let e=`https://api.open-meteo.com/v1/forecast?latitude=${iy.lat.toFixed(4)}&longitude=${iy.lon.toFixed(4)}&current=weather_code,wind_speed_10m&wind_speed_unit=ms`,t=await fetch(e);if(!t.ok)return!1;let n=await t.json(),r=n.current?.weather_code;if(typeof r!=`number`)return!1;let i=ay(r,n.current?.wind_speed_10m??0);return i!==C_.kind&&C_.setWeather(i),!0}catch{return!1}}function sy(){if(!(`geolocation`in navigator)){ty=20,$(`位置情報が使えないため<wbr>天気が自動で変化します`);return}navigator.geolocation.getCurrentPosition(async e=>{if(!ey)return;iy={lat:e.coords.latitude,lon:e.coords.longitude};let t=await oy();kv(),ey&&(t?(ny=!0,ry=900,$(`実際の天気に合わせました（${ah[C_.kind]}）`)):(ty=20,$(`天気を取得できなかったため<wbr>自動で変化します`)))},()=>{ey&&(ty=20,$(`位置情報が使えないため<wbr>天気が自動で変化します`))},{timeout:1e4,maximumAge:6e5})}var cy=new H,ly=new H;function uy(){v_.innerHTML=`
    <header class="topbar"><div class="brand"><span class="seal"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#ffe9c4" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6.8 11h10.4l-1.4 8.2a1.5 1.5 0 0 1-1.5 1.3H9.7a1.5 1.5 0 0 1-1.5-1.3L6.8 11z"/><path d="M5.5 11a3.4 3.4 0 0 1 .6-6.7A5 5 0 0 1 12 2.6a5 5 0 0 1 5.9 1.7 3.4 3.4 0 0 1 .6 6.7"/><path d="M10 14.2v3M14 14.2v3"/></svg></span><div><small class="brand-en">HILLSIDE PÂTISSERIE</small><strong>坂の上のパティスリー</strong><small id="location">丘の坂道</small></div></div><div class="sky-chip"><span id="weatherIcon"></span><span id="clock">朝 08:00</span></div><button class="round-btn" id="photoBtn" aria-label="写真モード"></button><button class="round-btn" id="menuBtn" aria-label="メニュー">☰</button></header>
    <section class="quest-card"><div class="quest-kicker">TODAY'S ERRAND <span id="questStep">01 / 03</span></div><div class="quest-title" id="questTitle"></div><div class="quest-copy" id="questCopy"></div><div class="quest-progress"><i id="progressBar"></i></div></section>
    <div class="hint-pill" id="hint" hidden></div>
    <div class="touch-zone" id="touchZone"><div class="stick" id="stick"><i></i></div></div>
    <div class="touch-actions"><button class="action-btn" data-action="jump"><span>↑</span>ジャンプ</button><button class="action-btn primary" data-action="interact"><span>✦</span>調べる</button><button class="action-btn" data-action="sprint"><span>»</span>走る</button></div>
    <div class="toast" id="toast"></div>
    <aside class="settings" id="settings"><div class="settings-head"><strong>散策ノート</strong><button id="closeSettings" class="close-btn">×</button></div><label>天気<select id="weatherSelect"><option value="auto">自動で変化</option><option value="clear">晴れ</option><option value="cloudy">曇り</option><option value="rain">雨</option><option value="wind">強風</option><option value="snow">雪</option><option value="fog">霧</option><option value="thunder">雷雨</option></select></label><label class="check-row"><span>時間を進める</span><input type="checkbox" id="timeToggle" checked></label><div class="time-row"><div class="time-head"><span>時刻を指定</span><span id="timeValue">朝 08:06</span></div><input type="range" id="timeRange" min="0" max="1435" step="5" value="486"></div><label>プレイヤー<select id="charSelect"><option value="patty">パティ（公式）</option><option value="festival">夏祭りの子</option><option value="original">オリジナル</option></select></label><label>衣装<select id="outfitSelect"><option value="patisserie">パティシエ</option><option value="garden">花の広場</option><option value="yukata">浴衣</option><option value="evening">夕暮れドレス</option><option value="festival">夏祭り</option><option value="sakura">桜色ワンピース</option><option value="marine">マリンルック</option><option value="forest">森の探検服</option></select></label><label>髪型<select id="styleSelect"><option value="buns">おだんご</option><option value="bob">ボブ</option><option value="ponytail">ポニーテール</option><option value="sideUpdo">横まとめ髪</option><option value="twintail">ツインテール</option><option value="long">ロング</option><option value="braid">みつあみ</option></select></label><label>髪色<select id="hairSelect"><option value="rose">ローズ</option><option value="chestnut">栗色</option><option value="ash">アッシュ</option><option value="honey">はちみつ</option><option value="brown">ブラウン</option><option value="black">ブラック</option><option value="pink">ピンク</option><option value="blonde">ブロンド</option><option value="mint">ミント</option></select></label><div class="records" id="records"></div><div class="home-arrange" id="homeArrange" hidden><div class="rec-sub">わたしの家の模様替え</div><div class="arrange-note">家具を選ぶと、今いる場所に置きます（置いてある家具は選び直すと移動します）</div><div class="arrange-btns" id="arrangeBtns"></div><div class="arrange-ops"><button id="arrRotate" class="io-btn">選んだ家具を回転</button><button id="arrRemove" class="io-btn">選んだ家具をしまう</button></div></div><div class="slot-sec"><div class="rec-sub">セーブスロット（3つまで保存できます）</div><div class="slot-btns" id="slotBtns"></div><div class="arrange-note">別のスロットを選ぶと、その記録で遊べます（読み込み直します）</div></div><div class="save-io"><button id="exportSave" class="io-btn">セーブを書き出す</button><button id="importSave" class="io-btn">セーブを読み込む</button><input type="file" id="importFile" accept=".json,application/json" hidden></div><div class="settings-note">PC: WASD 移動 / Shift 走る / Space ジャンプ / E 調べる。画面ドラッグで視点を回せます。</div><button id="resumeBtn" class="resume-btn">散策をつづける</button></aside>
    <div class="photo-bar" id="photoBar"><button id="shutterBtn" class="photo-btn primary"></button><button id="photoExitBtn" class="photo-btn">戻る</button></div>
    <div class="lightbox" id="lightbox"><img id="lightboxImg" alt="写真"><button id="lightboxDel" class="lightbox-del">この写真を消す</button><div class="lightbox-tip">タップで閉じる</div></div>
    <div class="vignette"></div>`}function $(e){let t=X(`#toast`);t.innerHTML=e,t.classList.add(`show`),k_=3.2}function dy(){if(T_===0&&!E_)return[`焼きたてケーキを受け取ろう`,`パティスリーの<wbr>カウンターで、<wbr>焼きたてのケーキを<wbr>受け取りましょう。`,.05];if(T_===0)return[`焼きたてケーキを花屋さんへ`,`花屋さんの<wbr>カートまで届けよう。<wbr>噴水広場を通って<wbr>坂を下ります。`,.25];if(T_===1)return[`野花を摘もう　${Math.min(O_,5)} / 5`,`街門を抜け、<wbr>川の向こうの<wbr>花畑で野花を5本<wbr>集めましょう。`,.34+Math.min(O_,5)*.1];if(T_===2)return[`花かごを花屋さんへ`,`花屋さんに届けて、<wbr>おつかいを<wbr>完了しましょう。`,.88];let e=Q_();return K_===0?[`今日のおつかいを受けよう`,`${e.giverName}で<wbr>${e.item}を<wbr>受け取りましょう。`,.15]:K_===1?[`${e.item}を届けよう`,`${e.destName}へ<wbr>届けましょう。`,.6]:[`今日のおつかいは完了`,`おつかい完了は<wbr>通算 ${q_} 件。<wbr>街を自由に<wbr>散策しよう。`,1]}function fy(){let e=Q.root.position;if(z_){let e=z_;return{d:0,label:e.kind===`sit`?`E / ✦　立つ`:`E / ✦　起きる`,run:()=>{Q.root.position.set(e.x,e.y,e.z),P_=e.y,Q.root.rotation.y=e.yaw,Q.pose=`stand`,z_=null,e.kind===`lie`&&(C_.hour=7,$(`よく寝ました！<wbr>朝になりました`))}}}if(wv)return{d:0,label:`E / ✦　自転車を降りる`,run:()=>{wv=!1,Ev={x:e.x,z:e.z},$(`自転車を降りました`)}};if(gv)return{d:0,label:gv.phase===`bite`?`E / ✦　釣り上げる！`:`E / ✦　うきを見ている…`,run:yv};let t=[];if(Sv){let n=Sv.position,r=Math.hypot(e.x-n.x,e.z-n.z);r<1.7&&Math.abs(n.y-P_)<1.6&&t.push({d:r,label:`E / ✦　猫をなでる`,run:()=>{if(Cv=.6,Z.data.catDay!==J_()){let e=Math.min(5,Z.data.cat+1);Z.update({cat:e,catDay:J_()}),$v(),$(e>=5?`猫がすっかり<wbr>懐きました！<wbr>これからは付いて<wbr>来てくれます`:e===3?`猫が懐いてきました！<wbr>これからは付いて<wbr>来てくれます`:`猫をなでました。<wbr>なかよし度 ${Am(`heart`,13)} ${e} / 5`)}else $(`猫は今日はもう<wbr>満足そうです。<wbr>「にゃーん」`)}})}if(C_&&C_.night>.45){let n=Math.hypot(e.x-48.3,e.z+7);n<2.6&&Math.abs(P_-(im.y+.04))<1.7&&t.push({d:n,label:`E / ✦　星空を調べる`,run:()=>{let e=bv[H_],t=e.filter(e=>!Z.data.stars.includes(e.name)),n=(t.length?t:e)[Math.floor(Math.random()*(t.length?t.length:e.length))];Z.data.stars.includes(n.name)?$(`「${n.name}」<wbr>${n.desc}`):(Z.update({stars:[...Z.data.stars,n.name]}),$v(),$(`「${n.name}」を<wbr>見つけました！<wbr>${n.desc}`))}})}for(let n of pv){let r=Math.hypot(e.x-n.x,e.z-n.z);r<2.1&&t.push({d:r,label:`E / ✦　釣りをする`,run:()=>vv(n)})}if(Tv){let n=Math.hypot(e.x-Ev.x,e.z-Ev.z);n<1.8&&t.push({d:n,label:`E / ✦　自転車に乗る`,run:()=>{wv=!0,$(`自転車に乗りました。<wbr>平地は速く、<wbr>上り坂はゆっくりです`)}})}if(T_===0&&!E_&&D_){let n=Math.hypot(e.x-D_.x,e.z-D_.z);n<2.3&&t.push({d:n,label:`E / ✦　焼きたてケーキを受け取る`,run:()=>{E_=!0,Q.setCarrying(!0),Z.update({cake:!0}),$(`焼きたてケーキを<wbr>受け取りました。<wbr>花屋さんへ<wbr>届けよう！`)}})}let n={x:-11.5,z:-3.5},r=Math.hypot(e.x-n.x,e.z-n.z);if(r<3.4&&(T_===0&&E_||T_===2)&&t.push({d:r,label:T_===0?`E / ✦　花屋さんにケーキを渡す`:`E / ✦　花屋さんに花かごを渡す`,run:()=>{T_===0?(T_=1,O_=0,E_=!1,Q.setCarrying(!1),$(`「ありがとう！<wbr>次は川向こうの<wbr>野花を5本お願い」`),Z.update({quest:T_,flowers:O_,cake:!1})):(T_=3,Q.setCarrying(!1),$(`「きれいな花ね。<wbr>おつかいありがとう！」`),Z.update({quest:T_,flowers:O_}))}}),T_===1)for(let n of S_.flowers){if(n.picked)continue;let r=Math.hypot(e.x-n.x,e.z-n.z);r<2.4&&t.push({d:r,label:`E / ✦　野花を摘む`,run:()=>{n.picked=!0,O_++,Z.update({quest:T_,flowers:O_}),$(`野花を摘みました　${Math.min(O_,5)} / 5`),O_>=5&&(T_=2,Q.setCarrying(!0),Z.update({quest:T_,flowers:O_}),$(`花かごができました。<wbr>花屋さんへ戻ろう！`))}})}if(T_>=3&&ev(`はな`)===1&&tv(`hana`)<5)for(let n of S_.flowers){if(n.picked)continue;let r=Math.hypot(e.x-n.x,e.z-n.z);r<2.4&&t.push({d:r,label:`E / ✦　野花を摘む`,run:()=>{n.picked=!0;let e=tv(`hana`)+1;nv({hana:e}),$(e>=5?`野花が5本そろいました。<wbr>はなさんへ届けよう！`:`野花を摘みました　${e} / 5`)}})}if(T_>=3&&ev(`はな`)!==1&&Z.data.bagFlowers<9)for(let n of S_.flowers){if(n.picked)continue;let r=Math.hypot(e.x-n.x,e.z-n.z);r<2.4&&t.push({d:r,label:`E / ✦　野花を摘む`,run:()=>{n.picked=!0,Z.update({bagFlowers:Z.data.bagFlowers+1}),$v(),$(`野花を摘みました。<wbr>プレゼントに使えます<wbr>（野花 ${Z.data.bagFlowers} / 9）`)}})}if(T_>=3){let n=Q_();if(K_===0){let r=n.giver===`counter`?D_:{x:-11.5,z:-3.5},i=n.giver===`counter`?2.3:3.4;if(r){let a=Math.hypot(e.x-r.x,e.z-r.z);a<i&&t.push({d:a,label:`E / ✦　${n.item}を受け取る`,run:()=>{K_=1,Q.setCarrying(!0),Z.update({errandState:1}),$(`${n.item}を<wbr>受け取りました。<wbr>${n.destName}へ<wbr>届けよう！`),$v()}})}}if(K_===1){let r=n.dest(),i=Math.hypot(e.x-r.x,e.z-r.z);i<2.7&&t.push({d:i,label:`E / ✦　${n.item}を渡す`,run:()=>{K_=2,q_++,Q.setCarrying(!1),Z.update({errandState:2,errandDone:q_}),$(`おつかい完了！<wbr>ありがとうございました。<wbr>（通算 ${q_} 件）`),$v()}})}}for(let n of S_.sits){let r=Math.hypot(e.x-n.x,e.z-n.z);r<1.15&&Math.abs(P_-(n.y-.46))<1.7&&t.push({d:r,label:`E / ✦　座る`,run:()=>{z_={kind:`sit`,x:e.x,y:P_,z:e.z,yaw:Q.root.rotation.y},Q.root.position.set(n.x,n.y-Q.sitDrop,n.z),P_=n.y-Q.sitDrop,Q.root.rotation.y=n.ry,Q.pose=`sit`}})}for(let n of S_.beds){let r=Math.hypot(e.x-n.x,e.z-n.z);r<1.35&&Math.abs(P_-(n.y-.5))<1.7&&t.push({d:r,label:`E / ✦　ベッドで寝る`,run:()=>{z_={kind:`lie`,x:e.x,y:P_,z:e.z,yaw:Q.root.rotation.y},Q.root.position.set(n.x+Math.sin(n.ry)*.45,n.y+.08,n.z+Math.cos(n.ry)*.45),P_=n.y+.08,Q.root.rotation.y=n.ry,Q.pose=`lie`,$(`おやすみなさい…`)}})}if(T_>=3&&ev(`そら`)===1&&!tv(`ribbon`)){let n=S_.ribbonSpot,r=Math.hypot(e.x-n.x,e.z-n.z);r<1.8&&Math.abs(P_-(n.y-.53))<1.7&&t.push({d:r,label:`E / ✦　リボンを拾う`,run:()=>{nv({ribbon:1}),S_.ribbonGroup.visible=!1,$(`ピンクのリボンを<wbr>拾いました。<wbr>そらさんに届けよう！`)}})}if(T_>=3&&ev(`のの`)===1&&!tv(`tall`)){let n=S_.tallFlower,r=Math.hypot(e.x-n.x,e.z-n.z);r<2.2&&t.push({d:r,label:`E / ✦　背の高い花を調べる`,run:()=>{nv({tall:1}),$(`ひときわ背の高い花を<wbr>見つけました。<wbr>ののさんに知らせよう！`)}})}if(T_>=3&&ev(`かえで`)===1&&!tv(`sign`)){let n=Math.hypot(e.x-5,e.z+10);n<2.4&&t.push({d:n,label:`E / ✦　道標を調べる`,run:()=>{nv({sign:1}),$(`道標には「展望台 →」<wbr>「↑ パティスリー」と<wbr>書かれています。<wbr>かえでさんに知らせよう！`)}})}T_>=3&&ev(`ゆき`)===1&&S_.yukiFlowers.forEach((n,r)=>{if(tv(`yukiMask`)&1<<r)return;let i=Math.hypot(e.x-n.x,e.z-n.z);i<1.9&&t.push({d:i,label:`E / ✦　花だまりを調べる`,run:()=>{let e=tv(`yukiMask`)|1<<r;nv({yukiMask:e});let t=(e&1)+(e>>1&1)+(e>>2&1);$(t>=3?`花だまりを全部調べました。<wbr>ゆきさんに知らせよう！`:`花だまりを調べました　${t} / 3`)}})});{let n=S_.shrine,r=Math.hypot(e.x-n.x,e.z-n.z);r<2.2&&Math.abs(P_-n.y)<1.7&&t.push({d:r,label:`E / ✦　祠にお参りする`,run:()=>{if(T_>=3&&ev(`りん`)===1&&!tv(`shrine`)){nv({shrine:1}),$(`お参りしました。<wbr>りんさんに知らせよう！`);return}let e=[`そっと手を合わせました。<wbr>心が落ち着きます`,`お参りしました。<wbr>みんなの健康を<wbr>祈ります`,`お参りしました。<wbr>今日も良い一日に<wbr>なりますように`];$(e[Math.floor(Math.random()*e.length)])}})}if(S_.treasure.visible){let[n,r]=Bv(),i=Math.hypot(e.x-n,e.z-r);i<2&&t.push({d:i,label:`E / ✦　宝物を見つける`,run:()=>{Z.update({treasures:Z.data.treasures+1,treasureDay:J_()}),Vv(),$v(),$(`キラキラ光る<wbr>宝物を見つけました！<wbr>（通算 ${Z.data.treasures} 個）`)}})}if(S_.farmPlots.forEach((n,r)=>{let i=Math.hypot(e.x-n.x,e.z-n.z);if(i>=1.7)return;let a=Hv(r);a===0?t.push({d:i,label:`E / ✦　種をまく`,run:()=>{if(H_===`winter`){$(`冬は畑も<wbr>お休みです`);return}let e=H_===`autumn`?2:1,t=[...Z.data.farmStart];t[r]=J_();let n=[...Z.data.farmKind];n[r]=e,Z.update({farmStart:t,farmKind:n}),Uv(),$(e===2?`かぼちゃの種を<wbr>まきました`:`花の種を<wbr>まきました`)}}):a<3?t.push({d:i,label:`E / ✦　畑を調べる`,run:()=>{$(`すくすく<wbr>育っています。<wbr>収穫まであと ${2-Math.floor((Date.parse(J_())-Date.parse(Z.data.farmStart[r]))/864e5)} 日ほど`)}}):t.push({d:i,label:`E / ✦　収穫する`,run:()=>{let e=Z.data.farmKind[r],t=[...Z.data.farmStart];t[r]=``;let n=[...Z.data.farmKind];n[r]=0,e===2?(Z.update({farmStart:t,farmKind:n,bagVeg:Math.min(9,Z.data.bagVeg+1)}),$(`かぼちゃを<wbr>収穫しました！<wbr>プレゼントに使えます`)):(Z.update({farmStart:t,farmKind:n,bagFlowers:Math.min(9,Z.data.bagFlowers+2)}),$(`花を収穫しました！<wbr>プレゼントに使えます`)),Uv(),$v()}})}),lv===`museum`){let n=Math.hypot(e.x-24.4,e.z+16);n<2&&t.push({d:n,label:`E / ✦　魚を寄贈する`,run:()=>{let e=Z.data.bagFish.find(e=>!Z.data.museum.includes(e));if(!Z.data.bagFish.length){$(`寄贈できる魚を<wbr>持っていません。<wbr>釣った魚を持ってこよう`);return}if(!e){$(`持っている魚は<wbr>もう全部<wbr>展示されています`);return}Z.update({museum:[...Z.data.museum,e],bagFish:Z.data.bagFish.filter((t,n)=>n!==Z.data.bagFish.indexOf(e))}),Wv(),$v(),$(`「${e}」を<wbr>寄贈しました！<wbr>展示が増えました<wbr>（${Z.data.museum.length} / 11）`)}})}if(lv===`myhome`){let[n,r]=qv(0,2.5),i=Math.hypot(e.x-n,e.z-r);i<1.8&&t.push({d:i,label:`E / ✦　模様替えをする`,run:()=>{X(`#menuBtn`).click()}})}for(let n of x_.talkTargets(e.x,e.z,P_,e=>$(e),e=>{Z.data.talked.includes(e)||(Z.update({talked:[...Z.data.talked,e]}),$v())},e=>av(e)))t.push(n);return t.sort((e,t)=>e.d-t.d)[0]??null}function py(){let[e,t,n]=dy();X(`#questTitle`).textContent=e,X(`#questCopy`).innerHTML=t,X(`#questStep`).textContent=T_<3?`0${T_+1} / 03`:`日替わり`,X(`#progressBar`).style.width=`${n*100}%`,X(`#clock`).textContent=uh(C_.hour),X(`#weatherIcon`).innerHTML=Am({clear:`sun`,cloudy:`cloud`,rain:`rain`,wind:`wind`,snow:`snow`,fog:`fog`,thunder:`thunder`}[C_.kind],20),X(`#weatherSelect`).value=ey?`auto`:C_.kind,S_&&(S_.ribbonGroup.visible=T_>=3&&ev(`そら`)===1&&!tv(`ribbon`));let r=X(`#hint`),i=fy()?.label;i?(r.hidden=!1,r.textContent=i):(r.hidden=!0,r.textContent=``);let a=X(`#timeRange`);L_||(a.value=String(Math.round(C_.hour*60/5)*5%1440)),X(`#timeValue`).textContent=uh(C_.hour);let o=S_.interiorAt(Q.root.position.x,Q.root.position.z,P_);{let e=Q.root.position,t=o?null:e.x<-80?`wv`:e.x>82?`ev`:e.z>125?`sv`:e.z<-58?`forest`:e.x<-52?`westhill`:e.x>58?`rocks`:e.z>92?`pond`:e.z>66?`meadow`:e.z>45?`gate`:e.z>-12?`plaza`:`hill`;X(`#location`).textContent=o?.name??sv[t],o&&o.id!==lv&&(lv=o.id,Z.data.visited.includes(o.name)||(Z.update({visited:[...Z.data.visited,o.name]}),$(`散策ノートに<wbr>記録しました：<wbr>${o.name}（${Z.data.visited.length} / ${S_.interiors.length}）`),$v())),o||(lv=null);let n=X(`#homeArrange`);n&&(n.hidden=lv!==`myhome`),t&&t!==uv&&(uv=t,Z.data.discovered.includes(t)||(Z.update({discovered:[...Z.data.discovered,t]}),$v()))}}function my(){X(`#menuBtn`).addEventListener(`click`,()=>{X(`#settings`).classList.add(`open`),document.body.classList.add(`dressing`),$v()}),X(`#photoBtn`).innerHTML=Am(`cameraLight`,26),X(`#shutterBtn`).innerHTML=Am(`cameraLight`,20)+`<span>撮る</span>`;let e=-1;X(`#lightbox`).addEventListener(`click`,()=>X(`#lightbox`).classList.remove(`open`)),X(`#lightboxDel`).addEventListener(`click`,t=>{t.stopPropagation(),!(e<0)&&(Z.update({album:Z.data.album.filter((t,n)=>n!==e)}),e=-1,X(`#lightbox`).classList.remove(`open`),$v(),$(`写真を消しました`))}),X(`#records`).addEventListener(`click`,t=>{let n=t.target;n.classList.contains(`album-img`)&&(e=Number(n.dataset.idx??-1),X(`#lightboxImg`).src=n.src,X(`#lightbox`).classList.add(`open`))}),X(`#photoBtn`).addEventListener(`click`,()=>document.body.classList.add(`photo`)),X(`#photoExitBtn`).addEventListener(`click`,()=>{document.body.classList.remove(`photo`),fv&&(fv=!1,$(`夕方の展望台を<wbr>撮りました。<wbr>ほしさんに見せよう！`))}),X(`#shutterBtn`).addEventListener(`click`,()=>{if(dv){dv.render();{let e=Q.root.position;T_>=3&&ev(`ほし`)===1&&!tv(`photo`)&&Math.hypot(e.x-im.x,e.z-im.z)<13&&C_.hour>=16&&C_.hour<19&&(nv({photo:1}),fv=!0)}{let e=Math.round(480*y_.height/Math.max(1,y_.width)),t=document.createElement(`canvas`);t.width=480,t.height=e;let n=t.getContext(`2d`);if(n){n.drawImage(y_,0,0,480,e);try{let e=t.toDataURL(`image/jpeg`,.62);Z.update({album:[e,...Z.data.album].slice(0,12)}),$v()}catch{}}}y_.toBlob(e=>{if(!e)return;let t=new Date,n=e=>String(e).padStart(2,`0`),r=document.createElement(`a`);r.href=URL.createObjectURL(e),r.download=`komorebi-${t.getFullYear()}${n(t.getMonth()+1)}${n(t.getDate())}-${n(t.getHours())}${n(t.getMinutes())}${n(t.getSeconds())}.png`,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(r.href),4e3)},`image/png`)}});for(let e of[`closeSettings`,`resumeBtn`])X(`#${e}`).addEventListener(`click`,()=>{X(`#settings`).classList.remove(`open`),document.body.classList.remove(`dressing`)});X(`#weatherSelect`).addEventListener(`change`,e=>{let t=e.target.value;t===`auto`?(ey=!0,ny=!1,ry=0,ty=45,$(`実際の天気に合わせて<wbr>変化します`),sy()):(ey=!1,ny=!1,C_.setWeather(t),$(`${ah[C_.kind]}の<wbr>街を散策します`))}),X(`#timeToggle`).addEventListener(`change`,e=>{C_.autoTime=e.target.checked});let t=X(`#timeRange`);t.addEventListener(`input`,e=>{let t=Number(e.target.value);C_.hour=t/60,X(`#timeValue`).textContent=uh(C_.hour)}),t.addEventListener(`pointerdown`,()=>{L_=!0}),window.addEventListener(`pointerup`,()=>{L_=!1}),t.addEventListener(`change`,()=>{$(`時刻を ${uh(C_.hour)} にしました`)});let n=()=>{let e=Z.data.appearance;X(`#charSelect`).value=e.character,X(`#outfitSelect`).value=e.outfit,X(`#styleSelect`).value=e.hairstyle,X(`#hairSelect`).value=e.hairColor},r=()=>{Q.setLook(Z.data.appearance),Z.update({appearance:Z.data.appearance}),n()},i=(e,t)=>{Z.data.appearance.character!==`original`&&(Z.data.appearance={...Z.data.appearance,character:`original`}),Z.data.appearance[e]=t,r()};X(`#charSelect`).addEventListener(`change`,e=>{let t=e.target.value;Z.data.appearance=t===`original`?{...Z.data.appearance,character:`original`}:Ng({character:t}),r()}),X(`#outfitSelect`).addEventListener(`change`,e=>i(`outfit`,e.target.value)),X(`#styleSelect`).addEventListener(`change`,e=>i(`hairstyle`,e.target.value)),X(`#hairSelect`).addEventListener(`change`,e=>i(`hairColor`,e.target.value)),X(`#menuBtn`).addEventListener(`click`,()=>{Qv(),Ov.length||kv()}),X(`#exportSave`).addEventListener(`click`,()=>{let e=new Blob([JSON.stringify(Z.data)],{type:`application/json`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=`komorebi-save.json`,document.body.appendChild(t),t.click(),t.remove(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3),$(`セーブを<wbr>書き出しました`)});let a=X(`#importFile`);X(`#importSave`).addEventListener(`click`,()=>a.click()),a.addEventListener(`change`,()=>{let e=a.files?.[0];e&&e.text().then(e=>{try{let t=JSON.parse(e);if(!t||typeof t!=`object`||t.version!==2){$(`セーブファイルが<wbr>正しくありません`);return}localStorage.setItem(Sp(Cp()),e),location.reload()}catch{$(`セーブファイルが<wbr>正しくありません`)}})}),X(`#arrRotate`).addEventListener(`click`,()=>{if(Xv){if(!Z.data.homeItems.find(e=>e.id===Xv)){$(`まず家具を<wbr>選んでください`);return}Z.update({homeItems:Z.data.homeItems.map(e=>e.id===Xv?{...e,ry:e.ry+Math.PI/4}:e)}),Zv()}}),X(`#arrRemove`).addEventListener(`click`,()=>{if(Xv){if(!Z.data.homeItems.some(e=>e.id===Xv)){$(`まず家具を<wbr>選んでください`);return}Z.update({homeItems:Z.data.homeItems.filter(e=>e.id!==Xv)}),Zv(),$(`家具をしまいました`)}});let o=()=>{let e=X(`#slotBtns`);if(!e)return;let t=Cp();e.innerHTML=[1,2,3].map(e=>{let n=localStorage.getItem(Sp(e)),r=n?Mp(n):null,i=r?r.started?r.quest>=3?`おつかい ${r.errandDone} 件`:`お話 ${r.quest+1} / 3`:`はじめから`:`空き`;return`<button class="slot-btn ${e===t?`sel`:``}" data-slot="${e}">スロット${e}${e===t?`（使用中）`:`：${i}`}</button>`}).join(``),e.querySelectorAll(`.slot-btn`).forEach(e=>e.addEventListener(`click`,()=>{let t=Number(e.dataset.slot);t!==Cp()&&(localStorage.setItem(xp,String(t)),location.reload())}))};o(),X(`#menuBtn`).addEventListener(`click`,()=>o());let s=X(`#stick`),c=X(`#touchZone`),l=-1,u=e=>{let t=c.getBoundingClientRect(),n=(e.clientX-(t.left+t.width/2))/(t.width*.34),r=(t.top+t.height/2-e.clientY)/(t.height*.34),i=Math.hypot(n,r);i>1&&(n/=i,r/=i),w_.setTouchMove(n,r),s.style.setProperty(`--sx`,`${n*31}px`),s.style.setProperty(`--sy`,`${-r*31}px`)};c.addEventListener(`pointerdown`,e=>{l=e.pointerId,c.setPointerCapture(l),u(e)}),c.addEventListener(`pointermove`,e=>{e.pointerId===l&&u(e)});let d=()=>{l=-1,w_.setTouchMove(0,0),s.style.setProperty(`--sx`,`0px`),s.style.setProperty(`--sy`,`0px`)};c.addEventListener(`pointerup`,d),c.addEventListener(`pointercancel`,d);let f=-1,p=0,m=0;y_.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`&&e.clientX>innerWidth*.42&&(f=e.pointerId,p=e.clientX,m=e.clientY,y_.setPointerCapture(f))}),y_.addEventListener(`pointermove`,e=>{e.pointerId===f&&(w_.addTouchLook(e.clientX-p,e.clientY-m),p=e.clientX,m=e.clientY)});let h=()=>{f=-1};y_.addEventListener(`pointerup`,h),y_.addEventListener(`pointercancel`,h),document.querySelectorAll(`[data-action]`).forEach(e=>{let t=e.dataset.action;if(t===`sprint`){e.addEventListener(`pointerdown`,t=>{t.preventDefault(),R_=!R_,e.classList.toggle(`on`,R_),e.innerHTML=R_?`<span>»</span>歩く`:`<span>»</span>走る`,$(R_?`走るモードになりました`:`歩くモードになりました`)});return}e.addEventListener(`pointerdown`,n=>{n.preventDefault(),w_.setTouchButton(t,!0),e.setPointerCapture(n.pointerId)});for(let n of[`pointerup`,`pointercancel`,`lostpointercapture`])e.addEventListener(n,()=>w_.setTouchButton(t,!1))}),y_.addEventListener(`click`,()=>{matchMedia(`(pointer:fine)`).matches&&w_.lockPointer()}),window.addEventListener(`keydown`,e=>{if(e.code===`Escape`){let e=X(`#settings`).classList.toggle(`open`);document.body.classList.toggle(`dressing`,e)}})}async function hy(){uy(),await Promise.all([document.fonts.load(`700 40px "M PLUS Rounded 1c"`),document.fonts.load(`500 40px "M PLUS Rounded 1c"`),document.fonts.load(`700 40px "Shippori Mincho"`)]);let e=new vp(y_,b_),t=new Ln;dv={render:()=>e.render(t,i)},C_=new gh(t,b_),C_.hour=8.1,C_.snowCover=0,C_.freeze=0,C_.frozen=!1,C_.wet=0,C_.setWeather(`clear`),ey=!0,ty=45,sy(),await Nm(),S_=await xg(new dp,b_,H_,G_?.id??``),t.add(S_.group),Sv=S_.catMesh;{Tv=new On;let e=new Qo(.34,.035,8,20),n=new us({color:`#333333`,roughness:.8}),r=new us({color:`#d84f5a`,roughness:.5}),i=new us({color:`#c9c9c9`,roughness:.4,metalness:.6}),a=(e,t,n,r,i,a,o,s)=>{let c=new H(r-e,i-t,a-n),l=new G(new wa(o,o,c.length(),6),s);return l.position.set((e+r)/2,(t+i)/2,(n+a)/2),l.quaternion.setFromUnitVectors(new H(0,1,0),c.normalize()),l},o=new G(e,n);o.position.set(0,.34,.46);let s=new G(e,n);s.position.set(0,.34,-.46);let c=new G(new Sa(.16,.05,.24),n);c.position.set(0,.9,-.36);let l=new G(new wa(.02,.02,.4,6),i);l.rotation.z=Math.PI/2,l.position.set(0,.97,.32);let u=new G(new Sa(.3,.2,.24),new us({color:`#b88a60`,roughness:.9}));u.position.set(0,.72,.52),Tv.add(o,s,a(0,.34,.46,0,.78,.08,.03,r),a(0,.34,-.46,0,.78,.08,.03,r),a(0,.78,.08,0,.86,-.34,.03,r),a(0,.34,-.46,0,.86,-.34,.03,r),a(0,.78,.08,0,.95,.3,.025,i),c,l,u),t.add(Tv),Ev=Y_(`patisserie`),Ev.x+=1.6,Tv.position.set(Ev.x,q(Ev.x,Ev.z)+.02,Ev.z),Tv.rotation.y=.6}Av=new On;for(let[e,t]of[`#e2574c`,`#e8913a`,`#f2d13c`,`#6fbf5a`,`#4a90c9`,`#7a5fc0`].entries()){let n=new G(new Qo(46-e*1.15,.55,6,40,Math.PI),new ci({color:t,transparent:!0,opacity:0,fog:!1}));Av.add(n)}Av.position.set(0,1,-95),Av.visible=!1,t.add(Av),Pv=new Vr({map:Ym(),color:`#ffffff`,transparent:!0,opacity:0,depthWrite:!1,blending:2}),Pv.fog=!1,Nv=new ti(Pv),Nv.scale.set(9,.55,1),Nv.visible=!1,t.add(Nv);{_v=new On;let e=new G(new Zo(.055,8,6),new us({color:`#e84f5a`,roughness:.5}));e.position.y=.03;let n=new G(new Zo(.05,8,6),new us({color:`#ffffff`,roughness:.5}));n.position.y=-.03,_v.add(e,n),_v.visible=!1,t.add(_v)}for(let e of S_.out.homeItems){if(e.id===`rug`)continue;let t={x:0,z:0,hx:e.hx,hz:e.hz,rot:0,y0:-10,y1:-9,on:()=>e.group.visible};S_.coll.addDyn(t),Yv.set(e.id,t)}if(Vv(),Uv(),Wv(),Zv(),w_=new hp(y_),w_.sensitivity=Z.data.sensitivity,Z.data.errandDay!==J_()){K_=0,Z.update({errandDay:J_(),errandState:0});for(let e of S_.flowers)e.picked=!1}Q=new h_(Z.data.appearance),Q.root.scale.setScalar(.68),Q.setCarrying(T_===0&&E_||T_===2||T_>=3&&K_===1),t.add(Q.root),x_=__(t),Q.root.position.set(0,q(0,-35)+.04,-35),P_=Q.root.position.y;let n=!1,r=S_.interiors.find(e=>e.id===`patisserie`);if(r){let e=Math.cos(r.rot),t=Math.sin(r.rot),i=(n,i)=>({x:r.x+n*e+i*t,z:r.z-n*t+i*e});if(D_=i(2.3,-1),!Z.data.started){let a=i(1.2,.9);Q.root.position.set(a.x,r.floorY+.04,a.z),P_=Q.root.position.y,Q.root.rotation.y=Math.atan2(e,-t),A_=Q.root.rotation.y,Z.update({started:!0}),n=!0}}let i=new dc(55,1,.1,1500),a=S_.coll;cy.set(Q.root.position.x,P_+1.1,Q.root.position.z),i.position.set(cy.x-Math.sin(A_)*7.2,cy.y+2.3+j_*4,cy.z-Math.cos(A_)*7.2),i.lookAt(cy),my();let o=Z.data.appearance;X(`#charSelect`).value=o.character,X(`#outfitSelect`).value=o.outfit,X(`#styleSelect`).value=o.hairstyle,X(`#hairSelect`).value=o.hairColor,py(),n?$(`おはようございます。<wbr>カウンターの<wbr>焼きたてケーキを<wbr>受け取ろう`):G_&&$(`今日は${G_.name}の日！<wbr>街の様子が<wbr>いつもと違います`);let s=new Rc;s.start();let c=0,l=!1,u=()=>{requestAnimationFrame(u);let n=Math.min(s.getDelta(),.05);I_+=n,w_.update(n);let r=w_.takeLook(),o=X(`#settings`).classList.contains(`open`),d=B_;B_=o,o||(A_-=r.x,j_=kt.clamp(j_+r.y,-.95,.62));let f=o||z_||gv?0:Math.hypot(w_.move.x,w_.move.y),p=w_.held(`sprint`)||R_,m=p?7:3.75;if(f>.05){let e=w_.move.y,t=w_.move.x,r=Math.sin(A_)*e-Math.cos(A_)*t,i=Math.cos(A_)*e+Math.sin(A_)*t;if(wv){let e=Q.root.position.x,t=Q.root.position.z,n=Math.hypot(r,i)||1,a=(q(e+r/n*1.4,t+i/n*1.4)-q(e,t))/1.4;m=6.9*kt.clamp(1-a*1.5,.38,1.12)}r*=m*n,i*=m*n;let o=a.resolve(Q.root.position.x+r,Q.root.position.z+i,.34,P_,1.55),s=a.groundAt(o.x,o.z,P_+.45,.72);Number.isFinite(s)&&(Q.root.position.x=o.x,Q.root.position.z=o.z,N_||(P_=s+.04)),Q.root.rotation.y=Math.atan2(r,i)}if(w_.consume(`jump`)&&!N_&&!o&&!z_&&!wv&&!gv&&(N_=!0,M_=5.6),N_){M_-=14*n,P_+=M_*n;let e=a.groundAt(Q.root.position.x,Q.root.position.z,P_+.3,.8);Number.isFinite(e)&&P_<=e+.04&&(P_=e+.04,N_=!1,M_=0)}if(Q.root.position.y=P_,x_.update(n),x_.separate(Q.root.position,P_),Q.update(n,f,p,N_),ey){if(ny)ry-=n,ry<=0&&(ry=900,oy().then(e=>{e||(ry=Math.min(ry,120))}));else if(ty-=n,ty<=0){ty=45+Math.random()*50;let e=[`clear`,`clear`,`cloudy`,`cloudy`,`rain`,`wind`,`snow`,`fog`,`thunder`],t=e[Math.floor(Math.random()*e.length)];t===C_.kind&&(t=t===`clear`?`cloudy`:`clear`),C_.setWeather(t)}}let h=a.frozen;if(C_.update(n,Q.root.position,i,e.viewHeight),a.frozen=C_.frozen,h!==a.frozen&&($(a.frozen?`川と池が凍り、<wbr>氷の上を<wbr>歩けそうです`:`川と池の氷が<wbr>解けはじめました`),!a.frozen&&!Number.isFinite(a.groundAt(Q.root.position.x,Q.root.position.z,P_+.45,.72))))outer:for(let e of[2.5,4.5,6.5])for(let t=0;t<8;t++){let n=t/8*Math.PI*2,r=Q.root.position.x+Math.sin(n)*e,i=Q.root.position.z+Math.cos(n)*e,o=a.groundAt(r,i,P_+.45,1.2);if(Number.isFinite(o)){Q.root.position.x=r,Q.root.position.z=i,P_=o+.04;break outer}}if(Mv&&(Mv===`rain`||Mv===`thunder`)&&(C_.kind===`clear`||C_.kind===`cloudy`)&&C_.hour>=6.5&&C_.hour<=17.5&&(jv=150),Mv=C_.kind,Av){if(jv>0){jv-=n;let e=150-jv,t=.55*Math.min(1,e/8)*Math.min(1,Math.max(0,jv)/12);Av.visible=jv>0;for(let e of Av.children)e.material.opacity=Math.max(0,t)}else Av.visible=!1}if(Nv&&Pv){if(Iv<0)Fv-=n,Fv<=0&&C_.night>.6&&(C_.kind===`clear`||C_.kind===`cloudy`)&&(Lv.set(-60+Math.random()*90,33+Math.random()*10,-75-Math.random()*25),Rv.copy(Lv).add(new H(26+Math.random()*10,-8-Math.random()*3,3)),Iv=0,Nv.visible=!0);else{Iv+=n;let e=Iv/1.3;e>=1?(Iv=-1,Fv=18+Math.random()*30,Nv.visible=!1,Pv.opacity=0):(Nv.position.lerpVectors(Lv,Rv,e),Pv.opacity=Math.sin(e*Math.PI)*.9)}}let g=S_.interiorAt(Q.root.position.x,Q.root.position.z,P_);if(S_.setInside(g),S_.update(n,C_,Q.root.position,i),gv&&C_.frozen&&(gv=null,_v&&(_v.visible=!1),$(`水面が凍って<wbr>しまったので<wbr>釣りはおしまい`)),gv&&(gv.t+=n,Math.hypot(w_.move.x,w_.move.y)>.3?(gv.cancelT+=n,gv.cancelT>.5&&(gv=null,_v&&(_v.visible=!1),$(`釣りをやめました`))):gv.cancelT=0,gv&&gv.phase===`wait`&&gv.t>=gv.biteAt?(gv.phase=`bite`,gv.t=0,_v&&(_v.position.y=gv.spot.waterY-.1)):gv&&gv.phase===`bite`&&gv.t>1.3&&(gv=null,_v&&(_v.visible=!1),$(`あっ、逃げられて<wbr>しまった…`)),gv&&_v&&gv.phase===`wait`&&(_v.position.y=gv.spot.waterY+Math.sin(I_*2.4)*.03)),Sv){let e=Sv.position,t=Q.root.position,r=Z.data.cat>=3&&!g,i=r?t.x:S_.catHome.x,o=r?t.z:S_.catHome.z,s=i-e.x,c=o-e.z,l=Math.hypot(s,c),u=r?1.9:.03;if(l>u+.05){let t=l>7?7.4:4.4,r=Math.min(l-u,t*n);e.x+=s/l*r,e.z+=c/l*r,Sv.rotation.y=Math.atan2(s,c)}let d=a.groundAt(e.x,e.z,e.y+.8,1.6);e.y=(Number.isFinite(d)?d:q(e.x,e.z))+.02,Cv>0&&(Cv-=n,e.y+=Math.abs(Math.sin(Cv*16))*.03)}if(Tv&&(wv&&g&&(wv=!1,Ev={x:Q.root.position.x,z:Q.root.position.z},$(`お店の中では<wbr>自転車を降りよう`)),wv?(Tv.position.set(Q.root.position.x,P_+.02,Q.root.position.z),Tv.rotation.y=Q.root.rotation.y):(Tv.position.set(Ev.x,q(Ev.x,Ev.z)+.02,Ev.z),Tv.rotation.y=.6)),o){let e=Math.sin(Q.root.rotation.y),t=Math.cos(Q.root.rotation.y),r=i.aspect<1,a=r?4.6:3.6;ly.set(Q.root.position.x+e*a,P_+(r?1.05:1.5),Q.root.position.z+t*a),d||i.position.copy(ly),i.position.lerp(ly,1-Math.exp(-n*5)),cy.set(Q.root.position.x,P_+(r?.1:.6),Q.root.position.z),i.lookAt(cy)}else{cy.set(Q.root.position.x,P_+1.1,Q.root.position.z),F_+=((z_?3.6:g?4:p?6.8:7.2)-F_)*(1-Math.exp(-n*5)),ly.set(cy.x-Math.sin(A_)*F_,cy.y+2.3+j_*4.8,cy.z-Math.cos(A_)*F_);let e=a.rayFree(cy.x,cy.y,cy.z,ly.x,ly.y,ly.z);if(e<1){let t=Math.min(.95,(g?1.7:2.6)/F_);ly.lerpVectors(cy,ly,Math.max(t,e-.05))}i.position.lerp(ly,1-Math.exp(-n*6)),i.position.y<P_-.55&&(i.position.y=P_-.55),i.lookAt(cy)}e.render(t,i),l||(l=!0,document.body.classList.add(`loaded`),window.__ready=!0);let _=fy();w_.consume(`interact`)&&_&&_.run(),k_>0&&(k_-=n,k_<=0&&X(`#toast`).classList.remove(`show`)),c+=n,c>.2&&(py(),c=0),w_.endFrame()};Object.assign(window,{__dbg:{camera:i,sky:C_,town:S_,scene:t,renderer:e,mats:Mh(),hero:Q,input:w_,people:()=>x_.positions(),teleport:(e,t,n)=>{Q.root.position.set(e,t,n),P_=t},fishing:()=>gv,riding:()=>wv,catPos:()=>Sv?.position,bikePark:()=>Ev,event:G_?.id??``}}),requestAnimationFrame(u)}hy().catch(e=>{console.error(e),window.__err=String(e?.stack??e)});{let e=e=>e.match(/assets\/index-[A-Za-z0-9_-]+\.js/)?.[0]??null,t=e(document.documentElement.innerHTML),n=0,r=async()=>{let r=Date.now();if(!(r-n<6e4)){n=r;try{let n=await fetch(new URL(`index.html`,location.href),{cache:`no-store`});if(!n.ok)return;let i=e(await n.text());if(!i||!t||i===t){sessionStorage.removeItem(`komorebi-update-target`);return}if(sessionStorage.getItem(`komorebi-update-target`)===i)return;sessionStorage.setItem(`komorebi-update-target`,i),location.replace(location.pathname+`?u=`+r)}catch{}}};setTimeout(r,1500),document.addEventListener(`visibilitychange`,()=>{document.hidden||r()})}