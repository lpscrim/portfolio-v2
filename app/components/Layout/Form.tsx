"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Form() {
  const formRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const countryOptions = [
    "UK",
    "AF",
    "AL",
    "DZ",
    "AS",
    "AD",
    "AO",
    "AI",
    "AQ",
    "AG",
    "AR",
    "AM",
    "AW",
    "AU",
    "AT",
    "AZ",
    "BS",
    "BH",
    "BD",
    "BB",
    "BY",
    "BE",
    "BZ",
    "BJ",
    "BM",
    "BT",
    "BO",
    "BA",
    "BW",
    "BV",
    "BR",
    "BN",
    "BG",
    "BF",
    "BI",
    "KH",
    "CM",
    "CA",
    "CV",
    "KY",
    "CF",
    "TD",
    "CL",
    "CN",
    "CX",
    "CC",
    "CO",
    "KM",
    "CG",
    "CK",
    "CR",
    "CI",
    "HR",
    "CU",
    "CY",
    "CZ",
    "DK",
    "DJ",
    "DM",
    "DO",
    "TL",
    "EC",
    "EG",
    "SV",
    "GQ",
    "ER",
    "EE",
    "ET",
    "FK",
    "FJ",
    "FI",
    "FR",
    "GF",
    "PF",
    "GA",
    "GM",
    "GE",
    "DE",
    "GH",
    "GI",
    "GR",
    "GL",
    "GD",
    "GP",
    "GU",
    "GT",
    "GN",
    "GW",
    "GY",
    "HT",
    "HN",
    "HK",
    "HU",
    "IS",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IE",
    "IL",
    "IT",
    "JM",
    "JP",
    "JO",
    "KZ",
    "KE",
    "KI",
    "KP",
    "KR",
    "KW",
    "KG",
    "LA",
    "LV",
    "LB",
    "LS",
    "LR",
    "LY",
    "LI",
    "LT",
    "LU",
    "MO",
    "MK",
    "MG",
    "MW",
    "MY",
    "MV",
    "ML",
    "MT",
    "MH",
    "MQ",
    "MR",
    "MU",
    "YT",
    "MX",
    "FM",
    "MD",
    "MC",
    "MN",
    "MS",
    "MA",
    "MZ",
    "MM",
    "NA",
    "NR",
    "NP",
    "NL",
    "NZ",
    "NI",
    "NE",
    "NG",
    "NU",
    "NF",
    "NO",
    "OM",
    "PK",
    "PW",
    "PA",
    "PG",
    "PY",
    "PE",
    "PH",
    "PN",
    "PL",
    "PT",
    "PR",
    "QA",
    "RE",
    "RO",
    "RU",
    "RW",
    "KN",
    "LC",
    "VC",
    "WS",
    "SM",
    "SA",
    "RS",
    "SN",
    "SC",
    "SL",
    "SG",
    "SK",
    "SI",
    "SB",
    "SO",
    "ZA",
    "ES",
    "LK",
    "SH",
    "SD",
    "SR",
    "SZ",
    "SE",
    "CH",
    "SY",
    "TW",
    "TJ",
    "TZ",
    "TH",
    "TG",
    "TK",
    "TO",
    "TT",
    "TN",
    "TR",
    "TM",
    "TV",
    "UG",
    "UA",
    "AE",
    "GB",
    "US",
    "UY",
    "UZ",
    "VU",
    "VA",
    "VE",
    "VN",
    "VG",
    "VI",
    "EH",
    "YE",
    "CD",
    "ZM",
    "ZW",
    "XX",
  ];

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
        setTimeout(() => {
          handleClose();
        }, 2000);
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
      <div className="w-vw pt-12 bg-foreground z-45 overflow-hidden">
        <section
          id="contact"
          ref={formRef}
          className="form-container pt-12 pb-4 bg-foreground flex flex-col text-white justify-center items-center"
        >
          <h2 className="text-2xl">Get in Touch</h2>
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
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-background"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      required
                      autoComplete="given-name"
                      disabled={isSubmitting}
                      className="block w-full rounded-xs bg-background/80 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-secondary/60 placeholder:text-foreground/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-background"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      required
                      autoComplete="family-name"
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
                  <div className="mt-2.5">
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
                  <div className="mt-2.5">
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
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-background"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <div className="flex rounded-xs bg-background/80 outline-1 -outline-offset-1 outline-secondary/60 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-accent">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          aria-label="Country"
                          disabled={isSubmitting}
                          className="col-start-1 row-start-1 w-full appearance-none rounded-xs py-2 pr-7 pl-3.5 text-base text-foreground/80 placeholder:text-background/50 focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm/6 disabled:opacity-50"
                          defaultValue="UK"
                        >
                          {countryOptions.map((country) => (
                            <option key={country}>{country}</option>
                          ))}
                        </select>
                        <svg
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-foreground/80 sm:size-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="07123456789"
                        disabled={isSubmitting}
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-foreground placeholder:text-foreground/50 focus:outline-none sm:text-sm/6 disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-background"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={2}
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
                <div mailto="Lpscrim@gmail.com" className="cursor-pointer hover:text-secondary transition-colors duration-300"><span >Lpscrim@gmail.com</span></div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
