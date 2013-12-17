/*! kcharts - v1.2 - 2013-12-09 11:22:43 AM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/gallery/trianglechart/theme",function(){var t={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}}};return t}),KISSY.add("gallery/kcharts/1.2/gallery/trianglechart/index",function(t,e,l,r,i,n,s,a,o){var c,h=t.all,x=(t.Event,"ks-chart-"),y=x+"default",u="{COLOR}",f=function(t){this.init(t)};return t.extend(f,l,{init:function(e){var i,s,a=this;if(a.chartType="trianglechart",l.prototype.init.call(a,e),a._$ctnNode[0]){var h={themeCls:y,autoRender:!0,colors:[],title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{color:"#eee",zIndex:10},min:0},yAxis:{isShow:!0,css:{zIndex:10},num:5,min:0},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!0,css:{}},triangles:{isShow:!0,css:{background:u,border:"1px solid #fff"}},legend:{isShow:!1},tip:{isShow:!0,template:"",css:{},anim:{easing:"easeOut",duration:.3},offset:{x:0,y:0},boundryDetect:!0,alignX:"right",alignY:"bottom"}};a._triangles={},a._finished=[],y=a._cfg.themeCls||h.themeCls,a._cfg=t.mix(t.mix(h,r[y],o,o,!0),a._cfg,o,o,!0),a.color=c=new n({themeCls:y}),s=a._points[0],i=Math.round(s&&s[0]&&s[1]&&s[1].x-s[0].x||a.getInnerContainer().width),i&&a.set("area-width",i),a._cfg.colors.length>0&&c.removeAllColors();for(var x in a._cfg.colors)c.setColor(a._cfg.colors[x]);a._cfg.autoRender&&a.render(!0)}},drawTitle:function(){var e=this,l=e.htmlPaper,r=y+"-title",i=e._cfg,n=e._innerContainer,s=.6*n.y;!e._title&&i.title.isShow&&""!=i.title.content&&(e._title=l.rect(0,0,e._$ctnNode.width(),s).addClass(r).css(t.mix({"line-height":s+"px"},i.title.css))),e._title&&""!=i.title.content&&e._title.html(i.title.content)},drawSubTitle:function(){var e=this,l=e.htmlPaper,r=y+"-subtitle",i=e._cfg,n=e._innerContainer,s=.4*n.y;!e._subTitle&&i.subTitle.isShow&&""!=i.subTitle.content&&(e._subTitle=l.rect(0,.6*n.y,e._$ctnNode.width(),s).addClass(r).css(t.mix({"line-height":s+"px"},i.subTitle.css))),e._subTitle&&""!=i.subTitle.content&&e._subTitle.html(i.subTitle.content)},getTrianglePos:function(){var t,e=this,l=e._cfg.triangles.ratio||1,r=e.get("area-width")*l,i=e._innerContainer;e._trianglePos={};for(var n in e._points[0])t=e._points[0][n],e._trianglePos[n]=[t.x,t.y,t.x-r/2,i.bl.y,t.x/1+r/2,i.bl.y]},drawTriangles:function(){var t,e=this,l=(e._cfg,e.paper);e._innerContainer;for(var r in e._trianglePos)t=e._trianglePos[r],l.path(["M",t[0]+",",t[1],"L",t[2]+",",t[3]+",",t[4]+",",t[5]+"Z"].join("")).attr({fill:e.color.getColor(r).DEFAULT})},drawAxisX:function(){var t=this,e=t._innerContainer,l=e.bl,r=e.width,i=t.htmlPaper,n=t._cfg.themeCls+"-axisx";return t._axisX=i.lineX(l.x,l.y,r).addClass(n).css(t._cfg.xAxis.css||{}),t._axisX},drawAxisY:function(){var t=this,e=t._innerContainer,l=e.tl,r=e.height,i=t.htmlPaper,n=t._cfg.themeCls+"-axisy";return t._axisY=i.lineY(l.x,l.y,r).addClass(n).css(t._cfg.yAxis.css||{}),t._axisY},drawLabelsX:function(){var t=this,e=t._cfg,l="y"==e.zoomType?!0:!1;if(l)for(var r in t._pointsX)t._labelX[r]={0:t.drawLabelX(r,t._pointsX[r].number)};else for(var r in t._cfg.xAxis.text)t._labelX[r]={0:t.drawLabelX(r,t._cfg.xAxis.text[r])}},drawLabelsY:function(){var t=this,e=t._cfg,l="x"==e.zoomType?!1:!0;if(l)for(var r in t._cfg.yAxis.text)t._labelY[r]={0:t.drawLabelY(r,t._cfg.yAxis.text[r])};else for(var r in t._pointsY)t._labelY[r]={0:t.drawLabelY(r,t._pointsY[r].number),num:t._pointsY[r].number}},drawLabelX:function(l,r){var i,n=this,s=n.htmlPaper,a=n._pointsX,c=n._innerContainer,h=a.length||0,x=n._cfg.themeCls+"-xlabels",y="{{data}}",u="";return h>l?(y=n._cfg.xLabels.template||y,u=t.isFunction(y)?y(l,r):e(y).render({data:r}),i=a[l],i[0]=s.text(i.x,c.bl.y,"<span class="+x+">"+u+"</span>","center").children().css(n._cfg.xLabels.css),i[0]):o},drawLabelY:function(l,r){var i=this,n=i.htmlPaper,s=i._innerContainer,a=i._cfg.themeCls+"-ylabels",o="{{data}}",c="";return o=i._cfg.yLabels.template||o,c=t.isFunction(o)?o(l,r):e(o).render({data:r}),c&&n.text(s.tl.x,i._pointsY[l].y,"<span class="+a+">"+c+"</span>","right","middle").children().css(i._cfg.yLabels.css)},renderLegend:function(){var e=this,l=e._cfg.legend,r=l.container&&h(l.container)[0]?h(l.container):e._$ctnNode,i=e._innerContainer,n=e.color._colors,s=n.length,o=e._cfg,c=e._cfg.series,x=t.map(c,function(t,e){e%=s;var l={},r=n[e];return l.text=t.text,l.DEFAULT=r.DEFAULT,l.HOVER=r.HOVER,l}),y=t.merge({interval:20,iconright:5,showicon:!0},o.legend.globalConfig);return e.legend=new a({container:r,bbox:{width:i.width,height:i.height,left:i.x,top:i.y},align:o.legend.align||"bc",offset:o.legend.offset||(/t/g.test(o.legend.align)?[0,0]:[0,20]),globalConfig:y,config:x}),e.legend.on("click",function(t){var e=t.index,l=(t.text,t.icon,t.el);1!=l.hide?(this.hideBar(e),l.hide=1,l.disable()):(this.showBar(e),l.hide=0,l.enable())},this),e.legend},render:function(e){var l=this,r=l._cfg;l._innerContainer,r.themeCls,e&&l._$ctnNode.html(""),l.paper=i(l._$ctnNode[0],r.width,r.height),l._clonePoints=l._points,l.getTrianglePos(),l.htmlPaper=new s(l._$ctnNode),l.drawTitle(),l.drawSubTitle(),r.xAxis.isShow&&l.drawAxisX(),r.yAxis.isShow&&l.drawAxisY(),r.xLabels.isShow&&l.drawLabelsX(),r.yLabels.isShow&&l.drawLabelsY(),l.getTrianglePos(),l.drawTriangles(function(){t.log("finished"),l.afterRender()}),l.bindEvt(),t.log(l)},renderLegend:function(){var e=this,l=e._cfg.legend,r=l.container&&h(l.container)[0]?h(l.container):e._$ctnNode,i=e._stocks,n=e._innerContainer,s=e.color._colors,o=s.length,c=e._cfg,x=e._cfg.series,y=t.map(x,function(t,e){e%=o;var l={},r=s[e];l.text=t.text,l.DEFAULT=r.DEFAULT,l.HOVER=r.HOVER;var n=i[e].type;return l.icontype="line"+n,l.iconsize=[1,1],l}),u=t.merge({interval:20,iconright:5,showicon:!0},c.legend.globalConfig);return e.legend=new a({container:r,paper:e.paper,bbox:{width:n.width,height:n.height,left:n.x,top:n.y},align:c.legend.align||"bc",offset:c.legend.offset||[0,30],globalConfig:u,config:y}),e.legend.on("click",function(t){var e=t.index,l=(t.text,t.icon,t.el);1!=l.hide?(this.hideLine(e),l.hide=1,l.disable()):(this.showLine(e),l.hide=0,l.enable())},this),e.legend},bindEvt:function(){var t=this;t._cfg},paperLeave:function(){var t=this;t.fire("paperLeave",t)},barChange:function(e,l){var r=this,i=r._bars[e],n=t.mix({target:i.bars[l],currentTarget:i.bars[l],barGroup:Math.round(e),barIndex:Math.round(l)},r._points[e][l]);r.fire("barChange",n)},animateGridsAndLabels:function(){var t=this;for(var e in t._labelY)t._labelY[e]&&t._labelY[e][0]&&t._labelY[e][0].remove(),t._gridsY[e]&&t._gridsY[e][0]&&t._gridsY[e][0].remove();t.drawGridsY(),t.drawLabelsY()},processAttr:function(e,l){var r=t.clone(e);for(var i in r)r[i]&&"string"==typeof r[i]&&(r[i]=r[i].replace(u,l));return r},afterRender:function(){var t=this;t.fire("afterRender",t)},getRaphaelPaper:function(){return this.paper},getHtmlPaper:function(){return this.htmlPaper},clear:function(){return this.paper.clear()}}),f},{requires:["gallery/template/1.0/index","gallery/kcharts/1.2/basechart/index","./theme","gallery/kcharts/1.2/raphael/index","gallery/kcharts/1.2/tools/color/index","gallery/kcharts/1.2/tools/htmlpaper/index","gallery/kcharts/1.2/legend/index","gallery/kcharts/1.2/tools/touch/index","gallery/kcharts/1.2/tip/index"]});