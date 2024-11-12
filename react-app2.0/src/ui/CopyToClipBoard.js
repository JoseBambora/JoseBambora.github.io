import { useState, useEffect } from "react";
import Button from '../ui/Button'
import { FaRegCopy, FaRegCircleCheck } from "react-icons/fa6";

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
    <Button onClick={() => { navigator.clipboard.writeText(text); setCopied(true) }} fullrounded={true}>
      {copied ? <FaRegCircleCheck /> : <FaRegCopy />}
    </Button>
  )
}

export default CopyToClipBoard