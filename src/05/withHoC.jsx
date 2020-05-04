import React from 'react';

// 하이어오더 컴포넌트 기본 뼈대
export default function withHoC(WrappedComponent) {
  const { displayName, name } = WrappedComponent;
  const wrappedComponentName = displayName || name;
  return class WithHoC extends React.Component {
    static displayName = `withHoC(${wrappedComponentName})`;
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
