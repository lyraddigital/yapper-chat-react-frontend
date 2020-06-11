import React from 'react';
import './Layout.css';

const Layout = (props: any) => {
  return (
    <>
        <div className="appBar">
            <h1>Yapper</h1>
        </div>
        <div className="content">
            <div className="container">
                <h2>{props.pageTitle}</h2>
                {props.children}
            </div>
        </div>
    </>
  );
}

export default Layout;
