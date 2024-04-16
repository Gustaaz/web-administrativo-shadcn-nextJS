import Link from 'next/link'
import { Button, Input, Label } from '@/components/ui'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Autenticação</h1>
          <p className="text-balance text-muted-foreground">
            Digite seu e-mail abaixo para fazer login em sua conta
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Senha</Label>
              <Link
                href="/recuperar-senha"
                className="ml-auto inline-block text-sm underline"
              >
                Esqueceu sua senha?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="********"
              autoComplete="current-password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Não tem uma conta?{' '}
          <Link href="/cadastro" className="underline">
            Crie uma
          </Link>
        </div>
      </div>
    </div>
  )
}
