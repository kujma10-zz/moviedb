class RemoveCategoryColumFromMovies < ActiveRecord::Migration[5.1]
  def change
    remove_column :movies, :category, :string
  end
end
