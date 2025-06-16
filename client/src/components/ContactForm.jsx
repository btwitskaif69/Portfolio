import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/magicui/shine-border";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus(null);

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
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch (error) {
    console.error("Submission error:", error);
    setStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div
      id="contact-form-section"
      className="align-center flex flex-col items-center justify-center bg-black py-10"
    >
      <div className="relative overflow-hidden w-[92%] bg-black rounded-lg p-8 space-y-8 my-8 outline-2">
        <ShineBorder
          borderWidth={1.5}
          duration={10}
          shineColor={["#be57ff", "#8500f5", "#f8dfff"]}
          className="rounded-lg"
        />

        <div className="space-y-4 relative z-10">
          <h1 className="text-4xl font-medium tracking-tight text-gray-100">Hello👋</h1>
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
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-base bg-white hover:bg-white/80 text-black transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>

          {status === "success" && (
            <p className="text-green-500 text-center">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
