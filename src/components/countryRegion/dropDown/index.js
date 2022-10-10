import React, {Component} from 'react';

class DropDown extends Component {
   constructor(props) {
      super(props);

   }
   render() {
      const {options, onClick, label} = this.props;

      return (
         <>
            <label htmlFor="name">{label}</label>
            <select onChange={ onClick} name={label} id={"name"}>
               {options.map(option => <option
                  key={option.value}
                  value={option.value}>
                  {option.name}
               </option>)}
            </select>
         </>
      );
   }
}

export default DropDown;