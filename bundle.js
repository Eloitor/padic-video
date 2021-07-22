/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {


var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        var test1 = new String('abc');
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !==
            'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    }
    catch (err) {
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


if (true) {
    (function () {
        'use strict';
        var React = __webpack_require__(/*! react */ "react");
        var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
        var REACT_ELEMENT_TYPE = 0xeac7;
        var REACT_PORTAL_TYPE = 0xeaca;
        exports.Fragment = 0xeacb;
        var REACT_STRICT_MODE_TYPE = 0xeacc;
        var REACT_PROFILER_TYPE = 0xead2;
        var REACT_PROVIDER_TYPE = 0xeacd;
        var REACT_CONTEXT_TYPE = 0xeace;
        var REACT_FORWARD_REF_TYPE = 0xead0;
        var REACT_SUSPENSE_TYPE = 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = 0xead8;
        var REACT_MEMO_TYPE = 0xead3;
        var REACT_LAZY_TYPE = 0xead4;
        var REACT_BLOCK_TYPE = 0xead9;
        var REACT_SERVER_BLOCK_TYPE = 0xeada;
        var REACT_FUNDAMENTAL_TYPE = 0xead5;
        var REACT_SCOPE_TYPE = 0xead7;
        var REACT_OPAQUE_ID_TYPE = 0xeae0;
        var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
        var REACT_OFFSCREEN_TYPE = 0xeae2;
        var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
        if (typeof Symbol === 'function' && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor('react.element');
            REACT_PORTAL_TYPE = symbolFor('react.portal');
            exports.Fragment = symbolFor('react.fragment');
            REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
            REACT_PROFILER_TYPE = symbolFor('react.profiler');
            REACT_PROVIDER_TYPE = symbolFor('react.provider');
            REACT_CONTEXT_TYPE = symbolFor('react.context');
            REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
            REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
            REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
            REACT_MEMO_TYPE = symbolFor('react.memo');
            REACT_LAZY_TYPE = symbolFor('react.lazy');
            REACT_BLOCK_TYPE = symbolFor('react.block');
            REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
            REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
            REACT_SCOPE_TYPE = symbolFor('react.scope');
            REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
            REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
            REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    args[_key2 - 1] = arguments[_key2];
                }
                printWarning('error', format, args);
            }
        }
        function printWarning(level, format, args) {
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([stack]);
                }
                var argsWithFormat = args.map(function (item) {
                    return '' + item;
                });
                argsWithFormat.unshift('Warning: ' + format);
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            }
            if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                    return true;
                }
            }
            return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || '';
            return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
            return type.displayName || 'Context';
        }
        function getComponentName(type) {
            if (type == null) {
                return null;
            }
            {
                if (typeof type.tag === 'number') {
                    error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
                }
            }
            if (typeof type === 'function') {
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch (type) {
                case exports.Fragment:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
            }
            if (typeof type === 'object') {
                switch (type.$$typeof) {
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        return getContextName(context) + '.Consumer';
                    case REACT_PROVIDER_TYPE:
                        var provider = type;
                        return getContextName(provider._context) + '.Provider';
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        return getComponentName(type.type);
                    case REACT_BLOCK_TYPE:
                        return getComponentName(type._render);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentName(init(payload));
                            }
                            catch (x) {
                                return null;
                            }
                        }
                }
            }
            return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() { }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd;
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        log: _assign({}, props, {
                            value: prevLog
                        }),
                        info: _assign({}, props, {
                            value: prevInfo
                        }),
                        warn: _assign({}, props, {
                            value: prevWarn
                        }),
                        error: _assign({}, props, {
                            value: prevError
                        }),
                        group: _assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: _assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: _assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
                if (prefix === undefined) {
                    try {
                        throw Error();
                    }
                    catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                }
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher.current;
                ReactCurrentDispatcher.current = null;
                disableLogs();
            }
            try {
                if (construct) {
                    var Fake = function () {
                        throw Error();
                    };
                    Object.defineProperty(Fake.prototype, 'props', {
                        set: function () {
                            throw Error();
                        }
                    });
                    if (typeof Reflect === 'object' && Reflect.construct) {
                        try {
                            Reflect.construct(Fake, []);
                        }
                        catch (x) {
                            control = x;
                        }
                        Reflect.construct(fn, [], Fake);
                    }
                    else {
                        try {
                            Fake.call();
                        }
                        catch (x) {
                            control = x;
                        }
                        fn.call(Fake.prototype);
                    }
                }
                else {
                    try {
                        throw Error();
                    }
                    catch (x) {
                        control = x;
                    }
                    fn();
                }
            }
            catch (sample) {
                if (sample && control && typeof sample.stack === 'string') {
                    var sampleLines = sample.stack.split('\n');
                    var controlLines = control.stack.split('\n');
                    var s = sampleLines.length - 1;
                    var c = controlLines.length - 1;
                    while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                        c--;
                    }
                    for (; s >= 1 && c >= 0; s--, c--) {
                        if (sampleLines[s] !== controlLines[c]) {
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--;
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                                        {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        }
                                        return _frame;
                                    }
                                } while (s >= 1 && c >= 0);
                            }
                            break;
                        }
                    }
                }
            }
            finally {
                reentry = false;
                {
                    ReactCurrentDispatcher.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch (type) {
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch (type.$$typeof) {
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                    case REACT_BLOCK_TYPE:
                        return describeFunctionComponentFrame(type._render);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                            }
                            catch (x) { }
                        }
                }
            }
            return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame.setExtraStackFrame(stack);
                }
                else {
                    ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
            }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
                var has = Function.call.bind(Object.prototype.hasOwnProperty);
                for (var typeSpecName in typeSpecs) {
                    if (has(typeSpecs, typeSpecName)) {
                        var error$1 = void 0;
                        try {
                            if (typeof typeSpecs[typeSpecName] !== 'function') {
                                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                                err.name = 'Invariant Violation';
                                throw err;
                            }
                            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                        }
                        catch (ex) {
                            error$1 = ex;
                        }
                        if (error$1 && !(error$1 instanceof Error)) {
                            setCurrentlyValidatingElement(element);
                            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                            setCurrentlyValidatingElement(null);
                        }
                        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                            loggedTypeFailures[error$1.message] = true;
                            setCurrentlyValidatingElement(element);
                            error('Failed %s type: %s', location, error$1.message);
                            setCurrentlyValidatingElement(null);
                        }
                    }
                }
            }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
            didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
            {
                if (hasOwnProperty.call(config, 'ref')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.ref !== undefined;
        }
        function hasValidKey(config) {
            {
                if (hasOwnProperty.call(config, 'key')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.key !== undefined;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
            {
                if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                    var componentName = getComponentName(ReactCurrentOwner.current.type);
                    if (!didWarnAboutStringRefs[componentName]) {
                        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                        didWarnAboutStringRefs[componentName] = true;
                    }
                }
            }
        }
        function defineKeyPropWarningGetter(props, displayName) {
            {
                var warnAboutAccessingKey = function () {
                    if (!specialPropKeyWarningShown) {
                        specialPropKeyWarningShown = true;
                        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                };
                warnAboutAccessingKey.isReactWarning = true;
                Object.defineProperty(props, 'key', {
                    get: warnAboutAccessingKey,
                    configurable: true
                });
            }
        }
        function defineRefPropWarningGetter(props, displayName) {
            {
                var warnAboutAccessingRef = function () {
                    if (!specialPropRefWarningShown) {
                        specialPropRefWarningShown = true;
                        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                };
                warnAboutAccessingRef.isReactWarning = true;
                Object.defineProperty(props, 'ref', {
                    get: warnAboutAccessingRef,
                    configurable: true
                });
            }
        }
        var ReactElement = function (type, key, ref, self, source, owner, props) {
            var element = {
                $$typeof: REACT_ELEMENT_TYPE,
                type: type,
                key: key,
                ref: ref,
                props: props,
                _owner: owner
            };
            {
                element._store = {};
                Object.defineProperty(element._store, 'validated', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: false
                });
                Object.defineProperty(element, '_self', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: self
                });
                Object.defineProperty(element, '_source', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: source
                });
                if (Object.freeze) {
                    Object.freeze(element.props);
                    Object.freeze(element);
                }
            }
            return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
            {
                var propName;
                var props = {};
                var key = null;
                var ref = null;
                if (maybeKey !== undefined) {
                    key = '' + maybeKey;
                }
                if (hasValidKey(config)) {
                    key = '' + config.key;
                }
                if (hasValidRef(config)) {
                    ref = config.ref;
                    warnIfStringRefCannotBeAutoConverted(config, self);
                }
                for (propName in config) {
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        props[propName] = config[propName];
                    }
                }
                if (type && type.defaultProps) {
                    var defaultProps = type.defaultProps;
                    for (propName in defaultProps) {
                        if (props[propName] === undefined) {
                            props[propName] = defaultProps[propName];
                        }
                    }
                }
                if (key || ref) {
                    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                    if (key) {
                        defineKeyPropWarningGetter(props, displayName);
                    }
                    if (ref) {
                        defineRefPropWarningGetter(props, displayName);
                    }
                }
                return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
            }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                }
                else {
                    ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                }
            }
        }
        var propTypesMisspellWarningShown;
        {
            propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
            {
                return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
        }
        function getDeclarationErrorAddendum() {
            {
                if (ReactCurrentOwner$1.current) {
                    var name = getComponentName(ReactCurrentOwner$1.current.type);
                    if (name) {
                        return '\n\nCheck the render method of `' + name + '`.';
                    }
                }
                return '';
            }
        }
        function getSourceInfoErrorAddendum(source) {
            {
                if (source !== undefined) {
                    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                    var lineNumber = source.lineNumber;
                    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
                }
                return '';
            }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
            {
                var info = getDeclarationErrorAddendum();
                if (!info) {
                    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
                    if (parentName) {
                        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                    }
                }
                return info;
            }
        }
        function validateExplicitKey(element, parentType) {
            {
                if (!element._store || element._store.validated || element.key != null) {
                    return;
                }
                element._store.validated = true;
                var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                    return;
                }
                ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                var childOwner = '';
                if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
                }
                setCurrentlyValidatingElement$1(element);
                error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                setCurrentlyValidatingElement$1(null);
            }
        }
        function validateChildKeys(node, parentType) {
            {
                if (typeof node !== 'object') {
                    return;
                }
                if (Array.isArray(node)) {
                    for (var i = 0; i < node.length; i++) {
                        var child = node[i];
                        if (isValidElement(child)) {
                            validateExplicitKey(child, parentType);
                        }
                    }
                }
                else if (isValidElement(node)) {
                    if (node._store) {
                        node._store.validated = true;
                    }
                }
                else if (node) {
                    var iteratorFn = getIteratorFn(node);
                    if (typeof iteratorFn === 'function') {
                        if (iteratorFn !== node.entries) {
                            var iterator = iteratorFn.call(node);
                            var step;
                            while (!(step = iterator.next()).done) {
                                if (isValidElement(step.value)) {
                                    validateExplicitKey(step.value, parentType);
                                }
                            }
                        }
                    }
                }
            }
        }
        function validatePropTypes(element) {
            {
                var type = element.type;
                if (type === null || type === undefined || typeof type === 'string') {
                    return;
                }
                var propTypes;
                if (typeof type === 'function') {
                    propTypes = type.propTypes;
                }
                else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
                    type.$$typeof === REACT_MEMO_TYPE)) {
                    propTypes = type.propTypes;
                }
                else {
                    return;
                }
                if (propTypes) {
                    var name = getComponentName(type);
                    checkPropTypes(propTypes, element.props, 'prop', name, element);
                }
                else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                    propTypesMisspellWarningShown = true;
                    var _name = getComponentName(type);
                    error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
                }
                if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                    error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
                }
            }
        }
        function validateFragmentProps(fragment) {
            {
                var keys = Object.keys(fragment.props);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (key !== 'children' && key !== 'key') {
                        setCurrentlyValidatingElement$1(fragment);
                        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                        setCurrentlyValidatingElement$1(null);
                        break;
                    }
                }
                if (fragment.ref !== null) {
                    setCurrentlyValidatingElement$1(fragment);
                    error('Invalid attribute `ref` supplied to `React.Fragment`.');
                    setCurrentlyValidatingElement$1(null);
                }
            }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
            {
                var validType = isValidElementType(type);
                if (!validType) {
                    var info = '';
                    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
                    }
                    var sourceInfo = getSourceInfoErrorAddendum(source);
                    if (sourceInfo) {
                        info += sourceInfo;
                    }
                    else {
                        info += getDeclarationErrorAddendum();
                    }
                    var typeString;
                    if (type === null) {
                        typeString = 'null';
                    }
                    else if (Array.isArray(type)) {
                        typeString = 'array';
                    }
                    else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
                        info = ' Did you accidentally export a JSX literal instead of a component?';
                    }
                    else {
                        typeString = typeof type;
                    }
                    error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
                }
                var element = jsxDEV(type, props, key, source, self);
                if (element == null) {
                    return element;
                }
                if (validType) {
                    var children = props.children;
                    if (children !== undefined) {
                        if (isStaticChildren) {
                            if (Array.isArray(children)) {
                                for (var i = 0; i < children.length; i++) {
                                    validateChildKeys(children[i], type);
                                }
                                if (Object.freeze) {
                                    Object.freeze(children);
                                }
                            }
                            else {
                                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                            }
                        }
                        else {
                            validateChildKeys(children, type);
                        }
                    }
                }
                if (type === exports.Fragment) {
                    validateFragmentProps(element);
                }
                else {
                    validatePropTypes(element);
                }
                return element;
            }
        }
        function jsxWithValidationStatic(type, props, key) {
            {
                return jsxWithValidation(type, props, key, true);
            }
        }
        function jsxWithValidationDynamic(type, props, key) {
            {
                return jsxWithValidation(type, props, key, false);
            }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
    })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (false) {}
