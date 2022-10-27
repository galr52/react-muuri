/**
* Muuri-react v3.1.6
* https://paol-imi.github.io/muuri-react
* Copyright (c) 2020-present, Paol-imi
* Released under the MIT license
* https://github.com/Paol-imi/muuri-react/blob/master/LICENSE
* @license MIT
*/

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Muuri = require('muuri');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _extends = require('@babel/runtime/helpers/extends');
var _typeof = require('@babel/runtime/helpers/typeof');
var React = require('react');
var PropTypes = require('prop-types');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _inherits = require('@babel/runtime/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');
var _wrapNativeSuper = require('@babel/runtime/helpers/wrapNativeSuper');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Muuri__default = /*#__PURE__*/_interopDefaultLegacy(Muuri);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
var _wrapNativeSuper__default = /*#__PURE__*/_interopDefaultLegacy(_wrapNativeSuper);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);

var key = '_component';

/**
 * Return if the instance is decorated.
 *
 * @param instance - The instance.
 * @returns - If the instance is decorated.
 */
function isDecorated(instance) {
  return !!instance[key];
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Add a decoration to the instance.
 *
 * @param instance - The instance to decorate.
 * @param decoration - The decoration.
 */
function addDecoration(instance, decoration) {
  if (isDecorated(instance)) {
    Object.assign(instance[key], decoration);
  } else {
    instance[key] = _objectSpread$2({}, decoration);
  }
}

/**
 * Add a decoration to the instance.
 *
 * @param instance - The instance to decorate.
 * @param decoration - The decoration.
 */
function getDecoration(instance) {
  return instance[key];
}

/**
 * Remove the decoration from the instance.
 *
 * @param decorated - The instance.
 */
function removeDecorations(decorated) {
  decorated._component = null;
}

/**
 * Muuri id getter.
 *
 * @returns - The id of the instance.
 */
Muuri__default["default"].prototype.getId = function getId() {
  return getDecoration(this).id;
};
/**
 * Muuri group ids getter.
 *
 * @returns - The group ids of the instance.
 */
Muuri__default["default"].prototype.getGroupIds = function getGroupIds() {
  return getDecoration(this).groupIds;
};
/**
 * Muuri size element getter.
 *
 * @returns - The group ids of the instance.
 */
Muuri__default["default"].prototype.getSizerElement = function getSizerElement() {
  return getDecoration(this).sizerElement;
};

/**
 * Item key getter.
 *
 * @returns - The item component key.
 */
Muuri__default["default"].Item.prototype.getKey = function getKey() {
  return getDecoration(this).key;
};
/**
 * Item props getter.
 *
 * @returns - The item component props.
 */
Muuri__default["default"].Item.prototype.getProps = function getProps() {
  return getDecoration(this).props;
};
/**
 * Item data getter.
 *
 * @returns - The item component data.
 */
Muuri__default["default"].Item.prototype.getData = function getData() {
  return getDecoration(this).data;
};
/**
 * Item data setter.
 *
 * @param data - The data.
 */
Muuri__default["default"].Item.prototype.setData = function setData(data) {
  getDecoration(this).data = data;
};

// Grid context.
var GridContext = /*#__PURE__*/React.createContext({});
// Grid provider.
var GridProvider = GridContext.Provider;
// Grid context hook.
var useGridContext = function useGridContext() {
  return React.useContext(GridContext);
};
// Grid provider display name.
GridContext.displayName = 'GridProvider';

// Item context.
var ItemContext = /*#__PURE__*/React.createContext({});
// Item provider.
var ItemProvider = ItemContext.Provider;
// Item context hook.
var useItemContext = function useItemContext() {
  return React.useContext(ItemContext);
};
// Item provider display name.
ItemContext.displayName = 'ItemProvider';

/**
 * CONTROLLER: ITEM
 *
 * The purpose of this controller is to manage the
 * events trigger to the specific item the controller is assigned to.
 * This controllers is used by the hooks to re-render the components.
 */
var EventController = /*#__PURE__*/function () {
  function EventController() {
    _classCallCheck__default["default"](this, EventController);
    _defineProperty__default["default"](this, "_eventsMap", new Map());
    _defineProperty__default["default"](this, "_payloadsMap", new Map());
  }
  _createClass__default["default"](EventController, [{
    key: "enableEvent",
    value:
    /**
     * Enable an event, it can be emitted.
     *
     * @param event - The event name.
     * @param emitter - The callback.
     */
    function enableEvent(event, emitter) {
      this._eventsMap.set(event, emitter);
    }

    /**
     * Set an event payload and emit it the event.
     *
     * @param event - The event name.
     * @param payload - The payload.
     */
  }, {
    key: "emitEvent",
    value: function emitEvent(event, payload) {
      if (this.isEnabled(event)) {
        this._payloadsMap.set(event, payload);
        // @ts-ignore
        this._eventsMap.get(event)();
      }
    }

    /**
     * Get the payload of the event.
     *
     * @param event - The event.
     * @returns - The payload.
     */
  }, {
    key: "getPayload",
    value: function getPayload(event) {
      return this._payloadsMap.get(event);
    }

    /**
     * Returns if at least an event is enabled.
     *
     * @param event - The event.
     * @returns - If at least an event is enabled.
     */
  }, {
    key: "isEnabled",
    value: function isEnabled(event) {
      return this._eventsMap.has(event);
    }

    /**
     * Destroy the instance.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this._eventsMap.clear();
      this._payloadsMap.clear();
    }
  }]);
  return EventController;
}();

/**
 * CONTROLLER: GRID -> ITEM
 *
 * The purpose of this controller is to pass to the
 * ItemComponents the items instances.
 * This can be done without knowing the added items and
 * relying only on the useEffect call order of the added items.
 */
var ItemAddController = /*#__PURE__*/function () {
  function ItemAddController() {
    _classCallCheck__default["default"](this, ItemAddController);
    _defineProperty__default["default"](this, "_requests", []);
  }
  _createClass__default["default"](ItemAddController, [{
    key: "useInit",
    value:
    /**
     * Clear the requests.
     */
    function useInit() {
      this._requests = [];
    }

    /**
     * Emit the new items to the
     * components that made a request.
     *
     * @param items - The items.
     */
  }, {
    key: "emit",
    value: function emit(items) {
      for (var i = 0; i < this._requests.length; i++) {
        this._requests[i](items[i]);
      }
    }

    /**
     * Request an item.
     *
     * @param cb - The callback.
     */
  }, {
    key: "requestItem",
    value: function requestItem(cb) {
      this._requests.push(cb);
    }

    /**
     * Destroy the instance.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this._requests = [];
    }
  }]);
  return ItemAddController;
}();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var isProduction = process.env.NODE_ENV === 'production';
var prefix = 'Invariant failed';

// Invarianto instance
var Invariant = /*#__PURE__*/function (_Error) {
  _inherits__default["default"](Invariant, _Error);
  var _super = _createSuper(Invariant);
  function Invariant(message) {
    var _this;
    _classCallCheck__default["default"](this, Invariant);
    _this = _super.call(this, message);
    _this.name = 'Invariant';
    return _this;
  }
  return _createClass__default["default"](Invariant);
}( /*#__PURE__*/_wrapNativeSuper__default["default"](Error));

// Throw an error if the condition fails
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    // In production we strip the message but still throw
    throw new Invariant(prefix);
  } else {
    // When not in production we allow the message to pass through
    // *This block will be removed in production builds*
    throw new Invariant("".concat(prefix, ": ").concat(message || ''));
  }
}

/*
 * CONTROLLER: ITEM
 *
 * The purpose of this controller is to make possible
 * to set data in the item also if
 * it has not been created yet.
 */
var ItemRefController = /*#__PURE__*/function () {
  function ItemRefController() {
    _classCallCheck__default["default"](this, ItemRefController);
    _defineProperty__default["default"](this, "_item", null);
    _defineProperty__default["default"](this, "_instance", {});
  }
  _createClass__default["default"](ItemRefController, [{
    key: "set",
    value:
    /**
     * Set a decoration in the item.
     *
     * @param key - The decoration key.
     * @param value - The decoration.
     */
    function set(key, value) {
      if (this._item) {
        addDecoration(this._item, _defineProperty__default["default"]({}, key, value));
      } else {
        this._instance[key] = value;
      }
    }

    /**
     * Get a decoration value from the item.
     *
     * @param key - The decoration key.
     * @returns - The decoration value.
     */
  }, {
    key: "get",
    value: function get(key) {
      if (this._item) {
        return getDecoration(this._item)[key];
      } else {
        return this._instance[key];
      }
    }

    /**
     * Remove all the decorations from the item.
     */
  }, {
    key: "delete",
    value: function _delete() {
      if (this._item) removeDecorations(this._item);
    }

    /**
     * Set the item in the controller.
     *
     * @param item - The item.
     */
  }, {
    key: "setItem",
    value: function setItem(item) {
      this._item = item;
      addDecoration(this._item, this._instance);
      this._instance = {};
    }

    /**
     * Item getter.
     *
     * @returns - The item.
     */
  }, {
    key: "getItem",
    value: function getItem() {
      invariant(this._item !== null, 'The item has not been setted yet');
      return this._item;
    }

    /**
     * Returns if the item has been setted.
     *
     * @returns - If the item has been setted.
     */
  }, {
    key: "hasItem",
    value: function hasItem() {
      return this._item !== null;
    }

    /**
     * Destroy the instance.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this._item = null;
      this._instance = {};
    }
  }]);
  return ItemRefController;
}();

/**
 * CONTROLLER: GRID -> ITEM
 *
 * The purpose of this controller is to find the items to remove
 * based only on the unmount of the ItemComponents.
 */
var ItemRemoveController = /*#__PURE__*/function () {
  function ItemRemoveController() {
    _classCallCheck__default["default"](this, ItemRemoveController);
    _defineProperty__default["default"](this, "_itemsToRemove", []);
  }
  _createClass__default["default"](ItemRemoveController, [{
    key: "useInit",
    value:
    /**
     * Initialize.
     */
    function useInit() {
      this._itemsToRemove = [];
    }

    /**
     * Request an item to be removed.
     *
     * @param item - The item to be removed.
     */
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      this._itemsToRemove.push(item);
    }

    /**
     * Return all the items to remove.
     */
  }, {
    key: "getItemsToRemove",
    value: function getItemsToRemove() {
      return this._itemsToRemove;
    }

    /**
     * Destroy the instance.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this._itemsToRemove = [];
    }
  }]);
  return ItemRemoveController;
}();

/**
 * CONTROLLER: GRID -> ITEMCONTEXT
 *
 * The purpose of this controller is to synchronize the calculation
 * of the layout following changes that have occurred within an item.
 * If the GridComponent is re-rendering allow to calculate a
 * single layout and greatly optimize the performance.
 */
var LayoutController = /*#__PURE__*/function () {
  /** The items to refresh. */

  /** The items to show. */

  /** The items to hide. */

  /** If the MuuriComponent parent is rendering. */

  /** Constructor. */
  function LayoutController() {
    _classCallCheck__default["default"](this, LayoutController);
    _defineProperty__default["default"](this, "_itemsToRefresh", void 0);
    _defineProperty__default["default"](this, "_itemsToShow", void 0);
    _defineProperty__default["default"](this, "_itemsToHide", void 0);
    _defineProperty__default["default"](this, "_isRendering", void 0);
    this._itemsToRefresh = [];
    this._itemsToShow = [];
    this._itemsToHide = [];
    this._isRendering = false;
  }

  /**
   * Init.
   */
  _createClass__default["default"](LayoutController, [{
    key: "useInit",
    value: function useInit() {
      var _this = this;
      // Items.
      this._itemsToRefresh = [];
      this._itemsToShow = [];
      this._itemsToHide = [];
      // State.
      this._isRendering = true;
      // Change state.
      // eslint-disable-next-line
      React.useEffect(function () {
        _this._isRendering = false;
      });
    }

    /**
     * Refresh an item.
     *
     * @param item - The item to refresh.
     */
  }, {
    key: "refreshItem",
    value: function refreshItem(item) {
      // If the component is rendering within the MuuriComponent.
      if (this._isRendering) {
        // The layout is managed by the MuuriComponent
        // (Performance purpose).
        this._itemsToRefresh.push(item);
      } else {
        // If the item is changing parent this
        // will get the right parent.
        var grid = item.getGrid();
        // The layout is managed here.
        grid.refreshItems([item]);
        grid.layout();
      }
    }

    /**
     * Set an item visibility.
     *
     * @param item - The item.
     * @param visible - The visibility.
     * @param instant - If the visibility change should happen without animations.
     */
  }, {
    key: "setItemVisibility",
    value: function setItemVisibility(item, visible, instant) {
      // If the component is rendering within the MuuriComponent.
      if (this._isRendering) {
        // The layout is managed by the MuuriComponent
        // (Performance purpose).
        if (visible) this._itemsToShow.push(item);else this._itemsToHide.push(item);
      } else {
        // If the item is changing parent this
        // will get the right parent.
        var grid = item.getGrid();
        // The layout is managed here.
        if (visible) grid.show([item], {
          instant: instant
        });else grid.hide([item], {
          instant: instant
        });
      }
    }

    /**
     * Get the items that have to be refreshed.
     *
     * @returns - The items.
     */
  }, {
    key: "getItemsToRefresh",
    value: function getItemsToRefresh() {
      return this._itemsToRefresh;
    }

    /**
     * Get the items that have to be shown.
     *
     * @returns - The items.
     */
  }, {
    key: "getItemsToShow",
    value: function getItemsToShow() {
      return this._itemsToShow;
    }

    /**
     * Get the items that have to be hidden.
     *
     * @returns - The items.
     */
  }, {
    key: "getItemsToHide",
    value: function getItemsToHide() {
      return this._itemsToHide;
    }

    /**
     * Destroy the instance.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this._itemsToRefresh = [];
      this._itemsToShow = [];
      this._itemsToHide = [];
    }
  }]);
  return LayoutController;
}();

/**
 * CONTROLLER: GRID
 *
 * The purpose of this controller is to manage the fiber node of the GridElements.
 * The Fiber nodes allow to manage reparenting and easily access new added items elements.
 */
var FiberController = /*#__PURE__*/function () {
  function FiberController() {
    _classCallCheck__default["default"](this, FiberController);
    _defineProperty__default["default"](this, "_fiber", void 0);
    _defineProperty__default["default"](this, "_flag", '0');
  }
  _createClass__default["default"](FiberController, [{
    key: "useInit",
    value:
    /**
     * Init the controller given the grid Element ref.
     *
     * @param gridElementRef - the ref of the grid element.
     */
    function useInit(gridElementRef) {
      var _this = this;
      this.updateFlag();
      // eslint-disable-next-line
      React.useEffect(function () {
        invariant(gridElementRef.current !== null);
        _this._fiber = getFiber(gridElementRef.current);
      }, []); // eslint-disable-line
    }

    /**
     * Return the DOM elements in the chosen positions.
     *
     * @param orderedIndices - The positions.
     * @returns - The elements.
     */
  }, {
    key: "getStateNodes",
    value: function getStateNodes(orderedIndices) {
      var stateNodes = [];
      // If there aren't indices retun an empty array.
      if (orderedIndices.length === 0) return stateNodes;

      // The first child.
      var child = getCurrentFiber(this._fiber, this._flag).child;

      // Fill the state nodes array.
      // We trust that the user input.
      orderedIndices.forEach(function (index) {
        // @ts-ignore
        while (child.index !== index) {
          // @ts-ignore
          child = child.sibling;
        }

        // @ts-ignore
        stateNodes.push(getStateNode(child));
      });
      return stateNodes;
    }

    /**
     * Append an itemComponent fiber
     * (the same is done for the alternate if exists).
     *
     * @param child - The item.
     */
  }, {
    key: "append",
    value: function append(itemComponentFiber) {
      // Get the current fiber.
      var fiber = getCurrentFiber(this._fiber, this._flag);
      // Append the fiber.
      appendFiber(fiber, itemComponentFiber);
      if (fiber.alternate) {
        if (itemComponentFiber.alternate) {
          // Append the alternate.
          appendFiber(fiber.alternate, itemComponentFiber.alternate);
        }
      }
    }

    /**
     * Remove an itemComponent fiber given the key of its Item
     * (The same is done for the alternate if exists).
     *
     * @param key - The key of the item.
     * @returns - The removed item.
     */
  }, {
    key: "remove",
    value: function remove(key) {
      // Get the current fiber.
      var fiber = getCurrentFiber(this._fiber, this._flag);
      // Remove the fiber.
      var removedChild = removeChild(fiber, key);
      if (fiber.alternate) {
        if (removedChild.alternate) {
          // Remove the alternate.
          removeChild(fiber.alternate, key);
        }
      }
      return removedChild;
    }

    /**
     * Return the props containing the flag value to add in the grid element.
     *
     * @returns - The props.
     */
  }, {
    key: "getFlagProp",
    value: function getFlagProp() {
      return _defineProperty__default["default"]({}, FlagProp, this._flag);
    }

    /**
     * Update the flag value.
     */
  }, {
    key: "updateFlag",
    value: function updateFlag() {
      if (this._flag === '0') this._flag = '1';else this._flag = '0';
    }

    /**
     * Destroy the instance.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      // @ts-ignore
      this._fiber = null;
    }
  }]);
  return FiberController;
}();

/**
 * The flag prop name.
 */
var FlagProp = 'muuri-react-flag';

/**
 * Get the fiber of the given grid element.
 *
 * @param grid - The element.
 * @return - The fiber node.
 */
function getFiber(grid) {
  var key = Object.keys(grid).find(function (key) {
    return key.startsWith('__reactInternalInstance$') || key.startsWith('__reactFiber$');
  });
  invariant(typeof key === 'string', 'Cannot find the __reactInternalInstance$');

  // @ts-ignore
  return grid[key];
}

/**
 * Return the current fiber.
 * Try to use the prop flag for the search first,
 * if this is not possible try the RootFiber.
 * The research on the flag is carried out because it is more
 * performing than the second and because if the React team
 * decides to change the functioning of the RootFiber,
 * not all features will stop working.
 * (It is rare for this to happen in the current version 16.x.x,
 * but if it does, it would not be a breacking change.)
 *
 * @param fiber - The fiber.
 * @param flag - the flag.
 * @returns - The current fiber.
 */
function getCurrentFiber(fiber, currentFlag) {
  if (!fiber.alternate) return fiber;

  // Flags.
  var fiberFlag = fiber.memoizedProps[FlagProp];
  var alternateFlag = fiber.alternate.memoizedProps[FlagProp];

  // If the two flags are the same it should mean that
  // in at least one of the items there has been a re-render
  // from the last render of the GridComponent.
  // We can no longer trust the flag prop and we have
  // to look for the RootFiber and check which
  // fiber is in the current tree.
  if (fiberFlag === alternateFlag) {
    var topFiber = fiber;

    // Get the top fiber
    // (Not the RootFiber).
    while (topFiber["return"]) {
      topFiber = topFiber["return"];
    }

    // Fibers.
    var rootFiber = topFiber.stateNode;
    var topCurrentFiber = rootFiber.current;

    // The current fiber.
    return topCurrentFiber === topFiber ? fiber : fiber.alternate;
  }

  // If we got here we can trust the flag prop to find the current Fiber.
  return fiberFlag === currentFlag ? fiber : fiber.alternate;
}

/**
 * Returns the first stateNode among the descendants
 * of the given itemComponent Fiber.
 *
 * @param itemComponentFiber - The fiber.
 * @returns - The element.
 */
function getStateNode(itemComponentFiber) {
  // ItemComponent -> ItemProvider -> Item.
  var itemFiber = itemComponentFiber.child.child;
  // @ts-ignore
  while (!(itemFiber.stateNode instanceof HTMLElement)) {
    // @ts-ignore
    itemFiber = itemFiber.child;
  }
  return itemFiber.stateNode;
}

/**
 * Append the child fiber in the last position among the children of the parent fiber.
 *
 * @param parent - The parent fiber.
 * @param child - The child fiber.
 */
function appendFiber(parent, child) {
  var _parent$return;
  if (!parent.child) {
    // If it has no child.
    parent.child = child;
    child.index = 0;
  } else {
    var c = parent.child;
    while (c.sibling) {
      c = c.sibling;
    }
    child.index = c.index + 1;
    // Inserted as last child.
    c.sibling = child;
  }

  // Update the references.
  child["return"] = parent;
  // If we are in development.
  if (child._debugOwner) child._debugOwner = (_parent$return = parent["return"]) === null || _parent$return === void 0 ? void 0 : _parent$return["return"];
}

/**
 * Remove a child with the given key from the fiber.
 *
 * @param parent - The fiber.
 * @param key - The key of the item.
 * @return - The removed fiber.
 */
function removeChild(parent, key) {
  var child = parent.child;
  var removedChild;

  // @ts-ignore
  if (hasNot(child, key)) {
    // @ts-ignore
    while (hasNot(child.sibling, key)) {
      // @ts-ignore
      child = child.sibling;
    }
    // @ts-ignore
    removedChild = removeSibling(child);
    // @ts-ignore
    adjustIndices(child);
  } else {
    removedChild = removeFirstChild(parent);
    // @ts-ignore
    child = child.sibling;
    if (child) adjustIndices(child);
  }
  removedChild.sibling = null;
  return removedChild;
}

/**
 * Remove the first itemComponent fiber of a gridELement fiber and return it.
 *
 * @param GridElementFiber - The gridELement fiber.
 * @return - The removed itemComponent fiber.
 */
function removeFirstChild(gridElementFiber) {
  var removed = gridElementFiber.child;
  // @ts-ignore
  gridElementFiber.child = gridElementFiber.child.sibling;
  // @ts-ignore
  return removed;
}

/**
 * Remove the first sibling from a itemComponent fiber and return it.
 *
 * @param fiber - The fiber.
 * @return - The removed sibling.
 */
function removeSibling(fiber) {
  var removed = fiber.sibling;
  // @ts-ignore
  fiber.sibling = fiber.sibling.sibling;
  // @ts-ignore
  return removed;
}

/**
 * Adjust the indices of the siblings of an itemComponent fiber.
 *
 * @param itemComponentFiber - The itemComponent fiber.
 */
function adjustIndices(itemComponentFiber) {
  while (itemComponentFiber.sibling) {
    itemComponentFiber.sibling.index = itemComponentFiber.index + 1;
    itemComponentFiber = itemComponentFiber.sibling;
  }
}

/**
 * Returns if the itemComponent fiber is not the parent of the item with the given key.
 *
 * @param itemComponentFiber - The itemComponent fiber.
 * @param key - The key of the item.
 * @return - If the itemComponent fiber is not the parent of the item with the given key.
 */
function hasNot(itemComponentFiber, key) {
  // ItemComponent -> ItemProvider -> Item.
  return itemComponentFiber.child.child.key !== key;
}

/**
 * CONTROLLER: GRID
 *
 * The purpose of this controller is to manage children
 * during each render of the component, and provide
 * the indexes of the new children added.
 */
var ChildrenController = /*#__PURE__*/function () {
  function ChildrenController() {
    _classCallCheck__default["default"](this, ChildrenController);
    _defineProperty__default["default"](this, "_oldChildrenArray", []);
    _defineProperty__default["default"](this, "_children", []);
    _defineProperty__default["default"](this, "_indicesToAdd", []);
    _defineProperty__default["default"](this, "_dragCounter", 0);
  }
  _createClass__default["default"](ChildrenController, [{
    key: "useInit",
    value:
    /**
     * Init all the settings given the new children.
     *
     * @param newChildren - the new children.
     */
    function useInit(newChildren) {
      // @ts-ignore
      // We need to ensure that the children are in an array.
      var newChildrenArray = React.Children.toArray(newChildren);

      // The indices to add.
      this._indicesToAdd = getIndicesToAdd(newChildrenArray, this._oldChildrenArray);

      // The _children will be used to map all
      // the child in the render method.
      // We can't use the ChildrenArray because we need the users
      // key provided in the components and not the escaped one (e.g. .$1).
      this._children = newChildren || [];
      this._oldChildrenArray = newChildrenArray;
    }

    /**
     * Remove a child in the given position and return it.
     *
     * @param index - The index of the child to remove.
     * @returns - The removed child.
     */
  }, {
    key: "remove",
    value: function remove(index) {
      return this._oldChildrenArray.splice(index, 1)[0];
    }

    /**
     * Append a child in the children array.
     *
     * @param child - The child to append.
     */
  }, {
    key: "append",
    value: function append(child) {
      this._oldChildrenArray.push(child);
    }

    /**
     * Returns the ordered array of indices of the added children.
     */
  }, {
    key: "getIndicesToAdd",
    value: function getIndicesToAdd() {
      return this._indicesToAdd;
    }

    /**
     * Map all the children.
     *
     * @param cb - The callback.
     * @returns - The mapped children.
     */
  }, {
    key: "render",
    value: function render(cb) {
      var children = React.Children.map(this._children, function (child) {
        // @ts-ignore
        // there are rare cases where the keys are not indispensable,
        // the user may not choose to use at his own risk.
        return cb(child, child.key);
      });

      // Flush the children.
      this.flush();
      return children;

      /**
      // If an item is being dragged we need to ensure
      // that no child is inserted before it.
      return this._dragCounter === 0
        ? children
        : getChildrenInSafePositions(children, this._indicesToAdd);
         */
    }

    /**
     * Increment the drag counter.
     */
  }, {
    key: "incrementDragCounter",
    value: function incrementDragCounter() {
      this._dragCounter += 1;
    }

    /**
     * Decrement the drag counter.
     */
  }, {
    key: "decrementDragCounter",
    value: function decrementDragCounter() {
      this._dragCounter -= 1;
    }

    /**
     * Remove the current children so they can be garbage collected.
     */
  }, {
    key: "flush",
    value: function flush() {
      this._children = [];
    }

    /**
     * Destroy the instance.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.flush();
    }
  }]);
  return ChildrenController;
}();

/**
 * Return an array of positions of the added children.
 * The algorithm is optimized for cases where the order of
 * the items does not change during re-renders (about 100% of cases).
 * The positions are in ascending order.
 *
 * @param newChildren - The new children.
 * @param oldChildren - The old children.
 * @return - The indices.
 */
function getIndicesToAdd(newChildren, oldChildren) {
  var indicesToAdd = [];
  var oIndex = 0;
  for (var nIndex = 0; nIndex < newChildren.length; nIndex++) {
    // Finde the index.
    var index = findIndex(oldChildren, newChildren[nIndex], oIndex);
    if (index === -1) {
      // If it is not present is a new Child.
      indicesToAdd.push(nIndex);
    } else {
      // If it is present restart the research
      // from the given index.
      oIndex = index;
    }
  }
  return indicesToAdd;
}

/**
 * Returns the index of the child in the children array,
 * if it is not present returns -1.
 * The research start from the given 'fromIndex'.
 *
 * @param child - The child to search.
 * @param children - The children.
 * @param fromIndex - The initial index.
 * @returns - The index of the child.
 */
function findIndex(children, child, fromIndex) {
  fromIndex = fromIndex > children.length ? children.length : fromIndex;

  // If the heuristics are respected the child will be here.
  for (var index = fromIndex; index < children.length; index++) {
    if (is(child, children[index])) return index;
  }

  // If the child is here the heuristics are not respected.
  for (var _index = 0; _index < fromIndex; _index++) {
    if (is(child, children[_index])) return _index;
  }

  // The child is not present.
  return -1;
}

/**
 * There would be the risk that a component will be inserted before
 * an item that is being dragged (and that is placed in a drag
 * container that is not the grid element). React would use
 * insertBefore to add the elements and this would cause an error.
 * To avoid this problem, if any item is being dragged,
 * all new components are added at the end so that
 * React uses appendChild to add the elements in the DOM.
 *
 * @param children - The new children to set.
 * @param indicesToAdd - The indices of the added children.
 * @returns - The children in safe postions.
 *
function getChildrenInSafePositions(
  newChildren: ReactElement[],
  indicesToAdd: number[]
): ReactElement[] {
  // Check if there are dragged items.
  if (indicesToAdd.length === 0) return newChildren;

  const addedChildren: ReactElement[] = [];

  // Set the added children.
  indicesToAdd.reverse().forEach((index) => {
    const [newChild] = newChildren.splice(index, 1);
    addedChildren.push(newChild);
  });

  return newChildren.concat(addedChildren);
}

/**
 * Return if the components have the same key.
 *
 * @param componentA - The first component.
 * @param componentB - The second component.
 * @returns - If they have the same key.
 */
function is(componentA, componentB) {
  return componentA.key === componentB.key;
}

/**
 * Fill a grid instance:
 *  - Add the sizer element.
 *
 * @param grid - The Muuri instance.
 */
function fillGrid(grid) {
  var sizerElement = document.createElement('div');

  // Keep the element hidden.
  sizerElement.style.visibility = 'hidden';
  sizerElement.style.position = 'absolute';
  // Add the class.
  sizerElement.classList.add('grid-sizer');

  // Set the element.
  addDecoration(grid, {
    sizerElement: sizerElement
  });
  var gridElement = grid.getElement();

  // Insert as first child.
  if (gridElement.children.length === 0) {
    gridElement.appendChild(sizerElement);
  } else {
    gridElement.insertBefore(sizerElement, gridElement.children[0]);
  }
}

// Allowed position values.
var positions = ['relative', 'absolute', 'fixed'];

/**
 * Fill a grid element:
 * - If it is not position the style.position is setted to "relative".
 * - The CSS "containerClass" is added.
 *
 * It also wrap the className setter to
 * avoid React to remove the standard class
 * of Muuri from the grid.
 *
 * @param gridElement - The element to fill.
 * @param gridClass - The Css class of the grid element.
 */
function fillGridElement(gridElement, gridClass) {
  var position = getComputedStyle(gridElement).position;

  // Set the default position.
  if (!positions.includes(position)) {
    gridElement.style.position = positions[0];
  }

  // Set the grid class.
  gridElement.classList.add(gridClass);

  // Ensure that the grid class can't be removed.
  var defaultSetAttribute = gridElement.setAttribute.bind(gridElement);
  gridElement.setAttribute = function setAttribute(attribute, value) {
    if (attribute === 'class') {
      var classNames = (gridElement.getAttribute('class') || '').split(' ');
      // Add the grid class.
      if (!classNames.includes(gridClass)) value = "".concat(value, " ").concat(gridClass);
    }
    defaultSetAttribute(attribute, value);
  };
}

/**
 * Fill an item:
 * - Add the _component decoration.
 * - Re-define the _sortData property.
 *
 * @param item - The item to fill.
 */
function fillItem(item) {
  addDecoration(item, {
    props: {},
    data: {}
  });
  // Change the sort data.
  Object.defineProperty(item, '_sortData', {
    get: function get() {
      return this.getData();
    },
    set: function set() {
      // nothing to do here.
    }
  });
}

/**
 * Fill an Item (outer) element:
 * - style.position setted to "absolute".
 *
 * It also wrap the className setter to
 * avoid React to remove the standard classes
 * of Muuri from the item.
 *
 * @param itemElement - The item element to fill.
 * @param itemClasses - The Css classes of the items.
 */
function fillItemElement(itemElement, itemClasses) {
  itemElement.style.position = 'absolute';

  // Ensure that the Css item classes are not removed.
  var defaultSetAttribute = itemElement.setAttribute.bind(itemElement);
  itemElement.setAttribute = function setAttribute(attribute, value) {
    if (attribute === 'class') {
      var classNames = (itemElement.getAttribute('class') || '').split(' ');
      var classNamesToAdd = classNames.filter(function (className) {
        return itemClasses.includes(className);
      });

      // Add the Css items classes.
      value = "".concat(value, " ").concat(classNamesToAdd.join(' '));
    }
    defaultSetAttribute(attribute, value);
  };
}

/**
 * Replacement for useCallback use case with empty array,
 * it memoize only the first function passed.
 * https://github.com/facebook/react/issues/15278.
 *
 * @param callback - The function to memoize.
 * @returns - The memoized function.
 */
function useFunction(callback) {
  return React.useRef(callback).current;
}

/**
 * Accept a dependencyList and return if it has changed from
 * the previous render.
 *
 * @param dependencyList - The dependencyList.
 * @returns - If the dependencyList is changed from the previous render.
 */
function useReference(dependencyList) {
  var ref = React.useRef(dependencyList);

  // If it is the first call return true.
  if (ref.current === dependencyList) return true;

  // Compare the dependencyLists.
  var didUpdate = compare(ref.current, dependencyList);
  // Keep the reference of the new one.
  ref.current = dependencyList;
  return didUpdate;
}

/**
 * Compare two dependencyLists and return if they are different.
 *
 * @param a - The first dependencyList to compare.
 * @param b - The second dependencyList to compare.
 * @returns - If the 2 dependencyLists are different.
 */
function compare(a, b) {
  if (a.length !== b.length) return true;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return true;
  }
  return false;
}

/**
 * Like useEffect but run instantly.
 *
 * @param didUpdate - The method to run.
 * @param deps - The dependecies.
 */
function useInstantEffect(didUpdate, deps) {
  // Deps check.
  var needUpdate = useReference(deps);
  var cleanUpRef = React.useRef();

  // Run.
  if (needUpdate) {
    if (cleanUpRef.current) cleanUpRef.current();
    cleanUpRef.current = didUpdate();
  }

  // Catch unmount.
  React.useEffect(function () {
    return function () {
      if (cleanUpRef.current) cleanUpRef.current();
    };
  }, []);
}

/**
 * Replacement for useMemo use case with empty array,
 * it memoize only the first computed value.
 * https://github.com/facebook/react/issues/15278.
 *
 * @param factory - The factory method.
 * @returns - The memoized value.
 */
function useMemoized(factory) {
  var valueRef = React.useRef();
  if (!valueRef.current) {
    valueRef.current = factory();
  }
  return valueRef.current;
}

/**
 * Returns a (memoized) function to re-render
 * the component in which the hook has been called.
 *
 * @returns - The re-render method.
 */
function useRerender() {
  var setState = React.useState()[1];
  return useFunction(function () {
    setState(Object.create(null));
  });
}

/** Interfaces */

// Item component.
function ItemComponent(_ref) {
  var child = _ref.children,
    itemClasses = _ref.itemClasses,
    itemAddController = _ref.itemAddController,
    itemRemoveController = _ref.itemRemoveController,
    propsToData = _ref.propsToData,
    itemKey = _ref.itemKey,
    grid = _ref.grid;
  // The store provided doesn't change the reference.
  var store = useMemoized(function () {
    // Create the controllers.
    var eventController = new EventController();
    var itemRefController = new ItemRefController();
    // Add the data that won't change.
    itemRefController.set('key', itemKey);
    itemRefController.set('eventController', eventController);
    // Return the controllers.
    return {
      eventController: eventController,
      itemRefController: itemRefController,
      itemRemoveController: itemRemoveController,
      grid: grid
    };
  });

  // Set the props.
  store.itemRefController.set('props', child.props);
  store.itemRemoveController = itemRemoveController;
  store.grid = grid;

  // Set the data.
  if (propsToData) {
    // Get the data.
    var data = propsToData(child.props);

    // Must be an object.
    invariant(_typeof__default["default"](data) === 'object', "The data returned by 'propsToData' must be an object, founded ".concat(_typeof__default["default"](data)));

    // Set the data.
    store.itemRefController.set('data', data);
  }

  // On mount.
  React.useEffect(function () {
    // Request the item.
    itemAddController.requestItem(function (item) {
      fillItem(item);
      // @ts-ignore
      fillItemElement(item.getElement(), itemClasses);
      store.itemRefController.setItem(item);
    });
    return function () {
      // The item.
      var item = store.itemRefController.getItem();
      invariant(item !== null);

      // The element.
      var element = item.getElement();
      invariant(element !== undefined);

      // If the item is going to be unmounted
      // and it is being dragged it have to end the event
      // (Because it could be child of a different DOM element).
      if (item.isDragging()) {
        element.style.display = 'none';
        element.style.visibility = 'hidden';

        // @ts-ignore
        if (item._drag) item._drag.destroy();
        store.grid.getElement().appendChild(element);
      }

      // Remove the item.
      store.itemRefController["delete"]();
      store.itemRemoveController.removeItem(item);

      // Destroy the controllers instances.
      store.itemRefController.destroy();
      store.eventController.destroy();
    };
  }, []); // eslint-disable-line

  // Render.
  return /*#__PURE__*/React__default["default"].createElement(ItemProvider, {
    value: store
  }, child);
}

// PropTypes.
ItemComponent.propTypes = {
  itemAddController: PropTypes__default["default"].object.isRequired,
  itemClasses: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string.isRequired).isRequired,
  propsToData: PropTypes__default["default"].func,
  children: PropTypes__default["default"].element.isRequired,
  grid: PropTypes__default["default"].instanceOf(Muuri__default["default"]).isRequired
};

// Display name.
ItemComponent.displayName = 'ItemComponent';

/**
 * Add the given items in the given positions.
 *
 * @param grid - The grid instance.
 * @param addedDOMItems - The added DOM items.
 * @param indicesToAdd - the positions in which to add the items.
 * @param addOptions - The add options.
 * @param filter - The filter.
 */
function addItems(grid, addedDOMItems, indicesToAdd, addOptions, filter) {
  for (var i = 0; i < addedDOMItems.length; i++) {
    // Add the items.
    grid.add(addedDOMItems[i], {
      index: indicesToAdd[i],
      layout: false
    });
  }

  // Show the added items (usefull just if the items are
  // hidden by default and the filter is not setted).
  if (!filter && addOptions !== null && addOptions !== void 0 && addOptions.show) {
    grid.show(grid.getItems(indicesToAdd), {
      layout: false
    });
  }
}

/**
 * Filter the items with the given predicate.
 *
 * @param grid - The grid instance.
 * @param predicate - The filter predicate.
 */
function filterItems(grid, predicate) {
  grid.filter(function (item) {
    return predicate(item.getData(), item);
  }, {
    layout: false
  });
}

/** Class name. */
var gridClassName = 'containerClass';

/**
 * Returns the Css class of the grid element.
 *
 * @param grid - The Muuri instance.
 * @returns - The class.
 */
function getGridClass(grid) {
  // @ts-ignore
  return grid._settings[gridClassName];
}

/** Class names. */
var itemClassNames = ['itemClass', 'itemVisibleClass', 'itemHiddenClass', 'itemPositioningClass', 'itemDraggingClass', 'itemReleasingClass', 'itemPlaceholderClass'];

/**
 * Returns the items classes.
 *
 * @param grid - The Muuri instance.
 * @returns - The classes.
 */
function getItemClasses(grid) {
  // @ts-ignore
  return itemClassNames.map(function (className) {
    return grid._settings[className];
  });
}

/**
 * Hide the given items.
 *
 * @param grid - The grid instance.
 * @param items - The items to hide.
 */
function hideItems(grid, items) {
  grid.hide(items, {
    layout: false
  });
}

/**
 * Remove the given items.
 *
 * @param grid - The grid instance.
 * @param itemsToRemove - The items to remove.
 */
function removeItems(grid, itemsToRemove) {
  grid.remove(itemsToRemove, {
    layout: false,
    removeElements: false
  });
}

/**
 * Show the given items.
 *
 * @param grid - The grid instance.
 * @param items - The items to show.
 */
function showItems(grid, items) {
  grid.show(items, {
    layout: false
  });
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Sort the items.
 *
 * @param grid - The grid instance.
 * @param predicate - The sort predicate.
 * @param sortOptions - The sort options.
 */
function sortItems(grid, predicate, sortOptions) {
  // Disable the layout.
  // @ts-ignore
  sortOptions = _objectSpread$1(_objectSpread$1({}, sortOptions || {}), {}, {
    layout: false
  });

  // Handle a function.
  if (typeof predicate === 'function') {
    handleFunction(grid, predicate, sortOptions);
  }

  // Handle a string.
  if (typeof predicate === 'string') {
    handleString(grid, predicate, sortOptions);
  }

  // Hanndle an array of keys.
  if (Array.isArray(predicate)) {
    handleArray(grid, predicate, sortOptions);
  }
}

/**
 * Sort the items given a predicate function.
 *
 * @param grid - The grid instance.
 * @param predicate - The predicate function.
 * @param sortOptions - The sort options.
 */
function handleFunction(grid, predicate, sortOptions) {
  grid.sort(function (itemA, itemB) {
    return predicate(itemA.getData(), itemB.getData(), itemA, itemB);
  }, sortOptions);
}

/**
 * Sort the items given a predicate string.
 *
 * @param grid - The grid instance.
 * @param predicate - The predicate string.
 * @param sortOptions - The sort options.
 */
function handleString(grid, predicate, sortOptions) {
  grid.sort(predicate, sortOptions);
}

/**
 * Sort the items given an array of keys.
 * If the key has a match, the item is inserted in that position, otherwise at the bottom.
 *
 * @param grid - The grid instance.
 * @param predicate - The array of keys.
 * @param sortOptions - The sort options.
 */
function handleArray(grid, predicate, sortOptions) {
  var items = grid.getItems();
  // Items that can be sorted.
  var sortedItems = [];
  // Items that can't be sorted.
  var otherItems = [];

  // Fills the arrays.
  items.forEach(function (item) {
    var itemKey = item._component.key;
    var index = predicate.findIndex(function (key) {
      return key === itemKey;
    });
    if (index > -1) {
      sortedItems[index] = item;
    } else {
      otherItems.push(item);
    }
  });

  // Sort.
  grid.sort(Array.prototype.concat(
  // Some position can be empty.
  sortedItems.filter(function (item) {
    return !!item;
  }), otherItems), sortOptions);
}

/* Interfaces */

// Grid component.
function GridComponent(_ref) {
  var children = _ref.children,
    gridProps = _ref.gridProps,
    grid = _ref.grid,
    filter = _ref.filter,
    sort = _ref.sort,
    sortOptions = _ref.sortOptions,
    addOptions = _ref.addOptions,
    propsToData = _ref.propsToData,
    onSend = _ref.onSend,
    onDragStart = _ref.onDragStart,
    onDragEnd = _ref.onDragEnd,
    onFilter = _ref.onFilter,
    onSort = _ref.onSort,
    onMount = _ref.onMount,
    onUnmount = _ref.onUnmount,
    forceSync = _ref.forceSync,
    dragFixed = _ref.dragFixed,
    dragEnabled = _ref.dragEnabled,
    instantLayout = _ref.instantLayout;
  /* ------------------ */
  /* ----- STORES ----- */
  /* ------------------ */

  // Store references of objects
  // generated in previous renders.
  var store = useMemoized(function () {
    return {
      // Grid and items data.
      gridRef:
      /*#__PURE__*/
      /*      */
      React.createRef(),
      gridClass: /*    */getGridClass(grid),
      itemClasses: /*  */getItemClasses(grid),
      // Controllers.
      childrenController: /*    */new ChildrenController(),
      fiberController: /*       */new FiberController(),
      itemAddController: /*     */new ItemAddController(),
      itemRemoveController: /*  */new ItemRemoveController(),
      layoutController: /*      */new LayoutController(),
      // Events.
      onUnmount: onUnmount,
      onDragStart: onDragStart,
      onDragEnd: onDragEnd,
      onFilter: onFilter,
      onSort: onSort,
      onSend: onSend
    };
  });

  // Store references of objects
  // that are used inside useEffect.
  // The references are flushed on each new render.
  var vars = {
    // Items data.
    indicesToAdd: /*   */[],
    addedDOMItems: /*  */[],
    itemsToRemove: /*  */[],
    itemsToRefresh: /* */[],
    itemsToShow: /*    */[],
    itemsToHide: /*    */[],
    // Items flags.
    hasAdded: /*      */false,
    hasRemoved: /*    */false,
    hasFiltered: /*   */false,
    hasSorted: /*     */false,
    hasRefreshed: /*  */false,
    hasShown: /*      */false,
    hasHidden: /*     */false
  };

  /* ----------------- */
  /* ----- MOUNT ----- */
  /* ----------------- */

  // Initialize the grid on mount.
  React.useEffect(function () {
    /* ------------------ */
    /* ----- EVENTS ----- */
    /* ------------------ */

    // Add all the event handlers.
    grid
    // "Send" and "receive" events.
    .on('beforeSend', function (_ref2) {
      var item = _ref2.item,
        fromGrid = _ref2.fromGrid,
        fromIndex = _ref2.fromIndex;
      if (!getDecoration(item).sentPayload) {
        // Generate the sentPayload.
        var sentPayload = {
          fromChildrenController: store.childrenController,
          fromFiberController: store.fiberController,
          fromGrid: fromGrid,
          fromIndex: fromIndex
        };

        // Add the decoration.
        addDecoration(item, {
          sentPayload: sentPayload
        });
      }
    }).on('receive', function (_ref3) {
      var item = _ref3.item,
        toGrid = _ref3.toGrid,
        toIndex = _ref3.toIndex;
      // Controllers.
      var toChildrenController = store.childrenController;
      var toFiberController = store.fiberController;

      // If the method is activated by user interaction (the item is being dragged)
      // the synchronization will be performed during the "dragEnd" event.
      // If the method is called via Muuri's instance (the item is not being dragged)
      // the synchronization takes place here, but the onSend callback is not fired.
      if (item.isDragging()) {
        // Generate the receivedPayload.
        var receivedPayload = {
          toChildrenController: toChildrenController,
          toFiberController: toFiberController,
          toGrid: toGrid,
          toIndex: toIndex
        };

        // Add the decoration.
        addDecoration(item, {
          receivedPayload: receivedPayload
        });
      } else {
        // Payloads data.
        var sentPayload = getDecoration(item).sentPayload;
        // The payload must have been created in the send method.
        invariant(sentPayload !== null && _typeof__default["default"](sentPayload) === 'object');
        // Controllers.
        var fromChildrenController = sentPayload.fromChildrenController,
          fromFiberController = sentPayload.fromFiberController;

        // Remove the payload.
        addDecoration(item, {
          sentPayload: null
        });

        // Remove the item instances from the old GridComponent.
        var itemFiber = fromFiberController.remove(item.getKey());
        var itemComponent = fromChildrenController.remove(itemFiber.index);

        // Add the item instances to the new GridComponent.
        toFiberController.append(itemFiber);
        toChildrenController.append(itemComponent);
      }

      // Emit the "send" event.
      getDecoration(item).eventController.emitEvent('send', grid);
    })

    // Drag events.
    .on('dragInit', function (item, event) {
      // The childrenController must change the positions of
      // the newly added components if any items are being
      // dragged to add the safely.
      store.childrenController.incrementDragCounter();
      // Emit the "drag" event.
      // This event is used instead of "dragStart" to allow the
      // reRender of the component when the item is not inside
      // the dragContainer, this makes it possible to change
      // the style of the element safely (e.g. using relative dimensions).
      getDecoration(item).eventController.emitEvent('drag', true);
      // "onDragStart" Callback.
      if (store.onDragStart) store.onDragStart(item, event);
    }).on('dragEnd', function (item) {
      // Payloads.
      var sentPayload = getDecoration(item).sentPayload;
      var receivedPayload = getDecoration(item).receivedPayload;

      // If an item was sent during the drag the
      // GridComponents are synchronized.
      if (sentPayload && receivedPayload) {
        // SentPayload data.
        var fromChildrenController = sentPayload.fromChildrenController,
          fromFiberController = sentPayload.fromFiberController,
          fromGrid = sentPayload.fromGrid,
          fromIndex = sentPayload.fromIndex;

        // ReceivedPayload data.
        var toChildrenController = receivedPayload.toChildrenController,
          toFiberController = receivedPayload.toFiberController,
          toGrid = receivedPayload.toGrid,
          toIndex = receivedPayload.toIndex;

        // Reset the payloads.
        addDecoration(item, {
          sentPayload: null,
          receivedPayload: null
        });

        // Check if the item has been sended.
        if (fromGrid !== toGrid) {
          // "onSend" will be called with the receive event.
          invariant(typeof store.onSend === 'function', 'An item cannot be sent to another MuuriComponent if the ' + "'onSend' property has not been passed to the MuuriComponent.");

          // Remove the item instances from the old GridComponent.
          var itemFiber = fromFiberController.remove(item.getKey());
          var itemComponent = fromChildrenController.remove(itemFiber.index);

          // Add the item instances to the new GridComponent.
          toFiberController.append(itemFiber);
          toChildrenController.append(itemComponent);

          // "onSend" callback.
          // DragEnd is called in the grid where
          // the drag start, so onSend.
          store.onSend({
            // The key the user has set.
            key: getDecoration(item).key,
            // From.
            fromGrid: fromGrid,
            fromIndex: fromIndex,
            fromId: getDecoration(fromGrid).id,
            fromGroupIds: getDecoration(fromGrid).groupIds,
            // To.
            toGrid: toGrid,
            toIndex: toIndex,
            toId: getDecoration(toGrid).id,
            toGroupIds: getDecoration(toGrid).groupIds
          });
        }
      }
    }).on('dragReleaseEnd', function (item) {
      // The childrenController must change the positions of
      // the newly added components if any items are being
      // dragged to add the safely.
      store.childrenController.decrementDragCounter();
      // Emit the event.
      // This event is used instead of "dragEnd" to allow the
      // reRender of the component when the item is not inside
      // the dragContainer, this makes it possible to change
      // the style of the element safely (e.g. using relative dimensions).
      getDecoration(item).eventController.emitEvent('drag', false);
      // Call the event.
      if (store.onDragEnd) store.onDragEnd(item);
    })

    // Show and hide events.
    .on('showStart', function (items) {
      // The items could be shown before they are decorated.
      if (!isDecorated(items[0])) return;
      // Emit the event.
      items.forEach(function (item) {
        var eventController = getDecoration(item).eventController;
        // The event is triggered also for items that have not
        // changed their "visibility" state.
        // This check is done to avoid useless re-rendering.
        if (eventController.getPayload('show') !== true) {
          eventController.emitEvent('show', true);
        }
      });
    }).on('hideEnd', function (items) {
      // Emit the event.
      items.forEach(function (item) {
        var eventController = getDecoration(item).eventController;
        // The event is triggered also for items that have not
        // changed their "visibility" state.
        // This check is done to avoid useless re-rendering.
        if (eventController.getPayload('show') !== false) {
          eventController.emitEvent('show', false);
        }
      });
    })

    // Filter and sort events.
    .on('filter', function (shownItems, hiddenItems) {
      if (store.onFilter) store.onFilter(shownItems, hiddenItems);
    }).on('sort', function (currentOrder, previousOrder) {
      if (store.onSort) store.onSort(currentOrder, previousOrder);
    });

    // Fix the dimensions of the items when they are dragged.
    if (dragFixed) {
      grid.on('dragInit', function (item) {
        // Let's set fixed widht/height to the dragged item
        // so that it does not stretch unwillingly when
        // it's appended to the document body for the
        // duration of the drag.
        var element = item.getElement();
        // The element must exist.
        invariant(element !== undefined);
        // Get the computed dimensions.
        var _getComputedStyle = getComputedStyle(element),
          width = _getComputedStyle.width,
          height = _getComputedStyle.height,
          paddingTop = _getComputedStyle.paddingTop;
        // Save the previous style in case it was setted.
        addDecoration(item, {
          dragWidth: element.style.width,
          dragHeight: element.style.height,
          dragPaddingTop: element.style.paddingTop
        });
        // Set the new style.
        element.style.width = width;
        element.style.height = height;
        element.style.paddingTop = paddingTop;
      }).on('dragReleaseEnd', function (item) {
        // Let's remove the fixed width/height from the
        // dragged item now that it is back in a grid
        // column and can freely adjust to it's
        // surroundings.
        var element = item.getElement();
        // The element must exist.
        invariant(element !== undefined);
        // Get the old style.
        var _getDecoration = getDecoration(item),
          dragWidth = _getDecoration.dragWidth,
          dragHeight = _getDecoration.dragHeight,
          dragPaddingTop = _getDecoration.dragPaddingTop;
        // Restore the previous style in case it was setted.
        element.style.width = dragWidth;
        element.style.height = dragHeight;
        element.style.paddingTop = dragPaddingTop;
      });
    }

    /* ---------------- */
    /* ----- GRID ----- */
    /* -----------------*/

    // Check .
    invariant(store.gridRef.current !== null);

    // Work with the grid.
    // @ts-ignore
    grid._element = store.gridRef.current;
    fillGridElement(store.gridRef.current, store.gridClass);
    fillGrid(grid);

    // "onMount" Callback.
    if (onMount) onMount(grid);

    // Delete the instance from the global map.
    return function () {
      // Destroy the controllers.
      store.childrenController.destroy();
      store.fiberController.destroy();
      store.itemRemoveController.destroy();
      store.itemAddController.destroy();
      store.layoutController.destroy();
    };
  }, []); // eslint-disable-line

  /* ---------------- */
  /* ----- INIT ----- */
  /* -----------------*/

  // Init the controllers.
  store.childrenController.useInit(children);
  store.fiberController.useInit(store.gridRef);
  store.itemRemoveController.useInit();
  store.itemAddController.useInit();
  store.layoutController.useInit();

  // IsChanged flags.
  var isFilterChanged = useReference([filter]);
  var isSortChanged = useReference([sort, sortOptions]);

  // Get items to add/remove.
  React.useEffect(function () {
    // Set drag enabled option.
    addDecoration(grid, {
      dragEnabled: dragEnabled
    });

    // Set the items data.
    vars.indicesToAdd = store.childrenController.getIndicesToAdd();
    vars.addedDOMItems = store.fiberController.getStateNodes(vars.indicesToAdd);
    vars.itemsToRemove = store.itemRemoveController.getItemsToRemove();
    vars.itemsToRefresh = store.layoutController.getItemsToRefresh();
    vars.itemsToShow = store.layoutController.getItemsToShow();
    vars.itemsToHide = store.layoutController.getItemsToHide();

    // This will remove lot of the implementation
    // problems for the user.
    store.onUnmount = onUnmount;
    store.onDragStart = onDragStart;
    store.onDragEnd = onDragEnd;
    store.onFilter = onFilter;
    store.onSort = onSort;
    store.onSend = onSend;
  });

  /* ------------------- */
  /* ----- ACTIONS ----- */
  /* ------------------- */

  React.useEffect(function () {
    /* ---------------------- */
    /* ---- ADD & REMOVE ---- */
    /* ---------------------- */

    // Remove items.
    if (vars.itemsToRemove.length) {
      removeItems(grid, vars.itemsToRemove);
      // Set the flag.
      vars.hasRemoved = true;
    }

    // Add items after the old ones are removed
    // to add them in the right positions.
    if (vars.indicesToAdd.length) {
      addItems(grid, vars.addedDOMItems, vars.indicesToAdd, addOptions, filter);
      // New Items.
      var addedItems = grid.getItems(vars.indicesToAdd);
      // Emit the new items to the itemComponents.
      store.itemAddController.emit(addedItems);
      // Set the flag.
      vars.hasAdded = true;
    }

    /* ------------------------- */
    /* ----- SORT & FILTER ----- */
    /* ------------------------- */

    // Filter items.
    if (filter && (isFilterChanged || vars.hasAdded || forceSync)) {
      filterItems(grid, filter);
      // Set the flag.
      vars.hasFiltered = true;
    }

    // Sort items.
    if (sort && (isSortChanged || vars.hasAdded || forceSync)) {
      sortItems(grid, sort, sortOptions);
      // Set the flag.
      vars.hasSorted = true;
    }

    /* ----------------------- */
    /* ----- SHOW & HIDE ----- */
    /* ----------------------- */

    // Filter has priority on the items visibility.
    if (!filter && vars.itemsToShow.length) {
      showItems(grid, vars.itemsToShow);
      // Set the flag.
      vars.hasShown = true;
    }

    // Filter has priority on the items visibility.
    if (!filter && vars.itemsToHide.length) {
      hideItems(grid, vars.itemsToHide);
      // Set the flag.
      vars.hasHidden = true;
    }

    /* ------------------- */
    /* ----- REFRESH ----- */
    /* ------------------- */

    // Items with dimensions to refresh.
    if (vars.itemsToRefresh.length) {
      grid.refreshItems(vars.itemsToRefresh);
      // Set the flag.
      vars.hasRefreshed = true;
    }

    /* ------------------ */
    /* ----- LAYOUT ----- */
    /* ------------------ */

    // Layout is calculated only in the end.
    // Check the previous flags.
    if (vars.hasAdded || vars.hasRemoved || vars.hasSorted || vars.hasFiltered || vars.hasRefreshed || vars.hasShown || vars.hasHidden) {
      grid.layout(instantLayout);
    }
  });

  /* ------------------ */
  /* ----- RENDER ----- */
  /* ------------------ */

  // Provided value doesn't change the reference.
  var value = useMemoized(function () {
    return {
      layoutController: store.layoutController,
      grid: grid
    };
  });

  // render.
  return /*#__PURE__*/React__default["default"].createElement(GridProvider, {
    value: value
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends__default["default"]({}, gridProps, {
    ref: store.gridRef
  }, store.fiberController.getFlagProp()), store.childrenController.render(function (child, key) {
    return /*#__PURE__*/React__default["default"].createElement(ItemComponent, {
      key: key,
      itemKey: key,
      grid: grid,
      propsToData: propsToData,
      itemClasses: store.itemClasses,
      itemAddController: store.itemAddController,
      itemRemoveController: store.itemRemoveController
    }, child);
  })));
}

// Proptypes.
GridComponent.propTypes = {
  grid: PropTypes__default["default"].object.isRequired,
  gridProps: PropTypes__default["default"].object,
  filter: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].func]),
  sort: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].func, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  sortOptions: PropTypes__default["default"].exact({
    descending: PropTypes__default["default"].bool
  }),
  addOptions: PropTypes__default["default"].exact({
    show: PropTypes__default["default"].bool
  }),
  onSend: PropTypes__default["default"].func,
  onDragStart: PropTypes__default["default"].func,
  onDragEnd: PropTypes__default["default"].func,
  onFilter: PropTypes__default["default"].func,
  onSort: PropTypes__default["default"].func,
  onMount: PropTypes__default["default"].func,
  onUnmount: PropTypes__default["default"].func,
  forceSync: PropTypes__default["default"].bool,
  dragFixed: PropTypes__default["default"].bool,
  dragEnabled: PropTypes__default["default"].bool,
  instantLayout: PropTypes__default["default"].bool
};

// Default props.
GridComponent.defaultProps = {
  gridProps: {},
  addOptions: {
    show: true
  },
  sortOptions: {
    descending: false
  },
  forceSync: false,
  dragFixed: false,
  dragEnabled: false,
  instantLayout: false
};

// Display name.
GridComponent.displayName = 'GridComponent';

/**
 * Map that links the Muuri instances to
 * their id and group ids.
 */
var MuuriMap = /*#__PURE__*/function () {
  function MuuriMap() {
    _classCallCheck__default["default"](this, MuuriMap);
    _defineProperty__default["default"](this, "_idMap", new Map());
    _defineProperty__default["default"](this, "_groupMap", new Map());
  }
  _createClass__default["default"](MuuriMap, [{
    key: "get",
    value:
    /**
     * Get the grid instance with the chosen id.
     *
     * @param id - The id.
     * @returns - The grid instance.
     */
    function get(id) {
      return this._idMap.get(id) || null;
    }

    /**
     * Get all the grid instances in the group of the given id.
     * The reference of the group array never changes.
     *
     * @param groupId - The group id.
     * @returns - The array of grid instances.
     */
  }, {
    key: "getGroup",
    value: function getGroup(groupId) {
      var group = this._groupMap.get(groupId);
      if (!group) {
        var newGroup = [];
        this._groupMap.set(groupId, newGroup);
        return newGroup;
      } else {
        return group;
      }
    }

    /**
     * Get all the grid instances in the map.
     *
     * @returns - The grid instances.
     */
  }, {
    key: "getAll",
    value: function getAll() {
      return Array.from(this._idMap.values());
    }

    /**
     * Set the grid instance with the given id.
     *
     * @param grid - The grid instance.
     * @param id - The id of the instance.
     * @returns - The muuriMap.
     */
  }, {
    key: "set",
    value: function set(grid, id) {
      this._idMap.set(id, grid);
      return this;
    }

    /**
     * Set the grid instance in the group of the given id.
     *
     * @param grid - The grid instance.
     * @param groupId - The id of the group.
     * @returns - The muuriMap.
     */
  }, {
    key: "setGroup",
    value: function setGroup(grid, groupId) {
      var group = this._groupMap.get(groupId);
      if (group) {
        group.push(grid);
      } else {
        this._groupMap.set(groupId, [grid]);
      }
      return this;
    }

    /**
     * Delete the grid instance with the given id.
     *
     * @param id - The id of the instance.
     * @returns - The muuriMap.
     */
  }, {
    key: "delete",
    value: function _delete(id) {
      this._idMap["delete"](id);
      return this;
    }

    /**
     * Delete the instance from the group with the given id.
     *
     * @param grid - The grid instance.
     * @param groupIds - The group ids of the instance.
     */
  }, {
    key: "deleteGroup",
    value: function deleteGroup(grid, groupId) {
      var group = this._groupMap.get(groupId);
      if (group) {
        var index = group.indexOf(grid);
        if (index > -1) group.splice(index, 1);
      }
      return this;
    }

    /**
     * Clear the maps.
     */
  }, {
    key: "clear",
    value: function clear() {
      this._idMap.clear();
      this._groupMap.clear();
      return this;
    }
  }]);
  return MuuriMap;
}();
var muuriMap = new MuuriMap();

/**
 * Generate and returns a muuri instance with the given options.
 *
 * @param options - The options.
 * @returns - The muuri instance.
 */
function getInstance(options) {
  var el = document.createElement('div');
  // The element won't be visible.
  el.style.display = 'none';
  // Muuri (0.8.0) need an element in the DOM to be instanciated.
  document.body.appendChild(el);

  // Generate the instance.
  var grid = new Muuri__default["default"](el, options);

  // Remove the element.
  document.body.removeChild(el);
  return grid;
}

/**
 * Set the value in the ref.
 *
 * @param ref - The ref.
 * @param value - The value
 */
function handleRef(ref, value) {
  if (!ref) return;
  if (typeof ref === 'function') ref(value);
  // @ts-ignore
  else if ('current' in ref) ref.current = value;
}

/**
 * Wrap the 'dragAutoScroll' option.
 * Allow the target element to be a ref.
 *
 * @param options - The grid options.
 */
function setDragAutoScroll(options) {
  var dragAutoScroll = options.dragAutoScroll;

  // Wrap the options only if it is setted.
  if (!dragAutoScroll || !Array.isArray(dragAutoScroll.targets)) return;
  dragAutoScroll.targets.forEach(function (target) {
    // Check if it is an object to wrap.
    if (isTargetElement(target)) return;
    invariant('element' in target, 'You must provide an element in each scroll target');

    // Scroll target element.
    var element = target.element;
    // The element ref.
    var ref = {
      current: null
    };

    // Define the element property.
    Object.defineProperty(target, 'element', {
      get: function get() {
        return ref.current;
      },
      set: function set(element) {
        if (isTargetElement(element)) {
          ref.current = element;
        } else {
          ref = element;
        }
      }
    });

    // Set the element.
    target.element = element;
  });
}

/**
 * Returns if the target is a valid element.
 *
 * @param element - The target.
 * @returns - If the target is a valid element.
 */
function isTargetElement(target) {
  return (
    // A DOM element.
    target instanceof HTMLElement ||
    // The window.
    target instanceof window.constructor
  );
}

/**
 * Wrap the 'dragContainer' option.
 * Allow it to be a ref.
 *
 * @param options - The grid options.
 */
function setDragContainer(options) {
  var dragContainer = options.dragContainer;
  // The drag container ref.
  var ref = {
    current: null
  };

  // Define the property.
  Object.defineProperty(options, 'dragContainer', {
    get: function get() {
      return ref.current;
    },
    set: function set(value) {
      if (!value || value instanceof Element) {
        ref.current = value;
      } else {
        ref = value;
      }
    }
  });

  // Set the drag container.
  options.dragContainer = dragContainer;
}

/**
 * Wrap the 'dragSort' option.
 * Allow it to be an object containing the groupId of the chosen MuuriComponents.
 *
 * @param options - The grid options.
 * @param globalMap - The globalMap.
 */
function setDragSort(options, globalMap) {
  var dragSort = options.dragSort;
  // Parse this options only if it is an object.
  if (!dragSort || _typeof__default["default"](dragSort) !== 'object') return;
  // Check the options.
  invariant(typeof dragSort.groupId === 'string', 'You must provide a string as groupId');

  // The group, its reference doesn't change.
  var group = globalMap.getGroup(dragSort.groupId);

  // dragSort method.
  options.dragSort = function () {
    return group;
  };
}

/**
 * Wrap the 'dragStartPredicate' option.
 * To allow the drag:
 * - The global drag must be enabled.
 * - The item must be draggable.
 *
 * @param options - The grid options.
 */
function setDragStartPredicate(options) {
  var dragStartPredicate = options.dragStartPredicate;

  // Default predicate.
  var defaultStartPredicate = getDefaultStartPredicate(dragStartPredicate);

  // Wrap the method.
  options.dragStartPredicate = function (item, event) {
    if (!getDecoration(item.getGrid()).dragEnabled) return false;
    if (isDecorated(item) && getDecoration(item).draggable === false) return false;
    return defaultStartPredicate(item, event);
  };
}

/**
 * Given the dragStartPredicate option return the default method.
 *
 * @param dragStartPredicate - The dragStartPredicate option.
 * @returns - The defaultStartPredicate method.
 */
function getDefaultStartPredicate(dragStartPredicate) {
  return typeof dragStartPredicate === 'function' ? dragStartPredicate : function (item, event) {
    return Muuri__default["default"].ItemDrag.defaultStartPredicate(item, event, dragStartPredicate);
  };
}

var _excluded = ["children", "id", "groupIds", "gridProps", "filter", "sort", "sortOptions", "addOptions", "propsToData", "onSend", "onDragStart", "onDragEnd", "onFilter", "onSort", "onMount", "onUnmount", "forceSync", "dragFixed", "dragEnabled", "instantLayout"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// Muuri component.
var MuuriComponent = /*#__PURE__*/React.forwardRef(function MuuriComponent(_ref, muuriRef) {
  var children = _ref.children,
    id = _ref.id,
    groupIds = _ref.groupIds,
    gridProps = _ref.gridProps,
    filter = _ref.filter,
    sort = _ref.sort,
    sortOptions = _ref.sortOptions,
    addOptions = _ref.addOptions,
    propsToData = _ref.propsToData,
    onSend = _ref.onSend,
    onDragStart = _ref.onDragStart,
    onDragEnd = _ref.onDragEnd,
    onFilter = _ref.onFilter,
    onSort = _ref.onSort,
    onMount = _ref.onMount,
    onUnmount = _ref.onUnmount,
    forceSync = _ref.forceSync,
    dragFixed = _ref.dragFixed,
    dragEnabled = _ref.dragEnabled,
    instantLayout = _ref.instantLayout,
    options = _objectWithoutProperties__default["default"](_ref, _excluded);
  // Generate the Muuri instance.
  var grid = useMemoized(function () {
    // Remove the standard option '*'.
    // @ts-ignore
    options.items = [];
    // Muuri (0.9.0) generate the "ItemDrag" instances only if
    // drag is enabled. These instances do not handle scrolling well on touch devices,
    // so we only create these instances if drag-and-drop have to be used
    // (assuming that a boolean is passed to the prop instead of the default value "null").
    // The enabling / disabling of the drag is managed in dragStartPredicate.
    // @ts-ignore
    options.dragEnabled = dragEnabled !== null;

    // Allow the drag container to be a React.Ref<HTMLElement>.
    setDragContainer(options);
    // Allow the option to be an object ({ groupId }).
    setDragSort(options, muuriMap);
    // Allow the target elements to be React.Ref<HTMLElement>.
    setDragAutoScroll(options);
    // Allow enabling / disabling the drag-and-drop.
    setDragStartPredicate(options);

    // Generate the instance.
    var grid = getInstance(options);

    // Add the instance to the map.
    if (id) muuriMap.set(grid, id);
    // Add the decoration.
    addDecoration(grid, {
      id: id
    });
    // Set the ref.
    handleRef(muuriRef, grid);
    return grid;
  }); // eslint-disable-line

  // On unmount effect.
  React.useEffect(function () {
    // Clean-up.
    return function () {
      // Unset the ref.
      handleRef(muuriRef, null);
      // Remove the decorations.
      removeDecorations(grid);
      // Remove the instance from the map.
      if (id) muuriMap["delete"](id);
      // Destroy the instace
      grid.destroy();
    };
  }, []); // eslint-disable-line

  // Allow the groupIds to be changed.
  useInstantEffect(function () {
    // decorate the instance
    addDecoration(grid, {
      groupIds: groupIds
    });
    // Add the instance to the groups.
    if (groupIds) {
      groupIds.forEach(function (groupId) {
        muuriMap.setGroup(grid, groupId);
      });
    }

    // Clean-up.
    return function () {
      // Remove the instance from the groups.
      if (groupIds) {
        groupIds.forEach(function (groupId) {
          muuriMap.deleteGroup(grid, groupId);
        });
      }
    };
  }, groupIds || []);

  // Render.
  return /*#__PURE__*/React__default["default"].createElement(GridComponent, {
    grid: grid,
    gridProps: gridProps,
    filter: filter,
    sort: sort,
    sortOptions: sortOptions,
    addOptions: addOptions,
    propsToData: propsToData,
    onSend: onSend,
    onDragStart: onDragStart,
    onDragEnd: onDragEnd,
    onFilter: onFilter,
    onSort: onSort,
    onMount: onMount,
    onUnmount: onUnmount,
    forceSync: forceSync,
    dragFixed: dragFixed,
    dragEnabled: dragEnabled,
    instantLayout: instantLayout
  }, children);
});

// Proptypes.
MuuriComponent.propTypes = {
  id: PropTypes__default["default"].string,
  groupIds: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string.isRequired),
  showDuration: PropTypes__default["default"].number,
  showEasing: PropTypes__default["default"].string,
  hideDuration: PropTypes__default["default"].number,
  hideEasing: PropTypes__default["default"].string,
  visibleStyles: PropTypes__default["default"].shape({}),
  hiddenStyles: PropTypes__default["default"].shape({}),
  // @ts-ignore
  layout: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].exact({
    fillGaps: PropTypes__default["default"].bool,
    horizontal: PropTypes__default["default"].bool,
    alignRight: PropTypes__default["default"].bool,
    alignBottom: PropTypes__default["default"].bool,
    rounding: PropTypes__default["default"].bool
  })]),
  layoutOnResize: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].number]),
  layoutDuration: PropTypes__default["default"].number,
  layoutEasing: PropTypes__default["default"].string,
  dragContainer: PropTypes__default["default"].oneOfType([PropTypes__default["default"].instanceOf(HTMLElement), PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(HTMLElement).isRequired
  })]),
  // @ts-ignore
  dragStartPredicate: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].exact({
    distance: PropTypes__default["default"].number,
    delay: PropTypes__default["default"].number,
    handle: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].bool])
  })]),
  dragAxis: PropTypes__default["default"].oneOf(['x', 'y', 'xy']),
  dragSort: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].func, PropTypes__default["default"].exact({
    groupId: PropTypes__default["default"].string.isRequired
  })]),
  // @ts-ignore
  dragSortHeuristics: PropTypes__default["default"].exact({
    sortInterval: PropTypes__default["default"].number,
    minDragDistance: PropTypes__default["default"].number,
    minBounceBackAngle: PropTypes__default["default"].number
  }),
  // @ts-ignore
  dragSortPredicate: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].exact({
    action: PropTypes__default["default"].oneOf(['move', 'swap']),
    migrateAction: PropTypes__default["default"].oneOf(['move', 'swap']),
    threshold: PropTypes__default["default"].number
  })]),
  // @ts-ignore
  dragRelease: PropTypes__default["default"].exact({
    duration: PropTypes__default["default"].number,
    easing: PropTypes__default["default"].string,
    useDragContainer: PropTypes__default["default"].bool
  }),
  // @ts-ignore
  dragCssProps: PropTypes__default["default"].exact({
    touchAction: PropTypes__default["default"].string,
    userSelect: PropTypes__default["default"].string,
    userDrag: PropTypes__default["default"].string,
    tapHighlightColor: PropTypes__default["default"].string,
    touchCallout: PropTypes__default["default"].string,
    contentZooming: PropTypes__default["default"].string
  }),
  // @ts-ignore
  dragPlaceholder: PropTypes__default["default"].exact({
    enabled: PropTypes__default["default"].bool,
    createElement: PropTypes__default["default"].func,
    onCreate: PropTypes__default["default"].func,
    onRemove: PropTypes__default["default"].func,
    easing: PropTypes__default["default"].string,
    duration: PropTypes__default["default"].number
  }),
  containerClass: PropTypes__default["default"].string,
  itemClass: PropTypes__default["default"].string,
  itemVisibleClass: PropTypes__default["default"].string,
  itemHiddenClass: PropTypes__default["default"].string,
  itemPositioningClass: PropTypes__default["default"].string,
  itemDraggingClass: PropTypes__default["default"].string,
  itemReleasingClass: PropTypes__default["default"].string,
  itemPlaceholderClass: PropTypes__default["default"].string
};

// Default props.
MuuriComponent.defaultProps = _objectSpread(_objectSpread({}, Muuri__default["default"].defaultOptions), {}, {
  dragEnabled: null
});

// Display name.
MuuriComponent.displayName = 'MuuriComponent';

// The method return by the hook.

/**
 * The useData hook allow to set the data to the item in which the hook has been called.
 * It also returns the setter method.
 *
 * @param initialData - The data.
 * @param options - The options.
 * @returns - The setter method.
 */
function useData(initialData, options) {
  var _useItemContext = useItemContext(),
    itemRefController = _useItemContext.itemRefController;

  // Check if the hook is called inside an item.
  invariant(itemRefController !== undefined, 'The useData hook can be used only inside an Item');

  // Because of memoization, The identity of the function is guaranteed
  // to be stable so it will be safe to omit them as a dependency.
  var setData = useFunction(function (data, options) {
    // Check if the data is an object.
    invariant(_typeof__default["default"](data) === 'object', "The data must be an object, founded: ".concat(_typeof__default["default"](data)));

    // Default options.
    options = options || useData.defaultOptions;
    // Set the data.
    if (options.merge) {
      // Merge.
      var currentData = itemRefController.get('data') || {};
      itemRefController.set('data', Object.assign(currentData, data));
    } else {
      // Set.
      itemRefController.set('data', data);
    }
  });

  // Set the inital data.
  if (_typeof__default["default"](initialData) === 'object') {
    setData(initialData, options);
  }
  return setData;
}

// Default options.
useData.defaultOptions = {
  merge: false
};

/**
 * The useDrag hook re-render item (in which the hook has been called)
 * Every time it is dragged/released.
 * The hook returns if the item is being dragged.
 *
 * @returns - If the item is being dragged.
 */
function useDrag() {
  var _useItemContext = useItemContext(),
    eventController = _useItemContext.eventController;
  var reRender = useRerender();

  // Check if the hook is called inside an item.
  invariant(eventController !== undefined, 'The useDrag hook can be used only inside an Item');

  // Enable the event.
  React.useEffect(function () {
    eventController.enableEvent('drag', reRender);
  }, [eventController, reRender]);
  return eventController.getPayload('drag') || false;
}

// The method returned by the hook.

/**
 * The useDraggable hook allow to decide if the item (in which the hook has been called)
 * can be dragged or not.
 * It returns the setter method.
 *
 * @returns - The setter method.
 */
function useDraggable() {
  var _useItemContext = useItemContext(),
    itemRefController = _useItemContext.itemRefController;

  // Check if the hook is called inside an item.
  invariant(itemRefController !== undefined, 'The useData hook can be used only inside an Item');
  var setDraggable = useFunction(function (draggable) {
    // Set if the item can be dragged.
    itemRefController.set('draggable', !!draggable);
  });
  return setDraggable;
}

/**
 * The useGrid hook return the data of the MuuriComponent parent of the
 * item (in which the hook has been called).
 *
 * @returns - The data of the MuuriComponent.
 */
function useGrid() {
  var _useItemContext = useItemContext(),
    eventController = _useItemContext.eventController;
  var gridContext = useGridContext();
  var reRender = useRerender();

  // Check if the hook is called inside an item.
  invariant(eventController !== undefined && gridContext.grid !== undefined, 'The useData hook can be used only inside an Item');

  // The context is not updated when the hook is trigger
  // so we need to get the updated instance from the eventController.
  var grid = eventController.getPayload('send') || gridContext.grid;

  // Enable the event.
  React.useEffect(function () {
    eventController.enableEvent('send', reRender);
  }, [eventController, reRender]);
  return {
    id: grid._component.id,
    groupIds: grid._component.groupIds,
    grid: grid
  };
}

// The method returned by the hook.

/**
 * The useRefresh hook allow to notify the MuuriComponent that the
 * item dimensions are changed, so that it can update the layout.
 *
 * @param deps - The dependencies.
 * @returns - The refresh method.
 */
function useRefresh() {
  var deps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _useGridContext = useGridContext(),
    layoutController = _useGridContext.layoutController;
  var _useItemContext = useItemContext(),
    itemRefController = _useItemContext.itemRefController;

  // Check if the hook is called inside an item.
  invariant(itemRefController !== undefined && layoutController !== undefined, 'The useRefresh hook can be used only inside an Item');

  // Because of memoization, The identity of the function is guaranteed
  // to be stable so it will be safe to omit it as a dependency.
  var refresh = React.useCallback(function () {
    if (!itemRefController.hasItem()) return;
    // Get the item.
    var item = itemRefController.getItem();
    // If the component is rendering within the MuuriComponent.
    layoutController.refreshItem(item);
  }, [layoutController, itemRefController]);
  React.useEffect(function () {
    refresh();
  }, deps.concat(refresh)); // eslint-disable-line

  return refresh;
}

/**
 * The useShow hook allow you to know if the item is showing.
 * The item will re-render each time its visibility change.
 *
 * @returns - If the item is showing.
 */
function useShow() {
  var _useItemContext = useItemContext(),
    eventController = _useItemContext.eventController;
  var reRender = useRerender();

  // Check if the hook is called inside an item.
  invariant(eventController !== undefined, 'The useShow hook can be used only inside an Item');

  // Enable the event.
  React.useEffect(function () {
    eventController.enableEvent('show', reRender);
  }, [eventController, reRender]);
  return eventController.getPayload('show');
}

// The method returned by the hook.

/**
 * The useVisibility hook allow you to show/hide the item in which the hook has been called.
 *
 * @returns - The setter method.
 */
function useVisibility() {
  var _useGridContext = useGridContext(),
    layoutController = _useGridContext.layoutController;
  var _useItemContext = useItemContext(),
    eventController = _useItemContext.eventController,
    itemRefController = _useItemContext.itemRefController;

  // Check if the hook is called inside an item.
  invariant(itemRefController !== undefined && layoutController !== undefined && eventController !== undefined, 'The useData hook can be used only inside an Item');

  // Set visibility.
  var setVisibility = useFunction(function (visible, options) {
    if (!itemRefController.hasItem()) return;
    if (!!visible === eventController.getPayload('show')) return;

    // Default options.
    options = options || useVisibility.defaultOptions;

    // Set the visibility.
    layoutController.setItemVisibility(itemRefController.getItem(), visible, options.instant === true);
  });
  return setVisibility;
}

// Default options.
useVisibility.defaultOptions = {
  instant: false
};

var hooks = /*#__PURE__*/Object.freeze({
  __proto__: null,
  useData: useData,
  useDrag: useDrag,
  useDraggable: useDraggable,
  useGrid: useGrid,
  useRefresh: useRefresh,
  useShow: useShow,
  useVisibility: useVisibility
});

/** Responsive style options. */

/**
 * Get the responsive style.
 *
 * @param options - The options.
 * @returns - The style.
 */
function getResponsiveStyle(options) {
  // Check options.
  invariant(_typeof__default["default"](options) === 'object', 'You must define options');

  // Check columns.
  invariant(typeof options.columns === 'number' && options.columns > 0 && options.columns <= 1, 'options.columns must be a number between 0 (excluded) and 1 (included)');

  // Check height and ratio.
  invariant(typeof options.ratio === 'number' || typeof options.height === 'number' || typeof options.height === 'string', 'You must provide at least one option between height and ratio');

  // Check that the height and the ratio options are not setted togheter.
  invariant(typeof options.ratio !== 'number' || typeof options.height !== 'number' && typeof options.height !== 'string', 'You cannot provide both the height and the ratio options');

  // The margin values.
  var _getResponsiveMargin = getResponsiveMargin(options.margin || '0px'),
    margin = _getResponsiveMargin.margin,
    mStatic = _getResponsiveMargin.mStatic,
    mDynamic = _getResponsiveMargin.mDynamic;
  // The item width.
  var _getResponsiveWidth = getResponsiveWidth(options.columns, mStatic, mDynamic),
    needCalc = _getResponsiveWidth.needCalc,
    width = _getResponsiveWidth.width;

  // If ratio is used set The paddingTop
  // instad of the heght, the child element must
  // have "display: absolute".
  return options.ratio ? {
    width: needCalc ? "calc(".concat(width, ")") : width,
    paddingTop: getResponsivePaddingTop(width, options.ratio, needCalc),
    height: "0px",
    borderWidth: '0px',
    margin: margin
  } : {
    width: needCalc ? "calc(".concat(width, ")") : width,
    paddingTop: "0px",
    // @ts-ignore
    height: getFixedHeight(options.height),
    borderWidth: '0px',
    margin: margin
  };
}

/**
 * Get the responsive width.
 *
 * @param columns - The percentage.
 * @param mStatic - The static margin.
 * @param mDynamic - The dynamic margin.
 * @returns - The width.
 */
function getResponsiveWidth(columns, mStatic, mDynamic) {
  var needCalc = mStatic !== 0;
  var rawWidth = columns * 100 - mDynamic;
  var width = needCalc ? "".concat(rawWidth, "% - ").concat(mStatic, "px") : "".concat(rawWidth, "%");
  return {
    needCalc: needCalc,
    width: width
  };
}

/**
 * Get the responsive paddingTop.
 *
 * @param width - The width.
 * @param ratio - The width/height ratio.
 * @param needCalc - If the width need to be surrounded by calc().
 * @returns - The paddingTop.
 */
function getResponsivePaddingTop(width, ratio, needCalc) {
  return needCalc ? "calc((".concat(width, ") / ").concat(ratio, ")") : "".concat(parseFloat(width) / ratio, "%");
}

/**
 * Get the fixed height.
 *
 * @param height - The mixed height.
 * @returns - The height string.
 */
function getFixedHeight(height) {
  return typeof height === 'number' ? "".concat(height, "px") : height;
}

/**
 * The responsive margin.
 *
 * @param margin - The margin.
 * @returns - The responsive margin.
 */
function getResponsiveMargin(margin) {
  if (typeof margin === 'number') margin = "".concat(margin, "px");
  var margins = margin.trim().split(' ');

  // Margin default values.
  var leftMargin = '0px';
  var rightMargin = '0px';
  var mDynamic = 0;
  var mStatic = 0;

  // Get the values from the input.
  if (margins.length === 1) {
    leftMargin = rightMargin = margins[0];
  } else if (margins.length === 2) {
    leftMargin = rightMargin = margins[1];
  } else if (margins.length === 3) {
    leftMargin = rightMargin = margins[1];
  } else if (margins.length === 4) {
    leftMargin = margins[3];
    rightMargin = margins[1];
  }

  // Set dynamic/static margins.
  if (leftMargin.indexOf('%') === -1) mStatic += parseFloat(leftMargin);else mDynamic += parseFloat(leftMargin);
  if (rightMargin.indexOf('%') === -1) mStatic += parseFloat(rightMargin);else mDynamic += parseFloat(rightMargin);
  return {
    margin: margin,
    mStatic: mStatic,
    mDynamic: mDynamic
  };
}

/**
 * Get the static style.
 *
 * @param options - The options.
 * @returns - The style.
 */
function getStaticStyle(options) {
  var style = getResponsiveStyle(options);

  // Check the options.
  invariant('grid' in options, 'You mast pass the grid instance to get the static style.');

  // The sizer element.
  var sizerElement = options.grid.getSizerElement();

  // Set the style in the sizer.
  Object.assign(sizerElement.style, style);

  // Get the style from the sizer.
  var _window$getComputedSt = window.getComputedStyle(sizerElement),
    width = _window$getComputedSt.width,
    height = _window$getComputedSt.height,
    paddingTop = _window$getComputedSt.paddingTop,
    margin = _window$getComputedSt.margin;
  return {
    width: width,
    height: height,
    paddingTop: paddingTop,
    margin: margin
  };
}

// Hook names.
var hooksNames = ['useData', 'useDrag', 'useDraggable', 'useGrid', 'useRefresh', 'useShow', 'useVisibility'];

// Handler type.

// Hook handlers.
var HooksHandlers = [['useData', /*       */getHandler('setData')], ['useDrag', /*       */getHandler('isDragging')], ['useDraggable', /*  */getHandler('setDraggable')], ['useGrid', /*       */getHandler('gridData')], ['useRefresh', /*    */getHandler('refresh')], ['useShow', /*       */getHandler('isShowing')], ['useVisibility', /* */getHandler('setVisibility')]];

/**
 * Return the handler with the given key.
 *
 * @param key - The key.
 * @returns - The method.
 */
function getHandler(key) {
  return function handler(payload) {
    return _defineProperty__default["default"]({}, key, payload);
  };
}

/**
 * Run all the handlers and merge all the payloads.
 *
 * @param hooksHandlers - The handlers.
 * @returns - The merged payload.
 */
function getMerged(hooksHandlers) {
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray__default["default"](hooksHandlers.map(function (_ref2) {
    var _ref3 = _slicedToArray__default["default"](_ref2, 2),
      hookName = _ref3[0],
      handler = _ref3[1];
    var payload = hooks[hookName]();
    return handler(payload);
  }))));
}

