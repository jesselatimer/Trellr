class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.integer :user_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
