import { Link } from "react-router";
import facebookIcon from "../assets/images/facebook.gif";
import twitterIcon from "../assets/images/twitter.gif";
import igIcon from "../assets/images/ig.gif";
import whatsappIcon from "../assets/images/whatsapp.gif";
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/master.png";
import gpay from "../assets/images/gpay.png";
import paypal from "../assets/images/paypalicon.png";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const lang = localStorage.getItem("selectedLanguage") || "en";
    const translations = {
      en: {
        about: "About BambiOnline",
        desc: "We are a trusted ecommerce platform delivering top-quality products at unbeatable prices.",
        subscribe: "Subscribe",
        follow: "Follow Us",
      },
      zh: {
        about: "关于 BambiOnline",
        desc: "我们是一个值得信赖的电商平台，以无与伦比的价格提供高质量产品。",
        subscribe: "订阅",
        follow: "关注我们",
      },
    };

    // Apply translation to elements
    document.getElementById("about-title").innerText = translations[lang].about;
    document.getElementById("about-desc").innerText = translations[lang].desc;
    document.getElementById("subscribe-btn").innerText = translations[lang].subscribe;
    document.getElementById("follow-title").innerText = translations[lang].follow;
  }, []);

  return (
    <footer className="bg-black text-white pt-10 px-6 md:px-10 lg:px-20">
      <div className="flex justify-end mb-4">
        <select
          className="bg-[#fe5d26] text-white px-4 py-2 rounded-md focus:outline-none"
          onChange={(e) => {
            const lang = e.target.value;
            localStorage.setItem("selectedLanguage", lang);

            const translations = {
              en: {
                about: "About BambiOnline",
                desc: "We are a trusted ecommerce platform delivering top-quality products at unbeatable prices.",
                subscribe: "Subscribe",
                follow: "Follow Us",
              },
              zh: {
                about: "关于 BambiOnline",
                desc: "我们是一个值得信赖的电商平台，以无与伦比的价格提供高质量产品。",
                subscribe: "订阅",
                follow: "关注我们",
              },
            };

            document.getElementById("about-title").innerText = translations[lang].about;
            document.getElementById("about-desc").innerText = translations[lang].desc;
            document.getElementById("subscribe-btn").innerText = translations[lang].subscribe;
            document.getElementById("follow-title").innerText = translations[lang].follow;
          }}
        >
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About */}
        <div className="flex flex-col gap-3">
          <h3 id="about-title" className="font-bold text-[26px] text-[#fe5d26]">
            About BambiOnline
          </h3>
          <p id="about-desc" className="text-sm text-gray-300">
            We are a trusted ecommerce platform delivering top-quality products at unbeatable prices.
          </p>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Company info</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Blog</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Global Impact</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Advertise with us</span></Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[26px] text-[#fe5d26]">Quick Links</h3>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Home</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Shop</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Login/Register</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">My Orders</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Deals</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Contact Us</span></Link>
        </div>

        {/* Customer Services */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-[26px] text-[#fe5d26]">Customer Services</h3>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Shipping & Delivery</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Returns & Refunds</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">FAQs</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Help Center</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Live Chat</span></Link>
        </div>

        {/* Stay Updated */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[26px] text-[#fe5d26]">Stay Updated</h3>
          <div className="flex flex-col">
            <input
              className="bg-white placeholder-gray-700 text-black w-full max-w-xs py-2 px-3 rounded-md text-sm focus:outline-none"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button
              id="subscribe-btn"
              type="button"
              className="bg-[#fe5d26] hover:bg-white hover:text-black transition text-white w-full max-w-xs rounded-md py-2 mt-4 font-medium text-sm shadow-md"
            >
              Subscribe
            </button>
          </div>

          <div className="pt-5">
            <h3 id="follow-title" className="font-bold text-[22px] text-[#fe5d26]">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <Link to="#https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="facebook" className="h-6 w-6 hover:scale-110 transition" />
              </Link>
              <Link><img src={twitterIcon} alt="twitter" className="h-6 w-6 hover:scale-110 transition" /></Link>
              <Link><img src={igIcon} alt="instagram" className="h-6 w-6 hover:scale-110 transition" /></Link>
              <Link><img src={whatsappIcon} alt="whatsapp" className="h-6 w-6 hover:scale-110 transition" /></Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-[#fe5d26] border-dashed w-full my-6" />

      <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-6 text-sm text-gray-400">
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <Link><span className="hover:underline hover:text-[#fe5d26]">Privacy Policy</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Terms & Conditions</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Cookie Policy</span></Link>
          <Link><span className="hover:underline hover:text-[#fe5d26]">Sitemap</span></Link>
        </div>
        <div className="flex gap-4 flex-wrap justify-center md:justify-end">
          <img src={visa} alt="Visa" className="h-8 w-auto hover:scale-105 transition" />
          <img src={mastercard} alt="Mastercard" className="h-8 w-auto hover:scale-105 transition" />
          <img src={paypal} alt="PayPal" className="h-8 w-auto hover:scale-105 transition" />
          <img src={gpay} alt="Google Pay" className="h-8 w-auto hover:scale-105 transition" />
        </div>
      </div>

      <div className="text-center py-4 text-xs text-gray-500">
        &copy; 2025 BambiOnline. All rights reserved.
      </div>
    </footer>
  );
}
