// Version 1.18.1 react-force-graph-2d - https://github.com/vasturiano/react-force-graph
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ForceGraph2D = factory(global.React));
}(this, (function (React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var omit = function omit(obj, keys) {
    var keySet = new Set(keys);
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(obj).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
          key = _ref3[0];

      return !keySet.has(key);
    }).map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          val = _ref5[1];

      return _defineProperty({}, key, val);
    }))));
  };

  /*! fromentries. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var fromentries = function fromEntries (iterable) {
    return [...iterable].reduce((obj, [key, val]) => {
      obj[key] = val;
      return obj
    }, {})
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest$1();
  }

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread$1();
  }

  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray$1(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit$1(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function index (kapsuleComponent, comboParam) {
    var _ref = _typeof(comboParam) === 'object' ? comboParam : {
      // support old schema for backwards compatibility
      wrapperElementType: comboParam,
      methodNames: (arguments.length <= 2 ? undefined : arguments[2]) || undefined,
      initPropNames: (arguments.length <= 3 ? undefined : arguments[3]) || undefined
    },
        _ref$wrapperElementTy = _ref.wrapperElementType,
        wrapperElementType = _ref$wrapperElementTy === void 0 ? 'div' : _ref$wrapperElementTy,
        _ref$nodeMapper = _ref.nodeMapper,
        nodeMapper = _ref$nodeMapper === void 0 ? function (node) {
      return node;
    } : _ref$nodeMapper,
        _ref$methodNames = _ref.methodNames,
        methodNames = _ref$methodNames === void 0 ? [] : _ref$methodNames,
        _ref$initPropNames = _ref.initPropNames,
        initPropNames = _ref$initPropNames === void 0 ? [] : _ref$initPropNames;

    return /*#__PURE__*/React.forwardRef(function (props, ref) {
      var domEl = React.useRef();

      var _useState = React.useState({}),
          _useState2 = _slicedToArray$1(_useState, 2),
          prevProps = _useState2[0],
          setPrevProps = _useState2[1];

      React.useEffect(function () {
        return setPrevProps(props);
      }); // remember previous props
      // instantiate the inner kapsule component with the defined initPropNames

      var comp = React.useMemo(function () {
        var configOptions = fromentries(initPropNames.filter(function (p) {
          return props.hasOwnProperty(p);
        }).map(function (prop) {
          return [prop, props[prop]];
        }));
        return kapsuleComponent(configOptions);
      }, []);
      React.useLayoutEffect(function () {
        comp(nodeMapper(domEl.current)); // mount kapsule synchronously on this element ref, optionally mapped into an object that the kapsule understands
      }, []);
      React.useEffect(function () {
        // invoke destructor on unmount, if it exists
        return comp._destructor instanceof Function ? comp._destructor : undefined;
      }, []); // Call a component method

      var _call = React.useCallback(function (method) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return comp[method] instanceof Function ? comp[method].apply(comp, args) : undefined;
      } // method not found
      , [comp]); // propagate component props that have changed


      var dynamicProps = omit(props, [].concat(_toConsumableArray$1(methodNames), _toConsumableArray$1(initPropNames))); // initPropNames or methodNames should not be called

      Object.keys(dynamicProps).filter(function (p) {
        return prevProps[p] !== props[p];
      }).forEach(function (p) {
        return _call(p, props[p]);
      }); // bind external methods to parent ref

      React.useImperativeHandle(ref, function () {
        return fromentries(methodNames.map(function (method) {
          return [method, function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return _call.apply(void 0, [method].concat(args));
          }];
        }));
      });
      return /*#__PURE__*/React__default['default'].createElement(wrapperElementType, {
        ref: domEl
      });
    });
  }

  var xhtml = "http://www.w3.org/1999/xhtml";

  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function namespace(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
  }

  function creatorInherit(name) {
    return function() {
      var document = this.ownerDocument,
          uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml
          ? document.createElement(name)
          : document.createElementNS(uri, name);
    };
  }

  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }

  function creator(name) {
    var fullname = namespace(name);
    return (fullname.local
        ? creatorFixed
        : creatorInherit)(fullname);
  }

  function none() {}

  function selector(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  function selection_select(select) {
    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }

    return new Selection(subgroups, this._parents);
  }

  function array(x) {
    return typeof x === "object" && "length" in x
      ? x // Array, TypedArray, NodeList, array-like
      : Array.from(x); // Map, Set, iterable, string, or anything else
  }

  function empty() {
    return [];
  }

  function selectorAll(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  function arrayAll(select) {
    return function() {
      var group = select.apply(this, arguments);
      return group == null ? [] : array(group);
    };
  }

  function selection_selectAll(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }

    return new Selection(subgroups, parents);
  }

  function matcher(selector) {
    return function() {
      return this.matches(selector);
    };
  }

  function childMatcher(selector) {
    return function(node) {
      return node.matches(selector);
    };
  }

  var find = Array.prototype.find;

  function childFind(match) {
    return function() {
      return find.call(this.children, match);
    };
  }

  function childFirst() {
    return this.firstElementChild;
  }

  function selection_selectChild(match) {
    return this.select(match == null ? childFirst
        : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  var filter = Array.prototype.filter;

  function children() {
    return this.children;
  }

  function childrenFilter(match) {
    return function() {
      return filter.call(this.children, match);
    };
  }

  function selection_selectChildren(match) {
    return this.selectAll(match == null ? children
        : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  function selection_filter(match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Selection(subgroups, this._parents);
  }

  function sparse(update) {
    return new Array(update.length);
  }

  function selection_enter() {
    return new Selection(this._enter || this._groups.map(sparse), this._parents);
  }

  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }

  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
    insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
    querySelector: function(selector) { return this._parent.querySelector(selector); },
    querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
  };

  function constant(x) {
    return function() {
      return x;
    };
  }

  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length;

    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }

  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
        node,
        nodeByKeyValue = new Map,
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue;

    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }

    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
        exit[i] = node;
      }
    }
  }

  function datum(node) {
    return node.__data__;
  }

  function selection_data(value, key) {
    if (!arguments.length) return Array.from(this, datum);

    var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;

    if (typeof value !== "function") value = constant(value);

    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = array(value.call(parent, parent && parent.__data__, j, parents)),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);

      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

      // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
    }

    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }

  function selection_exit() {
    return new Selection(this._exit || this._groups.map(sparse), this._parents);
  }

  function selection_join(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null) update = onupdate(update);
    if (onexit == null) exit.remove(); else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  function selection_merge(selection) {
    if (!(selection instanceof Selection)) throw new Error("invalid merge");

    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Selection(merges, this._parents);
  }

  function selection_order() {

    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }

    return this;
  }

  function selection_sort(compare) {
    if (!compare) compare = ascending;

    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }

    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }

    return new Selection(sortgroups, this._parents).order();
  }

  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function selection_call() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  function selection_nodes() {
    return Array.from(this);
  }

  function selection_node() {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }

    return null;
  }

  function selection_size() {
    let size = 0;
    for (const node of this) ++size; // eslint-disable-line no-unused-vars
    return size;
  }

  function selection_empty() {
    return !this.node();
  }

  function selection_each(callback) {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }

    return this;
  }

  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }

  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }

  function attrFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);
      else this.setAttribute(name, v);
    };
  }

  function attrFunctionNS(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
      else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }

  function selection_attr(name, value) {
    var fullname = namespace(name);

    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local
          ? node.getAttributeNS(fullname.space, fullname.local)
          : node.getAttribute(fullname);
    }

    return this.each((value == null
        ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
        ? (fullname.local ? attrFunctionNS : attrFunction)
        : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
  }

  function defaultView(node) {
    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
        || (node.document && node) // node is a Window
        || node.defaultView; // node is a Document
  }

  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }

  function styleFunction(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);
      else this.style.setProperty(name, v, priority);
    };
  }

  function selection_style(name, value, priority) {
    return arguments.length > 1
        ? this.each((value == null
              ? styleRemove : typeof value === "function"
              ? styleFunction
              : styleConstant)(name, value, priority == null ? "" : priority))
        : styleValue(this.node(), name);
  }

  function styleValue(node, name) {
    return node.style.getPropertyValue(name)
        || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }

  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }

  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];
      else this[name] = v;
    };
  }

  function selection_property(name, value) {
    return arguments.length > 1
        ? this.each((value == null
            ? propertyRemove : typeof value === "function"
            ? propertyFunction
            : propertyConstant)(name, value))
        : this.node()[name];
  }

  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }

  function classList(node) {
    return node.classList || new ClassList(node);
  }

  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }

  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };

  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.add(names[i]);
  }

  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.remove(names[i]);
  }

  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }

  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }

  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }

  function selection_classed(name, value) {
    var names = classArray(name + "");

    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }

    return this.each((typeof value === "function"
        ? classedFunction : value
        ? classedTrue
        : classedFalse)(names, value));
  }

  function textRemove() {
    this.textContent = "";
  }

  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }

  function selection_text(value) {
    return arguments.length
        ? this.each(value == null
            ? textRemove : (typeof value === "function"
            ? textFunction
            : textConstant)(value))
        : this.node().textContent;
  }

  function htmlRemove() {
    this.innerHTML = "";
  }

  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }

  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }

  function selection_html(value) {
    return arguments.length
        ? this.each(value == null
            ? htmlRemove : (typeof value === "function"
            ? htmlFunction
            : htmlConstant)(value))
        : this.node().innerHTML;
  }

  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }

  function selection_raise() {
    return this.each(raise);
  }

  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function selection_lower() {
    return this.each(lower);
  }

  function selection_append(name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function() {
      return this.appendChild(create.apply(this, arguments));
    });
  }

  function constantNull() {
    return null;
  }

  function selection_insert(name, before) {
    var create = typeof name === "function" ? name : creator(name),
        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function() {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }

  function selection_remove() {
    return this.each(remove);
  }

  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  function selection_datum(value) {
    return arguments.length
        ? this.property("__data__", value)
        : this.node().__data__;
  }

  function contextListener(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }

  function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {type: t, name: name};
    });
  }

  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;
      else delete this.__on;
    };
  }

  function onAdd(typename, value, options) {
    return function() {
      var on = this.__on, o, listener = contextListener(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
      if (!on) this.__on = [o];
      else on.push(o);
    };
  }

  function selection_on(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }

    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
    return this;
  }

  function dispatchEvent(node, type, params) {
    var window = defaultView(node),
        event = window.CustomEvent;

    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
      else event.initEvent(type, false, false);
    }

    node.dispatchEvent(event);
  }

  function dispatchConstant(type, params) {
    return function() {
      return dispatchEvent(this, type, params);
    };
  }

  function dispatchFunction(type, params) {
    return function() {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }

  function selection_dispatch(type, params) {
    return this.each((typeof params === "function"
        ? dispatchFunction
        : dispatchConstant)(type, params));
  }

  function* selection_iterator() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) yield node;
      }
    }
  }

  var root = [null];

  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }

  function selection() {
    return new Selection([[document.documentElement]], root);
  }

  function selection_selection() {
    return this;
  }

  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: selection_select,
    selectAll: selection_selectAll,
    selectChild: selection_selectChild,
    selectChildren: selection_selectChildren,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    selection: selection_selection,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch,
    [Symbol.iterator]: selection_iterator
  };

  function select(selector) {
    return typeof selector === "string"
        ? new Selection([[document.querySelector(selector)]], [document.documentElement])
        : new Selection([[selector]], root);
  }

  function sourceEvent(event) {
    let sourceEvent;
    while (sourceEvent = event.sourceEvent) event = sourceEvent;
    return event;
  }

  function pointer(event, node) {
    event = sourceEvent(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
      var svg = node.ownerSVGElement || node;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        point.x = event.clientX, point.y = event.clientY;
        point = point.matrixTransform(node.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      if (node.getBoundingClientRect) {
        var rect = node.getBoundingClientRect();
        return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
      }
    }
    return [event.pageX, event.pageY];
  }

  var noop = {value: () => {}};

  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }

  function Dispatch(_) {
    this._ = _;
  }

  function parseTypenames$1(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {type: t, name: name};
    });
  }

  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _ = this._,
          T = parseTypenames$1(typename + "", _),
          t,
          i = -1,
          n = T.length;

      // If no callback was specified, return the callback of the given type and name.
      if (arguments.length < 2) {
        while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
        return;
      }

      // If a type was specified, set the callback for the given type and name.
      // Otherwise, if a null callback was specified, remove callbacks of the given name.
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
        else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
      }

      return this;
    },
    copy: function() {
      var copy = {}, _ = this._;
      for (var t in _) copy[t] = _[t].slice();
      return new Dispatch(copy);
    },
    call: function(type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    }
  };

  function get(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }

  function set(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
    }
    if (callback != null) type.push({name: name, value: callback});
    return type;
  }

  function nopropagation(event) {
    event.stopImmediatePropagation();
  }

  function noevent(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  function dragDisable(view) {
    var root = view.document.documentElement,
        selection = select(view).on("dragstart.drag", noevent, true);
    if ("onselectstart" in root) {
      selection.on("selectstart.drag", noevent, true);
    } else {
      root.__noselect = root.style.MozUserSelect;
      root.style.MozUserSelect = "none";
    }
  }

  function yesdrag(view, noclick) {
    var root = view.document.documentElement,
        selection = select(view).on("dragstart.drag", null);
    if (noclick) {
      selection.on("click.drag", noevent, true);
      setTimeout(function() { selection.on("click.drag", null); }, 0);
    }
    if ("onselectstart" in root) {
      selection.on("selectstart.drag", null);
    } else {
      root.style.MozUserSelect = root.__noselect;
      delete root.__noselect;
    }
  }

  var constant$1 = x => () => x;

  function DragEvent(type, {
    sourceEvent,
    subject,
    target,
    identifier,
    active,
    x, y, dx, dy,
    dispatch
  }) {
    Object.defineProperties(this, {
      type: {value: type, enumerable: true, configurable: true},
      sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
      subject: {value: subject, enumerable: true, configurable: true},
      target: {value: target, enumerable: true, configurable: true},
      identifier: {value: identifier, enumerable: true, configurable: true},
      active: {value: active, enumerable: true, configurable: true},
      x: {value: x, enumerable: true, configurable: true},
      y: {value: y, enumerable: true, configurable: true},
      dx: {value: dx, enumerable: true, configurable: true},
      dy: {value: dy, enumerable: true, configurable: true},
      _: {value: dispatch}
    });
  }

  DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
  };

  // Ignore right-click, since that should open the context menu.
  function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
  }

  function defaultContainer() {
    return this.parentNode;
  }

  function defaultSubject(event, d) {
    return d == null ? {x: event.x, y: event.y} : d;
  }

  function defaultTouchable() {
    return navigator.maxTouchPoints || ("ontouchstart" in this);
  }

  function drag() {
    var filter = defaultFilter,
        container = defaultContainer,
        subject = defaultSubject,
        touchable = defaultTouchable,
        gestures = {},
        listeners = dispatch("start", "drag", "end"),
        active = 0,
        mousedownx,
        mousedowny,
        mousemoving,
        touchending,
        clickDistance2 = 0;

    function drag(selection) {
      selection
          .on("mousedown.drag", mousedowned)
        .filter(touchable)
          .on("touchstart.drag", touchstarted)
          .on("touchmove.drag", touchmoved)
          .on("touchend.drag touchcancel.drag", touchended)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }

    function mousedowned(event, d) {
      if (touchending || !filter.call(this, event, d)) return;
      var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
      if (!gesture) return;
      select(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
      dragDisable(event.view);
      nopropagation(event);
      mousemoving = false;
      mousedownx = event.clientX;
      mousedowny = event.clientY;
      gesture("start", event);
    }

    function mousemoved(event) {
      noevent(event);
      if (!mousemoving) {
        var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
        mousemoving = dx * dx + dy * dy > clickDistance2;
      }
      gestures.mouse("drag", event);
    }

    function mouseupped(event) {
      select(event.view).on("mousemove.drag mouseup.drag", null);
      yesdrag(event.view, mousemoving);
      noevent(event);
      gestures.mouse("end", event);
    }

    function touchstarted(event, d) {
      if (!filter.call(this, event, d)) return;
      var touches = event.changedTouches,
          c = container.call(this, event, d),
          n = touches.length, i, gesture;

      for (i = 0; i < n; ++i) {
        if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
          nopropagation(event);
          gesture("start", event, touches[i]);
        }
      }
    }

    function touchmoved(event) {
      var touches = event.changedTouches,
          n = touches.length, i, gesture;

      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          noevent(event);
          gesture("drag", event, touches[i]);
        }
      }
    }

    function touchended(event) {
      var touches = event.changedTouches,
          n = touches.length, i, gesture;

      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          nopropagation(event);
          gesture("end", event, touches[i]);
        }
      }
    }

    function beforestart(that, container, event, d, identifier, touch) {
      var dispatch = listeners.copy(),
          p = pointer(touch || event, container), dx, dy,
          s;

      if ((s = subject.call(that, new DragEvent("beforestart", {
          sourceEvent: event,
          target: drag,
          identifier,
          active,
          x: p[0],
          y: p[1],
          dx: 0,
          dy: 0,
          dispatch
        }), d)) == null) return;

      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;

      return function gesture(type, event, touch) {
        var p0 = p, n;
        switch (type) {
          case "start": gestures[identifier] = gesture, n = active++; break;
          case "end": delete gestures[identifier], --active; // nobreak
          case "drag": p = pointer(touch || event, container), n = active; break;
        }
        dispatch.call(
          type,
          that,
          new DragEvent(type, {
            sourceEvent: event,
            subject: s,
            target: drag,
            identifier,
            active: n,
            x: p[0] + dx,
            y: p[1] + dy,
            dx: p[0] - p0[0],
            dy: p[1] - p0[1],
            dispatch
          }),
          d
        );
      };
    }

    drag.filter = function(_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$1(!!_), drag) : filter;
    };

    drag.container = function(_) {
      return arguments.length ? (container = typeof _ === "function" ? _ : constant$1(_), drag) : container;
    };

    drag.subject = function(_) {
      return arguments.length ? (subject = typeof _ === "function" ? _ : constant$1(_), drag) : subject;
    };

    drag.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$1(!!_), drag) : touchable;
    };

    drag.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? drag : value;
    };

    drag.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };

    return drag;
  }

  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}

  var darker = 0.7;
  var brighter = 1 / darker;

  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
      reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
      reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
      reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
      reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
      reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define(Color, color, {
    copy: function(channels) {
      return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: color_formatHex, // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });

  function color_formatHex() {
    return this.rgb().formatHex();
  }

  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }

  function color_formatRgb() {
    return this.rgb().formatRgb();
  }

  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
        : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
        : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
        : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
        : null) // invalid hex
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }

  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Rgb, rgb, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return (-0.5 <= this.r && this.r < 255.5)
          && (-0.5 <= this.g && this.g < 255.5)
          && (-0.5 <= this.b && this.b < 255.5)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }

  function rgb_formatRgb() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }

  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }

  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function() {
      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(")
          + (this.h || 0) + ", "
          + (this.s || 0) * 100 + "%, "
          + (this.l || 0) * 100 + "%"
          + (a === 1 ? ")" : ", " + a + ")");
    }
  }));

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  var constant$2 = x => () => x;

  function linear(a, d) {
    return function(t) {
      return a + t * d;
    };
  }

  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
      return Math.pow(a + t * b, y);
    };
  }

  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y) : constant$2(isNaN(a) ? b : a);
    };
  }

  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant$2(isNaN(a) ? b : a);
  }

  var interpolateRgb = (function rgbGamma(y) {
    var color = gamma(y);

    function rgb$1(start, end) {
      var r = color((start = rgb(start)).r, (end = rgb(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }

    rgb$1.gamma = rgbGamma;

    return rgb$1;
  })(1);

  function interpolateNumber(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");

  function zero(b) {
    return function() {
      return b;
    };
  }

  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }

  function interpolateString(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
        am, // current match in a
        bm, // current match in b
        bs, // string preceding current number in b, if any
        i = -1, // index in s
        s = [], // string constants and placeholders
        q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) { // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else { // interpolate non-matching numbers
        s[++i] = null;
        q.push({i: i, x: interpolateNumber(am, bm)});
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          });
  }

  var degrees = 180 / Math.PI;

  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };

  function decompose(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var svgNode;

  /* eslint-disable no-undef */
  function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
  }

  function parseSvg(value) {
    if (value == null) return identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  function interpolateTransform(parse, pxComma, pxParen, degParen) {

    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }

    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }

    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
        q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }

    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }

    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }

    return function(a, b) {
      var s = [], // string constants and placeholders
          q = []; // number interpolators
      a = parse(a), b = parse(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null; // gc
      return function(t) {
        var i = -1, n = q.length, o;
        while (++i < n) s[(o = q[i]).i] = o.x(t);
        return s.join("");
      };
    };
  }

  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  var epsilon2 = 1e-12;

  function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }

  function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }

  function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }

  var interpolateZoom = (function zoomRho(rho, rho2, rho4) {

    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
      var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
          ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
          dx = ux1 - ux0,
          dy = uy1 - uy0,
          d2 = dx * dx + dy * dy,
          i,
          S;

      // Special case for u0 ≅ u1.
      if (d2 < epsilon2) {
        S = Math.log(w1 / w0) / rho;
        i = function(t) {
          return [
            ux0 + t * dx,
            uy0 + t * dy,
            w0 * Math.exp(rho * t * S)
          ];
        };
      }

      // General case.
      else {
        var d1 = Math.sqrt(d2),
            b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
            b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
            r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
            r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
        S = (r1 - r0) / rho;
        i = function(t) {
          var s = t * S,
              coshr0 = cosh(r0),
              u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
          return [
            ux0 + u * dx,
            uy0 + u * dy,
            w0 * coshr0 / cosh(rho * s + r0)
          ];
        };
      }

      i.duration = S * 1000 * rho / Math.SQRT2;

      return i;
    }

    zoom.rho = function(_) {
      var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
      return zoomRho(_1, _2, _4);
    };

    return zoom;
  })(Math.SQRT2, 2, 4);

  var frame = 0, // is an animation frame pending?
      timeout = 0, // is a timeout pending?
      interval = 0, // are any timers active?
      pokeDelay = 1000, // how frequently we check for clock skew
      taskHead,
      taskTail,
      clockLast = 0,
      clockNow = 0,
      clockSkew = 0,
      clock = typeof performance === "object" && performance.now ? performance : Date,
      setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }

  function clearNow() {
    clockNow = 0;
  }

  function Timer() {
    this._call =
    this._time =
    this._next = null;
  }

  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;
        else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };

  function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
  }

  function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
      t = t._next;
    }
    --frame;
  }

  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }

  function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
  }

  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }

  function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
      if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  function timeout$1(callback, delay, time) {
    var t = new Timer;
    delay = delay == null ? 0 : +delay;
    t.restart(elapsed => {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  var emptyOn = dispatch("start", "end", "cancel", "interrupt");
  var emptyTween = [];

  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;

  function schedule(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    create(node, id, {
      name: name,
      index: index, // For context during callback.
      group: group, // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }

  function init(node, id) {
    var schedule = get$1(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }

  function set$1(node, id) {
    var schedule = get$1(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }

  function get$1(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
  }

  function create(node, id, self) {
    var schedules = node.__transition,
        tween;

    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = timer(schedule, 0, self.time);

    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start, self.delay, self.time);

      // If the elapsed delay is less than our first sleep, start immediately.
      if (self.delay <= elapsed) start(elapsed - self.delay);
    }

    function start(elapsed) {
      var i, j, n, o;

      // If the state is not SCHEDULED, then we previously errored on start.
      if (self.state !== SCHEDULED) return stop();

      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name) continue;

        // While this element already has a starting transition during this frame,
        // defer starting an interrupting transition until that transition has a
        // chance to tick (and possibly end); see d3/d3-transition#54!
        if (o.state === STARTED) return timeout$1(start);

        // Interrupt the active transition, if any.
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }

        // Cancel any pre-empted transitions.
        else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }

      // Defer the first tick to end of the current frame; see d3/d3#1576.
      // Note the transition may be canceled after start and before the first tick!
      // Note this must be scheduled before the start event; see d3/d3-transition#16!
      // Assuming this is successful, subsequent callbacks go straight to tick.
      timeout$1(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });

      // Dispatch the start event.
      // Note this must be done before the tween are initialized.
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return; // interrupted
      self.state = STARTED;

      // Initialize the tween, deleting null tween.
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }

    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
          i = -1,
          n = tween.length;

      while (++i < n) {
        tween[i].call(node, t);
      }

      // Dispatch the end event.
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }

    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id];
      for (var i in schedules) return; // eslint-disable-line no-unused-vars
      delete node.__transition;
    }
  }

  function interrupt(node, name) {
    var schedules = node.__transition,
        schedule,
        active,
        empty = true,
        i;

    if (!schedules) return;

    name = name == null ? null : name + "";

    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }

    if (empty) delete node.__transition;
  }

  function selection_interrupt(name) {
    return this.each(function() {
      interrupt(this, name);
    });
  }

  function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
      var schedule = set$1(this, id),
          tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }

      schedule.tween = tween1;
    };
  }

  function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
      var schedule = set$1(this, id),
          tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n) tween1.push(t);
      }

      schedule.tween = tween1;
    };
  }

  function transition_tween(name, value) {
    var id = this._id;

    name += "";

    if (arguments.length < 2) {
      var tween = get$1(this.node(), id).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }

    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
  }

  function tweenValue(transition, name, value) {
    var id = transition._id;

    transition.each(function() {
      var schedule = set$1(this, id);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });

    return function(node) {
      return get$1(node, id).value[name];
    };
  }

  function interpolate(a, b) {
    var c;
    return (typeof b === "number" ? interpolateNumber
        : b instanceof color ? interpolateRgb
        : (c = color(b)) ? (b = c, interpolateRgb)
        : interpolateString)(a, b);
  }

  function attrRemove$1(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS$1(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant$1(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrConstantNS$1(fullname, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrFunction$1(name, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function attrFunctionNS$1(fullname, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function transition_attr(name, value) {
    var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value === "function"
        ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
        : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
        : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
  }

  function attrInterpolate(name, i) {
    return function(t) {
      this.setAttribute(name, i.call(this, t));
    };
  }

  function attrInterpolateNS(fullname, i) {
    return function(t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }

  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function transition_attrTween(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  function delayFunction(id, value) {
    return function() {
      init(this, id).delay = +value.apply(this, arguments);
    };
  }

  function delayConstant(id, value) {
    return value = +value, function() {
      init(this, id).delay = value;
    };
  }

  function transition_delay(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? delayFunction
            : delayConstant)(id, value))
        : get$1(this.node(), id).delay;
  }

  function durationFunction(id, value) {
    return function() {
      set$1(this, id).duration = +value.apply(this, arguments);
    };
  }

  function durationConstant(id, value) {
    return value = +value, function() {
      set$1(this, id).duration = value;
    };
  }

  function transition_duration(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? durationFunction
            : durationConstant)(id, value))
        : get$1(this.node(), id).duration;
  }

  function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
      set$1(this, id).ease = value;
    };
  }

  function transition_ease(value) {
    var id = this._id;

    return arguments.length
        ? this.each(easeConstant(id, value))
        : get$1(this.node(), id).ease;
  }

  function easeVarying(id, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (typeof v !== "function") throw new Error;
      set$1(this, id).ease = v;
    };
  }

  function transition_easeVarying(value) {
    if (typeof value !== "function") throw new Error;
    return this.each(easeVarying(this._id, value));
  }

  function transition_filter(match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  function transition_merge(transition) {
    if (transition._id !== this._id) throw new Error;

    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Transition(merges, this._parents, this._name, this._id);
  }

  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0) t = t.slice(0, i);
      return !t || t === "start";
    });
  }

  function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? init : set$1;
    return function() {
      var schedule = sit(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

      schedule.on = on1;
    };
  }

  function transition_on(name, listener) {
    var id = this._id;

    return arguments.length < 2
        ? get$1(this.node(), id).on.on(name)
        : this.each(onFunction(id, name, listener));
  }

  function removeFunction(id) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition) if (+i !== id) return;
      if (parent) parent.removeChild(this);
    };
  }

  function transition_remove() {
    return this.on("end.remove", removeFunction(this._id));
  }

  function transition_select(select) {
    var name = this._name,
        id = this._id;

    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
        }
      }
    }

    return new Transition(subgroups, this._parents, name, id);
  }

  function transition_selectAll(select) {
    var name = this._name,
        id = this._id;

    if (typeof select !== "function") select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
            if (child = children[k]) {
              schedule(child, name, id, k, children, inherit);
            }
          }
          subgroups.push(children);
          parents.push(node);
        }
      }
    }

    return new Transition(subgroups, parents, name, id);
  }

  var Selection$1 = selection.prototype.constructor;

  function transition_selection() {
    return new Selection$1(this._groups, this._parents);
  }

  function styleNull(name, interpolate) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0 = styleValue(this, name),
          string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }

  function styleRemove$1(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant$1(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function styleFunction$1(name, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0 = styleValue(this, name),
          value1 = value(this),
          string1 = value1 + "";
      if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
      var schedule = set$1(this, id),
          on = schedule.on,
          listener = schedule.value[key] == null ? remove || (remove = styleRemove$1(name)) : undefined;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

      schedule.on = on1;
    };
  }

  function transition_style(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value == null ? this
        .styleTween(name, styleNull(name, i))
        .on("end.style." + name, styleRemove$1(name))
      : typeof value === "function" ? this
        .styleTween(name, styleFunction$1(name, i, tweenValue(this, "style." + name, value)))
        .each(styleMaybeRemove(this._id, name))
      : this
        .styleTween(name, styleConstant$1(name, i, value), priority)
        .on("end.style." + name, null);
  }

  function styleInterpolate(name, i, priority) {
    return function(t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }

  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }

  function transition_styleTween(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  function textConstant$1(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction$1(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }

  function transition_text(value) {
    return this.tween("text", typeof value === "function"
        ? textFunction$1(tweenValue(this, "text", value))
        : textConstant$1(value == null ? "" : value + ""));
  }

  function textInterpolate(i) {
    return function(t) {
      this.textContent = i.call(this, t);
    };
  }

  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function transition_textTween(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
  }

  function transition_transition() {
    var name = this._name,
        id0 = this._id,
        id1 = newId();

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit = get$1(node, id0);
          schedule(node, name, id1, i, group, {
            time: inherit.time + inherit.delay + inherit.duration,
            delay: 0,
            duration: inherit.duration,
            ease: inherit.ease
          });
        }
      }
    }

    return new Transition(groups, this._parents, name, id1);
  }

  function transition_end() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = {value: reject},
          end = {value: function() { if (--size === 0) resolve(); }};

      that.each(function() {
        var schedule = set$1(this, id),
            on = schedule.on;

        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }

        schedule.on = on1;
      });

      // The selection was empty, resolve end immediately
      if (size === 0) resolve();
    });
  }

  var id = 0;

  function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
  }

  function transition(name) {
    return selection().transition(name);
  }

  function newId() {
    return ++id;
  }

  var selection_prototype = selection.prototype;

  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    textTween: transition_textTween,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease,
    easeVarying: transition_easeVarying,
    end: transition_end,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };

  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  var defaultTiming = {
    time: null, // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };

  function inherit(node, id) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id} not found`);
      }
    }
    return timing;
  }

  function selection_transition(name) {
    var id,
        timing;

    if (name instanceof Transition) {
      id = name._id, name = name._name;
    } else {
      id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id, i, group, timing || inherit(node, id));
        }
      }
    }

    return new Transition(groups, this._parents, name, id);
  }

  selection.prototype.interrupt = selection_interrupt;
  selection.prototype.transition = selection_transition;

  var constant$3 = x => () => x;

  function ZoomEvent(type, {
    sourceEvent,
    target,
    transform,
    dispatch
  }) {
    Object.defineProperties(this, {
      type: {value: type, enumerable: true, configurable: true},
      sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
      target: {value: target, enumerable: true, configurable: true},
      transform: {value: transform, enumerable: true, configurable: true},
      _: {value: dispatch}
    });
  }

  function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
  }

  Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
      return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
      return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function(x) {
      return x * this.k + this.x;
    },
    applyY: function(y) {
      return y * this.k + this.y;
    },
    invert: function(location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function(x) {
      return (x - this.x) / this.k;
    },
    invertY: function(y) {
      return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
      return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
      return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };

  var identity$1 = new Transform(1, 0, 0);

  transform.prototype = Transform.prototype;

  function transform(node) {
    while (!node.__zoom) if (!(node = node.parentNode)) return identity$1;
    return node.__zoom;
  }

  function nopropagation$1(event) {
    event.stopImmediatePropagation();
  }

  function noevent$1(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // Ignore right-click, since that should open the context menu.
  // except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
  function defaultFilter$1(event) {
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
  }

  function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
      e = e.ownerSVGElement || e;
      if (e.hasAttribute("viewBox")) {
        e = e.viewBox.baseVal;
        return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
      }
      return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
    }
    return [[0, 0], [e.clientWidth, e.clientHeight]];
  }

  function defaultTransform() {
    return this.__zoom || identity$1;
  }

  function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
  }

  function defaultTouchable$1() {
    return navigator.maxTouchPoints || ("ontouchstart" in this);
  }

  function defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
        dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
        dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
        dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(
      dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
      dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
    );
  }

  function zoom() {
    var filter = defaultFilter$1,
        extent = defaultExtent,
        constrain = defaultConstrain,
        wheelDelta = defaultWheelDelta,
        touchable = defaultTouchable$1,
        scaleExtent = [0, Infinity],
        translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
        duration = 250,
        interpolate = interpolateZoom,
        listeners = dispatch("start", "zoom", "end"),
        touchstarting,
        touchfirst,
        touchending,
        touchDelay = 500,
        wheelDelay = 150,
        clickDistance2 = 0,
        tapDistance = 10;

    function zoom(selection) {
      selection
          .property("__zoom", defaultTransform)
          .on("wheel.zoom", wheeled)
          .on("mousedown.zoom", mousedowned)
          .on("dblclick.zoom", dblclicked)
        .filter(touchable)
          .on("touchstart.zoom", touchstarted)
          .on("touchmove.zoom", touchmoved)
          .on("touchend.zoom touchcancel.zoom", touchended)
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }

    zoom.transform = function(collection, transform, point, event) {
      var selection = collection.selection ? collection.selection() : collection;
      selection.property("__zoom", defaultTransform);
      if (collection !== selection) {
        schedule(collection, transform, point, event);
      } else {
        selection.interrupt().each(function() {
          gesture(this, arguments)
            .event(event)
            .start()
            .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
            .end();
        });
      }
    };

    zoom.scaleBy = function(selection, k, p, event) {
      zoom.scaleTo(selection, function() {
        var k0 = this.__zoom.k,
            k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return k0 * k1;
      }, p, event);
    };

    zoom.scaleTo = function(selection, k, p, event) {
      zoom.transform(selection, function() {
        var e = extent.apply(this, arguments),
            t0 = this.__zoom,
            p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
            p1 = t0.invert(p0),
            k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
      }, p, event);
    };

    zoom.translateBy = function(selection, x, y, event) {
      zoom.transform(selection, function() {
        return constrain(this.__zoom.translate(
          typeof x === "function" ? x.apply(this, arguments) : x,
          typeof y === "function" ? y.apply(this, arguments) : y
        ), extent.apply(this, arguments), translateExtent);
      }, null, event);
    };

    zoom.translateTo = function(selection, x, y, p, event) {
      zoom.transform(selection, function() {
        var e = extent.apply(this, arguments),
            t = this.__zoom,
            p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
        return constrain(identity$1.translate(p0[0], p0[1]).scale(t.k).translate(
          typeof x === "function" ? -x.apply(this, arguments) : -x,
          typeof y === "function" ? -y.apply(this, arguments) : -y
        ), e, translateExtent);
      }, p, event);
    };

    function scale(transform, k) {
      k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
      return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
    }

    function translate(transform, p0, p1) {
      var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
      return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
    }

    function centroid(extent) {
      return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
    }

    function schedule(transition, transform, point, event) {
      transition
          .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
          .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
          .tween("zoom", function() {
            var that = this,
                args = arguments,
                g = gesture(that, args).event(event),
                e = extent.apply(that, args),
                p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
                w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
                a = that.__zoom,
                b = typeof transform === "function" ? transform.apply(that, args) : transform,
                i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
              if (t === 1) t = b; // Avoid rounding error on end.
              else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
              g.zoom(null, t);
            };
          });
    }

    function gesture(that, args, clean) {
      return (!clean && that.__zooming) || new Gesture(that, args);
    }

    function Gesture(that, args) {
      this.that = that;
      this.args = args;
      this.active = 0;
      this.sourceEvent = null;
      this.extent = extent.apply(that, args);
      this.taps = 0;
    }

    Gesture.prototype = {
      event: function(event) {
        if (event) this.sourceEvent = event;
        return this;
      },
      start: function() {
        if (++this.active === 1) {
          this.that.__zooming = this;
          this.emit("start");
        }
        return this;
      },
      zoom: function(key, transform) {
        if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
        if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
        if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
        this.that.__zoom = transform;
        this.emit("zoom");
        return this;
      },
      end: function() {
        if (--this.active === 0) {
          delete this.that.__zooming;
          this.emit("end");
        }
        return this;
      },
      emit: function(type) {
        var d = select(this.that).datum();
        listeners.call(
          type,
          this.that,
          new ZoomEvent(type, {
            sourceEvent: this.sourceEvent,
            target: zoom,
            type,
            transform: this.that.__zoom,
            dispatch: listeners
          }),
          d
        );
      }
    };

    function wheeled(event, ...args) {
      if (!filter.apply(this, arguments)) return;
      var g = gesture(this, args).event(event),
          t = this.__zoom,
          k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
          p = pointer(event);

      // If the mouse is in the same location as before, reuse it.
      // If there were recent wheel events, reset the wheel idle timeout.
      if (g.wheel) {
        if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
          g.mouse[1] = t.invert(g.mouse[0] = p);
        }
        clearTimeout(g.wheel);
      }

      // If this wheel event won’t trigger a transform change, ignore it.
      else if (t.k === k) return;

      // Otherwise, capture the mouse point and location at the start.
      else {
        g.mouse = [p, t.invert(p)];
        interrupt(this);
        g.start();
      }

      noevent$1(event);
      g.wheel = setTimeout(wheelidled, wheelDelay);
      g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

      function wheelidled() {
        g.wheel = null;
        g.end();
      }
    }

    function mousedowned(event, ...args) {
      if (touchending || !filter.apply(this, arguments)) return;
      var g = gesture(this, args, true).event(event),
          v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
          p = pointer(event, currentTarget),
          currentTarget = event.currentTarget,
          x0 = event.clientX,
          y0 = event.clientY;

      dragDisable(event.view);
      nopropagation$1(event);
      g.mouse = [p, this.__zoom.invert(p)];
      interrupt(this);
      g.start();

      function mousemoved(event) {
        noevent$1(event);
        if (!g.moved) {
          var dx = event.clientX - x0, dy = event.clientY - y0;
          g.moved = dx * dx + dy * dy > clickDistance2;
        }
        g.event(event)
         .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
      }

      function mouseupped(event) {
        v.on("mousemove.zoom mouseup.zoom", null);
        yesdrag(event.view, g.moved);
        noevent$1(event);
        g.event(event).end();
      }
    }

    function dblclicked(event, ...args) {
      if (!filter.apply(this, arguments)) return;
      var t0 = this.__zoom,
          p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
          p1 = t0.invert(p0),
          k1 = t0.k * (event.shiftKey ? 0.5 : 2),
          t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

      noevent$1(event);
      if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);
      else select(this).call(zoom.transform, t1, p0, event);
    }

    function touchstarted(event, ...args) {
      if (!filter.apply(this, arguments)) return;
      var touches = event.touches,
          n = touches.length,
          g = gesture(this, args, event.changedTouches.length === n).event(event),
          started, i, t, p;

      nopropagation$1(event);
      for (i = 0; i < n; ++i) {
        t = touches[i], p = pointer(t, this);
        p = [p, this.__zoom.invert(p), t.identifier];
        if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
        else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
      }

      if (touchstarting) touchstarting = clearTimeout(touchstarting);

      if (started) {
        if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
        interrupt(this);
        g.start();
      }
    }

    function touchmoved(event, ...args) {
      if (!this.__zooming) return;
      var g = gesture(this, args).event(event),
          touches = event.changedTouches,
          n = touches.length, i, t, p, l;

      noevent$1(event);
      for (i = 0; i < n; ++i) {
        t = touches[i], p = pointer(t, this);
        if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
        else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
      }
      t = g.that.__zoom;
      if (g.touch1) {
        var p0 = g.touch0[0], l0 = g.touch0[1],
            p1 = g.touch1[0], l1 = g.touch1[1],
            dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
            dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
        t = scale(t, Math.sqrt(dp / dl));
        p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
      }
      else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
      else return;

      g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }

    function touchended(event, ...args) {
      if (!this.__zooming) return;
      var g = gesture(this, args).event(event),
          touches = event.changedTouches,
          n = touches.length, i, t;

      nopropagation$1(event);
      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function() { touchending = null; }, touchDelay);
      for (i = 0; i < n; ++i) {
        t = touches[i];
        if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
        else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
      }
      if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
      if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else {
        g.end();
        // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
        if (g.taps === 2) {
          t = pointer(t, this);
          if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
            var p = select(this).on("dblclick.zoom");
            if (p) p.apply(this, arguments);
          }
        }
      }
    }

    zoom.wheelDelta = function(_) {
      return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant$3(+_), zoom) : wheelDelta;
    };

    zoom.filter = function(_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$3(!!_), zoom) : filter;
    };

    zoom.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$3(!!_), zoom) : touchable;
    };

    zoom.extent = function(_) {
      return arguments.length ? (extent = typeof _ === "function" ? _ : constant$3([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
    };

    zoom.scaleExtent = function(_) {
      return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
    };

    zoom.translateExtent = function(_) {
      return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
    };

    zoom.constrain = function(_) {
      return arguments.length ? (constrain = _, zoom) : constrain;
    };

    zoom.duration = function(_) {
      return arguments.length ? (duration = +_, zoom) : duration;
    };

    zoom.interpolate = function(_) {
      return arguments.length ? (interpolate = _, zoom) : interpolate;
    };

    zoom.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? zoom : value;
    };

    zoom.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };

    zoom.tapDistance = function(_) {
      return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };

    return zoom;
  }

  function max(values, valueof) {
    let max;
    if (valueof === undefined) {
      for (const value of values) {
        if (value != null
            && (max < value || (max === undefined && value >= value))) {
          max = value;
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null
            && (max < value || (max === undefined && value >= value))) {
          max = value;
        }
      }
    }
    return max;
  }

  function min(values, valueof) {
    let min;
    if (valueof === undefined) {
      for (const value of values) {
        if (value != null
            && (min > value || (min === undefined && value >= value))) {
          min = value;
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null
            && (min > value || (min === undefined && value >= value))) {
          min = value;
        }
      }
    }
    return min;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$1 = freeGlobal || freeSelf || Function('return this')();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now$1 = function() {
    return root$1.Date.now();
  };

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;

      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now$1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now$1());
    }

    function debounced() {
      var time = now$1(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var lodash_throttle = throttle;

  var NOW;
  // Include a performance.now polyfill.
  // In node.js, use process.hrtime.
  // eslint-disable-next-line
  // @ts-ignore
  if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
      NOW = function () {
          // eslint-disable-next-line
          // @ts-ignore
          var time = process.hrtime();
          // Convert [seconds, nanoseconds] to milliseconds.
          return time[0] * 1000 + time[1] / 1000000;
      };
  }
  // In a browser, use self.performance.now if it is available.
  else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
      // This must be bound, because directly assigning this function
      // leads to an invocation exception in Chrome.
      NOW = self.performance.now.bind(self.performance);
  }
  // Use Date.now if it is available.
  else if (Date.now !== undefined) {
      NOW = Date.now;
  }
  // Otherwise, use 'new Date().getTime()'.
  else {
      NOW = function () {
          return new Date().getTime();
      };
  }
  var NOW$1 = NOW;

  /**
   * Controlling groups of tweens
   *
   * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
   * In these cases, you may want to create your own smaller groups of tween
   */
  var Group = /** @class */ (function () {
      function Group() {
          this._tweens = {};
          this._tweensAddedDuringUpdate = {};
      }
      Group.prototype.getAll = function () {
          var _this = this;
          return Object.keys(this._tweens).map(function (tweenId) {
              return _this._tweens[tweenId];
          });
      };
      Group.prototype.removeAll = function () {
          this._tweens = {};
      };
      Group.prototype.add = function (tween) {
          this._tweens[tween.getId()] = tween;
          this._tweensAddedDuringUpdate[tween.getId()] = tween;
      };
      Group.prototype.remove = function (tween) {
          delete this._tweens[tween.getId()];
          delete this._tweensAddedDuringUpdate[tween.getId()];
      };
      Group.prototype.update = function (time, preserve) {
          var tweenIds = Object.keys(this._tweens);
          if (tweenIds.length === 0) {
              return false;
          }
          time = time !== undefined ? time : NOW$1();
          // Tweens are updated in "batches". If you add a new tween during an
          // update, then the new tween will be updated in the next batch.
          // If you remove a tween during an update, it may or may not be updated.
          // However, if the removed tween was added during the current batch,
          // then it will not be updated.
          while (tweenIds.length > 0) {
              this._tweensAddedDuringUpdate = {};
              for (var i = 0; i < tweenIds.length; i++) {
                  var tween = this._tweens[tweenIds[i]];
                  if (tween && tween.update(time) === false && !preserve) {
                      delete this._tweens[tweenIds[i]];
                  }
              }
              tweenIds = Object.keys(this._tweensAddedDuringUpdate);
          }
          return true;
      };
      return Group;
  }());

  /**
   * The Ease class provides a collection of easing functions for use with tween.js.
   */
  var Easing = {
      Linear: {
          None: function (amount) {
              return amount;
          },
      },
      Quadratic: {
          In: function (amount) {
              return amount * amount;
          },
          Out: function (amount) {
              return amount * (2 - amount);
          },
          InOut: function (amount) {
              if ((amount *= 2) < 1) {
                  return 0.5 * amount * amount;
              }
              return -0.5 * (--amount * (amount - 2) - 1);
          },
      },
      Cubic: {
          In: function (amount) {
              return amount * amount * amount;
          },
          Out: function (amount) {
              return --amount * amount * amount + 1;
          },
          InOut: function (amount) {
              if ((amount *= 2) < 1) {
                  return 0.5 * amount * amount * amount;
              }
              return 0.5 * ((amount -= 2) * amount * amount + 2);
          },
      },
      Quartic: {
          In: function (amount) {
              return amount * amount * amount * amount;
          },
          Out: function (amount) {
              return 1 - --amount * amount * amount * amount;
          },
          InOut: function (amount) {
              if ((amount *= 2) < 1) {
                  return 0.5 * amount * amount * amount * amount;
              }
              return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
          },
      },
      Quintic: {
          In: function (amount) {
              return amount * amount * amount * amount * amount;
          },
          Out: function (amount) {
              return --amount * amount * amount * amount * amount + 1;
          },
          InOut: function (amount) {
              if ((amount *= 2) < 1) {
                  return 0.5 * amount * amount * amount * amount * amount;
              }
              return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
          },
      },
      Sinusoidal: {
          In: function (amount) {
              return 1 - Math.cos((amount * Math.PI) / 2);
          },
          Out: function (amount) {
              return Math.sin((amount * Math.PI) / 2);
          },
          InOut: function (amount) {
              return 0.5 * (1 - Math.cos(Math.PI * amount));
          },
      },
      Exponential: {
          In: function (amount) {
              return amount === 0 ? 0 : Math.pow(1024, amount - 1);
          },
          Out: function (amount) {
              return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
          },
          InOut: function (amount) {
              if (amount === 0) {
                  return 0;
              }
              if (amount === 1) {
                  return 1;
              }
              if ((amount *= 2) < 1) {
                  return 0.5 * Math.pow(1024, amount - 1);
              }
              return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
          },
      },
      Circular: {
          In: function (amount) {
              return 1 - Math.sqrt(1 - amount * amount);
          },
          Out: function (amount) {
              return Math.sqrt(1 - --amount * amount);
          },
          InOut: function (amount) {
              if ((amount *= 2) < 1) {
                  return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
              }
              return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
          },
      },
      Elastic: {
          In: function (amount) {
              if (amount === 0) {
                  return 0;
              }
              if (amount === 1) {
                  return 1;
              }
              return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
          },
          Out: function (amount) {
              if (amount === 0) {
                  return 0;
              }
              if (amount === 1) {
                  return 1;
              }
              return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
          },
          InOut: function (amount) {
              if (amount === 0) {
                  return 0;
              }
              if (amount === 1) {
                  return 1;
              }
              amount *= 2;
              if (amount < 1) {
                  return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
              }
              return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
          },
      },
      Back: {
          In: function (amount) {
              var s = 1.70158;
              return amount * amount * ((s + 1) * amount - s);
          },
          Out: function (amount) {
              var s = 1.70158;
              return --amount * amount * ((s + 1) * amount + s) + 1;
          },
          InOut: function (amount) {
              var s = 1.70158 * 1.525;
              if ((amount *= 2) < 1) {
                  return 0.5 * (amount * amount * ((s + 1) * amount - s));
              }
              return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
          },
      },
      Bounce: {
          In: function (amount) {
              return 1 - Easing.Bounce.Out(1 - amount);
          },
          Out: function (amount) {
              if (amount < 1 / 2.75) {
                  return 7.5625 * amount * amount;
              }
              else if (amount < 2 / 2.75) {
                  return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
              }
              else if (amount < 2.5 / 2.75) {
                  return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
              }
              else {
                  return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
              }
          },
          InOut: function (amount) {
              if (amount < 0.5) {
                  return Easing.Bounce.In(amount * 2) * 0.5;
              }
              return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
          },
      },
  };

  /**
   *
   */
  var Interpolation = {
      Linear: function (v, k) {
          var m = v.length - 1;
          var f = m * k;
          var i = Math.floor(f);
          var fn = Interpolation.Utils.Linear;
          if (k < 0) {
              return fn(v[0], v[1], f);
          }
          if (k > 1) {
              return fn(v[m], v[m - 1], m - f);
          }
          return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
      },
      Bezier: function (v, k) {
          var b = 0;
          var n = v.length - 1;
          var pw = Math.pow;
          var bn = Interpolation.Utils.Bernstein;
          for (var i = 0; i <= n; i++) {
              b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
          }
          return b;
      },
      CatmullRom: function (v, k) {
          var m = v.length - 1;
          var f = m * k;
          var i = Math.floor(f);
          var fn = Interpolation.Utils.CatmullRom;
          if (v[0] === v[m]) {
              if (k < 0) {
                  i = Math.floor((f = m * (1 + k)));
              }
              return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
          }
          else {
              if (k < 0) {
                  return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
              }
              if (k > 1) {
                  return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
              }
              return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
          }
      },
      Utils: {
          Linear: function (p0, p1, t) {
              return (p1 - p0) * t + p0;
          },
          Bernstein: function (n, i) {
              var fc = Interpolation.Utils.Factorial;
              return fc(n) / fc(i) / fc(n - i);
          },
          Factorial: (function () {
              var a = [1];
              return function (n) {
                  var s = 1;
                  if (a[n]) {
                      return a[n];
                  }
                  for (var i = n; i > 1; i--) {
                      s *= i;
                  }
                  a[n] = s;
                  return s;
              };
          })(),
          CatmullRom: function (p0, p1, p2, p3, t) {
              var v0 = (p2 - p0) * 0.5;
              var v1 = (p3 - p1) * 0.5;
              var t2 = t * t;
              var t3 = t * t2;
              return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
          },
      },
  };

  /**
   * Utils
   */
  var Sequence = /** @class */ (function () {
      function Sequence() {
      }
      Sequence.nextId = function () {
          return Sequence._nextId++;
      };
      Sequence._nextId = 0;
      return Sequence;
  }());

  /**
   * Tween.js - Licensed under the MIT license
   * https://github.com/tweenjs/tween.js
   * ----------------------------------------------
   *
   * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
   * Thank you all, you're awesome!
   */
  var Tween = /** @class */ (function () {
      function Tween(_object, _group) {
          if (_group === void 0) { _group = TWEEN; }
          this._object = _object;
          this._group = _group;
          this._isPaused = false;
          this._pauseStart = 0;
          this._valuesStart = {};
          this._valuesEnd = {};
          this._valuesStartRepeat = {};
          this._duration = 1000;
          this._initialRepeat = 0;
          this._repeat = 0;
          this._yoyo = false;
          this._isPlaying = false;
          this._reversed = false;
          this._delayTime = 0;
          this._startTime = 0;
          this._easingFunction = TWEEN.Easing.Linear.None;
          this._interpolationFunction = TWEEN.Interpolation.Linear;
          this._chainedTweens = [];
          this._onStartCallbackFired = false;
          this._id = TWEEN.nextId();
          this._isChainStopped = false;
      }
      Tween.prototype.getId = function () {
          return this._id;
      };
      Tween.prototype.isPlaying = function () {
          return this._isPlaying;
      };
      Tween.prototype.isPaused = function () {
          return this._isPaused;
      };
      Tween.prototype.to = function (properties, duration) {
          for (var prop in properties) {
              this._valuesEnd[prop] = properties[prop];
          }
          if (duration !== undefined) {
              this._duration = duration;
          }
          return this;
      };
      Tween.prototype.duration = function (d) {
          this._duration = d;
          return this;
      };
      Tween.prototype.start = function (time) {
          if (this._isPlaying) {
              return this;
          }
          // eslint-disable-next-line
          // @ts-ignore FIXME?
          this._group.add(this);
          this._repeat = this._initialRepeat;
          if (this._reversed) {
              // If we were reversed (f.e. using the yoyo feature) then we need to
              // flip the tween direction back to forward.
              this._reversed = false;
              for (var property in this._valuesStartRepeat) {
                  this._swapEndStartRepeatValues(property);
                  this._valuesStart[property] = this._valuesStartRepeat[property];
              }
          }
          this._isPlaying = true;
          this._isPaused = false;
          this._onStartCallbackFired = false;
          this._isChainStopped = false;
          this._startTime =
              time !== undefined ? (typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time) : TWEEN.now();
          this._startTime += this._delayTime;
          this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
          return this;
      };
      Tween.prototype._setupProperties = function (_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
          for (var property in _valuesEnd) {
              var startValue = _object[property];
              var startValueIsArray = Array.isArray(startValue);
              var propType = startValueIsArray ? 'array' : typeof startValue;
              var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
              // If `to()` specifies a property that doesn't exist in the source object,
              // we should not set that property in the object
              if (propType === 'undefined' || propType === 'function') {
                  continue;
              }
              // Check if an Array was provided as property value
              if (isInterpolationList) {
                  var endValues = _valuesEnd[property];
                  if (endValues.length === 0) {
                      continue;
                  }
                  // handle an array of relative values
                  endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                  // Create a local copy of the Array with the start value at the front
                  _valuesEnd[property] = [startValue].concat(endValues);
              }
              // handle the deepness of the values
              if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                  _valuesStart[property] = startValueIsArray ? [] : {};
                  // eslint-disable-next-line
                  for (var prop in startValue) {
                      // eslint-disable-next-line
                      // @ts-ignore FIXME?
                      _valuesStart[property][prop] = startValue[prop];
                  }
                  _valuesStartRepeat[property] = startValueIsArray ? [] : {}; // TODO? repeat nested values? And yoyo? And array values?
                  // eslint-disable-next-line
                  // @ts-ignore FIXME?
                  this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
              }
              else {
                  // Save the starting value, but only once.
                  if (typeof _valuesStart[property] === 'undefined') {
                      _valuesStart[property] = startValue;
                  }
                  if (!startValueIsArray) {
                      // eslint-disable-next-line
                      // @ts-ignore FIXME?
                      _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                  }
                  if (isInterpolationList) {
                      // eslint-disable-next-line
                      // @ts-ignore FIXME?
                      _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                  }
                  else {
                      _valuesStartRepeat[property] = _valuesStart[property] || 0;
                  }
              }
          }
      };
      Tween.prototype.stop = function () {
          if (!this._isChainStopped) {
              this._isChainStopped = true;
              this.stopChainedTweens();
          }
          if (!this._isPlaying) {
              return this;
          }
          // eslint-disable-next-line
          // @ts-ignore FIXME?
          this._group.remove(this);
          this._isPlaying = false;
          this._isPaused = false;
          if (this._onStopCallback) {
              this._onStopCallback(this._object);
          }
          return this;
      };
      Tween.prototype.end = function () {
          this.update(Infinity);
          return this;
      };
      Tween.prototype.pause = function (time) {
          if (this._isPaused || !this._isPlaying) {
              return this;
          }
          this._isPaused = true;
          this._pauseStart = time === undefined ? TWEEN.now() : time;
          // eslint-disable-next-line
          // @ts-ignore FIXME?
          this._group.remove(this);
          return this;
      };
      Tween.prototype.resume = function (time) {
          if (!this._isPaused || !this._isPlaying) {
              return this;
          }
          this._isPaused = false;
          this._startTime += (time === undefined ? TWEEN.now() : time) - this._pauseStart;
          this._pauseStart = 0;
          // eslint-disable-next-line
          // @ts-ignore FIXME?
          this._group.add(this);
          return this;
      };
      Tween.prototype.stopChainedTweens = function () {
          for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
              this._chainedTweens[i].stop();
          }
          return this;
      };
      Tween.prototype.group = function (group) {
          this._group = group;
          return this;
      };
      Tween.prototype.delay = function (amount) {
          this._delayTime = amount;
          return this;
      };
      Tween.prototype.repeat = function (times) {
          this._initialRepeat = times;
          this._repeat = times;
          return this;
      };
      Tween.prototype.repeatDelay = function (amount) {
          this._repeatDelayTime = amount;
          return this;
      };
      Tween.prototype.yoyo = function (yoyo) {
          this._yoyo = yoyo;
          return this;
      };
      Tween.prototype.easing = function (easingFunction) {
          this._easingFunction = easingFunction;
          return this;
      };
      Tween.prototype.interpolation = function (interpolationFunction) {
          this._interpolationFunction = interpolationFunction;
          return this;
      };
      Tween.prototype.chain = function () {
          var tweens = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              tweens[_i] = arguments[_i];
          }
          this._chainedTweens = tweens;
          return this;
      };
      Tween.prototype.onStart = function (callback) {
          this._onStartCallback = callback;
          return this;
      };
      Tween.prototype.onUpdate = function (callback) {
          this._onUpdateCallback = callback;
          return this;
      };
      Tween.prototype.onRepeat = function (callback) {
          this._onRepeatCallback = callback;
          return this;
      };
      Tween.prototype.onComplete = function (callback) {
          this._onCompleteCallback = callback;
          return this;
      };
      Tween.prototype.onStop = function (callback) {
          this._onStopCallback = callback;
          return this;
      };
      Tween.prototype.update = function (time) {
          var property;
          var elapsed;
          var endTime = this._startTime + this._duration;
          if (time > endTime && !this._isPlaying) {
              return false;
          }
          // If the tween was already finished,
          if (!this.isPlaying) {
              this.start(time);
          }
          if (time < this._startTime) {
              return true;
          }
          if (this._onStartCallbackFired === false) {
              if (this._onStartCallback) {
                  this._onStartCallback(this._object);
              }
              this._onStartCallbackFired = true;
          }
          elapsed = (time - this._startTime) / this._duration;
          elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
          var value = this._easingFunction(elapsed);
          // properties transformations
          this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
          if (this._onUpdateCallback) {
              this._onUpdateCallback(this._object, elapsed);
          }
          if (elapsed === 1) {
              if (this._repeat > 0) {
                  if (isFinite(this._repeat)) {
                      this._repeat--;
                  }
                  // Reassign starting values, restart by making startTime = now
                  for (property in this._valuesStartRepeat) {
                      if (!this._yoyo && typeof this._valuesEnd[property] === 'string') {
                          this._valuesStartRepeat[property] =
                              // eslint-disable-next-line
                              // @ts-ignore FIXME?
                              this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                      }
                      if (this._yoyo) {
                          this._swapEndStartRepeatValues(property);
                      }
                      this._valuesStart[property] = this._valuesStartRepeat[property];
                  }
                  if (this._yoyo) {
                      this._reversed = !this._reversed;
                  }
                  if (this._repeatDelayTime !== undefined) {
                      this._startTime = time + this._repeatDelayTime;
                  }
                  else {
                      this._startTime = time + this._delayTime;
                  }
                  if (this._onRepeatCallback) {
                      this._onRepeatCallback(this._object);
                  }
                  return true;
              }
              else {
                  if (this._onCompleteCallback) {
                      this._onCompleteCallback(this._object);
                  }
                  for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                      // Make the chained tweens start exactly at the time they should,
                      // even if the `update()` method was called way past the duration of the tween
                      this._chainedTweens[i].start(this._startTime + this._duration);
                  }
                  this._isPlaying = false;
                  return false;
              }
          }
          return true;
      };
      Tween.prototype._updateProperties = function (_object, _valuesStart, _valuesEnd, value) {
          for (var property in _valuesEnd) {
              // Don't update properties that do not exist in the source object
              if (_valuesStart[property] === undefined) {
                  continue;
              }
              var start = _valuesStart[property] || 0;
              var end = _valuesEnd[property];
              var startIsArray = Array.isArray(_object[property]);
              var endIsArray = Array.isArray(end);
              var isInterpolationList = !startIsArray && endIsArray;
              if (isInterpolationList) {
                  _object[property] = this._interpolationFunction(end, value);
              }
              else if (typeof end === 'object' && end) {
                  // eslint-disable-next-line
                  // @ts-ignore FIXME?
                  this._updateProperties(_object[property], start, end, value);
              }
              else {
                  // Parses relative end values with start as base (e.g.: +10, -3)
                  end = this._handleRelativeValue(start, end);
                  // Protect against non numeric properties.
                  if (typeof end === 'number') {
                      // eslint-disable-next-line
                      // @ts-ignore FIXME?
                      _object[property] = start + (end - start) * value;
                  }
              }
          }
      };
      Tween.prototype._handleRelativeValue = function (start, end) {
          if (typeof end !== 'string') {
              return end;
          }
          if (end.charAt(0) === '+' || end.charAt(0) === '-') {
              return start + parseFloat(end);
          }
          else {
              return parseFloat(end);
          }
      };
      Tween.prototype._swapEndStartRepeatValues = function (property) {
          var tmp = this._valuesStartRepeat[property];
          if (typeof this._valuesEnd[property] === 'string') {
              // eslint-disable-next-line
              // @ts-ignore FIXME?
              this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
          }
          else {
              this._valuesStartRepeat[property] = this._valuesEnd[property];
          }
          this._valuesEnd[property] = tmp;
      };
      return Tween;
  }());

  var VERSION = '18.6.0';

  /**
   * Tween.js - Licensed under the MIT license
   * https://github.com/tweenjs/tween.js
   * ----------------------------------------------
   *
   * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
   * Thank you all, you're awesome!
   */
  var __extends = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  /**
   * Controlling groups of tweens
   *
   * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
   * In these cases, you may want to create your own smaller groups of tween
   */
  var Main = /** @class */ (function (_super) {
      __extends(Main, _super);
      function Main() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.version = VERSION;
          _this.now = NOW$1;
          _this.Group = Group;
          _this.Easing = Easing;
          _this.Interpolation = Interpolation;
          _this.nextId = Sequence.nextId;
          _this.Tween = Tween;
          return _this;
      }
      return Main;
  }(Group));
  var TWEEN = new Main();

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear' 
   * that is a function which will clear the timer to prevent previously scheduled executions. 
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */
  function debounce$1(func, wait, immediate){
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;

    function later() {
      var last = Date.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }
    var debounced = function(){
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };

    debounced.clear = function() {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
    
    debounced.flush = function() {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;
        
        clearTimeout(timeout);
        timeout = null;
      }
    };

    return debounced;
  }
  // Adds compatibility for ES modules
  debounce$1.debounce = debounce$1;

  var debounce_1 = debounce$1;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _slicedToArray$2(arr, i) {
    return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _nonIterableRest$2();
  }

  function _arrayWithHoles$2(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit$2(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest$2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var Prop = function Prop(name, _ref) {
    var _ref$default = _ref["default"],
        defaultVal = _ref$default === void 0 ? null : _ref$default,
        _ref$triggerUpdate = _ref.triggerUpdate,
        triggerUpdate = _ref$triggerUpdate === void 0 ? true : _ref$triggerUpdate,
        _ref$onChange = _ref.onChange,
        onChange = _ref$onChange === void 0 ? function (newVal, state) {} : _ref$onChange;

    _classCallCheck(this, Prop);

    this.name = name;
    this.defaultVal = defaultVal;
    this.triggerUpdate = triggerUpdate;
    this.onChange = onChange;
  };

  function index$1 (_ref2) {
    var _ref2$stateInit = _ref2.stateInit,
        stateInit = _ref2$stateInit === void 0 ? function () {
      return {};
    } : _ref2$stateInit,
        _ref2$props = _ref2.props,
        rawProps = _ref2$props === void 0 ? {} : _ref2$props,
        _ref2$methods = _ref2.methods,
        methods = _ref2$methods === void 0 ? {} : _ref2$methods,
        _ref2$aliases = _ref2.aliases,
        aliases = _ref2$aliases === void 0 ? {} : _ref2$aliases,
        _ref2$init = _ref2.init,
        initFn = _ref2$init === void 0 ? function () {} : _ref2$init,
        _ref2$update = _ref2.update,
        updateFn = _ref2$update === void 0 ? function () {} : _ref2$update;
    // Parse props into Prop instances
    var props = Object.keys(rawProps).map(function (propName) {
      return new Prop(propName, rawProps[propName]);
    });
    return function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // Holds component state
      var state = Object.assign({}, stateInit instanceof Function ? stateInit(options) : stateInit, // Support plain objects for backwards compatibility
      {
        initialised: false
      }); // keeps track of which props triggered an update

      var changedProps = {}; // Component constructor

      function comp(nodeElement) {
        initStatic(nodeElement, options);
        digest();
        return comp;
      }

      var initStatic = function initStatic(nodeElement, options) {
        initFn.call(comp, nodeElement, state, options);
        state.initialised = true;
      };

      var digest = debounce_1(function () {
        if (!state.initialised) {
          return;
        }

        updateFn.call(comp, state, changedProps);
        changedProps = {};
      }, 1); // Getter/setter methods

      props.forEach(function (prop) {
        comp[prop.name] = getSetProp(prop);

        function getSetProp(_ref3) {
          var prop = _ref3.name,
              _ref3$triggerUpdate = _ref3.triggerUpdate,
              redigest = _ref3$triggerUpdate === void 0 ? false : _ref3$triggerUpdate,
              _ref3$onChange = _ref3.onChange,
              onChange = _ref3$onChange === void 0 ? function (newVal, state) {} : _ref3$onChange,
              _ref3$defaultVal = _ref3.defaultVal,
              defaultVal = _ref3$defaultVal === void 0 ? null : _ref3$defaultVal;
          return function (_) {
            var curVal = state[prop];

            if (!arguments.length) {
              return curVal;
            } // Getter mode


            var val = _ === undefined ? defaultVal : _; // pick default if value passed is undefined

            state[prop] = val;
            onChange.call(comp, val, state, curVal); // track changed props

            !changedProps.hasOwnProperty(prop) && (changedProps[prop] = curVal);

            if (redigest) {
              digest();
            }

            return comp;
          };
        }
      }); // Other methods

      Object.keys(methods).forEach(function (methodName) {
        comp[methodName] = function () {
          var _methods$methodName;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return (_methods$methodName = methods[methodName]).call.apply(_methods$methodName, [comp, state].concat(args));
        };
      }); // Link aliases

      Object.entries(aliases).forEach(function (_ref4) {
        var _ref5 = _slicedToArray$2(_ref4, 2),
            alias = _ref5[0],
            target = _ref5[1];

        return comp[alias] = comp[target];
      }); // Reset all component props to their default value

      comp.resetProps = function () {
        props.forEach(function (prop) {
          comp[prop.name](prop.defaultVal);
        });
        return comp;
      }; //


      comp.resetProps(); // Apply all prop defaults

      state._rerender = digest; // Expose digest method

      return comp;
    };
  }

  var index$2 = (function (p) {
    return p instanceof Function ? p // fn
    : typeof p === 'string' ? function (obj) {
      return obj[p];
    } // property name
    : function (obj) {
      return p;
    };
  }); // constant

  var tinycolor = createCommonjsModule(function (module) {
  // TinyColor v1.4.2
  // https://github.com/bgrins/TinyColor
  // Brian Grinstead, MIT License

  (function(Math) {

  var trimLeft = /^\s+/,
      trimRight = /\s+$/,
      tinyCounter = 0,
      mathRound = Math.round,
      mathMin = Math.min,
      mathMax = Math.max,
      mathRandom = Math.random;

  function tinycolor (color, opts) {

      color = (color) ? color : '';
      opts = opts || { };

      // If input is already a tinycolor, return itself
      if (color instanceof tinycolor) {
         return color;
      }
      // If we are called as a function, call using new instead
      if (!(this instanceof tinycolor)) {
          return new tinycolor(color, opts);
      }

      var rgb = inputToRGB(color);
      this._originalInput = color,
      this._r = rgb.r,
      this._g = rgb.g,
      this._b = rgb.b,
      this._a = rgb.a,
      this._roundA = mathRound(100*this._a) / 100,
      this._format = opts.format || rgb.format;
      this._gradientType = opts.gradientType;

      // Don't let the range of [0,255] come back in [0,1].
      // Potentially lose a little bit of precision here, but will fix issues where
      // .5 gets interpreted as half of the total, instead of half of 1
      // If it was supposed to be 128, this was already taken care of by `inputToRgb`
      if (this._r < 1) { this._r = mathRound(this._r); }
      if (this._g < 1) { this._g = mathRound(this._g); }
      if (this._b < 1) { this._b = mathRound(this._b); }

      this._ok = rgb.ok;
      this._tc_id = tinyCounter++;
  }

  tinycolor.prototype = {
      isDark: function() {
          return this.getBrightness() < 128;
      },
      isLight: function() {
          return !this.isDark();
      },
      isValid: function() {
          return this._ok;
      },
      getOriginalInput: function() {
        return this._originalInput;
      },
      getFormat: function() {
          return this._format;
      },
      getAlpha: function() {
          return this._a;
      },
      getBrightness: function() {
          //http://www.w3.org/TR/AERT#color-contrast
          var rgb = this.toRgb();
          return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
      },
      getLuminance: function() {
          //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
          var rgb = this.toRgb();
          var RsRGB, GsRGB, BsRGB, R, G, B;
          RsRGB = rgb.r/255;
          GsRGB = rgb.g/255;
          BsRGB = rgb.b/255;

          if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
          if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
          if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
          return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
      },
      setAlpha: function(value) {
          this._a = boundAlpha(value);
          this._roundA = mathRound(100*this._a) / 100;
          return this;
      },
      toHsv: function() {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
      },
      toHsvString: function() {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
          return (this._a == 1) ?
            "hsv("  + h + ", " + s + "%, " + v + "%)" :
            "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
      },
      toHsl: function() {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
      },
      toHslString: function() {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
          return (this._a == 1) ?
            "hsl("  + h + ", " + s + "%, " + l + "%)" :
            "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
      },
      toHex: function(allow3Char) {
          return rgbToHex(this._r, this._g, this._b, allow3Char);
      },
      toHexString: function(allow3Char) {
          return '#' + this.toHex(allow3Char);
      },
      toHex8: function(allow4Char) {
          return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
      },
      toHex8String: function(allow4Char) {
          return '#' + this.toHex8(allow4Char);
      },
      toRgb: function() {
          return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
      },
      toRgbString: function() {
          return (this._a == 1) ?
            "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
            "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function() {
          return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
      },
      toPercentageRgbString: function() {
          return (this._a == 1) ?
            "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
            "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function() {
          if (this._a === 0) {
              return "transparent";
          }

          if (this._a < 1) {
              return false;
          }

          return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
      },
      toFilter: function(secondColor) {
          var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
          var secondHex8String = hex8String;
          var gradientType = this._gradientType ? "GradientType = 1, " : "";

          if (secondColor) {
              var s = tinycolor(secondColor);
              secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
          }

          return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
      },
      toString: function(format) {
          var formatSet = !!format;
          format = format || this._format;

          var formattedString = false;
          var hasAlpha = this._a < 1 && this._a >= 0;
          var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

          if (needsAlphaFormat) {
              // Special case for "transparent", all other non-alpha formats
              // will return rgba when there is transparency.
              if (format === "name" && this._a === 0) {
                  return this.toName();
              }
              return this.toRgbString();
          }
          if (format === "rgb") {
              formattedString = this.toRgbString();
          }
          if (format === "prgb") {
              formattedString = this.toPercentageRgbString();
          }
          if (format === "hex" || format === "hex6") {
              formattedString = this.toHexString();
          }
          if (format === "hex3") {
              formattedString = this.toHexString(true);
          }
          if (format === "hex4") {
              formattedString = this.toHex8String(true);
          }
          if (format === "hex8") {
              formattedString = this.toHex8String();
          }
          if (format === "name") {
              formattedString = this.toName();
          }
          if (format === "hsl") {
              formattedString = this.toHslString();
          }
          if (format === "hsv") {
              formattedString = this.toHsvString();
          }

          return formattedString || this.toHexString();
      },
      clone: function() {
          return tinycolor(this.toString());
      },

      _applyModification: function(fn, args) {
          var color = fn.apply(null, [this].concat([].slice.call(args)));
          this._r = color._r;
          this._g = color._g;
          this._b = color._b;
          this.setAlpha(color._a);
          return this;
      },
      lighten: function() {
          return this._applyModification(lighten, arguments);
      },
      brighten: function() {
          return this._applyModification(brighten, arguments);
      },
      darken: function() {
          return this._applyModification(darken, arguments);
      },
      desaturate: function() {
          return this._applyModification(desaturate, arguments);
      },
      saturate: function() {
          return this._applyModification(saturate, arguments);
      },
      greyscale: function() {
          return this._applyModification(greyscale, arguments);
      },
      spin: function() {
          return this._applyModification(spin, arguments);
      },

      _applyCombination: function(fn, args) {
          return fn.apply(null, [this].concat([].slice.call(args)));
      },
      analogous: function() {
          return this._applyCombination(analogous, arguments);
      },
      complement: function() {
          return this._applyCombination(complement, arguments);
      },
      monochromatic: function() {
          return this._applyCombination(monochromatic, arguments);
      },
      splitcomplement: function() {
          return this._applyCombination(splitcomplement, arguments);
      },
      triad: function() {
          return this._applyCombination(triad, arguments);
      },
      tetrad: function() {
          return this._applyCombination(tetrad, arguments);
      }
  };

  // If input is an object, force 1 into "1.0" to handle ratios properly
  // String input requires "1.0" as input, so 1 will be treated as 1
  tinycolor.fromRatio = function(color, opts) {
      if (typeof color == "object") {
          var newColor = {};
          for (var i in color) {
              if (color.hasOwnProperty(i)) {
                  if (i === "a") {
                      newColor[i] = color[i];
                  }
                  else {
                      newColor[i] = convertToPercentage(color[i]);
                  }
              }
          }
          color = newColor;
      }

      return tinycolor(color, opts);
  };

  // Given a string or object, convert that input to RGB
  // Possible string inputs:
  //
  //     "red"
  //     "#f00" or "f00"
  //     "#ff0000" or "ff0000"
  //     "#ff000000" or "ff000000"
  //     "rgb 255 0 0" or "rgb (255, 0, 0)"
  //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
  //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
  //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
  //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
  //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
  //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
  //
  function inputToRGB(color) {

      var rgb = { r: 0, g: 0, b: 0 };
      var a = 1;
      var s = null;
      var v = null;
      var l = null;
      var ok = false;
      var format = false;

      if (typeof color == "string") {
          color = stringInputToObject(color);
      }

      if (typeof color == "object") {
          if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
              rgb = rgbToRgb(color.r, color.g, color.b);
              ok = true;
              format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
          }
          else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
              s = convertToPercentage(color.s);
              v = convertToPercentage(color.v);
              rgb = hsvToRgb(color.h, s, v);
              ok = true;
              format = "hsv";
          }
          else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
              s = convertToPercentage(color.s);
              l = convertToPercentage(color.l);
              rgb = hslToRgb(color.h, s, l);
              ok = true;
              format = "hsl";
          }

          if (color.hasOwnProperty("a")) {
              a = color.a;
          }
      }

      a = boundAlpha(a);

      return {
          ok: ok,
          format: color.format || format,
          r: mathMin(255, mathMax(rgb.r, 0)),
          g: mathMin(255, mathMax(rgb.g, 0)),
          b: mathMin(255, mathMax(rgb.b, 0)),
          a: a
      };
  }


  // Conversion Functions
  // --------------------

  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

  // `rgbToRgb`
  // Handle bounds / percentage checking to conform to CSS color spec
  // <http://www.w3.org/TR/css3-color/>
  // *Assumes:* r, g, b in [0, 255] or [0, 1]
  // *Returns:* { r, g, b } in [0, 255]
  function rgbToRgb(r, g, b){
      return {
          r: bound01(r, 255) * 255,
          g: bound01(g, 255) * 255,
          b: bound01(b, 255) * 255
      };
  }

  // `rgbToHsl`
  // Converts an RGB color value to HSL.
  // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
  // *Returns:* { h, s, l } in [0,1]
  function rgbToHsl(r, g, b) {

      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);

      var max = mathMax(r, g, b), min = mathMin(r, g, b);
      var h, s, l = (max + min) / 2;

      if(max == min) {
          h = s = 0; // achromatic
      }
      else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }

          h /= 6;
      }

      return { h: h, s: s, l: l };
  }

  // `hslToRgb`
  // Converts an HSL color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
  function hslToRgb(h, s, l) {
      var r, g, b;

      h = bound01(h, 360);
      s = bound01(s, 100);
      l = bound01(l, 100);

      function hue2rgb(p, q, t) {
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }

      if(s === 0) {
          r = g = b = l; // achromatic
      }
      else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1/3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1/3);
      }

      return { r: r * 255, g: g * 255, b: b * 255 };
  }

  // `rgbToHsv`
  // Converts an RGB color value to HSV
  // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
  // *Returns:* { h, s, v } in [0,1]
  function rgbToHsv(r, g, b) {

      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);

      var max = mathMax(r, g, b), min = mathMin(r, g, b);
      var h, s, v = max;

      var d = max - min;
      s = max === 0 ? 0 : d / max;

      if(max == min) {
          h = 0; // achromatic
      }
      else {
          switch(max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
      }
      return { h: h, s: s, v: v };
  }

  // `hsvToRgb`
  // Converts an HSV color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
   function hsvToRgb(h, s, v) {

      h = bound01(h, 360) * 6;
      s = bound01(s, 100);
      v = bound01(v, 100);

      var i = Math.floor(h),
          f = h - i,
          p = v * (1 - s),
          q = v * (1 - f * s),
          t = v * (1 - (1 - f) * s),
          mod = i % 6,
          r = [v, q, p, p, t, v][mod],
          g = [t, v, v, q, p, p][mod],
          b = [p, p, t, v, v, q][mod];

      return { r: r * 255, g: g * 255, b: b * 255 };
  }

  // `rgbToHex`
  // Converts an RGB color to hex
  // Assumes r, g, and b are contained in the set [0, 255]
  // Returns a 3 or 6 character hex
  function rgbToHex(r, g, b, allow3Char) {

      var hex = [
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16))
      ];

      // Return a 3 character hex if possible
      if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }

      return hex.join("");
  }

  // `rgbaToHex`
  // Converts an RGBA color plus alpha transparency to hex
  // Assumes r, g, b are contained in the set [0, 255] and
  // a in [0, 1]. Returns a 4 or 8 character rgba hex
  function rgbaToHex(r, g, b, a, allow4Char) {

      var hex = [
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16)),
          pad2(convertDecimalToHex(a))
      ];

      // Return a 4 character hex if possible
      if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
      }

      return hex.join("");
  }

  // `rgbaToArgbHex`
  // Converts an RGBA color to an ARGB Hex8 string
  // Rarely used, but required for "toFilter()"
  function rgbaToArgbHex(r, g, b, a) {

      var hex = [
          pad2(convertDecimalToHex(a)),
          pad2(mathRound(r).toString(16)),
          pad2(mathRound(g).toString(16)),
          pad2(mathRound(b).toString(16))
      ];

      return hex.join("");
  }

  // `equals`
  // Can be called with any tinycolor input
  tinycolor.equals = function (color1, color2) {
      if (!color1 || !color2) { return false; }
      return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };

  tinycolor.random = function() {
      return tinycolor.fromRatio({
          r: mathRandom(),
          g: mathRandom(),
          b: mathRandom()
      });
  };


  // Modification Functions
  // ----------------------
  // Thanks to less.js for some of the basics here
  // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

  function desaturate(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
  }

  function saturate(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
  }

  function greyscale(color) {
      return tinycolor(color).desaturate(100);
  }

  function lighten (color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
  }

  function brighten(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var rgb = tinycolor(color).toRgb();
      rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
      rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
      rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
      return tinycolor(rgb);
  }

  function darken (color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
  }

  // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
  // Values outside of this range will be wrapped into this range.
  function spin(color, amount) {
      var hsl = tinycolor(color).toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return tinycolor(hsl);
  }

  // Combination Functions
  // ---------------------
  // Thanks to jQuery xColor for some of the ideas behind these
  // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

  function complement(color) {
      var hsl = tinycolor(color).toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return tinycolor(hsl);
  }

  function triad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
          tinycolor(color),
          tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
      ];
  }

  function tetrad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
          tinycolor(color),
          tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
          tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
      ];
  }

  function splitcomplement(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
          tinycolor(color),
          tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
          tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
      ];
  }

  function analogous(color, results, slices) {
      results = results || 6;
      slices = slices || 30;

      var hsl = tinycolor(color).toHsl();
      var part = 360 / slices;
      var ret = [tinycolor(color)];

      for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(tinycolor(hsl));
      }
      return ret;
  }

  function monochromatic(color, results) {
      results = results || 6;
      var hsv = tinycolor(color).toHsv();
      var h = hsv.h, s = hsv.s, v = hsv.v;
      var ret = [];
      var modification = 1 / results;

      while (results--) {
          ret.push(tinycolor({ h: h, s: s, v: v}));
          v = (v + modification) % 1;
      }

      return ret;
  }

  // Utility Functions
  // ---------------------

  tinycolor.mix = function(color1, color2, amount) {
      amount = (amount === 0) ? 0 : (amount || 50);

      var rgb1 = tinycolor(color1).toRgb();
      var rgb2 = tinycolor(color2).toRgb();

      var p = amount / 100;

      var rgba = {
          r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
          g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
          b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
          a: ((rgb2.a - rgb1.a) * p) + rgb1.a
      };

      return tinycolor(rgba);
  };


  // Readability Functions
  // ---------------------
  // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

  // `contrast`
  // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
  tinycolor.readability = function(color1, color2) {
      var c1 = tinycolor(color1);
      var c2 = tinycolor(color2);
      return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
  };

  // `isReadable`
  // Ensure that foreground and background color combinations meet WCAG2 guidelines.
  // The third argument is an optional Object.
  //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
  //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
  // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

  // *Example*
  //    tinycolor.isReadable("#000", "#111") => false
  //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
  tinycolor.isReadable = function(color1, color2, wcag2) {
      var readability = tinycolor.readability(color1, color2);
      var wcag2Parms, out;

      out = false;

      wcag2Parms = validateWCAG2Parms(wcag2);
      switch (wcag2Parms.level + wcag2Parms.size) {
          case "AAsmall":
          case "AAAlarge":
              out = readability >= 4.5;
              break;
          case "AAlarge":
              out = readability >= 3;
              break;
          case "AAAsmall":
              out = readability >= 7;
              break;
      }
      return out;

  };

  // `mostReadable`
  // Given a base color and a list of possible foreground or background
  // colors for that base, returns the most readable color.
  // Optionally returns Black or White if the most readable color is unreadable.
  // *Example*
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
  tinycolor.mostReadable = function(baseColor, colorList, args) {
      var bestColor = null;
      var bestScore = 0;
      var readability;
      var includeFallbackColors, level, size ;
      args = args || {};
      includeFallbackColors = args.includeFallbackColors ;
      level = args.level;
      size = args.size;

      for (var i= 0; i < colorList.length ; i++) {
          readability = tinycolor.readability(baseColor, colorList[i]);
          if (readability > bestScore) {
              bestScore = readability;
              bestColor = tinycolor(colorList[i]);
          }
      }

      if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
          return bestColor;
      }
      else {
          args.includeFallbackColors=false;
          return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
      }
  };


  // Big List of Colors
  // ------------------
  // <http://www.w3.org/TR/css3-color/#svg-color>
  var names = tinycolor.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
  };

  // Make it easy to access colors via `hexNames[hex]`
  var hexNames = tinycolor.hexNames = flip(names);


  // Utilities
  // ---------

  // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
  function flip(o) {
      var flipped = { };
      for (var i in o) {
          if (o.hasOwnProperty(i)) {
              flipped[o[i]] = i;
          }
      }
      return flipped;
  }

  // Return a valid alpha value [0,1] with all invalid values being set to 1
  function boundAlpha(a) {
      a = parseFloat(a);

      if (isNaN(a) || a < 0 || a > 1) {
          a = 1;
      }

      return a;
  }

  // Take input from [0, n] and return it as [0, 1]
  function bound01(n, max) {
      if (isOnePointZero(n)) { n = "100%"; }

      var processPercent = isPercentage(n);
      n = mathMin(max, mathMax(0, parseFloat(n)));

      // Automatically convert percentage into number
      if (processPercent) {
          n = parseInt(n * max, 10) / 100;
      }

      // Handle floating point rounding errors
      if ((Math.abs(n - max) < 0.000001)) {
          return 1;
      }

      // Convert into [0, 1] range if it isn't already
      return (n % max) / parseFloat(max);
  }

  // Force a number between 0 and 1
  function clamp01(val) {
      return mathMin(1, mathMax(0, val));
  }

  // Parse a base-16 hex value into a base-10 integer
  function parseIntFromHex(val) {
      return parseInt(val, 16);
  }

  // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
  // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
  function isOnePointZero(n) {
      return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
  }

  // Check to see if string passed in is a percentage
  function isPercentage(n) {
      return typeof n === "string" && n.indexOf('%') != -1;
  }

  // Force a hex value to have 2 characters
  function pad2(c) {
      return c.length == 1 ? '0' + c : '' + c;
  }

  // Replace a decimal with it's percentage value
  function convertToPercentage(n) {
      if (n <= 1) {
          n = (n * 100) + "%";
      }

      return n;
  }

  // Converts a decimal to a hex value
  function convertDecimalToHex(d) {
      return Math.round(parseFloat(d) * 255).toString(16);
  }
  // Converts a hex value to a decimal
  function convertHexToDecimal(h) {
      return (parseIntFromHex(h) / 255);
  }

  var matchers = (function() {

      // <http://www.w3.org/TR/css3-values/#integers>
      var CSS_INTEGER = "[-\\+]?\\d+%?";

      // <http://www.w3.org/TR/css3-values/#number-value>
      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

      // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
      var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

      // Actual matching.
      // Parentheses and commas are optional, but not required.
      // Whitespace can take the place of commas or opening paren
      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

      return {
          CSS_UNIT: new RegExp(CSS_UNIT),
          rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
          rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
          hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
          hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
          hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
          hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
  })();

  // `isValidCSSUnit`
  // Take in a single string / number and check to see if it looks like a CSS unit
  // (see `matchers` above for definition).
  function isValidCSSUnit(color) {
      return !!matchers.CSS_UNIT.exec(color);
  }

  // `stringInputToObject`
  // Permissive string parsing.  Take in a number of formats, and output an object
  // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
  function stringInputToObject(color) {

      color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
      var named = false;
      if (names[color]) {
          color = names[color];
          named = true;
      }
      else if (color == 'transparent') {
          return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      }

      // Try to match string input using regular expressions.
      // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
      // Just return an object and let the conversion functions handle that.
      // This way the result will be the same whether the tinycolor is initialized with string or object.
      var match;
      if ((match = matchers.rgb.exec(color))) {
          return { r: match[1], g: match[2], b: match[3] };
      }
      if ((match = matchers.rgba.exec(color))) {
          return { r: match[1], g: match[2], b: match[3], a: match[4] };
      }
      if ((match = matchers.hsl.exec(color))) {
          return { h: match[1], s: match[2], l: match[3] };
      }
      if ((match = matchers.hsla.exec(color))) {
          return { h: match[1], s: match[2], l: match[3], a: match[4] };
      }
      if ((match = matchers.hsv.exec(color))) {
          return { h: match[1], s: match[2], v: match[3] };
      }
      if ((match = matchers.hsva.exec(color))) {
          return { h: match[1], s: match[2], v: match[3], a: match[4] };
      }
      if ((match = matchers.hex8.exec(color))) {
          return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              a: convertHexToDecimal(match[4]),
              format: named ? "name" : "hex8"
          };
      }
      if ((match = matchers.hex6.exec(color))) {
          return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              format: named ? "name" : "hex"
          };
      }
      if ((match = matchers.hex4.exec(color))) {
          return {
              r: parseIntFromHex(match[1] + '' + match[1]),
              g: parseIntFromHex(match[2] + '' + match[2]),
              b: parseIntFromHex(match[3] + '' + match[3]),
              a: convertHexToDecimal(match[4] + '' + match[4]),
              format: named ? "name" : "hex8"
          };
      }
      if ((match = matchers.hex3.exec(color))) {
          return {
              r: parseIntFromHex(match[1] + '' + match[1]),
              g: parseIntFromHex(match[2] + '' + match[2]),
              b: parseIntFromHex(match[3] + '' + match[3]),
              format: named ? "name" : "hex"
          };
      }

      return false;
  }

  function validateWCAG2Parms(parms) {
      // return valid WCAG2 parms for isReadable.
      // If input parms are invalid, return {"level":"AA", "size":"small"}
      var level, size;
      parms = parms || {"level":"AA", "size":"small"};
      level = (parms.level || "AA").toUpperCase();
      size = (parms.size || "small").toLowerCase();
      if (level !== "AA" && level !== "AAA") {
          level = "AA";
      }
      if (size !== "small" && size !== "large") {
          size = "small";
      }
      return {"level":level, "size":size};
  }

  // Node: Export function
  if ( module.exports) {
      module.exports = tinycolor;
  }
  // AMD/requirejs: Define the module
  else {
      window.tinycolor = tinycolor;
  }

  })(Math);
  });

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _toConsumableArray$2(arr) {
    return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$2();
  }

  function _arrayWithoutHoles$2(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  function _iterableToArray$2(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread$2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var ENTROPY = 123; // Raise numbers to prevent collisions in lower indexes

  var int2HexColor = function int2HexColor(num) {
    return "#".concat(Math.min(num, Math.pow(2, 24)).toString(16).padStart(6, '0'));
  };

  var rgb2Int = function rgb2Int(r, g, b) {
    return (r << 16) + (g << 8) + b;
  };

  var colorStr2Int = function colorStr2Int(str) {
    var _tinyColor$toRgb = tinycolor(str).toRgb(),
        r = _tinyColor$toRgb.r,
        g = _tinyColor$toRgb.g,
        b = _tinyColor$toRgb.b;

    return rgb2Int(r, g, b);
  };

  var checksum = function checksum(n, csBits) {
    return n * ENTROPY % Math.pow(2, csBits);
  };

  var _default = /*#__PURE__*/function () {
    function _default() {
      var csBits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

      _classCallCheck$1(this, _default);

      this.csBits = csBits; // How many bits to reserve for checksum. Will eat away into the usable size of the registry.

      this.registry = ['__reserved for background__']; // indexed objects for rgb lookup;
    }

    _createClass(_default, [{
      key: "register",
      value: function register(obj) {
        if (this.registry.length >= Math.pow(2, 24 - this.csBits)) {
          // color has 24 bits (-checksum)
          return null; // Registry is full
        }

        var idx = this.registry.length;
        var cs = checksum(idx, this.csBits);
        var color = int2HexColor(idx + (cs << 24 - this.csBits));
        this.registry.push(obj);
        return color;
      }
    }, {
      key: "lookup",
      value: function lookup(color) {
        var n = typeof color === 'string' ? colorStr2Int(color) : rgb2Int.apply(void 0, _toConsumableArray$2(color));
        if (!n) return null; // 0 index is reserved for background

        var idx = n & Math.pow(2, 24 - this.csBits) - 1; // registry index

        var cs = n >> 24 - this.csBits & Math.pow(2, this.csBits) - 1; // extract bits reserved for checksum

        if (checksum(idx, this.csBits) !== cs || idx >= this.registry.length) return null; // failed checksum or registry out of bounds

        return this.registry[idx];
      }
    }]);

    return _default;
  }();

  function forceCenter(x, y, z) {
    var nodes;

    if (x == null) x = 0;
    if (y == null) y = 0;
    if (z == null) z = 0;

    function force() {
      var i,
          n = nodes.length,
          node,
          sx = 0,
          sy = 0,
          sz = 0;

      for (i = 0; i < n; ++i) {
        node = nodes[i], sx += node.x || 0, sy += node.y || 0, sz += node.z || 0;
      }

      for (sx = sx / n - x, sy = sy / n - y, sz = sz / n - z, i = 0; i < n; ++i) {
        node = nodes[i];
        if (sx) { node.x -= sx; }
        if (sy) { node.y -= sy; }
        if (sz) { node.z -= sz; }
      }
    }

    force.initialize = function(_) {
      nodes = _;
    };

    force.x = function(_) {
      return arguments.length ? (x = +_, force) : x;
    };

    force.y = function(_) {
      return arguments.length ? (y = +_, force) : y;
    };

    force.z = function(_) {
      return arguments.length ? (z = +_, force) : z;
    };

    return force;
  }

  function tree_add(d) {
    var x = +this._x.call(null, d);
    return add(this.cover(x), x, d);
  }

  function add(tree, x, d) {
    if (isNaN(x)) return tree; // ignore invalid points

    var parent,
        node = tree._root,
        leaf = {data: d},
        x0 = tree._x0,
        x1 = tree._x1,
        xm,
        xp,
        right,
        i,
        j;

    // If the tree is empty, initialize the root as a leaf.
    if (!node) return tree._root = leaf, tree;

    // Find the existing leaf for the new point, or add it.
    while (node.length) {
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (parent = node, !(node = node[i = +right])) return parent[i] = leaf, tree;
    }

    // Is the new point is exactly coincident with the existing point?
    xp = +tree._x.call(null, node.data);
    if (x === xp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

    // Otherwise, split the leaf node until the old and new point are separated.
    do {
      parent = parent ? parent[i] = new Array(2) : tree._root = new Array(2);
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    } while ((i = +right) === (j = +(xp >= xm)));
    return parent[j] = node, parent[i] = leaf, tree;
  }

  function addAll(data) {
    var i, n = data.length,
        x,
        xz = new Array(n),
        x0 = Infinity,
        x1 = -Infinity;

    // Compute the points and their extent.
    for (i = 0; i < n; ++i) {
      if (isNaN(x = +this._x.call(null, data[i]))) continue;
      xz[i] = x;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
    }

    // If there were no (valid) points, inherit the existing extent.
    if (x1 < x0) x0 = this._x0, x1 = this._x1;

    // Expand the tree to cover the new points.
    this.cover(x0).cover(x1);

    // Add the new points.
    for (i = 0; i < n; ++i) {
      add(this, xz[i], data[i]);
    }

    return this;
  }

  function tree_cover(x) {
    if (isNaN(x = +x)) return this; // ignore invalid points

    var x0 = this._x0,
        x1 = this._x1;

    // If the binarytree has no extent, initialize them.
    // Integer extent are necessary so that if we later double the extent,
    // the existing half boundaries don’t change due to floating point error!
    if (isNaN(x0)) {
      x1 = (x0 = Math.floor(x)) + 1;
    }

    // Otherwise, double repeatedly to cover.
    else if (x0 > x || x > x1) {
      var z = x1 - x0,
          node = this._root,
          parent,
          i;

      switch (i = +(x < (x0 + x1) / 2)) {
        case 0: {
          do parent = new Array(2), parent[i] = node, node = parent;
          while (z *= 2, x1 = x0 + z, x > x1);
          break;
        }
        case 1: {
          do parent = new Array(2), parent[i] = node, node = parent;
          while (z *= 2, x0 = x1 - z, x0 > x);
          break;
        }
      }

      if (this._root && this._root.length) this._root = node;
    }

    // If the binarytree covers the point already, just return.
    else return this;

    this._x0 = x0;
    this._x1 = x1;
    return this;
  }

  function tree_data() {
    var data = [];
    this.visit(function(node) {
      if (!node.length) do data.push(node.data); while (node = node.next)
    });
    return data;
  }

  function tree_extent(_) {
    return arguments.length
        ? this.cover(+_[0][0]).cover(+_[1][0])
        : isNaN(this._x0) ? undefined : [[this._x0], [this._x1]];
  }

  function Half(node, x0, x1) {
    this.node = node;
    this.x0 = x0;
    this.x1 = x1;
  }

  function tree_find(x, radius) {
    var data,
        x0 = this._x0,
        x1,
        x2,
        x3 = this._x1,
        halves = [],
        node = this._root,
        q,
        i;

    if (node) halves.push(new Half(node, x0, x3));
    if (radius == null) radius = Infinity;
    else {
      x0 = x - radius;
      x3 = x + radius;
    }

    while (q = halves.pop()) {

      // Stop searching if this half can’t contain a closer node.
      if (!(node = q.node)
          || (x1 = q.x0) > x3
          || (x2 = q.x1) < x0) continue;

      // Bisect the current half.
      if (node.length) {
        var xm = (x1 + x2) / 2;

        halves.push(
          new Half(node[1], xm, x2),
          new Half(node[0], x1, xm)
        );

        // Visit the closest half first.
        if (i = +(x >= xm)) {
          q = halves[halves.length - 1];
          halves[halves.length - 1] = halves[halves.length - 1 - i];
          halves[halves.length - 1 - i] = q;
        }
      }

      // Visit this point. (Visiting coincident points isn’t necessary!)
      else {
        var d = Math.abs(x - +this._x.call(null, node.data));
        if (d < radius) {
          radius = d;
          x0 = x - d;
          x3 = x + d;
          data = node.data;
        }
      }
    }

    return data;
  }

  function tree_remove(d) {
    if (isNaN(x = +this._x.call(null, d))) return this; // ignore invalid points

    var parent,
        node = this._root,
        retainer,
        previous,
        next,
        x0 = this._x0,
        x1 = this._x1,
        x,
        xm,
        right,
        i,
        j;

    // If the tree is empty, initialize the root as a leaf.
    if (!node) return this;

    // Find the leaf node for the point.
    // While descending, also retain the deepest parent with a non-removed sibling.
    if (node.length) while (true) {
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (!(parent = node, node = node[i = +right])) return this;
      if (!node.length) break;
      if (parent[(i + 1) & 1]) retainer = parent, j = i;
    }

    // Find the point to remove.
    while (node.data !== d) if (!(previous = node, node = node.next)) return this;
    if (next = node.next) delete node.next;

    // If there are multiple coincident points, remove just the point.
    if (previous) return (next ? previous.next = next : delete previous.next), this;

    // If this is the root point, remove it.
    if (!parent) return this._root = next, this;

    // Remove this leaf.
    next ? parent[i] = next : delete parent[i];

    // If the parent now contains exactly one leaf, collapse superfluous parents.
    if ((node = parent[0] || parent[1])
        && node === (parent[1] || parent[0])
        && !node.length) {
      if (retainer) retainer[j] = node;
      else this._root = node;
    }

    return this;
  }

  function removeAll(data) {
    for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
    return this;
  }

  function tree_root() {
    return this._root;
  }

  function tree_size() {
    var size = 0;
    this.visit(function(node) {
      if (!node.length) do ++size; while (node = node.next)
    });
    return size;
  }

  function tree_visit(callback) {
    var halves = [], q, node = this._root, child, x0, x1;
    if (node) halves.push(new Half(node, this._x0, this._x1));
    while (q = halves.pop()) {
      if (!callback(node = q.node, x0 = q.x0, x1 = q.x1) && node.length) {
        var xm = (x0 + x1) / 2;
        if (child = node[1]) halves.push(new Half(child, xm, x1));
        if (child = node[0]) halves.push(new Half(child, x0, xm));
      }
    }
    return this;
  }

  function tree_visitAfter(callback) {
    var halves = [], next = [], q;
    if (this._root) halves.push(new Half(this._root, this._x0, this._x1));
    while (q = halves.pop()) {
      var node = q.node;
      if (node.length) {
        var child, x0 = q.x0, x1 = q.x1, xm = (x0 + x1) / 2;
        if (child = node[0]) halves.push(new Half(child, x0, xm));
        if (child = node[1]) halves.push(new Half(child, xm, x1));
      }
      next.push(q);
    }
    while (q = next.pop()) {
      callback(q.node, q.x0, q.x1);
    }
    return this;
  }

  function defaultX(d) {
    return d[0];
  }

  function tree_x(_) {
    return arguments.length ? (this._x = _, this) : this._x;
  }

  function binarytree(nodes, x) {
    var tree = new Binarytree(x == null ? defaultX : x, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
  }

  function Binarytree(x, x0, x1) {
    this._x = x;
    this._x0 = x0;
    this._x1 = x1;
    this._root = undefined;
  }

  function leaf_copy(leaf) {
    var copy = {data: leaf.data}, next = copy;
    while (leaf = leaf.next) next = next.next = {data: leaf.data};
    return copy;
  }

  var treeProto = binarytree.prototype = Binarytree.prototype;

  treeProto.copy = function() {
    var copy = new Binarytree(this._x, this._x0, this._x1),
        node = this._root,
        nodes,
        child;

    if (!node) return copy;

    if (!node.length) return copy._root = leaf_copy(node), copy;

    nodes = [{source: node, target: copy._root = new Array(2)}];
    while (node = nodes.pop()) {
      for (var i = 0; i < 2; ++i) {
        if (child = node.source[i]) {
          if (child.length) nodes.push({source: child, target: node.target[i] = new Array(2)});
          else node.target[i] = leaf_copy(child);
        }
      }
    }

    return copy;
  };

  treeProto.add = tree_add;
  treeProto.addAll = addAll;
  treeProto.cover = tree_cover;
  treeProto.data = tree_data;
  treeProto.extent = tree_extent;
  treeProto.find = tree_find;
  treeProto.remove = tree_remove;
  treeProto.removeAll = removeAll;
  treeProto.root = tree_root;
  treeProto.size = tree_size;
  treeProto.visit = tree_visit;
  treeProto.visitAfter = tree_visitAfter;
  treeProto.x = tree_x;

  function tree_add$1(d) {
    var x = +this._x.call(null, d),
        y = +this._y.call(null, d);
    return add$1(this.cover(x, y), x, y, d);
  }

  function add$1(tree, x, y, d) {
    if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

    var parent,
        node = tree._root,
        leaf = {data: d},
        x0 = tree._x0,
        y0 = tree._y0,
        x1 = tree._x1,
        y1 = tree._y1,
        xm,
        ym,
        xp,
        yp,
        right,
        bottom,
        i,
        j;

    // If the tree is empty, initialize the root as a leaf.
    if (!node) return tree._root = leaf, tree;

    // Find the existing leaf for the new point, or add it.
    while (node.length) {
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
      if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
    }

    // Is the new point is exactly coincident with the existing point?
    xp = +tree._x.call(null, node.data);
    yp = +tree._y.call(null, node.data);
    if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

    // Otherwise, split the leaf node until the old and new point are separated.
    do {
      parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
    return parent[j] = node, parent[i] = leaf, tree;
  }

  function addAll$1(data) {
    var d, i, n = data.length,
        x,
        y,
        xz = new Array(n),
        yz = new Array(n),
        x0 = Infinity,
        y0 = Infinity,
        x1 = -Infinity,
        y1 = -Infinity;

    // Compute the points and their extent.
    for (i = 0; i < n; ++i) {
      if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
      xz[i] = x;
      yz[i] = y;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }

    // If there were no (valid) points, abort.
    if (x0 > x1 || y0 > y1) return this;

    // Expand the tree to cover the new points.
    this.cover(x0, y0).cover(x1, y1);

    // Add the new points.
    for (i = 0; i < n; ++i) {
      add$1(this, xz[i], yz[i], data[i]);
    }

    return this;
  }

  function tree_cover$1(x, y) {
    if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

    var x0 = this._x0,
        y0 = this._y0,
        x1 = this._x1,
        y1 = this._y1;

    // If the quadtree has no extent, initialize them.
    // Integer extent are necessary so that if we later double the extent,
    // the existing quadrant boundaries don’t change due to floating point error!
    if (isNaN(x0)) {
      x1 = (x0 = Math.floor(x)) + 1;
      y1 = (y0 = Math.floor(y)) + 1;
    }

    // Otherwise, double repeatedly to cover.
    else {
      var z = x1 - x0,
          node = this._root,
          parent,
          i;

      while (x0 > x || x >= x1 || y0 > y || y >= y1) {
        i = (y < y0) << 1 | (x < x0);
        parent = new Array(4), parent[i] = node, node = parent, z *= 2;
        switch (i) {
          case 0: x1 = x0 + z, y1 = y0 + z; break;
          case 1: x0 = x1 - z, y1 = y0 + z; break;
          case 2: x1 = x0 + z, y0 = y1 - z; break;
          case 3: x0 = x1 - z, y0 = y1 - z; break;
        }
      }

      if (this._root && this._root.length) this._root = node;
    }

    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    return this;
  }

  function tree_data$1() {
    var data = [];
    this.visit(function(node) {
      if (!node.length) do data.push(node.data); while (node = node.next)
    });
    return data;
  }

  function tree_extent$1(_) {
    return arguments.length
        ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
        : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
  }

  function Quad(node, x0, y0, x1, y1) {
    this.node = node;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
  }

  function tree_find$1(x, y, radius) {
    var data,
        x0 = this._x0,
        y0 = this._y0,
        x1,
        y1,
        x2,
        y2,
        x3 = this._x1,
        y3 = this._y1,
        quads = [],
        node = this._root,
        q,
        i;

    if (node) quads.push(new Quad(node, x0, y0, x3, y3));
    if (radius == null) radius = Infinity;
    else {
      x0 = x - radius, y0 = y - radius;
      x3 = x + radius, y3 = y + radius;
      radius *= radius;
    }

    while (q = quads.pop()) {

      // Stop searching if this quadrant can’t contain a closer node.
      if (!(node = q.node)
          || (x1 = q.x0) > x3
          || (y1 = q.y0) > y3
          || (x2 = q.x1) < x0
          || (y2 = q.y1) < y0) continue;

      // Bisect the current quadrant.
      if (node.length) {
        var xm = (x1 + x2) / 2,
            ym = (y1 + y2) / 2;

        quads.push(
          new Quad(node[3], xm, ym, x2, y2),
          new Quad(node[2], x1, ym, xm, y2),
          new Quad(node[1], xm, y1, x2, ym),
          new Quad(node[0], x1, y1, xm, ym)
        );

        // Visit the closest quadrant first.
        if (i = (y >= ym) << 1 | (x >= xm)) {
          q = quads[quads.length - 1];
          quads[quads.length - 1] = quads[quads.length - 1 - i];
          quads[quads.length - 1 - i] = q;
        }
      }

      // Visit this point. (Visiting coincident points isn’t necessary!)
      else {
        var dx = x - +this._x.call(null, node.data),
            dy = y - +this._y.call(null, node.data),
            d2 = dx * dx + dy * dy;
        if (d2 < radius) {
          var d = Math.sqrt(radius = d2);
          x0 = x - d, y0 = y - d;
          x3 = x + d, y3 = y + d;
          data = node.data;
        }
      }
    }

    return data;
  }

  function tree_remove$1(d) {
    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

    var parent,
        node = this._root,
        retainer,
        previous,
        next,
        x0 = this._x0,
        y0 = this._y0,
        x1 = this._x1,
        y1 = this._y1,
        x,
        y,
        xm,
        ym,
        right,
        bottom,
        i,
        j;

    // If the tree is empty, initialize the root as a leaf.
    if (!node) return this;

    // Find the leaf node for the point.
    // While descending, also retain the deepest parent with a non-removed sibling.
    if (node.length) while (true) {
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
      if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
      if (!node.length) break;
      if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
    }

    // Find the point to remove.
    while (node.data !== d) if (!(previous = node, node = node.next)) return this;
    if (next = node.next) delete node.next;

    // If there are multiple coincident points, remove just the point.
    if (previous) return (next ? previous.next = next : delete previous.next), this;

    // If this is the root point, remove it.
    if (!parent) return this._root = next, this;

    // Remove this leaf.
    next ? parent[i] = next : delete parent[i];

    // If the parent now contains exactly one leaf, collapse superfluous parents.
    if ((node = parent[0] || parent[1] || parent[2] || parent[3])
        && node === (parent[3] || parent[2] || parent[1] || parent[0])
        && !node.length) {
      if (retainer) retainer[j] = node;
      else this._root = node;
    }

    return this;
  }

  function removeAll$1(data) {
    for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
    return this;
  }

  function tree_root$1() {
    return this._root;
  }

  function tree_size$1() {
    var size = 0;
    this.visit(function(node) {
      if (!node.length) do ++size; while (node = node.next)
    });
    return size;
  }

  function tree_visit$1(callback) {
    var quads = [], q, node = this._root, child, x0, y0, x1, y1;
    if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
    while (q = quads.pop()) {
      if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
        var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
      }
    }
    return this;
  }

  function tree_visitAfter$1(callback) {
    var quads = [], next = [], q;
    if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
    while (q = quads.pop()) {
      var node = q.node;
      if (node.length) {
        var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
      }
      next.push(q);
    }
    while (q = next.pop()) {
      callback(q.node, q.x0, q.y0, q.x1, q.y1);
    }
    return this;
  }

  function defaultX$1(d) {
    return d[0];
  }

  function tree_x$1(_) {
    return arguments.length ? (this._x = _, this) : this._x;
  }

  function defaultY(d) {
    return d[1];
  }

  function tree_y(_) {
    return arguments.length ? (this._y = _, this) : this._y;
  }

  function quadtree(nodes, x, y) {
    var tree = new Quadtree(x == null ? defaultX$1 : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
  }

  function Quadtree(x, y, x0, y0, x1, y1) {
    this._x = x;
    this._y = y;
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    this._root = undefined;
  }

  function leaf_copy$1(leaf) {
    var copy = {data: leaf.data}, next = copy;
    while (leaf = leaf.next) next = next.next = {data: leaf.data};
    return copy;
  }

  var treeProto$1 = quadtree.prototype = Quadtree.prototype;

  treeProto$1.copy = function() {
    var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        node = this._root,
        nodes,
        child;

    if (!node) return copy;

    if (!node.length) return copy._root = leaf_copy$1(node), copy;

    nodes = [{source: node, target: copy._root = new Array(4)}];
    while (node = nodes.pop()) {
      for (var i = 0; i < 4; ++i) {
        if (child = node.source[i]) {
          if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
          else node.target[i] = leaf_copy$1(child);
        }
      }
    }

    return copy;
  };

  treeProto$1.add = tree_add$1;
  treeProto$1.addAll = addAll$1;
  treeProto$1.cover = tree_cover$1;
  treeProto$1.data = tree_data$1;
  treeProto$1.extent = tree_extent$1;
  treeProto$1.find = tree_find$1;
  treeProto$1.remove = tree_remove$1;
  treeProto$1.removeAll = removeAll$1;
  treeProto$1.root = tree_root$1;
  treeProto$1.size = tree_size$1;
  treeProto$1.visit = tree_visit$1;
  treeProto$1.visitAfter = tree_visitAfter$1;
  treeProto$1.x = tree_x$1;
  treeProto$1.y = tree_y;

  function tree_add$2(d) {
    var x = +this._x.call(null, d),
        y = +this._y.call(null, d),
        z = +this._z.call(null, d);
    return add$2(this.cover(x, y, z), x, y, z, d);
  }

  function add$2(tree, x, y, z, d) {
    if (isNaN(x) || isNaN(y) || isNaN(z)) return tree; // ignore invalid points

    var parent,
        node = tree._root,
        leaf = {data: d},
        x0 = tree._x0,
        y0 = tree._y0,
        z0 = tree._z0,
        x1 = tree._x1,
        y1 = tree._y1,
        z1 = tree._z1,
        xm,
        ym,
        zm,
        xp,
        yp,
        zp,
        right,
        bottom,
        deep,
        i,
        j;

    // If the tree is empty, initialize the root as a leaf.
    if (!node) return tree._root = leaf, tree;

    // Find the existing leaf for the new point, or add it.
    while (node.length) {
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
      if (deep = z >= (zm = (z0 + z1) / 2)) z0 = zm; else z1 = zm;
      if (parent = node, !(node = node[i = deep << 2 | bottom << 1 | right])) return parent[i] = leaf, tree;
    }

    // Is the new point is exactly coincident with the existing point?
    xp = +tree._x.call(null, node.data);
    yp = +tree._y.call(null, node.data);
    zp = +tree._z.call(null, node.data);
    if (x === xp && y === yp && z === zp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

    // Otherwise, split the leaf node until the old and new point are separated.
    do {
      parent = parent ? parent[i] = new Array(8) : tree._root = new Array(8);
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
      if (deep = z >= (zm = (z0 + z1) / 2)) z0 = zm; else z1 = zm;
    } while ((i = deep << 2 | bottom << 1 | right) === (j = (zp >= zm) << 2 | (yp >= ym) << 1 | (xp >= xm)));
    return parent[j] = node, parent[i] = leaf, tree;
  }

  function addAll$2(data) {
    var d, i, n = data.length,
        x,
        y,
        z,
        xz = new Array(n),
        yz = new Array(n),
        zz = new Array(n),
        x0 = Infinity,
        y0 = Infinity,
        z0 = Infinity,
        x1 = -Infinity,
        y1 = -Infinity,
        z1 = -Infinity;

    // Compute the points and their extent.
    for (i = 0; i < n; ++i) {
      if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d)) || isNaN(z = +this._z.call(null, d))) continue;
      xz[i] = x;
      yz[i] = y;
      zz[i] = z;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
      if (z < z0) z0 = z;
      if (z > z1) z1 = z;
    }

    // If there were no (valid) points, inherit the existing extent.
    if (x1 < x0) x0 = this._x0, x1 = this._x1;
    if (y1 < y0) y0 = this._y0, y1 = this._y1;
    if (z1 < z0) z0 = this._z0, z1 = this._z1;

    // Expand the tree to cover the new points.
    this.cover(x0, y0, z0).cover(x1, y1, z1);

    // Add the new points.
    for (i = 0; i < n; ++i) {
      add$2(this, xz[i], yz[i], zz[i], data[i]);
    }

    return this;
  }

  function tree_cover$2(x, y, z) {
    if (isNaN(x = +x) || isNaN(y = +y) || isNaN(z = +z)) return this; // ignore invalid points

    var x0 = this._x0,
        y0 = this._y0,
        z0 = this._z0,
        x1 = this._x1,
        y1 = this._y1,
        z1 = this._z1;

    // If the octree has no extent, initialize them.
    // Integer extent are necessary so that if we later double the extent,
    // the existing octant boundaries don’t change due to floating point error!
    if (isNaN(x0)) {
      x1 = (x0 = Math.floor(x)) + 1;
      y1 = (y0 = Math.floor(y)) + 1;
      z1 = (z0 = Math.floor(z)) + 1;
    }

    // Otherwise, double repeatedly to cover.
    else if (x0 > x || x > x1 || y0 > y || y > y1 || z0 > z || z > z1) {
      var t = x1 - x0,
          node = this._root,
          parent,
          i;

      switch (i = (z < (z0 + z1) / 2) << 2 | (y < (y0 + y1) / 2) << 1 | (x < (x0 + x1) / 2)) {
        case 0: {
          do parent = new Array(8), parent[i] = node, node = parent;
          while (t *= 2, x1 = x0 + t, y1 = y0 + t, z1 = z0 + t, x > x1 || y > y1 || z > z1);
          break;
        }
        case 1: {
          do parent = new Array(8), parent[i] = node, node = parent;
          while (t *= 2, x0 = x1 - t, y1 = y0 + t, z1 = z0 + t, x0 > x || y > y1 || z > z1);
          break;
        }
        case 2: {
          do parent = new Array(8), parent[i] = node, node = parent;
          while (t *= 2, x1 = x0 + t, y0 = y1 - t, z1 = z0 + t, x > x1 || y0 > y || z > z1);
          break;
        }
        case 3: {
          do parent = new Array(8), parent[i] = node, node = parent;
          while (t *= 2, x0 = x1 - t, y0 = y1 - t, z1 = z0 + t, x0 > x || y0 > y || z > z1);
          break;
        }
        case 4: {
          do parent = new Array(8), parent[i] = node, node = parent;
          while (t *= 2, x1 = x0 + t, y1 = y0 + t, z0 = z1 - t, x > x1 || y > y1 || z0 > z);
          break;
        }
        case 5: {
          do parent = new Array(8), parent[i] = node, node = parent;
          while (t *= 2, x0 = x1 - t, y1 = y0 + t, z0 = z1 - t, x0 > x || y > y1 || z0 > z);
          break;
        }
        case 6: {
          do parent = new Array(8), parent[i] = node, node = parent;
          while (t *= 2, x1 = x0 + t, y0 = y1 - t, z0 = z1 - t, x > x1 || y0 > y || z0 > z);
          break;
        }
        case 7: {
          do parent = new Array(8), parent[i] = node, node = parent;
          while (t *= 2, x0 = x1 - t, y0 = y1 - t, z0 = z1 - t, x0 > x || y0 > y || z0 > z);
          break;
        }
      }

      if (this._root && this._root.length) this._root = node;
    }

    // If the octree covers the point already, just return.
    else return this;

    this._x0 = x0;
    this._y0 = y0;
    this._z0 = z0;
    this._x1 = x1;
    this._y1 = y1;
    this._z1 = z1;
    return this;
  }

  function tree_data$2() {
    var data = [];
    this.visit(function(node) {
      if (!node.length) do data.push(node.data); while (node = node.next)
    });
    return data;
  }

  function tree_extent$2(_) {
    return arguments.length
        ? this.cover(+_[0][0], +_[0][1], +_[0][2]).cover(+_[1][0], +_[1][1], +_[1][2])
        : isNaN(this._x0) ? undefined : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
  }

  function Octant(node, x0, y0, z0, x1, y1, z1) {
    this.node = node;
    this.x0 = x0;
    this.y0 = y0;
    this.z0 = z0;
    this.x1 = x1;
    this.y1 = y1;
    this.z1 = z1;
  }

  function tree_find$2(x, y, z, radius) {
    var data,
        x0 = this._x0,
        y0 = this._y0,
        z0 = this._z0,
        x1,
        y1,
        z1,
        x2,
        y2,
        z2,
        x3 = this._x1,
        y3 = this._y1,
        z3 = this._z1,
        octs = [],
        node = this._root,
        q,
        i;

    if (node) octs.push(new Octant(node, x0, y0, z0, x3, y3, z3));
    if (radius == null) radius = Infinity;
    else {
      x0 = x - radius, y0 = y - radius, z0 = z - radius;
      x3 = x + radius, y3 = y + radius, z3 = z + radius;
      radius *= radius;
    }

    while (q = octs.pop()) {

      // Stop searching if this octant can’t contain a closer node.
      if (!(node = q.node)
          || (x1 = q.x0) > x3
          || (y1 = q.y0) > y3
          || (z1 = q.z0) > z3
          || (x2 = q.x1) < x0
          || (y2 = q.y1) < y0
          || (z2 = q.z1) < z0) continue;

      // Bisect the current octant.
      if (node.length) {
        var xm = (x1 + x2) / 2,
            ym = (y1 + y2) / 2,
            zm = (z1 + z2) / 2;

        octs.push(
          new Octant(node[7], xm, ym, zm, x2, y2, z2),
          new Octant(node[6], x1, ym, zm, xm, y2, z2),
          new Octant(node[5], xm, y1, zm, x2, ym, z2),
          new Octant(node[4], x1, y1, zm, xm, ym, z2),
          new Octant(node[3], xm, ym, z1, x2, y2, zm),
          new Octant(node[2], x1, ym, z1, xm, y2, zm),
          new Octant(node[1], xm, y1, z1, x2, ym, zm),
          new Octant(node[0], x1, y1, z1, xm, ym, zm)
        );

        // Visit the closest octant first.
        if (i = (z >= zm) << 2 | (y >= ym) << 1 | (x >= xm)) {
          q = octs[octs.length - 1];
          octs[octs.length - 1] = octs[octs.length - 1 - i];
          octs[octs.length - 1 - i] = q;
        }
      }

      // Visit this point. (Visiting coincident points isn’t necessary!)
      else {
        var dx = x - +this._x.call(null, node.data),
            dy = y - +this._y.call(null, node.data),
            dz = z - +this._z.call(null, node.data),
            d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < radius) {
          var d = Math.sqrt(radius = d2);
          x0 = x - d, y0 = y - d, z0 = z - d;
          x3 = x + d, y3 = y + d, z3 = z + d;
          data = node.data;
        }
      }
    }

    return data;
  }

  function tree_remove$2(d) {
    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d)) || isNaN(z = +this._z.call(null, d))) return this; // ignore invalid points

    var parent,
        node = this._root,
        retainer,
        previous,
        next,
        x0 = this._x0,
        y0 = this._y0,
        z0 = this._z0,
        x1 = this._x1,
        y1 = this._y1,
        z1 = this._z1,
        x,
        y,
        z,
        xm,
        ym,
        zm,
        right,
        bottom,
        deep,
        i,
        j;

    // If the tree is empty, initialize the root as a leaf.
    if (!node) return this;

    // Find the leaf node for the point.
    // While descending, also retain the deepest parent with a non-removed sibling.
    if (node.length) while (true) {
      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
      if (deep = z >= (zm = (z0 + z1) / 2)) z0 = zm; else z1 = zm;
      if (!(parent = node, node = node[i = deep << 2 | bottom << 1 | right])) return this;
      if (!node.length) break;
      if (parent[(i + 1) & 7] || parent[(i + 2) & 7] || parent[(i + 3) & 7] || parent[(i + 4) & 7] || parent[(i + 5) & 7] || parent[(i + 6) & 7] || parent[(i + 7) & 7]) retainer = parent, j = i;
    }

    // Find the point to remove.
    while (node.data !== d) if (!(previous = node, node = node.next)) return this;
    if (next = node.next) delete node.next;

    // If there are multiple coincident points, remove just the point.
    if (previous) return (next ? previous.next = next : delete previous.next), this;

    // If this is the root point, remove it.
    if (!parent) return this._root = next, this;

    // Remove this leaf.
    next ? parent[i] = next : delete parent[i];

    // If the parent now contains exactly one leaf, collapse superfluous parents.
    if ((node = parent[0] || parent[1] || parent[2] || parent[3] || parent[4] || parent[5] || parent[6] || parent[7])
        && node === (parent[7] || parent[6] || parent[5] || parent[4] || parent[3] || parent[2] || parent[1] || parent[0])
        && !node.length) {
      if (retainer) retainer[j] = node;
      else this._root = node;
    }

    return this;
  }

  function removeAll$2(data) {
    for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
    return this;
  }

  function tree_root$2() {
    return this._root;
  }

  function tree_size$2() {
    var size = 0;
    this.visit(function(node) {
      if (!node.length) do ++size; while (node = node.next)
    });
    return size;
  }

  function tree_visit$2(callback) {
    var octs = [], q, node = this._root, child, x0, y0, z0, x1, y1, z1;
    if (node) octs.push(new Octant(node, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1));
    while (q = octs.pop()) {
      if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, z0 = q.z0, x1 = q.x1, y1 = q.y1, z1 = q.z1) && node.length) {
        var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2, zm = (z0 + z1) / 2;
        if (child = node[7]) octs.push(new Octant(child, xm, ym, zm, x1, y1, z1));
        if (child = node[6]) octs.push(new Octant(child, x0, ym, zm, xm, y1, z1));
        if (child = node[5]) octs.push(new Octant(child, xm, y0, zm, x1, ym, z1));
        if (child = node[4]) octs.push(new Octant(child, x0, y0, zm, xm, ym, z1));
        if (child = node[3]) octs.push(new Octant(child, xm, ym, z0, x1, y1, zm));
        if (child = node[2]) octs.push(new Octant(child, x0, ym, z0, xm, y1, zm));
        if (child = node[1]) octs.push(new Octant(child, xm, y0, z0, x1, ym, zm));
        if (child = node[0]) octs.push(new Octant(child, x0, y0, z0, xm, ym, zm));
      }
    }
    return this;
  }

  function tree_visitAfter$2(callback) {
    var octs = [], next = [], q;
    if (this._root) octs.push(new Octant(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1));
    while (q = octs.pop()) {
      var node = q.node;
      if (node.length) {
        var child, x0 = q.x0, y0 = q.y0, z0 = q.z0, x1 = q.x1, y1 = q.y1, z1 = q.z1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2, zm = (z0 + z1) / 2;
        if (child = node[0]) octs.push(new Octant(child, x0, y0, z0, xm, ym, zm));
        if (child = node[1]) octs.push(new Octant(child, xm, y0, z0, x1, ym, zm));
        if (child = node[2]) octs.push(new Octant(child, x0, ym, z0, xm, y1, zm));
        if (child = node[3]) octs.push(new Octant(child, xm, ym, z0, x1, y1, zm));
        if (child = node[4]) octs.push(new Octant(child, x0, y0, zm, xm, ym, z1));
        if (child = node[5]) octs.push(new Octant(child, xm, y0, zm, x1, ym, z1));
        if (child = node[6]) octs.push(new Octant(child, x0, ym, zm, xm, y1, z1));
        if (child = node[7]) octs.push(new Octant(child, xm, ym, zm, x1, y1, z1));
      }
      next.push(q);
    }
    while (q = next.pop()) {
      callback(q.node, q.x0, q.y0, q.z0, q.x1, q.y1, q.z1);
    }
    return this;
  }

  function defaultX$2(d) {
    return d[0];
  }

  function tree_x$2(_) {
    return arguments.length ? (this._x = _, this) : this._x;
  }

  function defaultY$1(d) {
    return d[1];
  }

  function tree_y$1(_) {
    return arguments.length ? (this._y = _, this) : this._y;
  }

  function defaultZ(d) {
    return d[2];
  }

  function tree_z(_) {
    return arguments.length ? (this._z = _, this) : this._z;
  }

  function octree(nodes, x, y, z) {
    var tree = new Octree(x == null ? defaultX$2 : x, y == null ? defaultY$1 : y, z == null ? defaultZ : z, NaN, NaN, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
  }

  function Octree(x, y, z, x0, y0, z0, x1, y1, z1) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._x0 = x0;
    this._y0 = y0;
    this._z0 = z0;
    this._x1 = x1;
    this._y1 = y1;
    this._z1 = z1;
    this._root = undefined;
  }

  function leaf_copy$2(leaf) {
    var copy = {data: leaf.data}, next = copy;
    while (leaf = leaf.next) next = next.next = {data: leaf.data};
    return copy;
  }

  var treeProto$2 = octree.prototype = Octree.prototype;

  treeProto$2.copy = function() {
    var copy = new Octree(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1),
        node = this._root,
        nodes,
        child;

    if (!node) return copy;

    if (!node.length) return copy._root = leaf_copy$2(node), copy;

    nodes = [{source: node, target: copy._root = new Array(8)}];
    while (node = nodes.pop()) {
      for (var i = 0; i < 8; ++i) {
        if (child = node.source[i]) {
          if (child.length) nodes.push({source: child, target: node.target[i] = new Array(8)});
          else node.target[i] = leaf_copy$2(child);
        }
      }
    }

    return copy;
  };

  treeProto$2.add = tree_add$2;
  treeProto$2.addAll = addAll$2;
  treeProto$2.cover = tree_cover$2;
  treeProto$2.data = tree_data$2;
  treeProto$2.extent = tree_extent$2;
  treeProto$2.find = tree_find$2;
  treeProto$2.remove = tree_remove$2;
  treeProto$2.removeAll = removeAll$2;
  treeProto$2.root = tree_root$2;
  treeProto$2.size = tree_size$2;
  treeProto$2.visit = tree_visit$2;
  treeProto$2.visitAfter = tree_visitAfter$2;
  treeProto$2.x = tree_x$2;
  treeProto$2.y = tree_y$1;
  treeProto$2.z = tree_z;

  function constant$4(x) {
    return function() {
      return x;
    };
  }

  function jiggle() {
    return (Math.random() - 0.5) * 1e-6;
  }

  function index$3(d) {
    return d.index;
  }

  function find$1(nodeById, nodeId) {
    var node = nodeById.get(nodeId);
    if (!node) throw new Error("node not found: " + nodeId);
    return node;
  }

  function forceLink(links) {
    var id = index$3,
        strength = defaultStrength,
        strengths,
        distance = constant$4(30),
        distances,
        nodes,
        nDim,
        count,
        bias,
        iterations = 1;

    if (links == null) links = [];

    function defaultStrength(link) {
      /* XXX attractive force
         - defaultStrenght: low value makes it appear like a blob
	 - defaultStrength: smth like 10 completely breaks the simulation?
	 - changing min to max results in 'leafy' nodes pushed very far apart
	 - adding Math.pow(count, 2) -- weird. I guess pow has similar effect and reduces the force effectively
         - changing distance to large values -- again, weird cicrular artifacts??
           I guess it's sort of an 'expected distance'? and at some point it's dominated by the repulsion anyway. default 30 is good enough
      */
      return 1 / Math.pow(Math.min(count[link.source.index], count[link.target.index]), 1);
    }

    function force(alpha) {
      for (var k = 0, n = links.length; k < iterations; ++k) {
        for (var i = 0, link, source, target, x = 0, y = 0, z = 0, l, b; i < n; ++i) {
          link = links[i], source = link.source, target = link.target;
          x = target.x + target.vx - source.x - source.vx || jiggle();
          if (nDim > 1) { y = target.y + target.vy - source.y - source.vy || jiggle(); }
          if (nDim > 2) { z = target.z + target.vz - source.z - source.vz || jiggle(); }
          l = Math.sqrt(x * x + y * y + z * z);
          l = (l - distances[i]) / l * alpha * strengths[i];
          x *= l, y *= l, z *= l;

          target.vx -= x * (b = bias[i]);
          if (nDim > 1) { target.vy -= y * b; }
          if (nDim > 2) { target.vz -= z * b; }

          source.vx += x * (b = 1 - b);
          if (nDim > 1) { source.vy += y * b; }
          if (nDim > 2) { source.vz += z * b; }
        }
      }
    }

    function initialize() {
      if (!nodes) return;

      var i,
          n = nodes.length,
          m = links.length,
          nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])),
          link;

      for (i = 0, count = new Array(n); i < m; ++i) {
        link = links[i], link.index = i;
        if (typeof link.source !== "object") link.source = find$1(nodeById, link.source);
        if (typeof link.target !== "object") link.target = find$1(nodeById, link.target);
        count[link.source.index] = (count[link.source.index] || 0) + 1;
        count[link.target.index] = (count[link.target.index] || 0) + 1;
      }

      for (i = 0, bias = new Array(m); i < m; ++i) {
        link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
      }

      strengths = new Array(m), initializeStrength();
      distances = new Array(m), initializeDistance();
    }

    function initializeStrength() {
      if (!nodes) return;

      for (var i = 0, n = links.length; i < n; ++i) {
        strengths[i] = +strength(links[i], i, links);
      }
    }

    function initializeDistance() {
      if (!nodes) return;

      for (var i = 0, n = links.length; i < n; ++i) {
        distances[i] = +distance(links[i], i, links);
      }
    }

    force.initialize = function(initNodes, numDimensions) {
      nodes = initNodes;
      nDim = numDimensions;
      initialize();
    };

    force.links = function(_) {
      return arguments.length ? (links = _, initialize(), force) : links;
    };

    force.id = function(_) {
      return arguments.length ? (id = _, force) : id;
    };

    force.iterations = function(_) {
      return arguments.length ? (iterations = +_, force) : iterations;
    };

    force.strength = function(_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$4(+_), initializeStrength(), force) : strength;
    };

    force.distance = function(_) {
      return arguments.length ? (distance = typeof _ === "function" ? _ : constant$4(+_), initializeDistance(), force) : distance;
    };

    return force;
  }

  var noop$1 = {value: function() {}};

  function dispatch$1() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch$1(_);
  }

  function Dispatch$1(_) {
    this._ = _;
  }

  function parseTypenames$2(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {type: t, name: name};
    });
  }

  Dispatch$1.prototype = dispatch$1.prototype = {
    constructor: Dispatch$1,
    on: function(typename, callback) {
      var _ = this._,
          T = parseTypenames$2(typename + "", _),
          t,
          i = -1,
          n = T.length;

      // If no callback was specified, return the callback of the given type and name.
      if (arguments.length < 2) {
        while (++i < n) if ((t = (typename = T[i]).type) && (t = get$2(_[t], typename.name))) return t;
        return;
      }

      // If a type was specified, set the callback for the given type and name.
      // Otherwise, if a null callback was specified, remove callbacks of the given name.
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type) _[t] = set$2(_[t], typename.name, callback);
        else if (callback == null) for (t in _) _[t] = set$2(_[t], typename.name, null);
      }

      return this;
    },
    copy: function() {
      var copy = {}, _ = this._;
      for (var t in _) copy[t] = _[t].slice();
      return new Dispatch$1(copy);
    },
    call: function(type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    }
  };

  function get$2(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }

  function set$2(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        type[i] = noop$1, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
    }
    if (callback != null) type.push({name: name, value: callback});
    return type;
  }

  var frame$1 = 0, // is an animation frame pending?
      timeout$2 = 0, // is a timeout pending?
      interval$1 = 0, // are any timers active?
      pokeDelay$1 = 1000, // how frequently we check for clock skew
      taskHead$1,
      taskTail$1,
      clockLast$1 = 0,
      clockNow$1 = 0,
      clockSkew$1 = 0,
      clock$1 = typeof performance === "object" && performance.now ? performance : Date,
      setFrame$1 = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

  function now$2() {
    return clockNow$1 || (setFrame$1(clearNow$1), clockNow$1 = clock$1.now() + clockSkew$1);
  }

  function clearNow$1() {
    clockNow$1 = 0;
  }

  function Timer$1() {
    this._call =
    this._time =
    this._next = null;
  }

  Timer$1.prototype = timer$1.prototype = {
    constructor: Timer$1,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now$2() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail$1 !== this) {
        if (taskTail$1) taskTail$1._next = this;
        else taskHead$1 = this;
        taskTail$1 = this;
      }
      this._call = callback;
      this._time = time;
      sleep$1();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep$1();
      }
    }
  };

  function timer$1(callback, delay, time) {
    var t = new Timer$1;
    t.restart(callback, delay, time);
    return t;
  }

  function timerFlush$1() {
    now$2(); // Get the current time, if not already set.
    ++frame$1; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead$1, e;
    while (t) {
      if ((e = clockNow$1 - t._time) >= 0) t._call.call(null, e);
      t = t._next;
    }
    --frame$1;
  }

  function wake$1() {
    clockNow$1 = (clockLast$1 = clock$1.now()) + clockSkew$1;
    frame$1 = timeout$2 = 0;
    try {
      timerFlush$1();
    } finally {
      frame$1 = 0;
      nap$1();
      clockNow$1 = 0;
    }
  }

  function poke$1() {
    var now = clock$1.now(), delay = now - clockLast$1;
    if (delay > pokeDelay$1) clockSkew$1 -= delay, clockLast$1 = now;
  }

  function nap$1() {
    var t0, t1 = taskHead$1, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead$1 = t2;
      }
    }
    taskTail$1 = t0;
    sleep$1(time);
  }

  function sleep$1(time) {
    if (frame$1) return; // Soonest alarm already set, or will be.
    if (timeout$2) timeout$2 = clearTimeout(timeout$2);
    var delay = time - clockNow$1; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
      if (time < Infinity) timeout$2 = setTimeout(wake$1, time - clock$1.now() - clockSkew$1);
      if (interval$1) interval$1 = clearInterval(interval$1);
    } else {
      if (!interval$1) clockLast$1 = clock$1.now(), interval$1 = setInterval(poke$1, pokeDelay$1);
      frame$1 = 1, setFrame$1(wake$1);
    }
  }

  var MAX_DIMENSIONS = 3;

  function x(d) {
    return d.x;
  }

  function y(d) {
    return d.y;
  }

  function z(d) {
    return d.z;
  }

  var initialRadius = 10,
      initialAngleRoll = Math.PI * (3 - Math.sqrt(5)), // Golden ratio angle
      initialAngleYaw = Math.PI * 20 / (9 + Math.sqrt(221)); // Markov irrational number

  function forceSimulation(nodes, numDimensions) {
    numDimensions = numDimensions || 2;

    var nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(numDimensions))),
        simulation,
        alpha = 1,
        alphaMin = 0.001,
        alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
        alphaTarget = 0,
        velocityDecay = 0.6,
        forces = new Map(),
        stepper = timer$1(step),
        event = dispatch$1("tick", "end");

    if (nodes == null) nodes = [];

    function step() {
      tick();
      event.call("tick", simulation);
      if (alpha < alphaMin) {
        stepper.stop();
        event.call("end", simulation);
      }
    }

    function tick(iterations) {
      var i, n = nodes.length, node;

      if (iterations === undefined) iterations = 1;

      for (var k = 0; k < iterations; ++k) {
        alpha += (alphaTarget - alpha) * alphaDecay;

        forces.forEach(function (force) {
          force(alpha);
        });

        for (i = 0; i < n; ++i) {
          node = nodes[i];
          if (node.fx == null) node.x += node.vx *= velocityDecay;
          else node.x = node.fx, node.vx = 0;
          if (nDim > 1) {
            if (node.fy == null) node.y += node.vy *= velocityDecay;
            else node.y = node.fy, node.vy = 0;
          }
          if (nDim > 2) {
            if (node.fz == null) node.z += node.vz *= velocityDecay;
            else node.z = node.fz, node.vz = 0;
          }
        }
      }

      return simulation;
    }

    function initializeNodes() {
      for (var i = 0, n = nodes.length, node; i < n; ++i) {
        node = nodes[i], node.index = i;
        if (node.fx != null) node.x = node.fx;
        if (node.fy != null) node.y = node.fy;
        if (node.fz != null) node.z = node.fz;
        if (isNaN(node.x) || (nDim > 1 && isNaN(node.y)) || (nDim > 2 && isNaN(node.z))) {
          var radius = initialRadius * (nDim > 2 ? Math.cbrt(i) : (nDim > 1 ? Math.sqrt(i) : i)),
            rollAngle = i * initialAngleRoll,
            yawAngle = i * initialAngleYaw;

          if (nDim === 1) {
            node.x = radius;
          } else if (nDim === 2) {
            node.x = radius * Math.cos(rollAngle);
            node.y = radius * Math.sin(rollAngle);
          } else { // 3 dimensions: use spherical distribution along 2 irrational number angles
            node.x = radius * Math.sin(rollAngle) * Math.cos(yawAngle);
            node.y = radius * Math.cos(rollAngle);
            node.z = radius * Math.sin(rollAngle) * Math.sin(yawAngle);
          }
        }
        if (isNaN(node.vx) || (nDim > 1 && isNaN(node.vy)) || (nDim > 2 && isNaN(node.vz))) {
          node.vx = 0;
          if (nDim > 1) { node.vy = 0; }
          if (nDim > 2) { node.vz = 0; }
        }
      }
    }

    function initializeForce(force) {
      if (force.initialize) force.initialize(nodes, nDim);
      return force;
    }

    initializeNodes();

    return simulation = {
      tick: tick,

      restart: function() {
        return stepper.restart(step), simulation;
      },

      stop: function() {
        return stepper.stop(), simulation;
      },

      numDimensions: function(_) {
        return arguments.length
            ? (nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(_))), forces.forEach(initializeForce), simulation)
            : nDim;
      },

      nodes: function(_) {
        return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
      },

      alpha: function(_) {
        return arguments.length ? (alpha = +_, simulation) : alpha;
      },

      alphaMin: function(_) {
        return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
      },

      alphaDecay: function(_) {
        return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
      },

      alphaTarget: function(_) {
        return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
      },

      velocityDecay: function(_) {
        return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
      },

      force: function(name, _) {
        return arguments.length > 1 ? ((_ == null ? forces.delete(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
      },

      find: function() {
        var args = Array.prototype.slice.call(arguments);
        var x = args.shift() || 0,
            y = (nDim > 1 ? args.shift() : null) || 0,
            z = (nDim > 2 ? args.shift() : null) || 0,
            radius = args.shift() || Infinity;

        var i = 0,
            n = nodes.length,
            dx,
            dy,
            dz,
            d2,
            node,
            closest;

        radius *= radius;

        for (i = 0; i < n; ++i) {
          node = nodes[i];
          dx = x - node.x;
          dy = y - (node.y || 0);
          dz = z - (node.z ||0);
          d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < radius) closest = node, radius = d2;
        }

        return closest;
      },

      on: function(name, _) {
        return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
      }
    };
  }

  /* XXX repulsive force
     - distanceMin is interesting (e.g. set to 1000000). pushes unrelated stuff far, but it ends up clumping
     - distanecMax -- if I lower it, it ends up clumping + some circular artifacts (although they might be intesting too!)
     - strenght: setting to something like -400 effectively has the same effect as default zoom? they are just a bit more spread apart
       ok, -200 is good enough
       TODO guess could add a force multiplier here for specific nodes? like social for example?
  */ 
  function forceManyBody() {
    var nodes,
        nDim,
        node,
        alpha,
        strength = constant$4(-200),
        strengths,
        distanceMin2 = 1,
        distanceMax2 = Infinity,
        theta2 = 0.81;

    function force(_) {
      var i,
          n = nodes.length,
          tree =
              (nDim === 1 ? binarytree(nodes, x)
              :(nDim === 2 ? quadtree(nodes, x, y)
              :(nDim === 3 ? octree(nodes, x, y, z)
              :null
          ))).visitAfter(accumulate);

      for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
    }

    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length, node;
      strengths = new Array(n);
      for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
    }

    function accumulate(treeNode) {
      var strength = 0, q, c, weight = 0, x, y, z, i;
      var numChildren = treeNode.length;

      // For internal nodes, accumulate forces from children.
      if (numChildren) {
        for (x = y = z = i = 0; i < numChildren; ++i) {
          if ((q = treeNode[i]) && (c = Math.abs(q.value))) {
            strength += q.value, weight += c, x += c * (q.x || 0), y += c * (q.y || 0), z += c * (q.z || 0);
          }
        }
        strength *= Math.sqrt(4 / numChildren); // scale accumulated strength according to number of dimensions

        treeNode.x = x / weight;
        if (nDim > 1) { treeNode.y = y / weight; }
        if (nDim > 2) { treeNode.z = z / weight; }
      }

      // For leaf nodes, accumulate forces from coincident nodes.
      else {
        q = treeNode;
        q.x = q.data.x;
        if (nDim > 1) { q.y = q.data.y; }
        if (nDim > 2) { q.z = q.data.z; }
        do strength += strengths[q.data.index];
        while (q = q.next);
      }

      treeNode.value = strength;
    }

    function apply(treeNode, x1, arg1, arg2, arg3) {
      if (!treeNode.value) return true;
      var x2 = [arg1, arg2, arg3][nDim-1];

      var x = treeNode.x - node.x,
          y = (nDim > 1 ? treeNode.y - node.y : 0),
          z = (nDim > 2 ? treeNode.z - node.z : 0),
          w = x2 - x1,
          l = x * x + y * y + z * z;

      // Apply the Barnes-Hut approximation if possible.
      // Limit forces for very close nodes; randomize direction if coincident.
      if (w * w / theta2 < l) {
        if (l < distanceMax2) {
          if (x === 0) x = jiggle(), l += x * x;
          if (nDim > 1 && y === 0) y = jiggle(), l += y * y;
          if (nDim > 2 && z === 0) z = jiggle(), l += z * z;
          if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
          node.vx += x * treeNode.value * alpha / l;
          if (nDim > 1) { node.vy += y * treeNode.value * alpha / l; }
          if (nDim > 2) { node.vz += z * treeNode.value * alpha / l; }
        }
        return true;
      }

      // Otherwise, process points directly.
      else if (treeNode.length || l >= distanceMax2) return;

      // Limit forces for very close nodes; randomize direction if coincident.
      if (treeNode.data !== node || treeNode.next) {
        if (x === 0) x = jiggle(), l += x * x;
        if (nDim > 1 && y === 0) y = jiggle(), l += y * y;
        if (nDim > 2 && z === 0) z = jiggle(), l += z * z;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
      }

      do if (treeNode.data !== node) {
        w = strengths[treeNode.data.index] * alpha / l;
        node.vx += x * w;
        if (nDim > 1) { node.vy += y * w; }
        if (nDim > 2) { node.vz += z * w; }
      } while (treeNode = treeNode.next);
    }

    force.initialize = function(initNodes, numDimensions) {
      nodes = initNodes;
      nDim = numDimensions;
      initialize();
    };

    force.strength = function(_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$4(+_), initialize(), force) : strength;
    };

    force.distanceMin = function(_) {
      return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
    };

    force.distanceMax = function(_) {
      return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
    };

    force.theta = function(_) {
      return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
    };

    return force;
  }

  function forceRadial(radius, x, y, z) {
    var nodes,
        nDim,
        strength = constant$4(0.1),
        strengths,
        radiuses;

    if (typeof radius !== "function") radius = constant$4(+radius);
    if (x == null) x = 0;
    if (y == null) y = 0;
    if (z == null) z = 0;

    function force(alpha) {
      for (var i = 0, n = nodes.length; i < n; ++i) {
        var node = nodes[i],
            dx = node.x - x || 1e-6,
            dy = (node.y || 0) - y || 1e-6,
            dz = (node.z || 0) - z || 1e-6,
            r = Math.sqrt(dx * dx + dy * dy + dz * dz),
            k = (radiuses[i] - r) * strengths[i] * alpha / r;
        node.vx += dx * k;
        if (nDim>1) { node.vy += dy * k; }
        if (nDim>2) { node.vz += dz * k; }
      }
    }

    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length;
      strengths = new Array(n);
      radiuses = new Array(n);
      for (i = 0; i < n; ++i) {
        radiuses[i] = +radius(nodes[i], i, nodes);
        strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
      }
    }

    force.initialize = function(initNodes, numDimensions) {
      nodes = initNodes;
      nDim = numDimensions;
      initialize();
    };

    force.strength = function(_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$4(+_), initialize(), force) : strength;
    };

    force.radius = function(_) {
      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$4(+_), initialize(), force) : radius;
    };

    force.x = function(_) {
      return arguments.length ? (x = +_, force) : x;
    };

    force.y = function(_) {
      return arguments.length ? (y = +_, force) : y;
    };

    force.z = function(_) {
      return arguments.length ? (z = +_, force) : z;
    };

    return force;
  }

  var utils = createCommonjsModule(function (module) {
  (function() {

    // math-inlining.
    var abs = Math.abs,
      cos = Math.cos,
      sin = Math.sin,
      acos = Math.acos,
      atan2 = Math.atan2,
      sqrt = Math.sqrt,
      pow = Math.pow,
      // cube root function yielding real roots
      crt = function(v) {
        return v < 0 ? -pow(-v, 1 / 3) : pow(v, 1 / 3);
      },
      // trig constants
      pi = Math.PI,
      tau = 2 * pi,
      quart = pi / 2,
      // float precision significant decimal
      epsilon = 0.000001,
      // extremas used in bbox calculation and similar algorithms
      nMax = Number.MAX_SAFE_INTEGER || 9007199254740991,
      nMin = Number.MIN_SAFE_INTEGER || -9007199254740991,
      // a zero coordinate, which is surprisingly useful
      ZERO = { x: 0, y: 0, z: 0 };

    // Bezier utility functions
    var utils = {
      // Legendre-Gauss abscissae with n=24 (x_i values, defined at i=n as the roots of the nth order Legendre polynomial Pn(x))
      Tvalues: [
        -0.0640568928626056260850430826247450385909,
        0.0640568928626056260850430826247450385909,
        -0.1911188674736163091586398207570696318404,
        0.1911188674736163091586398207570696318404,
        -0.3150426796961633743867932913198102407864,
        0.3150426796961633743867932913198102407864,
        -0.4337935076260451384870842319133497124524,
        0.4337935076260451384870842319133497124524,
        -0.5454214713888395356583756172183723700107,
        0.5454214713888395356583756172183723700107,
        -0.6480936519369755692524957869107476266696,
        0.6480936519369755692524957869107476266696,
        -0.7401241915785543642438281030999784255232,
        0.7401241915785543642438281030999784255232,
        -0.8200019859739029219539498726697452080761,
        0.8200019859739029219539498726697452080761,
        -0.8864155270044010342131543419821967550873,
        0.8864155270044010342131543419821967550873,
        -0.9382745520027327585236490017087214496548,
        0.9382745520027327585236490017087214496548,
        -0.9747285559713094981983919930081690617411,
        0.9747285559713094981983919930081690617411,
        -0.9951872199970213601799974097007368118745,
        0.9951872199970213601799974097007368118745
      ],

      // Legendre-Gauss weights with n=24 (w_i values, defined by a function linked to in the Bezier primer article)
      Cvalues: [
        0.1279381953467521569740561652246953718517,
        0.1279381953467521569740561652246953718517,
        0.1258374563468282961213753825111836887264,
        0.1258374563468282961213753825111836887264,
        0.121670472927803391204463153476262425607,
        0.121670472927803391204463153476262425607,
        0.1155056680537256013533444839067835598622,
        0.1155056680537256013533444839067835598622,
        0.1074442701159656347825773424466062227946,
        0.1074442701159656347825773424466062227946,
        0.0976186521041138882698806644642471544279,
        0.0976186521041138882698806644642471544279,
        0.086190161531953275917185202983742667185,
        0.086190161531953275917185202983742667185,
        0.0733464814110803057340336152531165181193,
        0.0733464814110803057340336152531165181193,
        0.0592985849154367807463677585001085845412,
        0.0592985849154367807463677585001085845412,
        0.0442774388174198061686027482113382288593,
        0.0442774388174198061686027482113382288593,
        0.0285313886289336631813078159518782864491,
        0.0285313886289336631813078159518782864491,
        0.0123412297999871995468056670700372915759,
        0.0123412297999871995468056670700372915759
      ],

      arcfn: function(t, derivativeFn) {
        var d = derivativeFn(t);
        var l = d.x * d.x + d.y * d.y;
        if (typeof d.z !== "undefined") {
          l += d.z * d.z;
        }
        return sqrt(l);
      },

      compute: function(t, points, _3d) {
        // shortcuts
        if (t === 0) {
          return points[0];
        }

        var order = points.length-1;

        if (t === 1) {
          return points[order];
        }

        var p = points;
        var mt = 1 - t;

        // constant?
        if (order === 0) {
          return points[0];
        }

        // linear?
        if (order === 1) {
          ret = {
            x: mt * p[0].x + t * p[1].x,
            y: mt * p[0].y + t * p[1].y
          };
          if (_3d) {
            ret.z = mt * p[0].z + t * p[1].z;
          }
          return ret;
        }

        // quadratic/cubic curve?
        if (order < 4) {
          var mt2 = mt * mt,
            t2 = t * t,
            a,
            b,
            c,
            d = 0;
          if (order === 2) {
            p = [p[0], p[1], p[2], ZERO];
            a = mt2;
            b = mt * t * 2;
            c = t2;
          } else if (order === 3) {
            a = mt2 * mt;
            b = mt2 * t * 3;
            c = mt * t2 * 3;
            d = t * t2;
          }
          var ret = {
            x: a * p[0].x + b * p[1].x + c * p[2].x + d * p[3].x,
            y: a * p[0].y + b * p[1].y + c * p[2].y + d * p[3].y
          };
          if (_3d) {
            ret.z = a * p[0].z + b * p[1].z + c * p[2].z + d * p[3].z;
          }
          return ret;
        }

        // higher order curves: use de Casteljau's computation
        var dCpts = JSON.parse(JSON.stringify(points));
        while (dCpts.length > 1) {
          for (var i = 0; i < dCpts.length - 1; i++) {
            dCpts[i] = {
              x: dCpts[i].x + (dCpts[i + 1].x - dCpts[i].x) * t,
              y: dCpts[i].y + (dCpts[i + 1].y - dCpts[i].y) * t
            };
            if (typeof dCpts[i].z !== "undefined") {
              dCpts[i] = dCpts[i].z + (dCpts[i + 1].z - dCpts[i].z) * t;
            }
          }
          dCpts.splice(dCpts.length - 1, 1);
        }
        return dCpts[0];
      },

      computeWithRatios: function (t, points, ratios, _3d) {
        var mt = 1 - t, r = ratios, p = points, d;
        var f1 = r[0], f2 = r[1], f3 = r[2], f4 = r[3];

        // spec for linear
        f1 *= mt;
        f2 *= t;

        if (p.length === 2) {
          d = f1 + f2;
          return {
            x: (f1 * p[0].x + f2 * p[1].x)/d,
            y: (f1 * p[0].y + f2 * p[1].y)/d,
            z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z)/d
          };
        }

        // upgrade to quadratic
        f1 *= mt;
        f2 *= 2 * mt;
        f3 *= t * t;

        if (p.length === 3) {
          d = f1 + f2 + f3;
          return {
            x: (f1 * p[0].x + f2 * p[1].x + f3 * p[2].x)/d,
            y: (f1 * p[0].y + f2 * p[1].y + f3 * p[2].y)/d,
            z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z + f3 * p[2].z)/d
          };
        }

        // upgrade to cubic
        f1 *= mt;
        f2 *= 1.5 * mt;
        f3 *= 3 * mt;
        f4 *= t * t * t;

        if (p.length === 4) {
          d = f1 + f2 + f3 + f4;
          return {
            x: (f1 * p[0].x + f2 * p[1].x + f3 * p[2].x + f4 * p[3].x)/d,
            y: (f1 * p[0].y + f2 * p[1].y + f3 * p[2].y + f4 * p[3].y)/d,
            z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z + f3 * p[2].z + f4 * p[3].z)/d
          };
        }
      },

      derive: function (points, _3d) {
        var dpoints = [];
        for (var p = points, d = p.length, c = d - 1; d > 1; d--, c--) {
          var list = [];
          for (var j = 0, dpt; j < c; j++) {
            dpt = {
              x: c * (p[j + 1].x - p[j].x),
              y: c * (p[j + 1].y - p[j].y)
            };
            if (_3d) {
              dpt.z = c * (p[j + 1].z - p[j].z);
            }
            list.push(dpt);
          }
          dpoints.push(list);
          p = list;
        }
        return dpoints;
      },

      between: function(v, m, M) {
        return (
          (m <= v && v <= M) ||
          utils.approximately(v, m) ||
          utils.approximately(v, M)
        );
      },

      approximately: function(a, b, precision) {
        return abs(a - b) <= (precision || epsilon);
      },

      length: function(derivativeFn) {
        var z = 0.5,
          sum = 0,
          len = utils.Tvalues.length,
          i,
          t;
        for (i = 0; i < len; i++) {
          t = z * utils.Tvalues[i] + z;
          sum += utils.Cvalues[i] * utils.arcfn(t, derivativeFn);
        }
        return z * sum;
      },

      map: function(v, ds, de, ts, te) {
        var d1 = de - ds,
          d2 = te - ts,
          v2 = v - ds,
          r = v2 / d1;
        return ts + d2 * r;
      },

      lerp: function(r, v1, v2) {
        var ret = {
          x: v1.x + r * (v2.x - v1.x),
          y: v1.y + r * (v2.y - v1.y)
        };
        if (!!v1.z && !!v2.z) {
          ret.z = v1.z + r * (v2.z - v1.z);
        }
        return ret;
      },

      pointToString: function(p) {
        var s = p.x + "/" + p.y;
        if (typeof p.z !== "undefined") {
          s += "/" + p.z;
        }
        return s;
      },

      pointsToString: function(points) {
        return "[" + points.map(utils.pointToString).join(", ") + "]";
      },

      copy: function(obj) {
        return JSON.parse(JSON.stringify(obj));
      },

      angle: function(o, v1, v2) {
        var dx1 = v1.x - o.x,
          dy1 = v1.y - o.y,
          dx2 = v2.x - o.x,
          dy2 = v2.y - o.y,
          cross = dx1 * dy2 - dy1 * dx2,
          dot = dx1 * dx2 + dy1 * dy2;
        return atan2(cross, dot);
      },

      // round as string, to avoid rounding errors
      round: function(v, d) {
        var s = "" + v;
        var pos = s.indexOf(".");
        return parseFloat(s.substring(0, pos + 1 + d));
      },

      dist: function(p1, p2) {
        var dx = p1.x - p2.x,
          dy = p1.y - p2.y;
        return sqrt(dx * dx + dy * dy);
      },

      closest: function(LUT, point) {
        var mdist = pow(2, 63),
          mpos,
          d;
        LUT.forEach(function(p, idx) {
          d = utils.dist(point, p);
          if (d < mdist) {
            mdist = d;
            mpos = idx;
          }
        });
        return { mdist: mdist, mpos: mpos };
      },

      abcratio: function(t, n) {
        // see ratio(t) note on http://pomax.github.io/bezierinfo/#abc
        if (n !== 2 && n !== 3) {
          return false;
        }
        if (typeof t === "undefined") {
          t = 0.5;
        } else if (t === 0 || t === 1) {
          return t;
        }
        var bottom = pow(t, n) + pow(1 - t, n),
          top = bottom - 1;
        return abs(top / bottom);
      },

      projectionratio: function(t, n) {
        // see u(t) note on http://pomax.github.io/bezierinfo/#abc
        if (n !== 2 && n !== 3) {
          return false;
        }
        if (typeof t === "undefined") {
          t = 0.5;
        } else if (t === 0 || t === 1) {
          return t;
        }
        var top = pow(1 - t, n),
          bottom = pow(t, n) + top;
        return top / bottom;
      },

      lli8: function(x1, y1, x2, y2, x3, y3, x4, y4) {
        var nx =
            (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
          ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
          d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (d == 0) {
          return false;
        }
        return { x: nx / d, y: ny / d };
      },

      lli4: function(p1, p2, p3, p4) {
        var x1 = p1.x,
          y1 = p1.y,
          x2 = p2.x,
          y2 = p2.y,
          x3 = p3.x,
          y3 = p3.y,
          x4 = p4.x,
          y4 = p4.y;
        return utils.lli8(x1, y1, x2, y2, x3, y3, x4, y4);
      },

      lli: function(v1, v2) {
        return utils.lli4(v1, v1.c, v2, v2.c);
      },

      makeline: function(p1, p2) {
        var Bezier = bezier;
        var x1 = p1.x,
          y1 = p1.y,
          x2 = p2.x,
          y2 = p2.y,
          dx = (x2 - x1) / 3,
          dy = (y2 - y1) / 3;
        return new Bezier(
          x1,
          y1,
          x1 + dx,
          y1 + dy,
          x1 + 2 * dx,
          y1 + 2 * dy,
          x2,
          y2
        );
      },

      findbbox: function(sections) {
        var mx = nMax,
          my = nMax,
          MX = nMin,
          MY = nMin;
        sections.forEach(function(s) {
          var bbox = s.bbox();
          if (mx > bbox.x.min) mx = bbox.x.min;
          if (my > bbox.y.min) my = bbox.y.min;
          if (MX < bbox.x.max) MX = bbox.x.max;
          if (MY < bbox.y.max) MY = bbox.y.max;
        });
        return {
          x: { min: mx, mid: (mx + MX) / 2, max: MX, size: MX - mx },
          y: { min: my, mid: (my + MY) / 2, max: MY, size: MY - my }
        };
      },

      shapeintersections: function(
        s1,
        bbox1,
        s2,
        bbox2,
        curveIntersectionThreshold
      ) {
        if (!utils.bboxoverlap(bbox1, bbox2)) return [];
        var intersections = [];
        var a1 = [s1.startcap, s1.forward, s1.back, s1.endcap];
        var a2 = [s2.startcap, s2.forward, s2.back, s2.endcap];
        a1.forEach(function(l1) {
          if (l1.virtual) return;
          a2.forEach(function(l2) {
            if (l2.virtual) return;
            var iss = l1.intersects(l2, curveIntersectionThreshold);
            if (iss.length > 0) {
              iss.c1 = l1;
              iss.c2 = l2;
              iss.s1 = s1;
              iss.s2 = s2;
              intersections.push(iss);
            }
          });
        });
        return intersections;
      },

      makeshape: function(forward, back, curveIntersectionThreshold) {
        var bpl = back.points.length;
        var fpl = forward.points.length;
        var start = utils.makeline(back.points[bpl - 1], forward.points[0]);
        var end = utils.makeline(forward.points[fpl - 1], back.points[0]);
        var shape = {
          startcap: start,
          forward: forward,
          back: back,
          endcap: end,
          bbox: utils.findbbox([start, forward, back, end])
        };
        var self = utils;
        shape.intersections = function(s2) {
          return self.shapeintersections(
            shape,
            shape.bbox,
            s2,
            s2.bbox,
            curveIntersectionThreshold
          );
        };
        return shape;
      },

      getminmax: function(curve, d, list) {
        if (!list) return { min: 0, max: 0 };
        var min = nMax,
          max = nMin,
          t,
          c;
        if (list.indexOf(0) === -1) {
          list = [0].concat(list);
        }
        if (list.indexOf(1) === -1) {
          list.push(1);
        }
        for (var i = 0, len = list.length; i < len; i++) {
          t = list[i];
          c = curve.get(t);
          if (c[d] < min) {
            min = c[d];
          }
          if (c[d] > max) {
            max = c[d];
          }
        }
        return { min: min, mid: (min + max) / 2, max: max, size: max - min };
      },

      align: function(points, line) {
        var tx = line.p1.x,
          ty = line.p1.y,
          a = -atan2(line.p2.y - ty, line.p2.x - tx),
          d = function(v) {
            return {
              x: (v.x - tx) * cos(a) - (v.y - ty) * sin(a),
              y: (v.x - tx) * sin(a) + (v.y - ty) * cos(a)
            };
          };
        return points.map(d);
      },

      roots: function(points, line) {
        line = line || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };
        var order = points.length - 1;
        var p = utils.align(points, line);
        var reduce = function(t) {
          return 0 <= t && t <= 1;
        };

        if (order === 2) {
          var a = p[0].y,
            b = p[1].y,
            c = p[2].y,
            d = a - 2 * b + c;
          if (d !== 0) {
            var m1 = -sqrt(b * b - a * c),
              m2 = -a + b,
              v1 = -(m1 + m2) / d,
              v2 = -(-m1 + m2) / d;
            return [v1, v2].filter(reduce);
          } else if (b !== c && d === 0) {
            return [(2*b - c)/(2*b - 2*c)].filter(reduce);
          }
          return [];
        }

        // see http://www.trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm
        var pa = p[0].y,
          pb = p[1].y,
          pc = p[2].y,
          pd = p[3].y,
          d = -pa + 3 * pb - 3 * pc + pd,
          a = 3 * pa - 6 * pb + 3 * pc,
          b = -3 * pa + 3 * pb,
          c = pa;

        if (utils.approximately(d, 0)) {
          // this is not a cubic curve.
          if (utils.approximately(a, 0)) {
            // in fact, this is not a quadratic curve either.
            if (utils.approximately(b, 0)) {
              // in fact in fact, there are no solutions.
              return [];
            }
            // linear solution:
            return [-c / b].filter(reduce);
          }
          // quadratic solution:
          var q = sqrt(b * b - 4 * a * c),
            a2 = 2 * a;
          return [(q - b) / a2, (-b - q) / a2].filter(reduce);
        }

        // at this point, we know we need a cubic solution:

        a /= d;
        b /= d;
        c /= d;

        var p = (3 * b - a * a) / 3,
          p3 = p / 3,
          q = (2 * a * a * a - 9 * a * b + 27 * c) / 27,
          q2 = q / 2,
          discriminant = q2 * q2 + p3 * p3 * p3,
          u1,
          v1,
          x1,
          x2,
          x3;
        if (discriminant < 0) {
          var mp3 = -p / 3,
            mp33 = mp3 * mp3 * mp3,
            r = sqrt(mp33),
            t = -q / (2 * r),
            cosphi = t < -1 ? -1 : t > 1 ? 1 : t,
            phi = acos(cosphi),
            crtr = crt(r),
            t1 = 2 * crtr;
          x1 = t1 * cos(phi / 3) - a / 3;
          x2 = t1 * cos((phi + tau) / 3) - a / 3;
          x3 = t1 * cos((phi + 2 * tau) / 3) - a / 3;
          return [x1, x2, x3].filter(reduce);
        } else if (discriminant === 0) {
          u1 = q2 < 0 ? crt(-q2) : -crt(q2);
          x1 = 2 * u1 - a / 3;
          x2 = -u1 - a / 3;
          return [x1, x2].filter(reduce);
        } else {
          var sd = sqrt(discriminant);
          u1 = crt(-q2 + sd);
          v1 = crt(q2 + sd);
          return [u1 - v1 - a / 3].filter(reduce);
        }
      },

      droots: function(p) {
        // quadratic roots are easy
        if (p.length === 3) {
          var a = p[0],
            b = p[1],
            c = p[2],
            d = a - 2 * b + c;
          if (d !== 0) {
            var m1 = -sqrt(b * b - a * c),
              m2 = -a + b,
              v1 = -(m1 + m2) / d,
              v2 = -(-m1 + m2) / d;
            return [v1, v2];
          } else if (b !== c && d === 0) {
            return [(2 * b - c) / (2 * (b - c))];
          }
          return [];
        }

        // linear roots are even easier
        if (p.length === 2) {
          var a = p[0],
            b = p[1];
          if (a !== b) {
            return [a / (a - b)];
          }
          return [];
        }
      },

      curvature: function(t, points, _3d, kOnly) {
        var dpoints = utils.derive(points);
        var d1 = dpoints[0];
        var d2 = dpoints[1];
        var num, dnm, adk, dk, k=0, r=0;

        //
        // We're using the following formula for curvature:
        //
        //              x'y" - y'x"
        //   k(t) = ------------------
        //           (x'² + y'²)^(3/2)
        //
        // from https://en.wikipedia.org/wiki/Radius_of_curvature#Definition
        //
        // With it corresponding 3D counterpart:
        //
        //          sqrt( (y'z" - y"z')² + (z'x" - z"x')² + (x'y" - x"y')²)
        //   k(t) = -------------------------------------------------------
        //                     (x'² + y'² + z'²)^(3/2)
        //

        var d = utils.compute(t, d1);
        var dd = utils.compute(t, d2);
        var qdsum = d.x*d.x + d.y*d.y;
        if (_3d) {
          num = sqrt(
            pow(d.y*dd.z - dd.y*d.z, 2) +
            pow(d.z*dd.x - dd.z*d.x, 2) +
            pow(d.x*dd.y - dd.x*d.y, 2)
          );
          dnm = pow(qdsum + d.z*d.z, 3/2);
        } else {
          num = d.x*dd.y - d.y*dd.x;
          dnm = pow(qdsum, 3/2);
        }

        if (num === 0 || dnm === 0) {
          return { k:0, r:0 };
        }

        k = num/dnm;
        r = dnm/num;

        // We're also computing the derivative of kappa, because
        // there is value in knowing the rate of change for the
        // curvature along the curve. And we're just going to
        // ballpark it based on an epsilon.
        if (!kOnly) {
          // compute k'(t) based on the interval before, and after it,
          // to at least try to not introduce forward/backward pass bias.
          var pk = utils.curvature(t-0.001, points, _3d, true).k;
          var nk = utils.curvature(t+0.001, points, _3d, true).k;
          dk = ((nk-k) + (k-pk))/2;
          adk = (abs(nk-k) + abs(k-pk))/2;
        }

        return { k: k, r: r, dk: dk, adk:adk, };
      },

      inflections: function(points) {
        if (points.length < 4) return [];

        // FIXME: TODO: add in inflection abstraction for quartic+ curves?

        var p = utils.align(points, { p1: points[0], p2: points.slice(-1)[0] }),
          a = p[2].x * p[1].y,
          b = p[3].x * p[1].y,
          c = p[1].x * p[2].y,
          d = p[3].x * p[2].y,
          v1 = 18 * (-3 * a + 2 * b + 3 * c - d),
          v2 = 18 * (3 * a - b - 3 * c),
          v3 = 18 * (c - a);

        if (utils.approximately(v1, 0)) {
          if (!utils.approximately(v2, 0)) {
            var t = -v3 / v2;
            if (0 <= t && t <= 1) return [t];
          }
          return [];
        }

        var trm = v2 * v2 - 4 * v1 * v3,
          sq = Math.sqrt(trm),
          d = 2 * v1;

        if (utils.approximately(d, 0)) return [];

        return [(sq - v2) / d, -(v2 + sq) / d].filter(function(r) {
          return 0 <= r && r <= 1;
        });
      },

      bboxoverlap: function(b1, b2) {
        var dims = ["x", "y"],
          len = dims.length,
          i,
          dim,
          l,
          t,
          d;
        for (i = 0; i < len; i++) {
          dim = dims[i];
          l = b1[dim].mid;
          t = b2[dim].mid;
          d = (b1[dim].size + b2[dim].size) / 2;
          if (abs(l - t) >= d) return false;
        }
        return true;
      },

      expandbox: function(bbox, _bbox) {
        if (_bbox.x.min < bbox.x.min) {
          bbox.x.min = _bbox.x.min;
        }
        if (_bbox.y.min < bbox.y.min) {
          bbox.y.min = _bbox.y.min;
        }
        if (_bbox.z && _bbox.z.min < bbox.z.min) {
          bbox.z.min = _bbox.z.min;
        }
        if (_bbox.x.max > bbox.x.max) {
          bbox.x.max = _bbox.x.max;
        }
        if (_bbox.y.max > bbox.y.max) {
          bbox.y.max = _bbox.y.max;
        }
        if (_bbox.z && _bbox.z.max > bbox.z.max) {
          bbox.z.max = _bbox.z.max;
        }
        bbox.x.mid = (bbox.x.min + bbox.x.max) / 2;
        bbox.y.mid = (bbox.y.min + bbox.y.max) / 2;
        if (bbox.z) {
          bbox.z.mid = (bbox.z.min + bbox.z.max) / 2;
        }
        bbox.x.size = bbox.x.max - bbox.x.min;
        bbox.y.size = bbox.y.max - bbox.y.min;
        if (bbox.z) {
          bbox.z.size = bbox.z.max - bbox.z.min;
        }
      },

      pairiteration: function(c1, c2, curveIntersectionThreshold) {
        var c1b = c1.bbox(),
          c2b = c2.bbox(),
          r = 100000,
          threshold = curveIntersectionThreshold || 0.5;
        if (
          c1b.x.size + c1b.y.size < threshold &&
          c2b.x.size + c2b.y.size < threshold
        ) {
          return [
            ((r * (c1._t1 + c1._t2) / 2) | 0) / r +
              "/" +
              ((r * (c2._t1 + c2._t2) / 2) | 0) / r
          ];
        }
        var cc1 = c1.split(0.5),
          cc2 = c2.split(0.5),
          pairs = [
            { left: cc1.left, right: cc2.left },
            { left: cc1.left, right: cc2.right },
            { left: cc1.right, right: cc2.right },
            { left: cc1.right, right: cc2.left }
          ];
        pairs = pairs.filter(function(pair) {
          return utils.bboxoverlap(pair.left.bbox(), pair.right.bbox());
        });
        var results = [];
        if (pairs.length === 0) return results;
        pairs.forEach(function(pair) {
          results = results.concat(
            utils.pairiteration(pair.left, pair.right, threshold)
          );
        });
        results = results.filter(function(v, i) {
          return results.indexOf(v) === i;
        });
        return results;
      },

      getccenter: function(p1, p2, p3) {
        var dx1 = p2.x - p1.x,
          dy1 = p2.y - p1.y,
          dx2 = p3.x - p2.x,
          dy2 = p3.y - p2.y;
        var dx1p = dx1 * cos(quart) - dy1 * sin(quart),
          dy1p = dx1 * sin(quart) + dy1 * cos(quart),
          dx2p = dx2 * cos(quart) - dy2 * sin(quart),
          dy2p = dx2 * sin(quart) + dy2 * cos(quart);
        // chord midpoints
        var mx1 = (p1.x + p2.x) / 2,
          my1 = (p1.y + p2.y) / 2,
          mx2 = (p2.x + p3.x) / 2,
          my2 = (p2.y + p3.y) / 2;
        // midpoint offsets
        var mx1n = mx1 + dx1p,
          my1n = my1 + dy1p,
          mx2n = mx2 + dx2p,
          my2n = my2 + dy2p;
        // intersection of these lines:
        var arc = utils.lli8(mx1, my1, mx1n, my1n, mx2, my2, mx2n, my2n),
          r = utils.dist(arc, p1),
          // arc start/end values, over mid point:
          s = atan2(p1.y - arc.y, p1.x - arc.x),
          m = atan2(p2.y - arc.y, p2.x - arc.x),
          e = atan2(p3.y - arc.y, p3.x - arc.x),
          _;
        // determine arc direction (cw/ccw correction)
        if (s < e) {
          // if s<m<e, arc(s, e)
          // if m<s<e, arc(e, s + tau)
          // if s<e<m, arc(e, s + tau)
          if (s > m || m > e) {
            s += tau;
          }
          if (s > e) {
            _ = e;
            e = s;
            s = _;
          }
        } else {
          // if e<m<s, arc(e, s)
          // if m<e<s, arc(s, e + tau)
          // if e<s<m, arc(s, e + tau)
          if (e < m && m < s) {
            _ = e;
            e = s;
            s = _;
          } else {
            e += tau;
          }
        }
        // assign and done.
        arc.s = s;
        arc.e = e;
        arc.r = r;
        return arc;
      },

      numberSort: function(a, b) {
        return a - b;
      }
    };

    module.exports = utils;
  })();
  });

  var polyBezier = createCommonjsModule(function (module) {
  (function() {

    var utils$1 = utils;

    /**
     * Poly Bezier
     * @param {[type]} curves [description]
     */
    var PolyBezier = function(curves) {
      this.curves = [];
      this._3d = false;
      if (!!curves) {
        this.curves = curves;
        this._3d = this.curves[0]._3d;
      }
    };

    PolyBezier.prototype = {
      valueOf: function() {
        return this.toString();
      },
      toString: function() {
        return (
          "[" +
          this.curves
            .map(function(curve) {
              return utils$1.pointsToString(curve.points);
            })
            .join(", ") +
          "]"
        );
      },
      addCurve: function(curve) {
        this.curves.push(curve);
        this._3d = this._3d || curve._3d;
      },
      length: function() {
        return this.curves
          .map(function(v) {
            return v.length();
          })
          .reduce(function(a, b) {
            return a + b;
          });
      },
      curve: function(idx) {
        return this.curves[idx];
      },
      bbox: function() {
        var c = this.curves;
        var bbox = c[0].bbox();
        for (var i = 1; i < c.length; i++) {
          utils$1.expandbox(bbox, c[i].bbox());
        }
        return bbox;
      },
      offset: function(d) {
        var offset = [];
        this.curves.forEach(function(v) {
          offset = offset.concat(v.offset(d));
        });
        return new PolyBezier(offset);
      }
    };

    module.exports = PolyBezier;
  })();
  });

  /**
   * Normalise an SVG path to absolute coordinates
   * and full commands, rather than relative coordinates
   * and/or shortcut commands.
   */
  function normalizePath(d) {
    // preprocess "d" so that we have spaces between values
    d = d
      .replace(/,/g, " ") // replace commas with spaces
      .replace(/-/g, " - ") // add spacing around minus signs
      .replace(/-\s+/g, "-") // remove spacing to the right of minus signs.
      .replace(/([a-zA-Z])/g, " $1 ");

    // set up the variables used in this function
    var instructions = d.replace(/([a-zA-Z])\s?/g, "|$1").split("|"),
      instructionLength = instructions.length,
      i,
      instruction,
      op,
      lop,
      args = [],
      alen,
      a,
      sx = 0,
      sy = 0,
      x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      cx2 = 0,
      cy2 = 0,
      normalized = "";

    // we run through the instruction list starting at 1, not 0,
    // because we split up "|M x y ...." so the first element will
    // always be an empty string. By design.
    for (i = 1; i < instructionLength; i++) {
      // which instruction is this?
      instruction = instructions[i];
      op = instruction.substring(0, 1);
      lop = op.toLowerCase();

      // what are the arguments? note that we need to convert
      // all strings into numbers, or + will do silly things.
      args = instruction
        .replace(op, "")
        .trim()
        .split(" ");
      args = args
        .filter(function(v) {
          return v !== "";
        })
        .map(parseFloat);
      alen = args.length;

      // we could use a switch, but elaborate code in a "case" with
      // fallthrough is just horrid to read. So let's use ifthen
      // statements instead.

      // moveto command (plus possible lineto)
      if (lop === "m") {
        normalized += "M ";
        if (op === "m") {
          x += args[0];
          y += args[1];
        } else {
          x = args[0];
          y = args[1];
        }
        // records start position, for dealing
        // with the shape close operator ('Z')
        sx = x;
        sy = y;
        normalized += x + " " + y + " ";
        if (alen > 2) {
          for (a = 0; a < alen; a += 2) {
            if (op === "m") {
              x += args[a];
              y += args[a + 1];
            } else {
              x = args[a];
              y = args[a + 1];
            }
            normalized += ["L",x,y,''].join(" ");
          }
        }
      } else if (lop === "l") {
        // lineto commands
        for (a = 0; a < alen; a += 2) {
          if (op === "l") {
            x += args[a];
            y += args[a + 1];
          } else {
            x = args[a];
            y = args[a + 1];
          }
          normalized += ["L",x,y,''].join(" ");
        }
      } else if (lop === "h") {
        for (a = 0; a < alen; a++) {
          if (op === "h") {
            x += args[a];
          } else {
            x = args[a];
          }
          normalized += ["L",x,y,''].join(" ");
        }
      } else if (lop === "v") {
        for (a = 0; a < alen; a++) {
          if (op === "v") {
            y += args[a];
          } else {
            y = args[a];
          }
          normalized += ["L",x,y,''].join(" ");
        }
      } else if (lop === "q") {
        // quadratic curveto commands
        for (a = 0; a < alen; a += 4) {
          if (op === "q") {
            cx = x + args[a];
            cy = y + args[a + 1];
            x += args[a + 2];
            y += args[a + 3];
          } else {
            cx = args[a];
            cy = args[a + 1];
            x = args[a + 2];
            y = args[a + 3];
          }
          normalized += ["Q",cx,cy,x,y,''].join(" ");
        }
      } else if (lop === "t") {
        for (a = 0; a < alen; a += 2) {
          // reflect previous cx/cy over x/y
          cx = x + (x - cx);
          cy = y + (y - cy);
          // then get real end point
          if (op === "t") {
            x += args[a];
            y += args[a + 1];
          } else {
            x = args[a];
            y = args[a + 1];
          }
          normalized += ["Q",cx,cy,x,y,''].join(" ");
        }
      } else if (lop === "c") {
        // cubic curveto commands
        for (a = 0; a < alen; a += 6) {
          if (op === "c") {
            cx = x + args[a];
            cy = y + args[a + 1];
            cx2 = x + args[a + 2];
            cy2 = y + args[a + 3];
            x += args[a + 4];
            y += args[a + 5];
          } else {
            cx = args[a];
            cy = args[a + 1];
            cx2 = args[a + 2];
            cy2 = args[a + 3];
            x = args[a + 4];
            y = args[a + 5];
          }
          normalized += ["C",cx,cy,cx2,cy2,x,y,''].join(" ");
        }
      } else if (lop === "s") {
        for (a = 0; a < alen; a += 4) {
          // reflect previous cx2/cy2 over x/y
          cx = x + (x - cx2);
          cy = y + (y - cy2);
          // then get real control and end point
          if (op === "s") {
            cx2 = x + args[a];
            cy2 = y + args[a + 1];
            x += args[a + 2];
            y += args[a + 3];
          } else {
            cx2 = args[a];
            cy2 = args[a + 1];
            x = args[a + 2];
            y = args[a + 3];
          }
          normalized +=["C",cx,cy,cx2,cy2,x,y,''].join(" ");
        }
      } else if (lop === "z") {
        normalized += "Z ";
        // not unimportant: path closing changes the current x/y coordinate
        x = sx;
        y = sy;
      }
    }
    return normalized.trim();
  }

  var normaliseSvg = normalizePath;

  var M = { x: false, y: false };

  function makeBezier(Bezier, term, values) {
    if (term === 'Z') return;
    if (term === 'M') {
      M = {x: values[0], y: values[1]};
      return;
    }
    // ES7: new Bezier(M.x, M.y, ...values)
    var cvalues = [false, M.x, M.y].concat(values);
    var PreboundConstructor = Bezier.bind.apply(Bezier, cvalues);
    var curve = new PreboundConstructor();
    var last = values.slice(-2);
    M = { x : last[0], y: last[1] };
    return curve;
  }

  function convertPath(Bezier, d) {
    var terms = normaliseSvg(d).split(" "),
      term,
      matcher = new RegExp("[MLCQZ]", ""),
      segment,
      values,
      segments = [],
      ARGS = { "C": 6, "Q": 4, "L": 2, "M": 2};

    while (terms.length) {
      term = terms.splice(0,1)[0];
      if (matcher.test(term)) {
        values = terms.splice(0, ARGS[term]).map(parseFloat);
        segment = makeBezier(Bezier, term, values);
        if (segment) segments.push(segment);
      }
    }

    return new Bezier.PolyBezier(segments);
  }

  var svgToBeziers = convertPath;

  var bezier = createCommonjsModule(function (module) {
  /**
    A javascript Bezier curve library by Pomax.

    Based on http://pomax.github.io/bezierinfo

    This code is MIT licensed.
  **/
  (function() {

    // math-inlining.
    var abs = Math.abs,
      min = Math.min,
      max = Math.max,
      cos = Math.cos,
      sin = Math.sin,
      acos = Math.acos,
      sqrt = Math.sqrt,
      pi = Math.PI,
      // a zero coordinate, which is surprisingly useful
      ZERO = { x: 0, y: 0, z: 0 };

    // quite needed
    var utils$1 = utils;

    // only used for outlines atm.
    var PolyBezier = polyBezier;

    /**
     * Bezier curve constructor. The constructor argument can be one of three things:
     *
     * 1. array/4 of {x:..., y:..., z:...}, z optional
     * 2. numerical array/8 ordered x1,y1,x2,y2,x3,y3,x4,y4
     * 3. numerical array/12 ordered x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4
     *
     */
    var Bezier = function(coords) {
      var args = coords && coords.forEach ? coords : [].slice.call(arguments);
      var coordlen = false;
      if (typeof args[0] === "object") {
        coordlen = args.length;
        var newargs = [];
        args.forEach(function(point) {
          ["x", "y", "z"].forEach(function(d) {
            if (typeof point[d] !== "undefined") {
              newargs.push(point[d]);
            }
          });
        });
        args = newargs;
      }
      var higher = false;
      var len = args.length;
      if (coordlen) {
        if (coordlen > 4) {
          if (arguments.length !== 1) {
            throw new Error(
              "Only new Bezier(point[]) is accepted for 4th and higher order curves"
            );
          }
          higher = true;
        }
      } else {
        if (len !== 6 && len !== 8 && len !== 9 && len !== 12) {
          if (arguments.length !== 1) {
            throw new Error(
              "Only new Bezier(point[]) is accepted for 4th and higher order curves"
            );
          }
        }
      }
      var _3d =
        (!higher && (len === 9 || len === 12)) ||
        (coords && coords[0] && typeof coords[0].z !== "undefined");
      this._3d = _3d;
      var points = [];
      for (var idx = 0, step = _3d ? 3 : 2; idx < len; idx += step) {
        var point = {
          x: args[idx],
          y: args[idx + 1]
        };
        if (_3d) {
          point.z = args[idx + 2];
        }
        points.push(point);
      }
      this.order = points.length - 1;
      this.points = points;
      var dims = ["x", "y"];
      if (_3d) dims.push("z");
      this.dims = dims;
      this.dimlen = dims.length;

      (function(curve) {
        var order = curve.order;
        var points = curve.points;
        var a = utils$1.align(points, { p1: points[0], p2: points[order] });
        for (var i = 0; i < a.length; i++) {
          if (abs(a[i].y) > 0.0001) {
            curve._linear = false;
            return;
          }
        }
        curve._linear = true;
      })(this);

      this._t1 = 0;
      this._t2 = 1;
      this.update();
    };

    var svgToBeziers$1 = svgToBeziers;

    /**
     * turn an svg <path> d attribute into a sequence of Bezier segments.
     */
    Bezier.SVGtoBeziers = function(d) {
      return svgToBeziers$1(Bezier, d);
    };

    function getABC(n, S, B, E, t) {
      if (typeof t === "undefined") {
        t = 0.5;
      }
      var u = utils$1.projectionratio(t, n),
        um = 1 - u,
        C = {
          x: u * S.x + um * E.x,
          y: u * S.y + um * E.y
        },
        s = utils$1.abcratio(t, n),
        A = {
          x: B.x + (B.x - C.x) / s,
          y: B.y + (B.y - C.y) / s
        };
      return { A: A, B: B, C: C };
    }

    Bezier.quadraticFromPoints = function(p1, p2, p3, t) {
      if (typeof t === "undefined") {
        t = 0.5;
      }
      // shortcuts, although they're really dumb
      if (t === 0) {
        return new Bezier(p2, p2, p3);
      }
      if (t === 1) {
        return new Bezier(p1, p2, p2);
      }
      // real fitting.
      var abc = getABC(2, p1, p2, p3, t);
      return new Bezier(p1, abc.A, p3);
    };

    Bezier.cubicFromPoints = function(S, B, E, t, d1) {
      if (typeof t === "undefined") {
        t = 0.5;
      }
      var abc = getABC(3, S, B, E, t);
      if (typeof d1 === "undefined") {
        d1 = utils$1.dist(B, abc.C);
      }
      var d2 = d1 * (1 - t) / t;

      var selen = utils$1.dist(S, E),
        lx = (E.x - S.x) / selen,
        ly = (E.y - S.y) / selen,
        bx1 = d1 * lx,
        by1 = d1 * ly,
        bx2 = d2 * lx,
        by2 = d2 * ly;
      // derivation of new hull coordinates
      var e1 = { x: B.x - bx1, y: B.y - by1 },
        e2 = { x: B.x + bx2, y: B.y + by2 },
        A = abc.A,
        v1 = { x: A.x + (e1.x - A.x) / (1 - t), y: A.y + (e1.y - A.y) / (1 - t) },
        v2 = { x: A.x + (e2.x - A.x) / t, y: A.y + (e2.y - A.y) / t },
        nc1 = { x: S.x + (v1.x - S.x) / t, y: S.y + (v1.y - S.y) / t },
        nc2 = {
          x: E.x + (v2.x - E.x) / (1 - t),
          y: E.y + (v2.y - E.y) / (1 - t)
        };
      // ...done
      return new Bezier(S, nc1, nc2, E);
    };

    var getUtils = function() {
      return utils$1;
    };

    Bezier.getUtils = getUtils;

    Bezier.PolyBezier = PolyBezier;

    Bezier.prototype = {
      getUtils: getUtils,
      valueOf: function() {
        return this.toString();
      },
      toString: function() {
        return utils$1.pointsToString(this.points);
      },
      toSVG: function(relative) {
        if (this._3d) return false;
        var p = this.points,
          x = p[0].x,
          y = p[0].y,
          s = ["M", x, y, this.order === 2 ? "Q" : "C"];
        for (var i = 1, last = p.length; i < last; i++) {
          s.push(p[i].x);
          s.push(p[i].y);
        }
        return s.join(" ");
      },
      setRatios: function(ratios) {
        if (ratios.length !== this.points.length) {
          throw new Error("incorrect number of ratio values");
        }
        this.ratios = ratios;
        this._lut = []; //  invalidate any precomputed LUT
      },
      verify: function() {
        var print = this.coordDigest();
        if (print !== this._print) {
          this._print = print;
          this.update();
        }
      },
      coordDigest: function() {
        return this.points.map(function(c,pos) {
          return '' + pos + c.x + c.y + (c.z?c.z:0);
        }).join('');
      },
      update: function(newprint) {
        // invalidate any precomputed LUT
        this._lut = [];
        this.dpoints = utils$1.derive(this.points, this._3d);
        this.computedirection();
      },
      computedirection: function() {
        var points = this.points;
        var angle = utils$1.angle(points[0], points[this.order], points[1]);
        this.clockwise = angle > 0;
      },
      length: function() {
        return utils$1.length(this.derivative.bind(this));
      },
      _lut: [],
      getLUT: function(steps) {
        this.verify();
        steps = steps || 100;
        if (this._lut.length === steps) {
          return this._lut;
        }
        this._lut = [];
        // We want a range from 0 to 1 inclusive, so
        // we decrement and then use <= rather than <:
        steps--;
        for (var t = 0; t <= steps; t++) {
          this._lut.push(this.compute(t / steps));
        }
        return this._lut;
      },
      on: function(point, error) {
        error = error || 5;
        var lut = this.getLUT(),
          hits = [],
          c,
          t = 0;
        for (var i = 0; i < lut.length; i++) {
          c = lut[i];
          if (utils$1.dist(c, point) < error) {
            hits.push(c);
            t += i / lut.length;
          }
        }
        if (!hits.length) return false;
        return (t /= hits.length);
      },
      project: function(point) {
        // step 1: coarse check
        var LUT = this.getLUT(),
          l = LUT.length - 1,
          closest = utils$1.closest(LUT, point),
          mdist = closest.mdist,
          mpos = closest.mpos;

        // step 2: fine check
        var ft,
          t,
          p,
          d,
          t1 = (mpos - 1) / l,
          t2 = (mpos + 1) / l,
          step = 0.1 / l;
        mdist += 1;
        for (t = t1, ft = t; t < t2 + step; t += step) {
          p = this.compute(t);
          d = utils$1.dist(point, p);
          if (d < mdist) {
            mdist = d;
            ft = t;
          }
        }
        p = this.compute(ft);
        p.t = ft;
        p.d = mdist;
        return p;
      },
      get: function(t) {
        return this.compute(t);
      },
      point: function(idx) {
        return this.points[idx];
      },
      compute: function(t) {
        if (this.ratios) return utils$1.computeWithRatios(t, this.points, this.ratios, this._3d);
        return utils$1.compute(t, this.points, this._3d, this.ratios);
      },
      raise: function() {
        var p = this.points,
          np = [p[0]],
          i,
          k = p.length,
          pi,
          pim;
        for (var i = 1; i < k; i++) {
          pi = p[i];
          pim = p[i - 1];
          np[i] = {
            x: (k - i) / k * pi.x + i / k * pim.x,
            y: (k - i) / k * pi.y + i / k * pim.y
          };
        }
        np[k] = p[k - 1];
        return new Bezier(np);
      },
      derivative: function(t) {
        var mt = 1 - t,
          a,
          b,
          c = 0,
          p = this.dpoints[0];
        if (this.order === 2) {
          p = [p[0], p[1], ZERO];
          a = mt;
          b = t;
        }
        if (this.order === 3) {
          a = mt * mt;
          b = mt * t * 2;
          c = t * t;
        }
        var ret = {
          x: a * p[0].x + b * p[1].x + c * p[2].x,
          y: a * p[0].y + b * p[1].y + c * p[2].y
        };
        if (this._3d) {
          ret.z = a * p[0].z + b * p[1].z + c * p[2].z;
        }
        return ret;
      },
      curvature: function(t) {
        return utils$1.curvature(t, this.points, this._3d);
      },
      inflections: function() {
        return utils$1.inflections(this.points);
      },
      normal: function(t) {
        return this._3d ? this.__normal3(t) : this.__normal2(t);
      },
      __normal2: function(t) {
        var d = this.derivative(t);
        var q = sqrt(d.x * d.x + d.y * d.y);
        return { x: -d.y / q, y: d.x / q };
      },
      __normal3: function(t) {
        // see http://stackoverflow.com/questions/25453159
        var r1 = this.derivative(t),
          r2 = this.derivative(t + 0.01),
          q1 = sqrt(r1.x * r1.x + r1.y * r1.y + r1.z * r1.z),
          q2 = sqrt(r2.x * r2.x + r2.y * r2.y + r2.z * r2.z);
        r1.x /= q1;
        r1.y /= q1;
        r1.z /= q1;
        r2.x /= q2;
        r2.y /= q2;
        r2.z /= q2;
        // cross product
        var c = {
          x: r2.y * r1.z - r2.z * r1.y,
          y: r2.z * r1.x - r2.x * r1.z,
          z: r2.x * r1.y - r2.y * r1.x
        };
        var m = sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
        c.x /= m;
        c.y /= m;
        c.z /= m;
        // rotation matrix
        var R = [
          c.x * c.x,
          c.x * c.y - c.z,
          c.x * c.z + c.y,
          c.x * c.y + c.z,
          c.y * c.y,
          c.y * c.z - c.x,
          c.x * c.z - c.y,
          c.y * c.z + c.x,
          c.z * c.z
        ];
        // normal vector:
        var n = {
          x: R[0] * r1.x + R[1] * r1.y + R[2] * r1.z,
          y: R[3] * r1.x + R[4] * r1.y + R[5] * r1.z,
          z: R[6] * r1.x + R[7] * r1.y + R[8] * r1.z
        };
        return n;
      },
      hull: function(t) {
        var p = this.points,
          _p = [],
          pt,
          q = [],
          idx = 0,
          i = 0,
          l = 0;
        q[idx++] = p[0];
        q[idx++] = p[1];
        q[idx++] = p[2];
        if (this.order === 3) {
          q[idx++] = p[3];
        }
        // we lerp between all points at each iteration, until we have 1 point left.
        while (p.length > 1) {
          _p = [];
          for (i = 0, l = p.length - 1; i < l; i++) {
            pt = utils$1.lerp(t, p[i], p[i + 1]);
            q[idx++] = pt;
            _p.push(pt);
          }
          p = _p;
        }
        return q;
      },
      split: function(t1, t2) {
        // shortcuts
        if (t1 === 0 && !!t2) {
          return this.split(t2).left;
        }
        if (t2 === 1) {
          return this.split(t1).right;
        }

        // no shortcut: use "de Casteljau" iteration.
        var q = this.hull(t1);
        var result = {
          left:
            this.order === 2
              ? new Bezier([q[0], q[3], q[5]])
              : new Bezier([q[0], q[4], q[7], q[9]]),
          right:
            this.order === 2
              ? new Bezier([q[5], q[4], q[2]])
              : new Bezier([q[9], q[8], q[6], q[3]]),
          span: q
        };

        // make sure we bind _t1/_t2 information!
        result.left._t1 = utils$1.map(0, 0, 1, this._t1, this._t2);
        result.left._t2 = utils$1.map(t1, 0, 1, this._t1, this._t2);
        result.right._t1 = utils$1.map(t1, 0, 1, this._t1, this._t2);
        result.right._t2 = utils$1.map(1, 0, 1, this._t1, this._t2);

        // if we have no t2, we're done
        if (!t2) {
          return result;
        }

        // if we have a t2, split again:
        t2 = utils$1.map(t2, t1, 1, 0, 1);
        var subsplit = result.right.split(t2);
        return subsplit.left;
      },
      extrema: function() {
        var dims = this.dims,
          result = {},
          roots = [],
          p,
          mfn;
        dims.forEach(
          function(dim) {
            mfn = function(v) {
              return v[dim];
            };
            p = this.dpoints[0].map(mfn);
            result[dim] = utils$1.droots(p);
            if (this.order === 3) {
              p = this.dpoints[1].map(mfn);
              result[dim] = result[dim].concat(utils$1.droots(p));
            }
            result[dim] = result[dim].filter(function(t) {
              return t >= 0 && t <= 1;
            });
            roots = roots.concat(result[dim].sort(utils$1.numberSort));
          }.bind(this)
        );
        roots = roots.sort(utils$1.numberSort).filter(function(v, idx) {
          return roots.indexOf(v) === idx;
        });
        result.values = roots;
        return result;
      },
      bbox: function() {
        var extrema = this.extrema(),
          result = {};
        this.dims.forEach(
          function(d) {
            result[d] = utils$1.getminmax(this, d, extrema[d]);
          }.bind(this)
        );
        return result;
      },
      overlaps: function(curve) {
        var lbbox = this.bbox(),
          tbbox = curve.bbox();
        return utils$1.bboxoverlap(lbbox, tbbox);
      },
      offset: function(t, d) {
        if (typeof d !== "undefined") {
          var c = this.get(t);
          var n = this.normal(t);
          var ret = {
            c: c,
            n: n,
            x: c.x + n.x * d,
            y: c.y + n.y * d
          };
          if (this._3d) {
            ret.z = c.z + n.z * d;
          }
          return ret;
        }
        if (this._linear) {
          var nv = this.normal(0);
          var coords = this.points.map(function(p) {
            var ret = {
              x: p.x + t * nv.x,
              y: p.y + t * nv.y
            };
            if (p.z && n.z) {
              ret.z = p.z + t * nv.z;
            }
            return ret;
          });
          return [new Bezier(coords)];
        }
        var reduced = this.reduce();
        return reduced.map(function(s) {
          if (s._linear) {
            return s.offset(t)[0];
          }
          return s.scale(t);
        });
      },
      simple: function() {
        if (this.order === 3) {
          var a1 = utils$1.angle(this.points[0], this.points[3], this.points[1]);
          var a2 = utils$1.angle(this.points[0], this.points[3], this.points[2]);
          if ((a1 > 0 && a2 < 0) || (a1 < 0 && a2 > 0)) return false;
        }
        var n1 = this.normal(0);
        var n2 = this.normal(1);
        var s = n1.x * n2.x + n1.y * n2.y;
        if (this._3d) {
          s += n1.z * n2.z;
        }
        var angle = abs(acos(s));
        return angle < pi / 3;
      },
      reduce: function() {
        var i,
          t1 = 0,
          t2 = 0,
          step = 0.01,
          segment,
          pass1 = [],
          pass2 = [];
        // first pass: split on extrema
        var extrema = this.extrema().values;
        if (extrema.indexOf(0) === -1) {
          extrema = [0].concat(extrema);
        }
        if (extrema.indexOf(1) === -1) {
          extrema.push(1);
        }

        for (t1 = extrema[0], i = 1; i < extrema.length; i++) {
          t2 = extrema[i];
          segment = this.split(t1, t2);
          segment._t1 = t1;
          segment._t2 = t2;
          pass1.push(segment);
          t1 = t2;
        }

        // second pass: further reduce these segments to simple segments
        pass1.forEach(function(p1) {
          t1 = 0;
          t2 = 0;
          while (t2 <= 1) {
            for (t2 = t1 + step; t2 <= 1 + step; t2 += step) {
              segment = p1.split(t1, t2);
              if (!segment.simple()) {
                t2 -= step;
                if (abs(t1 - t2) < step) {
                  // we can never form a reduction
                  return [];
                }
                segment = p1.split(t1, t2);
                segment._t1 = utils$1.map(t1, 0, 1, p1._t1, p1._t2);
                segment._t2 = utils$1.map(t2, 0, 1, p1._t1, p1._t2);
                pass2.push(segment);
                t1 = t2;
                break;
              }
            }
          }
          if (t1 < 1) {
            segment = p1.split(t1, 1);
            segment._t1 = utils$1.map(t1, 0, 1, p1._t1, p1._t2);
            segment._t2 = p1._t2;
            pass2.push(segment);
          }
        });
        return pass2;
      },
      scale: function(d) {
        var order = this.order;
        var distanceFn = false;
        if (typeof d === "function") {
          distanceFn = d;
        }
        if (distanceFn && order === 2) {
          return this.raise().scale(distanceFn);
        }

        // TODO: add special handling for degenerate (=linear) curves.
        var clockwise = this.clockwise;
        var r1 = distanceFn ? distanceFn(0) : d;
        var r2 = distanceFn ? distanceFn(1) : d;
        var v = [this.offset(0, 10), this.offset(1, 10)];
        var o = utils$1.lli4(v[0], v[0].c, v[1], v[1].c);
        if (!o) {
          throw new Error("cannot scale this curve. Try reducing it first.");
        }
        // move all points by distance 'd' wrt the origin 'o'
        var points = this.points,
          np = [];

        // move end points by fixed distance along normal.
        [0, 1].forEach(
          function(t) {
            var p = (np[t * order] = utils$1.copy(points[t * order]));
            p.x += (t ? r2 : r1) * v[t].n.x;
            p.y += (t ? r2 : r1) * v[t].n.y;
          }.bind(this)
        );

        if (!distanceFn) {
          // move control points to lie on the intersection of the offset
          // derivative vector, and the origin-through-control vector
          [0, 1].forEach(
            function(t) {
              if (this.order === 2 && !!t) return;
              var p = np[t * order];
              var d = this.derivative(t);
              var p2 = { x: p.x + d.x, y: p.y + d.y };
              np[t + 1] = utils$1.lli4(p, p2, o, points[t + 1]);
            }.bind(this)
          );
          return new Bezier(np);
        }

        // move control points by "however much necessary to
        // ensure the correct tangent to endpoint".
        [0, 1].forEach(
          function(t) {
            if (this.order === 2 && !!t) return;
            var p = points[t + 1];
            var ov = {
              x: p.x - o.x,
              y: p.y - o.y
            };
            var rc = distanceFn ? distanceFn((t + 1) / order) : d;
            if (distanceFn && !clockwise) rc = -rc;
            var m = sqrt(ov.x * ov.x + ov.y * ov.y);
            ov.x /= m;
            ov.y /= m;
            np[t + 1] = {
              x: p.x + rc * ov.x,
              y: p.y + rc * ov.y
            };
          }.bind(this)
        );
        return new Bezier(np);
      },
      outline: function(d1, d2, d3, d4) {
        d2 = typeof d2 === "undefined" ? d1 : d2;
        var reduced = this.reduce(),
          len = reduced.length,
          fcurves = [],
          bcurves = [],
          p,
          alen = 0,
          tlen = this.length();

        var graduated = typeof d3 !== "undefined" && typeof d4 !== "undefined";

        function linearDistanceFunction(s, e, tlen, alen, slen) {
          return function(v) {
            var f1 = alen / tlen,
              f2 = (alen + slen) / tlen,
              d = e - s;
            return utils$1.map(v, 0, 1, s + f1 * d, s + f2 * d);
          };
        }

        // form curve oulines
        reduced.forEach(function(segment) {
          slen = segment.length();
          if (graduated) {
            fcurves.push(
              segment.scale(linearDistanceFunction(d1, d3, tlen, alen, slen))
            );
            bcurves.push(
              segment.scale(linearDistanceFunction(-d2, -d4, tlen, alen, slen))
            );
          } else {
            fcurves.push(segment.scale(d1));
            bcurves.push(segment.scale(-d2));
          }
          alen += slen;
        });

        // reverse the "return" outline
        bcurves = bcurves
          .map(function(s) {
            p = s.points;
            if (p[3]) {
              s.points = [p[3], p[2], p[1], p[0]];
            } else {
              s.points = [p[2], p[1], p[0]];
            }
            return s;
          })
          .reverse();

        // form the endcaps as lines
        var fs = fcurves[0].points[0],
          fe = fcurves[len - 1].points[fcurves[len - 1].points.length - 1],
          bs = bcurves[len - 1].points[bcurves[len - 1].points.length - 1],
          be = bcurves[0].points[0],
          ls = utils$1.makeline(bs, fs),
          le = utils$1.makeline(fe, be),
          segments = [ls]
            .concat(fcurves)
            .concat([le])
            .concat(bcurves),
          slen = segments.length;

        return new PolyBezier(segments);
      },
      outlineshapes: function(d1, d2, curveIntersectionThreshold) {
        d2 = d2 || d1;
        var outline = this.outline(d1, d2).curves;
        var shapes = [];
        for (var i = 1, len = outline.length; i < len / 2; i++) {
          var shape = utils$1.makeshape(
            outline[i],
            outline[len - i],
            curveIntersectionThreshold
          );
          shape.startcap.virtual = i > 1;
          shape.endcap.virtual = i < len / 2 - 1;
          shapes.push(shape);
        }
        return shapes;
      },
      intersects: function(curve, curveIntersectionThreshold) {
        if (!curve) return this.selfintersects(curveIntersectionThreshold);
        if (curve.p1 && curve.p2) {
          return this.lineIntersects(curve);
        }
        if (curve instanceof Bezier) {
          curve = curve.reduce();
        }
        return this.curveintersects(
          this.reduce(),
          curve,
          curveIntersectionThreshold
        );
      },
      lineIntersects: function(line) {
        var mx = min(line.p1.x, line.p2.x),
          my = min(line.p1.y, line.p2.y),
          MX = max(line.p1.x, line.p2.x),
          MY = max(line.p1.y, line.p2.y),
          self = this;
        return utils$1.roots(this.points, line).filter(function(t) {
          var p = self.get(t);
          return utils$1.between(p.x, mx, MX) && utils$1.between(p.y, my, MY);
        });
      },
      selfintersects: function(curveIntersectionThreshold) {
        var reduced = this.reduce();
        // "simple" curves cannot intersect with their direct
        // neighbour, so for each segment X we check whether
        // it intersects [0:x-2][x+2:last].
        var i,
          len = reduced.length - 2,
          results = [],
          result,
          left,
          right;
        for (i = 0; i < len; i++) {
          left = reduced.slice(i, i + 1);
          right = reduced.slice(i + 2);
          result = this.curveintersects(left, right, curveIntersectionThreshold);
          results = results.concat(result);
        }
        return results;
      },
      curveintersects: function(c1, c2, curveIntersectionThreshold) {
        var pairs = [];
        // step 1: pair off any overlapping segments
        c1.forEach(function(l) {
          c2.forEach(function(r) {
            if (l.overlaps(r)) {
              pairs.push({ left: l, right: r });
            }
          });
        });
        // step 2: for each pairing, run through the convergence algorithm.
        var intersections = [];
        pairs.forEach(function(pair) {
          var result = utils$1.pairiteration(
            pair.left,
            pair.right,
            curveIntersectionThreshold
          );
          if (result.length > 0) {
            intersections = intersections.concat(result);
          }
        });
        return intersections;
      },
      arcs: function(errorThreshold) {
        errorThreshold = errorThreshold || 0.5;
        var circles = [];
        return this._iterate(errorThreshold, circles);
      },
      _error: function(pc, np1, s, e) {
        var q = (e - s) / 4,
          c1 = this.get(s + q),
          c2 = this.get(e - q),
          ref = utils$1.dist(pc, np1),
          d1 = utils$1.dist(pc, c1),
          d2 = utils$1.dist(pc, c2);
        return abs(d1 - ref) + abs(d2 - ref);
      },
      _iterate: function(errorThreshold, circles) {
        var t_s = 0,
          t_e = 1,
          safety;
        // we do a binary search to find the "good `t` closest to no-longer-good"
        do {
          safety = 0;

          // step 1: start with the maximum possible arc
          t_e = 1;

          // points:
          var np1 = this.get(t_s),
            np2,
            np3,
            arc,
            prev_arc;

          // booleans:
          var curr_good = false,
            prev_good = false,
            done;

          // numbers:
          var t_m = t_e,
            prev_e = 1;

          // step 2: find the best possible arc
          do {
            prev_good = curr_good;
            prev_arc = arc;
            t_m = (t_s + t_e) / 2;

            np2 = this.get(t_m);
            np3 = this.get(t_e);

            arc = utils$1.getccenter(np1, np2, np3);

            //also save the t values
            arc.interval = {
              start: t_s,
              end: t_e
            };

            var error = this._error(arc, np1, t_s, t_e);
            curr_good = error <= errorThreshold;

            done = prev_good && !curr_good;
            if (!done) prev_e = t_e;

            // this arc is fine: we can move 'e' up to see if we can find a wider arc
            if (curr_good) {
              // if e is already at max, then we're done for this arc.
              if (t_e >= 1) {
                // make sure we cap at t=1
                arc.interval.end = prev_e = 1;
                prev_arc = arc;
                // if we capped the arc segment to t=1 we also need to make sure that
                // the arc's end angle is correct with respect to the bezier end point.
                if (t_e > 1) {
                  var d = {
                    x: arc.x + arc.r * cos(arc.e),
                    y: arc.y + arc.r * sin(arc.e)
                  };
                  arc.e += utils$1.angle({ x: arc.x, y: arc.y }, d, this.get(1));
                }
                break;
              }
              // if not, move it up by half the iteration distance
              t_e = t_e + (t_e - t_s) / 2;
            } else {
              // this is a bad arc: we need to move 'e' down to find a good arc
              t_e = t_m;
            }
          } while (!done && safety++ < 100);

          if (safety >= 100) {
            break;
          }

          // console.log("L835: [F] arc found", t_s, prev_e, prev_arc.x, prev_arc.y, prev_arc.s, prev_arc.e);

          prev_arc = prev_arc ? prev_arc : arc;
          circles.push(prev_arc);
          t_s = prev_e;
        } while (t_e < 1);
        return circles;
      }
    };

    module.exports = Bezier;
  })();
  });

  var bezierJs = bezier;

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray$3(arr, i) {
    return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _nonIterableRest$3();
  }

  function _toConsumableArray$3(arr) {
    return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _nonIterableSpread$3();
  }

  function _arrayWithoutHoles$3(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles$3(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray$3(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit$3(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread$3() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest$3() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var index$4 = (function () {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var keyAccessors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var multiItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var flattenKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var keys = (keyAccessors instanceof Array ? keyAccessors.length ? keyAccessors : [undefined] : [keyAccessors]).map(function (key) {
      return {
        keyAccessor: key,
        isProp: !(key instanceof Function)
      };
    });
    var indexedResult = list.reduce(function (res, item) {
      var iterObj = res;
      var itemVal = item;
      keys.forEach(function (_ref, idx) {
        var keyAccessor = _ref.keyAccessor,
            isProp = _ref.isProp;
        var key;

        if (isProp) {
          var _itemVal = itemVal,
              propVal = _itemVal[keyAccessor],
              rest = _objectWithoutProperties(_itemVal, [keyAccessor].map(_toPropertyKey));

          key = propVal;
          itemVal = rest;
        } else {
          key = keyAccessor(itemVal, idx);
        }

        if (idx + 1 < keys.length) {
          if (!iterObj.hasOwnProperty(key)) {
            iterObj[key] = {};
          }

          iterObj = iterObj[key];
        } else {
          // Leaf key
          if (multiItem) {
            if (!iterObj.hasOwnProperty(key)) {
              iterObj[key] = [];
            }

            iterObj[key].push(itemVal);
          } else {
            iterObj[key] = itemVal;
          }
        }
      });
      return res;
    }, {});

    if (multiItem instanceof Function) {
      // Reduce leaf multiple values
      (function reduce(node) {
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (level === keys.length) {
          Object.keys(node).forEach(function (k) {
            return node[k] = multiItem(node[k]);
          });
        } else {
          Object.values(node).forEach(function (child) {
            return reduce(child, level + 1);
          });
        }
      })(indexedResult); // IIFE

    }

    var result = indexedResult;

    if (flattenKeys) {
      // flatten into array
      result = [];

      (function flatten(node) {
        var accKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        if (accKeys.length === keys.length) {
          result.push({
            keys: accKeys,
            vals: node
          });
        } else {
          Object.entries(node).forEach(function (_ref2) {
            var _ref3 = _slicedToArray$3(_ref2, 2),
                key = _ref3[0],
                val = _ref3[1];

            return flatten(val, [].concat(_toConsumableArray$3(accKeys), [key]));
          });
        }
      })(indexedResult); //IIFE


      if (keyAccessors instanceof Array && keyAccessors.length === 0 && result.length === 1) {
        // clear keys if there's no key accessors (single result)
        result[0].keys = [];
      }
    }

    return result;
  });

  function initRange(domain, range) {
    switch (arguments.length) {
      case 0: break;
      case 1: this.range(domain); break;
      default: this.range(range).domain(domain); break;
    }
    return this;
  }

  const implicit = Symbol("implicit");

  function ordinal() {
    var index = new Map(),
        domain = [],
        range = [],
        unknown = implicit;

    function scale(d) {
      var key = d + "", i = index.get(key);
      if (!i) {
        if (unknown !== implicit) return unknown;
        index.set(key, i = domain.push(d));
      }
      return range[(i - 1) % range.length];
    }

    scale.domain = function(_) {
      if (!arguments.length) return domain.slice();
      domain = [], index = new Map();
      for (const value of _) {
        const key = value + "";
        if (index.has(key)) continue;
        index.set(key, domain.push(value));
      }
      return scale;
    };

    scale.range = function(_) {
      return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };

    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };

    scale.copy = function() {
      return ordinal(domain, range).unknown(unknown);
    };

    initRange.apply(scale, arguments);

    return scale;
  }

  function colors(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
  }

  var schemePaired = colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "canvas {\n  user-select: none;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.graph-tooltip {\n  position: absolute;\n  transform: translate(-50%, 25px);\n  font-family: sans-serif;\n  font-size: 16px;\n  padding: 4px;\n  border-radius: 3px;\n  color: #eee;\n  background: rgba(0,0,0,0.65);\n  visibility: hidden; /* by default */\n}\n\n.grabbable {\n  cursor: move;\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n\n.grabbable:active {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n";
  styleInject(css_248z);

  function _typeof$1(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof$1 = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof$1 = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof$1(obj);
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _slicedToArray$4(arr, i) {
    return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$4();
  }

  function _toConsumableArray$4(arr) {
    return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$4();
  }

  function _arrayWithoutHoles$4(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
  }

  function _arrayWithHoles$4(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray$4(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit$4(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
  }

  function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread$4() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest$4() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var autoColorScale = ordinal(schemePaired); // Autoset attribute colorField by colorByAccessor property
  // If an object has already a color, don't set it
  // Objects can be nodes or links

  function autoColorObjects(objects, colorByAccessor, colorField) {
    if (!colorByAccessor || typeof colorField !== 'string') return;
    objects.filter(function (obj) {
      return !obj[colorField];
    }).forEach(function (obj) {
      obj[colorField] = autoColorScale(colorByAccessor(obj));
    });
  }

  function getDagDepths (_ref, idAccessor) {
    var nodes = _ref.nodes,
        links = _ref.links;

    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref2$nodeFilter = _ref2.nodeFilter,
        nodeFilter = _ref2$nodeFilter === void 0 ? function () {
      return true;
    } : _ref2$nodeFilter,
        _ref2$onLoopError = _ref2.onLoopError,
        onLoopError = _ref2$onLoopError === void 0 ? function (loopIds) {
      throw "Invalid DAG structure! Found cycle in node path: ".concat(loopIds.join(' -> '), ".");
    } : _ref2$onLoopError;

    // linked graph
    var graph = {};
    nodes.forEach(function (node) {
      return graph[idAccessor(node)] = {
        data: node,
        out: [],
        depth: -1,
        skip: !nodeFilter(node)
      };
    });
    links.forEach(function (_ref3) {
      var source = _ref3.source,
          target = _ref3.target;
      var sourceId = getNodeId(source);
      var targetId = getNodeId(target);
      if (!graph.hasOwnProperty(sourceId)) throw "Missing source node with id: ".concat(sourceId);
      if (!graph.hasOwnProperty(targetId)) throw "Missing target node with id: ".concat(targetId);
      var sourceNode = graph[sourceId];
      var targetNode = graph[targetId];
      sourceNode.out.push(targetNode);

      function getNodeId(node) {
        return _typeof$1(node) === 'object' ? idAccessor(node) : node;
      }
    });
    var foundLoops = [];
    traverse(Object.values(graph));
    var nodeDepths = Object.assign.apply(Object, [{}].concat(_toConsumableArray$4(Object.entries(graph).filter(function (_ref4) {
      var _ref5 = _slicedToArray$4(_ref4, 2),
          node = _ref5[1];

      return !node.skip;
    }).map(function (_ref6) {
      var _ref7 = _slicedToArray$4(_ref6, 2),
          id = _ref7[0],
          node = _ref7[1];

      return _defineProperty$1({}, id, node.depth);
    }))));
    return nodeDepths;

    function traverse(nodes) {
      var nodeStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var currentDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];

        if (nodeStack.indexOf(node) !== -1) {
          var _ret = function () {
            var loop = [].concat(_toConsumableArray$4(nodeStack.slice(nodeStack.indexOf(node))), [node]).map(function (d) {
              return idAccessor(d.data);
            });

            if (!foundLoops.some(function (foundLoop) {
              return foundLoop.length === loop.length && foundLoop.every(function (id, idx) {
                return id === loop[idx];
              });
            })) {
              foundLoops.push(loop);
              onLoopError(loop);
            }

            return "continue";
          }();

          if (_ret === "continue") continue;
        }

        if (currentDepth > node.depth) {
          // Don't unnecessarily revisit chunks of the graph
          node.depth = currentDepth;
          traverse(node.out, [].concat(_toConsumableArray$4(nodeStack), [node]), currentDepth + (node.skip ? 0 : 1));
        }
      }
    }
  }

  var DAG_LEVEL_NODE_RATIO = 2;
  var CanvasForceGraph = index$1({
    props: {
      graphData: {
        "default": {
          nodes: [],
          links: []
        },
        onChange: function onChange(_, state) {
          state.engineRunning = false;
        } // Pause simulation

      },
      dagMode: {
        onChange: function onChange(dagMode, state) {
          // td, bu, lr, rl, radialin, radialout
          !dagMode && (state.graphData.nodes || []).forEach(function (n) {
            return n.fx = n.fy = undefined;
          }); // unfix nodes when disabling dag mode
        }
      },
      dagLevelDistance: {},
      dagNodeFilter: {
        "default": function _default(node) {
          return true;
        }
      },
      onDagError: {
        triggerUpdate: false
      },
      nodeRelSize: {
        "default": 4,
        triggerUpdate: false
      },
      // area per val unit
      nodeId: {
        "default": 'id'
      },
      nodeVal: {
        "default": 'val',
        triggerUpdate: false
      },
      nodeColor: {
        "default": 'color',
        triggerUpdate: false
      },
      nodeAutoColorBy: {},
      nodeCanvasObject: {
        triggerUpdate: false
      },
      nodeCanvasObjectMode: {
        "default": function _default() {
          return 'replace';
        },
        triggerUpdate: false
      },
      nodeVisibility: {
        "default": true,
        triggerUpdate: false
      },
      linkSource: {
        "default": 'source'
      },
      linkTarget: {
        "default": 'target'
      },
      linkVisibility: {
        "default": true,
        triggerUpdate: false
      },
      linkColor: {
        "default": 'color',
        triggerUpdate: false
      },
      linkAutoColorBy: {},
      linkLineDash: {
        triggerUpdate: false
      },
      linkWidth: {
        "default": 1,
        triggerUpdate: false
      },
      linkCurvature: {
        "default": 0,
        triggerUpdate: false
      },
      linkCanvasObject: {
        triggerUpdate: false
      },
      linkCanvasObjectMode: {
        "default": function _default() {
          return 'replace';
        },
        triggerUpdate: false
      },
      linkDirectionalArrowLength: {
        "default": 0,
        triggerUpdate: false
      },
      linkDirectionalArrowColor: {
        triggerUpdate: false
      },
      linkDirectionalArrowRelPos: {
        "default": 0.5,
        triggerUpdate: false
      },
      // value between 0<>1 indicating the relative pos along the (exposed) line
      linkDirectionalParticles: {
        "default": 0
      },
      // animate photons travelling in the link direction
      linkDirectionalParticleSpeed: {
        "default": 0.01,
        triggerUpdate: false
      },
      // in link length ratio per frame
      linkDirectionalParticleWidth: {
        "default": 4,
        triggerUpdate: false
      },
      linkDirectionalParticleColor: {
        triggerUpdate: false
      },
      globalScale: {
        "default": 1,
        triggerUpdate: false
      },
      d3AlphaMin: {
        "default": 0,
        triggerUpdate: false
      },
      d3AlphaDecay: {
        "default": 0.0228,
        triggerUpdate: false,
        onChange: function onChange(alphaDecay, state) {
          state.forceLayout.alphaDecay(alphaDecay);
        }
      },
      d3AlphaTarget: {
        "default": 0,
        triggerUpdate: false,
        onChange: function onChange(alphaTarget, state) {
          state.forceLayout.alphaTarget(alphaTarget);
        }
      },
      d3VelocityDecay: {
        "default": 0.4,
        triggerUpdate: false,
        onChange: function onChange(velocityDecay, state) {
          state.forceLayout.velocityDecay(velocityDecay);
        }
      },
      warmupTicks: {
        "default": 0,
        triggerUpdate: false
      },
      // how many times to tick the force engine at init before starting to render
      cooldownTicks: {
        "default": Infinity,
        triggerUpdate: false
      },
      cooldownTime: {
        "default": 15000,
        triggerUpdate: false
      },
      // ms
      onUpdate: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onFinishUpdate: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onEngineTick: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onEngineStop: {
        "default": function _default() {},
        triggerUpdate: false
      },
      isShadow: {
        "default": false,
        triggerUpdate: false
      }
    },
    methods: {
      // Expose d3 forces for external manipulation
      d3Force: function d3Force(state, forceName, forceFn) {
        if (forceFn === undefined) {
          return state.forceLayout.force(forceName); // Force getter
        }

        state.forceLayout.force(forceName, forceFn); // Force setter

        return this;
      },
      d3ReheatSimulation: function d3ReheatSimulation(state) {
        state.forceLayout.alpha(1);
        this.resetCountdown();
        return this;
      },
      // reset cooldown state
      resetCountdown: function resetCountdown(state) {
        state.cntTicks = 0;
        state.startTickTime = new Date();
        state.engineRunning = true;
        return this;
      },
      tickFrame: function tickFrame(state) {
        !state.isShadow && layoutTick();
        paintLinks();
        !state.isShadow && paintArrows();
        !state.isShadow && paintPhotons();
        paintNodes();
        return this; //

        function layoutTick() {
          if (state.engineRunning) {
            if (++state.cntTicks > state.cooldownTicks || new Date() - state.startTickTime > state.cooldownTime || state.d3AlphaMin > 0 && state.forceLayout.alpha() < state.d3AlphaMin) {
              state.engineRunning = false; // Stop ticking graph

              state.onEngineStop();
            } else {
              state.forceLayout.tick(); // Tick it

              state.onEngineTick();
            }
          }
        }

        function paintNodes() {
          var getVisibility = index$2(state.nodeVisibility);
          var getVal = index$2(state.nodeVal);
          var getColor = index$2(state.nodeColor);
          var getNodeCanvasObjectMode = index$2(state.nodeCanvasObjectMode);
          var ctx = state.ctx; // Draw wider nodes by 1px on shadow canvas for more precise hovering (due to boundary anti-aliasing)

          var padAmount = state.isShadow / state.globalScale;
          var visibleNodes = state.graphData.nodes.filter(getVisibility);
          ctx.save();
          visibleNodes.forEach(function (node) {
            var nodeCanvasObjectMode = getNodeCanvasObjectMode(node);

            if (state.nodeCanvasObject && (nodeCanvasObjectMode === 'before' || nodeCanvasObjectMode === 'replace')) {
              // Custom node before/replace paint
              state.nodeCanvasObject(node, ctx, state.globalScale, state.isShadow);

              if (nodeCanvasObjectMode === 'replace') {
                ctx.restore();
                return;
              }
            } // Draw wider nodes by 1px on shadow canvas for more precise hovering (due to boundary anti-aliasing)


            var r = Math.sqrt(Math.max(0, getVal(node) || 1)) * state.nodeRelSize + padAmount;
            ctx.beginPath();
            ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
            ctx.fillStyle = getColor(node) || 'rgba(31, 120, 180, 0.92)';
            ctx.fill();

            if (state.nodeCanvasObject && nodeCanvasObjectMode === 'after') {
              // Custom node after paint
              state.nodeCanvasObject(node, state.ctx, state.globalScale);
            }
          });
          ctx.restore();
        }

        function paintLinks() {
          var getVisibility = index$2(state.linkVisibility);
          var getColor = index$2(state.linkColor);
          var getWidth = index$2(state.linkWidth);
          var getLineDash = index$2(state.linkLineDash);
          var getCurvature = index$2(state.linkCurvature);
          var getLinkCanvasObjectMode = index$2(state.linkCanvasObjectMode);
          var ctx = state.ctx; // Draw wider lines by 2px on shadow canvas for more precise hovering (due to boundary anti-aliasing)

          var padAmount = state.isShadow * 2;
          var visibleLinks = state.graphData.links.filter(getVisibility);
          visibleLinks.forEach(calcLinkControlPoints); // calculate curvature control points for all visible links

          var beforeCustomLinks = [],
              afterCustomLinks = [],
              defaultPaintLinks = visibleLinks;

          if (state.linkCanvasObject) {
            var replaceCustomLinks = [],
                otherCustomLinks = [];
            visibleLinks.forEach(function (d) {
              return ({
                before: beforeCustomLinks,
                after: afterCustomLinks,
                replace: replaceCustomLinks
              }[getLinkCanvasObjectMode(d)] || otherCustomLinks).push(d);
            });
            defaultPaintLinks = [].concat(_toConsumableArray$4(beforeCustomLinks), afterCustomLinks, otherCustomLinks);
            beforeCustomLinks = beforeCustomLinks.concat(replaceCustomLinks);
          } // Custom link before paints


          ctx.save();
          beforeCustomLinks.forEach(function (link) {
            return state.linkCanvasObject(link, ctx, state.globalScale);
          });
          ctx.restore(); // Bundle strokes per unique color/width/dash for performance optimization

          var linksPerColor = index$4(defaultPaintLinks, [getColor, getWidth, getLineDash]);
          ctx.save();
          Object.entries(linksPerColor).forEach(function (_ref) {
            var _ref2 = _slicedToArray$4(_ref, 2),
                color = _ref2[0],
                linksPerWidth = _ref2[1];

            var lineColor = !color || color === 'undefined' ? 'rgba(0,0,0,0.15)' : color;
            Object.entries(linksPerWidth).forEach(function (_ref3) {
              var _ref4 = _slicedToArray$4(_ref3, 2),
                  width = _ref4[0],
                  linesPerLineDash = _ref4[1];

              var lineWidth = (width || 1) / state.globalScale + padAmount;
              Object.entries(linesPerLineDash).forEach(function (_ref5) {
                var _ref6 = _slicedToArray$4(_ref5, 2),
                    dashSegments = _ref6[0],
                    links = _ref6[1];

                var lineDashSegments = getLineDash(links[0]);
                ctx.beginPath();
                links.forEach(function (link) {
                  var start = link.source;
                  var end = link.target;
                  if (!start || !end || !start.hasOwnProperty('x') || !end.hasOwnProperty('x')) return; // skip invalid link

                  ctx.moveTo(start.x, start.y);
                  var controlPoints = link.__controlPoints;

                  if (!controlPoints) {
                    // Straight line
                    ctx.lineTo(end.x, end.y);
                  } else {
                    // Use quadratic curves for regular lines and bezier for loops
                    ctx[controlPoints.length === 2 ? 'quadraticCurveTo' : 'bezierCurveTo'].apply(ctx, _toConsumableArray$4(controlPoints).concat([end.x, end.y]));
                  }
                });
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = lineWidth;
                ctx.setLineDash(lineDashSegments || []);
                ctx.stroke();
              });
            });
          });
          ctx.restore(); // Custom link after paints

          ctx.save();
          afterCustomLinks.forEach(function (link) {
            return state.linkCanvasObject(link, ctx, state.globalScale);
          });
          ctx.restore(); //

          function calcLinkControlPoints(link) {
            var curvature = getCurvature(link);

            if (!curvature) {
              // straight line
              link.__controlPoints = null;
              return;
            }

            var start = link.source;
            var end = link.target;
            if (!start || !end || !start.hasOwnProperty('x') || !end.hasOwnProperty('x')) return; // skip invalid link

            var l = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)); // line length

            if (l > 0) {
              var a = Math.atan2(end.y - start.y, end.x - start.x); // line angle

              var d = l * curvature; // control point distance

              var cp = {
                // control point
                x: (start.x + end.x) / 2 + d * Math.cos(a - Math.PI / 2),
                y: (start.y + end.y) / 2 + d * Math.sin(a - Math.PI / 2)
              };
              link.__controlPoints = [cp.x, cp.y];
            } else {
              // Same point, draw a loop
              var _d = curvature * 70;

              link.__controlPoints = [end.x, end.y - _d, end.x + _d, end.y];
            }
          }
        }

        function paintArrows() {
          var ARROW_WH_RATIO = 1.6;
          var ARROW_VLEN_RATIO = 0.2;
          var getLength = index$2(state.linkDirectionalArrowLength);
          var getRelPos = index$2(state.linkDirectionalArrowRelPos);
          var getVisibility = index$2(state.linkVisibility);
          var getColor = index$2(state.linkDirectionalArrowColor || state.linkColor);
          var getNodeVal = index$2(state.nodeVal);
          var ctx = state.ctx;
          ctx.save();
          state.graphData.links.filter(getVisibility).forEach(function (link) {
            var arrowLength = getLength(link);
            if (!arrowLength || arrowLength < 0) return;
            var start = link.source;
            var end = link.target;
            if (!start || !end || !start.hasOwnProperty('x') || !end.hasOwnProperty('x')) return; // skip invalid link

            var startR = Math.sqrt(Math.max(0, getNodeVal(start) || 1)) * state.nodeRelSize;
            var endR = Math.sqrt(Math.max(0, getNodeVal(end) || 1)) * state.nodeRelSize;
            var arrowRelPos = Math.min(1, Math.max(0, getRelPos(link)));
            var arrowColor = getColor(link) || 'rgba(0,0,0,0.28)';
            var arrowHalfWidth = arrowLength / ARROW_WH_RATIO / 2; // Construct bezier for curved lines

            var bzLine = link.__controlPoints && _construct(bezierJs, [start.x, start.y].concat(_toConsumableArray$4(link.__controlPoints), [end.x, end.y]));

            var getCoordsAlongLine = bzLine ? function (t) {
              return bzLine.get(t);
            } // get position along bezier line
            : function (t) {
              return {
                // straight line: interpolate linearly
                x: start.x + (end.x - start.x) * t || 0,
                y: start.y + (end.y - start.y) * t || 0
              };
            };
            var lineLen = bzLine ? bzLine.length() : Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
            var posAlongLine = startR + arrowLength + (lineLen - startR - endR - arrowLength) * arrowRelPos;
            var arrowHead = getCoordsAlongLine(posAlongLine / lineLen);
            var arrowTail = getCoordsAlongLine((posAlongLine - arrowLength) / lineLen);
            var arrowTailVertex = getCoordsAlongLine((posAlongLine - arrowLength * (1 - ARROW_VLEN_RATIO)) / lineLen);
            var arrowTailAngle = Math.atan2(arrowHead.y - arrowTail.y, arrowHead.x - arrowTail.x) - Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(arrowHead.x, arrowHead.y);
            ctx.lineTo(arrowTail.x + arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y + arrowHalfWidth * Math.sin(arrowTailAngle));
            ctx.lineTo(arrowTailVertex.x, arrowTailVertex.y);
            ctx.lineTo(arrowTail.x - arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y - arrowHalfWidth * Math.sin(arrowTailAngle));
            ctx.fillStyle = arrowColor;
            ctx.fill();
          });
          ctx.restore();
        }

        function paintPhotons() {
          var getNumPhotons = index$2(state.linkDirectionalParticles);
          var getSpeed = index$2(state.linkDirectionalParticleSpeed);
          var getDiameter = index$2(state.linkDirectionalParticleWidth);
          var getVisibility = index$2(state.linkVisibility);
          var getColor = index$2(state.linkDirectionalParticleColor || state.linkColor);
          var ctx = state.ctx;
          ctx.save();
          state.graphData.links.filter(getVisibility).forEach(function (link) {
            var numCyclePhotons = getNumPhotons(link);
            if (!link.hasOwnProperty('__photons') || !link.__photons.length) return;
            var start = link.source;
            var end = link.target;
            if (!start || !end || !start.hasOwnProperty('x') || !end.hasOwnProperty('x')) return; // skip invalid link

            var particleSpeed = getSpeed(link);
            var photons = link.__photons || [];
            var photonR = Math.max(0, getDiameter(link) / 2) / Math.sqrt(state.globalScale);
            var photonColor = getColor(link) || 'rgba(0,0,0,0.28)';
            ctx.fillStyle = photonColor; // Construct bezier for curved lines

            var bzLine = link.__controlPoints ? _construct(bezierJs, [start.x, start.y].concat(_toConsumableArray$4(link.__controlPoints), [end.x, end.y])) : null;
            var cyclePhotonIdx = 0;
            var needsCleanup = false; // whether some photons need to be removed from list

            photons.forEach(function (photon) {
              var singleHop = !!photon.__singleHop;

              if (!photon.hasOwnProperty('__progressRatio')) {
                photon.__progressRatio = singleHop ? 0 : cyclePhotonIdx / numCyclePhotons;
              }

              !singleHop && cyclePhotonIdx++; // increase regular photon index

              photon.__progressRatio += particleSpeed;

              if (photon.__progressRatio >= 1) {
                if (!singleHop) {
                  photon.__progressRatio = photon.__progressRatio % 1;
                } else {
                  needsCleanup = true;
                  return;
                }
              }

              var photonPosRatio = photon.__progressRatio;
              var coords = bzLine ? bzLine.get(photonPosRatio) // get position along bezier line
              : {
                // straight line: interpolate linearly
                x: start.x + (end.x - start.x) * photonPosRatio || 0,
                y: start.y + (end.y - start.y) * photonPosRatio || 0
              };
              ctx.beginPath();
              ctx.arc(coords.x, coords.y, photonR, 0, 2 * Math.PI, false);
              ctx.fill();
            });

            if (needsCleanup) {
              // remove expired single hop photons
              link.__photons = link.__photons.filter(function (photon) {
                return !photon.__singleHop || photon.__progressRatio <= 1;
              });
            }
          });
          ctx.restore();
        }
      },
      emitParticle: function emitParticle(state, link) {
        if (link) {
          !link.__photons && (link.__photons = []);

          link.__photons.push({
            __singleHop: true
          }); // add a single hop particle

        }

        return this;
      }
    },
    stateInit: function stateInit() {
      return {
        forceLayout: forceSimulation().force('link', forceLink()).force('charge', forceManyBody()).force('center', forceCenter()).force('dagRadial', null).stop(),
        engineRunning: false
      };
    },
    init: function init(canvasCtx, state) {
      // Main canvas object to manipulate
      state.ctx = canvasCtx;
    },
    update: function update(state) {
      state.engineRunning = false; // Pause simulation

      state.onUpdate();

      if (state.nodeAutoColorBy !== null) {
        // Auto add color to uncolored nodes
        autoColorObjects(state.graphData.nodes, index$2(state.nodeAutoColorBy), state.nodeColor);
      }

      if (state.linkAutoColorBy !== null) {
        // Auto add color to uncolored links
        autoColorObjects(state.graphData.links, index$2(state.linkAutoColorBy), state.linkColor);
      } // parse links


      state.graphData.links.forEach(function (link) {
        link.source = link[state.linkSource];
        link.target = link[state.linkTarget];
      });

      if (!state.isShadow) {
        // Add photon particles
        var linkParticlesAccessor = index$2(state.linkDirectionalParticles);
        state.graphData.links.forEach(function (link) {
          var numPhotons = Math.round(Math.abs(linkParticlesAccessor(link)));

          if (numPhotons) {
            link.__photons = _toConsumableArray$4(Array(numPhotons)).map(function () {
              return {};
            });
          } else {
            delete link.__photons;
          }
        });
      } // Feed data to force-directed layout


      state.forceLayout.stop().alpha(1) // re-heat the simulation
      .nodes(state.graphData.nodes); // add links (if link force is still active)

      var linkForce = state.forceLayout.force('link');

      if (linkForce) {
        linkForce.id(function (d) {
          return d[state.nodeId];
        }).links(state.graphData.links);
      } // setup dag force constraints


      var nodeDepths = state.dagMode && getDagDepths(state.graphData, function (node) {
        return node[state.nodeId];
      }, {
        nodeFilter: state.dagNodeFilter,
        onLoopError: state.onDagError || undefined
      });
      var maxDepth = Math.max.apply(Math, _toConsumableArray$4(Object.values(nodeDepths || [])));
      var dagLevelDistance = state.dagLevelDistance || state.graphData.nodes.length / (maxDepth || 1) * DAG_LEVEL_NODE_RATIO * (['radialin', 'radialout'].indexOf(state.dagMode) !== -1 ? 0.7 : 1); // Fix nodes to x,y for dag mode

      if (state.dagMode) {
        var getFFn = function getFFn(fix, invert) {
          return function (node) {
            return !fix ? undefined : (nodeDepths[node[state.nodeId]] - maxDepth / 2) * dagLevelDistance * (invert ? -1 : 1);
          };
        };

        var fxFn = getFFn(['lr', 'rl'].indexOf(state.dagMode) !== -1, state.dagMode === 'rl');
        var fyFn = getFFn(['td', 'bu'].indexOf(state.dagMode) !== -1, state.dagMode === 'bu');
        state.graphData.nodes.filter(state.dagNodeFilter).forEach(function (node) {
          node.fx = fxFn(node);
          node.fy = fyFn(node);
        });
      } // Use radial force for radial dags


      state.forceLayout.force('dagRadial', ['radialin', 'radialout'].indexOf(state.dagMode) !== -1 ? forceRadial(function (node) {
        var nodeDepth = nodeDepths[node[state.nodeId]] || -1;
        return (state.dagMode === 'radialin' ? maxDepth - nodeDepth : nodeDepth) * dagLevelDistance;
      }).strength(function (node) {
        return state.dagNodeFilter(node) ? 1 : 0;
      }) : null);

      for (var i = 0; i < state.warmupTicks && !(state.d3AlphaMin > 0 && state.forceLayout.alpha() < state.d3AlphaMin); i++) {
        state.forceLayout.tick();
      } // Initial ticks before starting to render


      this.resetCountdown();
      state.onFinishUpdate();
    }
  });

  function linkKapsule (kapsulePropNames, kapsuleType) {
    var propNames = kapsulePropNames instanceof Array ? kapsulePropNames : [kapsulePropNames];
    var dummyK = new kapsuleType(); // To extract defaults

    return {
      linkProp: function linkProp(prop) {
        // link property config
        return {
          "default": dummyK[prop](),
          onChange: function onChange(v, state) {
            propNames.forEach(function (propName) {
              return state[propName][prop](v);
            });
          },
          triggerUpdate: false
        };
      },
      linkMethod: function linkMethod(method) {
        // link method pass-through
        return function (state) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var returnVals = [];
          propNames.forEach(function (propName) {
            var kapsuleInstance = state[propName];
            var returnVal = kapsuleInstance[method].apply(kapsuleInstance, args);

            if (returnVal !== kapsuleInstance) {
              returnVals.push(returnVal);
            }
          });
          return returnVals.length ? returnVals[0] : this; // chain based on the parent object, not the inner kapsule
        };
      }
    };
  }

  var HOVER_CANVAS_THROTTLE_DELAY = 800; // ms to throttle shadow canvas updates for perf improvement

  var ZOOM2NODES_FACTOR = 4; // Expose config from forceGraph

  var bindFG = linkKapsule('forceGraph', CanvasForceGraph);
  var bindBoth = linkKapsule(['forceGraph', 'shadowGraph'], CanvasForceGraph);
  var linkedProps = Object.assign.apply(Object, _toConsumableArray$4(['nodeColor', 'nodeAutoColorBy', 'nodeCanvasObject', 'nodeCanvasObjectMode', 'linkColor', 'linkAutoColorBy', 'linkLineDash', 'linkWidth', 'linkCanvasObject', 'linkCanvasObjectMode', 'linkDirectionalArrowLength', 'linkDirectionalArrowColor', 'linkDirectionalArrowRelPos', 'linkDirectionalParticles', 'linkDirectionalParticleSpeed', 'linkDirectionalParticleWidth', 'linkDirectionalParticleColor', 'dagMode', 'dagLevelDistance', 'dagNodeFilter', 'onDagError', 'd3AlphaMin', 'd3AlphaDecay', 'd3VelocityDecay', 'warmupTicks', 'cooldownTicks', 'cooldownTime', 'onEngineTick', 'onEngineStop'].map(function (p) {
    return _defineProperty$1({}, p, bindFG.linkProp(p));
  })).concat(_toConsumableArray$4(['nodeRelSize', 'nodeId', 'nodeVal', 'nodeVisibility', 'linkSource', 'linkTarget', 'linkVisibility', 'linkCurvature'].map(function (p) {
    return _defineProperty$1({}, p, bindBoth.linkProp(p));
  }))));
  var linkedMethods = Object.assign.apply(Object, _toConsumableArray$4(['d3Force', 'd3ReheatSimulation', 'emitParticle'].map(function (p) {
    return _defineProperty$1({}, p, bindFG.linkMethod(p));
  })));

  function adjustCanvasSize(state) {
    if (state.canvas) {
      var curWidth = state.canvas.width;
      var curHeight = state.canvas.height;

      if (curWidth === 300 && curHeight === 150) {
        // Default canvas dimensions
        curWidth = curHeight = 0;
      }

      var pxScale = window.devicePixelRatio; // 2 on retina displays

      curWidth /= pxScale;
      curHeight /= pxScale; // Resize canvases

      [state.canvas, state.shadowCanvas].forEach(function (canvas) {
        // Element size
        canvas.style.width = "".concat(state.width, "px");
        canvas.style.height = "".concat(state.height, "px"); // Memory size (scaled to avoid blurriness)

        canvas.width = state.width * pxScale;
        canvas.height = state.height * pxScale; // Normalize coordinate system to use css pixels (on init only)

        if (!curWidth && !curHeight) {
          canvas.getContext('2d').scale(pxScale, pxScale);
        }
      }); // Relative center panning based on 0,0

      var k = transform(state.canvas).k;
      state.zoom.translateBy(state.zoom.__baseElem, (state.width - curWidth) / 2 / k, (state.height - curHeight) / 2 / k);
    }
  }

  function resetTransform(ctx) {
    var pxRatio = window.devicePixelRatio;
    ctx.setTransform(pxRatio, 0, 0, pxRatio, 0, 0);
  }

  function clearCanvas(ctx, width, height) {
    ctx.save();
    resetTransform(ctx); // reset transform

    ctx.clearRect(0, 0, width, height);
    ctx.restore(); //restore transforms
  } //


  var forceGraph = index$1({
    props: _objectSpread2({
      width: {
        "default": window.innerWidth,
        onChange: function onChange(_, state) {
          return adjustCanvasSize(state);
        },
        triggerUpdate: false
      },
      height: {
        "default": window.innerHeight,
        onChange: function onChange(_, state) {
          return adjustCanvasSize(state);
        },
        triggerUpdate: false
      },
      graphData: {
        "default": {
          nodes: [],
          links: []
        },
        onChange: function onChange(d, state) {
          if (d.nodes.length || d.links.length) {
            console.info('force-graph loading', d.nodes.length + ' nodes', d.links.length + ' links');
          }

          [{
            type: 'Node',
            objs: d.nodes
          }, {
            type: 'Link',
            objs: d.links
          }].forEach(hexIndex);
          state.forceGraph.graphData(d);
          state.shadowGraph.graphData(d);

          function hexIndex(_ref4) {
            var type = _ref4.type,
                objs = _ref4.objs;
            objs.filter(function (d) {
              if (!d.hasOwnProperty('__indexColor')) return true;
              var cur = state.colorTracker.lookup(d.__indexColor);
              return !cur || !cur.hasOwnProperty('d') || cur.d !== d;
            }).forEach(function (d) {
              // store object lookup color
              d.__indexColor = state.colorTracker.register({
                type: type,
                d: d
              });
            });
          }
        },
        triggerUpdate: false
      },
      backgroundColor: {
        onChange: function onChange(color, state) {
          state.canvas && color && (state.canvas.style.background = color);
        },
        triggerUpdate: false
      },
      nodeLabel: {
        "default": 'name',
        triggerUpdate: false
      },
      linkLabel: {
        "default": 'name',
        triggerUpdate: false
      },
      linkHoverPrecision: {
        "default": 4,
        triggerUpdate: false
      },
      enableNodeDrag: {
        "default": true,
        triggerUpdate: false
      },
      enableZoomPanInteraction: {
        "default": true,
        triggerUpdate: false
      },
      enablePointerInteraction: {
        "default": true,
        onChange: function onChange(_, state) {
          state.hoverObj = null;
        },
        triggerUpdate: false
      },
      onNodeDrag: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onNodeDragEnd: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onNodeClick: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onNodeRightClick: {
        triggerUpdate: false
      },
      onNodeHover: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onLinkClick: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onLinkRightClick: {
        triggerUpdate: false
      },
      onLinkHover: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onBackgroundClick: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onBackgroundRightClick: {
        triggerUpdate: false
      },
      onZoom: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onZoomEnd: {
        "default": function _default() {},
        triggerUpdate: false
      },
      onRenderFramePre: {
        triggerUpdate: false
      },
      onRenderFramePost: {
        triggerUpdate: false
      }
    }, linkedProps),
    aliases: {
      // Prop names supported for backwards compatibility
      stopAnimation: 'pauseAnimation'
    },
    methods: _objectSpread2({
      graph2ScreenCoords: function graph2ScreenCoords(state, x, y) {
        var t = transform(state.canvas);
        return {
          x: x * t.k + t.x,
          y: y * t.k + t.y
        };
      },
      screen2GraphCoords: function screen2GraphCoords(state, x, y) {
        var t = transform(state.canvas);
        return {
          x: (x - t.x) / t.k,
          y: (y - t.y) / t.k
        };
      },
      centerAt: function centerAt(state, x, y, transitionDuration) {
        if (!state.canvas) return null; // no canvas yet
        // setter

        if (x !== undefined || y !== undefined) {
          var finalPos = Object.assign({}, x !== undefined ? {
            x: x
          } : {}, y !== undefined ? {
            y: y
          } : {});

          if (!transitionDuration) {
            // no animation
            setCenter(finalPos);
          } else {
            new TWEEN.Tween(getCenter()).to(finalPos, transitionDuration).easing(TWEEN.Easing.Quadratic.Out).onUpdate(setCenter).start();
          }

          return this;
        } // getter


        return getCenter(); //

        function getCenter() {
          var t = transform(state.canvas);
          return {
            x: (state.width / 2 - t.x) / t.k,
            y: (state.height / 2 - t.y) / t.k
          };
        }

        function setCenter(_ref5) {
          var x = _ref5.x,
              y = _ref5.y;
          state.zoom.translateTo(state.zoom.__baseElem, x === undefined ? getCenter().x : x, y === undefined ? getCenter().y : y);
        }
      },
      zoom: function zoom(state, k, transitionDuration) {
        if (!state.canvas) return null; // no canvas yet
        // setter

        if (k !== undefined) {
          if (!transitionDuration) {
            // no animation
            setZoom(k);
          } else {
            new TWEEN.Tween({
              k: getZoom()
            }).to({
              k: k
            }, transitionDuration).easing(TWEEN.Easing.Quadratic.Out).onUpdate(function (_ref6) {
              var k = _ref6.k;
              return setZoom(k);
            }).start();
          }

          return this;
        } // getter


        return getZoom(); //

        function getZoom() {
          return transform(state.canvas).k;
        }

        function setZoom(k) {
          state.zoom.scaleTo(state.zoom.__baseElem, k);
        }
      },
      zoomToFit: function zoomToFit(state) {
        var transitionDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

        for (var _len = arguments.length, bboxArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          bboxArgs[_key - 3] = arguments[_key];
        }

        var bbox = this.getGraphBbox.apply(this, bboxArgs);

        if (bbox) {
          var center = {
            x: (bbox.x[0] + bbox.x[1]) / 2,
            y: (bbox.y[0] + bbox.y[1]) / 2
          };
          var zoomK = Math.max(1e-12, Math.min(1e12, (state.width - padding * 2) / (bbox.x[1] - bbox.x[0]), (state.height - padding * 2) / (bbox.y[1] - bbox.y[0])));
          this.centerAt(center.x, center.y, transitionDuration);
          this.zoom(zoomK, transitionDuration);
        }

        return this;
      },
      getGraphBbox: function getGraphBbox(state) {
        var nodeFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
          return true;
        };
        var getVal = index$2(state.nodeVal);

        var getR = function getR(node) {
          return Math.sqrt(Math.max(0, getVal(node) || 1)) * state.nodeRelSize;
        };

        var nodesPos = state.graphData.nodes.filter(nodeFilter).map(function (node) {
          return {
            x: node.x,
            y: node.y,
            r: getR(node)
          };
        });
        return !nodesPos.length ? null : {
          x: [min(nodesPos, function (node) {
            return node.x - node.r;
          }), max(nodesPos, function (node) {
            return node.x + node.r;
          })],
          y: [min(nodesPos, function (node) {
            return node.y - node.r;
          }), max(nodesPos, function (node) {
            return node.y + node.r;
          })]
        };
      },
      pauseAnimation: function pauseAnimation(state) {
        if (state.animationFrameRequestId) {
          cancelAnimationFrame(state.animationFrameRequestId);
          state.animationFrameRequestId = null;
        }

        return this;
      },
      resumeAnimation: function resumeAnimation(state) {
        if (!state.animationFrameRequestId) {
          this._animationCycle();
        }

        return this;
      },
      _destructor: function _destructor() {
        this.pauseAnimation();
        this.graphData({
          nodes: [],
          links: []
        });
      }
    }, linkedMethods),
    stateInit: function stateInit() {
      return {
        lastSetZoom: 1,
        forceGraph: new CanvasForceGraph(),
        shadowGraph: new CanvasForceGraph().cooldownTicks(0).nodeColor('__indexColor').linkColor('__indexColor').isShadow(true),
        colorTracker: new _default() // indexed objects for rgb lookup

      };
    },
    init: function init(domNode, state) {
      // Wipe DOM
      domNode.innerHTML = ''; // Container anchor for canvas and tooltip

      var container = document.createElement('div');
      container.style.position = 'relative';
      domNode.appendChild(container);
      state.canvas = document.createElement('canvas');
      if (state.backgroundColor) state.canvas.style.background = state.backgroundColor;
      container.appendChild(state.canvas);
      state.shadowCanvas = document.createElement('canvas'); // Show shadow canvas
      //state.shadowCanvas.style.position = 'absolute';
      //state.shadowCanvas.style.top = '0';
      //state.shadowCanvas.style.left = '0';
      //container.appendChild(state.shadowCanvas);

      var ctx = state.canvas.getContext('2d');
      var shadowCtx = state.shadowCanvas.getContext('2d'); // Setup node drag interaction

      select(state.canvas).call(drag().subject(function () {
        if (!state.enableNodeDrag) {
          return null;
        }

        var obj = state.hoverObj;
        return obj && obj.type === 'Node' ? obj.d : null; // Only drag nodes
      }).on('start', function (ev) {
        var obj = ev.subject;
        obj.__initialDragPos = {
          x: obj.x,
          y: obj.y,
          fx: obj.fx,
          fy: obj.fy
        }; // keep engine running at low intensity throughout drag

        if (!ev.active) {
          obj.fx = obj.x;
          obj.fy = obj.y; // Fix points
        } // drag cursor


        state.canvas.classList.add('grabbable');
      }).on('drag', function (ev) {
        var obj = ev.subject;
        var initPos = obj.__initialDragPos;
        var dragPos = ev;
        var k = transform(state.canvas).k;
        var translate = {
          x: initPos.x + (dragPos.x - initPos.x) / k - obj.x,
          y: initPos.y + (dragPos.y - initPos.y) / k - obj.y
        }; // Move fx/fy (and x/y) of nodes based on the scaled drag distance since the drag start

        ['x', 'y'].forEach(function (c) {
          return obj["f".concat(c)] = obj[c] = initPos[c] + (dragPos[c] - initPos[c]) / k;
        }); // prevent freeze while dragging

        state.forceGraph.d3AlphaTarget(0.3) // keep engine running at low intensity throughout drag
        .resetCountdown(); // prevent freeze while dragging

        obj.__dragged = true;
        state.onNodeDrag(obj, translate);
      }).on('end', function (ev) {
        var obj = ev.subject;
        var initPos = obj.__initialDragPos;
        var translate = {
          x: obj.x - initPos.x,
          y: obj.y - initPos.y
        };

        if (initPos.fx === undefined) {
          obj.fx = undefined;
        }

        if (initPos.fy === undefined) {
          obj.fy = undefined;
        }

        delete obj.__initialDragPos;
        state.forceGraph.d3AlphaTarget(0) // release engine low intensity
        .resetCountdown(); // let the engine readjust after releasing fixed nodes
        // drag cursor

        state.canvas.classList.remove('grabbable');

        if (obj.__dragged) {
          delete obj.__dragged;
          state.onNodeDragEnd(obj, translate);
        }
      })); // Setup zoom / pan interaction

      state.zoom = zoom();
      state.zoom(state.zoom.__baseElem = select(state.canvas)); // Attach controlling elem for easy access

      state.zoom.__baseElem.on('dblclick.zoom', null); // Disable double-click to zoom


      state.zoom.filter(function (ev) {
        return state.enableZoomPanInteraction ? !ev.button : false;
      }) // disable zoom interaction
      .scaleExtent([0.01, 1000]).on('zoom', function () {
        var t = transform(this); // Same as d3.event.transform

        [ctx, shadowCtx].forEach(function (c) {
          resetTransform(c);
          c.translate(t.x, t.y);
          c.scale(t.k, t.k);
        });
        state.onZoom(_objectSpread2({}, t));
      }).on('end', function () {
        var t = transform(this); // Same as d3.event.transform

        state.onZoomEnd(_objectSpread2({}, t));
      });
      adjustCanvasSize(state);
      state.forceGraph.onFinishUpdate(function () {
        // re-zoom, if still in default position (not user modified)
        if (transform(state.canvas).k === state.lastSetZoom && state.graphData.nodes.length) {
          state.zoom.scaleTo(state.zoom.__baseElem, state.lastSetZoom = ZOOM2NODES_FACTOR / Math.cbrt(state.graphData.nodes.length));
        }
      }); // Setup tooltip

      var toolTipElem = document.createElement('div');
      toolTipElem.classList.add('graph-tooltip');
      container.appendChild(toolTipElem); // Capture pointer coords on move or touchstart

      var pointerPos = {
        x: -1e12,
        y: -1e12
      };
      ['pointermove', 'pointerdown'].forEach(function (evType) {
        return container.addEventListener(evType, function (ev) {
          // detect point drag
          !state.isPointerDragging && ev.type === 'pointermove' && ev.pressure > 0 && [ev.movementX, ev.movementY].some(function (m) {
            return Math.abs(m) > (ev.pointerType === 'touch' ? 1 : 0);
          }) // relax drag trigger sensitivity on touch events
          && (state.isPointerDragging = true); // update the pointer pos

          var offset = getOffset(container);
          pointerPos.x = ev.pageX - offset.left;
          pointerPos.y = ev.pageY - offset.top; // Move tooltip

          toolTipElem.style.top = "".concat(pointerPos.y, "px");
          toolTipElem.style.left = "".concat(pointerPos.x, "px"); //

          function getOffset(el) {
            var rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
              top: rect.top + scrollTop,
              left: rect.left + scrollLeft
            };
          }
        }, {
          passive: true
        });
      }); // Handle click/touch events on nodes/links

      container.addEventListener('pointerup', function (ev) {
        if (state.isPointerDragging) {
          state.isPointerDragging = false;
          return; // don't trigger click events after pointer drag (pan / node drag functionality)
        }

        requestAnimationFrame(function () {
          // trigger click events asynchronously, to allow hoverObj to be set (on frame)
          if (ev.button === 0) {
            // mouse left-click or touch
            if (state.hoverObj) {
              state["on".concat(state.hoverObj.type, "Click")](state.hoverObj.d, ev);
            } else {
              state.onBackgroundClick(ev);
            }
          }

          if (ev.button === 2) {
            // mouse right-click
            if (state.hoverObj) {
              var fn = state["on".concat(state.hoverObj.type, "RightClick")];
              fn && fn(state.hoverObj.d, ev);
            } else {
              state.onBackgroundRightClick && state.onBackgroundRightClick(ev);
            }
          }
        });
      }, {
        passive: true
      });
      container.addEventListener('contextmenu', function (ev) {
        if (!state.onBackgroundRightClick && !state.onNodeRightClick && !state.onLinkRightClick) return true; // default contextmenu behavior

        ev.preventDefault();
        return false;
      });
      state.forceGraph(ctx);
      state.shadowGraph(shadowCtx); //

      var refreshShadowCanvas = lodash_throttle(function () {
        // wipe canvas
        clearCanvas(shadowCtx, state.width, state.height); // Adjust link hover area

        state.shadowGraph.linkWidth(function (l) {
          return index$2(state.linkWidth)(l) + state.linkHoverPrecision;
        }); // redraw

        var t = transform(state.canvas);
        state.shadowGraph.globalScale(t.k).tickFrame();
      }, HOVER_CANVAS_THROTTLE_DELAY); // Kick-off renderer

      (this._animationCycle = function animate() {
        // IIFE
        if (state.enablePointerInteraction) {
          // Update tooltip and trigger onHover events
          var obj = null;

          if (!state.isPointerDragging) {
            // don't hover during drag
            // Lookup object per pixel color
            var pxScale = window.devicePixelRatio;
            var px = pointerPos.x > 0 && pointerPos.y > 0 ? shadowCtx.getImageData(pointerPos.x * pxScale, pointerPos.y * pxScale, 1, 1) : null;
            px && (obj = state.colorTracker.lookup(px.data));
          }

          if (obj !== state.hoverObj) {
            var prevObj = state.hoverObj;
            var prevObjType = prevObj ? prevObj.type : null;
            var objType = obj ? obj.type : null;

            if (prevObjType && prevObjType !== objType) {
              // Hover out
              state["on".concat(prevObjType, "Hover")](null, prevObj.d);
            }

            if (objType) {
              // Hover in
              state["on".concat(objType, "Hover")](obj.d, prevObjType === objType ? prevObj.d : null);
            }

            var tooltipContent = obj ? index$2(state["".concat(obj.type.toLowerCase(), "Label")])(obj.d) || '' : '';
            toolTipElem.style.visibility = tooltipContent ? 'visible' : 'hidden';
            toolTipElem.innerHTML = tooltipContent;
            state.hoverObj = obj;
          }

          refreshShadowCanvas();
        } // Wipe canvas


        clearCanvas(ctx, state.width, state.height); // Frame cycle

        var globalScale = transform(state.canvas).k;
        state.onRenderFramePre && state.onRenderFramePre(ctx, globalScale);
        state.forceGraph.globalScale(globalScale).tickFrame();
        state.onRenderFramePost && state.onRenderFramePost(ctx, globalScale);
        TWEEN.update(); // update canvas animation tweens

        state.animationFrameRequestId = requestAnimationFrame(animate);
      })();
    },
    update: function updateFn(state) {}
  });

  var reactIs_development = createCommonjsModule(function (module, exports) {

    {
      (function () {
        // nor polyfill, then a plain number is used for performance.

        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

        function isValidElementType(type) {
          return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }

        function typeOf(object) {
          if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof;

            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;

                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;

                  default:
                    var $$typeofType = type && type.$$typeof;

                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;

                      default:
                        return $$typeof;
                    }

                }

              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }

          return undefined;
        } // AsyncMode is deprecated along with isAsyncMode


        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

              console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }

        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }

        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }

        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }

        function isElement(object) {
          return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }

        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }

        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }

        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }

        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }

        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }

        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }

        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }

        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }

        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  });

  var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_development;
    }
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */

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
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118


      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function () {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function (text) {
      var message = 'Warning: ' + text;

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */


  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error; // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.

          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
              err.name = 'Invariant Violation';
              throw err;
            }

            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }

          if (error && !(error instanceof Error)) {
            printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }

          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }
  /**
   * Resets warning cache when testing.
   *
   * @private
   */


  checkPropTypes.resetWarningCache = function () {
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;

  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  var printWarning$1 = function () {};

  {
    printWarning$1 = function (text) {
      var message = 'Warning: ' + text;

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */

    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }
    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */


    var ANONYMOUS = '<<anonymous>>'; // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */

    /*eslint-disable no-self-compare*/

    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */


    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    } // Make `instanceof Error` still work for returned errors.


    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }

      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if ( typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;

            if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }

        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }

            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }

          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }

        var propValue = props[propName];

        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }

        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
          } else {
            printWarning$1('Invalid argument supplied to oneOf, expected an array.');
          }
        }

        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);

          if (type === 'symbol') {
            return String(value);
          }

          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }

      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }

        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }

        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

            if (error instanceof Error) {
              return error;
            }
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
         printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (typeof checker !== 'function') {
          printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];

          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }

      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }

        for (var key in shapeTypes) {
          var checker = shapeTypes[key];

          if (!checker) {
            continue;
          }

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        } // We need to check all keys in case some are required but missing from
        // props.


        var allKeys = objectAssign({}, props[propName], shapeTypes);

        for (var key in allKeys) {
          var checker = shapeTypes[key];

          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;

        case 'boolean':
          return !propValue;

        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }

          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);

          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;

            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;

                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;

        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      } // falsy value can't be a Symbol


      if (!propValue) {
        return false;
      } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      } // Fallback for non-spec compliant Symbols which are polyfilled.


      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    } // Equivalent of `typeof` but with special handling for array and regexp.


    function getPropType(propValue) {
      var propType = typeof propValue;

      if (Array.isArray(propValue)) {
        return 'array';
      }

      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }

      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }

      return propType;
    } // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.


    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }

      var propType = getPropType(propValue);

      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }

      return propType;
    } // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"


    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);

      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;

        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;

        default:
          return type;
      }
    } // Returns class name of the object, if any.


    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }

      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod

      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
    }
  });

  const commonPropTypes = {
    width: propTypes.number,
    height: propTypes.number,
    graphData: propTypes.shape({
      nodes: propTypes.arrayOf(propTypes.object).isRequired,
      links: propTypes.arrayOf(propTypes.object).isRequired
    }),
    backgroundColor: propTypes.string,
    nodeRelSize: propTypes.number,
    nodeId: propTypes.string,
    nodeLabel: propTypes.oneOfType([propTypes.string, propTypes.func]),
    nodeVal: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    nodeVisibility: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.func]),
    nodeColor: propTypes.oneOfType([propTypes.string, propTypes.func]),
    nodeAutoColorBy: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkSource: propTypes.string,
    linkTarget: propTypes.string,
    linkLabel: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkVisibility: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.func]),
    linkHoverPrecision: propTypes.number,
    linkColor: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkAutoColorBy: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkWidth: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkCurvature: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalArrowLength: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalArrowColor: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkDirectionalArrowRelPos: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalParticles: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalParticleSpeed: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalParticleWidth: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkDirectionalParticleColor: propTypes.oneOfType([propTypes.string, propTypes.func]),
    dagMode: propTypes.oneOf(['td', 'bu', 'lr', 'rl', 'zin', 'zout', 'radialin', 'radialout']),
    dagLevelDistance: propTypes.number,
    dagNodeFilter: propTypes.func,
    onDagError: propTypes.func,
    d3AlphaMin: propTypes.number,
    d3AlphaDecay: propTypes.number,
    d3VelocityDecay: propTypes.number,
    warmupTicks: propTypes.number,
    cooldownTicks: propTypes.number,
    cooldownTime: propTypes.number,
    onEngineTick: propTypes.func,
    onEngineStop: propTypes.func,
    getGraphBbox: propTypes.func
  };
  const pointerBasedPropTypes = {
    zoomToFit: propTypes.func,
    onNodeClick: propTypes.func,
    onNodeRightClick: propTypes.func,
    onNodeHover: propTypes.func,
    onNodeDrag: propTypes.func,
    onNodeDragEnd: propTypes.func,
    onLinkClick: propTypes.func,
    onLinkRightClick: propTypes.func,
    onLinkHover: propTypes.func,
    onBackgroundClick: propTypes.func,
    onBackgroundRightClick: propTypes.func,
    enablePointerInteraction: propTypes.bool,
    enableNodeDrag: propTypes.bool
  };
  const threeBasedPropTypes = {
    showNavInfo: propTypes.bool,
    nodeOpacity: propTypes.number,
    nodeResolution: propTypes.number,
    nodeThreeObject: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func]),
    nodeThreeObjectExtend: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.func]),
    linkOpacity: propTypes.number,
    linkResolution: propTypes.number,
    linkCurveRotation: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
    linkMaterial: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func]),
    linkThreeObject: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func]),
    linkThreeObjectExtend: propTypes.oneOfType([propTypes.bool, propTypes.string, propTypes.func]),
    linkPositionUpdate: propTypes.func,
    linkDirectionalArrowResolution: propTypes.number,
    linkDirectionalParticleResolution: propTypes.number,
    forceEngine: propTypes.oneOf(['d3', 'ngraph']),
    ngraphPhysics: propTypes.object,
    numDimensions: propTypes.oneOf([1, 2, 3])
  };
  const ForceGraph2DPropTypes = Object.assign({}, commonPropTypes, pointerBasedPropTypes, {
    linkLineDash: propTypes.oneOfType([propTypes.arrayOf(propTypes.number), propTypes.string, propTypes.func]),
    nodeCanvasObject: propTypes.func,
    nodeCanvasObjectMode: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkCanvasObject: propTypes.func,
    linkCanvasObjectMode: propTypes.oneOfType([propTypes.string, propTypes.func]),
    enableZoomPanInteraction: propTypes.bool,
    onZoom: propTypes.func,
    onZoomEnd: propTypes.func,
    onRenderFramePre: propTypes.func,
    onRenderFramePost: propTypes.func
  });
  const ForceGraph3DPropTypes = Object.assign({}, commonPropTypes, pointerBasedPropTypes, threeBasedPropTypes, {
    enableNavigationControls: propTypes.bool,
    controlType: propTypes.oneOf(['trackball', 'orbit', 'fly']),
    rendererConfig: propTypes.object
  });
  const ForceGraphVRPropTypes = Object.assign({}, commonPropTypes, threeBasedPropTypes, {
    nodeDesc: propTypes.oneOfType([propTypes.string, propTypes.func]),
    linkDesc: propTypes.oneOfType([propTypes.string, propTypes.func]),
    onNodeCenterHover: propTypes.func,
    onLinkCenterHover: propTypes.func
  });
  const ForceGraphARPropTypes = Object.assign({}, commonPropTypes, threeBasedPropTypes, {
    markerAttrs: propTypes.object,
    yOffset: propTypes.number,
    glScale: propTypes.number,
    onNodeCenterHover: propTypes.func,
    onLinkCenterHover: propTypes.func
  });

  const ForceGraph2D = index(forceGraph, {
    methodNames: [// bind methods
    'emitParticle', 'd3Force', 'd3ReheatSimulation', 'stopAnimation', 'pauseAnimation', 'resumeAnimation', 'centerAt', 'zoom', 'zoomToFit', 'getGraphBbox', 'screen2GraphCoords', 'graph2ScreenCoords']
  });
  ForceGraph2D.displayName = 'ForceGraph2D';
  ForceGraph2D.propTypes = ForceGraph2DPropTypes;

  return ForceGraph2D;

})));
//# sourceMappingURL=react-force-graph-2d.js.map
