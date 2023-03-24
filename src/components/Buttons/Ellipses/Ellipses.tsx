import classnames from 'classnames';

export default function Ellipses({
  onClick,
  disabled = false
}: {
  onClick: React.MouseEventHandler;
  disabled: boolean;
}) {
  return (
    <button
      className={classnames(
        {
          'cursor-not-allowed text-red-200': disabled,
          'hover:bg-gray-200 active:bg-gray-300 text-gray-600': !disabled
        },
        'flex justify-center items-center rounded-full w-8 h-8 bg-gray-100'
      )}
      onClick={(e) => {
        if (disabled) return;
        onClick(e);
      }}>
      <EllipsesIcon className="rotate-90" />
    </button>
  );
}

function EllipsesIcon({ className = '' }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1"
      className={`${className} fill-current`}
      viewBox="0 0 60 40">
      <g transform="translate(-298.571 -290.79)">
        <path
          style={{ marker: 'none' }}
          d="M101 198.362a4.5 4.5 0 11-9 0 4.5 4.5 0 119 0z"
          display="inline"
          opacity="1"
          overflow="visible"
          transform="matrix(.66667 0 0 .66667 252.014 178.55)"></path>
        <path
          style={{ marker: 'none' }}
          d="M101 198.362a4.5 4.5 0 11-9 0 4.5 4.5 0 119 0z"
          display="inline"
          opacity="1"
          overflow="visible"
          transform="matrix(.66667 0 0 .66667 276.462 178.55)"></path>
        <path
          style={{ marker: 'none' }}
          d="M101 198.362a4.5 4.5 0 11-9 0 4.5 4.5 0 119 0z"
          display="inline"
          opacity="1"
          overflow="visible"
          transform="matrix(.66667 0 0 .66667 264.238 178.55)"></path>
      </g>
    </svg>
  );
}
