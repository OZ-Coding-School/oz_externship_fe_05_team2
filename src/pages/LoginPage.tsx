import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthLayout from "@/components/auth/AuthLayout";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { loginSchema, type LoginSchemaType } from "@/schemas/authSchemas";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log("로그인 성공 데이터:", data);
    alert(`로그인 시도: ${data.email}`);
  };

  return (
    <AuthLayout title="아직 회원이 아니신가요?" linktext="회원가입 하기">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-2"
      >
        <div className="flex flex-col gap-1">
          <Input
            placeholder="아이디 (example@gmail.com)"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <small className="ml-1 text-sm font-medium text-red-500">
              {errors.email.message}
            </small>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            placeholder="비밀번호 (6~15자의 영문 대소문자, 숫자, 특수문자 포함)"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <small className="ml-1 text-sm font-medium text-red-500">
              {errors.password.message}
            </small>
          )}
          <div className="py-2 text-neutral-700">
            <button className="pr-2">아이디 찾기</button>
            <span>|</span>
            <button className="pl-2">비밀번호 찾기</button>
          </div>
        </div>
        <Button type="submit">일반회원 로그인</Button>
      </form>
    </AuthLayout>
  );
}
