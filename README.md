# Kuzzle Plugin Mailer

This plugin extends the Kuzzle API allowing to send mail from a new exposed controller. It acts as a bridge between the "Node Mailer" library and the Kuzzle backend.

# Configuration

You must define some configuration before start.

## SMTP Server & Proxy

Just provide an `smtpConfig` key with your config SMTP configuration: [Here is the list of available config options](https://github.com/nodemailer/nodemailer#set-up-smtp).

**The only option you can't define on your own is `options.pool`** because this will depend on the controller action you are using.
At the moment the bulk action is not supported but in the future this will be taken in consideration.

## From contact

Define a fromContact key with format "User" <address@adress.com>

See NodeMailer documentation

# Documentation
This plugin exposes different API that you should use depending on your needs.

In all case you can look at this documentation to understand the e-mail format : [NodeMailer mail format](https://github.com/nodemailer/nodemailer#e-mail-message-fields)

## Sending e-mail API (Small amount of mail)

You can call the HTTP route : 

POST - /api/1.0/_plugin/kuzzle-plugin-mailer/send-email

Just provide a single Mail object with some of given option : [NodeMailer mail format](https://github.com/nodemailer/nodemailer#e-mail-message-fields)


## Bulk e-mail API (Large amount of mail)

Not supported yet. See you further.
