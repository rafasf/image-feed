Dir.glob(File.dirname(__FILE__) + '/src/*.rb').sort.each { |file| require file }
require 'sinatra'

get '/' do
  redirect '/index.html'
end

get '/reddit/:area' do
  content_type :json
  RedditFetcher.new.fetch(params[:area]).to_json
end
