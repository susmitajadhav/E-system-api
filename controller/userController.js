const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



exports.register = async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email })
        if (userExists) return res.status(400).json({ errors: true, message: "user already exist" })

        const salt = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password, salt)

        const data = await User.create(req.body)
        return res.json({ errors: false, data: data })

    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email })
        if (!userExists) return res.status(400).json({ errors: true, message: "email or password is invalid" })

        const validPaswaord = await bcrypt.compare(req.body.password, userExists.password)
        if (!validPaswaord) return res.status(400).json({ errors: true, message: "email or password is invalid" })

        const token = await jwt.sign({ id: userExists._id }, process.env.SEC)
        return res.json({ errors: false, data: { token: token, user: userExists } })

    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}




