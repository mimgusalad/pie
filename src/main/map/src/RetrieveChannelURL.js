import React from 'react';
import axios from 'axios';

class ChannelComponent extends React.Component {
  handleDeleteChannel = async () => {
    try {
      const response = await axios.get(
        'https://api-${process.env.REACT_APP_APP_ID}.sendbird.com/v3/group_channels',
        {
          headers: {
            'Api-Token': 'YOUR_API_TOKEN', // Replace with your Sendbird API token
          },
        }
      );

      const channelUrl = response.data.channel_url;
      console.log('Channel URL:', channelUrl);

      // Call your delete channel function or perform any other operations with the channel URL
    } catch (error) {
      console.error('Error retrieving group channels:', error);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDeleteChannel}>Delete Channel</button>
      </div>
    );
  }
}

export default ChannelComponent;
