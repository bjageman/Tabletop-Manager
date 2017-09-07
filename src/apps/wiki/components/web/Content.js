import React, { Component } from 'react';

class CampaignWikiContent extends Component {
  createMarkup(html_data) {
      return {__html: html_data};
    }

  render() {

    const entry = this.props.entry
    return (
        {entry.name}
        <div dangerouslySetInnerHTML={this.createMarkup(entry.content)} />
    );
  }
}

export default CampaignWikiContent;
