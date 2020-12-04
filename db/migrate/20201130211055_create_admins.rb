class CreateAdmins < ActiveRecord::Migration[6.0]
  def change
    create_table :admins do |t|
      t.string :username
      t.string :password_digest
      t.string :full_name
      t.string :email
      t.string :linkedin
      t.string :phone

      t.timestamps
    end
  end
end
