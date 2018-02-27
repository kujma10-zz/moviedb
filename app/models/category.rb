class Category < ApplicationRecord
  has_many :movies, foreign_key: :category_id
  validates_presence_of :name
end
