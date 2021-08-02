import React from "react";
import { features } from '../data/country/Colombia/COLOMBIA.json'

const SelectItem = () => {

  const Departamento = features.map((fea, i)=>{
      return <option key = {i}> { fea.properties.NOMBRE_DPT }</option> 
  })  


  return <div>
      <select className="form-control form-control-sm  ">
            <option></option>
            {Departamento}
      </select>
  </div>;
};

export default SelectItem;
