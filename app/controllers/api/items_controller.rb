class Api::ItemsController < ApplicationController
  before_action :set_list, only: [:index]
  def index
    render json: @list.items.all
  end

  def show
  end

  private

  def set_list
    @list = List.find(params[:list_id])
  end


end
