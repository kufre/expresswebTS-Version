"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ResponseType_1 = tslib_1.__importDefault(require("Elucidate/HttpContext/ResponseType"));
const FormRequest_1 = tslib_1.__importDefault(require("Elucidate/Validator/FormRequest"));
class LoginController {
    constructor(Authenticator) {
        /*
          |--------------------------------------------------------------------------
          | Login Controller
          |--------------------------------------------------------------------------
          |
          | This controller handles authenticating users for the application and
          | sends the response with generated token back to the caller.
          |
          */
        this.login = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let validation = yield this.validator(req.body);
            if (validation.success) {
                return yield this.processLogin(req.body, res);
            }
            else {
                return ResponseType_1.default.BAD_REQUEST(res, validation);
            }
        });
        /**
         * Process incoming login data.
         * @param {object} data
         * @param {Response} res
         * @return User
         */
        this.processLogin = (data, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.Auth.processLogin(data)
                .then((user) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let token = yield this.Auth.generateToken(user);
                return ResponseType_1.default.OK(res, { auth: true, token: token });
            }))
                .catch((err) => {
                return ResponseType_1.default.UNAUTHORIZED(res, {
                    auth: false,
                    msg: err.msg,
                    error: err.payload,
                });
            });
        });
        /**
         * Get a validator for an incoming login request.
         * @param {object} record
         * @return Validator
         */
        this.validator = (record) => {
            return FormRequest_1.default.make(record, {
                email: "required|string|email|max:255",
                password: "required|string|min:8",
            });
        };
        this.Auth = Authenticator;
    }
}
exports.default = LoginController;
