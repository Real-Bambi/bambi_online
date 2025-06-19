import { Link } from "react-router"
import { FacebookIcon } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#641b2e] text-white pt-10 px-6 md:px-10 lg:px-15">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-[#8a2d3b]">
                {/* about column  */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-[26px]">About BambiOnline</h3>
                    <p className="">We are a trusted ecommerce platform delivering top-quality products at unbeatable prices.</p>
                    <Link><span className=" hover:underline">Company info</span></Link>
                    <Link><span className="hover:underline">Blog</span></Link>
                    <Link><span className="hover:underline">Global Impact</span></Link>
                    <Link><span className="hover:underline">Advertise with us</span></Link>
                </div>
                {/* Nav columns */}
                <div className="flex flex-col gap-3 pl-9">
                    <h3 className="font-bold text-[26px]">Quick Links</h3>
                    <Link><span className="hover:underline">Home</span></Link>
                    <Link><span className="hover:underline">Shop</span></Link>
                    <Link><span className="hover:underline">Login/Register</span></Link>
                    <Link><span className="hover:underline">My Orders</span></Link>
                    <Link><span className="hover:underline">Deals</span></Link>
                    <Link><span className="hover:underline">Contact Us</span></Link>
                </div>
                {/* customer services */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-[26px]">Customer Services</h3>
                    <Link><span className="hover:underline">Shipping & Delivery</span></Link>
                    <Link><span className="hover:underline">Returns & Refunds</span></Link>
                    <Link><span className="hover:underline">FAQs</span></Link>
                    <Link><span className="hover:underline">Help Center</span></Link>
                    <Link><span className="hover:underline">Live Chat</span></Link>
                </div>
                {/* stay updated */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-[26px]">Stay Updated</h3>
                    <div className="flex flex-col">
                        <input className="bg-white placeholder-gray-700 w-[275px] py-2 rounded-lg " type="email" name="email" id="" placeholder="Enter your email" />
                        <button className="bg-red-500 hover:bg-red-700 text-bold w-[275px] rounded-lg py-2 mt-5" type="submit">Subscribe</button>
                    </div>
                    <div className="flex flex-col gap-3 pt-5">
                        <h3 className="font-bold text-[26px]">Follow Us</h3>
                        <div className="flex flex-row gap-4">
                            <Link><img src={FacebookIcon} alt="facebook" srcset="" className="rounded-full hover:animate-bounce transition-all duration-200" /></Link>
                            <Link><img src="" alt="twitter" srcset="" className="rounded-full hover:animate-bounce transition-all duration-200" /></Link>
                            <Link><img src="" alt="instagram" srcset="" className="rounded-full hover:animate-bounce transition-all duration-200" /></Link>
                            <Link><img src="" alt="whatsapp" srcset="" className="rounded-full hover:animate-bounce transition-all duration-200" /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-red-400 border-dashed w-full"/>

            {/* currency & language */}
            <div class="flex flex-col md:flex-row justify-between items-center py-6 border-b border-[#8a2d3b] gap-4">
                <div class="flex gap-4 items-center">
                    <label for="language" className="text-md">🌐 Language:</label>
                    <select id="language" className="text-black text-md p-2 bg-white w-[150px] rounded-md">
                        <option className="">English</option>
                        <option>Chinese</option>


                    </select>
                </div>
                <div class="flex gap-4 items-center">
                    <label for="currency" className="text-md">💱 Currency:</label>
                    <select id="currency" className="text-black text-md bg-white p-2 rounded-md">
                        <option>USD - US Dollar</option>
                        <option>CNY - Chinese Yuan</option>
                        <option>GHS - Ghana Cedi</option>
                    </select>
                </div>
            </div>



            <hr className="border-red-400 border-dashed w-full"/>
            {/* policies & payments */}
            <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
                { /* policies */}
                <div className="flex flex-row gap-4">
                    <Link><span className="hover:underline">Privacy Policy</span></Link>
                    <Link><span className="hover:underline">Terms & Conditions</span></Link>
                    <Link><span className="hover:underline">Cookie Policy</span></Link>
                    <Link><span className="hover:underline">Sitemap</span></Link>
                </div>
                {/* payments */}
                <div className="flex flex-row gap-5">
                    <Link><img src="" alt="Visa" srcset="" className=" animate-pulse shadow-2xl" /></Link>
                    <Link><img src="" alt="Mastercard" srcset="" className=" animate-pulse shadow-2xl" /></Link>
                    <Link><img src="" alt="PayPal" srcset="" className=" animate-pulse shadow-2xl" /></Link>
                    <Link><img src="" alt="Apple Pay" srcset=""  className=" animate-pulse shadow-2xl"/></Link>
                </div>
            </div>
            <hr className="border-red-400 border-dashed w-full" />
            {/* regulatory & copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b gap-4">
                <div className="flex flex-row gap-5">
                    <img src="" alt="SSL Secure" />
                    <img src="" alt="Trustpilot" />
                    <img src="" alt="McAfee" />
                </div>
                <div className="text-gray-600">
                    &copy; 2025 BambiOnline. All rights reserved.
                </div>
            </div>
        </footer>
    )
}