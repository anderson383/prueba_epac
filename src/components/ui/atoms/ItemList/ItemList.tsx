import { PostType } from "../../../../types/post.type";

interface ItemListProps {
  item: PostType
}
export const ItemList:React.FC<ItemListProps> = ({ item }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-md">
      <h3 className="text-2xl font-bold text-indigo-300" >{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};