import { useState } from "react";

function Message() {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  return (
    <div className="font-monte space-y-5">
      <h1 className="font-[800] text-xl text-gray-500">Want to Message me?</h1>

      <form className="space-y-3 w-[40%]">
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your valid email"
            className="border w-full px-4 py-2 rounded"
          />
        </div>
        <div>
          <textarea
            rows={4}
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="write something ..."
            className="border w-full px-4 py-2 rounded"
          />
        </div>

        <button className="border px-4 py-2 rounded bg-pink-500 text-white font-bold">
          Send
        </button>
      </form>
    </div>
  );
}

export default Message;
