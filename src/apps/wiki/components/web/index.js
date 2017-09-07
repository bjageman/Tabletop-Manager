import React from 'react';

class CampaignWiki extends React.Component {
  createMarkup(html_data) {
      return {__html: html_data};
    }

  render() {

    const campaign = this.props.campaign
    // const wiki = this.props.campaign.wiki
    return (
        <div >
                {campaign.name}
        </div>

    );
  }
}

export default CampaignWiki;
