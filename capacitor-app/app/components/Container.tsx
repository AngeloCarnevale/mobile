

export default function Container({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
    </main>
  )
}
