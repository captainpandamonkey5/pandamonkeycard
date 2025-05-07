import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

const CopyLinkButton = () => {
  const copyToClipboard = () => {
    const pageUrl = window.location.href;

    copy(pageUrl);
    toast.success("Link Copied!");
  };

  return (
    <button onClick={copyToClipboard} className="btn btn-xs">
      Copy Page Link
    </button>
  );
};

export default CopyLinkButton;
