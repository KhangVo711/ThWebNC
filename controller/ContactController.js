const getContact = (req, res) => {
    return res.render("contact", { url: req.url })
}
export default {getContact}