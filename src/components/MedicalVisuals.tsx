import { ScanLine } from 'lucide-react'

export function MedicalBackdrop() {
  return (
    <div className="medical-backdrop absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-[#E2E8F0]/70 bg-[#F8FAFC]/70" />
      <span className="data-node left-[13%] top-[34%]" />
      <span className="data-node left-[36%] top-[18%]" />
      <span className="data-node right-[18%] top-[30%]" />
      <span className="data-node bottom-[18%] right-[27%]" />
      <span className="connection-line left-[14%] top-[34%] w-[35%] -rotate-[13deg]" />
      <span className="connection-line right-[19%] top-[35%] w-[34%] rotate-[12deg]" />
    </div>
  )
}

const flowSteps = [
  'Data Collection Placeholder',
  'Preprocessing & Analysis Placeholder',
  'AI Modeling Placeholder',
  'Healthcare Service Application Placeholder',
]

export function MedicalHeroVisual() {
  return (
    <div
      className="relative min-h-[360px] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:min-h-[420px] sm:p-7"
      role="img"
      aria-label="Abstract placeholder visualization of medical data connections using points and lines"
    >
      <MedicalBackdrop />
      <div className="relative min-h-[318px] sm:min-h-[366px]">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-medium text-[#64748B]">Medical data network</p>
            <p className="mt-2 text-xs text-[#94A3B8]">Abstract visual placeholder</p>
          </div>
          <span className="mt-1 h-px w-14 bg-[#CBD5E1]" aria-hidden="true" />
        </div>

        <div className="absolute inset-x-0 bottom-10 top-16" aria-hidden="true">
          <svg className="h-full w-full" viewBox="0 0 640 360" fill="none" preserveAspectRatio="xMidYMid meet">
            <path d="M54 220L154 120L258 176L356 82L468 152L586 94" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M54 220L192 278L258 176L420 260L468 152L586 216" stroke="#E2E8F0" strokeWidth="1.5" />
            <path d="M154 120L192 278M356 82L420 260M586 94V216" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 7" />
            {[
              [54, 220], [154, 120], [192, 278], [258, 176], [356, 82],
              [420, 260], [468, 152], [586, 94], [586, 216],
            ].map(([cx, cy], index) => (
              <g key={`${cx}-${cy}`}>
                <circle cx={cx} cy={cy} r={index === 3 || index === 6 ? 8 : 5} fill="white" stroke="#94A3B8" strokeWidth="1.5" />
                {(index === 3 || index === 6) && <circle cx={cx} cy={cy} r="18" stroke="#E2E8F0" />}
              </g>
            ))}
          </svg>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 border-t border-[#E2E8F0] pt-4 text-xs text-[#64748B]">
          <span className="font-mono text-[#94A3B8]">01—04</span>
          <span>Biomedical data flow placeholder</span>
        </div>
      </div>
    </div>
  )
}

export function MedicalDataFlow() {
  return (
    <div className="border-y border-[#CBD5E1] py-7 sm:py-8">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="text-xs font-medium text-[#64748B]">Research process</p>
          <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">Medical IT Process Placeholder</h3>
        </div>
        <span className="hidden text-xs text-[#94A3B8] sm:block">Overview Placeholder</span>
      </div>
      <div className="mt-7 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {flowSteps.map((label, index) => (
          <div className="relative" key={label}>
            {index < flowSteps.length - 1 && (
              <span className="absolute left-[calc(100%+0.375rem)] top-1/2 hidden w-3 border-t border-dashed border-[#CBD5E1] md:block" aria-hidden="true" />
            )}
            <div className="h-full border-t border-[#CBD5E1] py-4 text-left text-sm leading-6 text-[#64748B]">
              <span className="mb-2 block font-mono text-[10px] text-[#94A3B8]">0{index + 1}</span>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function MedicalImagingPlaceholder() {
  return (
    <div className="imaging-grid flex min-h-72 flex-col items-center justify-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-center shadow-sm">
      <span className="grid h-14 w-14 place-items-center rounded-xl border border-[#CBD5E1] bg-white/85 text-[#475569] shadow-sm">
        <ScanLine size={27} aria-hidden="true" />
      </span>
      <p className="mt-4 text-sm font-semibold text-[#1F2937]">Medical image placeholder</p>
      <p className="mt-1 text-xs text-[#64748B]">TODO · Visual data slot</p>
    </div>
  )
}

export function DiagnosticPanel() {
  return (
    <div className="surface-card min-h-72 p-5 text-[#1F2937]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase text-[#64748B]">Diagnostic interface</p>
          <h3 className="mt-1 text-lg font-semibold">AI System Placeholder</h3>
        </div>
        <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" aria-label="Placeholder status" />
      </div>
      <div className="mt-6 space-y-3">
        {['Input Placeholder', 'Process Placeholder', 'Result Placeholder'].map((label, index) => (
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3" key={label}>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-[#1F2937]">{label}</span>
              <span className="font-mono text-[10px] text-[#64748B]">Placeholder</span>
            </div>
            <div className="mt-3 flex gap-1.5" aria-hidden="true">
              {['w-1/2', 'w-1/3', 'w-1/4'].map((widthClass, barIndex) => (
                <span className={`h-1.5 rounded-full bg-[#CBD5E1]/60 ${widthClass}`} key={`${index}-${barIndex}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface MedicalRecordProps {
  label: string
  title: string
  fields: { label: string; value?: string; href?: string }[]
  dark?: boolean
}

export function MedicalRecordCard({ label, title, fields, dark = false }: MedicalRecordProps) {
  return (
    <div className={`rounded-2xl border p-6 ${dark ? 'border-[#475569]/30 bg-[#475569]' : 'border-[#E2E8F0] bg-white'}`}>
      <p className={`text-xs font-medium ${dark ? 'text-[#F1F5F9]' : 'text-[#64748B]'}`}>{label}</p>
      <h3 className={`mt-1 text-base font-semibold ${dark ? 'text-white' : 'text-[#1F2937]'}`}>{title}</h3>
      <dl className="mt-5 divide-y divide-[#E2E8F0]">
        {fields.map((field) => (
          <div className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 py-3 text-xs sm:grid-cols-[140px_minmax(0,1fr)]" key={field.label}>
            <dt className={dark ? 'text-[#CBD5E1]' : 'text-[#64748B]'}>{field.label}</dt>
            <dd className={`min-w-0 break-words font-medium leading-5 ${dark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`}>
              {field.href && field.value ? (
                <a
                  href={field.href}
                  className="email-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B]"
                >
                  {field.value}
                </a>
              ) : (
                field.value || 'Placeholder'
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
