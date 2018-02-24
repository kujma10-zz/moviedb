class Movie < ApplicationRecord
  validates_presence_of :title, :description, :category
end
