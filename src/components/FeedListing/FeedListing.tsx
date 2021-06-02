import React, { FC } from "react";
import { OPMLListing } from "../../types/OPML";

interface Props {
  listing: OPMLListing;
}

const FeedListing: FC<Props> = ({ listing }) => {
  return (
    <div>
      <a href={listing.htmlurl}>
        <h4>{listing.title}</h4>
      </a>
      <a href={listing.xmlurl}>RSS Feed</a>
    </div>
  );
};

export { FeedListing };
