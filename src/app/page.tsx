import HeroSection from '@/components/sections/HeroSection';
import LoanInfoSection from '@/components/sections/LoanInfoSection';
import BlogListingSection from '@/components/sections/BlogListingSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LoanInfoSection />
      <BlogListingSection />
      <AboutUsSection />
      <ContactSection />
    </>
  );
}
