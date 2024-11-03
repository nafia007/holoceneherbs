import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-green-800 text-white p-6 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">About Holocene Herbs</h3>
          <p className="text-green-200">
            Bringing ancient wisdom to modern wellness through traditional South African herbs, 
            immersive nature experiences, and community-driven farming initiatives.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-green-200 hover:text-white">Shop</a></li>
            <li><a href="#" className="text-green-200 hover:text-white">Nature Walks</a></li>
            <li><a href="#" className="text-green-200 hover:text-white">Herbal DAO</a></li>
            <li><a href="#" className="text-green-200 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-green-200 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-green-200 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <p className="text-green-200 mb-2">
            Stay updated with our latest herbal discoveries, upcoming nature walks, and DAO initiatives.
          </p>
          <form className="flex">
            <Input 
              placeholder="Your email" 
              className="bg-green-700 text-white placeholder-green-300 border-green-600" 
            />
            <Button type="submit" className="ml-2 bg-green-600 hover:bg-green-700">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-green-700 text-center text-green-200">
        © {new Date().getFullYear()} Holocene Herbs. All rights reserved.
      </div>
    </footer>
  )
}