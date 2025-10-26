export function Footer() {
  return (
    <footer className="py-8 px-4 bg-secondary/50 border-t border-border">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Duo Maker 3D. Todos os direitos reservados.</p>
        <p className="mt-2">Site by Mateus Oliveira</p>
      </div>
    </footer>
  )
}
