"use client";

import React, { useState, useEffect, useRef } from "react";

interface RegistrationData {
  id: string;
  type: "INDIVIDUAL" | "TEAM";
  fullName: string;
  email: string;
  phone: string;
  github: string;
  organization: string;
  roleOrProfession: string;
  city: string;
  teamName: string;
  teamMembers: string;
  domain: string;
  problemStatement: string;
  agreedToRules: boolean;
  registeredAt: string;
}

const domains = [
  "CLIMATE & ENVIRONMENT",
  "INFRASTRUCTURE",
  "HEALTH & WELLBEING",
  "EDUCATION",
  "ACCESSIBILITY",
  "PUBLIC SYSTEMS",
  "SAFETY",
  "HUMANITY & SOCIETY",
  "TECHNOLOGY",
  "OPEN INNOVATION",
];

export default function Registration() {
  const [track, setTrack] = useState<"INDIVIDUAL" | "TEAM">("INDIVIDUAL");
  const [lookupMode, setLookupMode] = useState<boolean>(false);
  const [lookupInput, setLookupInput] = useState<string>("");
  const [lookupResult, setLookupResult] = useState<RegistrationData | null>(null);
  const [lookupError, setLookupError] = useState<string>("");

  const containerRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    github: "",
    organization: "",
    roleOrProfession: "",
    city: "",
    teamName: "",
    teamMembers: "",
    domain: domains[0],
    problemStatement: "",
    agreedToRules: false,
  });

  const [submittedData, setSubmittedData] = useState<RegistrationData | null>(null);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const saved = localStorage.getItem("origins_2026_active_reg");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.id) {
          // Available for lookup
        }
      } catch {
        // ignore
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    if (!formData.email.trim() || !formData.email.includes("@"))
      errors.email = "Valid email address is required.";
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    if (!formData.organization.trim())
      errors.organization = "College or organization is required.";
    if (!formData.city.trim()) errors.city = "City is required.";
    if (track === "TEAM" && !formData.teamName.trim())
      errors.teamName = "Team name is required for team track.";
    if (!formData.problemStatement.trim() || formData.problemStatement.length < 20)
      errors.problemStatement = "Please describe the problem you want to solve (minimum 20 characters).";
    if (!formData.agreedToRules)
      errors.agreedToRules = "You must agree to the ORIGINS 2026 rules.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const newId = `ORI-${randomSuffix}`;

    const newRecord: RegistrationData = {
      id: newId,
      type: track,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      github: formData.github,
      organization: formData.organization,
      roleOrProfession: formData.roleOrProfession,
      city: formData.city,
      teamName: track === "TEAM" ? formData.teamName : formData.fullName,
      teamMembers: formData.teamMembers,
      domain: formData.domain,
      problemStatement: formData.problemStatement,
      agreedToRules: formData.agreedToRules,
      registeredAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setSubmittedData(newRecord);

    try {
      localStorage.setItem("origins_2026_active_reg", JSON.stringify(newRecord));
      const existingAll = JSON.parse(localStorage.getItem("origins_2026_all_regs") || "[]");
      existingAll.push(newRecord);
      localStorage.setItem("origins_2026_all_regs", JSON.stringify(existingAll));
    } catch {
      // storage unavailable
    }
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupError("");
    setLookupResult(null);

    const query = lookupInput.trim().toUpperCase();
    if (!query) {
      setLookupError("Please enter a Registration ID (e.g. ORI-123456).");
      return;
    }

    try {
      const all: RegistrationData[] = JSON.parse(
        localStorage.getItem("origins_2026_all_regs") || "[]"
      );
      const found = all.find((item) => item.id.toUpperCase() === query);
      if (found) {
        setLookupResult(found);
      } else {
        const active = JSON.parse(localStorage.getItem("origins_2026_active_reg") || "null");
        if (active && active.id.toUpperCase() === query) {
          setLookupResult(active);
        } else {
          setLookupError("No verified registration found with this ID.");
        }
      }
    } catch {
      setLookupError("Unable to retrieve records at this moment.");
    }
  };

  return (
    <section
      id="register"
      ref={containerRef}
      className="bg-white py-12 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full overflow-hidden"
    >
      <div className="space-y-12 sm:space-y-16">
        {/* Massive Hero Section Title with Reduced Mobile Size */}
        <div className="space-y-4 sm:space-y-8">
          <div className="select-none">
            <h1 className="text-5xl sm:text-7xl md:text-[15vw] lg:text-[180px] xl:text-[230px] leading-[0.9] sm:leading-[0.82] font-geist-thin tracking-[-0.04em] sm:tracking-[-0.07em] text-black uppercase break-words">
              REGISTER
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
                READY TO<br />BUILD?
              </h2>
            </div>
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light max-w-lg leading-relaxed">
                Official registration for the <a href="https://www.ouantum.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 font-semibold text-black hover:opacity-75">OUANTUM</a> (<span className="font-mono text-xs text-neutral-500">www.ouantum.com</span>) ORIGINS 2026 cohort. Secure your team or individual entry. Complete verification details below.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setLookupMode(!lookupMode);
                    setLookupResult(null);
                    setLookupError("");
                  }}
                  className="text-xs uppercase tracking-widest text-black underline underline-offset-4 hover:opacity-70 cursor-pointer font-inter font-medium"
                >
                  {lookupMode ? "RETURN TO REGISTRATION FORM" : "LOOKUP EXISTING REGISTRATION ID"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LOOKUP MODE VIEW */}
        {lookupMode ? (
          <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 sm:space-y-8 max-w-3xl">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                LOOKUP REGISTRATION PASS
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-inter font-light">
                Enter your assigned Registration ID to inspect entry details and status on the OUANTUM platform (www.ouantum.com).
              </p>
            </div>

            <form onSubmit={handleLookup} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                  REGISTRATION ID
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={lookupInput}
                    onChange={(e) => setLookupInput(e.target.value)}
                    placeholder="ORI-XXXXXX"
                    className="flex-1 px-5 sm:px-6 py-3.5 sm:py-4 bg-white rounded-full text-black font-mono text-sm tracking-wider outline-none focus:ring-1 focus:ring-black"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3.5 sm:py-4 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 cursor-pointer text-center"
                  >
                    VERIFY ID
                  </button>
                </div>
                {lookupError && (
                  <p className="text-xs text-black font-inter pt-1 font-medium">{lookupError}</p>
                )}
              </div>
            </form>

            {lookupResult && (
              <div className="mt-6 sm:mt-8 p-6 sm:p-12 bg-white rounded-3xl space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter">
                    STATUS: CONFIRMED
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {lookupResult.registeredAt}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                    REGISTRATION ID
                  </span>
                  <div className="text-3xl sm:text-5xl font-geist-thin text-black font-mono">
                    {lookupResult.id}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                      LEAD BUILDER / NAME
                    </span>
                    <p className="font-medium text-black">{lookupResult.fullName}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                      TRACK & TEAM
                    </span>
                    <p className="font-medium text-black">
                      {lookupResult.type} — {lookupResult.teamName}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                      AFFILIATION / CITY
                    </span>
                    <p className="text-neutral-700">
                      {lookupResult.organization}, {lookupResult.city}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                      CHOSEN DOMAIN
                    </span>
                    <p className="text-neutral-700">{lookupResult.domain}</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                    PROBLEM STATEMENT
                  </span>
                  <p className="text-xs text-neutral-700 font-inter leading-relaxed">
                    {lookupResult.problemStatement}
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : submittedData ? (
          /* SUCCESS STATE VIEW */
          <div className="p-6 sm:p-14 bg-[#F5F5F5] rounded-3xl space-y-8 sm:space-y-10 max-w-3xl animate-fadeIn">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-4xl font-geist-light uppercase tracking-tight text-black">
                REGISTRATION RECEIVED.
              </h3>
              <p className="text-sm sm:text-lg text-neutral-700 font-inter font-light">
                You&apos;re now part of the OUANTUM (<a href="https://www.ouantum.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">www.ouantum.com</a>) ORIGINS 2026 cohort.
              </p>
            </div>

            {/* Ticket / Pass Layout */}
            <div className="p-6 sm:p-12 bg-white rounded-3xl space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div>
                  <h4 className="text-xl sm:text-2xl font-geist-light tracking-tight text-black">
                    OUANTUM ORIGINS 2026
                  </h4>
                  <a
                    href="https://www.ouantum.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-neutral-400 hover:text-black transition-colors"
                  >
                    www.ouantum.com ↗
                  </a>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs font-mono font-medium uppercase text-black bg-[#F5F5F5] px-4 py-1.5 rounded-full inline-block">
                    {submittedData.type}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                  REGISTRATION ID
                </span>
                <div className="text-3xl sm:text-5xl font-geist-thin text-black font-mono">
                  {submittedData.id}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                    PRIMARY REGISTRANT
                  </span>
                  <p className="font-medium text-black">{submittedData.fullName}</p>
                  <p className="text-xs text-neutral-500">{submittedData.email}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                    TEAM & DOMAIN
                  </span>
                  <p className="font-medium text-black">{submittedData.teamName}</p>
                  <p className="text-xs text-neutral-500">{submittedData.domain}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                    ORGANIZATION / CITY
                  </span>
                  <p className="text-neutral-700">
                    {submittedData.organization}, {submittedData.city}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                    TIMESTAMP
                  </span>
                  <p className="text-neutral-700 font-mono text-xs">
                    {submittedData.registeredAt}
                  </p>
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-inter block">
                  TARGET PROBLEM THESIS
                </span>
                <p className="text-xs text-neutral-600 font-inter leading-relaxed">
                  {submittedData.problemStatement}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => handleCopyId(submittedData.id)}
                className="px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer text-center"
              >
                {copiedNotification ? "COPIED TO CLIPBOARD" : "COPY REGISTRATION ID"}
              </button>

              <button
                onClick={() => window.print()}
                className="px-8 py-4 bg-neutral-200 text-black text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-300 active:scale-[0.98] transition-all cursor-pointer text-center"
              >
                PRINT / SAVE PASS
              </button>

              <button
                onClick={() => {
                  setSubmittedData(null);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    github: "",
                    organization: "",
                    roleOrProfession: "",
                    city: "",
                    teamName: "",
                    teamMembers: "",
                    domain: domains[0],
                    problemStatement: "",
                    agreedToRules: false,
                  });
                }}
                className="px-8 py-4 bg-transparent text-neutral-600 text-xs uppercase tracking-widest font-inter rounded-full hover:text-black transition-colors cursor-pointer text-center"
              >
                REGISTER ANOTHER
              </button>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM */
          <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 max-w-3xl">
            {/* Track Switcher */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setTrack("INDIVIDUAL")}
                  className={`flex-1 sm:flex-none px-6 sm:px-8 py-3.5 text-xs uppercase tracking-widest font-inter rounded-full transition-all cursor-pointer text-center ${
                    track === "INDIVIDUAL"
                      ? "bg-black text-white"
                      : "bg-[#F5F5F5] text-black hover:bg-neutral-200"
                  }`}
                >
                  INDIVIDUAL
                </button>
                <button
                  type="button"
                  onClick={() => setTrack("TEAM")}
                  className={`flex-1 sm:flex-none px-6 sm:px-8 py-3.5 text-xs uppercase tracking-widest font-inter rounded-full transition-all cursor-pointer text-center ${
                    track === "TEAM"
                      ? "bg-black text-white"
                      : "bg-[#F5F5F5] text-black hover:bg-neutral-200"
                  }`}
                >
                  TEAM
                </button>
              </div>
            </div>

            {/* YOUR DETAILS */}
            <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 border border-neutral-100">
              <div className="relative z-10 space-y-6">
                <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                  YOUR DETAILS
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ada Lovelace"
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-2xl text-black font-inter text-sm outline-none focus:ring-1 focus:ring-black"
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-black font-inter pt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ada@domain.org"
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-2xl text-black font-inter text-sm outline-none focus:ring-1 focus:ring-black"
                    />
                    {formErrors.email && (
                      <p className="text-xs text-black font-inter pt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-2xl text-black font-inter text-sm outline-none focus:ring-1 focus:ring-black"
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-black font-inter pt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                      GITHUB / PORTFOLIO LINK (OPTIONAL)
                    </label>
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      placeholder="https://github.com/username"
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-2xl text-black font-inter text-sm outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* BACKGROUND */}
            <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 border border-neutral-100">
              <div className="relative z-10 space-y-6">
                <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                  BACKGROUND
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                      COLLEGE / ORGANIZATION *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Institution or Company name"
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-2xl text-black font-inter text-sm outline-none focus:ring-1 focus:ring-black"
                    />
                    {formErrors.organization && (
                      <p className="text-xs text-black font-inter pt-1">{formErrors.organization}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                      COURSE / PROFESSION
                    </label>
                    <input
                      type="text"
                      name="roleOrProfession"
                      value={formData.roleOrProfession}
                      onChange={handleChange}
                      placeholder="Systems Engineering / Researcher"
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-2xl text-black font-inter text-sm outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                      CITY *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Bengaluru / San Francisco / Berlin"
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-2xl text-black font-inter text-sm outline-none focus:ring-1 focus:ring-black"
                    />
                    {formErrors.city && (
                      <p className="text-xs text-black font-inter pt-1">{formErrors.city}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* YOUR BUILD */}
            <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 border border-neutral-100">
              <div className="relative z-10 space-y-6">
                <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                  YOUR BUILD
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  {track === "TEAM" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                          TEAM NAME *
                        </label>
                        <input
                          type="text"
                          name="teamName"
                          value={formData.teamName}
                          onChange={handleChange}
                          placeholder="Project Vanguard"
                          className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-2xl text-black font-inter text-sm outline-none focus:ring-1 focus:ring-black"
                        />
                        {formErrors.teamName && (
                          <p className="text-xs text-black font-inter pt-1">{formErrors.teamName}</p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                          CO-BUILDERS (NAMES & EMAILS)
                        </label>
                        <input
                          type="text"
                          name="teamMembers"
                          value={formData.teamMembers}
                          onChange={handleChange}
                          placeholder="Member 2, Member 3, Member 4"
                          className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-2xl text-black font-inter text-sm outline-none focus:ring-1 focus:ring-black"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                      CHALLENGE DOMAIN *
                    </label>
                    <select
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-2xl text-black font-inter text-sm outline-none focus:ring-1 focus:ring-black cursor-pointer"
                    >
                      {domains.map((d, i) => (
                        <option key={i} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <label className="text-xs uppercase tracking-widest text-neutral-500 font-inter block">
                        PROBLEM YOU WANT TO SOLVE *
                      </label>
                      <span className="text-[10px] text-neutral-400 font-mono">
                        {formData.problemStatement.length} chars
                      </span>
                    </div>
                    <textarea
                      name="problemStatement"
                      rows={4}
                      value={formData.problemStatement}
                      onChange={handleChange}
                      placeholder="Articulate the exact real-world bottleneck or structural challenge you plan to engineer a solution for during the 24 hours..."
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-2xl text-black font-inter text-sm outline-none focus:ring-1 focus:ring-black resize-y"
                    />
                    {formErrors.problemStatement && (
                      <p className="text-xs text-black font-inter pt-1">
                        {formErrors.problemStatement}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* CONFIRM & SUBMIT */}
            <div className="p-6 sm:p-12 bg-[#F5F5F5] rounded-3xl space-y-6 border border-neutral-100">
              <div className="relative z-10 space-y-6">
                <h3 className="text-xl sm:text-3xl font-geist-light uppercase tracking-tight text-black">
                  CONFIRM
                </h3>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 sm:gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreedToRules"
                      checked={formData.agreedToRules}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 accent-black cursor-pointer shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-neutral-700 font-inter leading-relaxed">
                      I agree to the OUANTUM ORIGINS 2026 rules: no SaaS clones, no empty pitch decks, and a commitment to build functional engineering aimed at authentic problems.
                    </span>
                  </label>
                  {formErrors.agreedToRules && (
                    <p className="text-xs text-black font-inter pt-1">{formErrors.agreedToRules}</p>
                  )}
                </div>

                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-black text-white text-xs uppercase tracking-[0.2em] font-inter rounded-full hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer block text-center"
                  >
                    SUBMIT REGISTRATION →
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
