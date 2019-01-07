import React from 'react'
import {
    Page,
    PageSection,
    Text,
    PageSectionVariants,
    TextContent
} from '@patternfly/react-core'
import Sidebar from './Sidebar'
import Header from './Header'
import { global_breakpoint_md as breakpointMd } from '@patternfly/react-tokens'

class Navigation extends React.Component {
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

    onNavToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    onNavSelect = result => {
        this.setState({
            activeItem: result.itemId
        });
    }

    render() {
        const { isNavOpen, activeItem } = this.state

        const sideBar = <Sidebar isNavOpen={isNavOpen} activeItem={activeItem} />

        return (
            <React.Fragment>
                <Page header={<Header onNavToggle={this.onNavToggle} isNavOpen={isNavOpen} />} sidebar={sideBar}>
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

export default Navigation