else {
    module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/rp-katex/rp-katex.js":
/*!*******************************************!*\
  !*** ./node_modules/rp-katex/rp-katex.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KTX": () => (/* binding */ KTXBlocking),
/* harmony export */   "KTXBlocking": () => (/* binding */ KTXBlocking),
/* harmony export */   "KTXNonBlocking": () => (/* binding */ KTXNonBlocking),
/* harmony export */   "KaTeXReady": () => (/* binding */ KaTeXReady)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ractive-player */ "ractive-player");
/* harmony import */ var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const KaTeXLoad = new Promise((resolve) => {
    const script = document.querySelector(`script[src*="katex.js"], script[src*="katex.min.js"]`);
    if (!script)
        return;
    if (window.hasOwnProperty("katex")) {
        resolve(katex);
    }
    else {
        script.addEventListener("load", () => resolve(katex));
    }
});
const KaTeXMacros = new Promise((resolve) => {
    const macros = {};
    const scripts = Array.from(document.querySelectorAll("head > script[type='math/tex']"));
    return Promise.all(scripts.map(script => fetch(script.src)
        .then(res => {
        if (res.ok)
            return res.text();
        throw new Error(`${res.status} ${res.statusText}: ${script.src}`);
    })
        .then(tex => {
        Object.assign(macros, parseMacros(tex));
    }))).then(() => resolve(macros));
});
const KaTeXReady = Promise.all([KaTeXLoad, KaTeXMacros]);
const implementation = function KTX(props, ref) {
    const spanRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const { children, display } = props, attrs = __rest(props, ["children", "display"]);
    const resolveRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const ready = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return new Promise((resolve) => {
            resolveRef.current = resolve;
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
        domElement: spanRef.current,
        ready
    }));
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        KaTeXReady.then(([katex, macros]) => {
            katex.render(children.toString(), spanRef.current, {
                displayMode: !!display,
                macros,
                strict: "ignore",
                throwOnError: false,
                trust: true
            });
            resolveRef.current();
        });
    }, [children]);
    if (display) {
        if (!attrs.style)
            attrs.style = {};
        attrs.style.display = "block";
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", Object.assign({}, attrs, { ref: spanRef })));
};
const KTXNonBlocking = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(implementation);
function parseMacros(file) {
    const macros = {};
    const rgx = /\\(?:ktx)?newcommand\{(.+?)\}(?:\[\d+\])?\{/g;
    let match;
    while (match = rgx.exec(file)) {
        let body = "";
        const macro = match[1];
        let braceCount = 1;
        for (let i = match.index + match[0].length; (braceCount > 0) && (i < file.length); ++i) {
            const char = file[i];
            if (char === "{") {
                braceCount++;
            }
            else if (char === "}") {
                braceCount--;
                if (braceCount === 0)
                    break;
            }
            else if (char === "\\") {
                body += file.slice(i, i + 2);
                ++i;
                continue;
            }
            body += char;
        }
        macros[macro] = body;
    }
    return macros;
}
const KTXBlocking = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function KTX(props, ref) {
    const player = (0,ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
    const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    if (ref) {
        ref.current = innerRef.current;
    }
    const resolve = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const promise = new Promise((res) => {
            resolve.current = res;
        });
        player.obstruct("canplay", promise);
        player.obstruct("canplaythrough", promise);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (ref) {
            ref.current = innerRef.current;
        }
        innerRef.current.ready.then(() => resolve.current());
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(KTXNonBlocking, Object.assign({ ref: innerRef }, props)));
});



/***/ }),

