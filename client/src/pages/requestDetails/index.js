import React, { useEffect, useState } from 'react';
import MdContainer from '../../components/mdContainer';
import DeliveryDetails from './components/DeliveryDetails';
import RequestSummaryDetails from './components/RequestSummaryDetails';
import AdditionalProductDetails from './components/AdditionalProductDetails';
import RequesterInfo from './components/RequesterInfo';
import {
  ProductDescription, ProductDetailsContainer,
  ProductImg, ProductTitle, RequestDetailsContainer, RequestSummaryContainer,
} from './style';
import Footer from '../../components/footer';
import getSingleDetails from '../../api/requests/getSingleDetails';
import Spinner from '../../components/spinner';

export default function RequestDetails({ match }) {
  const [requestDetails, setRequestDetails] = useState({
    loading: true,
    data: {},
  });
  const urlSlug = match.params.id;
  // /request/details/:slug
  useEffect(() => {
    (async function () {
      const respData = await getSingleDetails(urlSlug);
      console.log(respData);
      setRequestDetails({
        loading: false,
        data: respData,
      });
    }());
  }, []);

  if (requestDetails.loading) {
    return <Spinner center customStyle="margin: 3rem 0;" />;
  }

  return (
    <>
    <MdContainer>
      <RequestDetailsContainer>
        <ProductDetailsContainer>
          <div className="wrapper">
            <ProductImg
              src={requestDetails.data.product_img}
              alt=""
            />
            <ProductTitle>
              {requestDetails.data.product_title}
            </ProductTitle>
            <ProductDescription>
              <span>Item description</span>
              {requestDetails.data.product_desc || 'N/A'}
            </ProductDescription>
            <AdditionalProductDetails
              link={requestDetails.data.product_link}
              quantity={requestDetails.data.quantity}
              size={requestDetails.data.product_size}
              unitPrice={requestDetails.data.product_unit_price}
            />
          </div>
        </ProductDetailsContainer>
        <RequestSummaryContainer>
          <div className="wrapper">
            <RequesterInfo
              requestTime={requestDetails.data.created_at}
              userImage={requestDetails.data.user_image}
              userName={requestDetails.data.user_name}
            />
            <RequestSummaryDetails
              quantity={requestDetails.data.quantity}
              productPrice={requestDetails.data.product_unit_price}
            />
            <DeliveryDetails
              deliverFrom={requestDetails.data.deliver_from.nice_display}
              deliverTo={requestDetails.data.deliver_to.nice_display}
              before={requestDetails.data.deliver_before}
            />
          </div>
        </RequestSummaryContainer>
      </RequestDetailsContainer>
    </MdContainer>
    <Footer />
    </>
  );
}