/**
 * Item HOC for hooks.
 *
 * @param Component - The component to wrap.
 * @param enabledHooks - The hooks to enable.
 * @returns - The wrapped component.
 */
function withHooks(Component, enabledHooks) {
  // There must be an array of hooks to enable.
  invariant(Array.isArray(enabledHooks), 'An array of hooks name must be provided to wrap an item.');

  // All the hooks must be valid.
  enabledHooks.forEach(function (hookName) {
    invariant(hooksNames.includes(hookName), "Invalid item hook: ".concat(hookName));
  });

  // There must be at least one hook to enable.
  invariant(enabledHooks.length !== 0, 'To wrap an item at least one hook must be provided.');

  // Get the handlers array of the enabled hook.
  var hooksHandlers = HooksHandlers.filter(function (_ref4) {
    var _ref5 = _slicedToArray__default["default"](_ref4, 1),
      hookName = _ref5[0];
    return enabledHooks.includes(hookName);
  });

  // Return the HOC.
  return function WrappedItem(props) {
    // The hooks will run in the 'getMerged' method.
    return /*#__PURE__*/React__default["default"].createElement(Component, _extends__default["default"]({}, props, getMerged(hooksHandlers)));
  };
}

// Muuri-exports.
var AutoScroller = Muuri__default["default"].AutoScroller;
var ItemDrag = Muuri__default["default"].ItemDrag;