/***/ "./node_modules/rp-recording/dist/rp-recording.js":
/*!********************************************************!*\
  !*** ./node_modules/rp-recording/dist/rp-recording.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


(function webpackUniversalModuleDefinition(root, factory) {
    if (true)
        module.exports = factory(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! ractive-player */ "ractive-player"));
    else {}
})(self, function (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_ractive_player__) {
    return (() => {
        "use strict";
        var __webpack_modules__ = ({
            "./node_modules/css-loader/dist/cjs.js!./style.css": ((module, __webpack_exports__, __nested_webpack_require_821__) => {
                __nested_webpack_require_821__.r(__webpack_exports__);
                __nested_webpack_require_821__.d(__webpack_exports__, {
                    "default": () => __WEBPACK_DEFAULT_EXPORT__
                });
                var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_821__("./node_modules/css-loader/dist/runtime/api.js");
                var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_821__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
                var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function (i) { return i[1]; });
                ___CSS_LOADER_EXPORT___.push([module.id, "@media (any-hover:none){#rp-recording{display:none}}#rp-recording{position:relative}#rp-recording-dialog{background-color:#2a2a2a;border-radius:2px 2px 0 0;box-shadow:2px -2px 2px 2px rgba(0,0,0,0.3);box-sizing:border-box;color:#fff;font-family:sans-serif;line-height:1;position:absolute;bottom:calc(var(--rp-controls-height) - 2px);right:0;z-index:3;max-height:20rem;overflow-y:auto;padding:.5em;width:23rem}#rp-recording-dialog > h3{color:#1a69b5;margin:.5em 0 .2em}#rp-recording-configuration{border-spacing:0 1em;width:100%}#rp-recording-configuration > tbody > tr > th,#rp-recording-configuration > tbody > tr > td{vertical-align:top}#rp-recording-configuration > tbody > tr > th{text-align:right}#rp-recording-configuration > tbody > tr td{padding-left:1em}#rp-recording-configuration > tbody > tr > th[colspan=\"2\"]{color:#1a69b5;text-align:center}#rp-recording-configuration > tbody > tr > th:not([colspan=\"2\"]){font-size:1em;font-weight:normal;padding-right:.2em;text-align:right}.recorder-plugin{display:inline-block;font-family:sans-serif;font-size:.8em;margin:0 .25em;text-align:center}.recorder-plugin-icon{background-color:#222;border-radius:5px;cursor:pointer;display:block}.recorder-plugin-icon.active{background-color:#f00}.recorder-plugin-icon text{user-select:none;-webkit-user-select:none}.recordings{font-size:1.5em;list-style-position:inside}.recording-results{border-collapse:collapse;font-size:.6em;width:100%}.recording-results > tbody > tr{background-color:#333}.recording-results > tbody > tr > th{padding:6px;width:36px}.recording-results > tbody > tr > td{padding:6px}.recording-results textarea{width:100%}.recording-results :link{background-color:#1a69b5;box-sizing:border-box;color:#fff !important;display:block;padding:.5em;text-align:center;text-decoration:none;width:100%}.shortcut{font-family:monospace;font-size:1em;width:18ch}", ""]);
                const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
            }),
            "./style.css": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_3685__) => {
                __nested_webpack_require_3685__.r(__webpack_exports__);
                __nested_webpack_require_3685__.d(__webpack_exports__, {
                    "default": () => __WEBPACK_DEFAULT_EXPORT__
                });
                var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3685__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
                var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_3685__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
                var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_3685__("./node_modules/css-loader/dist/cjs.js!./style.css");
                var options = {};
                options.insert = "head";
                options.singleton = false;
                var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);
                const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});
            }),
            "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": ((module, __unused_webpack_exports, __nested_webpack_require_5184__) => {
                var isOldIE = function isOldIE() {
                    var memo;
                    return function memorize() {
                        if (typeof memo === 'undefined') {
                            memo = Boolean(window && document && document.all && !window.atob);
                        }
                        return memo;
                    };
                }();
                var getTarget = function getTarget() {
                    var memo = {};
                    return function memorize(target) {
                        if (typeof memo[target] === 'undefined') {
                            var styleTarget = document.querySelector(target);
                            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                                try {
                                    styleTarget = styleTarget.contentDocument.head;
                                }
                                catch (e) {
                                    styleTarget = null;
                                }
                            }
                            memo[target] = styleTarget;
                        }
                        return memo[target];
                    };
                }();
                var stylesInDom = [];
                function getIndexByIdentifier(identifier) {
                    var result = -1;
                    for (var i = 0; i < stylesInDom.length; i++) {
                        if (stylesInDom[i].identifier === identifier) {
                            result = i;
                            break;
                        }
                    }
                    return result;
                }
                function modulesToDom(list, options) {
                    var idCountMap = {};
                    var identifiers = [];
                    for (var i = 0; i < list.length; i++) {
                        var item = list[i];
                        var id = options.base ? item[0] + options.base : item[0];
                        var count = idCountMap[id] || 0;
                        var identifier = "".concat(id, " ").concat(count);
                        idCountMap[id] = count + 1;
                        var index = getIndexByIdentifier(identifier);
                        var obj = {
                            css: item[1],
                            media: item[2],
                            sourceMap: item[3]
                        };
                        if (index !== -1) {
                            stylesInDom[index].references++;
                            stylesInDom[index].updater(obj);
                        }
                        else {
                            stylesInDom.push({
                                identifier: identifier,
                                updater: addStyle(obj, options),
                                references: 1
                            });
                        }
                        identifiers.push(identifier);
                    }
                    return identifiers;
                }
                function insertStyleElement(options) {
                    var style = document.createElement('style');
                    var attributes = options.attributes || {};
                    if (typeof attributes.nonce === 'undefined') {
                        var nonce =  true ? __nested_webpack_require_5184__.nc : 0;
                        if (nonce) {
                            attributes.nonce = nonce;
                        }
                    }
                    Object.keys(attributes).forEach(function (key) {
                        style.setAttribute(key, attributes[key]);
                    });
                    if (typeof options.insert === 'function') {
                        options.insert(style);
                    }
                    else {
                        var target = getTarget(options.insert || 'head');
                        if (!target) {
                            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        }
                        target.appendChild(style);
                    }
                    return style;
                }
                function removeStyleElement(style) {
                    if (style.parentNode === null) {
                        return false;
                    }
                    style.parentNode.removeChild(style);
                }
                var replaceText = function replaceText() {
                    var textStore = [];
                    return function replace(index, replacement) {
                        textStore[index] = replacement;
                        return textStore.filter(Boolean).join('\n');
                    };
                }();
                function applyToSingletonTag(style, index, remove, obj) {
                    var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css;
                    if (style.styleSheet) {
                        style.styleSheet.cssText = replaceText(index, css);
                    }
                    else {
                        var cssNode = document.createTextNode(css);
                        var childNodes = style.childNodes;
                        if (childNodes[index]) {
                            style.removeChild(childNodes[index]);
                        }
                        if (childNodes.length) {
                            style.insertBefore(cssNode, childNodes[index]);
                        }
                        else {
                            style.appendChild(cssNode);
                        }
                    }
                }
                function applyToTag(style, options, obj) {
                    var css = obj.css;
                    var media = obj.media;
                    var sourceMap = obj.sourceMap;
                    if (media) {
                        style.setAttribute('media', media);
                    }
                    else {
                        style.removeAttribute('media');
                    }
                    if (sourceMap && typeof btoa !== 'undefined') {
                        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                    }
                    if (style.styleSheet) {
                        style.styleSheet.cssText = css;
                    }
                    else {
                        while (style.firstChild) {
                            style.removeChild(style.firstChild);
                        }
                        style.appendChild(document.createTextNode(css));
                    }
                }
                var singleton = null;
                var singletonCounter = 0;
                function addStyle(obj, options) {
                    var style;
                    var update;
                    var remove;
                    if (options.singleton) {
                        var styleIndex = singletonCounter++;
                        style = singleton || (singleton = insertStyleElement(options));
                        update = applyToSingletonTag.bind(null, style, styleIndex, false);
                        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
                    }
                    else {
                        style = insertStyleElement(options);
                        update = applyToTag.bind(null, style, options);
                        remove = function remove() {
                            removeStyleElement(style);
                        };
                    }
                    update(obj);
                    return function updateStyle(newObj) {
                        if (newObj) {
                            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                                return;
                            }
                            update(obj = newObj);
                        }
                        else {
                            remove();
                        }
                    };
                }
                module.exports = function (list, options) {
                    options = options || {};
                    if (!options.singleton && typeof options.singleton !== 'boolean') {
                        options.singleton = isOldIE();
                    }
                    list = list || [];
                    var lastIdentifiers = modulesToDom(list, options);
                    return function update(newList) {
                        newList = newList || [];
                        if (Object.prototype.toString.call(newList) !== '[object Array]') {
                            return;
                        }
                        for (var i = 0; i < lastIdentifiers.length; i++) {
                            var identifier = lastIdentifiers[i];
                            var index = getIndexByIdentifier(identifier);
                            stylesInDom[index].references--;
                        }
                        var newLastIdentifiers = modulesToDom(newList, options);
                        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                            var _identifier = lastIdentifiers[_i];
                            var _index = getIndexByIdentifier(_identifier);
                            if (stylesInDom[_index].references === 0) {
                                stylesInDom[_index].updater();
                                stylesInDom.splice(_index, 1);
                            }
                        }
                        lastIdentifiers = newLastIdentifiers;
                    };
                };
            }),
            "./node_modules/css-loader/dist/runtime/api.js": ((module) => {
                module.exports = function (cssWithMappingToString) {
                    var list = [];
                    list.toString = function toString() {
                        return this.map(function (item) {
                            var content = cssWithMappingToString(item);
                            if (item[2]) {
                                return "@media ".concat(item[2], " {").concat(content, "}");
                            }
                            return content;
                        }).join("");
                    };
                    list.i = function (modules, mediaQuery, dedupe) {
                        if (typeof modules === "string") {
                            modules = [[null, modules, ""]];
                        }
                        var alreadyImportedModules = {};
                        if (dedupe) {
                            for (var i = 0; i < this.length; i++) {
                                var id = this[i][0];
                                if (id != null) {
                                    alreadyImportedModules[id] = true;
                                }
                            }
                        }
                        for (var _i = 0; _i < modules.length; _i++) {
                            var item = [].concat(modules[_i]);
                            if (dedupe && alreadyImportedModules[item[0]]) {
                                continue;
                            }
                            if (mediaQuery) {
                                if (!item[2]) {
                                    item[2] = mediaQuery;
                                }
                                else {
                                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                                }
                            }
                            list.push(item);
                        }
                    };
                    return list;
                };
            }),
            "./node_modules/events/events.js": ((module) => {
                var R = typeof Reflect === 'object' ? Reflect : null;
                var ReflectApply = R && typeof R.apply === 'function'
                    ? R.apply
                    : function ReflectApply(target, receiver, args) {
                        return Function.prototype.apply.call(target, receiver, args);
                    };
                var ReflectOwnKeys;
                if (R && typeof R.ownKeys === 'function') {
                    ReflectOwnKeys = R.ownKeys;
                }
                else if (Object.getOwnPropertySymbols) {
                    ReflectOwnKeys = function ReflectOwnKeys(target) {
                        return Object.getOwnPropertyNames(target)
                            .concat(Object.getOwnPropertySymbols(target));
                    };
                }
                else {
                    ReflectOwnKeys = function ReflectOwnKeys(target) {
                        return Object.getOwnPropertyNames(target);
                    };
                }
                function ProcessEmitWarning(warning) {
                    if (console && console.warn)
                        console.warn(warning);
                }
                var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
                    return value !== value;
                };
                function EventEmitter() {
                    EventEmitter.init.call(this);
                }
                module.exports = EventEmitter;
                module.exports.once = once;
                EventEmitter.EventEmitter = EventEmitter;
                EventEmitter.prototype._events = undefined;
                EventEmitter.prototype._eventsCount = 0;
                EventEmitter.prototype._maxListeners = undefined;
                var defaultMaxListeners = 10;
                function checkListener(listener) {
                    if (typeof listener !== 'function') {
                        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
                    }
                }
                Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
                    enumerable: true,
                    get: function () {
                        return defaultMaxListeners;
                    },
                    set: function (arg) {
                        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
                            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
                        }
                        defaultMaxListeners = arg;
                    }
                });
                EventEmitter.init = function () {
                    if (this._events === undefined ||
                        this._events === Object.getPrototypeOf(this)._events) {
                        this._events = Object.create(null);
                        this._eventsCount = 0;
                    }
                    this._maxListeners = this._maxListeners || undefined;
                };
                EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
                    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
                        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
                    }
                    this._maxListeners = n;
                    return this;
                };
                function _getMaxListeners(that) {
                    if (that._maxListeners === undefined)
                        return EventEmitter.defaultMaxListeners;
                    return that._maxListeners;
                }
                EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
                    return _getMaxListeners(this);
                };
                EventEmitter.prototype.emit = function emit(type) {
                    var args = [];
                    for (var i = 1; i < arguments.length; i++)
                        args.push(arguments[i]);
                    var doError = (type === 'error');
                    var events = this._events;
                    if (events !== undefined)
                        doError = (doError && events.error === undefined);
                    else if (!doError)
                        return false;
                    if (doError) {
                        var er;
                        if (args.length > 0)
                            er = args[0];
                        if (er instanceof Error) {
                            throw er;
                        }
                        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
                        err.context = er;
                        throw err;
                    }
                    var handler = events[type];
                    if (handler === undefined)
                        return false;
                    if (typeof handler === 'function') {
                        ReflectApply(handler, this, args);
                    }
                    else {
                        var len = handler.length;
                        var listeners = arrayClone(handler, len);
                        for (var i = 0; i < len; ++i)
                            ReflectApply(listeners[i], this, args);
                    }
                    return true;
                };
                function _addListener(target, type, listener, prepend) {
                    var m;
                    var events;
                    var existing;
                    checkListener(listener);
                    events = target._events;
                    if (events === undefined) {
                        events = target._events = Object.create(null);
                        target._eventsCount = 0;
                    }
                    else {
                        if (events.newListener !== undefined) {
                            target.emit('newListener', type, listener.listener ? listener.listener : listener);
                            events = target._events;
                        }
                        existing = events[type];
                    }
                    if (existing === undefined) {
                        existing = events[type] = listener;
                        ++target._eventsCount;
                    }
                    else {
                        if (typeof existing === 'function') {
                            existing = events[type] =
                                prepend ? [listener, existing] : [existing, listener];
                        }
                        else if (prepend) {
                            existing.unshift(listener);
                        }
                        else {
                            existing.push(listener);
                        }
                        m = _getMaxListeners(target);
                        if (m > 0 && existing.length > m && !existing.warned) {
                            existing.warned = true;
                            var w = new Error('Possible EventEmitter memory leak detected. ' +
                                existing.length + ' ' + String(type) + ' listeners ' +
                                'added. Use emitter.setMaxListeners() to ' +
                                'increase limit');
                            w.name = 'MaxListenersExceededWarning';
                            w.emitter = target;
                            w.type = type;
                            w.count = existing.length;
                            ProcessEmitWarning(w);
                        }
                    }
                    return target;
                }
                EventEmitter.prototype.addListener = function addListener(type, listener) {
                    return _addListener(this, type, listener, false);
                };
                EventEmitter.prototype.on = EventEmitter.prototype.addListener;
                EventEmitter.prototype.prependListener =
                    function prependListener(type, listener) {
                        return _addListener(this, type, listener, true);
                    };
                function onceWrapper() {
                    if (!this.fired) {
                        this.target.removeListener(this.type, this.wrapFn);
                        this.fired = true;
                        if (arguments.length === 0)
                            return this.listener.call(this.target);
                        return this.listener.apply(this.target, arguments);
                    }
                }
                function _onceWrap(target, type, listener) {
                    var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
                    var wrapped = onceWrapper.bind(state);
                    wrapped.listener = listener;
                    state.wrapFn = wrapped;
                    return wrapped;
                }
                EventEmitter.prototype.once = function once(type, listener) {
                    checkListener(listener);
                    this.on(type, _onceWrap(this, type, listener));
                    return this;
                };
                EventEmitter.prototype.prependOnceListener =
                    function prependOnceListener(type, listener) {
                        checkListener(listener);
                        this.prependListener(type, _onceWrap(this, type, listener));
                        return this;
                    };
                EventEmitter.prototype.removeListener =
                    function removeListener(type, listener) {
                        var list, events, position, i, originalListener;
                        checkListener(listener);
                        events = this._events;
                        if (events === undefined)
                            return this;
                        list = events[type];
                        if (list === undefined)
                            return this;
                        if (list === listener || list.listener === listener) {
                            if (--this._eventsCount === 0)
                                this._events = Object.create(null);
                            else {
                                delete events[type];
                                if (events.removeListener)
                                    this.emit('removeListener', type, list.listener || listener);
                            }
                        }
                        else if (typeof list !== 'function') {
                            position = -1;
                            for (i = list.length - 1; i >= 0; i--) {
                                if (list[i] === listener || list[i].listener === listener) {
                                    originalListener = list[i].listener;
                                    position = i;
                                    break;
                                }
                            }
                            if (position < 0)
                                return this;
                            if (position === 0)
                                list.shift();
                            else {
                                spliceOne(list, position);
                            }
                            if (list.length === 1)
                                events[type] = list[0];
                            if (events.removeListener !== undefined)
                                this.emit('removeListener', type, originalListener || listener);
                        }
                        return this;
                    };
                EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
                EventEmitter.prototype.removeAllListeners =
                    function removeAllListeners(type) {
                        var listeners, events, i;
                        events = this._events;
                        if (events === undefined)
                            return this;
                        if (events.removeListener === undefined) {
                            if (arguments.length === 0) {
                                this._events = Object.create(null);
                                this._eventsCount = 0;
                            }
                            else if (events[type] !== undefined) {
                                if (--this._eventsCount === 0)
                                    this._events = Object.create(null);
                                else
                                    delete events[type];
                            }
                            return this;
                        }
                        if (arguments.length === 0) {
                            var keys = Object.keys(events);
                            var key;
                            for (i = 0; i < keys.length; ++i) {
                                key = keys[i];
                                if (key === 'removeListener')
                                    continue;
                                this.removeAllListeners(key);
                            }
                            this.removeAllListeners('removeListener');
                            this._events = Object.create(null);
                            this._eventsCount = 0;
                            return this;
                        }
                        listeners = events[type];
                        if (typeof listeners === 'function') {
                            this.removeListener(type, listeners);
                        }
                        else if (listeners !== undefined) {
                            for (i = listeners.length - 1; i >= 0; i--) {
                                this.removeListener(type, listeners[i]);
                            }
                        }
                        return this;
                    };
                function _listeners(target, type, unwrap) {
                    var events = target._events;
                    if (events === undefined)
                        return [];
                    var evlistener = events[type];
                    if (evlistener === undefined)
                        return [];
                    if (typeof evlistener === 'function')
                        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
                    return unwrap ?
                        unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
                }
                EventEmitter.prototype.listeners = function listeners(type) {
                    return _listeners(this, type, true);
                };
                EventEmitter.prototype.rawListeners = function rawListeners(type) {
                    return _listeners(this, type, false);
                };
                EventEmitter.listenerCount = function (emitter, type) {
                    if (typeof emitter.listenerCount === 'function') {
                        return emitter.listenerCount(type);
                    }
                    else {
                        return listenerCount.call(emitter, type);
                    }
                };
                EventEmitter.prototype.listenerCount = listenerCount;
                function listenerCount(type) {
                    var events = this._events;
                    if (events !== undefined) {
                        var evlistener = events[type];
                        if (typeof evlistener === 'function') {
                            return 1;
                        }
                        else if (evlistener !== undefined) {
                            return evlistener.length;
                        }
                    }
                    return 0;
                }
                EventEmitter.prototype.eventNames = function eventNames() {
                    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
                };
                function arrayClone(arr, n) {
                    var copy = new Array(n);
                    for (var i = 0; i < n; ++i)
                        copy[i] = arr[i];
                    return copy;
                }
                function spliceOne(list, index) {
                    for (; index + 1 < list.length; index++)
                        list[index] = list[index + 1];
                    list.pop();
                }
                function unwrapListeners(arr) {
                    var ret = new Array(arr.length);
                    for (var i = 0; i < ret.length; ++i) {
                        ret[i] = arr[i].listener || arr[i];
                    }
                    return ret;
                }
                function once(emitter, name) {
                    return new Promise(function (resolve, reject) {
                        function eventListener() {
                            if (errorListener !== undefined) {
                                emitter.removeListener('error', errorListener);
                            }
                            resolve([].slice.call(arguments));
                        }
                        ;
                        var errorListener;
                        if (name !== 'error') {
                            errorListener = function errorListener(err) {
                                emitter.removeListener(name, eventListener);
                                reject(err);
                            };
                            emitter.once('error', errorListener);
                        }
                        emitter.once(name, eventListener);
                    });
                }
            }),
            "./src/Control.tsx": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_35507__) => {
                __nested_webpack_require_35507__.r(__webpack_exports__);
                __nested_webpack_require_35507__.d(__webpack_exports__, {
                    "default": () => Control
                });
                var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_35507__("react");
                var react__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_35507__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_35507__("ractive-player");
                var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = __nested_webpack_require_35507__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
                var _recording_manager__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_35507__("./src/recording-manager.ts");
                var _RecordingRow__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_35507__("./src/RecordingRow.tsx");
                var _recorders_audio_recorder__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_35507__("./src/recorders/audio-recorder.tsx");
                var _recorders_marker_recorder__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_35507__("./src/recorders/marker-recorder.tsx");
                const { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.mobile;
                const { useForceUpdate } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.react;
                const mac = navigator.platform === "MacIntel";
                const bindings = {
                    start: mac ? "Alt+Meta+2" : "Ctrl+Alt+2",
                    pause: mac ? "Alt+Meta+3" : "Ctrl+Alt+3",
                    discard: mac ? "Alt+Meta+4" : "Ctrl+Alt+4"
                };
                function Control(props) {
                    var _a, _b;
                    const player = (0, ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
                    const [recordings, setRecordings] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
                    const forceUpdate = useForceUpdate();
                    const plugins = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
                        var _a;
                        return [
                            _recorders_audio_recorder__WEBPACK_IMPORTED_MODULE_4__.AudioRecorderPlugin, _recorders_marker_recorder__WEBPACK_IMPORTED_MODULE_5__.MarkerRecorderPlugin,
                            ...((_a = props.plugins) !== null && _a !== void 0 ? _a : [])
                        ];
                    }, [props.plugins]);
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        player.hub.on("canvasClick", () => false);
                    }, []);
                    const manager = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        var _a;
                        manager.current = (_a = props.manager) !== null && _a !== void 0 ? _a : new _recording_manager__WEBPACK_IMPORTED_MODULE_2__.default(player);
                        manager.current.hub.on("finalize", forceUpdate);
                        manager.current.hub.on("start", forceUpdate);
                        manager.current.hub.on("pause", forceUpdate);
                        manager.current.hub.on("resume", forceUpdate);
                    }, []);
                    const activePlugins = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
                    if (activePlugins.current === null) {
                        activePlugins.current = {};
                        for (const plugin of plugins) {
                            activePlugins.current[plugin.key] = false;
                        }
                    }
                    ;
                    const [pluginsByKey] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
                        const dict = {};
                        for (const plugin of plugins) {
                            dict[plugin.key] = plugin;
                        }
                        return dict;
                    });
                    const start = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
                        const { active, beginRecording, endRecording } = manager.current;
                        if (active) {
                            endRecording().then(recording => setRecordings(prev => prev.concat(recording)));
                        }
                        else {
                            beginRecording(plugins.filter(plugin => activePlugins.current[plugin.key]));
                        }
                    }, []);
                    const pause = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
                        const { active, paused, pauseRecording, resumeRecording } = manager.current;
                        if (active) {
                            paused ? resumeRecording() : pauseRecording();
                        }
                    }, []);
                    const discard = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
                        const { active, endRecording, hub } = manager.current;
                        if (active) {
                            const listeners = hub.listeners("finalize");
                            for (const listener of listeners) {
                                hub.off("finalize", listener);
                            }
                            try {
                                await endRecording();
                            }
                            catch (e) {
                                console.error(e);
                            }
                            for (const listener of listeners) {
                                hub.on("finalize", listener);
                            }
                            forceUpdate();
                        }
                    }, []);
                    const prevent = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => { }, []);
                    const callbacks = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({ start, pause, discard }), []);
                    const reducer = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((state, action) => {
                        player.keymap.unbind(state[action.command], callbacks[action.command]);
                        player.keymap.bind(action.seq, callbacks[action.command]);
                        return Object.assign(Object.assign({}, state), { [action.command]: action.seq });
                    }, []);
                    const [state, dispatch] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, bindings);
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        for (const key in state) {
                            player.keymap.bind(state[key], callbacks[key]);
                        }
                    }, []);
                    const onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
                        e.preventDefault();
                        const name = e.currentTarget.getAttribute("name");
                        const seq = e.currentTarget.dataset.value;
                        dispatch({ command: name, seq });
                        player.resumeKeyCapture();
                    }, []);
                    const identifyKey = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
                        e.preventDefault();
                        const seq = ractive_player__WEBPACK_IMPORTED_MODULE_1__.KeyMap.identify(e);
                        e.currentTarget.dataset.value = seq;
                        e.currentTarget.value = fmtSeq(seq);
                    }, []);
                    const warn = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
                    warn.current = recordings.length > 0;
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        window.addEventListener("beforeunload", (e) => {
                            if (warn.current)
                                e.returnValue = "You have recording data";
                        });
                    }, []);
                    const [paneOpen, setPaneOpen] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
                    const togglePane = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => onClick(() => {
                        setPaneOpen(prev => !prev);
                    }), []);
                    const dialogStyle = {
                        display: paneOpen ? "block" : "none"
                    };
                    const setActive = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => onClick((e) => {
                        const key = e.currentTarget.dataset.plugin;
                        activePlugins.current[key] = !activePlugins.current[key];
                        forceUpdate();
                    }), []);
                    const commands = [
                        ["Start/Stop recording", "start"],
                        ["Pause recording", "pause"],
                        ["Discard recording", "discard"]
                    ];
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "rp-recording" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "rp-recording-dialog", style: dialogStyle }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { id: "rp-recording-configuration" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { colSpan: 2 }, "Commands")), commands.map(([desc, key]) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: key }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { scope: "row" }, desc), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { onBlur: onBlur, readOnly: true, onFocus: player.suspendKeyCapture, onKeyDown: identifyKey, className: "shortcut", name: key, type: "text", value: fmtSeq(state[key]) }))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Configuration"), plugins.map((plugin, i) => {
                        const classNames = ["recorder-plugin-icon"];
                        if (activePlugins.current[plugin.key])
                            classNames.push("active");
                        const styles = {};
                        const enabled = typeof plugin.enabled === "undefined" || plugin.enabled();
                        if (!enabled) {
                            styles.opacity = 0.3;
                        }
                        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "recorder-plugin", key: plugin.key, title: plugin.title, style: styles }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({ className: classNames.join(" "), height: "36", width: "36", viewBox: "0 0 100 100", "data-plugin": plugin.key }, (enabled ? setActive : {})), react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { height: "100", width: "100", fill: activePlugins.current[plugin.key] ? "red" : "#222" }), plugin.icon), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "recorder-plugin-name" }, plugin.name)));
                    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Saved data"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", { className: "recordings" }, recordings.map((recording, i) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RecordingRow__WEBPACK_IMPORTED_MODULE_3__.default, { key: i, data: recording, pluginsByKey: pluginsByKey }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({ height: "36", width: "36", viewBox: "-50 -50 100 100" }, togglePane), react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", { cx: "0", cy: "0", r: "35", stroke: "white", strokeWidth: "5", fill: ((_a = manager.current) === null || _a === void 0 ? void 0 : _a.active) ? (((_b = manager.current) === null || _b === void 0 ? void 0 : _b.paused) ? "yellow" : "red") : "#666" }))));
                }
                function fmtSeq(str) {
                    if (navigator.platform !== "MacIntel")
                        return str;
                    if (str === void 0)
                        return str;
                    return str.split("+").map(k => {
                        if (k === "Ctrl")
                            return "^";
                        else if (k === "Alt")
                            return "⌥";
                        if (k === "Shift")
                            return "⇧";
                        if (k === "Meta")
                            return "⌘";
                        return k;
                    }).join("");
                }
            }),
            "./src/RecordingRow.tsx": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48605__) => {
                __nested_webpack_require_48605__.r(__webpack_exports__);
                __nested_webpack_require_48605__.d(__webpack_exports__, {
                    "default": () => RecordingRow
                });
                var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48605__("react");
                var react__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_48605__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_48605__("ractive-player");
                var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = __nested_webpack_require_48605__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
                function RecordingRow(props) {
                    const player = (0, ractive_player__WEBPACK_IMPORTED_MODULE_1__.usePlayer)();
                    const [name, setName] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)("Untitled");
                    const onChange = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
                        setName(e.target.value);
                    }, []);
                    const { data, pluginsByKey } = props;
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "recording-row" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "recording-name", onBlur: player.resumeKeyCapture, onFocus: player.suspendKeyCapture, onChange: onChange, type: "text", value: name }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: "recording-results" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, Object.keys(data).map(pluginKey => {
                        const plugin = pluginsByKey[pluginKey], SaveComponent = plugin.saveComponent;
                        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: pluginKey }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { key: "head", scope: "row" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: "recorder-plugin-icon", height: "36", width: "36", viewBox: "0 0 100 100" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { height: "100", width: "100", fill: "#222" }), plugin.icon)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { key: "cell" }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(SaveComponent, { data: data[pluginKey] }))));
                    })))));
                }
            }),
            "./src/plugin.tsx": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_51150__) => {
                __nested_webpack_require_51150__.r(__webpack_exports__);
                __nested_webpack_require_51150__.d(__webpack_exports__, {
                    "RecordingControl": () => _Control__WEBPACK_IMPORTED_MODULE_1__.default,
                    "RecordingManager": () => _recording_manager__WEBPACK_IMPORTED_MODULE_2__.default,
                    "Recorder": () => _recorder__WEBPACK_IMPORTED_MODULE_3__.Recorder,
                    "ReplayDataRecorder": () => _recorders_replay_data_recorder__WEBPACK_IMPORTED_MODULE_4__.ReplayDataRecorder,
                    "AudioRecorderPlugin": () => _recorders_audio_recorder__WEBPACK_IMPORTED_MODULE_5__.AudioRecorderPlugin,
                    "MarkerRecorderPlugin": () => _recorders_marker_recorder__WEBPACK_IMPORTED_MODULE_6__.MarkerRecorderPlugin
                });
                var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_51150__("./style.css");
                var _Control__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_51150__("./src/Control.tsx");
                var _recording_manager__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_51150__("./src/recording-manager.ts");
                var _recorder__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_51150__("./src/recorder.ts");
                var _recorders_replay_data_recorder__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_51150__("./src/recorders/replay-data-recorder.ts");
                var _recorders_audio_recorder__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_51150__("./src/recorders/audio-recorder.tsx");
                var _recorders_marker_recorder__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_51150__("./src/recorders/marker-recorder.tsx");
            }),
            "./src/recorder.ts": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_52923__) => {
                __nested_webpack_require_52923__.r(__webpack_exports__);
                __nested_webpack_require_52923__.d(__webpack_exports__, {
                    "Recorder": () => Recorder
                });
                class Recorder {
                    constructor() {
                        this.intransigent = false;
                    }
                    beginRecording() { }
                    pauseRecording() { }
                    resumeRecording() { }
                    endRecording() { }
                    finalizeRecording(data, startDelay = 0, stopDelay = 0) {
                        return data;
                    }
                    provide({ push, manager, player }) {
                        this.push = push;
                        this.manager = manager;
                        this.player = player;
                    }
                    getUpdate(data, lastDuration) { }
                }
            }),
            "./src/recorders/audio-recorder.tsx": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_53979__) => {
                __nested_webpack_require_53979__.r(__webpack_exports__);
                __nested_webpack_require_53979__.d(__webpack_exports__, {
                    "AudioRecorder": () => AudioRecorder,
                    "AudioSaveComponent": () => AudioSaveComponent,
                    "AudioRecorderPlugin": () => AudioRecorderPlugin
                });
                var _types_MediaRecorder__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_53979__("./src/types/MediaRecorder.ts");
                var _types_MediaRecorder__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_53979__.n(_types_MediaRecorder__WEBPACK_IMPORTED_MODULE_0__);
                var react__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_53979__("react");
                var react__WEBPACK_IMPORTED_MODULE_1___default = __nested_webpack_require_53979__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                var _recorder__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_53979__("./src/recorder.ts");
                const icon = (react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", { transform: "scale(0.126261032057) translate(164.575)" }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", { stroke: "#FFF", transform: "translate(-140.62 -173.21)" }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", { d: "m568.57 620.93c0 116.77-94.66 211.43-211.43 211.43s-211.43-94.66-211.43-211.43v-0.00001", fillOpacity: "0", transform: "translate(14.904)", strokeLinecap: "round", strokeWidth: "20" }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", { d: "m568.57 620.93c0 116.77-94.66 211.43-211.43 211.43s-211.43-94.66-211.43-211.43v-0.00001", fillOpacity: "0", transform: "translate(14.904)", strokeLinecap: "round", strokeWidth: "40" }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", { d: "m372.05 832.36v114.29", strokeWidth: "30", fill: "none" }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", { fill: "#FFF", d: "m197.14 920.93c0.00001-18.935 59.482-34.286 132.86-34.286 73.375 0 132.86 15.35 132.86 34.286z", transform: "translate(42.047 34.286)", strokeLinecap: "round", strokeWidth: "20" }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", { fill: "#FFF", strokeWidth: "21.455", strokeLinecap: "round", d: "m372.06 183.94c-77.019-0.00001-139.47 62.45-139.47 139.47v289.62c0 77.019 62.45 139.47 139.47 139.47 77.019 0 139.44-62.45 139.44-139.47v-289.62c0-77.02-62.42-139.47-139.44-139.47z" }))));
                class AudioRecorder extends _recorder__WEBPACK_IMPORTED_MODULE_2__.Recorder {
                    constructor() {
                        super();
                        this.intransigent = true;
                        if (location.protocol !== "https:")
                            return;
                        try {
                            navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
                                this.stream = stream;
                            });
                        }
                        catch (e) {
                            console.log("no recording allowed");
                        }
                    }
                    beginRecording() {
                        if (!this.stream)
                            throw new Error("Navigator stream not available");
                        if (document.location.protocol !== "https:")
                            throw new Error("Page must be accessed via HTTPS in order to record audio");
                        this.promise = new Promise(async (resolve, reject) => {
                            this.mediaRecorder = new MediaRecorder(this.stream, { mimeType: "audio/webm" });
                            this.mediaRecorder.addEventListener("dataavailable", e => {
                                this.push(e.data);
                            });
                            let startDelay;
                            this.mediaRecorder.addEventListener("start", () => {
                                startDelay = this.manager.getTime();
                            });
                            this.mediaRecorder.addEventListener("stop", () => {
                                resolve([startDelay, this.manager.getTime()]);
                            });
                            this.mediaRecorder.start();
                        });
                    }
                    pauseRecording() {
                        this.mediaRecorder.pause();
                    }
                    resumeRecording() {
                        this.mediaRecorder.resume();
                    }
                    async endRecording() {
                        this.mediaRecorder.stop();
                        return this.promise;
                    }
                    finalizeRecording(chunks) {
                        return new Blob(chunks, { type: "audio/webm" });
                    }
                }
                function AudioSaveComponent(props) {
                    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, props.data ?
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { download: "audio.webm", href: URL.createObjectURL(props.data) }, "Download Audio")
                        :
                            "Audio not yet available"));
                }
                const recorder = new AudioRecorder();
                const AudioRecorderPlugin = {
                    enabled: () => typeof recorder.stream !== "undefined",
                    icon,
                    key: "audio",
                    name: "Audio",
                    recorder,
                    saveComponent: AudioSaveComponent,
                    title: "Record audio"
                };
            }),
            "./src/recorders/marker-recorder.tsx": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_59839__) => {
                __nested_webpack_require_59839__.r(__webpack_exports__);
                __nested_webpack_require_59839__.d(__webpack_exports__, {
                    "MarkerRecorder": () => MarkerRecorder,
                    "MarkerSaveComponent": () => MarkerSaveComponent,
                    "MarkerRecorderPlugin": () => MarkerRecorderPlugin
                });
                var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_59839__("react");
                var react__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_59839__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                var _recorder__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_59839__("./src/recorder.ts");
                var ractive_player__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_59839__("ractive-player");
                var ractive_player__WEBPACK_IMPORTED_MODULE_2___default = __nested_webpack_require_59839__.n(ractive_player__WEBPACK_IMPORTED_MODULE_2__);
                const { bind } = ractive_player__WEBPACK_IMPORTED_MODULE_2__.Utils.misc, { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_2__.Utils.mobile, { formatTimeMs } = ractive_player__WEBPACK_IMPORTED_MODULE_2__.Utils.time;
                const icon = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", { fill: "#FFF", fontFamily: "Helvetica", fontSize: "75", textAnchor: "middle", x: "50", y: "75" }, "M"));
                class MarkerRecorder extends _recorder__WEBPACK_IMPORTED_MODULE_1__.Recorder {
                    constructor() {
                        super();
                        bind(this, ["onMarkerUpdate"]);
                    }
                    beginRecording() {
                        this.lastTime = 0;
                        this.player.script.hub.on("markerupdate", this.onMarkerUpdate);
                    }
                    endRecording() {
                        this.player.script.hub.off("markerupdate", this.onMarkerUpdate);
                        this.captureMarker(this.player.script.markerName);
                    }
                    finalizeRecording(data, startDelay, stopDelay) {
                        data[0][1] -= startDelay;
                        data[data.length - 1][1] += stopDelay;
                        return data.map(cue => [cue[0], formatTimeMs(cue[1])]);
                    }
                    onMarkerUpdate(prevIndex) {
                        if (this.manager.paused)
                            return;
                        const { script } = this.player;
                        this.captureMarker(script.markers[prevIndex][0]);
                    }
                    captureMarker(markerName) {
                        const t = this.manager.getTime();
                        this.push([markerName, t - this.lastTime]);
                        this.lastTime = t;
                    }
                }
                function MarkerSaveComponent(props) {
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { readOnly: true, value: format(props.data) })));
                }
                const MarkerRecorderPlugin = {
                    icon,
                    key: "markers",
                    name: "Markers",
                    recorder: new MarkerRecorder,
                    saveComponent: MarkerSaveComponent
                };
                function format(data) {
                    return JSON.stringify(data, null, 2).replace(/\[\s+"(.+?)",\s+"(.+?)"\s+\]/g, "[\"$1\", \"$2\"]");
                }
            }),
            "./src/recorders/replay-data-recorder.ts": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_63557__) => {
                __nested_webpack_require_63557__.r(__webpack_exports__);
                __nested_webpack_require_63557__.d(__webpack_exports__, {
                    "ReplayDataRecorder": () => ReplayDataRecorder
                });
                var _recorder__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_63557__("./src/recorder.ts");
                var ractive_player__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_63557__("ractive-player");
                var ractive_player__WEBPACK_IMPORTED_MODULE_1___default = __nested_webpack_require_63557__.n(ractive_player__WEBPACK_IMPORTED_MODULE_1__);
                const { bind } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.misc, { onClick } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.mobile, { formatTimeMs, parseTime } = ractive_player__WEBPACK_IMPORTED_MODULE_1__.Utils.time;
                class ReplayDataRecorder extends _recorder__WEBPACK_IMPORTED_MODULE_0__.Recorder {
                    constructor() {
                        super();
                        this.duration = 0;
                        this.index = -1;
                    }
                    beginRecording() {
                        this.duration = 0;
                        this.index = -1;
                    }
                    finalizeRecording(data, startDelay = 0, stopDelay = 0) {
                        for (let sum = 0, i = 0; i < data.length && sum < startDelay; ++i) {
                            const dur = data[i][0];
                            if (dur === 0) {
                                continue;
                            }
                            if (sum + dur >= startDelay) {
                                data[i][0] -= startDelay - sum;
                                break;
                            }
                            sum += dur;
                            data.splice(i, 1);
                            --i;
                        }
                        return data;
                    }
                    capture(time, data) {
                        if (time - this.duration < 0) {
                        }
                        this.push([time - this.duration, data]);
                        this.duration = time;
                    }
                }
                function formatNum(x) {
                    return parseFloat(x.toFixed(2));
                }
            }),
            "./src/recording-manager.ts": ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_66035__) => {
                __nested_webpack_require_66035__.r(__webpack_exports__);
                __nested_webpack_require_66035__.d(__webpack_exports__, {
                    "default": () => RecordingManager
                });
                var ractive_player__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_66035__("ractive-player");
                var ractive_player__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_66035__.n(ractive_player__WEBPACK_IMPORTED_MODULE_0__);
                var events__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_66035__("./node_modules/events/events.js");
                var events__WEBPACK_IMPORTED_MODULE_1___default = __nested_webpack_require_66035__.n(events__WEBPACK_IMPORTED_MODULE_1__);
                const { bind } = ractive_player__WEBPACK_IMPORTED_MODULE_0__.Utils.misc;
                class RecordingManager {
                    constructor(player) {
                        this.player = player;
                        this.captureData = {};
                        this.hub = new events__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
                        this.hub.setMaxListeners(0);
                        this.paused = false;
                        this.active = false;
                        bind(this, ["beginRecording", "endRecording", "pauseRecording", "resumeRecording", "capture"]);
                    }
                    beginRecording(plugins) {
                        this.plugins = plugins;
                        this.pauseTime = 0;
                        this.intransigentRecorder = void 0;
                        for (const plugin of this.plugins) {
                            const { recorder } = plugin;
                            recorder.provide({
                                push: (value) => this.capture(plugin.key, value),
                                manager: this,
                                player: this.player
                            });
                            this.captureData[plugin.key] = [];
                            if (recorder.intransigent) {
                                if (this.intransigentRecorder)
                                    throw new Error("At most one intransigent recorder is allowed");
                                this.intransigentRecorder = recorder;
                            }
                        }
                        this.baseTime = performance.now();
                        for (const plugin of this.plugins) {
                            plugin.recorder.beginRecording();
                        }
                        this.paused = false;
                        this.active = true;
                        this.hub.emit("start");
                    }
                    capture(key, value) {
                        this.captureData[key].push(value);
                        this.hub.emit("capture", key, value);
                    }
                    async endRecording() {
                        const endTime = this.getTime();
                        this.duration = endTime;
                        const recording = {};
                        let startDelay = 0, stopDelay = 0;
                        let promise;
                        if (this.intransigentRecorder) {
                            promise = this.intransigentRecorder.endRecording();
                        }
                        for (const plugin of this.plugins) {
                            if (plugin.recorder === this.intransigentRecorder)
                                continue;
                            plugin.recorder.endRecording();
                        }
                        if (this.intransigentRecorder) {
                            try {
                                const [startTime, stopTime] = await promise;
                                startDelay = startTime;
                                stopDelay = stopTime - endTime;
                                this.duration = this.duration + stopDelay - startDelay;
                            }
                            catch (e) {
                                startDelay = 0;
                                stopDelay = 0;
                                console.error(e);
                            }
                        }
                        for (const plugin of this.plugins) {
                            recording[plugin.key] = plugin.recorder.finalizeRecording(this.captureData[plugin.key], startDelay, stopDelay);
                            this.hub.emit("finalize", plugin.key, recording[plugin.key]);
                        }
                        this.active = false;
                        this.hub.emit("finalize", undefined, undefined);
                        return recording;
                    }
                    getTime() {
                        return performance.now() - this.baseTime - this.pauseTime;
                    }
                    pauseRecording() {
                        this.lastPauseTime = performance.now();
                        for (const plugin of this.plugins) {
                            plugin.recorder.pauseRecording();
                        }
                        this.paused = true;
                        this.hub.emit("pause");
                    }
                    setPlayer(player) {
                        this.player = player;
                    }
                    resumeRecording() {
                        this.pauseTime += performance.now() - this.lastPauseTime;
                        for (const plugin of this.plugins) {
                            plugin.recorder.resumeRecording();
                        }
                        this.paused = false;
                        this.hub.emit("resume");
                    }
                }
            }),
            "./src/types/MediaRecorder.ts": (() => {
            }),
            "ractive-player": ((module) => {
                module.exports = __WEBPACK_EXTERNAL_MODULE_ractive_player__;
            }),
            "react": ((module) => {
                module.exports = __WEBPACK_EXTERNAL_MODULE_react__;
            })
        });
        var __webpack_module_cache__ = {};
        function __nested_webpack_require_72211__(moduleId) {
            if (__webpack_module_cache__[moduleId]) {
                return __webpack_module_cache__[moduleId].exports;
            }
            var module = __webpack_module_cache__[moduleId] = {
                id: moduleId,
                exports: {}
            };
            __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_72211__);
            return module.exports;
        }
        (() => {
            __nested_webpack_require_72211__.n = (module) => {
                var getter = module && module.__esModule ?
                    () => module['default'] :
                    () => module;
                __nested_webpack_require_72211__.d(getter, { a: getter });
                return getter;
            };
        })();
        (() => {
            __nested_webpack_require_72211__.d = (exports, definition) => {
                for (var key in definition) {
                    if (__nested_webpack_require_72211__.o(definition, key) && !__nested_webpack_require_72211__.o(exports, key)) {
                        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    }
                }
            };
        })();
        (() => {
            __nested_webpack_require_72211__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        })();
        (() => {
            __nested_webpack_require_72211__.r = (exports) => {
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                }
                Object.defineProperty(exports, '__esModule', { value: true });
            };
        })();
        return __nested_webpack_require_72211__("./src/plugin.tsx");
    })();
});


