import React, {PropTypes} from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

// app state and dispatch functions passed in as props using
// mapStateToProps and mapDispatchToProps
const FuelSavingsForm = ({saveFuelSavings, calculateFuelSavings, appState}) => {

  const onTimeframeChange = (e) => {
    calculateFuelSavings(appState, 'milesDrivenTimeframe', e.target.value);
  };

  const fuelSavingsKeypress = (name, value) => {
    calculateFuelSavings(appState, name, value);
  };

  return (
    <div style={{marginLeft: 20}}>
      <h2>Fuel Savings Analysis</h2>
      <table>
        <tbody>
        <tr>
          <td><label htmlFor="newMpg">New Vehicle MPG</label></td>

          {/* dispatch calculateFuelSavings onChange */}
          {/* value of input is pulled from appState datastore */}
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="newMpg" value={appState.newMpg}/></td>
        </tr>
        <tr>
          <td><label htmlFor="tradeMpg">Trade-in MPG</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="tradeMpg" value={appState.tradeMpg}/></td>
        </tr>
        <tr>
          <td><label htmlFor="newPpg">New Vehicle gas price per gallon</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="newPpg" value={appState.newPpg}/></td>
        </tr>
        <tr>
          <td><label htmlFor="tradePpg">Trade-in price gas per gallon</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="tradePpg" value={appState.tradePpg}/></td>
        </tr>
        <tr>
          <td><label htmlFor="milesDriven">Miles Driven</label></td>
          <td>
            <FuelSavingsTextInput onChange={fuelSavingsKeypress} name="milesDriven" value={appState.milesDriven}/> miles
            per &nbsp;
            <select name="milesDrivenTimeframe" onChange={onTimeframeChange} value={appState.milesDrivenTimeframe}>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </td>
        </tr>
        <tr>
          <td><label>Date Modified</label></td>
          <td>{appState.dateModified}</td>
        </tr>
        </tbody>
      </table>

      <hr/>

      {appState.necessaryDataIsProvidedToCalculateSavings && <FuelSavingsResults savings={appState.savings}/>}

      {/* Dispatch saveFuelSavings action onClick */}
      <input type="submit" value="Save" onClick={() => saveFuelSavings(appState)}/>
    </div>
  );
};

FuelSavingsForm.propTypes = {
  saveFuelSavings: PropTypes.func.isRequired,
  calculateFuelSavings: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default FuelSavingsForm;
