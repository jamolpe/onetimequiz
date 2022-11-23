import React from 'react';
import LabelTitle from '../../common/LabelTitle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import './ShareSection.scss';

type ShareSectionProps = {
  sharingUrls: string[];
  adminUrl: string;
};
const ShareSection = ({ sharingUrls, adminUrl }: ShareSectionProps) => {
  return (
    <div className="share-section">
      <LabelTitle text={'Share with people'} />
      <div className="sharing-urls">
        {sharingUrls.map((url) => {
          return (
            <div key={url} className="url">
              <input
                defaultValue={window.location.origin + url}
                readOnly
                onFocus={(event) => event.target.select()}
              />
              <ContentCopyIcon
                className="copy-icon"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.origin + url);
                }}
              />
            </div>
          );
        })}
      </div>
      <LabelTitle text={'Admin info'} />
      <div className="sharing-urls">
        <div className="url">
          <input
            onFocus={(event) => event.target.select()}
            className="url-label"
            readOnly
            defaultValue={window.location.origin + adminUrl}
          />
          <ContentCopyIcon
            className="copy-icon"
            onClick={() => {
              navigator.clipboard.writeText(window.location.origin + adminUrl);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