/***/ }),

/***/ "./src/@development/controls.tsx":
/*!***************************************!*\
  !*** ./src/@development/controls.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rp_recording__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rp-recording */ "./node_modules/rp-recording/dist/rp-recording.js");
/* harmony import */ var rp_recording__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rp_recording__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [liqvid__WEBPACK_IMPORTED_MODULE_1__.Player.defaultControlsLeft, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({ className: "rp-controls-right" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_recording__WEBPACK_IMPORTED_MODULE_2__.RecordingControl, {}, void 0), liqvid__WEBPACK_IMPORTED_MODULE_1__.Player.defaultControlsRight] }), void 0)] }, void 0));


/***/ }),

/***/ "./src/Intro.tsx":
/*!***********************!*\
  !*** ./src/Intro.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Intro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var rp_katex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rp-katex */ "./node_modules/rp-katex/rp-katex.js");


function Intro(props) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({}, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", Object.assign({ "data-from-first": "intro/title", "data-from-last": "padics/" }, { children: "p-adic numbers" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", Object.assign({ id: "intro/agenda", "data-from-first": "intro/agenda" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "p-adic norm" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Completion" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: "Hensel's lemma" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_katex__WEBPACK_IMPORTED_MODULE_1__.KTX, { children: "\\mathbb Q_p" }, void 0), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rp_katex__WEBPACK_IMPORTED_MODULE_1__.KTX, { children: "\\mathbb Z_p" }, void 0)] }, void 0)] }), void 0)] }), void 0));
}


/***/ }),

