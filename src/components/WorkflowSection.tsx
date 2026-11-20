import { CheckCircle2, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/goldenDragonData';

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'interactive' | 'table'>('interactive');

  const currentStep =
    WORKFLOW_STEPS.find((item) => item.step === activeStep) ?? WORKFLOW_STEPS[0];

  return (
    <section id="workflow" className="bg-white border-b border-[#E2E6EC]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E2E6EC]">
          <div className="max-w-2xl space-y-2.5">
            <div className="text-sm font-semibold text-[#A67317]">
              7-Stage Execution Discipline
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#081B33] text-balance">
              Operating Workflow Service
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Every assignment follows a structured seven-step sequence—from documenting buyer
              requirements through verification, consolidation, dispatch, and post-arrival
              resolution.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Workflow display mode"
            className="inline-flex items-center gap-1 p-1 bg-[#F2F4F7] rounded-lg self-start md:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'interactive'}
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'interactive'
                  ? 'bg-white text-[#081B33] shadow-xs'
                  : 'text-slate-600 hover:text-[#081B33]'
              }`}
            >
              Stage Explorer
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'table'}
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-white text-[#081B33] shadow-xs'
                  : 'text-slate-600 hover:text-[#081B33]'
              }`}
            >
              Full 7-Step Table
            </button>
          </div>
        </div>

        {viewMode === 'interactive' ? (
          <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Step Selector Rail */}
            <div className="lg:col-span-5 flex flex-col divide-y divide-[#E2E6EC] border border-[#E2E6EC] rounded-lg overflow-hidden bg-[#FAF9F6]">
              {WORKFLOW_STEPS.map((item) => {
                const isActive = item.step === activeStep;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStep(item.step)}
                    className={`w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[#081B33] text-white'
                        : 'bg-[#FAF9F6] text-[#081B33] hover:bg-[#F2F4F7]'
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span
                        className={`font-mono-tabular text-xs font-medium shrink-0 ${
                          isActive ? 'text-[#D9A944]' : 'text-[#A67317]'
                        }`}
                      >
                        {item.code}
                      </span>
                      <span className="font-semibold text-sm sm:text-base truncate">
                        {item.step}. {item.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? 'text-[#D9A944]' : 'text-slate-400'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detail Panel */}
            <div className="lg:col-span-7 bg-[#FAF9F6] border border-[#E2E6EC] rounded-lg p-7 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#E2E6EC]">
                  <div>
                    <div className="font-mono-tabular text-xs font-medium text-[#A67317] mb-1">
                      Stage {currentStep.code} of 07
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#081B33]">
                      {currentStep.step}. {currentStep.title}
                    </h3>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-2">
                    Operating Activity
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-[#081B33]">
                    {currentStep.activity}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-500 mb-3">
                    Key Outputs &amp; Documentation
                  </div>
                  <ul className="space-y-3">
                    {currentStep.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-3 text-sm sm:text-base text-slate-700"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#A67317] shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2E6EC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Stage Checkpoint</div>
                  <div className="text-sm font-semibold text-[#081B33] mt-0.5">
                    {currentStep.checkpoint}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                    className="px-3 py-1.5 text-xs font-semibold border border-[#E2E6EC] bg-white text-[#081B33] rounded-md disabled:opacity-40 hover:border-[#081B33] transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={activeStep === 7}
                    onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))}
                    className="px-3 py-1.5 text-xs font-semibold bg-[#081B33] text-white rounded-md disabled:opacity-40 hover:bg-[#102B4D] transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed"
                  >
                    Next Stage
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-10 overflow-x-auto">
            <table className="w-full border-collapse border border-[#E2E6EC] bg-white text-left">
              <thead>
                <tr className="bg-[#FAF9F6] border-b border-[#E2E6EC]">
                  <th className="py-3.5 px-5 text-xs font-semibold text-[#081B33] w-48">Step</th>
                  <th className="py-3.5 px-5 text-xs font-semibold text-[#081B33]">
                    Operating Activity
                  </th>
                  <th className="py-3.5 px-5 text-xs font-semibold text-[#081B33] w-72 hidden md:table-cell">
                    Stage Checkpoint
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E6EC]">
                {WORKFLOW_STEPS.map((item) => (
                  <tr key={item.step} className="hover:bg-[#FAF9F6] transition-colors duration-150">
                    <td className="py-4 px-5 align-top">
                      <span className="font-mono-tabular text-xs font-medium text-[#A67317] mr-2">
                        {item.code}
                      </span>
                      <span className="font-semibold text-sm text-[#081B33]">
                        {item.step}. {item.title}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-sm leading-relaxed text-slate-600 align-top">
                      {item.activity}
                    </td>
                    <td className="py-4 px-5 text-xs font-medium text-[#081B33] align-top hidden md:table-cell">
                      {item.checkpoint}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
