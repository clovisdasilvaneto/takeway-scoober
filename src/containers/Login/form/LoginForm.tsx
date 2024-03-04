"use client";

import React from "react";
import { ArrowLeftIcon, LogoIcon } from "@/components/Icons";
import { TextField, Typography, useTheme } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";

import { InputBox, LoginBox } from "./styled";
import { TLoginForm } from "../types";
import { motion } from "framer-motion";
import { createEntranceAnimation } from "@/theme/animations";

interface LoginFormProps {
  isLoading: boolean;
  onSubmit: (data: TLoginForm) => void;
}

const logoAnimation = createEntranceAnimation("translateY(-4rem)");
const textAnimation = createEntranceAnimation("translateX(4rem)");
const inputAnimation = createEntranceAnimation("translateX(-4rem)");
const buttonAnimation = createEntranceAnimation("translateY(4rem)");

function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  const theme = useTheme();
  const { register, handleSubmit, formState } = useForm<TLoginForm>();

  return (
    <LoginBox onSubmit={handleSubmit(onSubmit)} component="form">
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        transition={{ duration: 0.5 }}
        variants={logoAnimation}
      >
        <LogoIcon size={150} />
      </motion.div>

      <motion.div
        initial="out"
        exit="out"
        transition={{ duration: 0.5, delay: 0.3 }}
        animate="in"
        variants={textAnimation}
      >
        <Typography variant="h3">Enter your name</Typography>
      </motion.div>

      <InputBox
        initial="out"
        exit="out"
        transition={{ duration: 0.5, delay: 0.4 }}
        animate="in"
        variants={inputAnimation}
      >
        <TextField
          fullWidth
          helperText={formState.errors.name?.message}
          error={Boolean(formState.errors?.name)}
          placeholder="Your name goes here"
          {...register("name", { required: "Please inform your name" })}
        />
      </InputBox>

      <motion.div
        transition={{ duration: 0.5, delay: 0.8 }}
        initial="out"
        animate="in"
        exit="out"
        variants={buttonAnimation}
      >
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
      </motion.div>
    </LoginBox>
  );
}

export default LoginForm;
