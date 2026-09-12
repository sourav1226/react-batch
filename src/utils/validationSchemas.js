import { z } from 'zod';

// 1. Email Schema with strict checks & length limits
export const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required' })
    .max(100, { message: 'Email cannot exceed 100 characters' })
    .email({ message: 'Please enter a valid work email address' })
    // Optional: Restrict to your company domain if needed
    // .refine((email) => email.endsWith('@pedestaltechnoworld.com'), {
    //   message: 'Email must belong to @pedestaltechnoworld.com',
    // }),
});

// 2. 6-Digit OTP Schema
export const otpSchema = z.object({
  otp: z
    .string()
    .length(6, { message: 'OTP must be exactly 6 digits' })
    .regex(/^\d{6}$/, { message: 'OTP must contain only numbers' }),
});

// 3. Batch Creation Schema (Example for your Batches page)
export const batchSchema = z.object({
  batchName: z
    .string()
    .trim()
    .min(3, { message: 'Batch name must be at least 3 characters' })
    .max(60, { message: 'Batch name is too long' }),
  courseProgram: z
    .string()
    .min(1, { message: 'Please select a course program' }),
  commencementDate: z
    .string()
    .min(1, { message: 'Commencement date is required' }),
  graduationDate: z
    .string()
    .min(1, { message: 'Graduation date is required' }),
});