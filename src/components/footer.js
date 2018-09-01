import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small cyan darken-3">
                <div className="footer-copyright text-center py-3">Created by ENBL:
                <a href="https://www.ianbeihl.com"> ianbeihl.com</a>
                </div>
            </footer >
        );
    }
}

export default Footer;
