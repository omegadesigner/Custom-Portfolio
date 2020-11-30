class CreateSkills < ActiveRecord::Migration[6.0]
  def change
    create_table :skills do |t|
      t.string :name
      t.string :thumbnail_url

      t.timestamps
    end
  end
end
