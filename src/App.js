import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import './App.scss';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      navigation: true,
      favorite: false
      //PRACTICE//////////////////////
    }
  }
  //PRACTICE//////
  navigation() {
    this.setState({
      navigation: !this.state.navigation
    })
  }

  favorite() {
    this.setState({
      favorite: !this.state.favorite
    })
  }
  //PRACTICE//////

  render() {
    return (
      <div>
        <div className='main'>
          <div className='white-box titlebox'>
            <h1 id='header'>Tommydreamer57</h1>
          </div>
          <div className='white-box'>
            <div onClick={() => this.navigation()} className={this.state.navigation ? 'navigationbuttonbox' : 'navigationbuttonbox navigationboxright'}>
              <div className={this.state.navigation ? 'navigationbutton' : 'navigationbutton navigationbutton1'} />
              <div className={this.state.navigation ? 'navigationbutton' : 'navigationbutton navigationbutton2'} />
            </div>
          </div>
          <div className='white-box white-box-two'>
            <div className='navigationbutton nav-one' />
            <div className='navigationbuttonbox login login-one'><div className=''>Login</div></div>
            <div className='navigationbutton nav-two' />
            <div className='navigationbuttonbox login'><div className='login-two'>Login</div></div>
            <div className='navigationbutton nav-three' />
            <div className='navigationbuttonbox login'><div className='login-three'>Login</div></div>
            <div className='navigationbutton nav-four' />
          </div>
          <div className='white-box body' >
            <div className='favorite' onClick={() => this.favorite()} >
              <div className={this.state.favorite ? 'unsquare' : 'square'} />
              <div className={this.state.favorite ? 'unsquare' : 'square'} />
              <div className={this.state.favorite ? 'unsquare' : 'square'} />
            </div>
            <h1 className='title'>Title Title</h1>
            <h2 className='subtitle'>This is the subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac porttitor quam, hendrerit sodales nibh. Suspendisse dapibus ligula a lobortis mattis. Suspendisse scelerisque tempus justo ut volutpat. Curabitur ultrices, odio et molestie convallis, metus urna vehicula turpis, sed mollis lacus sapien sed nulla. Aenean vel urna lectus. Sed lorem ex, varius a luctus sed, posuere et diam. Donec vel iaculis enim. Vivamus tincidunt rutrum lacus eu porta. Nam odio ante, maximus sit amet suscipit in, iaculis in neque. Sed quis efficitur quam. Nulla in ipsum ullamcorper, blandit est sodales, pellentesque nulla. Nam vitae lorem tempus, pharetra mi sed, porta metus. Integer ultrices semper neque ut eleifend.<br />

              Nunc ullamcorper augue ut sapien varius rhoncus. Pellentesque porttitor luctus enim quis congue. Morbi rhoncus turpis vel ligula lacinia sollicitudin. Duis nec mauris in lorem ullamcorper commodo quis ac ipsum. Nulla id turpis in urna efficitur interdum. Vivamus massa libero, mollis id euismod id, ullamcorper sed lorem. Mauris mi mauris, mollis ut mi vel, egestas molestie neque. Etiam ac augue in massa egestas sodales. Donec et lorem sit amet urna mattis lacinia sit amet eu ipsum. Sed fermentum sodales dapibus. Praesent convallis lacus sit amet congue maximus. Donec nisi dui, ullamcorper sit amet nisl eu, euismod mattis tellus. Sed volutpat commodo elit, quis imperdiet purus auctor sed.<br />

              Aliquam gravida dolor in leo dapibus vehicula. Aliquam scelerisque massa eget elit sollicitudin vestibulum. Donec id hendrerit orci. Ut nibh mauris, lacinia vitae faucibus at, malesuada a augue. Morbi vulputate consectetur varius. Sed sodales auctor elit. Cras vehicula, diam vulputate tempus fringilla, nisl neque fringilla eros, at commodo arcu lorem ac ligula. Nullam cursus risus diam, sed egestas nunc interdum a. Nullam quis odio eleifend, maximus leo dictum, bibendum urna. Praesent quis pellentesque velit, eu feugiat augue. Suspendisse ut justo magna. Cras a tellus a libero suscipit accumsan. Proin non dolor nec nisi lobortis semper ac vitae magna. Phasellus vulputate, felis ut ullamcorper rutrum, mauris mi pellentesque dolor, in tincidunt odio enim vitae erat. Vestibulum eget pretium purus, id cursus felis.</p>
          </div>
        </div>
        <div className='navigationwrapper navwrap'>
          <div className='navigationbar'>
            <div className='navbutton' >Login</div>
            <div className='navbutton' >Login</div>
            <div className='navbutton' >Login</div>
            <div className='navloginbox'>
              <div className='navigationbutton nav-one' />
              <div className='navigationbuttonbox login login-one'><div className=''>Login</div></div>
              <div className='navigationbutton nav-two' />
            </div>
            <div className='navbut' ><div className='circlewrapper' ><div className='circle' /></div>Login</div>
            <div className='navbut' ><div className='circlewrapper' ><div className='circle' /></div>Login</div>
            <div className='navbut' ><div className='circlewrapper' ><div className='circle' /></div>Login</div>
          </div>
        </div>
        <div className='navigationshadow' />
      </div>
    );
  }
}

export default App;
