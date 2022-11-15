import React from 'react';

import './ShareSection.scss';

type ShareSectionProps = {
  sharingUrls: string[];
  ownerUrl: string;
};
const ShareSection = ({ sharingUrls, ownerUrl }: ShareSectionProps) => {
  return (
    <div className="share-section">
      <div className="url-label">
        {sharingUrls.map((url) => {
          return url;
        })}
      </div>
      <div className="url-label">{ownerUrl}</div>
    </div>
  );
};

export default ShareSection;
