$(function(){
	//轮播图
	var bannermid=$(".banner_mid")[0];
	var imgBox=$(".imgBox",bannermid)[0];
	var imgs=$("img",imgBox);
	var whellbo=$(".whellbo",bannermid)[0];
	var lis=$("li",whellbo);
	var index=0;//定义一个变量放下标
	imgs[0].style.zIndex=10;
	lis[0].style.background="#fff";
	var t=setInterval(move,2000)
	function move(){
		index++;
		if( index==imgs.length){
			index=0;
		}
		for(var i=0;i<imgs.length;i++){
		imgs[i].style.zIndex=0;
		lis[i].style.background="";
	}//遍历
		imgs[index].style.zIndex=10;
		lis[index].style.background="#fff";

	}
	imgBox.onmouseover=function(){
		clearInterval(t);//直接给最大的框加事件
	}
	imgBox.onmouseout=function(){
		t=setInterval(move,2000)
	}
	for(var j=0;j<lis.length;j++){
		lis[j].index=j;
		lis[j].onmouseover=function(){
			for(var k=0;k<imgs.length;k++){
		imgs[k].style.zIndex=0;
		lis[k].style.background="";
		}
		imgs[this.index].style.zIndex=10;
		lis[this.index].style.backgroundColor="#fff";
		index=this.index;
		}
		
	}
	



	//热门品牌 商标遮罩
	var main3=$('.main_three')[0];
	var mainthmid=$('.main_thmid',main3)[0];
	//获取图片
	var ma3thimgs=$('.m3imgs',mainthmid)
	// console.log(ma3thimgs)
	//获取遮罩
	var m3mask=$('.m3mask',mainthmid)
	for(var i=0;i<ma3thimgs.length;i++){
		ma3thimgs[i].index=i;
		ma3thimgs[i].onmouseover=function(){
			for(var j=0;j<m3mask.length;j++){
				m3mask[j].style.display='none';
			}
			m3mask[this.index].style.display='block';
		}

	}



	//左移
	var content3top=$(".content3_top");
	for(var i=0;i<content3top.length;i++){
		content3top[i].onmouseover=function(){
			var img=$('img',this)[0];
			animate(img,{marginLeft:-20},300)
		}
		content3top[i].onmouseout=function(){
		 		var img=$('img',this)[0];
		 		animate(img,{marginLeft:0},300)
		 }
	}

	var contentbottom=$(".content_bottom");
	for(var i=0;i<contentbottom.length;i++){
		contentbottom[i].onmouseover=function(){
			var img=$('img',this)[0];
			animate(img,{marginLeft:-20},300)
		}
		contentbottom[i].onmouseout=function(){
		 		var img=$('img',this)[0];
		 		animate(img,{marginLeft:0},300)
		 }
	} 

	var rigto1=$(".content3_rigto1");
	for(var i=0;i<rigto1.length;i++){
		rigto1[i].onmouseover=function(){
			var img=$('img',this)[0];
			animate(img,{marginLeft:-20},300)
		}
		rigto1[i].onmouseout=function(){
		 		var img=$('img',this)[0];
		 		animate(img,{marginLeft:0},300)
		 }
	} 
	
	//变大效果
	var boxcontent=$(".box_content")[0]; 
	var contenttop=$('.content_top',boxcontent);
	for(var i=0;i<contenttop.length;i++){
		contenttop[i].onmouseover=function(){
			var img=$('img',this)[0];
			animate(img,{width:160,height:160,bottom:10},300)
		}
		contenttop[i].onmouseout=function(){
		 		var img=$('img',this)[0];
		 		animate(img,{width:140,height:135,bottom:0},300)
		 }
	}
	var contentbottom1=$('.content_bottom',boxcontent);
	for(var i=0;i<contentbottom1.length;i++){
		contentbottom1[i].onmouseover=function(){
			var img=$('img',this)[0];
			animate(img,{width:160,height:160,bottom:10},300)
		}
		contentbottom1[i].onmouseout=function(){
		 		var img=$('img',this)[0];
		 		animate(img,{width:140,height:135,bottom:0},300)
		 }
	}


	//加框
	/*var yfl=$(".yflb-list-liebiao");
	for(var i=0;i<yfl.length;i++){
		console.log(yfl[i]);
		yfl[i].onmouseover=function(){
			for(var j=0;j<yfl.length;j++){
				yfl[j].style.border=0;
			}
			this.style.border="1px solid red";
		}
	}*/
		

	   //最左边导航
         
		var fixleft=$(".fixleft")[0];
		var fixleftbox=$(".fixleftbox",fixleft);
		var asn=$("a",fixleft);
		var arr=[];
		fixleft.style.display="none";
		var flag3=true;
		window.addEventListener("scroll",function(){
		var stop=document.body.scrollTop||document.documentElement.scrollTop;
		document.title=document.body.scrollTop||document.documentElement.scrollTop;
		if(stop>1000){
			if(flag3){
				flag3=false;
				fixleft.style.display="block";
			}
		}else{
			if(!flag3){
				flag3=true;
				fixleft.style.display="none";
			}
		}
	})



	

	 //按需加载
	var yflbtu=$(".yflb-list-box");
//先获取图片盒子
	var ch=document.documentElement.clientHeight;
//获取浏览器高度
	var arr=[];
	var flag=[];
	for(var i=0;i<yflbtu.length;i++){
		arr.push(yflbtu[i].offsetTop);
		console.log(arr)
		flag.push(true);
	}
//获取每个盒子的位置数值放到新数组中
		window.addEventListener("scroll",function(){
		var stop=document.body.scrollTop||document.documentElement.scrollTop;//获取滚轮位置
		for(var i=0;i<arr.length;i++){//遍历数组里每一个值
			if(arr[i]<=stop+ch&&flag[i]){//判断盒子高度和滚轮高度的值
				flag[i]=false;
				var imgs=$("img",yflbtu[i]);//获取图片
				for(var j=0;j<imgs.length;j++){
					imgs[j].src=imgs[j].getAttribute("data-src");//把每张图片的地址即自定义属性给图片src属性

				}
			}
		}
	})

	//最上边的搜索框
      var searchbox=$(".search-toppest-box")[0];
      var flag2=true;
      /*window.onscroll=function(){*/
      	window.addEventListener("scroll",function(){
         var stop=document.documentElement.scrollTop||document.body.scrollTop;
          if(stop>=1200){
          	if(flag2){
          		flag2=false;
          		animate(searchbox,{top:0},2000)
          	}
            
          }else{
          	if(!flag2){
          		flag2=true;
          		 animate(searchbox,{top:-50},2000)
          	}
           
          }
     })

       //右边标签栏效果
        var rimgs=$(".right-img")[0];
         var jdright=$("div",rimgs);
         var fonts=$(".right-font")[0];
         var rightf=$("div",fonts);
         for (var i = 0; i < jdright.length; i++) {
           jdright[i].index=i;
           hover(jdright[i],function(){
             animate(rightf[this.index],{left: 35},500)
            rightf[this.index].style.display="block";
            this.style.background="#DE3131";
         },function(){
             rightf[this.index].style.display="none";
            this.style.background="#000";
         });
         };

       /*下拉效果*/
      var first=$(".first");
      var second=$(".second");
      var nav=$(".top-box-right")[0];
      for (var i = 0; i < first.length; i++) {
        first[i].index=i;
        hover(first[i],function(){
        	second[this.index].style.display="block";
          this.style.color="#c50000";
          first[this.index].style.backgroundColor="fff";
        },function(){
        	second[this.index].style.display="none";
          this.style.background="";
        })
      };
      


          //顶部banner二级导航选项卡
    var bannerbtns=$(".banner-list");
    var bannercons=$(".bannerboxcons");
    for (var i = 0; i < bannerbtns.length; i++) {
      bannerbtns[i].index=i;
      hover(bannerbtns[i],function(){
      this.style.background="#fff";
      this.style.color="#e54077";
      bannercons[this.index].style.display="block";
      
      },function(){
       this.style.background="";
       this.style.color="#000";
       bannercons[this.index].style.display="none";
      });
    };

    for (var i = 0; i < bannercons.length; i++) {
      bannercons[i].index=i;
      hover(bannercons[i],function(){
       bannercons[this.index].style.display="block";
      },function(){
      bannercons[this.index].style.display="none";
      });
    };



    /*左边导航*/
    var fixleft=$(".fixleft")[0];
    var flbws=$(".flwenzi1",fixleft);
    var boxtit3=$(".box_title3");
    var tu2btm=$(".tu2_bottom");
    var arr1=[];
    for(var i=0;i<tu2btm.length;i++){
    	arr1.push(tu2btm[i].offsetTop)
    }
    window.addEventListener("scroll",function(){
    	var stop=document.body.scrollTop||document.documentElement.scrollTop;
    	for(var i=0;i<arr1.length;i++){
    		if(arr1[i]<stop+300){
    			for(var j=1;j<flbws.length-1;j++){
    				flbws[j].style.backgroundColor="";
    			}
    			flbws[i+1].style.backgroundColor="#dd2727";
    		}
    	}
    	for(var i=1;i<flbws.length-1;i++){
    		flbws[i].index=i;
    		flbws[i].onclick=function(){
    			animate(document.body,{
    				scrollTop:arr1[this.index-1]
    			},500)
    			animate(document.documentElement,{
    				scrollTop:arr1[this.index-1]
    			},500)
    		}
    	}

    })




})


	