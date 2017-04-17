import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <div className="Footer">
                <div className="container">
                    <div className="Footer-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
