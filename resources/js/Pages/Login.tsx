import InputError from '@/Components/InputError'
import { Button } from '@/Components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/Components/ui/card'
import { Checkbox } from '@/Components/ui/checkbox'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'

export default function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false as boolean,
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault()

    post(route('login'), {
      onFinish: () => reset('password'),
    })
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={submit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                      required
                    />
                    <InputError message={errors.email} />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={data.password}
                      onChange={(e) => setData('password', e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="remember"
                      checked={data.remember}
                      onCheckedChange={(checked) =>
                        setData('remember', checked as boolean)
                      }
                    />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={processing}
                    >
                      Login
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{' '}
                  <a href="#" className="underline underline-offset-4">
                    Sign up
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
