json.(@board, :id, :user_id, :title)

json.lists @board.lists do |list|
  json.(list, :id, :board_id, :title)
  json.cards list.cards, :id, :list_id, :title, :description
end
