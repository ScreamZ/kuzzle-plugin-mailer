"use strict";

const
    NodeMailer = require('nodemailer'),
    MailerController = require('./controllers/mailerController'),
    ControllersCollection = require('./config/controllers'),
    RoutesCollections = require('./config/routes'),
    MailerService = require('./services/mailerService');

/**
 * Plugin setup
 */
class Mailer {

    constructor() {
        this.isDummy = false;
        this.context = null;
        this.controllers = ControllersCollection;
        this.routes = RoutesCollections;
    }

    /**
     * Plugin entry point, expose controllers and routes.
     *
     * @param config
     * @param context
     * @param isDummy
     */
    init(config, context, isDummy) {
        this.config = config;
        this.context = context;
        this.isDummy = isDummy;

        // Check for missing SMTP configuration
        if (!config.smtpConfig) {
            throw new Error('You must specify a SMTP configuration to send e-mails.');
        }

        // Instantiate transporter and verify connection
        let transporter = NodeMailer.createTransport(config.smtpConfig);
        this.mailService = new MailerService(transporter);

        transporter.verify()
            .then(() => {
                console.log('Transporter OK ! Credentials and options have been checked !')
            })
            .catch((e) => {
                console.error(e);
            });

        return this;
    };

    /**
     * Return the instance of mailerconstrocter
     * @returns {MailerController}
     * @constructor
     */
    MailerController() {
        return new MailerController(this.config, this.context, this.mailService);
    };

}

module.exports = Mailer;