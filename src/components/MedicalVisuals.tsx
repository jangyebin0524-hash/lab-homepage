import { Activity, Brain, Database, HeartPulse, Network, ScanLine, ShieldCheck } from 'lucide-react'

export function MedicalBackdrop() {
  return (
    <div className="medical-backdrop absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#EAF3F8]/70 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#F1F5F9] blur-3xl" />
      <Activity className="absolute right-[7%] top-[11%] h-36 w-36 text-[#0F3A5C] opacity-[0.035] sm:h-52 sm:w-52" strokeWidth={1} />
      <span className="data-node left-[9%] top-[29%]" />
      <span className="data-node left-[28%] top-[13%]" />
      <span className="data-node left-[47%] top-[33%]" />
      <span className="data-node right-[12%] top-[25%]" />
      <span className="data-node bottom-[15%] left-[22%]" />
      <span className="data-node bottom-[20%] right-[17%]" />
      <span className="connection-line left-[10%] top-[30%] w-[37%] -rotate-[16deg]" />
      <span className="connection-line right-[13%] top-[29%] w-[40%] rotate-[12deg]" />
      <span className="connection-line bottom-[19%] left-[22%] w-[58%] -rotate-[4deg]" />
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
    <div
      className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white p-4 shadow-[0_24px_70px_rgb(15_58_92_/_0.08)] sm:p-6"
      role="img"
      aria-label="의료 AI 두뇌, 생체신호, 데이터 흐름을 표현한 추상 Placeholder 비주얼"
    >
      <MedicalBackdrop />
      <div className="medical-hero-wave absolute inset-x-0 top-[46%] h-24 opacity-45" aria-hidden="true" />
      <div className="medical-orbit absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#CBD5E1]/70 sm:h-[330px] sm:w-[330px]" aria-hidden="true" />
      <div className="medical-orbit absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E2E8F0]/80 sm:h-[260px] sm:w-[260px]" aria-hidden="true" />

      <div className="relative min-h-[406px]">
        <div className="absolute left-0 top-0 z-20 w-[54%] max-w-[240px] rounded-2xl border border-[#E2E8F0] bg-white/90 p-3 shadow-[0_12px_30px_rgb(15_58_92_/_0.07)] backdrop-blur-sm sm:p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#94A3B8]">Medical AI</p>
              <h3 className="mt-1 text-xs font-semibold text-[#475569] sm:text-sm">AI Analysis Placeholder</h3>
            </div>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#F1F5F9] text-[#64748B]">
              <Brain size={15} strokeWidth={1.6} aria-hidden="true" />
            </span>
          </div>
          <div className="mt-3 flex items-end gap-1" aria-hidden="true">
            {['h-2', 'h-3', 'h-4', 'h-2.5', 'h-5', 'h-3.5'].map((height, index) => (
              <span className={`w-full rounded-full bg-[#CBD5E1] ${height}`} key={`${height}-${index}`} />
            ))}
          </div>
        </div>

        <div className="absolute right-0 top-3 z-20 w-[39%] max-w-[185px] rounded-2xl border border-[#E2E8F0] bg-white/90 p-3 shadow-[0_12px_30px_rgb(15_58_92_/_0.06)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">Biomedical Signal</p>
            <HeartPulse className="shrink-0 text-[#64748B]" size={14} strokeWidth={1.6} aria-hidden="true" />
          </div>
          <div className="medical-signal-line mt-3 h-9 w-full opacity-60" aria-hidden="true" />
          <p className="mt-2 text-[10px] font-medium text-[#64748B]">Metric Placeholder</p>
        </div>

        <div className="absolute left-1/2 top-[51%] z-10 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
          <div className="medical-ai-head relative h-56 w-40 rounded-[47%_47%_43%_43%] border border-[#9DB9C8]/80 bg-white/75 sm:h-64 sm:w-48">
            <div className="absolute left-1/2 top-8 grid h-24 w-24 -translate-x-1/2 place-items-center rounded-full border border-[#CBD5E1] bg-[#F1F5F9]/90 text-[#64748B] sm:h-28 sm:w-28">
              <Brain size={42} strokeWidth={1.05} />
            </div>

            <span className="absolute left-[18%] top-[44%] h-px w-[25%] bg-[#9DB9C8]" />
            <span className="absolute right-[18%] top-[51%] h-px w-[28%] bg-[#9DB9C8]" />
            <span className="absolute bottom-[18%] left-1/2 h-[22%] w-px -translate-x-1/2 bg-[#CBD5E1]" />
            <span className="absolute left-[13%] top-[42.5%] h-2 w-2 rounded-full border border-[#9DB9C8] bg-white" />
            <span className="absolute right-[12%] top-[49.5%] h-2 w-2 rounded-full border border-[#9DB9C8] bg-white" />
            <span className="absolute bottom-[15%] left-[47.5%] h-2 w-2 rounded-full border border-[#9DB9C8] bg-white" />
            <span className="absolute left-[24%] top-[66%] h-8 w-px -rotate-[36deg] bg-[#E2E8F0]" />
            <span className="absolute right-[24%] top-[66%] h-8 w-px rotate-[36deg] bg-[#E2E8F0]" />
          </div>
          <div className="mx-auto h-8 w-16 border-x border-[#CBD5E1] bg-white/60" />
          <div className="mx-auto h-8 w-56 rounded-t-[100%] border-x border-t border-[#CBD5E1] bg-white/55 sm:w-64" />
        </div>

        <div className="absolute bottom-0 left-1/2 z-20 w-[78%] max-w-[330px] -translate-x-1/2 rounded-2xl border border-[#E2E8F0] bg-white/90 p-3 shadow-[0_12px_30px_rgb(15_58_92_/_0.07)] backdrop-blur-sm sm:p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">Data Flow Placeholder</p>
              <p className="mt-1 truncate text-xs font-semibold text-[#475569]">Medical AI Pipeline Placeholder</p>
            </div>
            <Network className="shrink-0 text-[#64748B]" size={17} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div className="mt-3 flex items-center gap-2" aria-hidden="true">
            {Array.from({ length: 4 }, (_, index) => (
              <div className="contents" key={index}>
                <span className="h-2.5 w-2.5 shrink-0 rounded-full border border-[#9DB9C8] bg-[#F8FAFC]" />
                {index < 3 && <span className="h-px flex-1 border-t border-dashed border-[#CBD5E1]" />}
              </div>
            ))}
          </div>
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
