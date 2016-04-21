		function saySth(){
        console.log("saySth");
		$("#title").html("string quartet");
        $("#title").click(function () {
            $("#title").html("Allegria");
            $("#title").off("click");
            }
		);
    };