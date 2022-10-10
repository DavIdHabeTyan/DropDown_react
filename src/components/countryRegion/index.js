import React, {Component} from 'react';
import DropDown from "./dropDown";

class CountryRegion extends Component {
   constructor() {
      super();

      this.state = {
         countries: [],
         regions: [],
         countryValue: 1,
      }
   }

   componentDidMount() {
      fetch("/data/country.json")
         .then(res => res.json())
         .then(countries => this.setState({
            countries: countries.map(elem => ({
               value: +elem.id,
               name: elem.name,
            }))
         }))
         .catch(err => console.log(err, "Error Fetch"))


      fetch("/data/region.json")
         .then(res => res.json())
         .then(regions => this.setState({
            regions: regions.map(elem => ({
               value: +elem.id,
               regionID: elem.countryID,
               name: elem.name
            }))
         }))


   }

   handleSetValue = (e) => {
      this.setState({
         countryValue: +e.target.value
      })
   }

   render() {
      const {countries, regions, countryValue,} = this.state
      return (
         <div>
            <DropDown
               label={"Country"}
               options={countries}
               onClick={this.handleSetValue}
            />
            <hr/>
            <DropDown
               label={"Regions"}
               options={regions.filter(elem => elem.regionID === countryValue)}
            />
         </div>
      );
   }
}

export default CountryRegion;