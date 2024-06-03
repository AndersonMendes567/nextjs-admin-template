import AuthImage from "@/components/auth/AuthImage";

export default function AuthLayout({ children } : { children: any }) {

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {
        //@ts-expect-error Server Component
        <AuthImage propToJustfyTSError />
      }
    
      { children }
    </div>
  )
}