import React from "react";

export default class FavoriteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { favorites } = this.props;
        return (
            <div>
                <ul>
                    {favorites.map(results => {
                        return (
                            <p key={results.link}></p>
                        );
                    })}
                </ul>
            </div>
        );
    }
}