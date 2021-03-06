import { Box } from "@fluentui/react-northstar";
import { opmlToJsonResult } from "opml-to-json";
import React, { FC } from "react";

import { FeedListing } from "../../components";
import { OPMLListing, OPMLParent } from "../../types/OPML";

interface Props {
  feeds: opmlToJsonResult;
}

export const Feeds: FC<Props> = ({ feeds }) => {
  const renderParent = (item: OPMLParent) => {
    return (
      <Box key={item.title.toString()}>
        <h3>{item.title}</h3>
        {renderFeeds(item.children)}
      </Box>
    );
  };

  const renderChild = (item: OPMLListing) => {
    const child = item as OPMLListing;
    return <FeedListing listing={child} key={child.title.toString()} />;
  };

  const renderFeeds = children => {
    return children?.slice(0, 1).map((item: OPMLParent | OPMLListing) => {
      if (item.hasOwnProperty("children")) {
        return renderParent(item as OPMLParent);
      } else if (item.hasOwnProperty("htmlurl")) {
        return renderChild(item as OPMLListing);
      }
    });
  };

  return <>{renderFeeds(feeds.children)}</>;
};
