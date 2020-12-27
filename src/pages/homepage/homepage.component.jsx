import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = ({history}) => (
  <div className='homepage'>
    <Directory history={history}/>
  </div>
);

render() {
  return (
    <div className="directory-menu">
      {this.state.sections.map(({title, imageUrl, id, size}) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} history={this.props.history}
      ))}
    </div>
  );
}
export default HomePage;
