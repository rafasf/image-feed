require 'spec_helper'

describe RedditFetcher do

  it 'fetches reddit and parses it response for given feed name' do
    RestClient.should_receive(:get).with(/funny/).and_return('the response')
    RedditParser.any_instance.should_receive(:parse).with('the response').and_return('fun entries')

    response = RedditFetcher.new.fetch 'funny'

    response.should == 'fun entries'
  end

end
