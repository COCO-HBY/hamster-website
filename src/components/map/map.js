// import BMap from 'BMap'
// //创建和初始化地图函数：
export function initMap(div) {
  createMap(div); //创建地图
  setMapEvent(); //设置地图事件
  addMapControl(); //向地图添加控件
  addMarker(); //向地图中添加marker
}

//创建地图函数：
function createMap(div) {
  var map = new window.BMap.Map(div); //在百度地图容器中创建一个地图
  var point = new window.BMap.Point(113.396419, 23.137094); //定义一个中心点坐标
  map.centerAndZoom(point, 18); //设定地图的中心点和坐标并将地图显示在地图容器中
  window.map = map; //将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent() {
  map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
  map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
  map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
  map.enableKeyboard(); //启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl() {
  //向地图中添加缩放控件
  var ctrl_nav = new window.BMap.NavigationControl({
    anchor: BMAP_ANCHOR_TOP_RIGHT,
    type: BMAP_NAVIGATION_CONTROL_LARGE,
  });
  map.addControl(ctrl_nav);
  //向地图中添加比例尺控件
  var ctrl_sca = new window.BMap.ScaleControl({
    anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
  });
  map.addControl(ctrl_sca);
}

//标注点数组
var markerArr = [
  {
    title: "HamsterLand",
    content: "我的备注",
    point: "113.397076|23.136749",
    isOpen: 0,
    icon: { w: 23, h: 25, l: 46, t: 21, x: 9, lb: 12 },
  },
];
//创建marker
function addMarker() {
  for (var i = 0; i < markerArr.length; i++) {
    var json = markerArr[i];
    var p0 = json.point.split("|")[0];
    var p1 = json.point.split("|")[1];
    var point = new window.BMap.Point(p0, p1);
    var iconImg = createIcon(json.icon);
    var marker = new window.BMap.Marker(point, { icon: iconImg });
    var iw = createInfoWindow(i);
    var label = new window.BMap.Label(json.title, {
      offset: new window.BMap.Size(json.icon.lb - json.icon.x + 20, -20),
    });
    marker.setLabel(label);
    map.addOverlay(marker);
    label.setStyle({
      borderColor: "#808080",
      color: "#333",
      cursor: "pointer",
    });

    (function() {
      var index = i;
      var _iw = createInfoWindow(i);
      var _marker = marker;
      _marker.addEventListener("click", function() {
        this.openInfoWindow(_iw);
      });
      _iw.addEventListener("open", function() {
        _marker.getLabel().hide();
      });
      _iw.addEventListener("close", function() {
        _marker.getLabel().show();
      });
      label.addEventListener("click", function() {
        _marker.openInfoWindow(_iw);
      });
      if (!!json.isOpen) {
        label.hide();
        _marker.openInfoWindow(_iw);
      }
    })();
  }
}
//创建InfoWindow
function createInfoWindow(i) {
  var json = markerArr[i];
  var iw = new window.BMap.InfoWindow(
    "<b class='iw_poi_title' title='" +
      json.title +
      "'>" +
      json.title +
      "</b><div class='iw_poi_content'>" +
      json.content +
      "</div>"
  );
  return iw;
}
//创建一个Icon
function createIcon(json) {
  var icon = new window.BMap.Icon(
    "http://api.map.baidu.com/img/markers.png",
    new window.BMap.Size(23, 25),
    {
      offset: new window.BMap.Size(10, 25), // 指定定位位置
      imageOffset: new window.BMap.Size(0, 0 - 10 * 25), // 设置图片偏移
    }
  );
  return icon;
}

// export var Bm = {
//     init: function (){
//       console.log("初始化百度地图脚本...");
//       const AK = "izw1mbfvbCpfBP9tNpdLQNTwpxRrFZOt";
//       const BMap_URL = "https://api.map.baidu.com/api?v=2.0&ak="+ AK +"&s=1&callback=onBMapCallback";
//       return new Promise((resolve) => {
//         // 如果已加载直接返回
//         if(typeof BMap !== "undefined") {
//           // resolve(BMap);
//           resolve();
//           return true;
//         }
//         // 百度地图异步加载回调处理
//         window.onBMapCallback = function () {
//           console.log("百度地图脚本初始化成功...");
//           // resolve(BMap);
//           resolve();
//         };

//         // 插入script脚本
//         let scriptNode = document.createElement("script");
//         scriptNode.setAttribute("type", "text/javascript");
//         scriptNode.setAttribute("src", BMap_URL);
//         document.body.appendChild(scriptNode);
//         // initMap();
//       });
//     }
//   }
