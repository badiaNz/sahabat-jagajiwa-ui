export default function MessageInput() {
  return (
    <div className="flex items-center p-4 border-t bg-white">
      <input
        type="text"
        placeholder="What's in your mind?..."
        className="flex-1 border p-2 rounded-md"
      />
      <button className="ml-2 text-white bg-pink-500 p-2 rounded-full">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
