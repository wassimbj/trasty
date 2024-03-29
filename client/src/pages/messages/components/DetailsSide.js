import React, { useEffect, useState } from "react";
import Icon from "@hackclub/icons";
import {
  CloseDetailsBtn,
  DiscussDetailsSide,
  DetailsSideTitle,
} from "../style";
import getRoomOfferDetails from "../../../api/messages/getRoomOfferDetails";
import OfferDetailsCard from "./OfferDetailsCard";
// import SomethingWrongMsg from '../../../components/somethingWrongMsg';
import Spinner from "../../../components/spinner";

export default function DetailsSide({
  roomId,
  onClose,
  isDetailsClosed,
  isSmallScreen,
}) {
  const [details, setDetails] = useState({
    loading: true,
    data: null,
  });

  useEffect(() => {
    (async function () {
      try {
        const resp = await getRoomOfferDetails(roomId);
        setDetails({
          loading: false,
          data: resp.data.length > 0 ? resp.data[0] : null,
        });
      } catch (err) {
        setDetails({ loading: false, data: null });
      }
    })();
  }, [roomId]);

  return (
    <DiscussDetailsSide
      isSmallScreen={isSmallScreen}
      isDetailsClosed={isDetailsClosed}
    >
      <DetailsSideTitle>
        Details
        <CloseDetailsBtn onClick={onClose}>
          <Icon glyph="view-close" size={22} />
        </CloseDetailsBtn>
      </DetailsSideTitle>

      <div style={{ padding: "0.5rem" }}>
        {details.loading ? (
          <Spinner />
        ) : (
          !!details.data && (
            <OfferDetailsCard
              offerBy={details.data.offer_by}
              deliverDate={details.data.delivery_date}
              deliverFrom={details.data.delivery_from}
              deliverTo={details.data.deliver_to}
              deliverReward={details.data.offer_reward}
              productSlug={details.data.slug}
              productTitle={details.data.product_title}
            />
          )
        )}
      </div>
    </DiscussDetailsSide>
  );
}
