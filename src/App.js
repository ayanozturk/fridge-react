import React from 'react';
import TextInput from './components/TextInput';
import Button from './components/Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <TextInput label="Name" name="name" />
        <Button>Submit</Button>
      </div>
    );
  }
}

export default App;
