"use strict";

class MailerController {

    constructor(pluginConfig, pluginContext, mailerService) {
        this.config = pluginConfig;
        this.context = pluginContext;
        this.mailerService = mailerService;
    }

    /**
     * Send an unique e-mail using data given.
     *
     * @param requestObject
     * @returns {Promise}
     */
    sendEmail(requestObject) {
        const responseObject = this.context.constructors.ResponseObject;
        const handleSendMailStatut = (mailSendStatus) => new responseObject(requestObject, mailSendStatus);

        let defaultOptions = {
            from: `${this.config.fromContact}>`
        };
        let mailOptions = Object.assign(defaultOptions, requestObject.data.body);

        return this.mailerService.sendEmail(mailOptions)
            .then(handleSendMailStatut)
            .catch(handleSendMailStatut)
    };
}

module.exports = MailerController;