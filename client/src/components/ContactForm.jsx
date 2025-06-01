import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/magicui/shine-border";

export function ContactForm() {
  return (
    <div className="p-5 align-center flex flex-col items-center justify-center bg-black">
      <div className="relative overflow-hidden w-[95%] mx-auto bg-black rounded-lg p-8 space-y-8 my-8 sm:mx-8 lg:mx-auto outline-2">
        <ShineBorder 
          borderWidth={1.5}
          duration={10}
          shineColor={["#be57ff", "#8500f5", "#f8dfff"]} 
          className="rounded-lg"
        />
        
        <div className="space-y-4 relative z-10">
          <h1 className="text-4xl font-medium tracking-tight text-gray-100">
            Hello👋
          </h1>
          
          <div className="space-y-3">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'd love to hear about your project. Let's see how we can team up.
            </p>
            <p className="text-gray-400">
              Or schedule a call directly using my{" "}
              <a 
                href="#" 
                className="underline text-blue-400 hover:text-blue-300 transition-colors"
              >
                calendar below
              </a>.
            </p>
          </div>
        </div>

        <form className="space-y-6 relative z-10">
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-base font-medium text-gray-300" htmlFor="name">
                  Your name
                </label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="h-12 text-base bg-black border-gray-700 text-white focus-visible:ring-blue-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-base font-medium text-gray-300" htmlFor="email">
                  Your email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your-email@email.com"
                  className="h-12 text-base bg-black border-gray-700 text-white focus-visible:ring-blue-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base font-medium text-gray-300" htmlFor="message">
                Your message
              </label>
              <Textarea
                id="message"
                placeholder="Write your message here..."
                className="min-h-[160px] text-base bg-black border-gray-700 text-white focus-visible:ring-blue-400"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-base bg-white hover:bg-white/80 text-black transition-colors"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}