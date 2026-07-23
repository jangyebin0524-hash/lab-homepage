import { Activity, Brain, Database, HeartPulse, Network, ScanLine, ShieldCheck } from 'lucide-react'

export function MedicalBackdrop() {
  return (
    <div className="medical-backdrop absolute inset-0 overflow-hidden" aria-hidden="true">
      <Activity className="absolute right-[8%] top-[12%] h-36 w-36 text-[#0F3A5C] opacity-[0.055] sm:h-52 sm:w-52" strokeWidth={1} />
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

export function MedicalHeroVisual() {
  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-[#CBD5E1] bg-[#F8FAFC] p-5 shadow-[0_24px_70px_rgb(15_58_92_/_0.1)]">
      <MedicalBackdrop />
      <div className="relative grid h-full min-h-[350px] grid-rows-[auto_1fr_auto] gap-5">
        <div className="flex items-center justify-between rounded-2xl border border-[#E2E8F0] bg-white/85 p-4 shadow-sm">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F93A6]">Medical AI Interface</p>
            <h3 className="mt-1 text-base font-semibold text-[#1F2937]">AI Analysis Placeholder</h3>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#EAF3F8] text-[#0F3A5C]">
            <Brain size={18} aria-hidden="true" />
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
          <div className="technical-grid relative flex min-h-52 items-center justify-center overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white/70 p-4">
            <span className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">AI Silhouette Placeholder</span>
            <span className="absolute right-4 top-4 text-[#6F93A6]">
              <Network size={15} aria-hidden="true" />
            </span>
            <div className="relative mt-4 h-40 w-32 rounded-[48%_48%_42%_42%] border border-[#9DB9C8] bg-white/80 shadow-[inset_0_0_32px_rgb(157_185_200_/_0.18)]" aria-hidden="true">
              <span className="absolute left-1/2 top-8 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-full border border-[#CBD5E1] bg-[#EAF3F8] text-[#0F3A5C]">
                <Brain size={27} strokeWidth={1.3} />
              </span>
              <span className="absolute left-5 top-24 h-px w-10 bg-[#9DB9C8]" />
              <span className="absolute right-5 top-28 h-px w-9 bg-[#9DB9C8]" />
              <span className="absolute bottom-5 left-1/2 h-8 w-px -translate-x-1/2 bg-[#9DB9C8]" />
              <span className="absolute left-3 top-[5.8rem] h-2 w-2 rounded-full border border-[#9DB9C8] bg-white" />
              <span className="absolute right-3 top-[6.8rem] h-2 w-2 rounded-full border border-[#9DB9C8] bg-white" />
            </div>
          </div>

          <div className="grid min-h-52 gap-3">
            <div className="flex flex-col justify-between rounded-2xl border border-[#CBD5E1] bg-white/75 p-4">
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                <span>Biomedical Signal Placeholder</span>
                <HeartPulse size={15} aria-hidden="true" />
              </div>
              <div className="medical-signal-line h-16 w-full opacity-80" aria-hidden="true" />
              <p className="text-xs font-medium text-[#64748B]">Waveform Placeholder</p>
            </div>
            <div className="relative flex items-center justify-between overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white/75 p-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">Medical Data Card</p>
                <p className="mt-2 text-xs font-medium text-[#1F2937]">Metric Placeholder</p>
              </div>
              <div className="flex items-end gap-1" aria-hidden="true">
                {['h-5', 'h-8', 'h-11', 'h-7', 'h-10'].map((height) => (
                  <span className={`w-1.5 rounded-full bg-[#9DB9C8] ${height}`} key={height} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {['Data Flow Placeholder', 'Medical Vision Placeholder', 'Model System Placeholder'].map((label) => (
            <div className="rounded-2xl border border-[#E2E8F0] bg-white/85 p-3 text-xs font-semibold text-[#64748B]" key={label}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function MedicalDataFlow() {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6F93A6]">System overview</p>
          <h3 className="mt-1 text-lg font-semibold text-[#1F2937]">Medical IT Process Placeholder</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase text-[#0F3A5C]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6F93A6]" /> Placeholder
        </span>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {flowSteps.map(({ icon: Icon, label }, index) => (
          <div className="relative" key={label}>
            {index < flowSteps.length - 1 && (
              <span className="absolute left-[calc(100%+0.375rem)] top-1/2 hidden w-3 border-t border-dashed border-[#CBD5E1] md:block" aria-hidden="true" />
            )}
            <div className="h-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-4 text-center text-xs font-medium text-[#64748B]">
              <span className="mx-auto mb-3 grid h-9 w-9 place-items-center rounded-full bg-[#EAF3F8] text-[#0F3A5C]">
                <Icon size={16} aria-hidden="true" />
              </span>
              <span className="mb-2 block font-mono text-[10px] text-[#6F93A6]">Step Placeholder</span>
              {label}
            </div>
          </div>
        ))}
      </div>
      <div className="technical-grid mt-4 flex min-h-44 flex-col items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]/80 text-center">
        <Activity className="text-[#0F3A5C]" size={34} strokeWidth={1.5} aria-hidden="true" />
        <div className="my-3 flex items-center gap-2" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#6F93A6]" />
          <span className="h-px w-20 bg-[#CBD5E1]" />
          <span className="h-2 w-2 rounded-full bg-[#0F3A5C]" />
        </div>
        <p className="text-xs font-medium text-[#64748B]">Medical data flow diagram Placeholder</p>
      </div>
    </div>
  )
}

export function MedicalImagingPlaceholder() {
  return (
    <div className="imaging-grid flex min-h-72 flex-col items-center justify-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] text-center shadow-sm">
      <span className="grid h-14 w-14 place-items-center rounded-xl border border-[#CBD5E1] bg-white/85 text-[#0F3A5C] shadow-sm">
        <ScanLine size={27} aria-hidden="true" />
      </span>
      <p className="mt-4 text-sm font-semibold text-[#1F2937]">Medical image placeholder</p>
      <p className="mt-1 text-xs text-[#64748B]">TODO · Visual data slot</p>
    </div>
  )
}

export function DiagnosticPanel() {
  return (
    <div className="min-h-72 rounded-2xl border border-[#E2E8F0] bg-white p-5 text-[#1F2937] shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase text-[#6F93A6]">Diagnostic interface</p>
          <h3 className="mt-1 text-lg font-semibold">AI System Placeholder</h3>
        </div>
        <span className="h-2 w-2 rounded-full bg-[#9DB9C8]" aria-label="Placeholder status" />
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
                <span className={`h-1.5 rounded-full bg-[#9DB9C8]/60 ${widthClass}`} key={`${index}-${barIndex}`} />
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
    <div className={`rounded-2xl border p-6 shadow-sm ${dark ? 'border-[#0F3A5C]/30 bg-[#0F3A5C]' : 'border-[#E2E8F0] bg-white'}`}>
      <p className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${dark ? 'text-[#EAF3F8]' : 'text-[#0F3A5C]'}`}>{label}</p>
      <h3 className={`mt-1 text-base font-semibold ${dark ? 'text-white' : 'text-[#1F2937]'}`}>{title}</h3>
      <dl className="mt-5 divide-y divide-[#E2E8F0]">
        {fields.map((field) => (
          <div className="grid grid-cols-[110px_1fr] gap-4 py-3 text-xs sm:grid-cols-[140px_1fr]" key={field.label}>
            <dt className={dark ? 'text-[#CBD5E1]' : 'text-[#64748B]'}>{field.label}</dt>
            <dd className={`font-medium ${dark ? 'text-[#FFFFFF]' : 'text-[#1F2937]'}`}>{field.value || 'Placeholder'}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
