var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import hostRepository from '../repositories/hostRepository.js';
import userRepository from '../repositories/userRepository.js';
function createHost(userId, price, minWeight, maxWeight, city, address) {
    return __awaiter(this, void 0, void 0, function () {
        var checkHost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, hostRepository.getByUserId(userId)];
                case 1:
                    checkHost = _a.sent();
                    if (!!checkHost) return [3 /*break*/, 3];
                    return [4 /*yield*/, hostRepository.insert({ userId: userId, price: price, minWeight: minWeight, maxWeight: maxWeight })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [4 /*yield*/, userRepository.updateData(userId, { isHost: true, city: city, address: address })];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getHostsByName(name) {
    return __awaiter(this, void 0, void 0, function () {
        var nameArr, hosts, hostsQuery1, i, hostsQuery2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nameArr = name.split(' ');
                    hosts = new Array();
                    if (!(nameArr.length === 2)) return [3 /*break*/, 2];
                    return [4 /*yield*/, hostRepository.getHostsByNameAndSurname(nameArr[0], nameArr[1])];
                case 1:
                    hostsQuery1 = _a.sent();
                    hosts = __spreadArray(__spreadArray([], hosts, true), hostsQuery1, true);
                    _a.label = 2;
                case 2:
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < nameArr.length)) return [3 /*break*/, 6];
                    return [4 /*yield*/, hostRepository.getHostsByNameOrSurname(nameArr[i])];
                case 4:
                    hostsQuery2 = _a.sent();
                    hosts = __spreadArray(__spreadArray([], hosts, true), hostsQuery2, true);
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/, removeDuplicatesHostArray(hosts)];
            }
        });
    });
}
function getHostsByCity(city) {
    return __awaiter(this, void 0, void 0, function () {
        var hostsQuery;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, hostRepository.getHostsByCity(city)];
                case 1:
                    hostsQuery = _a.sent();
                    return [2 /*return*/, hostsQuery];
            }
        });
    });
}
function getHostById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var hostsQuery;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, hostRepository.getHostUserById(id)];
                case 1:
                    hostsQuery = _a.sent();
                    return [2 /*return*/, hostsQuery];
            }
        });
    });
}
function removeDuplicatesHostArray(array) {
    var seems = {};
    var arr = new Array();
    for (var i = 0; i < array.length; i++) {
        if (seems[array[i].user.id] === undefined) {
            seems[array[i].user.id] = true;
            arr = __spreadArray(__spreadArray([], arr, true), [array[i]], false);
        }
    }
    return arr;
}
var hostService = {
    createHost: createHost,
    getHostsByName: getHostsByName,
    getHostsByCity: getHostsByCity,
    getHostById: getHostById
};
export default hostService;
