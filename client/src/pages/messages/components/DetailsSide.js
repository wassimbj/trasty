import React, { useEffect, useState } from 'react';
import Icon from '@hackclub/icons';
import {
  CloseDetailsBtn, DiscussDetailsSide,
  DetailsSideTitle
} from '../style';
import getDetails from '../../../api/messages/getDetails';
import OfferDetailsCard from './OfferDetailsCard';
// import SomethingWrongMsg from '../../../components/somethingWrongMsg';
import Spinner from '../../../components/spinner';

export default function DetailsSide({ roomId, onClose, isDetailsClosed }) {

  const [details, setDetails] = useState({
    loading: true,
    data: null
  });
  // const [error, setError] = useState(false)

  useEffect(() => {
    (async function(){
      try{
        const resp = await getDetails(roomId);
        setDetails({
          loading: false,
          data: resp.data.length > 0 ? resp.data[0] : null
        })
      }catch(err){
        setDetails({loading: false, data: null})
      }
    }());
  }, [roomId]);
  
  return (
    <DiscussDetailsSide isDetailsClosed={isDetailsClosed}>
      <DetailsSideTitle>
        Details
      <CloseDetailsBtn onClick={onClose}>
        <Icon glyph="view-close" size={26} />
      </CloseDetailsBtn>
      </DetailsSideTitle>

      <div style={{padding: '0.5rem'}}>
        {
          details.loading
            ? <Spinner />
            : (
              !!details.data && (
                <OfferDetailsCard
                    deliverDate={details.data.delivery_date}
                    deliverFrom={details.data.delivery_from}
                    deliverTo={details.data.deliver_to}
                    deliverReward={details.data.offer_reward}
                    productSlug={details.data.slug}
                    productTitle={details.data.product_title}
                />
              )
            )
        }
      </div>
    </DiscussDetailsSide>
  );
}
