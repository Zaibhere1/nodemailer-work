const nodemailer = require("nodemailer");


const sendmail = async (req, res) => {

    //let testAccount = await nodemailer.createTestAccount();


    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, f
        auth: {
            user: 'edna.marks@ethereal.email',
            pass: '6p1zpkkGC5CP7nBUKU'
        },
    });
    let info = await transporter.sendMail({
        from: '"shahazaib" <edna.marks@ethereal.email>', // sender address
        to: "zaibchaudhary4492@gmail.com, ", // list of receivers
        subject: "greetings", // Subject line       
        text: "Hello zaibi?", // plain text body
        html: "<b>Hello world</b>", // htmls

    });
    console.log("Message sent: %s", info.messageId);

    res.json(info);

};
module.exports = sendmail;