/***/ "./src/Padics.tsx":
/*!************************!*\
  !*** ./src/Padics.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Padics)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Open extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.state = {
            p: props.p,
            r: props.r,
            r_child: props.r * 0.37,
            cx: props.cx,
            cy: props.cy,
            fill: props.fill,
            stroke: props.stroke,
            strokeWidth: props.strokeWidth,
            value: props.value,
            level: props.level,
            childs: []
        };
    }
    onClick() {
        let childs = [];
        for (let i = 0; i < this.state.p; i++) {
            const cx = (this.state.r - this.state.r_child) * Math.cos(2 * Math.PI * i / this.state.p);
            const cy = (this.state.r - this.state.r_child) * Math.sin(2 * Math.PI * i / this.state.p);
            childs.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Open, { p: this.state.p, r: this.state.r_child, cx: this.state.cx + (this.state.r - this.state.r_child) * Math.cos(2 * Math.PI * i / this.state.p), cy: this.state.cy - (this.state.r - this.state.r_child) * Math.sin(2 * Math.PI * i / this.state.p), fill: "lightgreen", stroke: this.state.stroke, strokeWidth: this.state.strokeWidth, value: this.state.value + i * this.state.p ** (1 + this.state.level), level: this.state.level + 1, childs: this.state.childs }, this.state.value + '_' + i));
        }
        this.setState({
            childs: childs,
        });
    }
    render() {
        let value = this.state.value;
        let is_open = this.state.is_open;
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { onClick: (e) => { this.onClick(); }, r: this.props.r, cx: this.props.cx, cy: this.props.cy, fill: this.props.fill, stroke: this.props.stroke, strokeWidth: this.props.strokeWidth }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", Object.assign({ x: this.props.cx, y: this.props.cy, fontSize: 0.8 * (0.37 ** (this.props.level)) + "em", fill: "black" }, { children: (this.state.childs.length === 0) ?
                        value :
                        '' }), void 0), this.state.childs] }, void 0));
    }
}
class Padics extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        const p = 5;
        const r = 50;
        const r_child = r * 0.37;
        this.state = {
            numbers: [],
            opens: [],
        };
        for (let i = 0; i < p; i++) {
            this.state.opens.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Open, { p: p, r: r_child, cx: (r - r_child) * Math.cos(2 * Math.PI * i / p), cy: -(r - r_child) * Math.sin(2 * Math.PI * i / p), fill: 'yellow', stroke: 'black', strokeWidth: 0.5, level: 0, value: i }, i));
        }
    }
    render() {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", Object.assign({}, this.props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", Object.assign({ x: 0, y: 0, fontSize: 0.5, fill: 'black' }, { children: "Click on the opens to see what's inside them" }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ id: "bubble", viewBox: "-50 -50 100 100" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "0", cy: "0", r: "50", fill: "blue" }, void 0), this.state.opens] }), void 0)] }), void 0));
    }
}


/***/ }),

