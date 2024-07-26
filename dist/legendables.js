(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Legendables = {}));
})(this, (function (exports) { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var h$1 = {};

  var vnode$2 = {};

  Object.defineProperty(vnode$2, "__esModule", { value: true });
  function vnode$1(sel, data, children, text, elm) {
      var key = data === undefined ? undefined : data.key;
      return { sel: sel, data: data, children: children,
          text: text, elm: elm, key: key };
  }
  vnode$2.vnode = vnode$1;
  vnode$2.default = vnode$1;

  var is$1 = {};

  Object.defineProperty(is$1, "__esModule", { value: true });
  is$1.array = Array.isArray;
  function primitive$1(s) {
      return typeof s === 'string' || typeof s === 'number';
  }
  is$1.primitive = primitive$1;

  Object.defineProperty(h$1, "__esModule", { value: true });
  var vnode_1 = vnode$2;
  var is = is$1;
  function addNS(data, children, sel) {
      data.ns = 'http://www.w3.org/2000/svg';
      if (sel !== 'foreignObject' && children !== undefined) {
          for (var i = 0; i < children.length; ++i) {
              var childData = children[i].data;
              if (childData !== undefined) {
                  addNS(childData, children[i].children, children[i].sel);
              }
          }
      }
  }
  function h(sel, b, c) {
      var data = {}, children, text, i;
      if (c !== undefined) {
          data = b;
          if (is.array(c)) {
              children = c;
          }
          else if (is.primitive(c)) {
              text = c;
          }
          else if (c && c.sel) {
              children = [c];
          }
      }
      else if (b !== undefined) {
          if (is.array(b)) {
              children = b;
          }
          else if (is.primitive(b)) {
              text = b;
          }
          else if (b && b.sel) {
              children = [b];
          }
          else {
              data = b;
          }
      }
      if (children !== undefined) {
          for (i = 0; i < children.length; ++i) {
              if (is.primitive(children[i]))
                  children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i], undefined);
          }
      }
      if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
          (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
          addNS(data, children, sel);
      }
      return vnode_1.vnode(sel, data, children, text, undefined);
  }
  h$1.h = h;
  var _default = h$1.default = h;

  function vnode(sel, data, children, text, elm) {
      var key = data === undefined ? undefined : data.key;
      return { sel: sel, data: data, children: children,
          text: text, elm: elm, key: key };
  }

  var array = Array.isArray;
  function primitive(s) {
      return typeof s === 'string' || typeof s === 'number';
  }

  function createElement(tagName) {
      return document.createElement(tagName);
  }
  function createElementNS(namespaceURI, qualifiedName) {
      return document.createElementNS(namespaceURI, qualifiedName);
  }
  function createTextNode(text) {
      return document.createTextNode(text);
  }
  function createComment(text) {
      return document.createComment(text);
  }
  function insertBefore(parentNode, newNode, referenceNode) {
      parentNode.insertBefore(newNode, referenceNode);
  }
  function removeChild(node, child) {
      node.removeChild(child);
  }
  function appendChild(node, child) {
      node.appendChild(child);
  }
  function parentNode(node) {
      return node.parentNode;
  }
  function nextSibling(node) {
      return node.nextSibling;
  }
  function tagName(elm) {
      return elm.tagName;
  }
  function setTextContent(node, text) {
      node.textContent = text;
  }
  function getTextContent(node) {
      return node.textContent;
  }
  function isElement(node) {
      return node.nodeType === 1;
  }
  function isText(node) {
      return node.nodeType === 3;
  }
  function isComment(node) {
      return node.nodeType === 8;
  }
  var htmlDomApi = {
      createElement: createElement,
      createElementNS: createElementNS,
      createTextNode: createTextNode,
      createComment: createComment,
      insertBefore: insertBefore,
      removeChild: removeChild,
      appendChild: appendChild,
      parentNode: parentNode,
      nextSibling: nextSibling,
      tagName: tagName,
      setTextContent: setTextContent,
      getTextContent: getTextContent,
      isElement: isElement,
      isText: isText,
      isComment: isComment,
  };

  function isUndef(s) { return s === undefined; }
  function isDef(s) { return s !== undefined; }
  var emptyNode = vnode('', {}, [], undefined, undefined);
  function sameVnode(vnode1, vnode2) {
      return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
  }
  function isVnode(vnode) {
      return vnode.sel !== undefined;
  }
  function createKeyToOldIdx(children, beginIdx, endIdx) {
      var i, map = {}, key, ch;
      for (i = beginIdx; i <= endIdx; ++i) {
          ch = children[i];
          if (ch != null) {
              key = ch.key;
              if (key !== undefined)
                  map[key] = i;
          }
      }
      return map;
  }
  var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
  function init(modules, domApi) {
      var i, j, cbs = {};
      var api = domApi !== undefined ? domApi : htmlDomApi;
      for (i = 0; i < hooks.length; ++i) {
          cbs[hooks[i]] = [];
          for (j = 0; j < modules.length; ++j) {
              var hook = modules[j][hooks[i]];
              if (hook !== undefined) {
                  cbs[hooks[i]].push(hook);
              }
          }
      }
      function emptyNodeAt(elm) {
          var id = elm.id ? '#' + elm.id : '';
          var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
          return vnode(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
      }
      function createRmCb(childElm, listeners) {
          return function rmCb() {
              if (--listeners === 0) {
                  var parent_1 = api.parentNode(childElm);
                  api.removeChild(parent_1, childElm);
              }
          };
      }
      function createElm(vnode, insertedVnodeQueue) {
          var i, data = vnode.data;
          if (data !== undefined) {
              if (isDef(i = data.hook) && isDef(i = i.init)) {
                  i(vnode);
                  data = vnode.data;
              }
          }
          var children = vnode.children, sel = vnode.sel;
          if (sel === '!') {
              if (isUndef(vnode.text)) {
                  vnode.text = '';
              }
              vnode.elm = api.createComment(vnode.text);
          }
          else if (sel !== undefined) {
              // Parse selector
              var hashIdx = sel.indexOf('#');
              var dotIdx = sel.indexOf('.', hashIdx);
              var hash = hashIdx > 0 ? hashIdx : sel.length;
              var dot = dotIdx > 0 ? dotIdx : sel.length;
              var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
              var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                  : api.createElement(tag);
              if (hash < dot)
                  elm.setAttribute('id', sel.slice(hash + 1, dot));
              if (dotIdx > 0)
                  elm.setAttribute('class', sel.slice(dot + 1).replace(/\./g, ' '));
              for (i = 0; i < cbs.create.length; ++i)
                  cbs.create[i](emptyNode, vnode);
              if (array(children)) {
                  for (i = 0; i < children.length; ++i) {
                      var ch = children[i];
                      if (ch != null) {
                          api.appendChild(elm, createElm(ch, insertedVnodeQueue));
                      }
                  }
              }
              else if (primitive(vnode.text)) {
                  api.appendChild(elm, api.createTextNode(vnode.text));
              }
              i = vnode.data.hook; // Reuse variable
              if (isDef(i)) {
                  if (i.create)
                      i.create(emptyNode, vnode);
                  if (i.insert)
                      insertedVnodeQueue.push(vnode);
              }
          }
          else {
              vnode.elm = api.createTextNode(vnode.text);
          }
          return vnode.elm;
      }
      function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
          for (; startIdx <= endIdx; ++startIdx) {
              var ch = vnodes[startIdx];
              if (ch != null) {
                  api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
              }
          }
      }
      function invokeDestroyHook(vnode) {
          var i, j, data = vnode.data;
          if (data !== undefined) {
              if (isDef(i = data.hook) && isDef(i = i.destroy))
                  i(vnode);
              for (i = 0; i < cbs.destroy.length; ++i)
                  cbs.destroy[i](vnode);
              if (vnode.children !== undefined) {
                  for (j = 0; j < vnode.children.length; ++j) {
                      i = vnode.children[j];
                      if (i != null && typeof i !== "string") {
                          invokeDestroyHook(i);
                      }
                  }
              }
          }
      }
      function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
          for (; startIdx <= endIdx; ++startIdx) {
              var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];
              if (ch != null) {
                  if (isDef(ch.sel)) {
                      invokeDestroyHook(ch);
                      listeners = cbs.remove.length + 1;
                      rm = createRmCb(ch.elm, listeners);
                      for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
                          cbs.remove[i_1](ch, rm);
                      if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
                          i_1(ch, rm);
                      }
                      else {
                          rm();
                      }
                  }
                  else {
                      api.removeChild(parentElm, ch.elm);
                  }
              }
          }
      }
      function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
          var oldStartIdx = 0, newStartIdx = 0;
          var oldEndIdx = oldCh.length - 1;
          var oldStartVnode = oldCh[0];
          var oldEndVnode = oldCh[oldEndIdx];
          var newEndIdx = newCh.length - 1;
          var newStartVnode = newCh[0];
          var newEndVnode = newCh[newEndIdx];
          var oldKeyToIdx;
          var idxInOld;
          var elmToMove;
          var before;
          while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
              if (oldStartVnode == null) {
                  oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
              }
              else if (oldEndVnode == null) {
                  oldEndVnode = oldCh[--oldEndIdx];
              }
              else if (newStartVnode == null) {
                  newStartVnode = newCh[++newStartIdx];
              }
              else if (newEndVnode == null) {
                  newEndVnode = newCh[--newEndIdx];
              }
              else if (sameVnode(oldStartVnode, newStartVnode)) {
                  patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                  oldStartVnode = oldCh[++oldStartIdx];
                  newStartVnode = newCh[++newStartIdx];
              }
              else if (sameVnode(oldEndVnode, newEndVnode)) {
                  patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                  oldEndVnode = oldCh[--oldEndIdx];
                  newEndVnode = newCh[--newEndIdx];
              }
              else if (sameVnode(oldStartVnode, newEndVnode)) {
                  patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                  api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                  oldStartVnode = oldCh[++oldStartIdx];
                  newEndVnode = newCh[--newEndIdx];
              }
              else if (sameVnode(oldEndVnode, newStartVnode)) {
                  patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                  api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                  oldEndVnode = oldCh[--oldEndIdx];
                  newStartVnode = newCh[++newStartIdx];
              }
              else {
                  if (oldKeyToIdx === undefined) {
                      oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                  }
                  idxInOld = oldKeyToIdx[newStartVnode.key];
                  if (isUndef(idxInOld)) {
                      api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                      newStartVnode = newCh[++newStartIdx];
                  }
                  else {
                      elmToMove = oldCh[idxInOld];
                      if (elmToMove.sel !== newStartVnode.sel) {
                          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                      }
                      else {
                          patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                          oldCh[idxInOld] = undefined;
                          api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                      }
                      newStartVnode = newCh[++newStartIdx];
                  }
              }
          }
          if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
              if (oldStartIdx > oldEndIdx) {
                  before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
                  addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
              }
              else {
                  removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
              }
          }
      }
      function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
          var i, hook;
          if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
              i(oldVnode, vnode);
          }
          var elm = vnode.elm = oldVnode.elm;
          var oldCh = oldVnode.children;
          var ch = vnode.children;
          if (oldVnode === vnode)
              return;
          if (vnode.data !== undefined) {
              for (i = 0; i < cbs.update.length; ++i)
                  cbs.update[i](oldVnode, vnode);
              i = vnode.data.hook;
              if (isDef(i) && isDef(i = i.update))
                  i(oldVnode, vnode);
          }
          if (isUndef(vnode.text)) {
              if (isDef(oldCh) && isDef(ch)) {
                  if (oldCh !== ch)
                      updateChildren(elm, oldCh, ch, insertedVnodeQueue);
              }
              else if (isDef(ch)) {
                  if (isDef(oldVnode.text))
                      api.setTextContent(elm, '');
                  addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
              }
              else if (isDef(oldCh)) {
                  removeVnodes(elm, oldCh, 0, oldCh.length - 1);
              }
              else if (isDef(oldVnode.text)) {
                  api.setTextContent(elm, '');
              }
          }
          else if (oldVnode.text !== vnode.text) {
              api.setTextContent(elm, vnode.text);
          }
          if (isDef(hook) && isDef(i = hook.postpatch)) {
              i(oldVnode, vnode);
          }
      }
      return function patch(oldVnode, vnode) {
          var i, elm, parent;
          var insertedVnodeQueue = [];
          for (i = 0; i < cbs.pre.length; ++i)
              cbs.pre[i]();
          if (!isVnode(oldVnode)) {
              oldVnode = emptyNodeAt(oldVnode);
          }
          if (sameVnode(oldVnode, vnode)) {
              patchVnode(oldVnode, vnode, insertedVnodeQueue);
          }
          else {
              elm = oldVnode.elm;
              parent = api.parentNode(elm);
              createElm(vnode, insertedVnodeQueue);
              if (parent !== null) {
                  api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                  removeVnodes(parent, [oldVnode], 0, 0);
              }
          }
          for (i = 0; i < insertedVnodeQueue.length; ++i) {
              insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
          }
          for (i = 0; i < cbs.post.length; ++i)
              cbs.post[i]();
          return vnode;
      };
  }

  var attributes = {};

  (function (exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var xlinkNS = 'http://www.w3.org/1999/xlink';
  var xmlNS = 'http://www.w3.org/XML/1998/namespace';
  var colonChar = 58;
  var xChar = 120;
  function updateAttrs(oldVnode, vnode) {
      var key, elm = vnode.elm, oldAttrs = oldVnode.data.attrs, attrs = vnode.data.attrs;
      if (!oldAttrs && !attrs)
          return;
      if (oldAttrs === attrs)
          return;
      oldAttrs = oldAttrs || {};
      attrs = attrs || {};
      // update modified attributes, add new attributes
      for (key in attrs) {
          var cur = attrs[key];
          var old = oldAttrs[key];
          if (old !== cur) {
              if (cur === true) {
                  elm.setAttribute(key, "");
              }
              else if (cur === false) {
                  elm.removeAttribute(key);
              }
              else {
                  if (key.charCodeAt(0) !== xChar) {
                      elm.setAttribute(key, cur);
                  }
                  else if (key.charCodeAt(3) === colonChar) {
                      // Assume xml namespace
                      elm.setAttributeNS(xmlNS, key, cur);
                  }
                  else if (key.charCodeAt(5) === colonChar) {
                      // Assume xlink namespace
                      elm.setAttributeNS(xlinkNS, key, cur);
                  }
                  else {
                      elm.setAttribute(key, cur);
                  }
              }
          }
      }
      // remove removed attributes
      // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
      // the other option is to remove all attributes with value == undefined
      for (key in oldAttrs) {
          if (!(key in attrs)) {
              elm.removeAttribute(key);
          }
      }
  }
  exports.attributesModule = { create: updateAttrs, update: updateAttrs };
  exports.default = exports.attributesModule;

  }(attributes));

  var attributesModule = /*@__PURE__*/getDefaultExportFromCjs(attributes);

  var _class = {};

  (function (exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function updateClass(oldVnode, vnode) {
      var cur, name, elm = vnode.elm, oldClass = oldVnode.data.class, klass = vnode.data.class;
      if (!oldClass && !klass)
          return;
      if (oldClass === klass)
          return;
      oldClass = oldClass || {};
      klass = klass || {};
      for (name in oldClass) {
          if (!klass[name]) {
              elm.classList.remove(name);
          }
      }
      for (name in klass) {
          cur = klass[name];
          if (cur !== oldClass[name]) {
              elm.classList[cur ? 'add' : 'remove'](name);
          }
      }
  }
  exports.classModule = { create: updateClass, update: updateClass };
  exports.default = exports.classModule;

  }(_class));

  var classModule = /*@__PURE__*/getDefaultExportFromCjs(_class);

  var props = {};

  (function (exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function updateProps(oldVnode, vnode) {
      var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
      if (!oldProps && !props)
          return;
      if (oldProps === props)
          return;
      oldProps = oldProps || {};
      props = props || {};
      for (key in oldProps) {
          if (!props[key]) {
              delete elm[key];
          }
      }
      for (key in props) {
          cur = props[key];
          old = oldProps[key];
          if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
              elm[key] = cur;
          }
      }
  }
  exports.propsModule = { create: updateProps, update: updateProps };
  exports.default = exports.propsModule;

  }(props));

  var propsModule = /*@__PURE__*/getDefaultExportFromCjs(props);

  var style = {};

  (function (exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
  var nextFrame = function (fn) { raf(function () { raf(fn); }); };
  var reflowForced = false;
  function setNextFrame(obj, prop, val) {
      nextFrame(function () { obj[prop] = val; });
  }
  function updateStyle(oldVnode, vnode) {
      var cur, name, elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;
      if (!oldStyle && !style)
          return;
      if (oldStyle === style)
          return;
      oldStyle = oldStyle || {};
      style = style || {};
      var oldHasDel = 'delayed' in oldStyle;
      for (name in oldStyle) {
          if (!style[name]) {
              if (name[0] === '-' && name[1] === '-') {
                  elm.style.removeProperty(name);
              }
              else {
                  elm.style[name] = '';
              }
          }
      }
      for (name in style) {
          cur = style[name];
          if (name === 'delayed' && style.delayed) {
              for (var name2 in style.delayed) {
                  cur = style.delayed[name2];
                  if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
                      setNextFrame(elm.style, name2, cur);
                  }
              }
          }
          else if (name !== 'remove' && cur !== oldStyle[name]) {
              if (name[0] === '-' && name[1] === '-') {
                  elm.style.setProperty(name, cur);
              }
              else {
                  elm.style[name] = cur;
              }
          }
      }
  }
  function applyDestroyStyle(vnode) {
      var style, name, elm = vnode.elm, s = vnode.data.style;
      if (!s || !(style = s.destroy))
          return;
      for (name in style) {
          elm.style[name] = style[name];
      }
  }
  function applyRemoveStyle(vnode, rm) {
      var s = vnode.data.style;
      if (!s || !s.remove) {
          rm();
          return;
      }
      if (!reflowForced) {
          getComputedStyle(document.body).transform;
          reflowForced = true;
      }
      var name, elm = vnode.elm, i = 0, compStyle, style = s.remove, amount = 0, applied = [];
      for (name in style) {
          applied.push(name);
          elm.style[name] = style[name];
      }
      compStyle = getComputedStyle(elm);
      var props = compStyle['transition-property'].split(', ');
      for (; i < props.length; ++i) {
          if (applied.indexOf(props[i]) !== -1)
              amount++;
      }
      elm.addEventListener('transitionend', function (ev) {
          if (ev.target === elm)
              --amount;
          if (amount === 0)
              rm();
      });
  }
  function forceReflow() {
      reflowForced = false;
  }
  exports.styleModule = {
      pre: forceReflow,
      create: updateStyle,
      update: updateStyle,
      destroy: applyDestroyStyle,
      remove: applyRemoveStyle
  };
  exports.default = exports.styleModule;

  }(style));

  var styleModule = /*@__PURE__*/getDefaultExportFromCjs(style);

  var eventlisteners = {};

  (function (exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function invokeHandler(handler, vnode, event) {
      if (typeof handler === "function") {
          // call function handler
          handler.call(vnode, event, vnode);
      }
      else if (typeof handler === "object") {
          // call handler with arguments
          if (typeof handler[0] === "function") {
              // special case for single argument for performance
              if (handler.length === 2) {
                  handler[0].call(vnode, handler[1], event, vnode);
              }
              else {
                  var args = handler.slice(1);
                  args.push(event);
                  args.push(vnode);
                  handler[0].apply(vnode, args);
              }
          }
          else {
              // call multiple handlers
              for (var i = 0; i < handler.length; i++) {
                  invokeHandler(handler[i]);
              }
          }
      }
  }
  function handleEvent(event, vnode) {
      var name = event.type, on = vnode.data.on;
      // call event handler(s) if exists
      if (on && on[name]) {
          invokeHandler(on[name], vnode, event);
      }
  }
  function createListener() {
      return function handler(event) {
          handleEvent(event, handler.vnode);
      };
  }
  function updateEventListeners(oldVnode, vnode) {
      var oldOn = oldVnode.data.on, oldListener = oldVnode.listener, oldElm = oldVnode.elm, on = vnode && vnode.data.on, elm = (vnode && vnode.elm), name;
      // optimization for reused immutable handlers
      if (oldOn === on) {
          return;
      }
      // remove existing listeners which no longer used
      if (oldOn && oldListener) {
          // if element changed or deleted we remove all existing listeners unconditionally
          if (!on) {
              for (name in oldOn) {
                  // remove listener if element was changed or existing listeners removed
                  oldElm.removeEventListener(name, oldListener, false);
              }
          }
          else {
              for (name in oldOn) {
                  // remove listener if existing listener removed
                  if (!on[name]) {
                      oldElm.removeEventListener(name, oldListener, false);
                  }
              }
          }
      }
      // add new listeners which has not already attached
      if (on) {
          // reuse existing listener or create new
          var listener = vnode.listener = oldVnode.listener || createListener();
          // update vnode for listener
          listener.vnode = vnode;
          // if element changed or added we add all needed listeners unconditionally
          if (!oldOn) {
              for (name in on) {
                  // add listener if element was changed or new listeners added
                  elm.addEventListener(name, listener, false);
              }
          }
          else {
              for (name in on) {
                  // add listener if new listener added
                  if (!oldOn[name]) {
                      elm.addEventListener(name, listener, false);
                  }
              }
          }
      }
  }
  exports.eventListenersModule = {
      create: updateEventListeners,
      update: updateEventListeners,
      destroy: updateEventListeners
  };
  exports.default = exports.eventListenersModule;

  }(eventlisteners));

  var eventlistenersModule = /*@__PURE__*/getDefaultExportFromCjs(eventlisteners);

  var patch = init([classModule, propsModule, styleModule, attributesModule, eventlistenersModule]);

  var noop = {value: function() {}};

  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }

  function Dispatch(_) {
    this._ = _;
  }

  function parseTypenames(typenames, types) {
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
          T = parseTypenames(typename + "", _),
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

  // Computes the decimal coefficient and exponent of the specified number x with
  // significant digits p, where x is positive and p is in [1, 21] or undefined.
  // For example, formatDecimal(1.23) returns ["123", 0].
  function formatDecimal(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);

    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x.slice(i + 1)
    ];
  }

  function exponent(x) {
    return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
  }

  function formatGroup(grouping, thousands) {
    return function(value, width) {
      var i = value.length,
          t = [],
          j = 0,
          g = grouping[0],
          length = 0;

      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = grouping[j = (j + 1) % grouping.length];
      }

      return t.reverse().join(thousands);
    };
  }

  function formatNumerals(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  }

  // [[fill]align][sign][symbol][0][width][,][.precision][~][type]
  var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

  function formatSpecifier(specifier) {
    return new FormatSpecifier(specifier);
  }

  formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

  function FormatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    this.fill = match[1] || " ";
    this.align = match[2] || ">";
    this.sign = match[3] || "-";
    this.symbol = match[4] || "";
    this.zero = !!match[5];
    this.width = match[6] && +match[6];
    this.comma = !!match[7];
    this.precision = match[8] && +match[8].slice(1);
    this.trim = !!match[9];
    this.type = match[10] || "";
  }

  FormatSpecifier.prototype.toString = function() {
    return this.fill
        + this.align
        + this.sign
        + this.symbol
        + (this.zero ? "0" : "")
        + (this.width == null ? "" : Math.max(1, this.width | 0))
        + (this.comma ? "," : "")
        + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
        + (this.trim ? "~" : "")
        + this.type;
  };

  // Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
  function formatTrim(s) {
    out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".": i0 = i1 = i; break;
        case "0": if (i0 === 0) i0 = i; i1 = i; break;
        default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
      }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
  }

  var prefixExponent;

  function formatPrefixAuto(x, p) {
    var d = formatDecimal(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1],
        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
        n = coefficient.length;
    return i === n ? coefficient
        : i > n ? coefficient + new Array(i - n + 1).join("0")
        : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
        : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
  }

  function formatRounded(x, p) {
    var d = formatDecimal(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
        : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }

  var formatTypes = {
    "%": function(x, p) { return (x * 100).toFixed(p); },
    "b": function(x) { return Math.round(x).toString(2); },
    "c": function(x) { return x + ""; },
    "d": function(x) { return Math.round(x).toString(10); },
    "e": function(x, p) { return x.toExponential(p); },
    "f": function(x, p) { return x.toFixed(p); },
    "g": function(x, p) { return x.toPrecision(p); },
    "o": function(x) { return Math.round(x).toString(8); },
    "p": function(x, p) { return formatRounded(x * 100, p); },
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
    "x": function(x) { return Math.round(x).toString(16); }
  };

  function identity(x) {
    return x;
  }

  var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

  function formatLocale(locale) {
    var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity,
        currency = locale.currency,
        decimal = locale.decimal,
        numerals = locale.numerals ? formatNumerals(locale.numerals) : identity,
        percent = locale.percent || "%";

    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);

      var fill = specifier.fill,
          align = specifier.align,
          sign = specifier.sign,
          symbol = specifier.symbol,
          zero = specifier.zero,
          width = specifier.width,
          comma = specifier.comma,
          precision = specifier.precision,
          trim = specifier.trim,
          type = specifier.type;

      // The "n" type is an alias for ",g".
      if (type === "n") comma = true, type = "g";

      // The "" type, and any invalid type, is an alias for ".12~g".
      else if (!formatTypes[type]) precision == null && (precision = 12), trim = true, type = "g";

      // If zero fill is specified, padding goes after sign and before digits.
      if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

      // Compute the prefix and suffix.
      // For SI-prefix, the suffix is lazily computed.
      var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
          suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

      // What format function should we use?
      // Is this an integer type?
      // Can this type generate exponential notation?
      var formatType = formatTypes[type],
          maybeSuffix = /[defgprs%]/.test(type);

      // Set the default precision if not specified,
      // or clamp the specified precision to the supported range.
      // For significant precision, it must be in [1, 21].
      // For fixed precision, it must be in [0, 20].
      precision = precision == null ? 6
          : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
          : Math.max(0, Math.min(20, precision));

      function format(value) {
        var valuePrefix = prefix,
            valueSuffix = suffix,
            i, n, c;

        if (type === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;

          // Perform the initial formatting.
          var valueNegative = value < 0;
          value = formatType(Math.abs(value), precision);

          // Trim insignificant zeros.
          if (trim) value = formatTrim(value);

          // If a negative value rounds to zero during formatting, treat as positive.
          if (valueNegative && +value === 0) valueNegative = false;

          // Compute the prefix and suffix.
          valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
          valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

          // Break the formatted value into the integer “value” part that can be
          // grouped, and fractional or exponential “suffix” part that is not.
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c = value.charCodeAt(i), 48 > c || c > 57) {
                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }

        // If the fill character is not "0", grouping is applied before padding.
        if (comma && !zero) value = group(value, Infinity);

        // Compute the padding.
        var length = valuePrefix.length + value.length + valueSuffix.length,
            padding = length < width ? new Array(width - length + 1).join(fill) : "";

        // If the fill character is "0", grouping is applied after padding.
        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

        // Reconstruct the final output based on the desired alignment.
        switch (align) {
          case "<": value = valuePrefix + value + valueSuffix + padding; break;
          case "=": value = valuePrefix + padding + value + valueSuffix; break;
          case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
          default: value = padding + valuePrefix + value + valueSuffix; break;
        }

        return numerals(value);
      }

      format.toString = function() {
        return specifier + "";
      };

      return format;
    }

    function formatPrefix(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
          e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
          k = Math.pow(10, -e),
          prefix = prefixes[8 + e / 3];
      return function(value) {
        return f(k * value) + prefix;
      };
    }

    return {
      format: newFormat,
      formatPrefix: formatPrefix
    };
  }

  var locale;
  var format;

  defaultLocale({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });

  function defaultLocale(definition) {
    locale = formatLocale(definition);
    format = locale.format;
    locale.formatPrefix;
    return locale;
  }

  var commafy = function commafy(d) {
    return typeof d === "number" ? format(",")(parseFloat(d.toFixed(2))) : d;
  };
  var formatNumber = function formatNumber(d) {
    if (String(d).length <= 4) {
      return commafy(d);
    } else if (d < 0.0001) {
      return format(".2")(d);
    } else {
      return format(".2s")(d);
    }
  };
  function rangeStep(domain, index) {
    var bins = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 9;
    if (index === 0) {
      return domain[0];
    } else if (index + 1 === bins) {
      return domain[1];
    } else {
      var increment = (domain[1] - domain[0]) / bins;
      return domain[0] + increment * index;
    }
  }
  function validateNumericalInput(previousValue, nextValue) {
    if (isNaN(parseFloat(nextValue))) {
      return parseFloat(previousValue);
    } else {
      return parseFloat(nextValue);
    }
  }
  function renderTickIcon(state, dispatch) {
    var _this = this;
    return _default("div.tick", {
      on: {
        click: function click() {
          return dispatch.call("open", _this, state.index);
        }
      }
    });
  }
  function renderToggleIcon(state, dispatch) {
    var _this2 = this;
    return _default("div.open-toggle", {
      on: {
        click: function click() {
          dispatch.call("toggle", _this2, state);
        }
      }
    });
  }
  function renderLockIcon(locked, index, dispatch) {
    var _this3 = this;
    return _default("div.lock".concat(locked ? ".locked" : ".unlocked"), {
      on: {
        click: function click() {
          return dispatch.call("lock", _this3, {
            locked: locked,
            index: index
          });
        }
      }
    }, [_default("svg", {
      attrs: {
        viewBox: [0, 0, 48, 48]
      }
    }, [_default("g", {
      style: {
        stroke: "white"
      }
    }, [_default("path", {
      attrs: {
        d: locked ? "M34,20v-4c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10v4H8v20h32V20H34z M18,16c0-3.3,2.7-6,6-6s6,2.7,6,6v4H18V16z" : "M18,20v-8c0-3.3,2.7-6,6-6s6,2.7,6,6v2h4v-2c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10v8H8v20h32V20H18z"
      }
    })])])]);
  }
  function renderSortIcon(state, dispatch) {
    var _this4 = this;
    return _default("div.sort", {
      on: {
        click: function click() {
          return dispatch.call("sort", _this4, state.index);
        }
      }
    }, [_default("svg", {
      attrs: {
        width: 22,
        height: 10,
        viewBox: "0 0 22 12",
        "class": "sort-icon"
      }
    }, [_default("svg", {
      attrs: {
        viewBox: "0 0 512 512",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [_default("g", {}, [_default("g", {}, [_default("path", {
      attrs: {
        d: "M261.294,326.102c-8.3-7.3-21.8-6.2-29.1,2.1l-77,86.8v-346.9c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v346.9l-77-86.8c-8.3-8.3-20.8-9.4-29.1-2.1c-8.3,8.3-9.4,20.8-2.1,29.1l113.4,126.9c8.5,10.5,23.5,8.9,30.2,0l114.4-126.9C270.694,347.002,269.694,333.402,261.294,326.102z"
      }
    }), _default("path", {
      attrs: {
        d: "M483.994,134.702l-112.4-126.9c-10-10.1-22.5-10.7-31.2,0l-114.4,126.9c-7.3,8.3-6.2,21.8,2.1,29.1c12.8,10.2,25.7,3.2,29.1-2.1l77-86.8v345.9c0,11.4,9.4,20.8,20.8,20.8s20.8-8.3,20.8-19.8v-346.8l77,86.8c8.3,8.3,20.8,9.4,29.1,2.1C490.194,155.502,491.294,143.002,483.994,134.702z"
      }
    })])])])])]);
  }
  function renderInput(state, domain, dispatch) {
    var _this5 = this;
    return _default("input", {
      hook: {
        update: function update(prevNode, nextNode) {
          nextNode.elm.value = domain.value;
        }
      },
      props: {
        value: domain.value
      },
      on: {
        focus: function focus(e) {
          e.target.select();
        },
        blur: function blur(e) {
          var value = validateNumericalInput(domain.value, e.target.value);
          var _state$domain = _slicedToArray(state.domain, 2),
            min = _state$domain[0],
            max = _state$domain[1];
          dispatch.call("input", _this5, {
            index: state.index,
            domain: domain.index === 0 ? [value, max] : [min, value]
          });
        },
        keydown: function keydown(e) {
          if (e.code === "Enter") {
            e.target.blur();
          }
        }
      }
    });
  }
  function renderGradientLegend(state, dispatch) {
    var stacked = typeof state.index === "number";
    return _default("div.legend.gradient-legend".concat(stacked ? ".with-header" : ".legendables").concat(state.open ? ".open" : ".collapsed").concat(state.position ? ".".concat(state.position) : ""), [stacked ? _default("div.header", [_default("div.title-text", state.title), renderTickIcon(state, dispatch)]) : _default("div"), state.open ? _default("div.range", _toConsumableArray(state.range.map(function (color, index) {
      var isMinMax = index === 0 || index === state.range.length - 1;
      var step = Array.isArray(state.domain) ? formatNumber(rangeStep(state.domain, index, state.range.length)) : null;
      var domain = Array.isArray(state.domain) ? state.domain : [null, null];
      var _domain = _slicedToArray(domain, 2);
        _domain[0];
        _domain[1];
      return _default("div.block", [_default("div.color", {
        style: {
          background: color
        }
      }), _default("div.text.".concat(isMinMax ? "extent" : "step"), [_default("span", "".concat(domain.length > 2 ? domain[index] : step))].concat(isMinMax ? [renderInput(state, {
        value: domain.length === 2 ? domain[index === 0 ? 0 : 1] : domain[index],
        index: index
      }, dispatch)] : []))]);
    }))) : _default("div"), state.open ? renderLockIcon(state.locked, state.index, dispatch) : _default("div")]);
  }
  function renderNominalLegend(state, dispatch) {
    var _this6 = this;
    var stacked = typeof state.index === "number";
    return _default("div.legend.nominal-legend".concat(stacked ? "" : ".legendables").concat(state.open ? ".open" : ".collapsed").concat(state.position ? ".".concat(state.position) : ""), [!stacked ? renderToggleIcon(state, dispatch) : _default("div"), state.title && _default("div.header", [_default("div.title-text", state.title), renderSortIcon(state, dispatch), renderTickIcon(state, dispatch)]), state.open ? _default("div.body", state.domain.map(function (value, index) {
      return _default("div.legend-row", {
        on: {
          click: function click() {
            return dispatch.call("filter", _this6, value);
          }
        }
      }, [_default("div.color", {
        style: {
          background: state.range[index]
        }
      }), _default("div.text", "".concat(value))]);
    })) : _default("div")]);
  }
  function renderStackedLegend(state, dispatch) {
    return _default("div.legendables".concat(state.open ? ".open" : ".collapsed").concat(state.list.length > 1 ? ".show-ticks" : ""), {
      style: {
        maxHeight: "".concat(state.maxHeight, "px")
      }
    }, [renderToggleIcon(state, dispatch)].concat(state.list.map(function (legend, index) {
      if (legend.type === "gradient") {
        return renderGradientLegend(_objectSpread2(_objectSpread2({}, legend), {}, {
          index: index
        }), dispatch);
      } else if (legend.type === "nominal") {
        return renderNominalLegend(_objectSpread2(_objectSpread2({}, legend), {}, {
          index: index
        }), dispatch);
      }
    })));
  }
  var Legend = /*#__PURE__*/function () {
    function Legend(node) {
      _classCallCheck(this, Legend);
      Legend.prototype.__init.call(this);
      this.node = node;
      this.dispatch = dispatch("filter", "input", "open", "lock", "toggle", "doneRender", "sort");
      this.state = null;
    }
    return _createClass(Legend, [{
      key: "on",
      value: function on(event, callback) {
        this.dispatch.on(event, callback);
      }
    }, {
      key: "__init",
      value: function __init() {
        var _this7 = this;
        this.setState = function (state) {
          if (typeof state === "function") {
            _this7.state = state(_this7.state);
          } else {
            _this7.state = state;
          }
          var vnode;
          if (_this7.state.type === "gradient") {
            vnode = renderGradientLegend(_this7.state, _this7.dispatch);
          } else if (_this7.state.type === "nominal") {
            vnode = renderNominalLegend(_this7.state, _this7.dispatch);
          } else if (_this7.state.type === "stacked") {
            vnode = renderStackedLegend(_this7.state, _this7.dispatch);
          } else {
            vnode = _default("div");
          }
          _this7.node = patch(_this7.node, vnode);
          _this7.dispatch.call("doneRender", _this7, state);
          return _this7.node;
        };
      }
    }]);
  }();

  exports.Legend = Legend;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
