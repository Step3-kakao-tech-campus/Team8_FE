import { AxiosError } from 'axios';
import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
  fallback: JSX.Element;
}

interface State {
  hasError: boolean;
  hasNotJoinedError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, hasNotJoinedError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (error instanceof AxiosError) {
      const errorData = error.response?.data.error;
      const { message, status } = errorData;
      const { pathname } = window.location;

      if (
        (status === 400 && message === '해당 그룹에 대한 권한이 없습니다.') ||
        (status === 404 && message === '해당 그룹에 속한 회원이 아닙니다.')
      ) {
        this.setState({ hasNotJoinedError: true });
        window.location.replace(`/${pathname.split('/')[1]}/join`);
      }
    }
    console.log(errorInfo);
  }

  render() {
    const { hasError, hasNotJoinedError } = this.state;
    const { children, fallback } = this.props;

    // const navigate = () => {
    //   window.location.replace(`/${pathname.split('/')[1]}/join`);
    // };

    if (hasNotJoinedError) {
      // const groupId = window.location.pathname.split('/')[1];
      // window.location.replace(`/${groupId}/join`);
      return null;
    }
    if (hasError) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
