import React from 'react'
import { PageSidebar, Nav, NavItem, NavList } from '@patternfly/react-core';
import { global_breakpoint_md as breakpointMd } from '@patternfly/react-tokens'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: 0,
        }
    }

    onDropdownToggle = isDropdownOpen => {
        this.setState({
            isDropdownOpen
        });
    };

    onDropdownSelect = event => {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    };

    onKebabDropdownToggle = isKebabDropdownOpen => {
        this.setState({
            isKebabDropdownOpen
        });
    };

    onKebabDropdownSelect = event => {
        this.setState({
            isKebabDropdownOpen: !this.state.isKebabDropdownOpen
        });
    };


    render() {
        const { activeItem } = this.state
        const { isNavOpen } = this.props


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