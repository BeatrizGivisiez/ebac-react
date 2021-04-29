import React from 'react';
import './styles.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            user: [],
        }
    }

    render() {
        return (
            <h1>Olá mundo!</h1>
        )
    }
}

export default Home;