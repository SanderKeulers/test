import React, { Fragment } from 'react';

export const showLoading = () => (

    <Fragment>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </Fragment>
); 