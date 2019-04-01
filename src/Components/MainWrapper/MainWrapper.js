// import React, { Component } from 'react';
// import styled from 'styled-components';

// import H1 from '../H1/H1';
// import Search from '../Search/Search';
// import Logo from '../Logo/Logo';
// import AboutButton from '../AboutButton/AboutButton';

// const MainWrapper = styled.div`
//   margin: 0; padding: 0;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   transition: .4s;
// `;

// class Wrapper extends Component{
//   constructor(){
//     super();
//     this.state = {
//       aboutVisible: false,
//     }
//   }

//   AboutFunc = () => {
//     this.setState({aboutVisible: !this.state.aboutVisible});
//   }

//   render(){
//     return(
//       <>
//         <Logo>SpacerX</Logo>
//         <AboutButton onClick={() => this.AboutFunc()}>About</AboutButton>
//         <MainWrapper>
//           <H1>co chciałbyś zobaczyć?</H1>
//           <Search/>
//         </MainWrapper>
//       </>
//     )
//   }
// }

// export default Wrapper;