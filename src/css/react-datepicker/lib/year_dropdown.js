'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _year_dropdown_options = require('./year_dropdown_options');

var _year_dropdown_options2 = _interopRequireDefault(_year_dropdown_options);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrappedYearDropdownOptions = (0, _reactOnclickoutside2.default)(_year_dropdown_options2.default);

var YearDropdown = function (_React$Component) {
  _inherits(YearDropdown, _React$Component);

  function YearDropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, YearDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = YearDropdown.__proto__ || Object.getPrototypeOf(YearDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dropdownVisible: false
    }, _this.renderSelectOptions = function () {
      var minYear = _this.props.minDate ? _this.props.minDate.year() : 1900;
      var maxYear = _this.props.maxDate ? _this.props.maxDate.year() : 2100;

      var options = [];
      for (var i = minYear; i <= maxYear; i++) {
        options.push(_react2.default.createElement(
          'option',
          { key: i, value: i },
          i
        ));
      }
      return options;
    }, _this.onSelectChange = function (e) {
      _this.onChange(e.target.value);
    }, _this.renderSelectMode = function () {
      return _react2.default.createElement(
        'select',
        {
          value: _this.props.year,
          className: 'react-datepicker__year-select',
          onChange: _this.onSelectChange },
        _this.renderSelectOptions()
      );
    }, _this.renderReadView = function (visible) {
      return _react2.default.createElement(
        'div',
        { key: 'read', style: { visibility: visible ? 'visible' : 'hidden' }, className: 'react-datepicker__year-read-view', onClick: _this.toggleDropdown },
        _react2.default.createElement('span', { className: 'react-datepicker__year-read-view--down-arrow' }),
        _react2.default.createElement(
          'span',
          { className: 'react-datepicker__year-read-view--selected-year' },
          _this.props.year
        )
      );
    }, _this.renderDropdown = function () {
      return _react2.default.createElement(WrappedYearDropdownOptions, {
        key: 'dropdown',
        ref: 'options',
        year: _this.props.year,
        onChange: _this.onChange,
        onCancel: _this.toggleDropdown,
        scrollableYearDropdown: _this.props.scrollableYearDropdown,
        yearDropdownItemNumber: _this.props.yearDropdownItemNumber });
    }, _this.renderScrollMode = function () {
      var dropdownVisible = _this.state.dropdownVisible;

      var result = [_this.renderReadView(!dropdownVisible)];
      if (dropdownVisible) {
        result.unshift(_this.renderDropdown());
      }
      return result;
    }, _this.onChange = function (year) {
      _this.toggleDropdown();
      if (year === _this.props.year) return;
      _this.props.onChange(year);
    }, _this.toggleDropdown = function () {
      _this.setState({
        dropdownVisible: !_this.state.dropdownVisible
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(YearDropdown, [{
    key: 'render',
    value: function render() {
      var renderedDropdown = void 0;
      switch (this.props.dropdownMode) {
        case 'scroll':
          renderedDropdown = this.renderScrollMode();
          break;
        case 'select':
          renderedDropdown = this.renderSelectMode();
          break;
      }

      return _react2.default.createElement(
        'div',
        {
          className: 'react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--' + this.props.dropdownMode },
        renderedDropdown
      );
    }
  }]);

  return YearDropdown;
}(_react2.default.Component);

YearDropdown.propTypes = {
  dropdownMode: _propTypes2.default.oneOf(['scroll', 'select']).isRequired,
  maxDate: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  onChange: _propTypes2.default.func.isRequired,
  scrollableYearDropdown: _propTypes2.default.bool,
  year: _propTypes2.default.number.isRequired,
  yearDropdownItemNumber: _propTypes2.default.number
};
exports.default = YearDropdown;
