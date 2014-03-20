function $(i){return document.getElementById(i)};
function $Tag(e,p){return p.getElementsByTagName(e)};

var MY={};
MY.slider=function(){
	var F=function(n,g,j,p){var E=this;E.n=n;E.init(g,j,p)},LI=function(x){return $Tag('li',x)},si=setInterval,ci=clearInterval,O=F.prototype;
	O.init=function(g,j,p){var s=$(j),u=$Tag('ul',s)[0],c=LI(u),Z=c.length;if(Z>1){var E=this,S=u.style,k='px',I=$(g),i=E.l=E.c=0;E.m=c;E.u=u;E.x=s;E.b=1;E.a=p.auto||0;E.p=p.resume||0;E.r=p.rewind||0;E.e=p.elastic||false;E.v=p.vertical||0;for(var i,l=Z;i<l;i++){if(c[i].parentNode==u){E.l++};I.appendChild(document.createElement("li")).onclick=new Function(E.n+'.pos('+i+')')};E.g=LI(I);var L=E.l,C=c[0],P=p.startpos;if(E.v){S.top=0;E.h=C.offsetHeight;S.height=(L*E.h)+k}else{S.left=0;E.w=p.width||C.offsetWidth;S.width=(L*E.w)+k};E.nav(P||0);if(P){E.pos(P||0,E.a?1:0,1)}else if(E.a){E.auto()};E.sel('slideleft',-1);E.sel('slideright',1)}},
	O.auto=function(){var E=this;E.x.ai=si(new Function(E.n+'.move(1,1,1)'),E.a*1000)},
	O.move=function(d,a){var E=this,n=E.c+d,L=E.l;if(E.r){n=d==1?n==L?0:n:n<0?L-1:n};E.pos(n,a,1)},
	O.pos=function(p,a,m){var v=p,E=this,W=E.w,H=E.h,X=E.x,U=E.u,S=U.style,V=E.v;ci(X.ai);ci(X.si);if(!E.r){var k='px',L=E.l,P=(p==-1),Q=(Math.abs(p)%L==0);if(m){if(P||(p!=0&&Q)){E.b++;var B=E.b;for(var i=0,l=L;i<l;i++){U.appendChild(E.m[i].cloneNode(1))};V?S.height=(L*H*B)+k:S.width=(L*W*B)+k};if(P||(p<0&&Q)){V?S.top=(L*H*-1)+k:S.left=(L*W*-1)+k;v=L-1}}else if(E.c>L&&E.b>1){v=(L*(E.b-1))+p;p=v}};var t=v*(V?H:W)*-1,d=p<E.c?-1:1;E.c=v;var n=v%L;E.nav(n);if(E.e){t=t-(8*d)};X.si=si(new Function(E.n+'.slide('+t+','+d+',1,'+a+')'),10)},
	O.nav=function(n){var E=this,G=E.g;if(G){for(var i=0,l=E.l;i<l;i++){G[i].className=i==n?'current':''}}},
	O.slide=function(t,d,i,a){var E=this,U=E.u,S=U.style,V=E.v,o=V?parseInt(S.top):parseInt(S.left);if(o==t){var X=E.x,n=(-1*d);ci(X.si);if(E.e&&i<3){X.si=si(new Function(E.n+'.slide('+(i==1?t+(12*d):t+(4*d))+','+(i==1?n:n)+','+(i==1?2:3)+','+a+')'),10)}else{if(a||(E.a&&E.p)){E.auto()};if(E.b>1&&E.c%E.l==0){E.clear()}};}else{var M=Math,v=o-M.ceil(M.abs(t-o)*.1)*d+'px',s=U.style;V?s.top=v:s.left=v}},
	O.clear=function(){var E=this,U=E.u,c=LI(U),t=i=c.length,S=U.style;E.v?S.top=0:S.left=0;E.b=1;E.c=0;for(var i;i>0;i--){var e=c[i-1];if(t>E.l&&e.parentNode==U){U.removeChild(e);t--}}},
	O.sel=function(i,j){var e=$(i);e.onselectstart=e.onmousedown=function(){return false};e.onclick=function(){slideshow.move(j)}};
	return F;
}();



/*
var slideshow=new MY.slider('slideshow','paginator','slides',{
	startpos:0,vertical:0,elastic:1,auto:2,//false for no automation else the number of seconds between slides
	resume:false,//continue auto sliding after interruption
	rewind:false,// toggle "rewinding", else the slides will be continuous
});
*/
