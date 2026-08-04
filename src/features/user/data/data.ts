/* eslint-disable @typescript-eslint/no-unused-vars */
import { IRole, IUser } from "../user.interface";

// Note: Ensure your IUser interface includes: token: string;

const adminUser: IUser = {
    id: "507f191e810c19729de860ea", // Valid MongoDB ObjectID format
    firstName: "Sarah",
    lastName: "Connor",
    email: "sarah.connor@techflow.com",
    profileImage: "https://i.pravatar.cc/150?img=5",
    location: "United States",
    phoneNumber: "+1 (555) 987-6543",
    role: IRole.ADMIN,
    isActive: true,
    hasActiveSubscription: true,
    stripeCustomerId: "cus_AdminStripeID",
    createdAt: "2024-01-10T09:00:00Z",
    updatedAt: "2026-07-29T10:00:00Z",
};

// 2. The Standard User
const standardUser: IUser = {
    id: "507f191e810c19729de860eb", // Valid MongoDB ObjectID format
    firstName: "James",
    lastName: "Smith",
    email: "james.smith@gmail.com",
    profileImage: null,
    location: "Canada",
    phoneNumber: "+1 (416) 555-0199",
    role: IRole.USER,
    isActive: true,
    hasActiveSubscription: false,
    stripeCustomerId: "",
    createdAt: "2026-06-15T14:30:00Z",
    updatedAt: "2026-07-20T08:15:00Z",
};

// 3. The Partner User
const partnerUser: IUser = {
    id: "507f191e810c19729de860ec", // Valid MongoDB ObjectID format
    firstName: "Elena",
    lastName: "Rodriguez",
    email: "elena@globalpartners.net",
    profileImage: "https://i.pravatar.cc/150?img=9",
    location: "Spain",
    phoneNumber: "+34 91 555 0123",
    role: IRole.PARTNER,
    isActive: true,
    hasActiveSubscription: true,
    stripeCustomerId: "cus_PartnerStripeID",
    createdAt: "2025-11-05T11:20:00Z",
    updatedAt: "2026-07-28T16:45:00Z",
};

const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwN2YxOTFlODEwYzE5NzI5ZGU4NjBlYSIsImZpcnN0TmFtZSI6IlNhcmFoIiwibGFzdE5hbWUiOiJDb25ub3IiLCJlbWFpbCI6InNhcmFoLmNvbm5vckB0ZWNoZmxvdy5jb20iLCJwcm9maWxlSW1hZ2UiOiJodHRwczovL2kucHJhdmF0YXIuY2MvMTUwP2ltZz01IiwiY29tcGFueU5hbWUiOiJUZWNoRmxvdyBJbnRlcm5hbCIsImpvYlRpdGxlIjoiQ2hpZWYgVGVjaG5vbG9neSBPZmZpY2VyIiwiam9iRnVuY3Rpb24iOiJFeGVjdXRpdmUiLCJjb3VudHJ5IjoiVW5pdGVkIFN0YXRlcyIsImpvYkxldmVsIjoiQy1MZXZlbCIsImNvbXBhbnlJbmR1c3RyeSI6IlNvZnR3YXJlICYgVGVjaG5vbG9neSIsImNvbXBhbnlTaXplIjoiMjAxLTUwMCBlbXBsb3llZXMiLCJwb3N0YWxDb2RlIjoiOTQxMDMiLCJwaG9uZSI6IisxICg1NTUpIDk4Ny02NTQzIiwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJyb2xlIjoiQURNSU4iLCJpc0FjdGl2ZSI6dHJ1ZSwiaGFzQWN0aXZlU3Vic2NyaXB0aW9uIjp0cnVlLCJzdHJpcGVDdXN0b21lcklkIjoiY3VzX0FkbWluU3RyaXBlSUQiLCJjcmVhdGVkQXQiOiIyMDI0LTAxLTEwVDA5OjAwOjAwWiIsInVwZGF0ZWRBdCI6IjIwMjYtMDctMjlUMTA6MDA6MDBaIn0.7mU_0YAF58I1luapuFh4rD1GyK6dSb6nRFnQ8re24Mo"

const partnerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwN2YxOTFlODEwYzE5NzI5ZGU4NjBlYyIsImZpcnN0TmFtZSI6IkVsZW5hIiwibGFzdE5hbWUiOiJSb2RyaWd1ZXoiLCJlbWFpbCI6ImVsZW5hQGdsb2JhbHBhcnRuZXJzLm5ldCIsInByb2ZpbGVJbWFnZSI6Imh0dHBzOi8vaS5wcmF2YXRhci5jYy8xNTA_aW1nPTkiLCJjb21wYW55TmFtZSI6Ikdsb2JhbCBQYXJ0bmVycyBMTEMiLCJqb2JUaXRsZSI6IkFjY291bnQgTWFuYWdlciIsImpvYkZ1bmN0aW9uIjoiU2FsZXMiLCJjb3VudHJ5IjoiU3BhaW4iLCJqb2JMZXZlbCI6IlNlbmlvciIsImNvbXBhbnlJbmR1c3RyeSI6IkNvbnN1bHRpbmciLCJjb21wYW55U2l6ZSI6IjUwMS0xMDAwIGVtcGxveWVlcyIsInBvc3RhbENvZGUiOiIyODAwMSIsInBob25lIjoiKzM0IDkxIDU1NSAwMTIzIiwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJyb2xlIjoiUEFSVE5FUiIsImlzQWN0aXZlIjp0cnVlLCJoYXNBY3RpdmVTdWJzY3JpcHRpb24iOnRydWUsInN0cmlwZUN1c3RvbWVySWQiOiJjdXNfUGFydG5lclN0cmlwZUlEIiwiY3JlYXRlZEF0IjoiMjAyNS0xMS0wNVQxMToyMDowMFoiLCJ1cGRhdGVkQXQiOiIyMDI2LTA3LTI4VDE2OjQ1OjAwWiJ9.vjGXshVKXkuKA7-7MMYHjS1sGNeq14GHbQVZxcspk9Q"

const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwN2YxOTFlODEwYzE5NzI5ZGU4NjBlYiIsImZpcnN0TmFtZSI6IkphbWVzIiwibGFzdE5hbWUiOiJTbWl0aCIsImVtYWlsIjoiamFtZXMuc21pdGhAZ21haWwuY29tIiwicHJvZmlsZUltYWdlIjpudWxsLCJjb21wYW55TmFtZSI6IkZyZWVsYW5jZSIsImpvYlRpdGxlIjoiRnJvbnRlbmQgRGV2ZWxvcGVyIiwiam9iRnVuY3Rpb24iOiJFbmdpbmVlcmluZyIsImNvdW50cnkiOiJDYW5hZGEiLCJqb2JMZXZlbCI6Ik1pZC1MZXZlbCIsImNvbXBhbnlJbmR1c3RyeSI6IkRlc2lnbiAmIENyZWF0aXZlIiwiY29tcGFueVNpemUiOiIxIGVtcGxveWVlIiwicG9zdGFsQ29kZSI6Ik01ViAyVDYiLCJwaG9uZSI6IisxICg0MTYpIDU1NS0wMTk5IiwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJyb2xlIjoiVVNFUiIsImlzQWN0aXZlIjp0cnVlLCJoYXNBY3RpdmVTdWJzY3JpcHRpb24iOmZhbHNlLCJzdHJpcGVDdXN0b21lcklkIjoiIiwiY3JlYXRlZEF0IjoiMjAyNi0wNi0xNVQxNDozMDowMFoiLCJ1cGRhdGVkQXQiOiIyMDI2LTA3LTIwVDA4OjE1OjAwWiJ9.0kp431kZ0GRKlY7arS_aPiYMu-IIJpzewxyhXvCRtfE"

// export const currentUser: IUser | null = null;
export const currentUser: IUser = adminUser;
// export const currentUser: IUser = standardUser;
const getTokenForUser = (user: IUser | null): string => {
    if (!user) return "";

    switch (user.role) {
        case IRole.ADMIN:
            return adminToken;
        case IRole.USER:
            return userToken;
        case IRole.PARTNER:
            return partnerToken;
        default:
            return "";
    }
};

export const currentToken: string = getTokenForUser(currentUser);