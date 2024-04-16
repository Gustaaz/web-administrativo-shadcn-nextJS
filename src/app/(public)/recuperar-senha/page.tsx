import Link from "next/link";
import { Button, Input, Label } from "@/components/ui";

export default function RecuperarSenhaPage() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Recupere sua senha</h1>
          <p className="text-balance text-muted-foreground">
            Digite um e-mail válido para receber instruções sobre como redefinir
            sua senha.
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
          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Já tem uma conta?{" "}
          <Link href="/" className="underline">
            Fazer login
          </Link>
        </div>
      </div>
    </div>
  );
}
