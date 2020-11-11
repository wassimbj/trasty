/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { InputBlock } from '../style';
import InlineInput from '../../../components/inlineInput';

export default function DeliveryDetails() {
  return (
    <>
      <div>
        <span className="title"> 2. Confirm Delivery City and Date </span>
        <p className="optinalHeading">
          A Trusti traveler going to your city will deliver your request.
          Enter the country your order is coming from and which city you want it to be delivered to.
        </p>
        <InputBlock>
          <label> Route </label>
          <InlineInput text="Delivery from" placeholder="City or Country" inputWidth="70%" />
          <br />
          <InlineInput text="Delivery to" placeholder="City or Country" inputWidth="70%" />
        </InputBlock>

        <InputBlock>
          <label>How long are you willing to wait?</label>
          <p className="optinalHeading">
            The longer period you are ready to wait the more offers you receive and can choose from
          </p>
          <select>
            <option value="0"> Deliver my order anytime </option>
            <option value="90"> Up to 90 days </option>
            <option value="45"> Up to 45 days </option>
            <option value="21"> Up to 3 weeks </option>
          </select>
        </InputBlock>
      </div>
    </>
  );
}
