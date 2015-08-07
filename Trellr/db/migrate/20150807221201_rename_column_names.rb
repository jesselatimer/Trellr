class RenameColumnNames < ActiveRecord::Migration
  def change
    rename_column :boards, :name, :title
    rename_column :lists, :name, :title
  end
end
