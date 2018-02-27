class Movie < ApplicationRecord
  include PgSearch

  belongs_to :category, class_name: 'Category'
  validates_presence_of :title, :description

  pg_search_scope :search_for,
                  :against => :title,
                  :using => {
                    :tsearch => {:prefix => true}
                  }
end
