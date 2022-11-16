import React from 'react';
import LabelTitle from '../../common/LabelTitle';

import './ShareSection.scss';

type ShareSectionProps = {
  sharingUrls: string[];
  ownerUrl: string;
};
const ShareSection = ({ sharingUrls, ownerUrl }: ShareSectionProps) => {
  return (
    <div className="share-section">
      <LabelTitle text={'Share with people'} />
      <div className="sharing-url">
        {sharingUrls.map((url) => {
          return (
            <input
              key={url}
              defaultValue={url}
              readOnly
              onFocus={(event) => event.target.select()}
            />
          );
        })}
      </div>
      <LabelTitle text={'Admin info'} />
      <div className="sharing-url">
        <input
          onFocus={(event) => event.target.select()}
          className="url-label"
          readOnly
          defaultValue={ownerUrl}
        />
      </div>
    </div>
  );
};

export default ShareSection;
