/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { IUser, PasswordFormData, ProfileFormData, UserProfileCardProps } from "../user.interface";




const getMemberSince = (user: IUser) => {
  if (user?.createdAt) {
    return user?.createdAt;
  }

  if (!user?.createdAt) {
    return "June 2026";
  }

  const parsedDate = new Date(user?.createdAt);

  if (Number.isNaN(parsedDate.getTime())) {
    return "June 2026";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(parsedDate);
};

export const UserProfileCard = ({
  user,
  onProfileUpdate,
  onPasswordUpdate,
  onDeleteAccount,
}: UserProfileCardProps) => {
  const profile = user as IUser;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initialFullName =
    profile?.firstName ||
    [profile?.firstName, profile?.lastName]
      .filter(Boolean)
      .join(" ") ||
    "Alex Johnson";

  const initialImage =
    profile?.profileImage ||
    "";

  const [profileForm, setProfileForm] =
    useState<ProfileFormData>({
      fullName: initialFullName,
      email: profile?.email || "",
      phoneNumber:
        profile?.phoneNumber || profile?.phoneNumber || "",
      location:
        profile?.location || ""
    });

  const [passwordForm, setPasswordForm] =
    useState<PasswordFormData>({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  const [photoFile, setPhotoFile] = useState<File | null>(
    null,
  );
  const [photoPreview, setPhotoPreview] =
    useState(initialImage);
  const [isSavingProfile, setIsSavingProfile] =
    useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] =
    useState(false);
  const [profileMessage, setProfileMessage] = useState("");
  const [passwordMessage, setPasswordMessage] =
    useState("");

  useEffect(() => {
    const updatedName =
      profile?.firstName ||
      [profile?.firstName, profile?.lastName]
        .filter(Boolean)
        .join(" ") ||
      "Alex Johnson";

    setProfileForm({
      fullName: updatedName,
      email: profile?.email || "",
      phoneNumber:
        profile?.phoneNumber || profile?.phoneNumber || "",
      location:
        profile?.location || ""
    });

    setPhotoPreview(
      profile?.profileImage ||
      "",
    );
  }, [profile?.email, profile?.firstName, profile?.lastName, profile?.location, profile?.phoneNumber, profile?.profileImage, user]);

  const handleProfileChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;

    setProfileForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setProfileMessage("");
  };

  const handlePasswordChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;

    setPasswordForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setPasswordMessage("");
  };

  const handlePhotoChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setProfileMessage(
        "Please select a valid image file.",
      );
      return;
    }

    const maximumSize = 5 * 1024 * 1024;

    if (file.size > maximumSize) {
      setProfileMessage(
        "Profile image must be smaller than 5MB.",
      );
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPhotoPreview(String(reader.result));
      setPhotoFile(file);
      setProfileMessage("");
    };

    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setPhotoPreview("");
    setPhotoFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleProfileSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    try {
      setIsSavingProfile(true);
      setProfileMessage("");

      await onProfileUpdate?.({
        ...profileForm,
        photo: photoFile,
      });

      setProfileMessage(
        "Profile information updated successfully.",
      );
    } catch (error) {
      console.error("Profile update failed:", error);
      setProfileMessage(
        "Unable to update profile information.",
      );
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handlePasswordSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (
      passwordForm.newPassword !==
      passwordForm.confirmPassword
    ) {
      setPasswordMessage(
        "New password and confirmation do not match.",
      );
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      setPasswordMessage(
        "New password must contain at least 8 characters.",
      );
      return;
    }

    try {
      setIsUpdatingPassword(true);
      setPasswordMessage("");

      await onPasswordUpdate?.(passwordForm);

      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setPasswordMessage(
        "Password updated successfully.",
      );
    } catch (error) {
      console.error("Password update failed:", error);
      setPasswordMessage(
        "Unable to update your password.",
      );
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete your account? This action cannot be undone.",
    );

    if (!confirmed) {
      return;
    }

    try {
      await onDeleteAccount?.();
    } catch (error) {
      console.error("Account deletion failed:", error);
    }
  };

  const avatarInitials = profileForm.fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((name) => name.charAt(0).toUpperCase())
    .join("");

  return (
    <main className="container">
      <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Heading */}
        <header className="mb-5">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Manage your account information, membership,
            and adventure preferences.
          </p>
        </header>

        {/* Profile summary */}
        <section className="rounded-md bg-card p-4 sm:p-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative mx-auto shrink-0 sm:mx-0">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-muted text-xl font-semibold sm:h-24 sm:w-24">
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt={profileForm.fullName}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span>{avatarInitials}</span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    fileInputRef.current?.click()
                  }
                  className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-card bg-white text-black transition-transform hover:scale-105"
                  aria-label="Change profile photo"
                >
                  <Camera className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-base font-semibold sm:text-lg">
                  {profileForm.fullName}
                </h2>

                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {profileForm.email ||
                    "alex.johnson@email.com"}
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  onChange={handlePhotoChange}
                  className="hidden"
                />

                <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      fileInputRef.current?.click()
                    }
                  >
                    Upload New
                  </Button>

                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={handleRemovePhoto}
                  >
                    Remove Photo
                  </Button>
                </div>
              </div>
            </div>

            <span className="self-center rounded-full bg-emerald-500/15 px-4 py-2 text-xs font-medium text-emerald-400 sm:self-auto">
              Member since {getMemberSince(profile)}
            </span>
          </div>
        </section>

        {/* Personal information */}
        <form
          onSubmit={handleProfileSubmit}
          className="mt-4 rounded-md bg-card p-4 sm:p-5"
        >
          <h2 className="border-b border-border/50 pb-4 text-sm font-medium sm:text-base">
            Personal Information
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <ProfileInput
              id="full-name"
              name="fullName"
              label="Full name"
              value={profileForm.fullName}
              onChange={handleProfileChange}
              placeholder="Enter your full name"
            />

            <ProfileInput
              id="email"
              name="email"
              type="email"
              label="Email Address"
              value={profileForm.email}
              onChange={handleProfileChange}
              placeholder="Enter your email address"
              disabled
            />

            <ProfileInput
              id="phone-number"
              name="phoneNumber"
              type="tel"
              label="Phone Number"
              value={profileForm.phoneNumber}
              onChange={handleProfileChange}
              placeholder="+1 (555) 123-4567"
            />

            <ProfileInput
              id="location"
              name="location"
              label="Location"
              value={profileForm.location}
              onChange={handleProfileChange}
              placeholder="Denver, Colorado"
            />
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            {profileMessage && (
              <p className="mr-auto text-xs text-muted-foreground">
                {profileMessage}
              </p>
            )}

            <Button
              type="submit"
              variant="secondary"
              disabled={isSavingProfile}
              className="w-full sm:w-auto"
            >
              {isSavingProfile
                ? "Saving..."
                : "Save changes"}
            </Button>
          </div>
        </form>

        {/* Security */}
        <form
          onSubmit={handlePasswordSubmit}
          className="mt-4 rounded-md bg-card p-4 sm:p-5"
        >
          <h2 className="border-b border-border/50 pb-4 text-sm font-medium sm:text-base">
            Security
          </h2>

          <div className="mt-5">
            <ProfileInput
              id="current-password"
              name="currentPassword"
              type="password"
              label="Current password"
              value={passwordForm.currentPassword}
              onChange={handlePasswordChange}
              placeholder="Enter current password"
              autoComplete="current-password"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <ProfileInput
              id="new-password"
              name="newPassword"
              type="password"
              label="New password"
              value={passwordForm.newPassword}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
              autoComplete="new-password"
            />

            <ProfileInput
              id="confirm-password"
              name="confirmPassword"
              type="password"
              label="Confirm password"
              value={passwordForm.confirmPassword}
              onChange={handlePasswordChange}
              placeholder="Confirm new password"
              autoComplete="new-password"
            />
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            {passwordMessage && (
              <p className="mr-auto text-xs text-muted-foreground">
                {passwordMessage}
              </p>
            )}

            <Button
              type="submit"
              variant="secondary"
              disabled={isUpdatingPassword}
              className="w-full sm:w-auto"
            >
              {isUpdatingPassword
                ? "Updating..."
                : "Update password"}
            </Button>
          </div>
        </form>

        {/* Danger zone */}
        <section className="mt-4 rounded-md bg-card p-4 sm:p-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-medium sm:text-base">
                Danger Zone
              </h2>

              <p className="mt-3 max-w-md text-xs leading-5 text-muted-foreground">
                Permanently remove your account and all
                associated data. This action cannot be
                undone.
              </p>
            </div>

            <Button
              type="button"
              variant="destructive"
              onClick={handleDeleteAccount}
              className="w-full bg-red-100 text-red-600 hover:bg-red-200 sm:w-auto"
            >
              Delete account
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

interface ProfileInputProps {
  id: string;
  name: keyof ProfileFormData | keyof PasswordFormData;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: string;
}

const ProfileInput = ({
  id,
  name,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false,
  autoComplete,
}: ProfileInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs text-muted-foreground"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        className="
                    h-11
                    w-full
                    rounded-md
                    border
                    border-border/50
                    bg-background
                    px-3
                    text-sm
                    outline-none
                    transition-colors
                    placeholder:text-muted-foreground/60
                    focus:border-primary
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
      />
    </div>
  );
};