class Movie < ApplicationRecord
  belongs_to :category, class_name: 'Category'
  validates_presence_of :title, :description
end
