const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const privateKey = fs.readFileSync(
	path.resolve(__dirname, "../keys/jwt/private.key"),
	"utf8"
);
const publicKey = fs.readFileSync(
	path.resolve(__dirname, "../keys/jwt/public.key"),
	"utf8"
);
const secret = fs.readFileSync(
	path.resolve(__dirname, "../keys/jwt/public.key"),
	"utf8"
);
//
const algorithm = "RS256";

module.exports = class JWT {
	static sign(payload, expiresIn) {
		//
		return new Promise((resolve, reject) => {
			jwt.sign(
				payload,
				privateKey,
				{ expiresIn: expiresIn, algorithm: algorithm },
				(err, token) => {
					if (err) {
						console.log(err)
						reject(err);
					} else {
						resolve(token);
					}
				}
			);
		});
	}

	static verify(token) {
		return new Promise((resolve, reject) => {
			jwt.verify(token, publicKey, { algorithm: [algorithm] }, (err, decoded) => {
				if (err) {
					reject(err);
				} else {
					resolve(decoded);
				}
			});
		});
	}

	// Verify Token
	static verifyToken(req, res, next) {
		// Get auth header value
		const bearerHeader = req.headers["authorization"];
		//
		// Check if bearer is undefined
		if (typeof bearerHeader !== "undefined") {
			// Split at the space
			const bearer = bearerHeader.split(" ");
			// Get token from array
			const bearerToken = bearer[0];
			// Set the token
			req.token = bearerToken;
			// Next middleware
			next();
		} else {

			// Forbidden
			if (req.originalUrl.includes("/user/login") || req.originalUrl.includes("/user/updatePassword")
				|| req.originalUrl.includes("/user/forgotpassword") || req.originalUrl.includes("/user/verifyforgotpassword")
				|| req.originalUrl.includes("/user/setpassword") || req.originalUrl.includes("/user/emailConfirmation")
				|| req.originalUrl.includes("/imports") || req.originalUrl.includes("/errorFiles") || req.originalUrl.includes("/downloads")
				|| req.originalUrl.includes("/updateManagerId")) {
				next()
			}
			else {
				res.json({ code: 403, msg: "Bearer Token Missing / Not Found" })
			}
		}
	}

	static decode(token) {
		return jwt.decode(token, { complete: true });
	}
};
