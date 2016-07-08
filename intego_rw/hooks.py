# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "intego_rw"
app_title = "Intego"
app_publisher = "Africlouds Ltd"
app_description = "ERP for SMEs"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "arwema@gmail.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/intego_rw/css/intego_rw.css"
# app_include_js = "/assets/intego_rw/js/intego_rw.js"

# include js, css files in header of web template
# web_include_css = "/assets/intego_rw/css/intego_rw.css"
# web_include_js = "/assets/intego_rw/js/intego_rw.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "intego_rw.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "intego_rw.install.before_install"
# after_install = "intego_rw.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "intego_rw.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"intego_rw.tasks.all"
# 	],
# 	"daily": [
# 		"intego_rw.tasks.daily"
# 	],
# 	"hourly": [
# 		"intego_rw.tasks.hourly"
# 	],
# 	"weekly": [
# 		"intego_rw.tasks.weekly"
# 	]
# 	"monthly": [
# 		"intego_rw.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "intego_rw.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "intego_rw.event.get_events"
# }

