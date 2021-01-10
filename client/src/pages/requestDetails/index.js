/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Icon from '@hackclub/icons';
import MdContainer from '../../components/mdContainer';
import DeliveryDetails from './components/DeliveryDetails';
import RequestSummaryDetails from './components/RequestSummaryDetails';
import AdditionalProductDetails from './components/AdditionalProductDetails';
import RequesterInfo from './components/RequesterInfo';
import {
  MyRequestMsg,
  ProductDescription, ProductDetailsContainer,
  ProductImg, ProductTitle, RequestDetailsContainer,
  RequestSummaryCard, RequestSummaryContainer, NoRequestFoundMsg,
} from './style';
import Footer from '../../components/footer';
import getSingleDetails from '../../api/requests/getSingleDetails';
import Spinner from '../../components/spinner';
import ShareRequest from './components/ShareRequest';

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
      setRequestDetails({
        loading: false,
        data: respData,
      });
    }());
  }, []);

  if (requestDetails.loading) {
    return <Spinner center customStyle="margin: 3rem 0;" />;
  }

  if (!requestDetails.loading && Object.keys(requestDetails.data).length === 0) {
    return (
      <NoRequestFoundMsg>
        We couldn't find this request. either its deleted, or it doesn't exist
      </NoRequestFoundMsg>
    );
  }

  return (
    <>
    <MdContainer>
      {requestDetails.data.isMyRequest ? (
        <MyRequestMsg>
          <Icon glyph="info" size={25} />
          <span>This is your request.</span>
        </MyRequestMsg>
      ) : null}
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
          <RequestSummaryCard>
            <RequesterInfo
              requestTime={requestDetails.data.created_at}
              userId={requestDetails.data.user_id}
              userImage={requestDetails.data.user_image}
              userName={requestDetails.data.user_name}
            />
            <RequestSummaryDetails
              iAlreadyOffered={requestDetails.data.alreadyOffered}
              isMyRequest={requestDetails.data.isMyRequest}
              requestId={requestDetails.data.id}
              quantity={requestDetails.data.quantity}
              productPrice={requestDetails.data.product_unit_price}
            />
            <DeliveryDetails
              deliverFrom={requestDetails.data.deliver_from.nice_display}
              deliverTo={requestDetails.data.deliver_to.nice_display}
              before={requestDetails.data.deliver_before}
            />
          </RequestSummaryCard>
          <ShareRequest />
        </RequestSummaryContainer>
      </RequestDetailsContainer>
    </MdContainer>
    <Footer />
    </>
  );
}