exports.AutoScroller = AutoScroller;
exports.ChildrenController = ChildrenController;
exports.EventController = EventController;
exports.FiberController = FiberController;
exports.FlagProp = FlagProp;
exports.GridComponent = GridComponent;
exports.GridContext = GridContext;
exports.GridProvider = GridProvider;
exports.ItemAddController = ItemAddController;
exports.ItemComponent = ItemComponent;
exports.ItemContext = ItemContext;
exports.ItemDrag = ItemDrag;
exports.ItemProvider = ItemProvider;
exports.ItemRefController = ItemRefController;
exports.ItemRemoveController = ItemRemoveController;
exports.LayoutController = LayoutController;
exports.MuuriComponent = MuuriComponent;
exports.MuuriMap = MuuriMap;
exports.getHandler = getHandler;
exports.getIndicesToAdd = getIndicesToAdd;
exports.getResponsiveStyle = getResponsiveStyle;
exports.getStaticStyle = getStaticStyle;
exports.muuriMap = muuriMap;
exports.useData = useData;
exports.useDrag = useDrag;
exports.useDraggable = useDraggable;
exports.useGrid = useGrid;
exports.useGridContext = useGridContext;
exports.useItemContext = useItemContext;
exports.useRefresh = useRefresh;
exports.useShow = useShow;
exports.useVisibility = useVisibility;
exports.withHooks = withHooks;
