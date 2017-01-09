class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  layout 'application'

  def index
  end
end
