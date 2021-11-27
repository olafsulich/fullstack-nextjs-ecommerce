import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return <p>access denied</p>;
  }

  // If session exists, display content
  return (
    <div>
      <h1>Protected Page</h1>
      <p>
        <strong>{content || "\u00a0"}</strong>
      </p>
    </div>
  );
}
