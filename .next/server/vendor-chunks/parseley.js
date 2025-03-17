"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parseley";
exports.ids = ["vendor-chunks/parseley"];
exports.modules = {

/***/ "(action-browser)/./node_modules/parseley/lib/parseley.mjs":
/*!************************************************!*\
  !*** ./node_modules/parseley/lib/parseley.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ast: () => (/* binding */ ast),\n/* harmony export */   compareSelectors: () => (/* binding */ compareSelectors),\n/* harmony export */   compareSpecificity: () => (/* binding */ compareSpecificity),\n/* harmony export */   normalize: () => (/* binding */ normalize),\n/* harmony export */   parse: () => (/* binding */ parse),\n/* harmony export */   parse1: () => (/* binding */ parse1),\n/* harmony export */   serialize: () => (/* binding */ serialize)\n/* harmony export */ });\n/* harmony import */ var leac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leac */ \"(action-browser)/./node_modules/leac/lib/leac.mjs\");\n/* harmony import */ var peberminta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! peberminta */ \"(action-browser)/./node_modules/peberminta/lib/core.mjs\");\n\n\n\nvar ast = /*#__PURE__*/Object.freeze({\n    __proto__: null\n});\n\nconst ws = `(?:[ \\\\t\\\\r\\\\n\\\\f]*)`;\nconst nl = `(?:\\\\n|\\\\r\\\\n|\\\\r|\\\\f)`;\nconst nonascii = `[^\\\\x00-\\\\x7F]`;\nconst unicode = `(?:\\\\\\\\[0-9a-f]{1,6}(?:\\\\r\\\\n|[ \\\\n\\\\r\\\\t\\\\f])?)`;\nconst escape = `(?:\\\\\\\\[^\\\\n\\\\r\\\\f0-9a-f])`;\nconst nmstart = `(?:[_a-z]|${nonascii}|${unicode}|${escape})`;\nconst nmchar = `(?:[_a-z0-9-]|${nonascii}|${unicode}|${escape})`;\nconst name = `(?:${nmchar}+)`;\nconst ident = `(?:[-]?${nmstart}${nmchar}*)`;\nconst string1 = `'([^\\\\n\\\\r\\\\f\\\\\\\\']|\\\\\\\\${nl}|${nonascii}|${unicode}|${escape})*'`;\nconst string2 = `\"([^\\\\n\\\\r\\\\f\\\\\\\\\"]|\\\\\\\\${nl}|${nonascii}|${unicode}|${escape})*\"`;\nconst lexSelector = (0,leac__WEBPACK_IMPORTED_MODULE_0__.createLexer)([\n    { name: 'ws', regex: new RegExp(ws) },\n    { name: 'hash', regex: new RegExp(`#${name}`, 'i') },\n    { name: 'ident', regex: new RegExp(ident, 'i') },\n    { name: 'str1', regex: new RegExp(string1, 'i') },\n    { name: 'str2', regex: new RegExp(string2, 'i') },\n    { name: '*' },\n    { name: '.' },\n    { name: ',' },\n    { name: '[' },\n    { name: ']' },\n    { name: '=' },\n    { name: '>' },\n    { name: '|' },\n    { name: '+' },\n    { name: '~' },\n    { name: '^' },\n    { name: '$' },\n]);\nconst lexEscapedString = (0,leac__WEBPACK_IMPORTED_MODULE_0__.createLexer)([\n    { name: 'unicode', regex: new RegExp(unicode, 'i') },\n    { name: 'escape', regex: new RegExp(escape, 'i') },\n    { name: 'any', regex: new RegExp('[\\\\s\\\\S]', 'i') }\n]);\nfunction sumSpec([a0, a1, a2], [b0, b1, b2]) {\n    return [a0 + b0, a1 + b1, a2 + b2];\n}\nfunction sumAllSpec(ss) {\n    return ss.reduce(sumSpec, [0, 0, 0]);\n}\nconst unicodeEscapedSequence_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'unicode' ? String.fromCodePoint(parseInt(t.text.slice(1), 16)) : undefined);\nconst escapedSequence_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'escape' ? t.text.slice(1) : undefined);\nconst anyChar_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'any' ? t.text : undefined);\nconst escapedString_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.map(peberminta__WEBPACK_IMPORTED_MODULE_1__.many(peberminta__WEBPACK_IMPORTED_MODULE_1__.or(unicodeEscapedSequence_, escapedSequence_, anyChar_)), (cs) => cs.join(''));\nfunction unescape(escapedString) {\n    const lexerResult = lexEscapedString(escapedString);\n    const result = escapedString_({ tokens: lexerResult.tokens, options: undefined }, 0);\n    return result.value;\n}\nfunction literal(name) {\n    return peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === name ? true : undefined);\n}\nconst whitespace_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'ws' ? null : undefined);\nconst optionalWhitespace_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.option(whitespace_, null);\nfunction optionallySpaced(parser) {\n    return peberminta__WEBPACK_IMPORTED_MODULE_1__.middle(optionalWhitespace_, parser, optionalWhitespace_);\n}\nconst identifier_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'ident' ? unescape(t.text) : undefined);\nconst hashId_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name === 'hash' ? unescape(t.text.slice(1)) : undefined);\nconst string_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => t.name.startsWith('str') ? unescape(t.text.slice(1, -1)) : undefined);\nconst namespace_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.left(peberminta__WEBPACK_IMPORTED_MODULE_1__.option(identifier_, ''), literal('|'));\nconst qualifiedName_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(namespace_, identifier_, (ns, name) => ({ name: name, namespace: ns })), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(identifier_, (name) => ({ name: name, namespace: null })));\nconst uniSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(namespace_, literal('*'), (ns) => ({ type: 'universal', namespace: ns, specificity: [0, 0, 0] })), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(literal('*'), () => ({ type: 'universal', namespace: null, specificity: [0, 0, 0] })));\nconst tagSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.map(qualifiedName_, ({ name, namespace }) => ({\n    type: 'tag',\n    name: name,\n    namespace: namespace,\n    specificity: [0, 0, 1]\n}));\nconst classSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('.'), identifier_, (fullstop, name) => ({\n    type: 'class',\n    name: name,\n    specificity: [0, 1, 0]\n}));\nconst idSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.map(hashId_, (name) => ({\n    type: 'id',\n    name: name,\n    specificity: [1, 0, 0]\n}));\nconst attrModifier_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.token((t) => {\n    if (t.name === 'ident') {\n        if (t.text === 'i' || t.text === 'I') {\n            return 'i';\n        }\n        if (t.text === 's' || t.text === 'S') {\n            return 's';\n        }\n    }\n    return undefined;\n});\nconst attrValue_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(string_, peberminta__WEBPACK_IMPORTED_MODULE_1__.option(peberminta__WEBPACK_IMPORTED_MODULE_1__.right(optionalWhitespace_, attrModifier_), null), (v, mod) => ({ value: v, modifier: mod })), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(identifier_, peberminta__WEBPACK_IMPORTED_MODULE_1__.option(peberminta__WEBPACK_IMPORTED_MODULE_1__.right(whitespace_, attrModifier_), null), (v, mod) => ({ value: v, modifier: mod })));\nconst attrMatcher_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.choice(peberminta__WEBPACK_IMPORTED_MODULE_1__.map(literal('='), () => '='), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('~'), literal('='), () => '~='), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('|'), literal('='), () => '|='), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('^'), literal('='), () => '^='), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('$'), literal('='), () => '$='), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('*'), literal('='), () => '*='));\nconst attrPresenceSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.abc(literal('['), optionallySpaced(qualifiedName_), literal(']'), (lbr, { name, namespace }) => ({\n    type: 'attrPresence',\n    name: name,\n    namespace: namespace,\n    specificity: [0, 1, 0]\n}));\nconst attrValueSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.middle(literal('['), peberminta__WEBPACK_IMPORTED_MODULE_1__.abc(optionallySpaced(qualifiedName_), attrMatcher_, optionallySpaced(attrValue_), ({ name, namespace }, matcher, { value, modifier }) => ({\n    type: 'attrValue',\n    name: name,\n    namespace: namespace,\n    matcher: matcher,\n    value: value,\n    modifier: modifier,\n    specificity: [0, 1, 0]\n})), literal(']'));\nconst attrSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(attrPresenceSelector_, attrValueSelector_);\nconst typeSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(uniSelector_, tagSelector_);\nconst subclassSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.choice(idSelector_, classSelector_, attrSelector_);\nconst compoundSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.map(peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(peberminta__WEBPACK_IMPORTED_MODULE_1__.flatten(typeSelector_, peberminta__WEBPACK_IMPORTED_MODULE_1__.many(subclassSelector_)), peberminta__WEBPACK_IMPORTED_MODULE_1__.many1(subclassSelector_)), (ss) => {\n    return {\n        type: 'compound',\n        list: ss,\n        specificity: sumAllSpec(ss.map(s => s.specificity))\n    };\n});\nconst combinator_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.choice(peberminta__WEBPACK_IMPORTED_MODULE_1__.map(literal('>'), () => '>'), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(literal('+'), () => '+'), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(literal('~'), () => '~'), peberminta__WEBPACK_IMPORTED_MODULE_1__.ab(literal('|'), literal('|'), () => '||'));\nconst combinatorSeparator_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.eitherOr(optionallySpaced(combinator_), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(whitespace_, () => ' '));\nconst complexSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.leftAssoc2(compoundSelector_, peberminta__WEBPACK_IMPORTED_MODULE_1__.map(combinatorSeparator_, (c) => (left, right) => ({\n    type: 'compound',\n    list: [...right.list, { type: 'combinator', combinator: c, left: left, specificity: left.specificity }],\n    specificity: sumSpec(left.specificity, right.specificity)\n})), compoundSelector_);\nconst listSelector_ = peberminta__WEBPACK_IMPORTED_MODULE_1__.leftAssoc2(peberminta__WEBPACK_IMPORTED_MODULE_1__.map(complexSelector_, (s) => ({ type: 'list', list: [s] })), peberminta__WEBPACK_IMPORTED_MODULE_1__.map(optionallySpaced(literal(',')), () => (acc, next) => ({ type: 'list', list: [...acc.list, next] })), complexSelector_);\nfunction parse_(parser, str) {\n    if (!(typeof str === 'string' || str instanceof String)) {\n        throw new Error('Expected a selector string. Actual input is not a string!');\n    }\n    const lexerResult = lexSelector(str);\n    if (!lexerResult.complete) {\n        throw new Error(`The input \"${str}\" was only partially tokenized, stopped at offset ${lexerResult.offset}!\\n` +\n            prettyPrintPosition(str, lexerResult.offset));\n    }\n    const result = optionallySpaced(parser)({ tokens: lexerResult.tokens, options: undefined }, 0);\n    if (!result.matched) {\n        throw new Error(`No match for \"${str}\" input!`);\n    }\n    if (result.position < lexerResult.tokens.length) {\n        const token = lexerResult.tokens[result.position];\n        throw new Error(`The input \"${str}\" was only partially parsed, stopped at offset ${token.offset}!\\n` +\n            prettyPrintPosition(str, token.offset, token.len));\n    }\n    return result.value;\n}\nfunction prettyPrintPosition(str, offset, len = 1) {\n    return `${str.replace(/(\\t)|(\\r)|(\\n)/g, (m, t, r) => t ? '\\u2409' : r ? '\\u240d' : '\\u240a')}\\n${''.padEnd(offset)}${'^'.repeat(len)}`;\n}\nfunction parse(str) {\n    return parse_(listSelector_, str);\n}\nfunction parse1(str) {\n    return parse_(complexSelector_, str);\n}\n\nfunction serialize(selector) {\n    if (!selector.type) {\n        throw new Error('This is not an AST node.');\n    }\n    switch (selector.type) {\n        case 'universal':\n            return _serNs(selector.namespace) + '*';\n        case 'tag':\n            return _serNs(selector.namespace) + _serIdent(selector.name);\n        case 'class':\n            return '.' + _serIdent(selector.name);\n        case 'id':\n            return '#' + _serIdent(selector.name);\n        case 'attrPresence':\n            return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}]`;\n        case 'attrValue':\n            return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}${selector.matcher}\"${_serStr(selector.value)}\"${(selector.modifier ? selector.modifier : '')}]`;\n        case 'combinator':\n            return serialize(selector.left) + selector.combinator;\n        case 'compound':\n            return selector.list.reduce((acc, node) => {\n                if (node.type === 'combinator') {\n                    return serialize(node) + acc;\n                }\n                else {\n                    return acc + serialize(node);\n                }\n            }, '');\n        case 'list':\n            return selector.list.map(serialize).join(',');\n    }\n}\nfunction _serNs(ns) {\n    return (ns || ns === '')\n        ? _serIdent(ns) + '|'\n        : '';\n}\nfunction _codePoint(char) {\n    return `\\\\${char.codePointAt(0).toString(16)} `;\n}\nfunction _serIdent(str) {\n    return str.replace(\n    /(^[0-9])|(^-[0-9])|(^-$)|([-0-9a-zA-Z_]|[^\\x00-\\x7F])|(\\x00)|([\\x01-\\x1f]|\\x7f)|([\\s\\S])/g, (m, d1, d2, hy, safe, nl, ctrl, other) => d1 ? _codePoint(d1) :\n        d2 ? '-' + _codePoint(d2.slice(1)) :\n            hy ? '\\\\-' :\n                safe ? safe :\n                    nl ? '\\ufffd' :\n                        ctrl ? _codePoint(ctrl) :\n                            '\\\\' + other);\n}\nfunction _serStr(str) {\n    return str.replace(\n    /(\")|(\\\\)|(\\x00)|([\\x01-\\x1f]|\\x7f)/g, (m, dq, bs, nl, ctrl) => dq ? '\\\\\"' :\n        bs ? '\\\\\\\\' :\n            nl ? '\\ufffd' :\n                _codePoint(ctrl));\n}\nfunction normalize(selector) {\n    if (!selector.type) {\n        throw new Error('This is not an AST node.');\n    }\n    switch (selector.type) {\n        case 'compound': {\n            selector.list.forEach(normalize);\n            selector.list.sort((a, b) => _compareArrays(_getSelectorPriority(a), _getSelectorPriority(b)));\n            break;\n        }\n        case 'combinator': {\n            normalize(selector.left);\n            break;\n        }\n        case 'list': {\n            selector.list.forEach(normalize);\n            selector.list.sort((a, b) => (serialize(a) < serialize(b)) ? -1 : 1);\n            break;\n        }\n    }\n    return selector;\n}\nfunction _getSelectorPriority(selector) {\n    switch (selector.type) {\n        case 'universal':\n            return [1];\n        case 'tag':\n            return [1];\n        case 'id':\n            return [2];\n        case 'class':\n            return [3, selector.name];\n        case 'attrPresence':\n            return [4, serialize(selector)];\n        case 'attrValue':\n            return [5, serialize(selector)];\n        case 'combinator':\n            return [15, serialize(selector)];\n    }\n}\nfunction compareSelectors(a, b) {\n    return _compareArrays(a.specificity, b.specificity);\n}\nfunction compareSpecificity(a, b) {\n    return _compareArrays(a, b);\n}\nfunction _compareArrays(a, b) {\n    if (!Array.isArray(a) || !Array.isArray(b)) {\n        throw new Error('Arguments must be arrays.');\n    }\n    const shorter = (a.length < b.length) ? a.length : b.length;\n    for (let i = 0; i < shorter; i++) {\n        if (a[i] === b[i]) {\n            continue;\n        }\n        return (a[i] < b[i]) ? -1 : 1;\n    }\n    return a.length - b.length;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9wYXJzZWxleS9saWIvcGFyc2VsZXkubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtQztBQUNIOztBQUVoQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsSUFBSTtBQUNyQztBQUNBLDZCQUE2QixTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU87QUFDM0QsZ0NBQWdDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTztBQUM5RCxtQkFBbUIsT0FBTztBQUMxQix3QkFBd0IsUUFBUSxFQUFFLE9BQU87QUFDekMsMkNBQTJDLEdBQUcsR0FBRyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU87QUFDL0UsMkNBQTJDLEdBQUcsR0FBRyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU87QUFDL0Usb0JBQW9CLGlEQUFXO0FBQy9CLE1BQU0sbUNBQW1DO0FBQ3pDLE1BQU0sb0NBQW9DLEtBQUssU0FBUztBQUN4RCxNQUFNLDhDQUE4QztBQUNwRCxNQUFNLCtDQUErQztBQUNyRCxNQUFNLCtDQUErQztBQUNyRCxNQUFNLFdBQVc7QUFDakIsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sV0FBVztBQUNqQixNQUFNLFdBQVc7QUFDakIsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sV0FBVztBQUNqQixNQUFNLFdBQVc7QUFDakIsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sV0FBVztBQUNqQixNQUFNLFdBQVc7QUFDakIsTUFBTSxXQUFXO0FBQ2pCLE1BQU0sV0FBVztBQUNqQjtBQUNBLHlCQUF5QixpREFBVztBQUNwQyxNQUFNLGtEQUFrRDtBQUN4RCxNQUFNLGdEQUFnRDtBQUN0RCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkNBQU87QUFDdkMseUJBQXlCLDZDQUFPO0FBQ2hDLGlCQUFpQiw2Q0FBTztBQUN4Qix1QkFBdUIsMkNBQUssQ0FBQyw0Q0FBTSxDQUFD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QUFDM0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0NBQWtDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaWFscy1hbmQtdHJpYnVsYXRpb25zLy4vbm9kZV9tb2R1bGVzL3BhcnNlbGV5L2xpYi9wYXJzZWxleS5tanM/Y2EyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVMZXhlciB9IGZyb20gJ2xlYWMnO1xuaW1wb3J0ICogYXMgcCBmcm9tICdwZWJlcm1pbnRhJztcblxudmFyIGFzdCA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGxcbn0pO1xuXG5jb25zdCB3cyA9IGAoPzpbIFxcXFx0XFxcXHJcXFxcblxcXFxmXSopYDtcbmNvbnN0IG5sID0gYCg/OlxcXFxufFxcXFxyXFxcXG58XFxcXHJ8XFxcXGYpYDtcbmNvbnN0IG5vbmFzY2lpID0gYFteXFxcXHgwMC1cXFxceDdGXWA7XG5jb25zdCB1bmljb2RlID0gYCg/OlxcXFxcXFxcWzAtOWEtZl17MSw2fSg/OlxcXFxyXFxcXG58WyBcXFxcblxcXFxyXFxcXHRcXFxcZl0pPylgO1xuY29uc3QgZXNjYXBlID0gYCg/OlxcXFxcXFxcW15cXFxcblxcXFxyXFxcXGYwLTlhLWZdKWA7XG5jb25zdCBubXN0YXJ0ID0gYCg/OltfYS16XXwke25vbmFzY2lpfXwke3VuaWNvZGV9fCR7ZXNjYXBlfSlgO1xuY29uc3Qgbm1jaGFyID0gYCg/OltfYS16MC05LV18JHtub25hc2NpaX18JHt1bmljb2RlfXwke2VzY2FwZX0pYDtcbmNvbnN0IG5hbWUgPSBgKD86JHtubWNoYXJ9KylgO1xuY29uc3QgaWRlbnQgPSBgKD86Wy1dPyR7bm1zdGFydH0ke25tY2hhcn0qKWA7XG5jb25zdCBzdHJpbmcxID0gYCcoW15cXFxcblxcXFxyXFxcXGZcXFxcXFxcXCddfFxcXFxcXFxcJHtubH18JHtub25hc2NpaX18JHt1bmljb2RlfXwke2VzY2FwZX0pKidgO1xuY29uc3Qgc3RyaW5nMiA9IGBcIihbXlxcXFxuXFxcXHJcXFxcZlxcXFxcXFxcXCJdfFxcXFxcXFxcJHtubH18JHtub25hc2NpaX18JHt1bmljb2RlfXwke2VzY2FwZX0pKlwiYDtcbmNvbnN0IGxleFNlbGVjdG9yID0gY3JlYXRlTGV4ZXIoW1xuICAgIHsgbmFtZTogJ3dzJywgcmVnZXg6IG5ldyBSZWdFeHAod3MpIH0sXG4gICAgeyBuYW1lOiAnaGFzaCcsIHJlZ2V4OiBuZXcgUmVnRXhwKGAjJHtuYW1lfWAsICdpJykgfSxcbiAgICB7IG5hbWU6ICdpZGVudCcsIHJlZ2V4OiBuZXcgUmVnRXhwKGlkZW50LCAnaScpIH0sXG4gICAgeyBuYW1lOiAnc3RyMScsIHJlZ2V4OiBuZXcgUmVnRXhwKHN0cmluZzEsICdpJykgfSxcbiAgICB7IG5hbWU6ICdzdHIyJywgcmVnZXg6IG5ldyBSZWdFeHAoc3RyaW5nMiwgJ2knKSB9LFxuICAgIHsgbmFtZTogJyonIH0sXG4gICAgeyBuYW1lOiAnLicgfSxcbiAgICB7IG5hbWU6ICcsJyB9LFxuICAgIHsgbmFtZTogJ1snIH0sXG4gICAgeyBuYW1lOiAnXScgfSxcbiAgICB7IG5hbWU6ICc9JyB9LFxuICAgIHsgbmFtZTogJz4nIH0sXG4gICAgeyBuYW1lOiAnfCcgfSxcbiAgICB7IG5hbWU6ICcrJyB9LFxuICAgIHsgbmFtZTogJ34nIH0sXG4gICAgeyBuYW1lOiAnXicgfSxcbiAgICB7IG5hbWU6ICckJyB9LFxuXSk7XG5jb25zdCBsZXhFc2NhcGVkU3RyaW5nID0gY3JlYXRlTGV4ZXIoW1xuICAgIHsgbmFtZTogJ3VuaWNvZGUnLCByZWdleDogbmV3IFJlZ0V4cCh1bmljb2RlLCAnaScpIH0sXG4gICAgeyBuYW1lOiAnZXNjYXBlJywgcmVnZXg6IG5ldyBSZWdFeHAoZXNjYXBlLCAnaScpIH0sXG4gICAgeyBuYW1lOiAnYW55JywgcmVnZXg6IG5ldyBSZWdFeHAoJ1tcXFxcc1xcXFxTXScsICdpJykgfVxuXSk7XG5mdW5jdGlvbiBzdW1TcGVjKFthMCwgYTEsIGEyXSwgW2IwLCBiMSwgYjJdKSB7XG4gICAgcmV0dXJuIFthMCArIGIwLCBhMSArIGIxLCBhMiArIGIyXTtcbn1cbmZ1bmN0aW9uIHN1bUFsbFNwZWMoc3MpIHtcbiAgICByZXR1cm4gc3MucmVkdWNlKHN1bVNwZWMsIFswLCAwLCAwXSk7XG59XG5jb25zdCB1bmljb2RlRXNjYXBlZFNlcXVlbmNlXyA9IHAudG9rZW4oKHQpID0+IHQubmFtZSA9PT0gJ3VuaWNvZGUnID8gU3RyaW5nLmZyb21Db2RlUG9pbnQocGFyc2VJbnQodC50ZXh0LnNsaWNlKDEpLCAxNikpIDogdW5kZWZpbmVkKTtcbmNvbnN0IGVzY2FwZWRTZXF1ZW5jZV8gPSBwLnRva2VuKCh0KSA9PiB0Lm5hbWUgPT09ICdlc2NhcGUnID8gdC50ZXh0LnNsaWNlKDEpIDogdW5kZWZpbmVkKTtcbmNvbnN0IGFueUNoYXJfID0gcC50b2tlbigodCkgPT4gdC5uYW1lID09PSAnYW55JyA/IHQudGV4dCA6IHVuZGVmaW5lZCk7XG5jb25zdCBlc2NhcGVkU3RyaW5nXyA9IHAubWFwKHAubWFueShwLm9yKHVuaWNvZGVFc2NhcGVkU2VxdWVuY2VfLCBlc2NhcGVkU2VxdWVuY2VfLCBhbnlDaGFyXykpLCAoY3MpID0+IGNzLmpvaW4oJycpKTtcbmZ1bmN0aW9uIHVuZXNjYXBlKGVzY2FwZWRTdHJpbmcpIHtcbiAgICBjb25zdCBsZXhlclJlc3VsdCA9IGxleEVzY2FwZWRTdHJpbmcoZXNjYXBlZFN0cmluZyk7XG4gICAgY29uc3QgcmVzdWx0ID0gZXNjYXBlZFN0cmluZ18oeyB0b2tlbnM6IGxleGVyUmVzdWx0LnRva2Vucywgb3B0aW9uczogdW5kZWZpbmVkIH0sIDApO1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG59XG5mdW5jdGlvbiBsaXRlcmFsKG5hbWUpIHtcbiAgICByZXR1cm4gcC50b2tlbigodCkgPT4gdC5uYW1lID09PSBuYW1lID8gdHJ1ZSA6IHVuZGVmaW5lZCk7XG59XG5jb25zdCB3aGl0ZXNwYWNlXyA9IHAudG9rZW4oKHQpID0+IHQubmFtZSA9PT0gJ3dzJyA/IG51bGwgOiB1bmRlZmluZWQpO1xuY29uc3Qgb3B0aW9uYWxXaGl0ZXNwYWNlXyA9IHAub3B0aW9uKHdoaXRlc3BhY2VfLCBudWxsKTtcbmZ1bmN0aW9uIG9wdGlvbmFsbHlTcGFjZWQocGFyc2VyKSB7XG4gICAgcmV0dXJuIHAubWlkZGxlKG9wdGlvbmFsV2hpdGVzcGFjZV8sIHBhcnNlciwgb3B0aW9uYWxXaGl0ZXNwYWNlXyk7XG59XG5jb25zdCBpZGVudGlmaWVyXyA9IHAudG9rZW4oKHQpID0+IHQubmFtZSA9PT0gJ2lkZW50JyA/IHVuZXNjYXBlKHQudGV4dCkgOiB1bmRlZmluZWQpO1xuY29uc3QgaGFzaElkXyA9IHAudG9rZW4oKHQpID0+IHQubmFtZSA9PT0gJ2hhc2gnID8gdW5lc2NhcGUodC50ZXh0LnNsaWNlKDEpKSA6IHVuZGVmaW5lZCk7XG5jb25zdCBzdHJpbmdfID0gcC50b2tlbigodCkgPT4gdC5uYW1lLnN0YXJ0c1dpdGgoJ3N0cicpID8gdW5lc2NhcGUodC50ZXh0LnNsaWNlKDEsIC0xKSkgOiB1bmRlZmluZWQpO1xuY29uc3QgbmFtZXNwYWNlXyA9IHAubGVmdChwLm9wdGlvbihpZGVudGlmaWVyXywgJycpLCBsaXRlcmFsKCd8JykpO1xuY29uc3QgcXVhbGlmaWVkTmFtZV8gPSBwLmVpdGhlck9yKHAuYWIobmFtZXNwYWNlXywgaWRlbnRpZmllcl8sIChucywgbmFtZSkgPT4gKHsgbmFtZTogbmFtZSwgbmFtZXNwYWNlOiBucyB9KSksIHAubWFwKGlkZW50aWZpZXJfLCAobmFtZSkgPT4gKHsgbmFtZTogbmFtZSwgbmFtZXNwYWNlOiBudWxsIH0pKSk7XG5jb25zdCB1bmlTZWxlY3Rvcl8gPSBwLmVpdGhlck9yKHAuYWIobmFtZXNwYWNlXywgbGl0ZXJhbCgnKicpLCAobnMpID0+ICh7IHR5cGU6ICd1bml2ZXJzYWwnLCBuYW1lc3BhY2U6IG5zLCBzcGVjaWZpY2l0eTogWzAsIDAsIDBdIH0pKSwgcC5tYXAobGl0ZXJhbCgnKicpLCAoKSA9PiAoeyB0eXBlOiAndW5pdmVyc2FsJywgbmFtZXNwYWNlOiBudWxsLCBzcGVjaWZpY2l0eTogWzAsIDAsIDBdIH0pKSk7XG5jb25zdCB0YWdTZWxlY3Rvcl8gPSBwLm1hcChxdWFsaWZpZWROYW1lXywgKHsgbmFtZSwgbmFtZXNwYWNlIH0pID0+ICh7XG4gICAgdHlwZTogJ3RhZycsXG4gICAgbmFtZTogbmFtZSxcbiAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSxcbiAgICBzcGVjaWZpY2l0eTogWzAsIDAsIDFdXG59KSk7XG5jb25zdCBjbGFzc1NlbGVjdG9yXyA9IHAuYWIobGl0ZXJhbCgnLicpLCBpZGVudGlmaWVyXywgKGZ1bGxzdG9wLCBuYW1lKSA9PiAoe1xuICAgIHR5cGU6ICdjbGFzcycsXG4gICAgbmFtZTogbmFtZSxcbiAgICBzcGVjaWZpY2l0eTogWzAsIDEsIDBdXG59KSk7XG5jb25zdCBpZFNlbGVjdG9yXyA9IHAubWFwKGhhc2hJZF8sIChuYW1lKSA9PiAoe1xuICAgIHR5cGU6ICdpZCcsXG4gICAgbmFtZTogbmFtZSxcbiAgICBzcGVjaWZpY2l0eTogWzEsIDAsIDBdXG59KSk7XG5jb25zdCBhdHRyTW9kaWZpZXJfID0gcC50b2tlbigodCkgPT4ge1xuICAgIGlmICh0Lm5hbWUgPT09ICdpZGVudCcpIHtcbiAgICAgICAgaWYgKHQudGV4dCA9PT0gJ2knIHx8IHQudGV4dCA9PT0gJ0knKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2knO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0LnRleHQgPT09ICdzJyB8fCB0LnRleHQgPT09ICdTJykge1xuICAgICAgICAgICAgcmV0dXJuICdzJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufSk7XG5jb25zdCBhdHRyVmFsdWVfID0gcC5laXRoZXJPcihwLmFiKHN0cmluZ18sIHAub3B0aW9uKHAucmlnaHQob3B0aW9uYWxXaGl0ZXNwYWNlXywgYXR0ck1vZGlmaWVyXyksIG51bGwpLCAodiwgbW9kKSA9PiAoeyB2YWx1ZTogdiwgbW9kaWZpZXI6IG1vZCB9KSksIHAuYWIoaWRlbnRpZmllcl8sIHAub3B0aW9uKHAucmlnaHQod2hpdGVzcGFjZV8sIGF0dHJNb2RpZmllcl8pLCBudWxsKSwgKHYsIG1vZCkgPT4gKHsgdmFsdWU6IHYsIG1vZGlmaWVyOiBtb2QgfSkpKTtcbmNvbnN0IGF0dHJNYXRjaGVyXyA9IHAuY2hvaWNlKHAubWFwKGxpdGVyYWwoJz0nKSwgKCkgPT4gJz0nKSwgcC5hYihsaXRlcmFsKCd+JyksIGxpdGVyYWwoJz0nKSwgKCkgPT4gJ349JyksIHAuYWIobGl0ZXJhbCgnfCcpLCBsaXRlcmFsKCc9JyksICgpID0+ICd8PScpLCBwLmFiKGxpdGVyYWwoJ14nKSwgbGl0ZXJhbCgnPScpLCAoKSA9PiAnXj0nKSwgcC5hYihsaXRlcmFsKCckJyksIGxpdGVyYWwoJz0nKSwgKCkgPT4gJyQ9JyksIHAuYWIobGl0ZXJhbCgnKicpLCBsaXRlcmFsKCc9JyksICgpID0+ICcqPScpKTtcbmNvbnN0IGF0dHJQcmVzZW5jZVNlbGVjdG9yXyA9IHAuYWJjKGxpdGVyYWwoJ1snKSwgb3B0aW9uYWxseVNwYWNlZChxdWFsaWZpZWROYW1lXyksIGxpdGVyYWwoJ10nKSwgKGxiciwgeyBuYW1lLCBuYW1lc3BhY2UgfSkgPT4gKHtcbiAgICB0eXBlOiAnYXR0clByZXNlbmNlJyxcbiAgICBuYW1lOiBuYW1lLFxuICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuICAgIHNwZWNpZmljaXR5OiBbMCwgMSwgMF1cbn0pKTtcbmNvbnN0IGF0dHJWYWx1ZVNlbGVjdG9yXyA9IHAubWlkZGxlKGxpdGVyYWwoJ1snKSwgcC5hYmMob3B0aW9uYWxseVNwYWNlZChxdWFsaWZpZWROYW1lXyksIGF0dHJNYXRjaGVyXywgb3B0aW9uYWxseVNwYWNlZChhdHRyVmFsdWVfKSwgKHsgbmFtZSwgbmFtZXNwYWNlIH0sIG1hdGNoZXIsIHsgdmFsdWUsIG1vZGlmaWVyIH0pID0+ICh7XG4gICAgdHlwZTogJ2F0dHJWYWx1ZScsXG4gICAgbmFtZTogbmFtZSxcbiAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSxcbiAgICBtYXRjaGVyOiBtYXRjaGVyLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBtb2RpZmllcjogbW9kaWZpZXIsXG4gICAgc3BlY2lmaWNpdHk6IFswLCAxLCAwXVxufSkpLCBsaXRlcmFsKCddJykpO1xuY29uc3QgYXR0clNlbGVjdG9yXyA9IHAuZWl0aGVyT3IoYXR0clByZXNlbmNlU2VsZWN0b3JfLCBhdHRyVmFsdWVTZWxlY3Rvcl8pO1xuY29uc3QgdHlwZVNlbGVjdG9yXyA9IHAuZWl0aGVyT3IodW5pU2VsZWN0b3JfLCB0YWdTZWxlY3Rvcl8pO1xuY29uc3Qgc3ViY2xhc3NTZWxlY3Rvcl8gPSBwLmNob2ljZShpZFNlbGVjdG9yXywgY2xhc3NTZWxlY3Rvcl8sIGF0dHJTZWxlY3Rvcl8pO1xuY29uc3QgY29tcG91bmRTZWxlY3Rvcl8gPSBwLm1hcChwLmVpdGhlck9yKHAuZmxhdHRlbih0eXBlU2VsZWN0b3JfLCBwLm1hbnkoc3ViY2xhc3NTZWxlY3Rvcl8pKSwgcC5tYW55MShzdWJjbGFzc1NlbGVjdG9yXykpLCAoc3MpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnY29tcG91bmQnLFxuICAgICAgICBsaXN0OiBzcyxcbiAgICAgICAgc3BlY2lmaWNpdHk6IHN1bUFsbFNwZWMoc3MubWFwKHMgPT4gcy5zcGVjaWZpY2l0eSkpXG4gICAgfTtcbn0pO1xuY29uc3QgY29tYmluYXRvcl8gPSBwLmNob2ljZShwLm1hcChsaXRlcmFsKCc+JyksICgpID0+ICc+JyksIHAubWFwKGxpdGVyYWwoJysnKSwgKCkgPT4gJysnKSwgcC5tYXAobGl0ZXJhbCgnficpLCAoKSA9PiAnficpLCBwLmFiKGxpdGVyYWwoJ3wnKSwgbGl0ZXJhbCgnfCcpLCAoKSA9PiAnfHwnKSk7XG5jb25zdCBjb21iaW5hdG9yU2VwYXJhdG9yXyA9IHAuZWl0aGVyT3Iob3B0aW9uYWxseVNwYWNlZChjb21iaW5hdG9yXyksIHAubWFwKHdoaXRlc3BhY2VfLCAoKSA9PiAnICcpKTtcbmNvbnN0IGNvbXBsZXhTZWxlY3Rvcl8gPSBwLmxlZnRBc3NvYzIoY29tcG91bmRTZWxlY3Rvcl8sIHAubWFwKGNvbWJpbmF0b3JTZXBhcmF0b3JfLCAoYykgPT4gKGxlZnQsIHJpZ2h0KSA9PiAoe1xuICAgIHR5cGU6ICdjb21wb3VuZCcsXG4gICAgbGlzdDogWy4uLnJpZ2h0Lmxpc3QsIHsgdHlwZTogJ2NvbWJpbmF0b3InLCBjb21iaW5hdG9yOiBjLCBsZWZ0OiBsZWZ0LCBzcGVjaWZpY2l0eTogbGVmdC5zcGVjaWZpY2l0eSB9XSxcbiAgICBzcGVjaWZpY2l0eTogc3VtU3BlYyhsZWZ0LnNwZWNpZmljaXR5LCByaWdodC5zcGVjaWZpY2l0eSlcbn0pKSwgY29tcG91bmRTZWxlY3Rvcl8pO1xuY29uc3QgbGlzdFNlbGVjdG9yXyA9IHAubGVmdEFzc29jMihwLm1hcChjb21wbGV4U2VsZWN0b3JfLCAocykgPT4gKHsgdHlwZTogJ2xpc3QnLCBsaXN0OiBbc10gfSkpLCBwLm1hcChvcHRpb25hbGx5U3BhY2VkKGxpdGVyYWwoJywnKSksICgpID0+IChhY2MsIG5leHQpID0+ICh7IHR5cGU6ICdsaXN0JywgbGlzdDogWy4uLmFjYy5saXN0LCBuZXh0XSB9KSksIGNvbXBsZXhTZWxlY3Rvcl8pO1xuZnVuY3Rpb24gcGFyc2VfKHBhcnNlciwgc3RyKSB7XG4gICAgaWYgKCEodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHwgc3RyIGluc3RhbmNlb2YgU3RyaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGEgc2VsZWN0b3Igc3RyaW5nLiBBY3R1YWwgaW5wdXQgaXMgbm90IGEgc3RyaW5nIScpO1xuICAgIH1cbiAgICBjb25zdCBsZXhlclJlc3VsdCA9IGxleFNlbGVjdG9yKHN0cik7XG4gICAgaWYgKCFsZXhlclJlc3VsdC5jb21wbGV0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBpbnB1dCBcIiR7c3RyfVwiIHdhcyBvbmx5IHBhcnRpYWxseSB0b2tlbml6ZWQsIHN0b3BwZWQgYXQgb2Zmc2V0ICR7bGV4ZXJSZXN1bHQub2Zmc2V0fSFcXG5gICtcbiAgICAgICAgICAgIHByZXR0eVByaW50UG9zaXRpb24oc3RyLCBsZXhlclJlc3VsdC5vZmZzZXQpKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gb3B0aW9uYWxseVNwYWNlZChwYXJzZXIpKHsgdG9rZW5zOiBsZXhlclJlc3VsdC50b2tlbnMsIG9wdGlvbnM6IHVuZGVmaW5lZCB9LCAwKTtcbiAgICBpZiAoIXJlc3VsdC5tYXRjaGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2ggZm9yIFwiJHtzdHJ9XCIgaW5wdXQhYCk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQucG9zaXRpb24gPCBsZXhlclJlc3VsdC50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbGV4ZXJSZXN1bHQudG9rZW5zW3Jlc3VsdC5wb3NpdGlvbl07XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGlucHV0IFwiJHtzdHJ9XCIgd2FzIG9ubHkgcGFydGlhbGx5IHBhcnNlZCwgc3RvcHBlZCBhdCBvZmZzZXQgJHt0b2tlbi5vZmZzZXR9IVxcbmAgK1xuICAgICAgICAgICAgcHJldHR5UHJpbnRQb3NpdGlvbihzdHIsIHRva2VuLm9mZnNldCwgdG9rZW4ubGVuKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG59XG5mdW5jdGlvbiBwcmV0dHlQcmludFBvc2l0aW9uKHN0ciwgb2Zmc2V0LCBsZW4gPSAxKSB7XG4gICAgcmV0dXJuIGAke3N0ci5yZXBsYWNlKC8oXFx0KXwoXFxyKXwoXFxuKS9nLCAobSwgdCwgcikgPT4gdCA/ICdcXHUyNDA5JyA6IHIgPyAnXFx1MjQwZCcgOiAnXFx1MjQwYScpfVxcbiR7JycucGFkRW5kKG9mZnNldCl9JHsnXicucmVwZWF0KGxlbil9YDtcbn1cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICAgIHJldHVybiBwYXJzZV8obGlzdFNlbGVjdG9yXywgc3RyKTtcbn1cbmZ1bmN0aW9uIHBhcnNlMShzdHIpIHtcbiAgICByZXR1cm4gcGFyc2VfKGNvbXBsZXhTZWxlY3Rvcl8sIHN0cik7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShzZWxlY3Rvcikge1xuICAgIGlmICghc2VsZWN0b3IudHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgaXMgbm90IGFuIEFTVCBub2RlLicpO1xuICAgIH1cbiAgICBzd2l0Y2ggKHNlbGVjdG9yLnR5cGUpIHtcbiAgICAgICAgY2FzZSAndW5pdmVyc2FsJzpcbiAgICAgICAgICAgIHJldHVybiBfc2VyTnMoc2VsZWN0b3IubmFtZXNwYWNlKSArICcqJztcbiAgICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgICAgIHJldHVybiBfc2VyTnMoc2VsZWN0b3IubmFtZXNwYWNlKSArIF9zZXJJZGVudChzZWxlY3Rvci5uYW1lKTtcbiAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuICcuJyArIF9zZXJJZGVudChzZWxlY3Rvci5uYW1lKTtcbiAgICAgICAgY2FzZSAnaWQnOlxuICAgICAgICAgICAgcmV0dXJuICcjJyArIF9zZXJJZGVudChzZWxlY3Rvci5uYW1lKTtcbiAgICAgICAgY2FzZSAnYXR0clByZXNlbmNlJzpcbiAgICAgICAgICAgIHJldHVybiBgWyR7X3Nlck5zKHNlbGVjdG9yLm5hbWVzcGFjZSl9JHtfc2VySWRlbnQoc2VsZWN0b3IubmFtZSl9XWA7XG4gICAgICAgIGNhc2UgJ2F0dHJWYWx1ZSc6XG4gICAgICAgICAgICByZXR1cm4gYFske19zZXJOcyhzZWxlY3Rvci5uYW1lc3BhY2UpfSR7X3NlcklkZW50KHNlbGVjdG9yLm5hbWUpfSR7c2VsZWN0b3IubWF0Y2hlcn1cIiR7X3NlclN0cihzZWxlY3Rvci52YWx1ZSl9XCIkeyhzZWxlY3Rvci5tb2RpZmllciA/IHNlbGVjdG9yLm1vZGlmaWVyIDogJycpfV1gO1xuICAgICAgICBjYXNlICdjb21iaW5hdG9yJzpcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemUoc2VsZWN0b3IubGVmdCkgKyBzZWxlY3Rvci5jb21iaW5hdG9yO1xuICAgICAgICBjYXNlICdjb21wb3VuZCc6XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IubGlzdC5yZWR1Y2UoKGFjYywgbm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdjb21iaW5hdG9yJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplKG5vZGUpICsgYWNjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYyArIHNlcmlhbGl6ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAnJyk7XG4gICAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yLmxpc3QubWFwKHNlcmlhbGl6ZSkuam9pbignLCcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9zZXJOcyhucykge1xuICAgIHJldHVybiAobnMgfHwgbnMgPT09ICcnKVxuICAgICAgICA/IF9zZXJJZGVudChucykgKyAnfCdcbiAgICAgICAgOiAnJztcbn1cbmZ1bmN0aW9uIF9jb2RlUG9pbnQoY2hhcikge1xuICAgIHJldHVybiBgXFxcXCR7Y2hhci5jb2RlUG9pbnRBdCgwKS50b1N0cmluZygxNil9IGA7XG59XG5mdW5jdGlvbiBfc2VySWRlbnQoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKFxuICAgIC8oXlswLTldKXwoXi1bMC05XSl8KF4tJCl8KFstMC05YS16QS1aX118W15cXHgwMC1cXHg3Rl0pfChcXHgwMCl8KFtcXHgwMS1cXHgxZl18XFx4N2YpfChbXFxzXFxTXSkvZywgKG0sIGQxLCBkMiwgaHksIHNhZmUsIG5sLCBjdHJsLCBvdGhlcikgPT4gZDEgPyBfY29kZVBvaW50KGQxKSA6XG4gICAgICAgIGQyID8gJy0nICsgX2NvZGVQb2ludChkMi5zbGljZSgxKSkgOlxuICAgICAgICAgICAgaHkgPyAnXFxcXC0nIDpcbiAgICAgICAgICAgICAgICBzYWZlID8gc2FmZSA6XG4gICAgICAgICAgICAgICAgICAgIG5sID8gJ1xcdWZmZmQnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwgPyBfY29kZVBvaW50KGN0cmwpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFxcXCcgKyBvdGhlcik7XG59XG5mdW5jdGlvbiBfc2VyU3RyKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShcbiAgICAvKFwiKXwoXFxcXCl8KFxceDAwKXwoW1xceDAxLVxceDFmXXxcXHg3ZikvZywgKG0sIGRxLCBicywgbmwsIGN0cmwpID0+IGRxID8gJ1xcXFxcIicgOlxuICAgICAgICBicyA/ICdcXFxcXFxcXCcgOlxuICAgICAgICAgICAgbmwgPyAnXFx1ZmZmZCcgOlxuICAgICAgICAgICAgICAgIF9jb2RlUG9pbnQoY3RybCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplKHNlbGVjdG9yKSB7XG4gICAgaWYgKCFzZWxlY3Rvci50eXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBpcyBub3QgYW4gQVNUIG5vZGUuJyk7XG4gICAgfVxuICAgIHN3aXRjaCAoc2VsZWN0b3IudHlwZSkge1xuICAgICAgICBjYXNlICdjb21wb3VuZCc6IHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmxpc3QuZm9yRWFjaChub3JtYWxpemUpO1xuICAgICAgICAgICAgc2VsZWN0b3IubGlzdC5zb3J0KChhLCBiKSA9PiBfY29tcGFyZUFycmF5cyhfZ2V0U2VsZWN0b3JQcmlvcml0eShhKSwgX2dldFNlbGVjdG9yUHJpb3JpdHkoYikpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2NvbWJpbmF0b3InOiB7XG4gICAgICAgICAgICBub3JtYWxpemUoc2VsZWN0b3IubGVmdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdsaXN0Jzoge1xuICAgICAgICAgICAgc2VsZWN0b3IubGlzdC5mb3JFYWNoKG5vcm1hbGl6ZSk7XG4gICAgICAgICAgICBzZWxlY3Rvci5saXN0LnNvcnQoKGEsIGIpID0+IChzZXJpYWxpemUoYSkgPCBzZXJpYWxpemUoYikpID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rvcjtcbn1cbmZ1bmN0aW9uIF9nZXRTZWxlY3RvclByaW9yaXR5KHNlbGVjdG9yKSB7XG4gICAgc3dpdGNoIChzZWxlY3Rvci50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3VuaXZlcnNhbCc6XG4gICAgICAgICAgICByZXR1cm4gWzFdO1xuICAgICAgICBjYXNlICd0YWcnOlxuICAgICAgICAgICAgcmV0dXJuIFsxXTtcbiAgICAgICAgY2FzZSAnaWQnOlxuICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgcmV0dXJuIFszLCBzZWxlY3Rvci5uYW1lXTtcbiAgICAgICAgY2FzZSAnYXR0clByZXNlbmNlJzpcbiAgICAgICAgICAgIHJldHVybiBbNCwgc2VyaWFsaXplKHNlbGVjdG9yKV07XG4gICAgICAgIGNhc2UgJ2F0dHJWYWx1ZSc6XG4gICAgICAgICAgICByZXR1cm4gWzUsIHNlcmlhbGl6ZShzZWxlY3RvcildO1xuICAgICAgICBjYXNlICdjb21iaW5hdG9yJzpcbiAgICAgICAgICAgIHJldHVybiBbMTUsIHNlcmlhbGl6ZShzZWxlY3RvcildO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbXBhcmVTZWxlY3RvcnMoYSwgYikge1xuICAgIHJldHVybiBfY29tcGFyZUFycmF5cyhhLnNwZWNpZmljaXR5LCBiLnNwZWNpZmljaXR5KTtcbn1cbmZ1bmN0aW9uIGNvbXBhcmVTcGVjaWZpY2l0eShhLCBiKSB7XG4gICAgcmV0dXJuIF9jb21wYXJlQXJyYXlzKGEsIGIpO1xufVxuZnVuY3Rpb24gX2NvbXBhcmVBcnJheXMoYSwgYikge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhKSB8fCAhQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIGFycmF5cy4nKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvcnRlciA9IChhLmxlbmd0aCA8IGIubGVuZ3RoKSA/IGEubGVuZ3RoIDogYi5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaG9ydGVyOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gPT09IGJbaV0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYVtpXSA8IGJbaV0pID8gLTEgOiAxO1xuICAgIH1cbiAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbn1cblxuZXhwb3J0IHsgYXN0IGFzIEFzdCwgY29tcGFyZVNlbGVjdG9ycywgY29tcGFyZVNwZWNpZmljaXR5LCBub3JtYWxpemUsIHBhcnNlLCBwYXJzZTEsIHNlcmlhbGl6ZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/parseley/lib/parseley.mjs\n");

/***/ })

};
;