$(function() {

	$("#headlinetitle").html("隐私政策");

	$.ajax({
		url: getCookie("tempUrl") + "/agreement/getAgreement.do?type=0",
		type: "GET",
		success: function(res) {
			var content = res.data.content;
			$(".articleinfo-content").append(content);
		}
	})	
});