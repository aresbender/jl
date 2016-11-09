var selfIns={
		barNode:$('.bar'),
		mountainNode:$('.mountain'),
		cloudNode:$('.cloud'),
		floorNode:$('.floor'),
		treeOneNode:$('.tree-one'),
		treeTwoNode:$('.tree-two'),
		birdsNode:$('.birds'),
		titleNode:$('.title'),
		doorNode:$('.door'),
		signNode:$('.sign'),
		signsNode:$('.signs'),
		chengNode:$('.cheng'),
		stoneNode:$('.stone'),
		fengNode:$('.feng'),
		ingNode:$('.ing'),
		floorFun:function(num){//num表示我的动画长度，单位是px；
			var _this=this;
			var lilength=num/100;
			var winW=$(window).width();
			var winH=$(window).height();
			var html='';
			for(var i=0;i<lilength;i++){
				html+='<li>';
				html+='<span></span><span></span>';
				html+='<span></span><span></span>';
				html+='<div class="arrow">';
				html+='<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>';
				html+='</div></li>';
			}
			_this.floorNode.css('width',num+"px");
			_this.floorNode.children('ul').html(html);
			_this.barNode.css("height",(num-winW+winH)+"px");
		},
		titleFun:function(leftPos,topPos,divName){
			var _this=this;
			var html='<div class="stage" style="left:'+leftPos+'px;top:'+topPos+'px";>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div>';
			html+='<div class="'+divName+'"></div></div>';
			_this.titleNode.append(html);
		},
		doorFun:function(leftPos,text){
			var _this=this;
			var html='<div class="door-main" style="left:'+leftPos+'px;">';
				html+='<i class="door-top">'+text+'</i>';
				html+='<i class="door-left-one"></i>';
				html+='<i class="door-left-two"></i>';
				html+='<i class="door-right-one"></i>';
				html+='<i class="door-right-two"></i></div>';
			_this.doorNode.append(html);
		},
		signFun:function(leftPos,topPos,text){
			var _this=this;
			var html='<div class="sign-main" style="left:'+leftPos+'px;top:'+topPos+'px;">';
				html+='<i class="sign-one"><span>'+text+'</span></i></div>';
			_this.signNode.append(html);
		},
		signsFun:function(Wid,leftPos,topPos,text){
			var _this=this;
			var html='<div class="signs-main" style="left:'+leftPos+'px;top:'+topPos+'px;">';
				html+='<i style="width:'+Wid+'px;"></i>';
				html+='<span style="width:'+Wid+'px;">'+text+'</span></div>';
			_this.signsNode.append(html);
		},
		chengFun:function(leftPos,topPos,text,divName){
			var _this=this;
			var html='<div class="'+divName+'" style="left:'+leftPos+'px;top:'+topPos+'px;">'+text+'</div>';
			_this.chengNode.append(html);
		},
		stoneFun:function(leftPos){
			var _this=this;
			var html='<div class="stone-main" style="left:'+leftPos+'px;"><i></i></div>';
			_this.stoneNode.append(html);
		},
		fengFun:function(leftPos,topPos,Hei){
			var _this=this;
			var html='<div class="feng-main" style="left:'+leftPos+'px;top:'+topPos+'px;height:'+Hei+'px">';
				html+='<span class="windmill2" style="height:'+Hei+'px;">';
//				html+='<span class="pillar" style="height:'+Hei+'px;"></span>';
				html+='<span class="axis">';
				html+='<span class="swing"></span>';
				html+='<span class="swing2"></span>';
				html+='<span class="swing3"></span></span></span></div>';
			_this.fengNode.append(html);
		},
		mountainFun:function(leftPos){
			var _this=this;
			var html='<div class="mountain-box" style="left:'+leftPos+'px;">';
				html+='<div class="mountain-left"></div>';
				html+='<div class="mountain-right"></div></div>';
			_this.mountainNode.append(html);
		},
		cloudFun:function(leftPos,topPos){
			var _this=this;
			var html='<div class="cloud-main" style="left:'+leftPos+'px;top:'+topPos+'px">';
			html+='<i class="cloud-left"></i>';
			html+='<i class="cloud-right"></i>';
			html+='<i class="cloud-left-top"></i>';
			html+='<i class="cloud-right-top"></i>';
			html+='</div>';
			_this.cloudNode.append(html);
		},
		treeOneFun:function(leftPos){
			var _this=this;
			var html='<div class="tree-one-main" style="left:'+leftPos+'px;">';
			html+='<i class="one-body"></i>';
			html+='<i class="one-one"></i>';
			html+='<i class="one-two"></i>';
			html+='<i class="one-three"></i>';
			html+='</div>';
			_this.treeOneNode.append(html);
		},
		treeTwoFun:function(leftPos){
			var _this=this;
			var html='<div class="tree-two-main" style="left:'+leftPos+'px;">';
			html+='<i class="two-body"></i>';
			html+='<i class="two-one"></i>';
			html+='<i class="two-two"></i>';
			html+='<i class="two-three"></i>';
			html+='<i class="two-four"></i>';
			html+='</div>';
			_this.treeTwoNode.append(html);
		},
		birdsFun:function(Wid,Hei,leftPos,topPos){
			var _this=this;
			var html='<div class="birds-main" style="width:'+Wid+'px;height:'+Hei+'px;left:'+leftPos+'px;top:'+topPos+'px;">';
			html+='<img src="data:image/png;base64,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" alt="鸟" />';
			html+='</div>';
			_this.birdsNode.append(html);
		},
		ingFun:function(leftPos,topPos,text){
			var _this=this;
			var html='<div class="ing-main" style="left:'+leftPos+'px;top:'+topPos+'px">'+text+'</div>';
			_this.ingNode.append(html);
		},
		init:function(){
			var _this=this;
			//牌子
			_this.titleFun(1125,180,"layer");
			_this.titleFun(3500,80,"layer-one");
			_this.titleFun(7000,80,"layer-two");
			//云层
			_this.cloudFun(600,120);
			_this.cloudFun(50,80);
			_this.cloudFun(2500,180);
			_this.cloudFun(3500,80);
			_this.cloudFun(4800,150);
            //门
            _this.doorFun(2200,"前 端 代 码");
            _this.doorFun(6200,"前 端 框 架");
      		//小标签1
      		_this.signFun(3300,250,"HTML+CSS");
      		_this.signFun(3500,250,"HTML5+CSS3");
      		_this.signFun(3750,250,"JavaScript");
      		_this.signFun(3950,250,"NODEJS");
      		_this.signFun(6800,250,"jQuery");
      		_this.signFun(7000,250,"Bootstrap");
      		_this.signFun(7250,250,"Less");
      		_this.signFun(7450,250,"Augular");
      		//小标签2
      		_this.signsFun(770,3300,300,"大牛级别");
      		_this.signsFun(770,3300,400,"熟练运用");
      		_this.signsFun(770,3300,500,"基本能用");
      		_this.signsFun(770,3300,600,"大致会用");
      		_this.signsFun(770,3300,700,"就差一点");
      		_this.signsFun(770,6800,300,"完美运用");
      		_this.signsFun(770,6800,400,"运用自如");
      		_this.signsFun(770,6800,500,"基本会用");
      		_this.signsFun(770,6800,600,"学过一点");
      		_this.signsFun(770,6800,700,"完全不会");
			//程度
			_this.chengFun(3350,420,"熟练运用html+css","cheng-main");
			_this.chengFun(3550,520,"基本能用html5+css3","cheng1-main");
			_this.chengFun(3800,420,"熟练运用JavaScript","cheng2-main");
			_this.chengFun(4000,520,"基本能用NODEJS","cheng3-main");
			_this.chengFun(4800,320,"本人爱好噼里啪啦本人爱好噼里啪啦本人爱好噼里啪啦本人爱好噼里啪啦","cheng4-main");
			//风车
			_this.fengFun(6800,445,100);
			_this.fengFun(6800,545,100);
			_this.fengFun(6800,645,100);
			_this.fengFun(7000,645,100);
			_this.fengFun(7250,545,100);
			_this.fengFun(7250,645,100);
			_this.fengFun(7450,700,100);
			//砖头
			_this.stoneFun(4800);
			//山
			_this.mountainFun(900);
			//创建地板
			_this.floorFun(20000);
			//鸟
			_this.birdsFun(70,50,500,100);
			_this.birdsFun(50,30,400,80);
			_this.birdsFun(70,50,200,50);
			_this.birdsFun(50,30,1700,220);
			_this.birdsFun(70,50,1800,180);
			_this.birdsFun(70,50,2500,180);
			_this.birdsFun(50,30,2600,180);
			//树
			_this.treeOneFun(200);
			_this.treeTwoFun(300);
			_this.treeOneFun(400);
			_this.treeOneFun(500);
			_this.treeOneFun(500);
			_this.treeTwoFun(550);
			_this.treeTwoFun(1550);
			_this.treeTwoFun(1600);
			_this.treeOneFun(2500);
			_this.treeTwoFun(2580);
			_this.treeOneFun(2750);
			_this.treeOneFun(2890);
			_this.treeOneFun(4100);
			_this.treeOneFun(4200);
			_this.treeOneFun(4300);
			_this.treeOneFun(4400);
			_this.treeTwoFun(5500);
			_this.treeTwoFun(5700);
			_this.treeTwoFun(5900);
			//敬请期待呢
			_this.ingFun(8500,300,"敬请期待•••");
			$(window).scroll(function(){
				var scrollLeft=$('html').scrollTop()+$('body').scrollTop();
				_this.floorNode.css('left',-scrollLeft+"px");
				_this.doorNode.css('left',-scrollLeft+"px");
				_this.signNode.css('left',-scrollLeft+"px");
				_this.signsNode.css('left',-scrollLeft+"px");
				_this.chengNode.css('left',-scrollLeft+"px");
				_this.fengNode.css('left',-scrollLeft+"px");
				_this.stoneNode.css('left',-scrollLeft+"px");
				_this.treeOneNode.css('left',-scrollLeft+"px");
				_this.treeTwoNode.css('left',-scrollLeft+"px");
				_this.ingNode.css('left',-scrollLeft+"px");
				_this.birdsNode.css('left',-scrollLeft/3+"px");
				_this.mountainNode.css('left',-scrollLeft+"px");
				_this.titleNode.css('left',-scrollLeft+"px");
				_this.cloudNode.css('left',-scrollLeft/20+"px");
			});
			
		}
};selfIns.init();
$(window).resize(function(){
		selfIns.init();
	});
var zhuan = {
  init: function(el, str) {
    var element = document.querySelector(el);
    var text = str ? str : element.innerHTML;
    element.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var letter = text[i];
      var span = document.createElement('span');
      var node = document.createTextNode(letter);
      var r = (360/text.length)*(i);
      var x = (Math.PI/text.length).toFixed(0) * (i);
      var y = (Math.PI/text.length).toFixed(0) * (i);
      span.appendChild(node);
      span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      element.appendChild(span);
    }
  }
};zhuan.init('.cheng-main');
$(window).load(function(){
		zhuan.init('.cheng1-main');
		zhuan.init('.cheng2-main');
		zhuan.init('.cheng3-main');
		zhuan.init('.cheng4-main');
});
