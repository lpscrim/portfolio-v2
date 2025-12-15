"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const formRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const formParams = new URLSearchParams();
      formData.forEach((value, key) => {
        if (typeof value === "string") {
          formParams.append(key, value);
        } else if (value instanceof File) {
          formParams.append(key, value.name);
        }
      });

      const response = await fetch("/contact.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formParams.toString(),
      });

      if (response.ok) {
        setSubmitMessage("Thank you! Your message has been sent.");
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again."
      );
      console.log('error:'+ error)
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!formRef.current || !triggerRef.current) return;

    gsap.set(formRef.current, { yPercent: -50 });

    const uncover = gsap
      .timeline({ paused: true })
      .to(formRef.current, { yPercent: 0, ease: "none" });

    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top bottom",
      end: "+=75%",
      animation: uncover,
      scrub: true,
      invalidateOnRefresh: true,
    });

    // Refresh on resize for dynamic layouts
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    // Optionally, refresh when images load
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
      img.addEventListener("load", handleResize);
    });

    // Initial refresh after mount
    ScrollTrigger.refresh();

    return () => {
      uncover.kill();
      st.kill();
      window.removeEventListener("resize", handleResize);
      imgs.forEach((img) => {
        img.removeEventListener("load", handleResize);
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div ref={triggerRef} id="trigger"></div>
      <div className="w-vw pt-12 bg-foreground z-65 overflow-hidden">
        <section
          id="contact"
          ref={formRef}
          className="form-container pt-12 xl:pt-16 pb-4 bg-foreground flex flex-col text-white justify-center items-center"
        >
          <h2 className="text-3xl lowercase home-title underline">Get in Touch</h2>
          <div id="contact-form" className="w-full px-16 md:px-32 lg:px-38">
            {submitMessage && (
              <div
                className={`mx-auto mt-4 max-w-2xl text-center p-4 rounded-xs ${
                  submitMessage.includes("Thank you")
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <form
              name="contact-2"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mx-auto mt-8 max-w-2xl sm:mt-14"
            >
              <input type="hidden" name="form-name" value="contact-2" />
              <input type="hidden" name="form-type" value="Contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-6 sm:grid-cols-2">
               
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-semibold text-background"
                  >
                    Name
                  </label>
                  <div className="mt-3.5">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      disabled={isSubmitting}
                      className="block w-full rounded-xs bg-background/80 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-secondary/60 placeholder:text-foreground/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm/6 font-semibold text-background"
                  >
                    Company
                  </label>
                  <div className="mt-3.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      disabled={isSubmitting}
                      className="block w-full rounded-xs bg-background/80 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-secondary/60 placeholder:text-foreground/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-background"
                  >
                    Email
                  </label>
                  <div className="mt-3.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      disabled={isSubmitting}
                      className="block w-full rounded-xs bg-background/80 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-secondary/60 placeholder:text-foreground/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent disabled:opacity-50"
                    />
                  </div>
                </div>

                

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-background"
                  >
                    Message
                  </label>
                  <div className="mt-3.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={isSubmitting}
                      className="block w-full rounded-xs bg-background/80 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-secondary/60 placeholder:text-foreground/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 items-center flex flex-row justify-between gap-x-6 sm:gap-x-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-40 rounded-xs bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-text shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer transition-all  ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:brightness-110 hover:-translate-y-0.5 active:brightness-90 active:translate-y-0.5"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
                <div mail-to="Lpscrim@gmail.com" className="cursor-pointer hover:text-secondary transition-colors duration-300"><span >Lpscrim@gmail.com</span></div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
