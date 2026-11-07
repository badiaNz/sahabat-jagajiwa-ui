export default function ChatWindow() {
  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
      <div className="mb-6">
        <h2 className="font-semibold text-lg">Create a chatbot gpt using python language what will be step for that</h2>
        <p className="text-blue-500 text-sm">CHAT A.I+</p>
        <div className="bg-white p-4 mt-2 rounded-lg shadow-sm text-sm space-y-2">
          <p><strong>Sure, I can help you...</strong></p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Install the required libraries:</strong> ...</li>
            <li><strong>Load the pre-trained model:</strong> ...</li>
            <li><strong>Create a chatbot loop:</strong> ...</li>
            <li><strong>Add some personality to the chatbot:</strong> ...</li>
          </ol>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-lg">What is use of that chatbot ?</h2>
        <p className="text-blue-500 text-sm">CHAT A.I+</p>
        <div className="bg-white p-4 mt-2 rounded-lg shadow-sm text-sm space-y-2">
          <p><strong>Chatbots can be used for a wide range of purposes, including:</strong></p>
          <p>Customer service chatbots can handle frequently asked questions...</p>
        </div>
      </div>
    </div>
  );
}
