import {
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
  TransitionWrapper_default,
  css_default,
  transitionEndListener,
  triggerBrowserReflow,
  useUncontrolled
} from "./chunk-LPHAFMUU.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-3GKG5X4J.js";
import {
  require_react
} from "./chunk-4JI2AD7N.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/react-bootstrap/esm/Accordion.js
var import_classnames7 = __toESM(require_classnames());
var React9 = __toESM(require_react());
var import_react6 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AccordionBody.js
var import_classnames3 = __toESM(require_classnames());
var React5 = __toESM(require_react());
var import_react3 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AccordionCollapse.js
var import_classnames2 = __toESM(require_classnames());
var React3 = __toESM(require_react());
var import_react2 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Collapse.js
var import_classnames = __toESM(require_classnames());
var import_react = __toESM(require_react());

// node_modules/react-bootstrap/esm/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.filter((f) => f != null).reduce((acc, f) => {
    if (typeof f !== "function") {
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    }
    if (acc === null)
      return f;
    return function chainedFunction(...args) {
      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}
var createChainedFunction_default = createChainedFunction;

// node_modules/react-bootstrap/esm/Collapse.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var MARGINS = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt(css_default(elem, margins[0]), 10) + // @ts-ignore
  parseInt(css_default(elem, margins[1]), 10);
}
var collapseStyles = {
  [EXITED]: "collapse",
  [EXITING]: "collapsing",
  [ENTERING]: "collapsing",
  [ENTERED]: "collapse show"
};
var Collapse = import_react.default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = "height",
  in: inProp = false,
  timeout = 300,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  const computedDimension = typeof dimension === "function" ? dimension() : dimension;
  const handleEnter = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = "0";
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);
  const handleExit = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return (0, import_jsx_runtime.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? inProp : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    in: inProp,
    timeout,
    mountOnEnter,
    unmountOnExit,
    appear,
    children: (state, innerProps) => import_react.default.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames.default)(className, children.props.className, collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
    })
  });
});
var Collapse_default = Collapse;

// node_modules/react-bootstrap/esm/AccordionContext.js
var React2 = __toESM(require_react());
function isAccordionItemSelected(activeEventKey, eventKey) {
  return Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : activeEventKey === eventKey;
}
var context = React2.createContext({});
context.displayName = "AccordionContext";
var AccordionContext_default = context;

// node_modules/react-bootstrap/esm/AccordionCollapse.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var AccordionCollapse = React3.forwardRef(({
  as: Component = "div",
  bsPrefix,
  className,
  children,
  eventKey,
  ...props
}, ref) => {
  const {
    activeEventKey
  } = (0, import_react2.useContext)(AccordionContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-collapse");
  return (0, import_jsx_runtime2.jsx)(Collapse_default, {
    ref,
    in: isAccordionItemSelected(activeEventKey, eventKey),
    ...props,
    className: (0, import_classnames2.default)(className, bsPrefix),
    children: (0, import_jsx_runtime2.jsx)(Component, {
      children: React3.Children.only(children)
    })
  });
});
AccordionCollapse.displayName = "AccordionCollapse";
var AccordionCollapse_default = AccordionCollapse;

// node_modules/react-bootstrap/esm/AccordionItemContext.js
var React4 = __toESM(require_react());
var context2 = React4.createContext({
  eventKey: ""
});
context2.displayName = "AccordionItemContext";
var AccordionItemContext_default = context2;

// node_modules/react-bootstrap/esm/AccordionBody.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var AccordionBody = React5.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  bsPrefix,
  className,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-body");
  const {
    eventKey
  } = (0, import_react3.useContext)(AccordionItemContext_default);
  return (0, import_jsx_runtime3.jsx)(AccordionCollapse_default, {
    eventKey,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    children: (0, import_jsx_runtime3.jsx)(Component, {
      ref,
      ...props,
      className: (0, import_classnames3.default)(className, bsPrefix)
    })
  });
});
AccordionBody.displayName = "AccordionBody";
var AccordionBody_default = AccordionBody;

