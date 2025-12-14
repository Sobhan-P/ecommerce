import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="w-full mt-16 bg-linear-to-b from-primary/20 to-secondary text-gray-800">
        <div class="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
          <div class="space-x-3 mb-6">
            <h1 className="font-logo font-extrabold text-center text-primary">
              GROCER
            </h1>
            <p className="text-xs font-light">Fresh Groceries To Your Door</p>
          </div>
          <p class="text-center max-w-xl text-sm font-normal leading-relaxed">
            GROCER offers a wide variety of fresh produce, pantry staples,
            snacks, beverages, and household essentials. Known for its friendly
            service, competitive prices, and community focus, it’s the go-to
            spot for everyday needs.
          </p>
        </div>
        <div class="border-t border-slate-200">
          <div class="max-w-7xl mx-auto px-6 pb-2 text-center text-sm font-normal">
            <a href="https://prebuiltui.com">GROCER</a> ©
            {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
