"use strict";

class MailerService {

    constructor(transporter) {
        this.transporter = transporter;
    }

    /**
     * Get the registered transporter and give it data to send.
     *
     * @param data
     * @returns {Promise}
     */
    sendEmail(data) {

        return this.transporter.sendMail(data)
            .then(() => {
                return {"Status": 'Successfully sent !'};
            })
            .catch((err) => {
                return {Status: err.message};
            });
    }
}

module.exports = MailerService;