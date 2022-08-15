import jwt from 'jsonwebtoken';
import { unauthorizedError } from '../utils/errorUtils.js';
export function validateToken(req, res, next) {
    var authorization = req.headers['authorization'];
    var token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
    if (!token) {
        throw unauthorizedError('No token');
    }
    var userDecoded = jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            throw unauthorizedError('invalid access token');
        }
        return decoded;
    });
    res.locals.user = userDecoded;
    next();
}
