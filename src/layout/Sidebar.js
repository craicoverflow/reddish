import React from 'react'
import { PageSidebar, Nav, NavItem, NavList } from '@patternfly/react-core';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)

        this.state = { subreddits: [] }
    }

    componentDidMount() {
        fetch('https://api.reddit.com/subreddits.json')
            .then(response => {
                return response.json()
            }).then(results => {
                let subreddits = results.data.children.map((subreddit) => {

                    return {
                        id: subreddit.data.id,
                        displayName: subreddit.data.display_name,
                        url: subreddit.data.url
                    }
                })

                this.setState({
                    subreddits: subreddits
                })
            })
    }

    render() {
        const { isNavOpen, activeItem } = this.props
        const { subreddits } = this.state

        let navList = subreddits.map((s) => {
            return (
                <NavItem to={s.url} itemId={s.id} key={s.id} isActive={activeItem === s.id}>
                    {s.displayName}
                </NavItem>
            )
        })

        const SideNav = (
            <Nav onSelect={this.onNavSelect} aria-label="Nav">
                <NavList>
                    {navList}
                </NavList>
            </Nav>
        )

        return (
            <PageSidebar nav={SideNav} isNavOpen={isNavOpen} />
        )
    }
}

export default Sidebar