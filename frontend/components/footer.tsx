import Link from "next/link";

export const Footer = () => {
  return (
    <div className=" mx-auto wrapper bottom-0 flex flex-col items-center  w-full ">
      <div className="w-full h-10 bg-slate-700 flex items-center justify-center text-white">
        Back to Top
      </div>
      <div className="flex flex-col  bg-slate-800 px-4 md:flex-row w-full justify-around mx-auto p-4 gap-2">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg  tracking-tighter text-white text-primary">
            Get to know us
          </h4>
          <div className="text-lg tracking-tighter flex flex-col gap-1">
            <Link
              href={"https://app.100xdevs.com"}
              target="_blank"
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Amazon
            </Link>

            <Link
              href={"https://report-100xdevs.vercel.app/"}
              target="_blank"
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Careers
            </Link>
            <Link
              href={"https://report-100xdevs.vercel.app/"}
              target="_blank"
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Press Release
            </Link>
            <Link
              href={"https://report-100xdevs.vercel.app/"}
              target="_blank"
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Amazon Science
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg tracking-tighter max-sm:text-sm text-white text-primary">
            Connect with Us
          </h4>
          <div className="text-lg tracking-tighter flex flex-col gap-1">
            <Link
              href={"https://app.100xdevs.com"}
              target="_blank"
              className="text-foreground/75  max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Facebook
            </Link>

            <Link
              href={"https://report-100xdevs.vercel.app/"}
              target="_blank"
              className="text-foreground/75  max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Twitter
            </Link>
            <Link
              href={"https://report-100xdevs.vercel.app/"}
              target="_blank"
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg tracking-tighter text-white text-primary">
            Make money with Us
          </h4>
          <div className="text-lg tracking-tighter flex flex-col gap-1">
            <Link
              href={"https://app.100xdevs.com"}
              target="_blank"
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Sell on Amazon
            </Link>

            <Link
              href={"https://report-100xdevs.vercel.app/"}
              target="_blank"
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Sell under Amazon Accelerator
            </Link>
            <Link
              href={"https://report-100xdevs.vercel.app/"}
              target="_blank"
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Protect and Build Your Brand
            </Link>
            <Link
              href={"https://report-100xdevs.vercel.app/"}
              target="_blank"
              className="text-foreground/75  max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Amazon Global Scaling
            </Link>
            <Link
              href={"https://report-100xdevs.vercel.app/"}
              target="_blank"
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Become a Affiliate
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg tracking-tighter text-white  text-primary">
            Let Us Help You
          </h4>
          <div className="text-lg tracking-tighter flex flex-col gap-1">
            <Link
              href={"/tnc"}
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Your Account
            </Link>
            <Link
              href={"/privacy-policy"}
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Return Center
            </Link>
            <Link
              href={"/refund"}
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              100% Purchase Protection
            </Link>
            <Link
              href={"/refund"}
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Amazon App Download
            </Link>
            <Link
              href={"/refund"}
              className="text-foreground/75 max-sm:text-sm transition-all duration-300 text-slate-300 hover:text-blue-600"
            >
              Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
