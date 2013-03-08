Dir.glob(File.dirname(__FILE__) + '/src/*.rb').each { |file| require file }
require 'haml'
require 'sinatra'

get '/' do
  haml :index
end

get '/reddit/:area' do
  content_type :json
  RedditFetcher.new.fetch(params[:area]).to_json
end

