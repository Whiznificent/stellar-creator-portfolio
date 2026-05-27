/**
 * Shared domain types for the Stellar mobile app.
 */

// ─── Rating / Review ──────────────────────────────────────────────────────────

export type ReviewStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface Review {
  id: string;
  creatorId: string;
  reviewerId: string;
  reviewerName: string;
  reviewerAvatar?: string;
  rating: number; // 1–5
  title: string;
  body: string;
  isVerifiedPurchase: boolean;
  helpfulCount: number;
  notHelpfulCount: number;
  status: ReviewStatus;
  createdAt: string; // ISO-8601
  updatedAt: string;
}

export interface RatingSummary {
  average: number;       // 0.0–5.0
  totalCount: number;
  distribution: Record<1 | 2 | 3 | 4 | 5, number>; // star → count
}

export type ReviewSortOption = 'newest' | 'highest' | 'lowest' | 'helpful';
export type ReviewFilterOption = 0 | 1 | 2 | 3 | 4 | 5; // 0 = all

export interface ReviewFormData {
  rating: number;
  title: string;
  body: string;
}

// ─── Activity / Timeline ──────────────────────────────────────────────────────

export type ActivityEventType =
  | 'bounty_posted'
  | 'bounty_applied'
  | 'bounty_accepted'
  | 'bounty_rejected'
  | 'bounty_completed'
  | 'review_received'
  | 'review_left'
  | 'payment_received'
  | 'payment_sent'
  | 'message_received'
  | 'profile_viewed'
  | 'match_found'
  | 'dispute_opened'
  | 'dispute_resolved';

export type ActivityFilterType =
  | 'all'
  | 'bounties'
  | 'reviews'
  | 'payments'
  | 'messages'
  | 'applications';

export interface ActivityEvent {
  id: string;
  type: ActivityEventType;
  title: string;
  subtitle?: string;
  amount?: number;       // XLM amount for payment events
  currency?: string;
  relatedId?: string;    // bountyId, reviewId, etc.
  relatedName?: string;  // creator/bounty name
  avatarUrl?: string;
  read: boolean;
  createdAt: string;     // ISO-8601
}

export interface ActivitySummary {
  totalEvents: number;
  unreadCount: number;
  weeklyEarnings: number;
  weeklyBounties: number;
}

// ─── Share ────────────────────────────────────────────────────────────────────

export type ShareContentType = 'profile' | 'bounty' | 'review' | 'achievement';

export interface SharePayload {
  type: ShareContentType;
  title: string;
  message: string;
  url: string;
  /** Optional image URL for rich share previews */
  imageUrl?: string;
}

// ─── User / Creator ───────────────────────────────────────────────────────────

export interface CreatorProfile {
  id: string;
  userId: string;
  displayName: string;
  bio?: string;
  avatar?: string;
  discipline?: string;
  skills: string[];
  rating: number;
  completedProjects: number;
  verified: boolean;
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export type RootStackParamList = {
  MainTabs: undefined;
  RatingScreen: { creatorId: string; creatorName: string };
  ActivityTimeline: { userId?: string };
  ShareScreen: SharePayload;
  LanguageSettings: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Creators: undefined;
  Bounties: undefined;
  Activity: undefined;
  Profile: undefined;
};
