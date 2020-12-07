class AddDetailsToSkills < ActiveRecord::Migration[6.0]
  def change
    add_column :skills, :display, :boolean
  end
end
