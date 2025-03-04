import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

// ✅ Position du toast : en bas sur mobile, en haut à droite sur desktop
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed bottom-4 left-1/2 z-[100] flex w-full max-w-[90%] -translate-x-1/2 flex-col-reverse p-4 \
       sm:bottom-auto sm:top-4 sm:right-4 sm:left-auto sm:translate-x-0 md:max-w-[420px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

// ✅ Ajout d'un fond **opaque** sur mobile pour éviter la transparence
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden \
   rounded-md border p-4 pr-6 shadow-xl transition-all font-body \
   data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] \
   data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none \
   data-[state=open]:animate-in data-[state=closed]:animate-out \
   data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 \
   data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default:
          "border-blue-6 bg-white/90 text-blue-12 dark:bg-neutral-900/90 dark:text-white", // ✅ Fond **opaque** et lisible
        destructive:
          "border-red-500 bg-red-600 text-white dark:border-red-700 dark:bg-red-800", // 🔥 Erreur en rouge contrasté
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
));
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-blue-6 bg-blue-3 px-3 \
       text-sm font-medium transition-colors hover:bg-blue-5 focus:outline-none focus:ring-1 focus:ring-blue-9 \
       disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-1 top-1 rounded-md p-1 text-blue-12 opacity-80 transition-opacity hover:text-blue-12 \
       focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="w-4 h-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold [&+div]:text-xs", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
