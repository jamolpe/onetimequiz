import React from 'react';
import LabelTitle from '../../common/LabelTitle';

import './ShareSection.scss';

type ShareSectionProps = {
  sharingUrls: string[];
  adminUrl: string;
};
const ShareSection = ({ sharingUrls, adminUrl }: ShareSectionProps) => {
  return (
    <div className="share-section">
      <LabelTitle text={'Share with people'} />
      <div className="sharing-url">
        {sharingUrls.map((url) => {
          return (
            <input
              key={url}
              defaultValue={window.location.origin + url}
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
          defaultValue={window.location.origin + adminUrl}
        />
      </div>
    </div>
  );
};

export default ShareSection;
