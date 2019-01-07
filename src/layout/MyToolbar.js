import React from 'react'
import { Toolbar, ToolbarGroup, Button, ButtonVariant, ToolbarItem, Dropdown, KebabToggle, DropdownItem, DropdownToggle } from '@patternfly/react-core'
import { BellIcon, CogIcon } from '@patternfly/react-icons'
import accessibleStyles from '@patternfly/patternfly-next/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly-next/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';

class MyToolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isKebabDropdownOpen: false,
            isDropdownOpen: false
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

    render() {
        const { isDropdownOpen, isKebabDropdownOpen } = this.state

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

        return (
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
    }
}

export default MyToolbar