// node_modules/react-bootstrap/esm/AccordionButton.js
var React6 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var import_classnames4 = __toESM(require_classnames());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function useAccordionButton(eventKey, onClick) {
  const {
    activeEventKey,
    onSelect,
    alwaysOpen
  } = (0, import_react4.useContext)(AccordionContext_default);
  return (e) => {
    let eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter((k) => k !== eventKey);
        } else {
          eventKeyPassed = [...activeEventKey, eventKey];
        }
      } else {
        eventKeyPassed = [eventKey];
      }
    }
    onSelect == null ? void 0 : onSelect(eventKeyPassed, e);
    onClick == null ? void 0 : onClick(e);
  };
}
var AccordionButton = React6.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "button",
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-button");
  const {
    eventKey
  } = (0, import_react4.useContext)(AccordionItemContext_default);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = (0, import_react4.useContext)(AccordionContext_default);
  if (Component === "button") {
    props.type = "button";
  }
  return (0, import_jsx_runtime4.jsx)(Component, {
    ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : eventKey === activeEventKey,
    className: (0, import_classnames4.default)(className, bsPrefix, !isAccordionItemSelected(activeEventKey, eventKey) && "collapsed")
  });
});
AccordionButton.displayName = "AccordionButton";
var AccordionButton_default = AccordionButton;

// node_modules/react-bootstrap/esm/AccordionHeader.js
var import_classnames5 = __toESM(require_classnames());
var React7 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var AccordionHeader = React7.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "h2",
  bsPrefix,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-header");
  return (0, import_jsx_runtime5.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames5.default)(className, bsPrefix),
    children: (0, import_jsx_runtime5.jsx)(AccordionButton_default, {
      onClick,
      children
    })
  });
});
AccordionHeader.displayName = "AccordionHeader";
var AccordionHeader_default = AccordionHeader;

// node_modules/react-bootstrap/esm/AccordionItem.js
var import_classnames6 = __toESM(require_classnames());
var React8 = __toESM(require_react());
var import_react5 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var AccordionItem = React8.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  bsPrefix,
  className,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-item");
  const contextValue = (0, import_react5.useMemo)(() => ({
    eventKey
  }), [eventKey]);
  return (0, import_jsx_runtime6.jsx)(AccordionItemContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime6.jsx)(Component, {
      ref,
      ...props,
      className: (0, import_classnames6.default)(className, bsPrefix)
    })
  });
});
AccordionItem.displayName = "AccordionItem";
var AccordionItem_default = AccordionItem;

// node_modules/react-bootstrap/esm/Accordion.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var Accordion = React9.forwardRef((props, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    activeKey,
    bsPrefix,
    className,
    onSelect,
    flush,
    alwaysOpen,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "accordion");
  const contextValue = (0, import_react6.useMemo)(() => ({
    activeEventKey: activeKey,
    onSelect,
    alwaysOpen
  }), [activeKey, onSelect, alwaysOpen]);
  return (0, import_jsx_runtime7.jsx)(AccordionContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime7.jsx)(Component, {
      ref,
      ...controlledProps,
      className: (0, import_classnames7.default)(className, prefix, flush && `${prefix}-flush`)
    })
  });
});
Accordion.displayName = "Accordion";
var Accordion_default = Object.assign(Accordion, {
  Button: AccordionButton_default,
  Collapse: AccordionCollapse_default,
  Item: AccordionItem_default,
  Header: AccordionHeader_default,
  Body: AccordionBody_default
});

export {
  createChainedFunction_default,
  Collapse_default,
  AccordionContext_default,
  AccordionCollapse_default,
  AccordionBody_default,
  useAccordionButton,
  AccordionButton_default,
  AccordionHeader_default,
  AccordionItem_default,
  Accordion_default
};
//# sourceMappingURL=chunk-3GGCMYPV.js.map