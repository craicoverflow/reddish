import React, { Component } from 'react'
import { PageHeader, Brand, Avatar } from '@patternfly/react-core'
import MyToolbar from './MyToolbar'
import brandImg from './l_pf-reverse-164x11.png';
import avatarImg from './img_avatar.svg';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: props.isNavOpen
        }
    }

    render() {
        return (
            <PageHeader
                style={{ backgroundColor: '#cc0000' }}
                logo={<Brand src={brandImg} alt="Patternfly Logo" />}
                avatar={<Avatar src={avatarImg} alt="Avatar image" />}
                showNavToggle
                onNavToggle={this.props.onNavToggle}
                toolbar={<MyToolbar />} />
        )
    }
}

export default Header