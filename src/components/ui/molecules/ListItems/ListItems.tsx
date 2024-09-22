import { PostType } from "../../../../types/post.type";
import { ItemList } from "../../atoms/ItemList/ItemList";

interface ListItemsProps {
  items: PostType[];
}
export const ListItems:React.FC<ListItemsProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map(item => (
        <ItemList key={item.id} item={item} />
      ))}
    </div>
  );
};