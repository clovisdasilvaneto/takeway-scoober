import React from "react";
import { ArrowLeftIcon, LogoIcon } from "@/components/Icons";
import { TextField, Typography, useTheme } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";

import { LoginBox } from "./styled";
import { TLoginForm } from "../types";

interface LoginFormProps {
  isLoading: boolean;
  onSubmit: (data: TLoginForm) => void;
}

function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  const theme = useTheme();
  const { register, handleSubmit, formState } = useForm<TLoginForm>();

  return (
    <LoginBox onSubmit={handleSubmit(onSubmit)} component="form">
      <LogoIcon size={150} />

      <Typography variant="h3">Enter your name</Typography>

      <TextField
        fullWidth
        helperText={formState.errors.name?.message}
        error={Boolean(formState.errors?.name)}
        placeholder="Your name goes here"
        {...register("name", { required: "Please inform your name" })}
      />

      <LoadingButton
        size="small"
        loading={isLoading}
        color="secondary"
        type="submit"
        disableRipple
        endIcon={<ArrowLeftIcon color={theme.palette.secondary.main} />}
      >
        Continue to the room
      </LoadingButton>
    </LoginBox>
  );
}

export default LoginForm;
