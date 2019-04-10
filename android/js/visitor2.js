$(function () {
	var productId = window.location.search.substring(1,window.location.index("&"));
	var memberId = window.location.substring(window.location.index("&")+1);
	
    $.ajax({
        url: "http://h5.izhenpinwang.com:8096/commodity/getInfo.do?id=" + productId,
        type: "GET",
        success: function (res) {
        	var data=res.data;
            	if (res.code== 0){
            		var pro_cover=data.cover;
	        		if(data.cover==null){
	        			pro_cover="images/defaultP.png";
	        		}
	 				$(".mui-title").append(data.commodityName);
	                $("#cover").attr("src",pro_cover);
	                $("#commodity_name").text(data.commodityName);
	                $("#commodity_prices").text("￥"+data.commodityPrices);
	                $("#commodity_commission").text("预计佣金："+"￥"+(data.commission*data.commodityPrices).toFixed(2));
	                $("#commodityIntroduction").append(data.commodityIntroduction);
	                $("#product-a").attr("data",data.commodityLink+"&"+memberId);

	                
	                sessionStorage.setItem("shareId",id2);
            } else if (result.code == 2) {
                window.location.href = "404.html";
            }
        }
    });
});