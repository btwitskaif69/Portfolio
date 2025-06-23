import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/magicui/shine-border";
import { toast, Toaster } from "sonner";
import { ShinyButton } from "@/components/magicui/shiny-button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("All fields are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-form-section"
      className="flex flex-col items-center justify-center bg-black py-10"
    >
      {/* Mount Toaster */}
      <Toaster richColors position="top-right" />

      <div className="relative overflow-hidden w-[92%] bg-black rounded-lg p-8 space-y-8 my-8">
        <ShineBorder
          borderWidth={1.5}
          duration={10}
          shineColor={["#be57ff", "#8500f5", "#f8dfff"]}
          className="rounded-lg"
        />

        <div className="space-y-4 relative z-10">
          <h1 className="text-4xl font-medium tracking-tight text-gray-100">Hello 👋</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'd love to hear about your project. Let's see how we can team up.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-base font-medium text-gray-300">
                  Your name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="h-12 text-base bg-black border-gray-700 text-white focus-visible:ring-blue-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-base font-medium text-gray-300">
                  Your email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your-email@email.com"
                  className="h-12 text-base bg-black border-gray-700 text-white focus-visible:ring-blue-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-base font-medium text-gray-300">
                Your message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="min-h-[160px] text-base bg-black border-gray-700 text-white focus-visible:ring-blue-400"
                required
              />
            </div>
          </div>

          <ShinyButton
            type="submit"
            disabled={isSubmitting}
            className="w-full!"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </ShinyButton>
        </form>
      </div>
    </div>
  );
}
