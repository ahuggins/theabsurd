import Header from '../Panels/Header';

export default function Card() {
  return (
    <div className="rounded-xl border border-gray-200 max-w-sm overflow-hidden">
      <Header onClick={() => console.log('hello from card')} />
      <Content></Content>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="flex bg-gray-100 border-t border-gray-200 divide-x">
      <FooterAction>Action 1</FooterAction>
      <FooterAction>Action 2</FooterAction>
      <FooterAction>Action 3</FooterAction>
    </div>
  );
}

function FooterAction({ children }: { children: React.ReactElement | string | null }) {
  return (
    <button className="w-full ml-0 text-center py-2 font-sans text-xs text-gray-600 hover:bg-gray-200 active:bg-gray-300">
      {children}
    </button>
  );
}

function Content() {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
    </div>
  );
}
