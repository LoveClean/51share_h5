$(function() {

	$("#headlinetitle").html("服务协议");
	$.ajax({
		url: getCookie("tempUrl") + "/agreement/getAgreement.do?type=1",
		type: "GET",
		success: function(res) {
			var content = res.data.content;
			$(".articleinfo-content").append(content);
		}
	})

});