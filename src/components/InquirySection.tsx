import { CheckCircle2, AlertCircle } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { SERVICE_MODELS, ServiceModel } from '../data/goldenDragonData';

interface InquirySectionProps {
  selectedModelId: ServiceModel['id'] | null;
  onModelChange: (id: ServiceModel['id'] | null) => void;
}

type InquiryOption =
  | ServiceModel['id']
  | 'private-label'
  | 'product-development'
  | 'china-visit'
  | 'general';

interface FormState {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  buyerType: string;
  serviceFocus: InquiryOption;
  freightPreference: string;
  productNotes: string;
}

interface FormErrors {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  productNotes?: string;
}

const SERVICE_FOCUS_LABELS: Record<InquiryOption, string> = {
  'model-a': 'Model A — Mixed-carton electronics consolidation',
  'model-b': 'Model B — Technical factory sourcing and inspection',
  'model-c': 'Model C — Direct-factory project procurement',
  'private-label': 'Private Label & Packaging Solutions',
  'product-development': 'Develop Your Product from Scratch',
  'china-visit': 'China Visit & On-the-Ground Assistance',
  general: 'General China–UAE/GCC Sourcing Consultation',
};

export default function InquirySection({
  selectedModelId,
  onModelChange,
}: InquirySectionProps) {
  const [form, setForm] = useState<FormState>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    buyerType: 'Importer / Wholesaler',
    serviceFocus: selectedModelId ?? 'model-a',
    freightPreference: 'To be advised',
    productNotes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedBrief, setSubmittedBrief] = useState<FormState | null>(null);

  useEffect(() => {
    if (selectedModelId) {
      setForm((prev) => ({ ...prev, serviceFocus: selectedModelId }));
      setSubmittedBrief(null);
    }
  }, [selectedModelId]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.companyName.trim()) {
      nextErrors.companyName = 'Please enter your company or trading name.';
    }
    if (!form.contactName.trim()) {
      nextErrors.contactName = 'Please enter a primary contact name.';
    }
    const emailTrimmed = form.email.trim();
    if (!emailTrimmed) {
      nextErrors.email = 'Please enter a business email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      nextErrors.email = 'Please enter a valid email address (e.g., buyer@company.ae).';
    }
    const phoneTrimmed = form.phone.trim();
    if (phoneTrimmed && !/^[+\d\s()-]{7,20}$/.test(phoneTrimmed)) {
      nextErrors.phone = 'Please enter a valid phone or WhatsApp number.';
    }
    if (!form.productNotes.trim() || form.productNotes.trim().length < 12) {
      nextErrors.productNotes =
        'Please share a short summary of your products, specifications, or target quantities.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    setSubmittedBrief({ ...form });
  };

  const handleServiceSelect = (value: InquiryOption) => {
    setForm((prev) => ({ ...prev, serviceFocus: value }));
    if (value === 'model-a' || value === 'model-b' || value === 'model-c') {
      onModelChange(value);
    } else {
      onModelChange(null);
    }
  };

  return (
    <section id="contact" className="bg-white border-b border-[#E2E6EC]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Consultation Framing */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-sm font-semibold text-[#A67317]">
              Let’s Build Your Next Supply Opportunity
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#081B33] text-balance">
              Discuss Your China Sourcing &amp; Consolidation Brief
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Share your target products, technical specifications, and destination requirements.
              We start every engagement with Stage 01 (Understand)—documenting specifications,
              packaging, compliance needs, and delivery targets before outreach begins.
            </p>

            <div className="bg-[#FAF9F6] border border-[#E2E6EC] rounded-lg p-6 space-y-4">
              <div className="text-sm font-semibold text-[#081B33]">
                What to include in your brief
              </div>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="text-[#A67317] font-semibold">
                    01.
                  </span>
                  <span>Product category, model numbers, or technical ratings</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="text-[#A67317] font-semibold">
                    02.
                  </span>
                  <span>Estimated order quantities, carton mix, or container scope</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="text-[#A67317] font-semibold">
                    03.
                  </span>
                  <span>Destination market (UAE / GCC) &amp; packaging or certification needs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Interactive Form / Confirmation */}
          <div className="lg:col-span-7 bg-[#FAF9F6] border border-[#E2E6EC] rounded-lg p-7 sm:p-9">
            {submittedBrief ? (
              <div className="space-y-6" role="status" aria-live="polite">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs font-semibold text-emerald-800">
                      Sourcing Brief Prepared
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#081B33] mt-1">
                      Thank you, {submittedBrief.contactName}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 mt-1.5">
                      Your sourcing inquiry summary for{' '}
                      <span className="font-semibold text-[#081B33]">
                        {submittedBrief.companyName}
                      </span>{' '}
                      has been recorded for Stage 01 review.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-[#E2E6EC] rounded-md p-5 space-y-3 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-[#E2E6EC]">
                    <div>
                      <span className="text-xs text-slate-500 block">Selected Service</span>
                      <span className="font-semibold text-[#081B33]">
                        {SERVICE_FOCUS_LABELS[submittedBrief.serviceFocus]}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Buyer Profile</span>
                      <span className="font-semibold text-[#081B33]">
                        {submittedBrief.buyerType}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-[#E2E6EC]">
                    <div>
                      <span className="text-xs text-slate-500 block">Email</span>
                      <span className="font-medium text-slate-800">{submittedBrief.email}</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Freight Mode</span>
                      <span className="font-medium text-slate-800">
                        {submittedBrief.freightPreference}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block mb-1">
                      Product &amp; Specification Scope
                    </span>
                    <p className="text-slate-700 leading-relaxed">{submittedBrief.productNotes}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmittedBrief(null)}
                    className="px-4 py-2.5 text-sm font-semibold text-white bg-[#081B33] hover:bg-[#102B4D] rounded-md transition-colors duration-150 cursor-pointer"
                  >
                    Edit Sourcing Brief
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedBrief(null);
                      setForm({
                        companyName: '',
                        contactName: '',
                        email: '',
                        phone: '',
                        buyerType: 'Importer / Wholesaler',
                        serviceFocus: 'model-a',
                        freightPreference: 'To be advised',
                        productNotes: '',
                      });
                      onModelChange(null);
                    }}
                    className="px-4 py-2.5 text-sm font-semibold text-[#081B33] bg-white border border-[#E2E6EC] hover:border-[#081B33] rounded-md transition-colors duration-150 cursor-pointer"
                  >
                    Start New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-xs font-semibold text-[#081B33] mb-1.5"
                    >
                      Company / Trading Name *
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      value={form.companyName}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, companyName: e.target.value }));
                        if (errors.companyName) setErrors((prev) => ({ ...prev, companyName: undefined }));
                      }}
                      placeholder="e.g., Al Noor Electrical Trading LLC"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E6EC] rounded-md text-[#081B33] placeholder:text-slate-400 focus:outline-none focus:border-[#081B33]"
                    />
                    {errors.companyName && (
                      <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.companyName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-xs font-semibold text-[#081B33] mb-1.5"
                    >
                      Your Name &amp; Role *
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={form.contactName}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, contactName: e.target.value }));
                        if (errors.contactName) setErrors((prev) => ({ ...prev, contactName: undefined }));
                      }}
                      placeholder="e.g., Tariq Al Mansoori, Procurement Manager"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E6EC] rounded-md text-[#081B33] placeholder:text-slate-400 focus:outline-none focus:border-[#081B33]"
                    />
                    {errors.contactName && (
                      <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.contactName}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#081B33] mb-1.5"
                    >
                      Business Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="procurement@company.ae"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E6EC] rounded-md text-[#081B33] placeholder:text-slate-400 focus:outline-none focus:border-[#081B33]"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-[#081B33] mb-1.5"
                    >
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="+971 50 000 0000"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E6EC] rounded-md text-[#081B33] placeholder:text-slate-400 focus:outline-none focus:border-[#081B33]"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="serviceFocus"
                      className="block text-xs font-semibold text-[#081B33] mb-1.5"
                    >
                      Service Model / Support Area
                    </label>
                    <select
                      id="serviceFocus"
                      value={form.serviceFocus}
                      onChange={(e) => handleServiceSelect(e.target.value as InquiryOption)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E6EC] rounded-md text-[#081B33] focus:outline-none focus:border-[#081B33]"
                    >
                      {SERVICE_MODELS.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.code} — {m.title}
                        </option>
                      ))}
                      <option value="private-label">Private Label &amp; Packaging Solutions</option>
                      <option value="product-development">Develop Your Product from Scratch</option>
                      <option value="china-visit">China Visit &amp; On-the-Ground Assistance</option>
                      <option value="general">General China–UAE/GCC Sourcing Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="buyerType"
                      className="block text-xs font-semibold text-[#081B33] mb-1.5"
                    >
                      Business Category
                    </label>
                    <select
                      id="buyerType"
                      value={form.buyerType}
                      onChange={(e) => setForm((prev) => ({ ...prev, buyerType: e.target.value }))}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E6EC] rounded-md text-[#081B33] focus:outline-none focus:border-[#081B33]"
                    >
                      <option value="Importer / Wholesaler">Importer / Wholesaler</option>
                      <option value="Electronics / IT Distributor">
                        Electronics / IT Distributor
                      </option>
                      <option value="Electrical / Industrial Buyer">
                        Electrical / Industrial Buyer
                      </option>
                      <option value="Solar / Infrastructure Contractor">
                        Solar / Infrastructure Contractor
                      </option>
                      <option value="Retailer / Private Label Brand">
                        Retailer / Private Label Brand
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="freightPreference"
                    className="block text-xs font-semibold text-[#081B33] mb-1.5"
                  >
                    Expected Dispatch Mode
                  </label>
                  <select
                    id="freightPreference"
                    value={form.freightPreference}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, freightPreference: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E6EC] rounded-md text-[#081B33] focus:outline-none focus:border-[#081B33]"
                  >
                    <option value="To be advised">To be advised after sourcing brief</option>
                    <option value="Air Freight (Mixed Consolidation)">
                      Air Freight (Mixed Consolidation)
                    </option>
                    <option value="LCL Sea Freight">LCL Sea Freight</option>
                    <option value="FCL Full Container">FCL Full Container</option>
                    <option value="Amazon FBA / Marketplace Prep">
                      Amazon FBA / Marketplace Prep
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="productNotes"
                    className="block text-xs font-semibold text-[#081B33] mb-1.5"
                  >
                    Product Scope, Technical Specs &amp; Target Market *
                  </label>
                  <textarea
                    id="productNotes"
                    rows={4}
                    value={form.productNotes}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, productNotes: e.target.value }));
                      if (errors.productNotes)
                        setErrors((prev) => ({ ...prev, productNotes: undefined }));
                    }}
                    placeholder="Describe the products you are sourcing, approximate quantities, compliance/certification requirements, or China visit dates..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2E6EC] rounded-md text-[#081B33] placeholder:text-slate-400 focus:outline-none focus:border-[#081B33]"
                  />
                  {errors.productNotes && (
                    <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.productNotes}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    Stage 01 review · Clear documentation &amp; specification alignment before
                    purchase.
                  </p>
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-semibold text-white bg-[#081B33] hover:bg-[#102B4D] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C68E23]"
                  >
                    Submit Sourcing Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
