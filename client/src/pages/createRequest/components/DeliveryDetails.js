/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import { useDebouncedCallback } from 'use-debounce';
import { InputBlock, InputLabel, WaitingSelect } from '../style';
import InlineInput from '../../../components/inlineInput';
import SearchLocation from '../../../components/searchLocation';

export default function DeliveryDetails({
  values, handleChange,
  setFieldValue, errors,
}) {
  // helper, state or country :)
  const isState = (location) => location.state_id;

  const fromDefaultValue = !values.deliverFrom ? '' : (
    `${isState(JSON.parse(values.deliverFrom))
      ? `${JSON.parse(values.deliverFrom).country}, ${JSON.parse(values.deliverFrom).state_name}`.trim()
      : `${JSON.parse(values.deliverFrom).name}, ${JSON.parse(values.deliverFrom).sortname}`.trim()}`
  );
  const [fromRouteSearch, setFromRouteSearch] = useState({
    from: fromDefaultValue, hasSelected: !!fromDefaultValue,
  });

  const toDefaultValue = !values.deliverTo ? '' : (
    `${isState(JSON.parse(values.deliverTo))
      ? `${JSON.parse(values.deliverTo).country}, ${JSON.parse(values.deliverTo).state_name}`.trim()
      : `${JSON.parse(values.deliverTo).name}, ${JSON.parse(values.deliverTo).sortname}`.trim()}`
  );
  const [toRouteSearch, setToRouteSearch] = useState({
    to: toDefaultValue, hasSelected: !!toDefaultValue,
  });

  const handleSetRoute = (val, route) => {
    if (route === 'from') {
      setFromRouteSearch({
        from: val,
        hasSelected: false,
      });
    } else {
      setToRouteSearch({
        to: val,
        hasSelected: false,
      });
    }
  };

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
              onChange={(e) => handleSetRoute(e.target.value, 'from')}
              // value={deliverFromValue}
              value={fromRouteSearch.from}
            />
            { fromRouteSearch.from && !fromRouteSearch.hasSelected
              ? (
                <SearchLocation
                  searchQuery={fromRouteSearch.from}
                  name="deliverFrom"
                  onSelect={(data) => {
                    setFieldValue('deliverFrom', JSON.stringify(data));
                    setFromRouteSearch({
                      from: `${isState(data)
                        ? `${data.country}, ${data.state_name}`.trim()
                        : `${data.name}, ${data.sortname}`.trim()}`,
                      hasSelected: true,
                    });
                  }}
                />
              ) : null}
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
              onChange={(e) => handleSetRoute(e.target.value, 'to')}
              value={toRouteSearch.to}
            />
            { toRouteSearch.to && !toRouteSearch.hasSelected
              ? (
                <SearchLocation
                  searchQuery={toRouteSearch.to}
                  name="deliverTo"
                  onSelect={(data) => {
                    setFieldValue('deliverTo', JSON.stringify(data));
                    setToRouteSearch({
                      to: `${isState(data)
                        ? `${data.country}, ${data.state_name}`.trim()
                        : `${data.name}, ${data.sortname}`.trim()}`,
                      hasSelected: true,
                    });
                  }}
                />
              ) : null}
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
