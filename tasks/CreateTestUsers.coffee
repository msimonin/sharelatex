
module.exports = (grunt) ->

	grunt.registerTask 'user:test', "Create a user with the given email address and make them an admin. Update in place if the user already exists. Usage: grunt user:create-admin --email joe@example.com", () ->
		done = @async()
		email = grunt.option("email")
		if !email?
			console.error "Usage: grunt user:create-admin --email joe@example.com"
			process.exit(1)

		settings = require "settings-sharelatex"
		UserRegistrationHandler = require "../web/app/js/Features/User/UserRegistrationHandler"
		OneTimeTokenHandler = require "../web/app/js/Features/Security/OneTimeTokenHandler"
		UserRegistrationHandler.registerNewUser {
			email: email
			password: "test"
		}, (error, user) ->
			if error? and error?.message != "EmailAlreadyRegistered"
				throw error
			user.isAdmin = false
            user.confirmed = true
			user.save (error) ->
				throw error if error?
				ONE_WEEK = 7 * 24 * 60 * 60 # seconds
				OneTimeTokenHandler.getNewToken user._id, { expiresIn: ONE_WEEK }, (err, token)->
					return next(err) if err?
					
					console.log ""
					console.log """
						Successfully created #{email} as an admin user.
						
						Please visit the following URL to set a password for #{email} and log in:
						
							#{settings.siteUrl}/user/password/set?passwordResetToken=#{token}
						
					"""
					done()
