setup_signup = function(page) {
	// button for signup event
	if (!page) {
		// fallback
		var page = $('#page-signup,#page-signup-1');
	}

	page.find('#custom-domain').off('click').on('click', function(){

		$("#intego").remove()
		$("#domain-name-input").addClass("col-sm-12")
		$("#subdomain-input").removeClass("input-group")
		$("#own-domain").remove()
		$("#main-domain").val('')




	});
	page.find('.btn-request').off('click').on('click', function() {
		var args = {};
		$.each(page.find("form input"), function(i, input) {
			args[$(input).attr("name")] = $(input).val();
		});

		if(!(args.email && args.domain_name)) {
			frappe.msgprint("All fields are necessary. Please try again.");
			return false;
		}
		if(!valid_email(args.email)) {
			frappe.msgprint('Please enter a valid Email Address.');
			return false;
		}

		// subdomain in one word
		if(args.main_domain != ""){
			if(args.domain_name.search(/^[a-z0-9][-a-z0-9]*[a-z0-9]$/)===-1) {
				frappe.msgprint("Sub-domain can only contain letters, numbers and hyphens and have at least 2 caracters. Please try again.");
				return false;
			}
		}
		else{
			if(args.domain_name.search(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/)===-1) {
				frappe.msgprint("Invalid Domain name. Please try again!");
				return false;
			}

		}

		var MAX_LENGTH = 20;
		if(args.domain_name.length > MAX_LENGTH) {
			frappe.msgprint("Sub-domain can not have more than " + MAX_LENGTH + " characters.");
			return false;
		}

		var btn_html = $(".btn-request").html();
		$(".btn-request").prop("disabled", true).html("Sending details...");
		// on success, it will show message page!

		frappe.call({
                        method:"saas.api.signup",
                        args: {
				domain_name : args.domain_name + args.main_domain,
				email : args.email
			},
                        callback: function(data){
				window.location.href = data.message.location;
			}
		});

		return false;
	});



};
