// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: magic;
console.log(js_beautify('var i=0;\n\n\n\n\n\n\n\nfunction test(){return 0}'))
// JS Beautifier (minified)
// https://github.com/beautify-web/js-beautify
/*
The MIT License (MIT)

  Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/
var legacy_beautify_js = (function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = !0;
        return module.exports
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.i = function(value) {
        return value
    };
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            })
        }
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module['default']
        } : function getModuleExports() {
            return module
        };
        __webpack_require__.d(getter, 'a', getter);
        return getter
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 6)
})([(function(module, exports) {
    var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
    var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
    var nonASCIIidentifierChars = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
    exports.newline = /[\n\r\u2028\u2029]/;
    exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
    exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');
    exports.isIdentifierStart = function(code) {
        if (code < 65) return code === 36 || code === 64;
        if (code < 91) return !0;
        if (code < 97) return code === 95;
        if (code < 123) return !0;
        return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code))
    };
    exports.isIdentifierChar = function(code) {
        if (code < 48) return code === 36;
        if (code < 58) return !0;
        if (code < 65) return !1;
        if (code < 91) return !0;
        if (code < 97) return code === 95;
        if (code < 123) return !0;
        return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code))
    }
}), (function(module, exports, __webpack_require__) {
    var mergeOpts = __webpack_require__(3).mergeOpts;
    var acorn = __webpack_require__(0);
    var Output = __webpack_require__(4).Output;
    var Tokenizer = __webpack_require__(7).Tokenizer;

    function remove_redundant_indentation(output, frame) {
        if (frame.multiline_frame || frame.mode === MODE.ForInitializer || frame.mode === MODE.Conditional) {
            return
        }
        var start_index = frame.start_line_index;
        output.remove_indent(start_index)
    }

    function in_array(what, arr) {
        for (var i = 0; i < arr.length; i += 1) {
            if (arr[i] === what) {
                return !0
            }
        }
        return !1
    }

    function trim(s) {
        return s.replace(/^\s+|\s+$/g, '')
    }

    function ltrim(s) {
        return s.replace(/^\s+/g, '')
    }

    function generateMapFromStrings(list) {
        var result = {};
        for (var x = 0; x < list.length; x++) {
            result[list[x].replace(/-/g, '_')] = list[x]
        }
        return result
    }

    function sanitizeOperatorPosition(opPosition) {
        opPosition = opPosition || OPERATOR_POSITION.before_newline;
        if (!in_array(opPosition, validPositionValues)) {
            throw new Error("Invalid Option Value: The option 'operator_position' must be one of the following values\n" + validPositionValues + "\nYou passed in: '" + opPosition + "'")
        }
        return opPosition
    }
    var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];
    var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);
    var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];
    var MODE = {
        BlockStatement: 'BlockStatement',
        Statement: 'Statement',
        ObjectLiteral: 'ObjectLiteral',
        ArrayLiteral: 'ArrayLiteral',
        ForInitializer: 'ForInitializer',
        Conditional: 'Conditional',
        Expression: 'Expression'
    };

    function Beautifier(js_source_text, options) {
        "use strict";
        options = options || {};
        js_source_text = js_source_text || '';
        var output;
        var tokens = [],
            token_pos;
        var tokenizer;
        var current_token;
        var last_type, last_last_text, indent_string;
        var flags, previous_flags, flag_store;
        var prefix;
        var handlers, opt;
        var baseIndentString = '';
        handlers = {
            'TK_START_EXPR': handle_start_expr,
            'TK_END_EXPR': handle_end_expr,
            'TK_START_BLOCK': handle_start_block,
            'TK_END_BLOCK': handle_end_block,
            'TK_WORD': handle_word,
            'TK_RESERVED': handle_word,
            'TK_SEMICOLON': handle_semicolon,
            'TK_STRING': handle_string,
            'TK_EQUALS': handle_equals,
            'TK_OPERATOR': handle_operator,
            'TK_COMMA': handle_comma,
            'TK_BLOCK_COMMENT': handle_block_comment,
            'TK_COMMENT': handle_comment,
            'TK_DOT': handle_dot,
            'TK_UNKNOWN': handle_unknown,
            'TK_EOF': handle_eof
        };

        function create_flags(flags_base, mode) {
            var next_indent_level = 0;
            if (flags_base) {
                next_indent_level = flags_base.indentation_level;
                if (!output.just_added_newline() && flags_base.line_indent_level > next_indent_level) {
                    next_indent_level = flags_base.line_indent_level
                }
            }
            var next_flags = {
                mode: mode,
                parent: flags_base,
                last_text: flags_base ? flags_base.last_text : '',
                last_word: flags_base ? flags_base.last_word : '',
                declaration_statement: !1,
                declaration_assignment: !1,
                multiline_frame: !1,
                inline_frame: !1,
                if_block: !1,
                else_block: !1,
                do_block: !1,
                do_while: !1,
                import_block: !1,
                in_case_statement: !1,
                in_case: !1,
                case_body: !1,
                indentation_level: next_indent_level,
                line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
                start_line_index: output.get_line_number(),
                ternary_depth: 0
            };
            return next_flags
        }
        options = mergeOpts(options, 'js');
        opt = {};
        if (options.brace_style === "expand-strict") {
            options.brace_style = "expand"
        } else if (options.brace_style === "collapse-preserve-inline") {
            options.brace_style = "collapse,preserve-inline"
        } else if (options.braces_on_own_line !== undefined) {
            options.brace_style = options.braces_on_own_line ? "expand" : "collapse"
        } else if (!options.brace_style) {
            options.brace_style = "collapse"
        }
        var brace_style_split = options.brace_style.split(/[^a-zA-Z0-9_\-]+/);
        opt.brace_preserve_inline = !1;
        opt.brace_style = "collapse";
        for (var bs = 0; bs < brace_style_split.length; bs++) {
            if (brace_style_split[bs] === "preserve-inline") {
                opt.brace_preserve_inline = !0
            } else {
                opt.brace_style = brace_style_split[bs]
            }
        }
        opt.indent_size = options.indent_size ? parseInt(options.indent_size, 10) : 4;
        opt.indent_char = options.indent_char ? options.indent_char : ' ';
        opt.eol = options.eol ? options.eol : 'auto';
        opt.preserve_newlines = (options.preserve_newlines === undefined) ? !0 : options.preserve_newlines;
        opt.unindent_chained_methods = (options.unindent_chained_methods === undefined) ? !1 : options.unindent_chained_methods;
        opt.break_chained_methods = (options.break_chained_methods === undefined) ? !1 : options.break_chained_methods;
        opt.max_preserve_newlines = (options.max_preserve_newlines === undefined) ? 0 : parseInt(options.max_preserve_newlines, 10);
        opt.space_in_paren = (options.space_in_paren === undefined) ? !1 : options.space_in_paren;
        opt.space_in_empty_paren = (options.space_in_empty_paren === undefined) ? !1 : options.space_in_empty_paren;
        opt.jslint_happy = (options.jslint_happy === undefined) ? !1 : options.jslint_happy;
        opt.space_after_anon_function = (options.space_after_anon_function === undefined) ? !1 : options.space_after_anon_function;
        opt.keep_array_indentation = (options.keep_array_indentation === undefined) ? !1 : options.keep_array_indentation;
        opt.space_before_conditional = (options.space_before_conditional === undefined) ? !0 : options.space_before_conditional;
        opt.unescape_strings = (options.unescape_strings === undefined) ? !1 : options.unescape_strings;
        opt.wrap_line_length = (options.wrap_line_length === undefined) ? 0 : parseInt(options.wrap_line_length, 10);
        opt.e4x = (options.e4x === undefined) ? !1 : options.e4x;
        opt.end_with_newline = (options.end_with_newline === undefined) ? !1 : options.end_with_newline;
        opt.comma_first = (options.comma_first === undefined) ? !1 : options.comma_first;
        opt.operator_position = sanitizeOperatorPosition(options.operator_position);
        opt.test_output_raw = (options.test_output_raw === undefined) ? !1 : options.test_output_raw;
        if (opt.jslint_happy) {
            opt.space_after_anon_function = !0
        }
        if (options.indent_with_tabs) {
            opt.indent_char = '\t';
            opt.indent_size = 1
        }
        if (opt.eol === 'auto') {
            opt.eol = '\n';
            if (js_source_text && acorn.lineBreak.test(js_source_text || '')) {
                opt.eol = js_source_text.match(acorn.lineBreak)[0]
            }
        }
        opt.eol = opt.eol.replace(/\\r/, '\r').replace(/\\n/, '\n');
        indent_string = '';
        while (opt.indent_size > 0) {
            indent_string += opt.indent_char;
            opt.indent_size -= 1
        }
        var preindent_index = 0;
        if (js_source_text && js_source_text.length) {
            while ((js_source_text.charAt(preindent_index) === ' ' || js_source_text.charAt(preindent_index) === '\t')) {
                preindent_index += 1
            }
            baseIndentString = js_source_text.substring(0, preindent_index);
            js_source_text = js_source_text.substring(preindent_index)
        }
        last_type = 'TK_START_BLOCK';
        last_last_text = '';
        output = new Output(indent_string, baseIndentString);
        output.raw = opt.test_output_raw;
        flag_store = [];
        set_mode(MODE.BlockStatement);
        this.beautify = function() {
            var sweet_code;
            tokenizer = new Tokenizer(js_source_text, opt, indent_string);
            tokens = tokenizer.tokenize();
            token_pos = 0;
            current_token = get_token();
            while (current_token) {
                handlers[current_token.type]();
                last_last_text = flags.last_text;
                last_type = current_token.type;
                flags.last_text = current_token.text;
                token_pos += 1;
                current_token = get_token()
            }
            sweet_code = output.get_code(opt.end_with_newline, opt.eol);
            return sweet_code
        };

        function handle_whitespace_and_comments(local_token, preserve_statement_flags) {
            var newlines = local_token.newlines;
            var keep_whitespace = opt.keep_array_indentation && is_array(flags.mode);
            var temp_token = current_token;
            for (var h = 0; h < local_token.comments_before.length; h++) {
                current_token = local_token.comments_before[h];
                handle_whitespace_and_comments(current_token, preserve_statement_flags);
                handlers[current_token.type](preserve_statement_flags)
            }
            current_token = temp_token;
            if (keep_whitespace) {
                for (var i = 0; i < newlines; i += 1) {
                    print_newline(i > 0, preserve_statement_flags)
                }
            } else {
                if (opt.max_preserve_newlines && newlines > opt.max_preserve_newlines) {
                    newlines = opt.max_preserve_newlines
                }
                if (opt.preserve_newlines) {
                    if (local_token.newlines > 1) {
                        print_newline(!1, preserve_statement_flags);
                        for (var j = 1; j < newlines; j += 1) {
                            print_newline(!0, preserve_statement_flags)
                        }
                    }
                }
            }
        }

        function split_linebreaks(s) {
            s = s.replace(acorn.allLineBreaks, '\n');
            var out = [],
                idx = s.indexOf("\n");
            while (idx !== -1) {
                out.push(s.substring(0, idx));
                s = s.substring(idx + 1);
                idx = s.indexOf("\n")
            }
            if (s.length) {
                out.push(s)
            }
            return out
        }
        var newline_restricted_tokens = ['break', 'continue', 'return', 'throw', 'yield'];

        function allow_wrap_or_preserved_newline(force_linewrap) {
            force_linewrap = (force_linewrap === undefined) ? !1 : force_linewrap;
            if (output.just_added_newline()) {
                return
            }
            var shouldPreserveOrForce = (opt.preserve_newlines && current_token.wanted_newline) || force_linewrap;
            var operatorLogicApplies = in_array(flags.last_text, tokenizer.positionable_operators) || in_array(current_token.text, tokenizer.positionable_operators);
            if (operatorLogicApplies) {
                var shouldPrintOperatorNewline = (in_array(flags.last_text, tokenizer.positionable_operators) && in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) || in_array(current_token.text, tokenizer.positionable_operators);
                shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline
            }
            if (shouldPreserveOrForce) {
                print_newline(!1, !0)
            } else if (opt.wrap_line_length) {
                if (last_type === 'TK_RESERVED' && in_array(flags.last_text, newline_restricted_tokens)) {
                    return
                }
                var proposed_line_length = output.current_line.get_character_count() + current_token.text.length + (output.space_before_token ? 1 : 0);
                if (proposed_line_length >= opt.wrap_line_length) {
                    print_newline(!1, !0)
                }
            }
        }

        function print_newline(force_newline, preserve_statement_flags) {
            if (!preserve_statement_flags) {
                if (flags.last_text !== ';' && flags.last_text !== ',' && flags.last_text !== '=' && last_type !== 'TK_OPERATOR') {
                    var next_token = get_token(1);
                    while (flags.mode === MODE.Statement && !(flags.if_block && next_token && next_token.type === 'TK_RESERVED' && next_token.text === 'else') && !flags.do_block) {
                        restore_mode()
                    }
                }
            }
            if (output.add_new_line(force_newline)) {
                flags.multiline_frame = !0
            }
        }

        function print_token_line_indentation() {
            if (output.just_added_newline()) {
                if (opt.keep_array_indentation && is_array(flags.mode) && current_token.wanted_newline) {
                    output.current_line.push(current_token.whitespace_before);
                    output.space_before_token = !1
                } else if (output.set_indent(flags.indentation_level)) {
                    flags.line_indent_level = flags.indentation_level
                }
            }
        }

        function print_token(printable_token) {
            if (output.raw) {
                output.add_raw_token(current_token);
                return
            }
            if (opt.comma_first && last_type === 'TK_COMMA' && output.just_added_newline()) {
                if (output.previous_line.last() === ',') {
                    var popped = output.previous_line.pop();
                    if (output.previous_line.is_empty()) {
                        output.previous_line.push(popped);
                        output.trim(!0);
                        output.current_line.pop();
                        output.trim()
                    }
                    print_token_line_indentation();
                    output.add_token(',');
                    output.space_before_token = !0
                }
            }
            printable_token = printable_token || current_token.text;
            print_token_line_indentation();
            output.add_token(printable_token)
        }

        function indent() {
            flags.indentation_level += 1
        }

        function deindent() {
            if (flags.indentation_level > 0 && ((!flags.parent) || flags.indentation_level > flags.parent.indentation_level)) {
                flags.indentation_level -= 1
            }
        }

        function set_mode(mode) {
            if (flags) {
                flag_store.push(flags);
                previous_flags = flags
            } else {
                previous_flags = create_flags(null, mode)
            }
            flags = create_flags(previous_flags, mode)
        }

        function is_array(mode) {
            return mode === MODE.ArrayLiteral
        }

        function is_expression(mode) {
            return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional])
        }

        function restore_mode() {
            if (flag_store.length > 0) {
                previous_flags = flags;
                flags = flag_store.pop();
                if (previous_flags.mode === MODE.Statement && !opt.unindent_chained_methods) {
                    remove_redundant_indentation(output, previous_flags)
                }
            }
        }

        function start_of_object_property() {
            return flags.parent.mode === MODE.ObjectLiteral && flags.mode === MODE.Statement && ((flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set'])))
        }

        function start_of_statement() {
            if ((last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') || (last_type === 'TK_RESERVED' && flags.last_text === 'do') || (last_type === 'TK_RESERVED' && in_array(flags.last_text, newline_restricted_tokens) && !current_token.wanted_newline) || (last_type === 'TK_RESERVED' && flags.last_text === 'else' && !(current_token.type === 'TK_RESERVED' && current_token.text === 'if' && !current_token.comments_before.length)) || (last_type === 'TK_END_EXPR' && (previous_flags.mode === MODE.ForInitializer || previous_flags.mode === MODE.Conditional)) || (last_type === 'TK_WORD' && flags.mode === MODE.BlockStatement && !flags.in_case && !(current_token.text === '--' || current_token.text === '++') && last_last_text !== 'function' && current_token.type !== 'TK_WORD' && current_token.type !== 'TK_RESERVED') || (flags.mode === MODE.ObjectLiteral && ((flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set']))))) {
                set_mode(MODE.Statement);
                if (!opt.unindent_chained_methods) {
                    indent()
                }
                handle_whitespace_and_comments(current_token, !0);
                if (!start_of_object_property()) {
                    allow_wrap_or_preserved_newline(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['do', 'for', 'if', 'while']))
                }
                return !0
            }
            return !1
        }

        function all_lines_start_with(lines, c) {
            for (var i = 0; i < lines.length; i++) {
                var line = trim(lines[i]);
                if (line.charAt(0) !== c) {
                    return !1
                }
            }
            return !0
        }

        function each_line_matches_indent(lines, indent) {
            var i = 0,
                len = lines.length,
                line;
            for (; i < len; i++) {
                line = lines[i];
                if (line && line.indexOf(indent) !== 0) {
                    return !1
                }
            }
            return !0
        }

        function is_special_word(word) {
            return in_array(word, ['case', 'return', 'do', 'if', 'throw', 'else'])
        }

        function get_token(offset) {
            var index = token_pos + (offset || 0);
            return (index < 0 || index >= tokens.length) ? null : tokens[index]
        }

        function handle_start_expr() {
            if (!start_of_statement()) {
                handle_whitespace_and_comments(current_token)
            }
            var next_mode = MODE.Expression;
            if (current_token.text === '[') {
                if (last_type === 'TK_WORD' || flags.last_text === ')') {
                    if (last_type === 'TK_RESERVED' && in_array(flags.last_text, tokenizer.line_starters)) {
                        output.space_before_token = !0
                    }
                    set_mode(next_mode);
                    print_token();
                    indent();
                    if (opt.space_in_paren) {
                        output.space_before_token = !0
                    }
                    return
                }
                next_mode = MODE.ArrayLiteral;
                if (is_array(flags.mode)) {
                    if (flags.last_text === '[' || (flags.last_text === ',' && (last_last_text === ']' || last_last_text === '}'))) {
                        if (!opt.keep_array_indentation) {
                            print_newline()
                        }
                    }
                }
                if (!in_array(last_type, ['TK_START_EXPR', 'TK_END_EXPR', 'TK_WORD', 'TK_OPERATOR'])) {
                    output.space_before_token = !0
                }
            } else {
                if (last_type === 'TK_RESERVED') {
                    if (flags.last_text === 'for') {
                        output.space_before_token = opt.space_before_conditional;
                        next_mode = MODE.ForInitializer
                    } else if (in_array(flags.last_text, ['if', 'while'])) {
                        output.space_before_token = opt.space_before_conditional;
                        next_mode = MODE.Conditional
                    } else if (in_array(flags.last_word, ['await', 'async'])) {
                        output.space_before_token = !0
                    } else if (flags.last_text === 'import' && current_token.whitespace_before === '') {
                        output.space_before_token = !1
                    } else if (in_array(flags.last_text, tokenizer.line_starters) || flags.last_text === 'catch') {
                        output.space_before_token = !0
                    }
                } else if (last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                    if (!start_of_object_property()) {
                        allow_wrap_or_preserved_newline()
                    }
                } else if (last_type === 'TK_WORD') {
                    output.space_before_token = !1
                } else {
                    allow_wrap_or_preserved_newline()
                }
                if ((last_type === 'TK_RESERVED' && (flags.last_word === 'function' || flags.last_word === 'typeof')) || (flags.last_text === '*' && (in_array(last_last_text, ['function', 'yield']) || (flags.mode === MODE.ObjectLiteral && in_array(last_last_text, ['{', ',']))))) {
                    output.space_before_token = opt.space_after_anon_function
                }
            }
            if (flags.last_text === ';' || last_type === 'TK_START_BLOCK') {
                print_newline()
            } else if (last_type === 'TK_END_EXPR' || last_type === 'TK_START_EXPR' || last_type === 'TK_END_BLOCK' || flags.last_text === '.') {
                allow_wrap_or_preserved_newline(current_token.wanted_newline)
            }
            set_mode(next_mode);
            print_token();
            if (opt.space_in_paren) {
                output.space_before_token = !0
            }
            indent()
        }

        function handle_end_expr() {
            while (flags.mode === MODE.Statement) {
                restore_mode()
            }
            handle_whitespace_and_comments(current_token);
            if (flags.multiline_frame) {
                allow_wrap_or_preserved_newline(current_token.text === ']' && is_array(flags.mode) && !opt.keep_array_indentation)
            }
            if (opt.space_in_paren) {
                if (last_type === 'TK_START_EXPR' && !opt.space_in_empty_paren) {
                    output.trim();
                    output.space_before_token = !1
                } else {
                    output.space_before_token = !0
                }
            }
            if (current_token.text === ']' && opt.keep_array_indentation) {
                print_token();
                restore_mode()
            } else {
                restore_mode();
                print_token()
            }
            remove_redundant_indentation(output, previous_flags);
            if (flags.do_while && previous_flags.mode === MODE.Conditional) {
                previous_flags.mode = MODE.Expression;
                flags.do_block = !1;
                flags.do_while = !1
            }
        }

        function handle_start_block() {
            handle_whitespace_and_comments(current_token);
            var next_token = get_token(1);
            var second_token = get_token(2);
            if (second_token && ((in_array(second_token.text, [':', ',']) && in_array(next_token.type, ['TK_STRING', 'TK_WORD', 'TK_RESERVED'])) || (in_array(next_token.text, ['get', 'set', '...']) && in_array(second_token.type, ['TK_WORD', 'TK_RESERVED'])))) {
                if (!in_array(last_last_text, ['class', 'interface'])) {
                    set_mode(MODE.ObjectLiteral)
                } else {
                    set_mode(MODE.BlockStatement)
                }
            } else if (last_type === 'TK_OPERATOR' && flags.last_text === '=>') {
                set_mode(MODE.BlockStatement)
            } else if (in_array(last_type, ['TK_EQUALS', 'TK_START_EXPR', 'TK_COMMA', 'TK_OPERATOR']) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['return', 'throw', 'import', 'default']))) {
                set_mode(MODE.ObjectLiteral)
            } else {
                set_mode(MODE.BlockStatement)
            }
            var empty_braces = !next_token.comments_before.length && next_token.text === '}';
            var empty_anonymous_function = empty_braces && flags.last_word === 'function' && last_type === 'TK_END_EXPR';
            if (opt.brace_preserve_inline) {
                var index = 0;
                var check_token = null;
                flags.inline_frame = !0;
                do {
                    index += 1;
                    check_token = get_token(index);
                    if (check_token.wanted_newline) {
                        flags.inline_frame = !1;
                        break
                    }
                } while (check_token.type !== 'TK_EOF' && !(check_token.type === 'TK_END_BLOCK' && check_token.opened === current_token));
            }
            if ((opt.brace_style === "expand" || (opt.brace_style === "none" && current_token.wanted_newline)) && !flags.inline_frame) {
                if (last_type !== 'TK_OPERATOR' && (empty_anonymous_function || last_type === 'TK_EQUALS' || (last_type === 'TK_RESERVED' && is_special_word(flags.last_text) && flags.last_text !== 'else'))) {
                    output.space_before_token = !0
                } else {
                    print_newline(!1, !0)
                }
            } else {
                if (is_array(previous_flags.mode) && (last_type === 'TK_START_EXPR' || last_type === 'TK_COMMA')) {
                    if (last_type === 'TK_COMMA' || opt.space_in_paren) {
                        output.space_before_token = !0
                    }
                    if (last_type === 'TK_COMMA' || (last_type === 'TK_START_EXPR' && flags.inline_frame)) {
                        allow_wrap_or_preserved_newline();
                        previous_flags.multiline_frame = previous_flags.multiline_frame || flags.multiline_frame;
                        flags.multiline_frame = !1
                    }
                }
                if (last_type !== 'TK_OPERATOR' && last_type !== 'TK_START_EXPR') {
                    if (last_type === 'TK_START_BLOCK' && !flags.inline_frame) {
                        print_newline()
                    } else {
                        output.space_before_token = !0
                    }
                }
            }
            print_token();
            indent()
        }

        function handle_end_block() {
            handle_whitespace_and_comments(current_token);
            while (flags.mode === MODE.Statement) {
                restore_mode()
            }
            var empty_braces = last_type === 'TK_START_BLOCK';
            if (flags.inline_frame && !empty_braces) {
                output.space_before_token = !0
            } else if (opt.brace_style === "expand") {
                if (!empty_braces) {
                    print_newline()
                }
            } else {
                if (!empty_braces) {
                    if (is_array(flags.mode) && opt.keep_array_indentation) {
                        opt.keep_array_indentation = !1;
                        print_newline();
                        opt.keep_array_indentation = !0
                    } else {
                        print_newline()
                    }
                }
            }
            restore_mode();
            print_token()
        }

        function handle_word() {
            if (current_token.type === 'TK_RESERVED') {
                if (in_array(current_token.text, ['set', 'get']) && flags.mode !== MODE.ObjectLiteral) {
                    current_token.type = 'TK_WORD'
                } else if (in_array(current_token.text, ['as', 'from']) && !flags.import_block) {
                    current_token.type = 'TK_WORD'
                } else if (flags.mode === MODE.ObjectLiteral) {
                    var next_token = get_token(1);
                    if (next_token.text === ':') {
                        current_token.type = 'TK_WORD'
                    }
                }
            }
            if (start_of_statement()) {
                if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') {
                    flags.declaration_statement = !0
                }
            } else if (current_token.wanted_newline && !is_expression(flags.mode) && (last_type !== 'TK_OPERATOR' || (flags.last_text === '--' || flags.last_text === '++')) && last_type !== 'TK_EQUALS' && (opt.preserve_newlines || !(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const', 'set', 'get'])))) {
                handle_whitespace_and_comments(current_token);
                print_newline()
            } else {
                handle_whitespace_and_comments(current_token)
            }
            if (flags.do_block && !flags.do_while) {
                if (current_token.type === 'TK_RESERVED' && current_token.text === 'while') {
                    output.space_before_token = !0;
                    print_token();
                    output.space_before_token = !0;
                    flags.do_while = !0;
                    return
                } else {
                    print_newline();
                    flags.do_block = !1
                }
            }
            if (flags.if_block) {
                if (!flags.else_block && (current_token.type === 'TK_RESERVED' && current_token.text === 'else')) {
                    flags.else_block = !0
                } else {
                    while (flags.mode === MODE.Statement) {
                        restore_mode()
                    }
                    flags.if_block = !1;
                    flags.else_block = !1
                }
            }
            if (current_token.type === 'TK_RESERVED' && (current_token.text === 'case' || (current_token.text === 'default' && flags.in_case_statement))) {
                print_newline();
                if (flags.case_body || opt.jslint_happy) {
                    deindent();
                    flags.case_body = !1
                }
                print_token();
                flags.in_case = !0;
                flags.in_case_statement = !0;
                return
            }
            if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                if (!start_of_object_property()) {
                    allow_wrap_or_preserved_newline()
                }
            }
            if (current_token.type === 'TK_RESERVED' && current_token.text === 'function') {
                if (in_array(flags.last_text, ['}', ';']) || (output.just_added_newline() && !(in_array(flags.last_text, ['(', '[', '{', ':', '=', ',']) || last_type === 'TK_OPERATOR'))) {
                    if (!output.just_added_blankline() && !current_token.comments_before.length) {
                        print_newline();
                        print_newline(!0)
                    }
                }
                if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
                    if (last_type === 'TK_RESERVED' && (in_array(flags.last_text, ['get', 'set', 'new', 'export', 'async']) || in_array(flags.last_text, newline_restricted_tokens))) {
                        output.space_before_token = !0
                    } else if (last_type === 'TK_RESERVED' && flags.last_text === 'default' && last_last_text === 'export') {
                        output.space_before_token = !0
                    } else {
                        print_newline()
                    }
                } else if (last_type === 'TK_OPERATOR' || flags.last_text === '=') {
                    output.space_before_token = !0
                } else if (!flags.multiline_frame && (is_expression(flags.mode) || is_array(flags.mode))) {} else {
                    print_newline()
                }
                print_token();
                flags.last_word = current_token.text;
                return
            }
            prefix = 'NONE';
            if (last_type === 'TK_END_BLOCK') {
                if (previous_flags.inline_frame) {
                    prefix = 'SPACE'
                } else if (!(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally', 'from']))) {
                    prefix = 'NEWLINE'
                } else {
                    if (opt.brace_style === "expand" || opt.brace_style === "end-expand" || (opt.brace_style === "none" && current_token.wanted_newline)) {
                        prefix = 'NEWLINE'
                    } else {
                        prefix = 'SPACE';
                        output.space_before_token = !0
                    }
                }
            } else if (last_type === 'TK_SEMICOLON' && flags.mode === MODE.BlockStatement) {
                prefix = 'NEWLINE'
            } else if (last_type === 'TK_SEMICOLON' && is_expression(flags.mode)) {
                prefix = 'SPACE'
            } else if (last_type === 'TK_STRING') {
                prefix = 'NEWLINE'
            } else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' || (flags.last_text === '*' && (in_array(last_last_text, ['function', 'yield']) || (flags.mode === MODE.ObjectLiteral && in_array(last_last_text, ['{', ',']))))) {
                prefix = 'SPACE'
            } else if (last_type === 'TK_START_BLOCK') {
                if (flags.inline_frame) {
                    prefix = 'SPACE'
                } else {
                    prefix = 'NEWLINE'
                }
            } else if (last_type === 'TK_END_EXPR') {
                output.space_before_token = !0;
                prefix = 'NEWLINE'
            }
            if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, tokenizer.line_starters) && flags.last_text !== ')') {
                if (flags.inline_frame || flags.last_text === 'else' || flags.last_text === 'export') {
                    prefix = 'SPACE'
                } else {
                    prefix = 'NEWLINE'
                }
            }
            if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally'])) {
                if ((!(last_type === 'TK_END_BLOCK' && previous_flags.mode === MODE.BlockStatement) || opt.brace_style === "expand" || opt.brace_style === "end-expand" || (opt.brace_style === "none" && current_token.wanted_newline)) && !flags.inline_frame) {
                    print_newline()
                } else {
                    output.trim(!0);
                    var line = output.current_line;
                    if (line.last() !== '}') {
                        print_newline()
                    }
                    output.space_before_token = !0
                }
            } else if (prefix === 'NEWLINE') {
                if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
                    output.space_before_token = !0
                } else if (last_type !== 'TK_END_EXPR') {
                    if ((last_type !== 'TK_START_EXPR' || !(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['var', 'let', 'const']))) && flags.last_text !== ':') {
                        if (current_token.type === 'TK_RESERVED' && current_token.text === 'if' && flags.last_text === 'else') {
                            output.space_before_token = !0
                        } else {
                            print_newline()
                        }
                    }
                } else if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, tokenizer.line_starters) && flags.last_text !== ')') {
                    print_newline()
                }
            } else if (flags.multiline_frame && is_array(flags.mode) && flags.last_text === ',' && last_last_text === '}') {
                print_newline()
            } else if (prefix === 'SPACE') {
                output.space_before_token = !0
            }
            print_token();
            flags.last_word = current_token.text;
            if (current_token.type === 'TK_RESERVED') {
                if (current_token.text === 'do') {
                    flags.do_block = !0
                } else if (current_token.text === 'if') {
                    flags.if_block = !0
                } else if (current_token.text === 'import') {
                    flags.import_block = !0
                } else if (flags.import_block && current_token.type === 'TK_RESERVED' && current_token.text === 'from') {
                    flags.import_block = !1
                }
            }
        }

        function handle_semicolon() {
            if (start_of_statement()) {
                output.space_before_token = !1
            } else {
                handle_whitespace_and_comments(current_token)
            }
            var next_token = get_token(1);
            while (flags.mode === MODE.Statement && !(flags.if_block && next_token && next_token.type === 'TK_RESERVED' && next_token.text === 'else') && !flags.do_block) {
                restore_mode()
            }
            if (flags.import_block) {
                flags.import_block = !1
            }
            print_token()
        }

        function handle_string() {
            if (start_of_statement()) {
                output.space_before_token = !0
            } else {
                handle_whitespace_and_comments(current_token);
                if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' || flags.inline_frame) {
                    output.space_before_token = !0
                } else if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
                    if (!start_of_object_property()) {
                        allow_wrap_or_preserved_newline()
                    }
                } else {
                    print_newline()
                }
            }
            print_token()
        }

        function handle_equals() {
            if (start_of_statement()) {} else {
                handle_whitespace_and_comments(current_token)
            }
            if (flags.declaration_statement) {
                flags.declaration_assignment = !0
            }
            output.space_before_token = !0;
            print_token();
            output.space_before_token = !0
        }

        function handle_comma() {
            handle_whitespace_and_comments(current_token, !0);
            print_token();
            output.space_before_token = !0;
            if (flags.declaration_statement) {
                if (is_expression(flags.parent.mode)) {
                    flags.declaration_assignment = !1
                }
                if (flags.declaration_assignment) {
                    flags.declaration_assignment = !1;
                    print_newline(!1, !0)
                } else if (opt.comma_first) {
                    allow_wrap_or_preserved_newline()
                }
            } else if (flags.mode === MODE.ObjectLiteral || (flags.mode === MODE.Statement && flags.parent.mode === MODE.ObjectLiteral)) {
                if (flags.mode === MODE.Statement) {
                    restore_mode()
                }
                if (!flags.inline_frame) {
                    print_newline()
                }
            } else if (opt.comma_first) {
                allow_wrap_or_preserved_newline()
            }
        }

        function handle_operator() {
            var isGeneratorAsterisk = current_token.text === '*' && ((last_type === 'TK_RESERVED' && in_array(flags.last_text, ['function', 'yield'])) || (in_array(last_type, ['TK_START_BLOCK', 'TK_COMMA', 'TK_END_BLOCK', 'TK_SEMICOLON'])));
            var isUnary = in_array(current_token.text, ['-', '+']) && (in_array(last_type, ['TK_START_BLOCK', 'TK_START_EXPR', 'TK_EQUALS', 'TK_OPERATOR']) || in_array(flags.last_text, tokenizer.line_starters) || flags.last_text === ',');
            if (start_of_statement()) {} else {
                var preserve_statement_flags = !isGeneratorAsterisk;
                handle_whitespace_and_comments(current_token, preserve_statement_flags)
            }
            if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
                output.space_before_token = !0;
                print_token();
                return
            }
            if (current_token.text === '*' && last_type === 'TK_DOT') {
                print_token();
                return
            }
            if (current_token.text === '::') {
                print_token();
                return
            }
            if (last_type === 'TK_OPERATOR' && in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
                allow_wrap_or_preserved_newline()
            }
            if (current_token.text === ':' && flags.in_case) {
                flags.case_body = !0;
                indent();
                print_token();
                print_newline();
                flags.in_case = !1;
                return
            }
            var space_before = !0;
            var space_after = !0;
            var in_ternary = !1;
            if (current_token.text === ':') {
                if (flags.ternary_depth === 0) {
                    space_before = !1
                } else {
                    flags.ternary_depth -= 1;
                    in_ternary = !0
                }
            } else if (current_token.text === '?') {
                flags.ternary_depth += 1
            }
            if (!isUnary && !isGeneratorAsterisk && opt.preserve_newlines && in_array(current_token.text, tokenizer.positionable_operators)) {
                var isColon = current_token.text === ':';
                var isTernaryColon = (isColon && in_ternary);
                var isOtherColon = (isColon && !in_ternary);
                switch (opt.operator_position) {
                    case OPERATOR_POSITION.before_newline:
                        output.space_before_token = !isOtherColon;
                        print_token();
                        if (!isColon || isTernaryColon) {
                            allow_wrap_or_preserved_newline()
                        }
                        output.space_before_token = !0;
                        return;
                    case OPERATOR_POSITION.after_newline:
                        output.space_before_token = !0;
                        if (!isColon || isTernaryColon) {
                            if (get_token(1).wanted_newline) {
                                print_newline(!1, !0)
                            } else {
                                allow_wrap_or_preserved_newline()
                            }
                        } else {
                            output.space_before_token = !1
                        }
                        print_token();
                        output.space_before_token = !0;
                        return;
                    case OPERATOR_POSITION.preserve_newline:
                        if (!isOtherColon) {
                            allow_wrap_or_preserved_newline()
                        }
                        space_before = !(output.just_added_newline() || isOtherColon);
                        output.space_before_token = space_before;
                        print_token();
                        output.space_before_token = !0;
                        return
                }
            }
            if (isGeneratorAsterisk) {
                allow_wrap_or_preserved_newline();
                space_before = !1;
                var next_token = get_token(1);
                space_after = next_token && in_array(next_token.type, ['TK_WORD', 'TK_RESERVED'])
            } else if (current_token.text === '...') {
                allow_wrap_or_preserved_newline();
                space_before = last_type === 'TK_START_BLOCK';
                space_after = !1
            } else if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
                space_before = !1;
                space_after = !1;
                if (current_token.wanted_newline && (current_token.text === '--' || current_token.text === '++')) {
                    print_newline(!1, !0)
                }
                if (flags.last_text === ';' && is_expression(flags.mode)) {
                    space_before = !0
                }
                if (last_type === 'TK_RESERVED') {
                    space_before = !0
                } else if (last_type === 'TK_END_EXPR') {
                    space_before = !(flags.last_text === ']' && (current_token.text === '--' || current_token.text === '++'))
                } else if (last_type === 'TK_OPERATOR') {
                    space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(flags.last_text, ['--', '-', '++', '+']);
                    if (in_array(current_token.text, ['+', '-']) && in_array(flags.last_text, ['--', '++'])) {
                        space_after = !0
                    }
                }
                if (((flags.mode === MODE.BlockStatement && !flags.inline_frame) || flags.mode === MODE.Statement) && (flags.last_text === '{' || flags.last_text === ';')) {
                    print_newline()
                }
            }
            output.space_before_token = output.space_before_token || space_before;
            print_token();
            output.space_before_token = space_after
        }

        function handle_block_comment(preserve_statement_flags) {
            if (output.raw) {
                output.add_raw_token(current_token);
                if (current_token.directives && current_token.directives.preserve === 'end') {
                    output.raw = opt.test_output_raw
                }
                return
            }
            if (current_token.directives) {
                print_newline(!1, preserve_statement_flags);
                print_token();
                if (current_token.directives.preserve === 'start') {
                    output.raw = !0
                }
                print_newline(!1, !0);
                return
            }
            if (!acorn.newline.test(current_token.text) && !current_token.wanted_newline) {
                output.space_before_token = !0;
                print_token();
                output.space_before_token = !0;
                return
            }
            var lines = split_linebreaks(current_token.text);
            var j;
            var javadoc = !1;
            var starless = !1;
            var lastIndent = current_token.whitespace_before;
            var lastIndentLength = lastIndent.length;
            print_newline(!1, preserve_statement_flags);
            if (lines.length > 1) {
                javadoc = all_lines_start_with(lines.slice(1), '*');
                starless = each_line_matches_indent(lines.slice(1), lastIndent)
            }
            print_token(lines[0]);
            for (j = 1; j < lines.length; j++) {
                print_newline(!1, !0);
                if (javadoc) {
                    print_token(' ' + ltrim(lines[j]))
                } else if (starless && lines[j].length > lastIndentLength) {
                    print_token(lines[j].substring(lastIndentLength))
                } else {
                    output.add_token(lines[j])
                }
            }
            print_newline(!1, preserve_statement_flags)
        }

        function handle_comment(preserve_statement_flags) {
            if (current_token.wanted_newline) {
                print_newline(!1, preserve_statement_flags)
            } else {
                output.trim(!0)
            }
            output.space_before_token = !0;
            print_token();
            print_newline(!1, preserve_statement_flags)
        }

        function handle_dot() {
            if (start_of_statement()) {} else {
                handle_whitespace_and_comments(current_token, !0)
            }
            if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
                output.space_before_token = !0
            } else {
                allow_wrap_or_preserved_newline(flags.last_text === ')' && opt.break_chained_methods)
            }
            print_token()
        }

        function handle_unknown(preserve_statement_flags) {
            print_token();
            if (current_token.text[current_token.text.length - 1] === '\n') {
                print_newline(!1, preserve_statement_flags)
            }
        }

        function handle_eof() {
            while (flags.mode === MODE.Statement) {
                restore_mode()
            }
            handle_whitespace_and_comments(current_token)
        }
    }
    module.exports.Beautifier = Beautifier
}), (function(module, exports) {
    function InputScanner(input) {
        var _input = input || '';
        var _input_length = _input.length;
        var _position = 0;
        this.back = function() {
            _position -= 1
        };
        this.hasNext = function() {
            return _position < _input_length
        };
        this.next = function() {
            var val = null;
            if (this.hasNext()) {
                val = _input.charAt(_position);
                _position += 1
            }
            return val
        };
        this.peek = function(index) {
            var val = null;
            index = index || 0;
            index += _position;
            if (index >= 0 && index < _input_length) {
                val = _input.charAt(index)
            }
            return val
        };
        this.peekCharCode = function(index) {
            var val = 0;
            index = index || 0;
            index += _position;
            if (index >= 0 && index < _input_length) {
                val = _input.charCodeAt(index)
            }
            return val
        };
        this.test = function(pattern, index) {
            index = index || 0;
            pattern.lastIndex = _position + index;
            return pattern.test(_input)
        };
        this.testChar = function(pattern, index) {
            var val = this.peek(index);
            return val !== null && pattern.test(val)
        };
        this.match = function(pattern) {
            pattern.lastIndex = _position;
            var pattern_match = pattern.exec(_input);
            if (pattern_match && pattern_match.index === _position) {
                _position += pattern_match[0].length
            } else {
                pattern_match = null
            }
            return pattern_match
        }
    }
    module.exports.InputScanner = InputScanner
}), (function(module, exports) {
    function mergeOpts(allOptions, targetType) {
        var finalOpts = {};
        var name;
        for (name in allOptions) {
            if (name !== targetType) {
                finalOpts[name] = allOptions[name]
            }
        }
        if (targetType in allOptions) {
            for (name in allOptions[targetType]) {
                finalOpts[name] = allOptions[targetType][name]
            }
        }
        return finalOpts
    }
    module.exports.mergeOpts = mergeOpts
}), (function(module, exports) {
    function OutputLine(parent) {
        var _character_count = 0;
        var _indent_count = -1;
        var _items = [];
        var _empty = !0;
        this.set_indent = function(level) {
            _character_count = parent.baseIndentLength + level * parent.indent_length;
            _indent_count = level
        };
        this.get_character_count = function() {
            return _character_count
        };
        this.is_empty = function() {
            return _empty
        };
        this.last = function() {
            if (!this._empty) {
                return _items[_items.length - 1]
            } else {
                return null
            }
        };
        this.push = function(input) {
            _items.push(input);
            _character_count += input.length;
            _empty = !1
        };
        this.pop = function() {
            var item = null;
            if (!_empty) {
                item = _items.pop();
                _character_count -= item.length;
                _empty = _items.length === 0
            }
            return item
        };
        this.remove_indent = function() {
            if (_indent_count > 0) {
                _indent_count -= 1;
                _character_count -= parent.indent_length
            }
        };
        this.trim = function() {
            while (this.last() === ' ') {
                _items.pop();
                _character_count -= 1
            }
            _empty = _items.length === 0
        };
        this.toString = function() {
            var result = '';
            if (!this._empty) {
                if (_indent_count >= 0) {
                    result = parent.indent_cache[_indent_count]
                }
                result += _items.join('')
            }
            return result
        }
    }

    function Output(indent_string, baseIndentString) {
        baseIndentString = baseIndentString || '';
        this.indent_cache = [baseIndentString];
        this.baseIndentLength = baseIndentString.length;
        this.indent_length = indent_string.length;
        this.raw = !1;
        var lines = [];
        this.baseIndentString = baseIndentString;
        this.indent_string = indent_string;
        this.previous_line = null;
        this.current_line = null;
        this.space_before_token = !1;
        this.add_outputline = function() {
            this.previous_line = this.current_line;
            this.current_line = new OutputLine(this);
            lines.push(this.current_line)
        };
        this.add_outputline();
        this.get_line_number = function() {
            return lines.length
        };
        this.add_new_line = function(force_newline) {
            if (this.get_line_number() === 1 && this.just_added_newline()) {
                return !1
            }
            if (force_newline || !this.just_added_newline()) {
                if (!this.raw) {
                    this.add_outputline()
                }
                return !0
            }
            return !1
        };
        this.get_code = function(end_with_newline, eol) {
            var sweet_code = lines.join('\n').replace(/[\r\n\t ]+$/, '');
            if (end_with_newline) {
                sweet_code += '\n'
            }
            if (eol !== '\n') {
                sweet_code = sweet_code.replace(/[\n]/g, eol)
            }
            return sweet_code
        };
        this.set_indent = function(level) {
            if (lines.length > 1) {
                while (level >= this.indent_cache.length) {
                    this.indent_cache.push(this.indent_cache[this.indent_cache.length - 1] + this.indent_string)
                }
                this.current_line.set_indent(level);
                return !0
            }
            this.current_line.set_indent(0);
            return !1
        };
        this.add_raw_token = function(token) {
            for (var x = 0; x < token.newlines; x++) {
                this.add_outputline()
            }
            this.current_line.push(token.whitespace_before);
            this.current_line.push(token.text);
            this.space_before_token = !1
        };
        this.add_token = function(printable_token) {
            this.add_space_before_token();
            this.current_line.push(printable_token)
        };
        this.add_space_before_token = function() {
            if (this.space_before_token && !this.just_added_newline()) {
                this.current_line.push(' ')
            }
            this.space_before_token = !1
        };
        this.remove_indent = function(index) {
            var output_length = lines.length;
            while (index < output_length) {
                lines[index].remove_indent();
                index++
            }
        };
        this.trim = function(eat_newlines) {
            eat_newlines = (eat_newlines === undefined) ? !1 : eat_newlines;
            this.current_line.trim(indent_string, baseIndentString);
            while (eat_newlines && lines.length > 1 && this.current_line.is_empty()) {
                lines.pop();
                this.current_line = lines[lines.length - 1];
                this.current_line.trim()
            }
            this.previous_line = lines.length > 1 ? lines[lines.length - 2] : null
        };
        this.just_added_newline = function() {
            return this.current_line.is_empty()
        };
        this.just_added_blankline = function() {
            if (this.just_added_newline()) {
                if (lines.length === 1) {
                    return !0
                }
                var line = lines[lines.length - 2];
                return line.is_empty()
            }
            return !1
        }
    }
    module.exports.Output = Output
}), (function(module, exports) {
    function Token(type, text, newlines, whitespace_before, parent) {
        this.type = type;
        this.text = text;
        this.comments_before = [];
        this.comments_after = [];
        this.newlines = newlines || 0;
        this.wanted_newline = newlines > 0;
        this.whitespace_before = whitespace_before || '';
        this.parent = parent || null;
        this.opened = null;
        this.directives = null
    }
    module.exports.Token = Token
}), (function(module, exports, __webpack_require__) {
    var Beautifier = __webpack_require__(1).Beautifier;

    function js_beautify(js_source_text, options) {
        var beautifier = new Beautifier(js_source_text, options);
        return beautifier.beautify()
    }
    module.exports = js_beautify
}), (function(module, exports, __webpack_require__) {
    var InputScanner = __webpack_require__(2).InputScanner;
    var Token = __webpack_require__(5).Token;
    var acorn = __webpack_require__(0);

    function trim(s) {
        return s.replace(/^\s+|\s+$/g, '')
    }

    function in_array(what, arr) {
        for (var i = 0; i < arr.length; i += 1) {
            if (arr[i] === what) {
                return !0
            }
        }
        return !1
    }

    function Tokenizer(input_string, opts) {
        var whitespace = "\n\r\t ".split('');
        var digit = /[0-9]/;
        var digit_bin = /[01]/;
        var digit_oct = /[01234567]/;
        var digit_hex = /[0123456789abcdefABCDEF]/;
        this.positionable_operators = '!= !== % & && * ** + - / : < << <= == === > >= >> >>> ? ^ | ||'.split(' ');
        var punct = this.positionable_operators.concat('! %= &= *= **= ++ += , -- -= /= :: <<= = => >>= >>>= ^= |= ~ ...'.split(' '));
        this.line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
        var reserved_words = this.line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as']);
        var block_comment_pattern = /([\s\S]*?)((?:\*\/)|$)/g;
        var comment_pattern = /([^\n\r\u2028\u2029]*)/g;
        var directives_block_pattern = /\/\* beautify( \w+[:]\w+)+ \*\//g;
        var directive_pattern = / (\w+)[:](\w+)/g;
        var directives_end_ignore_pattern = /([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g;
        var template_pattern = /((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;
        var n_newlines, whitespace_before_token, in_html_comment, tokens;
        var input;
        this.tokenize = function() {
            input = new InputScanner(input_string);
            in_html_comment = !1;
            tokens = [];
            var next, last;
            var token_values;
            var open = null;
            var open_stack = [];
            var comments = [];
            while (!(last && last.type === 'TK_EOF')) {
                token_values = tokenize_next();
                next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
                while (next.type === 'TK_COMMENT' || next.type === 'TK_BLOCK_COMMENT' || next.type === 'TK_UNKNOWN') {
                    if (next.type === 'TK_BLOCK_COMMENT') {
                        next.directives = token_values[2]
                    }
                    comments.push(next);
                    token_values = tokenize_next();
                    next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token)
                }
                if (comments.length) {
                    next.comments_before = comments;
                    comments = []
                }
                if (next.type === 'TK_START_BLOCK' || next.type === 'TK_START_EXPR') {
                    next.parent = last;
                    open_stack.push(open);
                    open = next
                } else if ((next.type === 'TK_END_BLOCK' || next.type === 'TK_END_EXPR') && (open && ((next.text === ']' && open.text === '[') || (next.text === ')' && open.text === '(') || (next.text === '}' && open.text === '{')))) {
                    next.parent = open.parent;
                    next.opened = open;
                    open = open_stack.pop()
                }
                tokens.push(next);
                last = next
            }
            return tokens
        };

        function get_directives(text) {
            if (!text.match(directives_block_pattern)) {
                return null
            }
            var directives = {};
            directive_pattern.lastIndex = 0;
            var directive_match = directive_pattern.exec(text);
            while (directive_match) {
                directives[directive_match[1]] = directive_match[2];
                directive_match = directive_pattern.exec(text)
            }
            return directives
        }

        function tokenize_next() {
            var resulting_string;
            var whitespace_on_this_line = [];
            n_newlines = 0;
            whitespace_before_token = '';
            var c = input.next();
            if (c === null) {
                return ['', 'TK_EOF']
            }
            var last_token;
            if (tokens.length) {
                last_token = tokens[tokens.length - 1]
            } else {
                last_token = new Token('TK_START_BLOCK', '{')
            }
            while (in_array(c, whitespace)) {
                if (acorn.newline.test(c)) {
                    if (!(c === '\n' && input.peek(-2) === '\r')) {
                        n_newlines += 1;
                        whitespace_on_this_line = []
                    }
                } else {
                    whitespace_on_this_line.push(c)
                }
                c = input.next();
                if (c === null) {
                    return ['', 'TK_EOF']
                }
            }
            if (whitespace_on_this_line.length) {
                whitespace_before_token = whitespace_on_this_line.join('')
            }
            if (digit.test(c) || (c === '.' && input.testChar(digit))) {
                var allow_decimal = !0;
                var allow_e = !0;
                var allow_bigint = !0;
                var local_digit = digit;
                if (c === '0' && input.testChar(/[XxOoBb]/)) {
                    allow_decimal = !1;
                    allow_e = !1;
                    if (input.testChar(/[Bb]/)) {
                        local_digit = digit_bin
                    } else if (input.testChar(/[Oo]/)) {
                        local_digit = digit_oct
                    } else {
                        local_digit = digit_hex
                    }
                    c += input.next()
                } else if (c === '.') {
                    allow_decimal = !1;
                    allow_bigint = !1
                } else {
                    c = '';
                    input.back()
                }
                while (input.testChar(local_digit)) {
                    c += input.next();
                    if (allow_decimal && input.peek() === '.') {
                        c += input.next();
                        allow_decimal = !1;
                        allow_bigint = !1
                    }
                    if (allow_e && input.testChar(/[Ee]/)) {
                        c += input.next();
                        if (input.testChar(/[+-]/)) {
                            c += input.next()
                        }
                        allow_e = !1;
                        allow_decimal = !1;
                        allow_bigint = !1
                    }
                }
                if (allow_bigint && input.peek() === 'n') {
                    c += input.next()
                }
                return [c, 'TK_WORD']
            }
            if (acorn.isIdentifierStart(input.peekCharCode(-1))) {
                if (input.hasNext()) {
                    while (acorn.isIdentifierChar(input.peekCharCode())) {
                        c += input.next();
                        if (!input.hasNext()) {
                            break
                        }
                    }
                }
                if (!(last_token.type === 'TK_DOT' || (last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['set', 'get']))) && in_array(c, reserved_words)) {
                    if (c === 'in' || c === 'of') {
                        return [c, 'TK_OPERATOR']
                    }
                    return [c, 'TK_RESERVED']
                }
                return [c, 'TK_WORD']
            }
            if (c === '(' || c === '[') {
                return [c, 'TK_START_EXPR']
            }
            if (c === ')' || c === ']') {
                return [c, 'TK_END_EXPR']
            }
            if (c === '{') {
                return [c, 'TK_START_BLOCK']
            }
            if (c === '}') {
                return [c, 'TK_END_BLOCK']
            }
            if (c === ';') {
                return [c, 'TK_SEMICOLON']
            }
            if (c === '/') {
                var comment = '';
                var comment_match;
                if (input.peek() === '*') {
                    input.next();
                    comment_match = input.match(block_comment_pattern);
                    comment = '/*' + comment_match[0];
                    var directives = get_directives(comment);
                    if (directives && directives.ignore === 'start') {
                        comment_match = input.match(directives_end_ignore_pattern);
                        comment += comment_match[0]
                    }
                    comment = comment.replace(acorn.allLineBreaks, '\n');
                    return [comment, 'TK_BLOCK_COMMENT', directives]
                }
                if (input.peek() === '/') {
                    input.next();
                    comment_match = input.match(comment_pattern);
                    comment = '//' + comment_match[0];
                    return [comment, 'TK_COMMENT']
                }
            }
            var startXmlRegExp = /<()([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;
            if (c === '`' || c === "'" || c === '"' || ((c === '/') || (opts.e4x && c === "<" && input.test(startXmlRegExp, -1))) && ((last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) || (last_token.type === 'TK_END_EXPR' && last_token.text === ')' && last_token.parent && last_token.parent.type === 'TK_RESERVED' && in_array(last_token.parent.text, ['if', 'while', 'for'])) || (in_array(last_token.type, ['TK_COMMENT', 'TK_START_EXPR', 'TK_START_BLOCK', 'TK_END_BLOCK', 'TK_OPERATOR', 'TK_EQUALS', 'TK_EOF', 'TK_SEMICOLON', 'TK_COMMA'])))) {
                var sep = c,
                    esc = !1,
                    has_char_escapes = !1;
                resulting_string = c;
                if (sep === '/') {
                    var in_char_class = !1;
                    while (input.hasNext() && ((esc || in_char_class || input.peek() !== sep) && !input.testChar(acorn.newline))) {
                        resulting_string += input.peek();
                        if (!esc) {
                            esc = input.peek() === '\\';
                            if (input.peek() === '[') {
                                in_char_class = !0
                            } else if (input.peek() === ']') {
                                in_char_class = !1
                            }
                        } else {
                            esc = !1
                        }
                        input.next()
                    }
                } else if (opts.e4x && sep === '<') {
                    var xmlRegExp = /[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;
                    input.back();
                    var xmlStr = '';
                    var match = input.match(startXmlRegExp);
                    if (match) {
                        var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
                        var isCurlyRoot = rootTag.indexOf('{') === 0;
                        var depth = 0;
                        while (match) {
                            var isEndTag = !!match[1];
                            var tagName = match[2];
                            var isSingletonTag = (!!match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
                            if (!isSingletonTag && (tagName === rootTag || (isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}')))) {
                                if (isEndTag) {
                                    --depth
                                } else {
                                    ++depth
                                }
                            }
                            xmlStr += match[0];
                            if (depth <= 0) {
                                break
                            }
                            match = input.match(xmlRegExp)
                        }
                        if (!match) {
                            xmlStr += input.match(/[\s\S]*/g)[0]
                        }
                        xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
                        return [xmlStr, "TK_STRING"]
                    }
                } else {
                    var parse_string = function(delimiter, allow_unescaped_newlines, start_sub) {
                        var current_char;
                        while (input.hasNext()) {
                            current_char = input.peek();
                            if (!(esc || (current_char !== delimiter && (allow_unescaped_newlines || !acorn.newline.test(current_char))))) {
                                break
                            }
                            if ((esc || allow_unescaped_newlines) && acorn.newline.test(current_char)) {
                                if (current_char === '\r' && input.peek(1) === '\n') {
                                    input.next();
                                    current_char = input.peek()
                                }
                                resulting_string += '\n'
                            } else {
                                resulting_string += current_char
                            }
                            if (esc) {
                                if (current_char === 'x' || current_char === 'u') {
                                    has_char_escapes = !0
                                }
                                esc = !1
                            } else {
                                esc = current_char === '\\'
                            }
                            input.next();
                            if (start_sub && resulting_string.indexOf(start_sub, resulting_string.length - start_sub.length) !== -1) {
                                if (delimiter === '`') {
                                    parse_string('}', allow_unescaped_newlines, '`')
                                } else {
                                    parse_string('`', allow_unescaped_newlines, '${')
                                }
                                if (input.hasNext()) {
                                    resulting_string += input.next()
                                }
                            }
                        }
                    };
                    if (sep === '`') {
                        parse_string('`', !0, '${')
                    } else {
                        parse_string(sep)
                    }
                }
                if (has_char_escapes && opts.unescape_strings) {
                    resulting_string = unescape_string(resulting_string)
                }
                if (input.peek() === sep) {
                    resulting_string += sep;
                    input.next();
                    if (sep === '/') {
                        while (input.hasNext() && acorn.isIdentifierStart(input.peekCharCode())) {
                            resulting_string += input.next()
                        }
                    }
                }
                return [resulting_string, 'TK_STRING']
            }
            if (c === '#') {
                if (tokens.length === 0 && input.peek() === '!') {
                    resulting_string = c;
                    while (input.hasNext() && c !== '\n') {
                        c = input.next();
                        resulting_string += c
                    }
                    return [trim(resulting_string) + '\n', 'TK_UNKNOWN']
                }
                var sharp = '#';
                if (input.hasNext() && input.testChar(digit)) {
                    do {
                        c = input.next();
                        sharp += c
                    } while (input.hasNext() && c !== '#' && c !== '=');
                    if (c === '#') {} else if (input.peek() === '[' && input.peek(1) === ']') {
                        sharp += '[]';
                        input.next();
                        input.next()
                    } else if (input.peek() === '{' && input.peek(1) === '}') {
                        sharp += '{}';
                        input.next();
                        input.next()
                    }
                    return [sharp, 'TK_WORD']
                }
            }
            if (c === '<' && (input.peek() === '?' || input.peek() === '%')) {
                input.back();
                var template_match = input.match(template_pattern);
                if (template_match) {
                    c = template_match[0];
                    c = c.replace(acorn.allLineBreaks, '\n');
                    return [c, 'TK_STRING']
                }
            }
            if (c === '<' && input.match(/\!--/g)) {
                c = '<!--';
                while (input.hasNext() && !input.testChar(acorn.newline)) {
                    c += input.next()
                }
                in_html_comment = !0;
                return [c, 'TK_COMMENT']
            }
            if (c === '-' && in_html_comment && input.match(/->/g)) {
                in_html_comment = !1;
                return ['-->', 'TK_COMMENT']
            }
            if (c === '.') {
                if (input.peek() === '.' && input.peek(1) === '.') {
                    c += input.next() + input.next();
                    return [c, 'TK_OPERATOR']
                }
                return [c, 'TK_DOT']
            }
            if (in_array(c, punct)) {
                while (input.hasNext() && in_array(c + input.peek(), punct)) {
                    c += input.next();
                    if (!input.hasNext()) {
                        break
                    }
                }
                if (c === ',') {
                    return [c, 'TK_COMMA']
                } else if (c === '=') {
                    return [c, 'TK_EQUALS']
                } else {
                    return [c, 'TK_OPERATOR']
                }
            }
            return [c, 'TK_UNKNOWN']
        }

        function unescape_string(s) {
            var out = '',
                escaped = 0;
            var input_scan = new InputScanner(s);
            var matched = null;
            while (input_scan.hasNext()) {
                matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);
                if (matched) {
                    out += matched[0]
                }
                if (input_scan.peek() === '\\') {
                    input_scan.next();
                    if (input_scan.peek() === 'x') {
                        matched = input_scan.match(/x([0-9A-Fa-f]{2})/g)
                    } else if (input_scan.peek() === 'u') {
                        matched = input_scan.match(/u([0-9A-Fa-f]{4})/g)
                    } else {
                        out += '\\';
                        if (input_scan.hasNext()) {
                            out += input_scan.next()
                        }
                        continue
                    }
                    if (!matched) {
                        return s
                    }
                    escaped = parseInt(matched[1], 16);
                    if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
                        return s
                    } else if (escaped >= 0x00 && escaped < 0x20) {
                        out += '\\' + matched[0];
                        continue
                    } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
                        out += '\\' + String.fromCharCode(escaped)
                    } else {
                        out += String.fromCharCode(escaped)
                    }
                }
            }
            return out
        }
    }
    module.exports.Tokenizer = Tokenizer
})]);
var js_beautify = legacy_beautify_js;
if (typeof define === "function" && define.amd) {
    define([], function() {
        return {
            js_beautify: js_beautify
        }
    })
} else if (typeof exports !== "undefined") {
    exports.js_beautify = js_beautify
} else if (typeof window !== "undefined") {
    window.js_beautify = js_beautify
} else if (typeof global !== "undefined") {
    global.js_beautify = js_beautify
}