/***/ "./src/markers.ts":
/*!************************!*\
  !*** ./src/markers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markers": () => (/* binding */ markers),
/* harmony export */   "script": () => (/* binding */ script),
/* harmony export */   "playback": () => (/* binding */ playback)
/* harmony export */ });
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_0__);

const markers = [
    ["intro/title", "0:01"],
    ["intro/agenda", "0:03"],
    ["padics/", "0:23"],
];
const script = new liqvid__WEBPACK_IMPORTED_MODULE_0__.Script(markers);
const playback = script.playback;


/***/ }),

/***/ "liqvid":
/*!*************************!*\
  !*** external "Liqvid" ***!
  \*************************/
/***/ ((module) => {

module.exports = Liqvid;

/***/ }),

/***/ "ractive-player":
/*!********************************!*\
  !*** external "RactivePlayer" ***!
  \********************************/
/***/ ((module) => {

module.exports = RactivePlayer;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! liqvid */ "liqvid");
/* harmony import */ var liqvid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(liqvid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _env_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/controls */ "./src/@development/controls.tsx");
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markers */ "./src/markers.ts");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Intro */ "./src/Intro.tsx");
/* harmony import */ var _Padics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Padics */ "./src/Padics.tsx");







function Lesson() {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(liqvid__WEBPACK_IMPORTED_MODULE_2__.Player, Object.assign({ controls: _env_controls__WEBPACK_IMPORTED_MODULE_3__.default, script: _markers__WEBPACK_IMPORTED_MODULE_4__.script }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Intro__WEBPACK_IMPORTED_MODULE_5__.default, { "data-during": "intro/" }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Padics__WEBPACK_IMPORTED_MODULE_6__.default, { "data-during": "padics/" }, void 0)] }), void 0));
}
react_dom__WEBPACK_IMPORTED_MODULE_1__.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Lesson, {}, void 0), document.querySelector("main"));

})();

/******/ })()
;