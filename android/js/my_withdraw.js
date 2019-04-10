mui.back=function () {
        window.location.href="my_center.html";
    }
$(function () {

    $("#headlinetitle").html("我的提现");


    $("#foot_line_btn_4").addClass("on");

   

});
var alipayAccount="";
var alipayName="";
 $(function () {
        $.ajax({
            url:  getCookie("tempUrl")+"/Member/getInfoById.do?token="+getCookie("token")+"&id="+getCookie("id"),
            type: "GET",
            success: function (result) {
                if (result != null) {
                    $(".withdarw-span").append($("<span>"+(result.data.availableBalance+result.data.frozenBalance).toFixed(2)+"</span>"));
                    sessionStorage.setItem("availMoney",result.data.availableBalance);
                    sessionStorage.setItem("disableMoney",result.data.frozenBalance);
                    sessionStorage.setItem("alipayAccount",result.data.alipayAccount);
                    alipayAccount=result.data.alipayAccount;
                    alipayName=result.data.alipayName;
                }
            }
        });
  });
  
 $(function () {
    $.ajax({
        url: getCookie("tempUrl")+"/Withdrawal/getRecord.do?token="+getCookie("token"),
        type: "POST",
        success: function (result) {
        	var list=result.data;
        	$.each(list,function(index,item){
        		var type = "已申请";
        		if(item.status == 1){
        			type = "已打款";
        		}else if(item.status == 2){
        			type = "涉嫌违规";
        		}
        		var time = $("<div class='withdarw-time'></div>").append($("<span>"+item.createDate.substring(0,10)+"</span>"));
        		var money = $("<div class='withdarw-price'></div>").append($("<span>"+item.withdrawal+"</span>"));
        		var status = $("<div class='withdarw-status'></div>").append($("<span>"+type+"</span>"));
        		$("<li></li>").append(time).append(money).append(status).appendTo(".withdarw-ul");
            })
            }
        });
  });
  
	function getAlipay(){
		if(alipayAccount==""||alipayAccount==null||alipayName==""||alipayName==null){
			wcPop({
					content: '请填写支付宝账号与姓名!',
					shade: true,
					style: 'background: rgba(17,17,17,.7); color: #fff;font-size:13px;width:200px',
					time: 2
			});
		}else{
    		window.location.href="getMoney.html";
    	}
	}