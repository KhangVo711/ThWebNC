const getAbout = (req, res) => {
    return res.render("about", { url: req.url })
}
export default {getAbout}