import { ModeToggle } from "@/components/mode-toggle"

export default function IndexPage() {
  return (
    <>
      <div className="">
        <h1 className="text-[18px] font-semibold">Settings</h1>
        <p className="text-sm">Manage account and website settings.</p>
        <ModeToggle />
      </div>
    </>
  )
}