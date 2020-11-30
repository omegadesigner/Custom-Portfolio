class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :thumbnail_url
      t.string :github_url
      t.string :deployment_url
      t.text :short_description
      t.text :long_description

      t.timestamps
    end
  end
end
