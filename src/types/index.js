// Navigation types
export const NavigationItem = {
  id: String,
  label: String,
  href: String,
};

// Service types
export const Service = {
  id: String,
  title: String,
  description: String,
  icon: String,
  features: Array,
};

// Project types
export const Project = {
  id: String,
  title: String,
  description: String,
  color: String,
};

// Form field types
export const FormField = {
  id: String,
  label: String,
  type: String,
  required: Boolean,
  icon: String,
};

// Social link types
export const SocialLink = {
  id: String,
  icon: String,
  href: String,
};

// Company info types
export const CompanyInfo = {
  name: String,
  email: String,
  copyright: String,
};
