import { useState, useEffect } from "react";
import Button from '../ui/Button'
import { FaRegCopy, FaCheck } from "react-icons/fa6";

function CopyToClipBoard({ text }) {
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);
  return (
    <div className="w-8 h-8 top-0">
      <Button onClick={() => { navigator.clipboard.writeText(text); setCopied(true) }} fullrounded={true} padding={false}>
        <div className="text-xs">
          {copied ? <FaCheck /> : <FaRegCopy />}
        </div>
      </Button>
    </div>
  )
}

export default CopyToClipBoard