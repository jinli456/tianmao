//类名获取兼容问题
function getClass(className,range){
	if(range.getElementsByClassName){
		/*alert("支持");*/ //通过判断值是函数还是undefinef来判断是否兼容，兼容就直接通过类名获取
		return range.getElementsByClassName(className);
	}else{
	/*	alter("不支持")*/ //不兼容就通过标签名获取，然后进行遍历
	   var all=range.getElementsByTagName('*');
	   var arr=[];
	   for(var i=0;i<all.length;i++){
	   	if(checkClass(all[i].className,className)){
	   		arr.push(all[i]);//如果类名==className就放到数组里
	   	}
	   }return arr;
	}
}
//检测当前元素的类名中是否包含需要查找的类名
function checkClass(cedname,classname){
	var a=cedname.split(" ");//把传入的字符串按空格为分字符转换为数组
	for(var i=0;i<a.length;i++){
		if(a[i]==classname){
			return true;
		}
	}return false;
}


//多种方法获取元素
function $(selector,range){
	var range=range||document;
	if(typeof selector=="string"){
		/*alert("获取");*/
		if(selector.charAt(0)=="#"){
			return range.getElementById(selector.slice(1));
		}
		if(selector.charAt(0)=="."){
			return getClass(selector.slice(1),range);
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
			return range.getElementsByTagName(selector);
		}

	}else if(typeof selector=="function"){
		/*alert("页面加载")*/
		return window.onload=selector;
	}

}

//兼容性的获取样式信息 element指的是元素，attr是属性
function getStyle(element,attr){
      if(window.getComputedStyle){
       return  window.getComputedStyle(element,null)[attr];
      }else{
        return element.currentStyle[attr];
      }
 }


//获取任意一个元素的文档坐标,如果父元素有定位属性的话，
// 就是该元素的offsetTop值+父元素的offsetTop值+父元素本身的边框,
// 需要判断父元素是否有定位属性，和有几个父元素
function getPosition(element){
      var eleleft=element.offsetLeft;
      var eletop=element.offsetTop;
      var parent=element.parentNode;
     //重复的判断
     while(parent.nodeName!="BODY"){
       if(getStyle(parent,"position")=="absolute"
        ||getStyle(parent,"position")=="relative"){
         eleleft+=parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth"));
         eletop+=parent.offsetTop+parseInt(getStyle(parent,"borderTopWidth"));
         }
       parent=parent.parentNode;
     }
     return {x:eleleft,y:eletop};
}
