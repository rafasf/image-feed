class Assets < Sinatra::Base
  configure do
    set :assets, (Sprockets::Environment.new { |env|
      env.append_path("#{settings.root}/../app/stylesheets")
      env.append_path("#{settings.root}/../app/javascripts")

      env.js_compressor = YUI::JavaScriptCompressor.new
      env.css_compressor = YUI::CssCompressor.new
    })
  end

  get '/assets/app.js' do
    content_type('application/javascript')
    settings.assets['app.js']
  end

  get '/assets/app.css' do
    content_type('text/css')
    settings.assets['app.css']
  end
end
