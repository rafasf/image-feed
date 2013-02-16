require 'rspec/core/rake_task'
require 'ci/reporter/rake/rspec'

task :default => [:unit]

RSpec::Core::RakeTask.new(:unit) do |spec|
  spec.rspec_opts = '--color --format documentation'
  spec.pattern = 'spec/*_spec.rb'
end
