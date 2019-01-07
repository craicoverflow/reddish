import React from 'react'
import {
    Toolbar,
    Nav,
    NavItem,
    NavList,
    ToolbarGroup,
    Button,
    DropdownItem,
    ToolbarItem,
    ButtonVariant,
    Dropdown,
    Brand,
    KebabToggle,
    DropdownToggle,
    PageHeader,
    Avatar,
    Page,
    PageSection,
    Text,
    PageSectionVariants,
    TextContent
} from '@patternfly/react-core'
import Sidebar from './Sidebar'
import { global_breakpoint_md as breakpointMd } from '@patternfly/react-tokens'
import accessibleStyles from '@patternfly/patternfly-next/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly-next/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import brandImg from './l_pf-reverse-164x11.png';
import avatarImg from './img_avatar.svg';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        const isNavOpen = typeof window != 'undefined' && window.innerWidth >= parseInt(breakpointMd.value, 10)
        this.state = {
            isDropdownOpen: false,
            isKebabDropdownOpen: false,
            isNavOpen,
            activeItem: 0
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
    }

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

    onNavToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    onNavSelect = result => {
        this.setState({
            activeItem: result.itemId
        });
    };

    render() {
        const { isNavOpen, isDropdownOpen, isKebabDropdownOpen, activeItem } = this.state

        const kebabDropdownItems = [
            <DropdownItem>
                <BellIcon /> Notifications
            </DropdownItem>,
            <DropdownItem>
                <CogIcon /> Settings
            </DropdownItem>
        ]

        const userDropdownItems = [
            <DropdownItem>Link</DropdownItem>,
            <DropdownItem component="button">Action</DropdownItem>
        ]

        const PageToolbar = (
            <Toolbar>
                <ToolbarGroup className={css(accessibleStyles.srOnly, accessibleStyles.visibleOnLg)}>
                    <ToolbarItem>
                        <Button id="default-example-uid=01" aria-label="Notification actions" variant={ButtonVariant.plain}>
                            <BellIcon />
                        </Button>
                    </ToolbarItem>
                    <ToolbarItem>
                        <Button id="default-example-uid-02" aria-label="Settings action" variant={ButtonVariant.plain}>
                            <CogIcon />
                        </Button>
                    </ToolbarItem>
                    <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
                        <Dropdown
                            isPlain
                            position="right"
                            onSelect={this.onKebabDropdownSelect}
                            toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
                            isOpen={isKebabDropdownOpen}
                            dropdownItems={kebabDropdownItems} />
                    </ToolbarItem>
                    <ToolbarItem className={css(accessibleStyles.srOnly, spacingStyles.visibleOnMd)}>
                        <Dropdown
                            isPlain
                            position="right"
                            onSelect={this.onDropdownSelect}
                            toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Enda Phelan</DropdownToggle>}
                            dropdownItems={userDropdownItems}
                            isOpen={isDropdownOpen} />
                    </ToolbarItem>
                </ToolbarGroup>
            </Toolbar>
        )

        const header = (
            <PageHeader
                style={{ backgroundColor: '#cc0000' }}
                logo={<Brand src={brandImg} alt="Patternfly Logo" />}
                avatar={<Avatar src={avatarImg} alt="Avatar image" />}
                showNavToggle
                onNavToggle={this.onNavToggle}
                toolbar={PageToolbar}
            />
        )

        const sideBar = <Sidebar isNavOpen={isNavOpen} activeItem={activeItem} />

        return (
            <React.Fragment>
                <Page header={header} sidebar={sideBar}>
                    <PageSection variant={PageSectionVariants.light}>
                        <TextContent>
                            <Text component="h1">Main Title</Text>
                            <Text component="p">
                                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                                of it’s relative line height of 1.5.
                            </Text>
                        </TextContent>
                    </PageSection>
                </Page>
            </React.Fragment>
        )
    }
}

export default Navbar