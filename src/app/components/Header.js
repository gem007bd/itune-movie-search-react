import React from "react";

// export class Header extends React.Component{
//   render(){
//     return(
//       <nav className="navbar navbar-default">
//         <div className="navbar-header">
//             <ul className="nav navbar-nav">
//               <li><a href="#">Home</a></li>
//             </ul>
//         </div>
//       </nav>
//     );
//   }
// }

export const Header = (props) => {
    return(
      <nav className="navbar navbar-default">
        <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><a href="#">{props.homeLink}</a></li>
            </ul>
        </div>
      </nav>
    );
};