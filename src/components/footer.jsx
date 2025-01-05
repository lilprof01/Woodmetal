import React from "react";

function Footer() {
  const [year, setYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    const interval = setInterval(() => {
      const currentYear = new Date().getFullYear();
      if (currentYear !== year) {
        setYear(currentYear);
      }
    }, 1000 * 60 * 60 * 24); // Check every day

    return () => clearInterval(interval);
  }, [year]);


  return (
    <div className="flex flex-col dark:bg-gradient-to-b from-[#000000e2] to-[#000000e2] dark:text-white">
      <div className="flex flex-col sm:flex-row align-middle justify-center gap-20 sm:gap-10 p-12 sm:text-left">
        <div>
          <h2 className="text-2xl opacity-60">Got a question? here's our Hotline</h2>
          <a className="text-xl underline" href="tel:08031964190">08031964190</a>
        </div>
        <div className="flex justify-between sm:gap-40">
          <div>
            <h2 className="text-xl font-medium">Quicklinks</h2>
            <ul>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium">Quicklinks</h2>
            <ul>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
            </ul>
          </div>
          <div className="hidden sm:block">
            <h2 className="text-xl font-medium">Quicklinks</h2>
            <ul>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
              <li className="text-lg font-light hover:text-[#ffa500] hover:cursor-pointer">Link</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#ffa500] dark:bg-black text-white p-6">
        copyright&copy; reserved to miracodes - {year}
      </div>
    </div>
  )
};

export default Footer;