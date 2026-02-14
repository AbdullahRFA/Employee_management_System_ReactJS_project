function Header() {
  return (
    <div className="flex items-end justify-between text-white">
      <h1 className="text-2xl font-semibold">Hello <br /><span className="text-3xl font-semibold"> Abdullah 👋</span></h1>
      <button className="bg-red-500 px-5 py-3 rounded-lg text-lg font-medium">Logout</button>
    </div>
  );
}
export default Header;
