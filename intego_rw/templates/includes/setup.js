setup_setup= function(page) {
	// button for signup event
	if (!page) {
		// fallback
		var page = $('#page-setup,#page-setup-1');
	}

	var code = get_url_arg('code');
	var name = get_url_arg('name');
	if(code && name){
		frappe.call({
			method: "frappe.client.get",
            		args: {
                		doctype: "Site",
                		name: name
            		},
                        callback: function(data){
				$("#titleInput").val(data.message.title)
				$("#emailInput").val(data.message.email)
			}
                });

	}

	page.find('#btn-setup').off('click').on('click', function() {
		var args = {};
                $.each(page.find("form input"), function(i, input) {
                        args[$(input).attr("name")] = $(input).val();
                });
                $.each(page.find("form select"), function(i, input) {
                        args[$(input).attr("name")] = $(input).val();
                });
		if(!(args.telephone && args.domain && args.business_name && args.password && args.confirm_password)) {
                        frappe.msgprint("All fields are required. Please try again.");
                        return false;
                }
		if(args.password != args.confirm_password){
                        frappe.msgprint("Passwords do not match.");
                        return false;
                }

		frappe.call({
                        method:"saas.api.setup_account",
                        args: {
                                name : name,
				telephone: args.telephone,
				business_name: args.business_name,
				password: args.password,
				domain: args.domain
                        },
                        callback: function(data){
				window.location.href = data.message.location;
                        }
                });


	
	});

 




};
