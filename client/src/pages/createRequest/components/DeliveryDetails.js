/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { InputBlock, InputLabel, WaitingSelect } from '../style';
import InlineInput from '../../../components/inlineInput';
import SearchLocation from '../../../components/searchLocation';

export default function DeliveryDetails({ values, handleChange, formikInstance }) {
  const [routeSearch, setRouteSearch] = useState({
    from: '', to: '',
  });

  // const handleSetRoute = (route) => (e) => {
  //   setRouteSearch({
  //     [route]: e.target.value,
  //     [route === 'from' ? 'to' : 'from']: routeSearch[route === 'from' ? 'to' : 'from'],
  //   });
  // };
  const handleSetRoute = useDebouncedCallback((val, route) => {
    console.log(val, route);
    setRouteSearch({
      [route]: val,
      [route === 'from' ? 'to' : 'from']: routeSearch[route === 'from' ? 'to' : 'from'],
    });
  }, 700);

  return (
    <>
      <div>
        <span className="title"> 2. Confirm Delivery City and Date </span>
        <p className="optinalHeading">
          A Trusti traveler going to your city will deliver your request.
          Enter the country your order is coming from and which city you want it to be delivered to.
        </p>
          <InputLabel> Delivery Route </InputLabel>
          <InputBlock customStyles="margin-bottom: 1rem">
            <InlineInput
              text="From"
              placeholder="City or Country"
              inputWidth="100%"
              initStyles={`
                border: 1px solid rgba(0,0,0,0.15);
                &:hover{ border: 1px solid rgba(0,0,0,0.25); }
              `}
              focusStyles={{ border: '1px solid rgba(0,0,0,0.5)' }}
              name="deliverFrom"
              onChange={(e) => handleSetRoute.callback(e.target.value, 'from')}
              // value={routeSearch.from}
            />
            { routeSearch.from ? <SearchLocation searchQuery={routeSearch.from} /> : null }
          </InputBlock>
          <InputBlock>
            <InlineInput
              text="To"
              placeholder="City or Country"
              inputWidth="100%"
              initStyles={`
                border: 1px solid rgba(0,0,0,0.15);
                &:hover{ border: 1px solid rgba(0,0,0,0.25); }
              `}
              focusStyles={{ border: '1px solid rgba(0,0,0,0.5)' }}
              name="deliverTo"
              onChange={(e) => handleSetRoute.callback(e.target.value, 'to')}
              // value={values.deliverTo}
            />
            { routeSearch.to ? <SearchLocation searchQuery={routeSearch.to} /> : null }
          </InputBlock>
          {/* <br /> */}

        <InputBlock>
          <label>How long are you willing to wait?</label>
          <p className="optinalHeading">
            The longer period you are ready to wait the more offers you receive and can choose from
          </p>
          <WaitingSelect
            name="deliverBefore"
            onChange={handleChange}
            value={values.deliverBefore}
          >
            <option value="0"> Deliver my order anytime </option>
            <option value="90"> Up to 90 days </option>
            <option value="45"> Up to 45 days </option>
            <option value="21"> Up to 3 weeks </option>
          </WaitingSelect>
        </InputBlock>
      </div>
    </>
  );
}
