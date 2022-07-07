import React, { Component } from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Home from './pages/Home';

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  render() {
    const { loading } = this.state;

    return (
      <>
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <Navbar />
            <Home />
          </>
        )}
      </>
    );
  }
}

export default App;
