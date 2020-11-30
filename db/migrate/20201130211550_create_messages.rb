class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :contact_name
      t.string :contact_email
      t.string :contact_phone
      t.text :message

      t.timestamps
    end
  end
end
