import React from "react";
export default class SiteLayout extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {

    };

    render() {

        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}
