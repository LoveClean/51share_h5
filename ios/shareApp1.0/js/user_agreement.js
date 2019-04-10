$(function() {

	$("#headlinetitle").html("隐私政策");
	
	$.ajax({
		url: $.cookie("tempUrl") + "/agreement/getAgreement.do?type=0",
		type: "GET",
		success: function(res) {
			var content = res.data.content;
			$(".articleinfo-content").append(content);
		}
	})
	
});