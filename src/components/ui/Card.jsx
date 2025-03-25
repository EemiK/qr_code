export function Card({ children }) {
    return <div className="border rounded-lg p-8 shadow-md">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-6">{children}</div>;
  }
  