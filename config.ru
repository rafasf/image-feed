require 'rubygems'
require 'bundler'

Bundler.require

require './web'

use Assets
run Sinatra::Application
