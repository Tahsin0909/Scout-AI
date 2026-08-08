"use client";

export default function TripPackages() {

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <section
        className="
          relative overflow-hidden
          rounded-2xl
          border border-border
          bg-gradient-to-br
          from-card via-card to-amber-50/70
          p-5
          shadow-sm
          dark:from-card
          dark:via-card
          dark:to-amber-500/[0.04]
          sm:p-6
        "
      >
        <div
          className="
            pointer-events-none
            absolute -right-20 -top-24
            h-64 w-64
            rounded-full
            bg-amber-400/10
            blur-3xl
            dark:bg-amber-400/5
          "
        />

        <div className="relative">
          <h1
            className="
              text-2xl
              font-bold
              tracking-tight
              text-foreground
              sm:text-3xl
            "
          >
            Trip Packages
          </h1>

          <p
            className="
              mt-2
              max-w-2xl
              text-sm
              leading-6
              text-muted-foreground
              sm:text-base
            "
          >
            Review available trip packages, member usage,
            membership tiers, and approval status.
          </p>
        </div>
      </section>

      {/* //ToDO : Add table here  */}
    </div>
  );
}