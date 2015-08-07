# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  list_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Card < ActiveRecord::Base
  validates :title, :description, :list, presence: true
  belongs_to :list
  has_one :board, through: :list
  has_one :user, through: :board
end
