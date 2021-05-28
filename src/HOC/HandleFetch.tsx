import React from "react";

interface Props {
  children: any;
  loading: boolean;
  error: Error | null;
  data: any;
}

const HandleFetch: React.FC<Props> = ({ children, loading, error, data }) => {
  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>Loading</div>;
  }
  if (!data) {
    <div>No data provided</div>;
  }
  if (data) {
    return children;
  }
};

export default HandleFetch;
