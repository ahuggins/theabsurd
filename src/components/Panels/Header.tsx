import Ellipses from '../Buttons/Ellipses/Ellipses';

export default function Header({ onClick }: { onClick: React.MouseEventHandler }) {
  return (
    <div className="flex justify-end p-2">
      <Ellipses onClick={onClick} />
    </div>
  );
}
