import { Activity, Database, HeartPulse, ScanLine, ShieldCheck } from 'lucide-react'

export function MedicalBackdrop() {
  return (
    <div className="medical-backdrop absolute inset-0 overflow-hidden" aria-hidden="true">
      <Activity className="absolute right-[8%] top-[12%] h-36 w-36 text-[#333333] opacity-[0.055] sm:h-52 sm:w-52" strokeWidth={1} />
      <span className="data-node left-[13%] top-[18%]" />
      <span className="data-node left-[45%] top-[38%]" />
      <span className="data-node right-[18%] top-[28%]" />
      <span className="data-node bottom-[17%] right-[36%]" />
      <span className="connection-line left-[14%] top-[19%] w-[31%] rotate-[13deg]" />
      <span className="connection-line right-[20%] top-[34%] w-[27%] -rotate-[11deg]" />
    </div>
  )
}

const flowSteps = [
  { icon: Database, label: 'Data Collection Placeholder' },
  { icon: Activity, label: 'Preprocessing & Analysis Placeholder' },
  { icon: HeartPulse, label: 'AI Modeling Placeholder' },
  { icon: ShieldCheck, label: 'Healthcare Service Application Placeholder' },
]

export function MedicalDataFlow() {
  return (
    <div className="rounded-2xl border border-[#E2E2E2] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#333333]">System overview</p>
          <h3 className="mt-1 text-lg font-semibold text-[#222222]">Medical IT Process Placeholder</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase text-[#333333]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#333333]" /> Placeholder
        </span>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {flowSteps.map(({ icon: Icon, label }, index) => (
          <div className="relative" key={label}>
            {index < flowSteps.length - 1 && (
              <span className="absolute left-[calc(100%+0.375rem)] top-1/2 hidden w-3 border-t border-dashed border-[#DADADA] md:block" aria-hidden="true" />
            )}
            <div className="h-full rounded-xl border border-[#E2E2E2] bg-[#F7F7F7] px-3 py-4 text-center text-xs font-medium text-[#666666]">
              <span className="mx-auto mb-3 grid h-9 w-9 place-items-center rounded-full bg-[#EEEEEE] text-[#333333]">
                <Icon size={16} aria-hidden="true" />
              </span>
              <span className="mb-2 block font-mono text-[10px] text-[#333333]">Step Placeholder</span>
              {label}
            </div>
          </div>
        ))}
      </div>
      <div className="technical-grid mt-4 flex min-h-44 flex-col items-center justify-center rounded-xl border border-[#E2E2E2] bg-[#F2F2F2]/80 text-center">
        <Activity className="text-[#333333]" size={34} strokeWidth={1.5} aria-hidden="true" />
        <div className="my-3 flex items-center gap-2" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#333333]" />
          <span className="h-px w-20 bg-[#DADADA]" />
          <span className="h-2 w-2 rounded-full bg-[#333333]" />
        </div>
        <p className="text-xs font-medium text-[#666666]">Medical data flow diagram Placeholder</p>
      </div>
    </div>
  )
}

export function MedicalImagingPlaceholder() {
  return (
    <div className="imaging-grid flex min-h-72 flex-col items-center justify-center rounded-2xl border border-[#E2E2E2] bg-[#F2F2F2] text-center shadow-sm">
      <span className="grid h-14 w-14 place-items-center rounded-xl border border-[#DADADA] bg-white/85 text-[#333333] shadow-sm">
        <ScanLine size={27} aria-hidden="true" />
      </span>
      <p className="mt-4 text-sm font-semibold text-[#222222]">Medical image placeholder</p>
      <p className="mt-1 text-xs text-[#666666]">TODO · Visual data slot</p>
    </div>
  )
}

export function DiagnosticPanel() {
  return (
    <div className="min-h-72 rounded-2xl border border-[#333333]/20 bg-[#333333] p-5 text-white shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase text-[#EEEEEE]">Diagnostic interface</p>
          <h3 className="mt-1 text-lg font-semibold">AI System Placeholder</h3>
        </div>
        <span className="h-2 w-2 rounded-full bg-[#DADADA]" aria-label="Placeholder status" />
      </div>
      <div className="mt-6 space-y-3">
        {['Input Placeholder', 'Process Placeholder', 'Result Placeholder'].map((label, index) => (
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3" key={label}>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-[#F2F2F2]">{label}</span>
              <span className="font-mono text-[10px] text-[#DADADA]">Placeholder</span>
            </div>
            <div className="mt-3 flex gap-1.5" aria-hidden="true">
              {['w-1/2', 'w-1/3', 'w-1/4'].map((widthClass, barIndex) => (
                <span className={`h-1.5 rounded-full bg-[#EEEEEE]/35 ${widthClass}`} key={`${index}-${barIndex}`} />
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
  fields: { label: string; value?: string }[]
  dark?: boolean
}

export function MedicalRecordCard({ label, title, fields, dark = false }: MedicalRecordProps) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm ${dark ? 'border-[#333333]/30 bg-[#333333]' : 'border-[#E2E2E2] bg-white'}`}>
      <p className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${dark ? 'text-[#EEEEEE]' : 'text-[#333333]'}`}>{label}</p>
      <h3 className={`mt-1 text-base font-semibold ${dark ? 'text-white' : 'text-[#222222]'}`}>{title}</h3>
      <dl className="mt-5 divide-y divide-[#E2E2E2]">
        {fields.map((field) => (
          <div className="grid grid-cols-[110px_1fr] gap-4 py-3 text-xs sm:grid-cols-[140px_1fr]" key={field.label}>
            <dt className={dark ? 'text-[#DADADA]' : 'text-[#666666]'}>{field.label}</dt>
            <dd className={`font-medium ${dark ? 'text-[#F7F7F7]' : 'text-[#222222]'}`}>{field.value || 'Placeholder'}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
