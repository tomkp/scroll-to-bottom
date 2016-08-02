"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollToBottom = function (_Component) {
    _inherits(ScrollToBottom, _Component);

    function ScrollToBottom() {
        _classCallCheck(this, ScrollToBottom);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollToBottom).apply(this, arguments));
    }

    _createClass(ScrollToBottom, [{
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
            var node = (0, _reactDom.findDOMNode)(this);
            this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var _this2 = this;

            if (this.shouldScrollBottom) {
                (function () {
                    var node = (0, _reactDom.findDOMNode)(_this2);
                    var intervalId = setInterval(function () {
                        node.scrollTop = node.scrollTop + 10;
                        if (node.scrollTop + node.offsetHeight >= node.scrollHeight) {
                            clearInterval(intervalId);
                        }
                    }, 50);
                })();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var children = _props.children;

            var style = {
                overflowY: "scroll"
            };
            return _react2.default.createElement(
                "div",
                { className: "Scroll-To-Bottom " + className, style: style },
                children
            );
        }
    }]);

    return ScrollToBottom;
}(_react.Component);

exports.default = ScrollToBottom;


ScrollToBottom.propTypes = {
    className: _react.PropTypes.string,
    children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired
};

ScrollToBottom.defaultProps = {};
