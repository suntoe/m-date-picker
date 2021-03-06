import * as React from 'react';
import Picker from 'rmc-picker/lib/index.web';
import classnames from 'classnames';
import DatePickerProps from './DatePickerProps';
import DatePickerMixin from './DatePickerMixin';

const DatePickerWeb = React.createClass<DatePickerProps, any>({
  mixins: [DatePickerMixin],

  getDefaultProps() {
    return {
      prefixCls: 'rmc-date-picker',
      pickerPrefixCls: 'rmc-picker',
      disabled: false,
    };
  },

  render() {
    const props = this.props;
    const {
      prefixCls, pickerPrefixCls, className,
      rootNativeProps, disabled,
    } = props;
    const {value, dataSource} = this.getValueDataSource();

    const inner = dataSource.map((items, i) => {
      return (
        <div key={i} className={`${prefixCls}-item`}>
          <Picker
            disabled={disabled}
            prefixCls={pickerPrefixCls}
            pure={false}
            selectedValue={value[i]}
            onValueChange={(v) => {this.onValueChange(i, v);}}
          >
            {items}
          </Picker>
        </div>
      );
    });

    return (
      <div {...rootNativeProps} className={classnames(className, prefixCls)}>
        {inner}
      </div>
    );
  },
});

export default DatePickerWeb;
