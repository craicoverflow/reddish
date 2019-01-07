import React from 'react'
import { PageSidebar, Nav, NavItem, NavList } from '@patternfly/react-core';

class Sidebar extends React.Component {
    render() {
        const { isNavOpen, activeItem } = this.props

        const SideNav = (
            <Nav onSelect={this.onNavSelect} aria-label="Nav">
                <NavList>
                    <NavItem to="#nav-link1" itemId={0} isActive={activeItem === 0}>
                        System Panel
                    </NavItem>
                    <NavItem to="#nav-link2" itemId={1} isActive={activeItem === 1}>
                        System Panel 2
                    </NavItem>
                </NavList>
            </Nav>
        )

        return (
            <PageSidebar nav={SideNav} isNavOpen={isNavOpen}/>
        )
    }
}

export default Sidebar